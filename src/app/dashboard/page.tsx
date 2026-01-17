import styles from './dashboard.module.css';

export default function Dashboard() {
    return (
        <>
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
                            <div style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px', background: '-webkit-linear-gradient(eee, #999)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI-Powered Super</div>
                            <div style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', background: '-webkit-linear-gradient(eee, #999)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Smart Inventory</div>
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
        </>
    );
}
