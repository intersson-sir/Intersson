'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

import AntigravityWrapper from '@/components/AntigravityWrapper';
import Navbar from '@/components/Navbar';
import DiscussButton from '@/components/DiscussButton';
import FeaturesScroll from '@/components/FeaturesScroll';
import CountUp from '@/components/CountUp';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

// Asset Mappings from downloaded files
// Using the order from Figma output to map to logical names
const ICONS = {
  payment: '/assets/fde13eaf788be23e82c4fede7454f58cdfb513d7.svg',
  launch: '/assets/ec70190d3379dbc9a3b104bb3eaa51758e7c76af.svg',
  buy: '/assets/1da7c1bad03c24b2b22b050dc70555c0f8f88a8f.svg',
  management: '/assets/8a6390b73769e926b7dfd4ff320b13664295967e.svg',
  hosting: '/assets/fa3ee9bd31fbe8fa510ef51a497cca852bdfacd3.svg',
  support: '/assets/d645c60acca952092aadb66d43b0fb7333c2a94b.svg',

  // Category Icons (assumed order)
  business: '/assets/90562c50fdfd079c0ed41d0c86258f942d30195a.svg',
  ecommerce: '/assets/1652c3c10800008bb143ddd70471f82229302885.svg',
  personal: '/assets/9f0a87cfee1ec41beb28b47e5dcf5e7532b5585b.svg',
  restaurants: '/assets/89e136283dd51fddb3fc4b2690b593ee4fa206c8.svg',
  fashion: '/assets/19a4baa3c6b1498c80155afecfead2efeae90869.svg',
  construction: '/assets/1a13567ccf7c5ffd91582b2a53463d17d3bc44c2.svg',
  education: '/assets/f6e5add6d7e675e7e984dd5d372d76e5e9fe46dc.svg',
  tech: '/assets/2e15740500d1b41eee89eb97a91123a361501fe4.svg',
  events: '/assets/454a1b645f5ec85709725062b685a3bd743b899e.svg',
  sports: '/assets/a72b290d1a23addacbd7561d2d23896361a8ba54.svg',

  // UI Icons
  code: '/assets/fdeec34e64b35c3db480c688d12a95346b9bfebf.svg',
  wrench: '/assets/16b897e7c5ea01af9096f4d6927fd7decf395561.svg'
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      icon: ICONS.payment,
      title: "No Upfront Payment",
      text: "Start with just a monthly subscription. No $1000-$3000 initial investment required.",
      gradient: "linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)",
      hue: 190
    },
    {
      icon: ICONS.launch,
      title: "Launch in 1-3 Days",
      text: "Choose from ready-made templates and get your custom website live in days.",
      gradient: "linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)",
      hue: 300
    },
    {
      icon: ICONS.buy,
      title: "Buy Anytime",
      text: "Purchase full ownership of your website (domain + files) whenever you're ready.",
      gradient: "linear-gradient(135deg, #FF9500 0%, #FF6B00 100%)",
      hue: 30
    },
    {
      icon: ICONS.management,
      title: "Easy Content Management",
      text: "Edit text and images through a simple dashboard. Request changes anytime.",
      gradient: "linear-gradient(135deg, #00E5A0 0%, #00B87C 100%)",
      hue: 160
    },
    {
      icon: ICONS.hosting,
      title: "Hosting Included",
      text: "We handle all hosting and maintenance while your subscription is active.",
      gradient: "linear-gradient(135deg, #FF5B5B 0%, #FF3333 100%)",
      hue: 0
    },
    {
      icon: ICONS.support,
      title: "24/7 Support",
      text: "Get help whenever you need it. Technical support is included in all plans.",
      gradient: "linear-gradient(135deg, #615FFF 0%, #2B7FFF 100%)",
      hue: 230
    }
  ];

  const industries = [
    {
      icon: ICONS.business,
      title: "Business & Services",
      count: "15 templates",
      gradient: "linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)",
      slug: "business-services"
    },
    {
      icon: ICONS.ecommerce,
      title: "E-commerce",
      count: "20 templates",
      gradient: "linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)",
      slug: "ecommerce"
    },
    {
      icon: ICONS.personal,
      title: "Personal Brands",
      count: "12 templates",
      gradient: "linear-gradient(135deg, #FF9500 0%, #FF6B00 100%)",
      slug: "personal-brands"
    },
    {
      icon: ICONS.restaurants,
      title: "Restaurants & Delivery",
      count: "10 templates",
      gradient: "linear-gradient(135deg, #FF5B5B 0%, #FF3333 100%)",
      slug: "restaurants-delivery"
    },
    {
      icon: ICONS.fashion,
      title: "Medicine & Beauty",
      count: "14 templates",
      gradient: "linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)",
      slug: "medicine-beauty"
    },
    {
      icon: ICONS.construction,
      title: "Construction & RE",
      count: "11 templates",
      gradient: "linear-gradient(135deg, #6B7280 0%, #4B5563 100%)",
      slug: "construction-real-estate"
    },
    {
      icon: ICONS.education,
      title: "Education",
      count: "13 templates",
      gradient: "linear-gradient(135deg, #615FFF 0%, #2B7FFF 100%)",
      slug: "education"
    },
    {
      icon: ICONS.tech,
      title: "Tech / SaaS",
      count: "18 templates",
      gradient: "linear-gradient(135deg, #00D4D4 0%, #00A8A8 100%)",
      slug: "tech-saas"
    },
    {
      icon: ICONS.events,
      title: "Events",
      count: "9 templates",
      gradient: "linear-gradient(135deg, #9B5FFF 0%, #7B3FFF 100%)",
      slug: "events"
    },
    {
      icon: ICONS.sports,
      title: "Fitness & Sports",
      count: "10 templates",
      gradient: "linear-gradient(135deg, #00E5A0 0%, #00B87C 100%)",
      slug: "fitness-sports"
    }
  ];

  return (
    <main className={styles.main}>
      {/* Background Effects - Fixed full-screen canvas */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <AntigravityWrapper
          color="#6c136c"
          count={150}
          magnetRadius={31}
          ringRadius={16}
          waveSpeed={1.9}
          waveAmplitude={1}
          fieldStrength={2}
          particleSize={1}
          autoAnimate={true}
        />
      </div>

      {/* Original gradient blobs for depth */}
      <div className={styles.liquidBackground}>
        <div className={`${styles.blob} ${styles.blobPriority}`} style={{ opacity: 0.3 }} />
        <div className={`${styles.blob} ${styles.blobSecondary}`} style={{ opacity: 0.2 }} />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>
          <Image src="/assets/sparkle.svg" width={16} height={16} alt="" priority />
          <span className={styles.heroBadgeText}>Launch Your Website in Days, Not Months</span>
        </div>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Professional Websites</span><br />
          <span className={styles.titleLine}>Through Subscription</span>
        </h1>
        <p className={styles.subtitle}>
          Get a custom website for just $100-$500/month. No upfront costs.
          Launch in 1-3 days. Buy it out anytime when your business grows.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>
            <span className={styles.primaryButtonText}>Get Started →</span>
          </button>
          <button className={styles.secondaryButton}>View Templates</button>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>
              <CountUp to={500} duration={1.5} />+
            </span>
            <span className={styles.statLabel}>Active Users</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>1-3 Days</span>
            <span className={styles.statLabel}>Launch Time</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>
              $<CountUp from={1000} to={0} duration={1.5} />
            </span>
            <span className={styles.statLabel}>Upfront Cost</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.section} style={{ position: 'relative', overflow: 'visible' }}>
        <div className={styles.sectionHeader} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.tag}>Why Choose Us</div>
          <h2 className={styles.title} style={{ fontSize: '48px' }}>Built for Entrepreneurs</h2>
          <p className={styles.subtitle}>Everything you need to get your business online without breaking the bank</p>
        </div>

        <FeaturesScroll features={features} />
      </section>

      {/* Services Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.tag}>Our Services</div>
          <h2 className={styles.title} style={{ fontSize: '48px' }}>Two Ways We Can Help</h2>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.iconBox} style={{ background: 'linear-gradient(135deg, #441AAD, #2A0E6E)' }}>
              <Image src={ICONS.code} width={24} height={24} alt="Website" />
            </div>
            <h3 className={styles.cardTitle}>Website Creation</h3>
            <p className={styles.cardText}>
              New websites built from professional templates with full customization.
              Choose your category, select a design, and launch in days.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.iconBox} style={{ background: 'linear-gradient(135deg, #FF5B22, #C23600)' }}>
              <Image src={ICONS.wrench} width={24} height={24} alt="Support" />
            </div>
            <h3 className={styles.cardTitle}>Technical Support</h3>
            <p className={styles.cardText}>
              Monthly maintenance for your existing website. We fix bugs, update content, and keep everything running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Choose Your Industry Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.tag}>Template Categories</div>
          <h2 className={styles.title} style={{ fontSize: '48px' }}>Choose Your Industry</h2>
          <p className={styles.subtitle}>Over 130+ professionally designed templates across 10 categories</p>
        </div>

        {isMobile ? (
          <ScrollStack
            itemDistance={20}
            itemScale={0.05}
            itemStackDistance={15}
            stackPosition="15%"
            useWindowScroll={true}
          >
            {industries.map((industry, index) => (
              <ScrollStackItem key={index}>
                <IndustryCard {...industry} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        ) : (
          <div className={styles.industryGrid}>
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
        )}
      </section>

      {/* Trusted Companies Section */}
      <section className={styles.section} style={{ paddingTop: '60px', paddingBottom: '80px', overflow: 'hidden' }}>
        <div className={styles.sectionHeader} style={{ marginBottom: '60px' }}>
          <div className={styles.tag}>Trusted Worldwide</div>
          <h2 className={styles.title}>Companies That Trust Us</h2>
        </div>

        <div className={styles.trustedCompaniesWrapper}>
          <div className={styles.trustedCompaniesTrack}>
            {/* First set of companies */}
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>TechCorp</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>StartupHub</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>CloudSync</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>DataFlow</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>FinanceX</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>MediCare+</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>EduLearn</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>ShopEasy</div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>TechCorp</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>StartupHub</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>CloudSync</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>DataFlow</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>FinanceX</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>MediCare+</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>EduLearn</div>
            </div>
            <div className={styles.companyCard}>
              <div className={styles.companyLogo}>ShopEasy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.tag}>Simple Pricing</div>
          <h2 className={styles.title} style={{ fontSize: '48px' }}>Choose Your Plan</h2>
          <p className={styles.subtitle}>Start with monthly subscription, buy out anytime</p>
        </div>

        <div className={styles.pricingGrid}>
          <PricingCard
            title="Starter"
            price="100"
            buyout="1,500"
            features={[
              'Up to 2 pages',
              'Basic template customization',
              'Mobile responsive',
              'SSL certificate included',
              'Monthly content updates (2)',
              'Email support',
              'Hosting included'
            ]}
          />
          <PricingCard
            title="Professional"
            price="250"
            buyout="3,500"
            features={[
              'Up to 5 pages',
              'Advanced customization',
              'Mobile responsive',
              'SSL certificate included',
              'Weekly content updates (8)',
              'Priority email support',
              'Hosting included',
              'Contact forms',
              'Basic SEO optimization',
              'Google Analytics'
            ]}
            featured={true}
          />
          <PricingCard
            title="Enterprise"
            price="500"
            buyout="6,500"
            features={[
              'Up to 10 pages',
              'Full custom design',
              'Mobile responsive',
              'SSL certificate included',
              'Unlimited content updates',
              '24/7 priority support',
              'Premium hosting',
              'Advanced forms',
              'Full SEO optimization',
              'Google Analytics',
              'E-commerce integration',
              'Custom functionality',
              'Performance optimization'
            ]}
          />
        </div>
      </section>

      {/* Custom Development Section */}
      <section className={styles.section} style={{ position: 'relative', paddingTop: '120px', paddingBottom: '120px' }}>
        {/* Background gradient effect */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(212,46,198,0.15) 0%, rgba(92,36,255,0.1) 35%, rgba(0,0,0,0) 70%)',
          filter: 'blur(100px)',
          opacity: 0.4,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.sectionHeader}>
            <div className={styles.tag}>Beyond Templates</div>
            <h2 className={styles.title} style={{ fontSize: '56px', maxWidth: '800px', margin: '0 auto 24px' }}>
              Custom Development for Any IT Challenge
            </h2>
            <p className={styles.subtitle} style={{ maxWidth: '700px', fontSize: '18px' }}>
              Need something more complex? We build custom web applications, mobile apps,
              SaaS platforms, and enterprise solutions from scratch. No limits, no compromises.
            </p>
          </div>

          <div className={styles.customDevGrid}>
            <div className={styles.customDevCard}>
              <div className={styles.customDevIconLarge} style={{ background: 'linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 className={styles.customDevTitle}>Web Applications</h3>
              <p className={styles.customDevText}>
                Complex dashboards, admin panels, CRM systems, booking platforms,
                and any custom web solution your business needs.
              </p>
              <ul className={styles.customDevList}>
                <li>React, Next.js, Vue.js</li>
                <li>Node.js, Python, PHP</li>
                <li>Real-time features</li>
                <li>API integrations</li>
              </ul>
            </div>

            <div className={styles.customDevCard}>
              <div className={styles.customDevIconLarge} style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3 className={styles.customDevTitle}>Mobile Apps</h3>
              <p className={styles.customDevText}>
                Native iOS and Android apps, or cross-platform solutions
                that work seamlessly on all devices.
              </p>
              <ul className={styles.customDevList}>
                <li>React Native, Flutter</li>
                <li>iOS & Android native</li>
                <li>Push notifications</li>
                <li>Offline functionality</li>
              </ul>
            </div>

            <div className={styles.customDevCard}>
              <div className={styles.customDevIconLarge} style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className={styles.customDevTitle}>SaaS Platforms</h3>
              <p className={styles.customDevText}>
                Multi-tenant applications, subscription management,
                payment processing, and scalable cloud infrastructure.
              </p>
              <ul className={styles.customDevList}>
                <li>Stripe, PayPal integration</li>
                <li>User management</li>
                <li>Analytics & reporting</li>
                <li>Auto-scaling infrastructure</li>
              </ul>
            </div>

            <div className={styles.customDevCard}>
              <div className={styles.customDevIconLarge} style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className={styles.customDevTitle}>Enterprise Solutions</h3>
              <p className={styles.customDevText}>
                Large-scale systems, microservices architecture,
                legacy system modernization, and enterprise integrations.
              </p>
              <ul className={styles.customDevList}>
                <li>Microservices architecture</li>
                <li>Cloud migration (AWS, Azure)</li>
                <li>DevOps & CI/CD</li>
                <li>Security & compliance</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <DiscussButton />
            <p style={{ marginTop: '16px', color: '#99A1AF', fontSize: '14px' }}>
              Free consultation • No commitment required
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Intersson. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, text }: { icon: string, title: string, text: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconBox}>
        <Image src={icon} width={24} height={24} alt="" />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}


