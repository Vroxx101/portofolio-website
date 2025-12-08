'use client';

import { useEffect, useState, useRef } from 'react';

interface SectionObserverProps {
  children: React.ReactNode;
  id: string;
}

export default function SectionObserver({ children, id }: SectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Sekitar 30% dari section terlihat
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
      }`}
    >
      {children}
    </div>
  );
}