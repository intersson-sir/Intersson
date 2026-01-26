import styles from './page.module.css';
import Link from 'next/link';
import LiquidEtherWrapper from '@/components/LiquidEtherWrapper';
import { notFound } from 'next/navigation';
import { getIndustryBySlug } from '@/lib/api';

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const industry = await getIndustryBySlug(slug);

    if (!industry) {
        notFound();
    }

    return (
        <main className={styles.main}>
            {/* Background Effects */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 1
            }}>
                <LiquidEtherWrapper
                    colors={['#6c136c', '#FF9FFC', '#5227FF']}
                    mouseForce={18}
                    cursorSize={90}
                    resolution={0.5}
                    autoDemo={true}
                    autoSpeed={0.45}
                    autoIntensity={2.0}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href="/" className={styles.backLink}>
                        ← Back to Home
                    </Link>
                    <h1 className={styles.title}>{industry.name}</h1>
                    <p className={styles.description}>{industry.description}</p>
                    <p className={styles.templateCount}>
                        {industry.template_count} template{industry.template_count !== 1 ? 's' : ''} available
                    </p>
                </div>

                <div className={styles.templatesGrid}>
                    {industry.templates && industry.templates.length > 0 ? (
                        industry.templates.map((template) => (
                            <div key={template.id} className={styles.templateCard}>
                                <div className={styles.previewArea}>
                                    {template.preview_image_url ? (
                                        <img 
                                            src={template.preview_image_url} 
                                            alt={template.name}
                                            className={styles.previewImage}
                                        />
                                    ) : (
                                        <svg
                                            className={styles.pdfIcon}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.templateName}>{template.name}</h3>
                                    {template.description && (
                                        <p className={styles.templateDescription}>{template.description}</p>
                                    )}
                                    <a href={template.pdf_url} className={styles.pdfLink} target="_blank" rel="noopener noreferrer">
                                        View Layout (PDF)
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noTemplates}>
                            <p>No templates available yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
