from django.db import models
from django.utils.text import slugify


class Industry(models.Model):
    """Model for industry categories"""
    name = models.CharField(max_length=200, unique=True, verbose_name="Industry Name")
    slug = models.SlugField(max_length=200, unique=True, verbose_name="URL Slug")
    description = models.TextField(verbose_name="Description")
    icon = models.CharField(max_length=500, verbose_name="Icon Path")
    gradient = models.CharField(
        max_length=200,
        verbose_name="Gradient CSS",
        help_text="CSS gradient for card background"
    )
    order = models.IntegerField(default=0, verbose_name="Display Order")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Industry"
        verbose_name_plural = "Industries"
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    @property
    def template_count(self):
        """Returns the number of templates for this industry"""
        return self.templates.count()


class Template(models.Model):
    """Model for PDF templates"""
    industry = models.ForeignKey(
        Industry,
        on_delete=models.CASCADE,
        related_name='templates',
        verbose_name="Industry"
    )
    name = models.CharField(max_length=200, verbose_name="Template Name")
    pdf_file = models.FileField(
        upload_to='templates/pdfs/',
        verbose_name="PDF File",
        help_text="Upload the PDF template"
    )
    preview_image = models.ImageField(
        upload_to='templates/previews/',
        blank=True,
        null=True,
        verbose_name="Preview Image",
        help_text="Optional preview image for the template"
    )
    description = models.TextField(
        blank=True,
        verbose_name="Description",
        help_text="Optional description of the template"
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name="Active",
        help_text="Whether this template is visible on the site"
    )
    order = models.IntegerField(default=0, verbose_name="Display Order")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Template"
        verbose_name_plural = "Templates"
        ordering = ['industry', 'order', 'name']

    def __str__(self):
        return f"{self.name} ({self.industry.name})"


class Review(models.Model):
    """Model for client reviews"""
    STATUS_CHOICES = [
        ('pending', 'Pending Review'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]

    name = models.CharField(max_length=200, verbose_name="Full Name")
    company = models.CharField(max_length=200, verbose_name="Company Name")
    role = models.CharField(max_length=200, verbose_name="Role/Position")
    service = models.CharField(max_length=200, verbose_name="Service Provided")
    review_text = models.TextField(verbose_name="Review")
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending',
        verbose_name="Status"
    )
    color_start = models.CharField(
        max_length=7,
        default='#441AAD',
        verbose_name="Gradient Start Color",
        help_text="Hex color code (e.g., #441AAD)"
    )
    color_end = models.CharField(
        max_length=7,
        default='#2A0E6E',
        verbose_name="Gradient End Color",
        help_text="Hex color code (e.g., #2A0E6E)"
    )
    logo = models.ImageField(
        upload_to='reviews/logos/',
        blank=True,
        null=True,
        verbose_name="Company Logo",
        help_text="Optional company logo"
    )
    display_order = models.IntegerField(
        default=0,
        verbose_name="Display Order",
        help_text="Order in which approved reviews appear on the site"
    )
    submitted_at = models.DateTimeField(auto_now_add=True, verbose_name="Submitted At")
    reviewed_at = models.DateTimeField(
        blank=True,
        null=True,
        verbose_name="Reviewed At",
        help_text="When the review was approved/rejected"
    )

    class Meta:
        verbose_name = "Review"
        verbose_name_plural = "Reviews"
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.name} from {self.company} - {self.status}"

    def approve(self):
        """Approve the review"""
        from django.utils import timezone
        self.status = 'approved'
        self.reviewed_at = timezone.now()
        self.save()

    def reject(self):
        """Reject the review"""
        from django.utils import timezone
        self.status = 'rejected'
        self.reviewed_at = timezone.now()
        self.save()