function IndustryCard({ icon, title, count, gradient, slug }: { icon: string, title: string, count: string, gradient: string, slug?: string }) {
  const content = (
    <div className={styles.industryCard}>
      <div className={styles.industryIconBox} style={{ background: gradient }}>
        <div className={styles.gradientOverlay} />
        <Image src={icon} width={28} height={28} alt="" style={{ position: 'relative', zIndex: 2 }} />
      </div>
      <div>
        <h3 className={styles.industryTitle}>{title}</h3>
        <p className={styles.industryCount}>{count}</p>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/industries/${slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        {content}
      </Link>
    );
  }

  return content;
}

function PricingCard({ title, price, buyout, features, featured }: { title: string, price: string, buyout: string, features: string[], featured?: boolean }) {
  return (
    <div className={styles.pricingCardNew} style={featured ? {
      borderColor: '#D42EC6',
      boxShadow: '0 0 40px rgba(212,46,198,0.1)',
      background: 'radial-gradient(100% 100% at 50% 0%, rgba(30, 20, 50, 0.8) 0%, rgba(10, 10, 10, 0.8) 100%)'
    } : {}}>
      {featured && (
        <div className={styles.mostPopularBadge}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '6px' }}>
            <path d="M8 1L10 6H15L11 9L13 14L8 11L3 14L5 9L1 6H6L8 1Z" fill="white" />
          </svg>
          Most Popular
        </div>
      )}

      <div style={{ marginBottom: '32px' }}>
        <h3 className={styles.pricingCardTitle}>{title}</h3>
        <p className={styles.pricingCardSubtitle}>
          {title === 'Starter' && 'Perfect for small businesses just getting started'}
          {title === 'Professional' && 'Ideal for growing businesses with more needs'}
          {title === 'Enterprise' && 'For established businesses needing full features'}
        </p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <div className={styles.pricingPriceNew}>
          ${price}<span className={styles.pricingPeriodNew}>/month</span>
        </div>
        <div className={styles.buyoutTag}>
          Buyout: ${buyout}
        </div>
      </div>

      <ul className={styles.pricingListNew}>
        {features.map((f, i) => (
          <li key={i} className={styles.pricingItemNew}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="10" cy="10" r="10" fill="#10B981" />
              <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button className={styles.pricingButton} style={featured ? {
        background: 'linear-gradient(92.24deg, #FF3BFF 0%, #5C24FF 100%)'
      } : {}}>
        Get Started
      </button>
    </div>
  );
}
