import styles from '../dashboard.module.css';
import billingStyles from './billing.module.css';

export default function BillingPage() {
    return (
        <>
            <div className={styles.welcomeSection}>
                <h1 className={styles.greeting}>Billing & Subscription</h1>
                <p className={styles.subGreeting}>Manage your subscription and payment details</p>
            </div>

            <div className={styles.grid}>
                {/* Left Column */}
                <div>
                    {/* Current Plan Card */}
                    <div className={billingStyles.currentPlanCard}>
                        <div className={billingStyles.planHeader}>
                            <div>
                                <div className={billingStyles.planSubtitle}>Current Plan</div>
                                <div className={billingStyles.planTitle}>
                                    Professional
                                    <span className={styles.statusBadge}>Active</span>
                                </div>
                            </div>
                            <button className={billingStyles.changePlanButton}>Change Plan</button>
                        </div>

                        <div className={billingStyles.planDetailsGrid}>
                            <div className={billingStyles.planDetailBox}>
                                <div className={billingStyles.detailLabel}>Monthly Payment</div>
                                <div className={billingStyles.detailValue}>$250.00</div>
                            </div>
                            <div className={billingStyles.planDetailBox}>
                                <div className={billingStyles.detailLabel}>Next Billing Date</div>
                                <div className={billingStyles.detailValue}>Dec 24</div>
                            </div>
                        </div>

                        <div className={billingStyles.buyoutCard}>
                            <div className={billingStyles.buyoutTitle}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 19l2-9 5 3 5-3 2 9z" /></svg>
                                Buy Your Website
                            </div>
                            <p className={billingStyles.buyoutText}>
                                Get full ownership for a one-time payment of <span style={{ color: '#FBBF24', fontWeight: 700 }}>$3,500</span>
                            </p>
                            <ul className={billingStyles.buyoutList}>
                                <li className={billingStyles.buyoutItem}>Complete domain ownership transfer</li>
                                <li className={billingStyles.buyoutItem}>All source files and assets</li>
                                <li className={billingStyles.buyoutItem}>Migration assistance included</li>
                                <li className={billingStyles.buyoutItem}>Cancel monthly subscription</li>
                            </ul>
                            <button className={billingStyles.buyoutButton}>
                                Complete Buyout Process
                            </button>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className={billingStyles.paymentMethodCard}>
                        <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'white' }}>Payment Method</h2>

                        <div className={billingStyles.cardRow}>
                            <div className={billingStyles.cardInfo}>
                                <div className={billingStyles.cardIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                </div>
                                <div>
                                    <div className={billingStyles.cardNumber}>•••• •••• •••• 4242</div>
                                    <div className={billingStyles.cardExpiry}>Expires 12/27</div>
                                </div>
                            </div>
                            <button className={billingStyles.updateButton}>Update</button>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div>
                    <div className={styles.card}>
                        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Invoice History</h2>

                        <div className={billingStyles.invoiceList}>
                            {[
                                { id: 'INV-2025-11', date: 'Nov 24, 2025', amount: '$250.00' },
                                { id: 'INV-2025-10', date: 'Oct 24, 2025', amount: '$250.00' },
                                { id: 'INV-2025-09', date: 'Sep 24, 2025', amount: '$250.00' },
                                { id: 'INV-2025-08', date: 'Aug 24, 2025', amount: '$250.00' },
                            ].map((inv) => (
                                <div key={inv.id} className={billingStyles.invoiceItem}>
                                    <div>
                                        <div className={billingStyles.invoiceId}>{inv.id}</div>
                                        <div className={billingStyles.invoiceDate}>{inv.date}</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div className={billingStyles.invoiceAmount}>{inv.amount}</div>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={billingStyles.downloadIcon}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={billingStyles.subscriptionStats}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#60A5FA' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Subscription Stats</h3>
                        </div>

                        <div className={billingStyles.statRow}>
                            <span className={billingStyles.statLabel}>Member since</span>
                            <span className={billingStyles.statValue}>Jun 10, 2025</span>
                        </div>
                        <div className={billingStyles.statRow}>
                            <span className={billingStyles.statLabel}>Total paid</span>
                            <span className={billingStyles.statValue}>$1,250.00</span>
                        </div>
                        <div className={billingStyles.statRow}>
                            <span className={billingStyles.statLabel}>Days active</span>
                            <span className={billingStyles.statValue}>167 days</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
