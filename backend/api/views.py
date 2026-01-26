from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Industry, Template, Review
from .serializers import (
    IndustryListSerializer,
    IndustryDetailSerializer,
    TemplateSerializer,
    ReviewSerializer,
    ReviewListSerializer
)


class IndustryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for Industry model
    - list: Get all industries with template counts
    - retrieve: Get single industry with all templates
    """
    queryset = Industry.objects.all().order_by('order', 'name')
    lookup_field = 'slug'

    def get_serializer_class(self):
        """Use different serializers for list and detail views"""
        if self.action == 'retrieve':
            return IndustryDetailSerializer
        return IndustryListSerializer


class TemplateViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for Template model
    - list: Get all active templates
    - retrieve: Get single template
    """
    queryset = Template.objects.filter(is_active=True).order_by('industry', 'order', 'name')
    serializer_class = TemplateSerializer

    def get_queryset(self):
        """Filter templates by industry if specified"""
        queryset = super().get_queryset()
        industry_slug = self.request.query_params.get('industry', None)
        
        if industry_slug:
            queryset = queryset.filter(industry__slug=industry_slug)
        
        return queryset


class ReviewViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Review model
    - list: Get all approved reviews
    - create: Submit new review (goes to pending)
    - retrieve: Get single review
    """
    queryset = Review.objects.all()
    
    def get_serializer_class(self):
        """Use different serializers for list and create"""
        if self.action == 'create':
            return ReviewSerializer
        return ReviewListSerializer

    def get_queryset(self):
        """Return only approved reviews, ordered by display_order"""
        return Review.objects.filter(
            status='approved'
        ).order_by('display_order', '-submitted_at')

    def create(self, request, *args, **kwargs):
        """
        Create a new review
        Reviews are automatically set to pending status
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        return Response(
            {
                'message': 'Thank you for your review! It has been submitted for moderation.',
                'review': serializer.data
            },
            status=status.HTTP_201_CREATED
        )
