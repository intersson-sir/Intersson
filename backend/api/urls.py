from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IndustryViewSet, TemplateViewSet, ReviewViewSet

# Create router and register viewsets
router = DefaultRouter()
router.register(r'industries', IndustryViewSet, basename='industry')
router.register(r'templates', TemplateViewSet, basename='template')
router.register(r'reviews', ReviewViewSet, basename='review')

urlpatterns = [
    path('', include(router.urls)),
]
