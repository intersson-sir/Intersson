export interface Template {
    id: string;
    name: string;
    pdfUrl: string; // This will mock a PDF link
    previewImage: string; // Placeholder for now or a generic image
}

export interface Industry {
    id: string;
    slug: string;
    title: string;
    description: string;
    icon: string;
    gradient: string;
    templates: Template[];
}

export const industries: Industry[] = [
    {
        id: 'business',
        slug: 'business-services',
        title: 'Business & Services',
        description: 'Professional templates for consulting, agencies, and service providers.',
        icon: '/assets/90562c50fdfd079c0ed41d0c86258f942d30195a.svg',
        gradient: 'linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)',
        templates: [
            { id: '1', name: 'Consulting Prime', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '2', name: 'Agency Modern', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '3', name: 'Service Pro', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
    {
        id: 'ecommerce',
        slug: 'ecommerce',
        title: 'E-commerce',
        description: 'High-conversion online store designs to boost your sales.',
        icon: '/assets/1652c3c10800008bb143ddd70471f82229302885.svg',
        gradient: 'linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)',
        templates: [
            { id: '4', name: 'Shopify Style', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '5', name: 'Minimal Store', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
    {
        id: 'personal',
        slug: 'personal-brands',
        title: 'Personal Brands',
        description: 'Stand out with a unique portfolio or personal website.',
        icon: '/assets/9f0a87cfee1ec41beb28b47e5dcf5e7532b5585b.svg',
        gradient: 'linear-gradient(135deg, #FF9500 0%, #FF6B00 100%)',
        templates: [
            { id: '6', name: 'Influencer One', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '7', name: 'Portfolio Clean', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
    {
        id: 'restaurants',
        slug: 'restaurants-delivery',
        title: 'Restaurants & Delivery',
        description: 'Appetizing designs for restaurants, cafes, and food delivery.',
        icon: '/assets/89e136283dd51fddb3fc4b2690b593ee4fa206c8.svg',
        gradient: 'linear-gradient(135deg, #FF5B5B 0%, #FF3333 100%)',
        templates: [
            { id: '8', name: 'Taste Good', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '9', name: 'Burger Joint', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
    {
        id: 'fashion',
        slug: 'medicine-beauty',
        title: 'Medicine & Beauty',
        description: 'Clean and trustworthy designs for clinics, salons, and wellness centers.',
        icon: '/assets/19a4baa3c6b1498c80155afecfead2efeae90869.svg',
        gradient: 'linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)',
        templates: [
            { id: '10', name: 'Derma Clinic', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '11', name: 'Beauty Salon', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
    {
        id: 'construction',
        slug: 'construction-real-estate',
        title: 'Construction & Real Estate',
        description: 'Solid and professional templates for construction and agencies.',
        icon: '/assets/1a13567ccf7c5ffd91582b2a53463d17d3bc44c2.svg',
        gradient: 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)',
        templates: [
            { id: '12', name: 'Build It', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '13', name: 'Estate Agent', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
    {
        id: 'education',
        slug: 'education',
        title: 'Education',
        description: 'Engaging layouts for schools, courses, and educational platforms.',
        icon: '/assets/f6e5add6d7e675e7e984dd5d372d76e5e9fe46dc.svg',
        gradient: 'linear-gradient(135deg, #615FFF 0%, #2B7FFF 100%)',
        templates: [
            { id: '14', name: 'Academy', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '15', name: 'Online Course', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
    {
        id: 'tech',
        slug: 'tech-saas',
        title: 'Tech / SaaS',
        description: 'Modern and sleek designs for technology startups and SaaS products.',
        icon: '/assets/2e15740500d1b41eee89eb97a91123a361501fe4.svg',
        gradient: 'linear-gradient(135deg, #00D4D4 0%, #00A8A8 100%)',
        templates: [
            { id: '16', name: 'App Landing', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '17', name: 'SaaS Dashboard', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
    {
        id: 'events',
        slug: 'events',
        title: 'Events',
        description: 'Captivating designs for conferences, weddings, and event planning.',
        icon: '/assets/454a1b645f5ec85709725062b685a3bd743b899e.svg',
        gradient: 'linear-gradient(135deg, #9B5FFF 0%, #7B3FFF 100%)',
        templates: [
            { id: '18', name: 'Conference 2026', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '19', name: 'Wedding Planner', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
    {
        id: 'sports',
        slug: 'fitness-sports',
        title: 'Fitness & Sports',
        description: 'Energetic themes for gyms, trainers, and sports clubs.',
        icon: '/assets/a72b290d1a23addacbd7561d2d23896361a8ba54.svg',
        gradient: 'linear-gradient(135deg, #00E5A0 0%, #00B87C 100%)',
        templates: [
            { id: '20', name: 'Gym Hero', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
            { id: '21', name: 'Yoga Studio', pdfUrl: '#', previewImage: '/assets/preview-placeholder.jpg' },
        ]
    },
];
