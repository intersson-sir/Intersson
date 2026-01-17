"use client";

import { useState } from 'react';
import Link from 'next/link';
import LoginModal from './LoginModal';

export default function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px 40px',
                position: 'relative',
                zIndex: 20
            }}>
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '20px' }}>
                        <div style={{ width: 24, height: 24, background: 'linear-gradient(135deg, #FF3BFF, #5C24FF)', borderRadius: 6 }}></div>
                        INTERSSON
                    </div>
                </Link>
                <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#99A1AF' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Features</a>
                    <a href="#" style={{ color: '#99A1AF', textDecoration: 'none' }}>Categories</a>
                    <a href="#" style={{ color: '#99A1AF', textDecoration: 'none' }}>Pricing</a>
                </div>
                <button
                    onClick={() => setIsLoginOpen(true)}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '8px 16px',
                        borderRadius: '99px',
                        color: 'white',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                >
                    Client Portal
                </button>
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}
