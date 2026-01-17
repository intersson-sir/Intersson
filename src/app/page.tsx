import Image from 'next/image';
import styles from './page.module.css';
import Antigravity from '@/components/Antigravity';

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
  return (
    <main className={styles.main}>
      {/* Background Effects - Fixed full-screen canvas */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 1
      }}>
        <Antigravity
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
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 40px',
        position: 'relative',
        zIndex: 20
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '20px' }}>
          <div style={{ width: 24, height: 24, background: 'linear-gradient(135deg, #FF3BFF, #5C24FF)', borderRadius: 6 }}></div>
          INTERSSON
        </div>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#99A1AF' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Features</a>
          <a href="#" style={{ color: '#99A1AF', textDecoration: 'none' }}>Categories</a>
          <a href="#" style={{ color: '#99A1AF', textDecoration: 'none' }}>Pricing</a>
        </div>
        <button style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 16px',
          borderRadius: '99px',
          color: 'white',
          fontSize: '14px',
          cursor: 'pointer'
        }}>Client Portal</button>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.tag}>Beta Launch</div>
        <h1 className={styles.title}>
          Professional Websites<br />
          Through Subscription
        </h1>
        <p className={styles.subtitle}>
          Get a custom website for just $100-$500/month. No upfront costs.
          Launch in 1-3 days. Buy it out anytime when your business grows.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>Get Started →</button>
          <button className={styles.secondaryButton}>View Templates</button>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>500+</span>
            <span className={styles.statLabel}>Active Users</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>1-3 Days</span>
            <span className={styles.statLabel}>Launch Time</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>$0</span>
            <span className={styles.statLabel}>Upfront Cost</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.section} style={{ position: 'relative' }}>
        {/* Background blur effect */}
        <div style={{
          position: 'absolute',
          top: '216px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '425px',
          height: '425px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(30,65,123,0.2) 35%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
          opacity: 0.2,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className={styles.sectionHeader} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.tag}>Why Choose Us</div>
          <h2 className={styles.title} style={{ fontSize: '48px' }}>Built for Entrepreneurs</h2>
          <p className={styles.subtitle}>Everything you need to get your business online without breaking the bank</p>
        </div>

        <div className={styles.featuresGrid} style={{ position: 'relative', zIndex: 1 }}>
          <FeatureCardNew
            icon={ICONS.payment}
            title="No Upfront Payment"
            text="Start with just a monthly subscription. No $1000-$3000 initial investment required."
            gradient="linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)"
          />
          <FeatureCardNew
            icon={ICONS.launch}
            title="Launch in 1-3 Days"
            text="Choose from ready-made templates and get your custom website live in days."
            gradient="linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)"
          />
          <FeatureCardNew
            icon={ICONS.buy}
            title="Buy Anytime"
            text="Purchase full ownership of your website (domain + files) whenever you're ready."
            gradient="linear-gradient(135deg, #FF9500 0%, #FF6B00 100%)"
          />
          <FeatureCardNew
            icon={ICONS.management}
            title="Easy Content Management"
            text="Edit text and images through a simple dashboard. Request changes anytime."
            gradient="linear-gradient(135deg, #00E5A0 0%, #00B87C 100%)"
          />
          <FeatureCardNew
            icon={ICONS.hosting}
            title="Hosting Included"
            text="We handle all hosting and maintenance while your subscription is active."
            gradient="linear-gradient(135deg, #FF5B5B 0%, #FF3333 100%)"
          />
          <FeatureCardNew
            icon={ICONS.support}
            title="24/7 Support"
            text="Get help whenever you need it. Technical support is included in all plans."
            gradient="linear-gradient(135deg, #615FFF 0%, #2B7FFF 100%)"
          />
        </div>
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

        <div className={styles.industryGrid}>
          <IndustryCard
            icon={ICONS.business}
            title="Business & Services"
            count="15 templates"
            gradient="linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)"
          />
          <IndustryCard
            icon={ICONS.ecommerce}
            title="E-commerce"
            count="20 templates"
            gradient="linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)"
          />
          <IndustryCard
            icon={ICONS.personal}
            title="Personal Brands"
            count="12 templates"
            gradient="linear-gradient(135deg, #FF9500 0%, #FF6B00 100%)"
          />
          <IndustryCard
            icon={ICONS.restaurants}
            title="Restaurants & Delivery"
            count="10 templates"
            gradient="linear-gradient(135deg, #FF5B5B 0%, #FF3333 100%)"
          />
          <IndustryCard
            icon={ICONS.fashion}
            title="Medicine & Beauty"
            count="14 templates"
            gradient="linear-gradient(135deg, #FF3BFF 0%, #D42EC6 100%)"
          />
          <IndustryCard
            icon={ICONS.construction}
            title="Construction & Real Estate"
            count="11 templates"
            gradient="linear-gradient(135deg, #6B7280 0%, #4B5563 100%)"
          />
          <IndustryCard
            icon={ICONS.education}
            title="Education"
            count="13 templates"
            gradient="linear-gradient(135deg, #615FFF 0%, #2B7FFF 100%)"
          />
          <IndustryCard
            icon={ICONS.tech}
            title="Tech / SaaS"
            count="18 templates"
            gradient="linear-gradient(135deg, #00D4D4 0%, #00A8A8 100%)"
          />
          <IndustryCard
            icon={ICONS.events}
            title="Events"
            count="9 templates"
            gradient="linear-gradient(135deg, #9B5FFF 0%, #7B3FFF 100%)"
          />
          <IndustryCard
            icon={ICONS.sports}
            title="Fitness & Sports"
            count="10 templates"
            gradient="linear-gradient(135deg, #00E5A0 0%, #00B87C 100%)"
          />
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

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '40px 20px', textAlign: 'center', color: '#666', fontSize: '12px' }}>
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

function FeatureCardNew({ icon, title, text, gradient }: { icon: string, title: string, text: string, gradient: string }) {
  return (
    <div className={styles.featureCardNew}>
      <div className={styles.gradientIconBox} style={{ background: gradient }}>
        <div className={styles.gradientOverlay} />
        <Image src={icon} width={32} height={32} alt="" style={{ position: 'relative', zIndex: 2 }} />
      </div>
      <h3 className={styles.featureCardTitle}>{title}</h3>
      <p className={styles.featureCardText}>{text}</p>
    </div>
  );
}

function IndustryCard({ icon, title, count, gradient }: { icon: string, title: string, count: string, gradient: string }) {
  return (
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
