import styles from '../dashboard.module.css';
import supportStyles from './support.module.css';

export default function SupportPage() {
    return (
        <>
            <div className={styles.welcomeSection}>
                <h1 className={styles.greeting}>Support</h1>
                <p className={styles.subGreeting}>Request changes or get help with your website</p>
            </div>

            <div className={styles.grid}>
                {/* Support Form */}
                <div className={styles.card}>
                    <div className={supportStyles.formHeader}>
                        <div style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>New Support Request</div>
                    </div>

                    <form>
                        <div className={supportStyles.formGroup}>
                            <label className={supportStyles.label}>Subject</label>
                            <input
                                type="text"
                                className={supportStyles.input}
                                placeholder="Brief description of your request"
                            />
                        </div>

                        <div className={supportStyles.formGroup}>
                            <label className={supportStyles.label}>Priority</label>
                            <select className={supportStyles.select}>
                                <option>Medium - Within 24-48 hours</option>
                                <option>High - Urgent Issue</option>
                                <option>Low - Content Update</option>
                            </select>
                        </div>

                        <div className={supportStyles.formGroup}>
                            <label className={supportStyles.label}>Details</label>
                            <textarea
                                className={supportStyles.textarea}
                                placeholder="Please provide as much detail as possible..."
                            />
                        </div>

                        <button type="submit" className={supportStyles.submitButton}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            Submit Request
                        </button>
                    </form>
                </div>

                {/* Tickets Sidebar */}
                <div>
                    <div className={styles.card} style={{ marginBottom: '0' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Your Tickets</h2>

                        <div className={supportStyles.ticketSection}>
                            {/* Completed Ticket */}
                            <div className={supportStyles.ticketCard}>
                                <div className={supportStyles.ticketHeader}>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <span className={supportStyles.ticketId}>#1234</span>
                                        <span className={`${supportStyles.ticketStatus} ${supportStyles.statusCompleted}`}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                            Completed
                                        </span>
                                    </div>
                                    <span className={supportStyles.ticketDate}>Nov 20, 2025</span>
                                </div>
                                <div className={supportStyles.ticketTitle}>Update contact form</div>
                                <div className={supportStyles.ticketMeta}>Completed in 2 hours</div>
                            </div>

                            {/* In Progress Ticket */}
                            <div className={supportStyles.ticketCard}>
                                <div className={supportStyles.ticketHeader}>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <span className={supportStyles.ticketId}>#1233</span>
                                        <span className={`${supportStyles.ticketStatus} ${supportStyles.statusInProgress}`}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                            In progress
                                        </span>
                                    </div>
                                    <span className={supportStyles.ticketDate}>Nov 22, 2025</span>
                                </div>
                                <div className={supportStyles.ticketTitle}>Change hero image</div>
                                <div className={supportStyles.ticketMeta}>Working on it now</div>
                            </div>

                            {/* Pending Ticket */}
                            <div className={supportStyles.ticketCard}>
                                <div className={supportStyles.ticketHeader}>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <span className={supportStyles.ticketId}>#1232</span>
                                        <span className={`${supportStyles.ticketStatus} ${supportStyles.statusPending}`}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
                                            Pending
                                        </span>
                                    </div>
                                    <span className={supportStyles.ticketDate}>Nov 23, 2025</span>
                                </div>
                                <div className={supportStyles.ticketTitle}>Add new service page</div>
                                <div className={supportStyles.ticketMeta}>Will start soon</div>
                            </div>
                        </div>
                    </div>

                    <div className={supportStyles.upgradeCard}>
                        <h3 className={supportStyles.upgradeTitle}>Response Time</h3>
                        <p className={supportStyles.upgradeText}>
                            Professional Plan: Priority email support with 24-48 hour response time
                        </p>
                        <button className={supportStyles.upgradeButton}>Upgrade for 24/7 Support</button>
                    </div>
                </div>
            </div>
        </>
    );
}
