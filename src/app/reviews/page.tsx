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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await submitReview({
                name: formData.name,
                company: formData.company,
                role: formData.role,
                service: formData.service,
                review_text: formData.review_text,
            });

            if (result.success) {
                alert(result.message);
                setIsModalOpen(false);
                setFormData({ name: '', company: '', role: '', service: '', review_text: '' });
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
                                <div
                                    className={styles.iconBox}
                                    style={{ background: `linear-gradient(135deg, ${review.color_start}, ${review.color_end})` }}
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
                                    value={formData.review_text}
                                    onChange={e => setFormData({ ...formData, review_text: e.target.value })}
                                    placeholder="Tell us about your experience..."
                                />
                            </div>

                            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit Review'}
                            </button>
                        </form>
                    </div>
                </div>
            )}


        </main>
    );
}
