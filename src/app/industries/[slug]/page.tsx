import { industries } from '@/data/industries';
import styles from './page.module.css';
import Link from 'next/link';
import Antigravity from '@/components/Antigravity';
import { notFound } from 'next/navigation';

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);

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
                <Antigravity
                    color="#6c136c"
                    count={100}
                    magnetRadius={30}
                    ringRadius={20}
                    autoAnimate={true}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href="/" className={styles.backLink}>
                        ← Back to Home
                    </Link>
                    <h1 className={styles.title}>{industry.title}</h1>
                    <p className={styles.description}>{industry.description}</p>
                </div>

                <div className={styles.templatesGrid}>
                    {industry.templates.map((template) => (
                        <div key={template.id} className={styles.templateCard}>
                            <div className={styles.previewArea}>
                                {/* PDF Icon Placeholder since we assume PDF viewing */}
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
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.templateName}>{template.name}</h3>
                                <a href={template.pdfUrl} className={styles.pdfLink} target="_blank" rel="noopener noreferrer">
                                    View Layout (PDF)
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
