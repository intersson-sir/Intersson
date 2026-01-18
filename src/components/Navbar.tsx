"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoginModal from './LoginModal';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}></div>
                    INTERSSON
                </Link>

                {/* Desktop Menu */}
                <div className={styles.navLinks}>
                    <Link href="#features" className={styles.activeLink}>Features</Link>
                    <Link href="#categories" className={styles.navLink}>Categories</Link>
                    <Link href="#pricing" className={styles.navLink}>Pricing</Link>
                </div>

                <button
                    onClick={() => setIsLoginOpen(true)}
                    className={styles.clientPortalBtn}
                >
                    Client Portal
                </button>

                {/* Burger Button */}
                <button
                    className={styles.burgerBtn}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className={styles.burgerLine} style={{ transform: isMobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)' }} />
                    <div className={styles.burgerLine} style={{ opacity: isMobileMenuOpen ? 0 : 1, transform: isMobileMenuOpen ? 'translateX(20px)' : 'translateX(0)' }} />
                    <div className={styles.burgerLine} style={{ transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)' }} />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileNavLinks}>
                    <Link href="#features" className={styles.mobileNavLink} onClick={toggleMenu}>Features</Link>
                    <Link href="#categories" className={styles.mobileNavLink} onClick={toggleMenu}>Categories</Link>
                    <Link href="#pricing" className={styles.mobileNavLink} onClick={toggleMenu}>Pricing</Link>
                    <button
                        onClick={() => {
                            setIsLoginOpen(true);
                            toggleMenu();
                        }}
                        className={styles.mobileNavLink}
                        style={{ background: 'none', border: 'none', fontSize: 'inherit', fontWeight: 'inherit', cursor: 'pointer' }}
                    >
                        Client Portal
                    </button>
                </div>
            </div>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}
