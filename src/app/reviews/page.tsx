"use client";

import { useState } from 'react';
import styles from './reviews.module.css';
import LiquidEtherWrapper from '@/components/LiquidEtherWrapper';
import Navbar from '@/components/Navbar';
import DiscussButton from '@/components/DiscussButton';

// Initial Mock Data
const INITIAL_REVIEWS = [
    {
        id: 1,
        company: "TechFlow",
        name: "Sarah Johnson",
        role: "CTO",
        service: "SaaS Platform",
        review: "Intersson transformed our outdated platform into a modern, high-converting masterpiece. The subscription model made it incredibly affordable for our startup budget.",
        colorStart: "#441AAD",
        colorEnd: "#2A0E6E"
    },
    {
        id: 2,
        company: "Urban Eats",
        name: "Mike Chen",
        role: "Owner",
        service: "Restaurant Website",
        review: "We needed a site up in 3 days for our opening. They delivered in 48 hours. The online ordering integration works perfectly.",
        colorStart: "#FF5B22",
        colorEnd: "#C23600"
    },
    {
        id: 3,
        company: "StyleVogue",
        name: "Emma Davis",
        role: "Marketing Director",
        service: "E-commerce",
        review: "The design attention to detail is unmatched. Our sales increased by 40% in the first month after the redesign.",
        colorStart: "#FF3BFF",
        colorEnd: "#D42EC6"
    },
    {
        id: 4,
        company: "BuildRight",
        name: "John Smith",
        role: "Project Manager",
        service: "Construction Portfolio",
        review: "Professional, fast, and exactly what we needed. The continuous support integration means we never worry about updates.",
        colorStart: "#6B7280",
        colorEnd: "#4B5563"
    },
    {
        id: 5,
        company: "Mindful",
        name: "Lisa Wong",
        role: "Founder",
        service: "Personal Brand",
        review: "They captured my personal brand perfectly. I've received so many compliments on the new site design.",
        colorStart: "#00E5A0",
        colorEnd: "#00B87C"
    },
    {
        id: 6,
        company: "AutoFix",
        name: "David Miller",
        role: "Manager",
        service: "Service Booking",
        review: "The booking system they implemented saved us hours of phone time every day. Highly recommended!",
        colorStart: "#FF5B5B",
        colorEnd: "#FF3333"
    }
];

export default function ReviewsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        role: '',
        service: '',
        review: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would submit to an API
        alert("Thank you for your review! It has been submitted for moderation.");
        setIsModalOpen(false);
        setFormData({ name: '', company: '', role: '', service: '', review: '' });
    };

    return (
        <main className={styles.main}>
            <Navbar />

            {/* Background */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none'
            }}>
                <LiquidEtherWrapper
                    colors={['#6c136c', '#FF9FFC', '#5227FF']}
                    mouseForce={15}
                    cursorSize={80}
                    resolution={0.5}
                    autoDemo={true}
                    autoSpeed={0.4}
                    autoIntensity={2.0}
                />
            </div>

            <section className={styles.hero}>
                <h1 className={styles.title}>Client Success Stories</h1>
                <p className={styles.subtitle}>
                    Don't just take our word for it. See what founders and businesses
                    are saying about their experience with Intersson.
                </p>
            </section>

            <div className={styles.grid}>
                {INITIAL_REVIEWS.map((review) => (
                    <div key={review.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div
                                className={styles.iconBox}
                                style={{ background: `linear-gradient(135deg, ${review.colorStart}, ${review.colorEnd})` }}
                            >
                                <div className={styles.iconOverlay}></div>
                                {review.company.substring(0, 2).toUpperCase()}
                            </div>
                            <div className={styles.userInfo}>
                                <div className={styles.userName}>{review.name}</div>
                                <div className={styles.userRole}>{review.role} at {review.company}</div>
                            </div>
                        </div>
                        <div className={styles.serviceBadge}>{review.service}</div>
                        <p className={styles.reviewText}>"{review.review}"</p>
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <button
                    className={styles.button}
                    onClick={() => setIsModalOpen(true)}
                >
                    <span className={styles.buttonText}>Leave a Review</span>
                </button>
            </div>

            <div className={styles.quoteSection}>
                <div className={styles.quoteTopLine}></div>
                <div className={styles.quoteContent}>
                    <div className={styles.quoteSymbol}>“</div>
                    <p className={styles.quoteBody}>
                        Working with our clients and their projects has taught us that technology only matters when it genuinely helps people move forward. We care deeply about quality, respect our clients’ time, and believe every project deserves personal attention. We take the time to understand each challenge, because every solution we build creates a small industry impact and that’s something we’re proud of.”
                    </p>
                </div>
                <div className={styles.quoteFooter}>
                    <div className={styles.quoteBottomLine}></div>
                    <div className={styles.quoteAuthor}>FOUNDER INTERSSON</div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>×</button>
                        <h2 className={styles.modalTitle}>Share Your Experience</h2>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Full Name</label>
                                <input
                                    className={styles.input}
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g. Sarah Johnson"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Company Name</label>
                                <input
                                    className={styles.input}
                                    required
                                    value={formData.company}
                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                    placeholder="e.g. TechFlow"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Your Role</label>
                                <input
                                    className={styles.input}
                                    required
                                    value={formData.role}
                                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                                    placeholder="e.g. CEO"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Service Provided</label>
                                <select
                                    className={styles.select}
                                    required
                                    value={formData.service}
                                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="">Select a service...</option>
                                    <option value="SaaS Platform">SaaS Platform</option>
                                    <option value="E-commerce">E-commerce</option>
                                    <option value="Corporate Website">Corporate Website</option>
                                    <option value="Personal Brand">Personal Brand</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Your Review</label>
                                <textarea
                                    className={styles.textarea}
                                    required
                                    value={formData.review}
                                    onChange={e => setFormData({ ...formData, review: e.target.value })}
                                    placeholder="Tell us about your experience..."
                                />
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 50 }}>
                <DiscussButton />
            </div>
        </main>
    );
}
