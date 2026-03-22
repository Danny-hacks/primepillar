import { useEffect, useRef } from 'react';

export function useReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const els = container.querySelectorAll<HTMLElement>('.reveal');
    els.forEach(el => el.classList.remove('visible'));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      els.forEach(el => obs.observe(el));
    }, 80);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  });

  return containerRef;
}
