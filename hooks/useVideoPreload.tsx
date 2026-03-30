import { useEffect } from 'react';

export const useVideoPreload = (
  videoRef: React.RefObject<HTMLVideoElement | null>,
  sectionRef: React.RefObject<HTMLElement | null>,
  fallbackDelay: number = 15000
) => {
  useEffect(() => {
    let triggered = false; // local flag avoids stale-closure issue with state

    const preload = () => {
      if (triggered) return;
      triggered = true;
      if (videoRef.current) {
        videoRef.current.preload = 'auto';
        videoRef.current.load();
      }
    };

    // Fallback timer
    const timer = setTimeout(preload, fallbackDelay);

    // IntersectionObserver trigger
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          preload();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [videoRef, sectionRef, fallbackDelay]);
};