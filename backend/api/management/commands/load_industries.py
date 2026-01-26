from django.core.management.base import BaseCommand
from api.models import Industry


class Command(BaseCommand):
    help = 'Load initial 10 industries into the database'

    def handle(self, *args, **options):
        """Load the 10 existing industries"""
        
        industries_data = [
            {
                'name': 'Business & Services',
                'slug': 'business-services',
                'description': 'Professional templates for consulting, agencies, and service providers.',
                'icon': '/assets/90562c50fdfd079c0ed41d0c86258f942d30195a.svg',
                'gradient': 'linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)',
                'order': 1
            },
            {
                'name': 'E-commerce',
                'slug': 'ecommerce',
                'description': 'High-conversion online store designs to boost your sales.',
                'icon': '/assets/1652c3c10800008bb143ddd70471f82229302885.svg',
                'gradient': 'linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)',
                'order': 2
            },
            {
                'name': 'Personal Brands',
                'slug': 'personal-brands',
                'description': 'Stand out with a unique portfolio or personal website.',
                'icon': '/assets/9f0a87cfee1ec41beb28b47e5dcf5e7532b5585b.svg',
                'gradient': 'linear-gradient(135deg, #FF9500 0%, #FF6B00 100%)',
                'order': 3
            },
            {
                'name': 'Restaurants & Delivery',
                'slug': 'restaurants-delivery',
                'description': 'Appetizing designs for restaurants, cafes, and food delivery.',
                'icon': '/assets/89e136283dd51fddb3fc4b2690b593ee4fa206c8.svg',
                'gradient': 'linear-gradient(135deg, #FF5B5B 0%, #FF3333 100%)',
                'order': 4
            },
            {
                'name': 'Medicine & Beauty',
                'slug': 'medicine-beauty',
                'description': 'Clean and trustworthy designs for clinics, salons, and wellness centers.',
                'icon': '/assets/19a4baa3c6b1498c80155afecfead2efeae90869.svg',
                'gradient': 'linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)',
                'order': 5
            },
            {
                'name': 'Construction & Real Estate',
                'slug': 'construction-real-estate',
                'description': 'Solid and professional templates for construction and agencies.',
                'icon': '/assets/1a13567ccf7c5ffd91582b2a53463d17d3bc44c2.svg',
                'gradient': 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)',
                'order': 6
            },
            {
                'name': 'Education',
                'slug': 'education',
                'description': 'Engaging layouts for schools, courses, and educational platforms.',
                'icon': '/assets/f6e5add6d7e675e7e984dd5d372d76e5e9fe46dc.svg',
                'gradient': 'linear-gradient(135deg, #615FFF 0%, #2B7FFF 100%)',
                'order': 7
            },
            {
                'name': 'Tech / SaaS',
                'slug': 'tech-saas',
                'description': 'Modern and sleek designs for technology startups and SaaS products.',
                'icon': '/assets/2e15740500d1b41eee89eb97a91123a361501fe4.svg',
                'gradient': 'linear-gradient(135deg, #00D4D4 0%, #00A8A8 100%)',
                'order': 8
            },
            {
                'name': 'Events',
                'slug': 'events',
                'description': 'Captivating designs for conferences, weddings, and event planning.',
                'icon': '/assets/454a1b645f5ec85709725062b685a3bd743b899e.svg',
                'gradient': 'linear-gradient(135deg, #9B5FFF 0%, #7B3FFF 100%)',
                'order': 9
            },
            {
                'name': 'Fitness & Sports',
                'slug': 'fitness-sports',
                'description': 'Energetic themes for gyms, trainers, and sports clubs.',
                'icon': '/assets/a72b290d1a23addacbd7561d2d23896361a8ba54.svg',
                'gradient': 'linear-gradient(135deg, #00E5A0 0%, #00B87C 100%)',
                'order': 10
            },
        ]

        self.stdout.write('Loading industries...')
        
        created_count = 0
        updated_count = 0

        for industry_data in industries_data:
            industry, created = Industry.objects.update_or_create(
                slug=industry_data['slug'],
                defaults=industry_data
            )
            
            if created:
                created_count += 1
                self.stdout.write(
                    self.style.SUCCESS(f'✓ Created: {industry.name}')
                )
            else:
                updated_count += 1
                self.stdout.write(
                    self.style.WARNING(f'↻ Updated: {industry.name}')
                )

        self.stdout.write('\n' + '=' * 50)
        self.stdout.write(
            self.style.SUCCESS(
                f'\n✓ Successfully loaded {len(industries_data)} industries'
            )
        )
        self.stdout.write(f'  - Created: {created_count}')
        self.stdout.write(f'  - Updated: {updated_count}')
        self.stdout.write('=' * 50 + '\n')
