"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './dashboard.module.css';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

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

            <header className={styles.header} style={{ position: 'relative', zIndex: 50 }}>
                <div className={styles.headerLeft}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}></div>
                        INTERSSON
                    </Link>

                    <nav className={styles.nav}>
                        <Link
                            href="/dashboard"
                            className={`${styles.navItem} ${pathname === '/dashboard' ? styles.navItemActive : ''}`}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                            Overview
                        </Link>
                        <Link
                            href="/dashboard/support"
                            className={`${styles.navItem} ${pathname === '/dashboard/support' ? styles.navItemActive : ''}`}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            Support
                        </Link>
                        <Link
                            href="/dashboard/billing"
                            className={`${styles.navItem} ${pathname === '/dashboard/billing' ? styles.navItemActive : ''}`}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                            Billing
                        </Link>
                    </nav>
                </div>

                <Link href="/" className={styles.logout}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                    Logout
                </Link>
            </header>

            <main className={styles.mainContent} style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </main>
        </div>
    );
}
