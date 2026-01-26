from rest_framework import serializers
from .models import Industry, Template, Review


class TemplateSerializer(serializers.ModelSerializer):
    """Serializer for Template model"""
    pdf_url = serializers.SerializerMethodField()
    preview_image_url = serializers.SerializerMethodField()

    class Meta:
        model = Template
        fields = [
            'id',
            'name',
            'pdf_url',
            'preview_image_url',
            'description',
            'order'
        ]

    def get_pdf_url(self, obj):
        """Return full URL for PDF file"""
        request = self.context.get('request')
        if obj.pdf_file and request:
            return request.build_absolute_uri(obj.pdf_file.url)
        return None

    def get_preview_image_url(self, obj):
        """Return full URL for preview image"""
        request = self.context.get('request')
        if obj.preview_image and request:
            return request.build_absolute_uri(obj.preview_image.url)
        return None


class IndustryListSerializer(serializers.ModelSerializer):
    """Serializer for Industry list (without templates)"""
    template_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Industry
        fields = [
            'id',
            'slug',
            'name',
            'description',
            'icon',
            'gradient',
            'template_count',
            'order'
        ]


class IndustryDetailSerializer(serializers.ModelSerializer):
    """Serializer for Industry detail (with templates)"""
    templates = serializers.SerializerMethodField()
    template_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Industry
        fields = [
            'id',
            'slug',
            'name',
            'description',
            'icon',
            'gradient',
            'templates',
            'template_count',
            'order'
        ]

    def get_templates(self, obj):
        """Return only active templates"""
        templates = obj.templates.filter(is_active=True).order_by('order', 'name')
        return TemplateSerializer(
            templates,
            many=True,
            context=self.context
        ).data


class ReviewSerializer(serializers.ModelSerializer):
    """Serializer for Review model"""
    
    class Meta:
        model = Review
        fields = [
            'id',
            'name',
            'company',
            'role',
            'service',
            'review_text',
            'color_start',
            'color_end',
            'submitted_at'
        ]
        read_only_fields = ['id', 'submitted_at']

    def create(self, validated_data):
        """Create new review with pending status"""
        validated_data['status'] = 'pending'
        return super().create(validated_data)


class ReviewListSerializer(serializers.ModelSerializer):
    """Serializer for displaying approved reviews"""
    
    class Meta:
        model = Review
        fields = [
            'id',
            'name',
            'company',
            'role',
            'service',
            'review_text',
            'color_start',
            'color_end',
        ]
