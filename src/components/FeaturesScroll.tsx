'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './FeaturesScroll.module.css';

interface FeatureCardProps {
  icon: string;
  title: string;
  text: string;
  gradient: string;
  hue: number;
}

export default function FeaturesScroll({ features }: { features: FeatureCardProps[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const articles = section.querySelectorAll(`.${styles.featureCard}`);

    const update = (e: MouseEvent | Touch) => {
      const x = e.clientX;
      const y = e.clientY;

      articles.forEach((article) => {
        const rect = article.getBoundingClientRect();
        const articleX = rect.left + rect.width * 0.5;
        const articleY = rect.top + rect.height * 0.5;
        
        const distance = Math.sqrt(Math.pow(x - articleX, 2) + Math.pow(y - articleY, 2));
        const xPercent = ((x - rect.left) / rect.width) * 100;
        const yPercent = ((y - rect.top) / rect.height) * 100;

        (article as HTMLElement).style.setProperty('--x', `${xPercent}%`);
        (article as HTMLElement).style.setProperty('--y', `${yPercent}%`);
        (article as HTMLElement).style.setProperty('--px', `${x - rect.left}`);
        (article as HTMLElement).style.setProperty('--py', `${y - rect.top}`);
      });
    };

    const onMouseMove = (e: MouseEvent) => update(e);
    const onTouchMove = (e: TouchEvent) => update(e.touches[0]);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.featuresSection}>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <article className={styles.featureCard} style={{ '--hue': feature.hue } as React.CSSProperties}>
              <div className={styles.cardHeader}>
                <div
                  className={styles.iconBox}
                  style={{ background: feature.gradient }}
                >
                  <div className={styles.gradientOverlay} />
                  <Image src={feature.icon} width={32} height={32} alt="" style={{ position: 'relative', zIndex: 2 }} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                </div>
              </div>
              <p className={styles.cardText}>{feature.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
