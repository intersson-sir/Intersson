from django.contrib import admin
from django.utils.html import format_html
from django.utils import timezone
from .models import Industry, Template, Review


@admin.register(Industry)
class IndustryAdmin(admin.ModelAdmin):
    """Admin interface for Industry model"""
    list_display = ['name', 'slug', 'template_count', 'order', 'created_at']
    list_editable = ['order']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ['created_at', 'updated_at', 'template_count']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'slug', 'description')
        }),
        ('Display Settings', {
            'fields': ('icon', 'gradient', 'order')
        }),
        ('Statistics', {
            'fields': ('template_count', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def template_count(self, obj):
        """Display template count for each industry"""
        count = obj.template_count
        return format_html(
            '<span style="background-color: #4CAF50; color: white; '
            'padding: 3px 10px; border-radius: 12px; font-weight: bold;">{}</span>',
            count
        )
    template_count.short_description = 'Templates'


@admin.register(Template)
class TemplateAdmin(admin.ModelAdmin):
    """Admin interface for Template model"""
    list_display = ['name', 'industry', 'is_active', 'order', 'pdf_preview', 'created_at']
    list_filter = ['industry', 'is_active', 'created_at']
    list_editable = ['order', 'is_active']
    search_fields = ['name', 'description']
    autocomplete_fields = ['industry']
    readonly_fields = ['created_at', 'updated_at', 'pdf_link_preview']
    
    fieldsets = (
        ('Select Industry', {
            'fields': ('industry',),
            'description': 'First, select which industry this template belongs to'
        }),
        ('Template Information', {
            'fields': ('name', 'description')
        }),
        ('Files', {
            'fields': ('pdf_file', 'preview_image', 'pdf_link_preview'),
            'description': 'Upload the PDF template and optionally a preview image'
        }),
        ('Settings', {
            'fields': ('is_active', 'order')
        }),
        ('Metadata', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def pdf_preview(self, obj):
        """Display PDF file indicator"""
        if obj.pdf_file:
            return format_html(
                '<a href="{}" target="_blank" style="color: #2196F3;">📄 View PDF</a>',
                obj.pdf_file.url
            )
        return format_html('<span style="color: #999;">No PDF</span>')
    pdf_preview.short_description = 'PDF File'

    def pdf_link_preview(self, obj):
        """Show clickable PDF link in admin"""
        if obj.pdf_file:
            return format_html(
                '<a href="{}" target="_blank" class="button">Open PDF in New Tab</a>',
                obj.pdf_file.url
            )
        return "No PDF uploaded yet"
    pdf_link_preview.short_description = 'PDF Preview'


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    """Admin interface for Review model with moderation actions"""
    list_display = ['name', 'company', 'service', 'status_badge', 'submitted_at', 'display_order']
    list_filter = ['status', 'service', 'submitted_at']
    list_editable = ['display_order']
    search_fields = ['name', 'company', 'review_text']
    readonly_fields = ['submitted_at', 'reviewed_at', 'review_preview']
    actions = ['approve_reviews', 'reject_reviews']
    
    fieldsets = (
        ('Client Information', {
            'fields': ('name', 'company', 'role', 'service')
        }),
        ('Review Content', {
            'fields': ('review_text', 'review_preview')
        }),
        ('Moderation', {
            'fields': ('status', 'submitted_at', 'reviewed_at'),
            'description': 'Use the actions dropdown to approve or reject multiple reviews at once'
        }),
        ('Display Settings', {
            'fields': ('color_start', 'color_end', 'display_order'),
            'description': 'Customize the appearance of approved reviews on the website'
        }),
    )

    def status_badge(self, obj):
        """Display colorful status badge"""
        colors = {
            'pending': '#FF9800',
            'approved': '#4CAF50',
            'rejected': '#F44336'
        }
        return format_html(
            '<span style="background-color: {}; color: white; '
            'padding: 5px 12px; border-radius: 12px; font-weight: bold; '
            'text-transform: uppercase; font-size: 11px;">{}</span>',
            colors.get(obj.status, '#999'),
            obj.status
        )
    status_badge.short_description = 'Status'

    def review_preview(self, obj):
        """Show styled preview of the review"""
        gradient = f"linear-gradient(135deg, {obj.color_start}, {obj.color_end})"
        return format_html(
            '<div style="background: {}; padding: 20px; border-radius: 8px; '
            'color: white; max-width: 600px;">'
            '<div style="font-size: 14px; margin-bottom: 10px;">'
            '<strong>{}</strong> - {} at {}</div>'
            '<div style="font-style: italic;">"{}"</div>'
            '</div>',
            gradient,
            obj.name,
            obj.role,
            obj.company,
            obj.review_text
        )
    review_preview.short_description = 'Review Preview'

    def approve_reviews(self, request, queryset):
        """Bulk action to approve reviews"""
        updated = 0
        for review in queryset:
            if review.status != 'approved':
                review.approve()
                updated += 1
        self.message_user(
            request,
            f'{updated} review(s) have been approved and will now appear on the website.'
        )
    approve_reviews.short_description = '✓ Approve selected reviews'

    def reject_reviews(self, request, queryset):
        """Bulk action to reject reviews"""
        updated = 0
        for review in queryset:
            if review.status != 'rejected':
                review.reject()
                updated += 1
        self.message_user(
            request,
            f'{updated} review(s) have been rejected.',
            level='warning'
        )
    reject_reviews.short_description = '✗ Reject selected reviews'

    def get_queryset(self, request):
        """Customize queryset to show pending reviews first"""
        qs = super().get_queryset(request)
        return qs.order_by(
            models.Case(
                models.When(status='pending', then=0),
                models.When(status='approved', then=1),
                models.When(status='rejected', then=2),
                default=3,
            ),
            '-submitted_at'
        )


# Import models for queryset ordering
from django.db import models
