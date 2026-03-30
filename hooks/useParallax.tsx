import { useEffect } from 'react';

export const useParallax = (speedMultiplier: number = 0.5) => {
  useEffect(() => {
    // Completely skip parallax in test environments (e.g. Playwright).
    // Set NEXT_PUBLIC_DISABLE_PARALLAX=true in the test runner to activate.
    if (process.env.NEXT_PUBLIC_DISABLE_PARALLAX === 'true') {
      document.documentElement.style.setProperty('--scroll-y', '0px');
      return;
    }

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