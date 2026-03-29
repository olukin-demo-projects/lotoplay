import { useEffect } from 'react';

export const useParallax = (speedMultiplier: number = 0.5) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speedMultiplier;
      document.documentElement.style.setProperty('--scroll-y', `${parallax}px`);
    };

    // Set initial value
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speedMultiplier]);
};