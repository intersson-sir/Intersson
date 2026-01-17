import Link from 'next/link';
import Image from 'next/image';
import styles from './dashboard.module.css';

export default function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            {/* Background Effect */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.3
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(92, 36, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                    filter: 'blur(100px)',
                }} />
            </div>

            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}></div>
                        INTERSSON
                    </Link>

                    <nav className={styles.nav}>
                        <Link href="/dashboard" className={`${styles.navItem} ${styles.navItemActive}`}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                            Overview
                        </Link>
                        <a href="#" className={styles.navItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                            Content Editor
                        </a>
                        <a href="#" className={styles.navItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            Support
                        </a>
                        <a href="#" className={styles.navItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                            Billing
                        </a>
                    </nav>
                </div>

                <Link href="/" className={styles.logout}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                    Logout
                </Link>
            </header>

            <main className={styles.mainContent} style={{ position: 'relative', zIndex: 1 }}>
                <div className={styles.welcomeSection}>
                    <h1 className={styles.greeting}>Welcome back, Alex!</h1>
                    <p className={styles.subGreeting}>Here&apos;s the status of your website</p>
                </div>

                <div className={styles.grid}>
                    {/* Main Website Card */}
                    <div className={styles.card}>
                        <div className={styles.websiteHeader}>
                            <div>
                                <div className={styles.websiteTitle}>
                                    Your Website
                                    <span className={styles.statusBadge}>
                                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }}></div>
                                        Active
                                    </span>
                                </div>
                                <div className={styles.websiteUrl}>alexbusiness.webflow-demo.com</div>
                            </div>
                            <button className={styles.visitButton}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Visit Site
                            </button>
                        </div>

                        <div className={styles.statsRow}>
                            <div className={styles.statBox}>
                                <div className={styles.statValue} style={{ color: '#60A5FA' }}>Professional</div>
                                <div className={styles.statLabel}>Current Plan</div>
                            </div>
                            <div className={styles.statBox}>
                                <div className={styles.statValue} style={{ color: '#C084FC' }}>$250</div>
                                <div className={styles.statLabel}>Monthly</div>
                            </div>
                            <div className={styles.statBox}>
                                <div className={styles.statValue} style={{ color: '#34D399' }}>167 days</div>
                                <div className={styles.statLabel}>Subscription Active</div>
                            </div>
                        </div>

                        <div className={styles.billingBar}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            Next billing date: December 24, 2025
                        </div>

                        <button className={styles.buyButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M5 19l2-9 5 3 5-3 2 9z" /></svg>
                            Buy Website for $3,500
                        </button>
                        <p className={styles.buyHint}>Get full ownership of domain + files and move to your own hosting</p>
                    </div>

                    {/* Right Side Stats */}
                    <div className={styles.smallStatsGrid}>
                        <div className={styles.smallStatCard}>
                            <div className={styles.bigNumber}>8,432</div>
                            <div className={styles.numberLabel}>Total Visitors</div>
                            <div className={styles.growth}>+12% this month</div>
                        </div>
                        <div className={styles.smallStatCard}>
                            <div className={styles.bigNumber} style={{ color: '#34D399' }}>99.9%</div>
                            <div className={styles.numberLabel}>Uptime</div>
                            <div className={styles.growth} style={{ color: '#34D399' }}>Last 30 days</div>
                        </div>
                    </div>
                </div>

                {/* Template Section */}
                <div className={`${styles.card} ${styles.templateSection}`}>
                    <div className={styles.templateHeader}>
                        <div>
                            <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>Current Template</div>
                            <div style={{ fontSize: '14px', color: '#99A1AF' }}>Business & Services - Modern Corporate</div>
                        </div>
                        <button className={styles.visitButton}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                            Preview
                        </button>
                    </div>

                    <div style={{ position: 'relative', height: '300px', width: '100%', marginBottom: '24px', overflow: 'hidden', borderRadius: '16px' }}>
                        {/* Using a gradient placeholder instead of actual image if not available, or a generic placeholder */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, #000, #111)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div style={{
                                width: '80%',
                                height: '80%',
                                background: 'linear-gradient(135deg, rgba(30,30,40, 1), rgba(10,10,10, 1))',
                                borderRadius: '12px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '40px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px', background: '-webkit-linear-gradient(eee, #999)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Powered Super</div>
                                <div style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', background: '-webkit-linear-gradient(eee, #999)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Smart Inventory</div>
                                <div style={{ padding: '10px 20px', background: 'white', color: 'black', borderRadius: '99px', fontSize: '12px', fontWeight: '600' }}>GET STARTED</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.templateDetails}>
                        <div className={styles.detailBox}>
                            <div className={styles.detailLabel}>Category</div>
                            <div className={styles.detailValue}>Business</div>
                        </div>
                        <div className={styles.detailBox}>
                            <div className={styles.detailLabel}>Pages</div>
                            <div className={styles.detailValue}>12 pages</div>
                        </div>
                        <div className={styles.detailBox}>
                            <div className={styles.detailLabel}>Last Updated</div>
                            <div className={styles.detailValue}>2 days ago</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
