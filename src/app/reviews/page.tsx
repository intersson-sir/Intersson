"use client";

import { useState, useEffect } from 'react';
import styles from './reviews.module.css';
import LiquidEtherWrapper from '@/components/LiquidEtherWrapper';
import Navbar from '@/components/Navbar';
import DiscussButton from '@/components/DiscussButton';
import { getReviews, submitReview, Review } from '@/lib/api';

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    // New state for logo and custom service
    const [logo, setLogo] = useState<File | null>(null);
    const [customService, setCustomService] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        role: '',
        service: '',
        review_text: ''
    });

    useEffect(() => {
        // Load reviews from API
        async function loadReviews() {
            setLoading(true);
            try {
                const data = await getReviews();
                setReviews(data);
            } catch (error) {
                console.error('Failed to load reviews:', error);
            } finally {
                setLoading(false);
            }
        }
        loadReviews();
    }, []);

    const resetForm = () => {
        setFormData({ name: '', company: '', role: '', service: '', review_text: '' });
        setLogo(null);
        setCustomService('');
        setSubmitSuccess(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Reset after a delay so the fade out doesn't show the form reset immediately
        setTimeout(resetForm, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Use custom service if 'Other' is selected
        const finalService = formData.service === 'Other' ? customService : formData.service;

        try {
            const result = await submitReview({
                name: formData.name,
                company: formData.company,
                role: formData.role,
                service: finalService,
                review_text: formData.review_text,
                logo: logo
            });

            if (result.success) {
                setSubmitSuccess(true);
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            alert("Failed to submit review. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '40px', gridColumn: '1 / -1' }}>
                        <p style={{ color: 'white', fontSize: '18px' }}>Loading reviews...</p>
                    </div>
                ) : reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                {typeof review.logo === 'string' && review.logo ? (
                                    <div className={styles.iconBox} style={{ background: 'transparent' }}>
                                        <img
                                            src={review.logo}
                                            alt={`${review.company} logo`}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={styles.iconBox}
                                        style={{ background: `linear-gradient(135deg, ${review.color_start}, ${review.color_end})` }}
                                    >
                                        <div className={styles.iconOverlay}></div>
                                        {review.company.substring(0, 2).toUpperCase()}
                                    </div>
                                )}
                                <div className={styles.userInfo}>
                                    <div className={styles.userName}>{review.name}</div>
                                    <div className={styles.userRole}>{review.role} at {review.company}</div>
                                </div>
                            </div>
                            <div className={styles.serviceBadge}>{review.service}</div>
                            <p className={styles.reviewText}>"{review.review_text}"</p>
                        </div>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', padding: '40px', gridColumn: '1 / -1' }}>
                        <p style={{ color: 'white', fontSize: '18px' }}>No reviews yet. Be the first to leave a review!</p>
                    </div>
                )}
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
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={handleCloseModal}>×</button>

                        {submitSuccess ? (
                            <div className={styles.successView}>
                                <div className={styles.successIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <h2 className={styles.successTitle}>Review Submitted!</h2>
                                <p className={styles.successMessage}>
                                    Thank you for sharing your experience. Your review has been submitted and is pending moderation.
                                </p>
                                <button className={styles.submitButton} onClick={handleCloseModal}>
                                    Got it
                                </button>
                            </div>
                        ) : (
                            <>
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
                                        <label className={styles.label}>Company Logo (Optional)</label>
                                        <input
                                            type="file"
                                            className={styles.input}
                                            accept="image/*"
                                            onChange={e => setLogo(e.target.files ? e.target.files[0] : null)}
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

                                        {formData.service === 'Other' && (
                                            <input
                                                className={styles.input}
                                                style={{ marginTop: '10px' }}
                                                required
                                                placeholder="Please specify the service..."
                                                value={customService}
                                                onChange={e => setCustomService(e.target.value)}
                                            />
                                        )}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Your Review</label>
                                        <textarea
                                            className={styles.textarea}
                                            required
                                            value={formData.review_text}
                                            onChange={e => setFormData({ ...formData, review_text: e.target.value })}
                                            placeholder="Tell us about your experience..."
                                        />
                                    </div>

                                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 50 }}>
                <DiscussButton />
            </div>
        </main>
    );
}
