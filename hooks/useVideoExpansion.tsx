import { useEffect, useState, useRef } from 'react';

export const useVideoExpansion = (
  videoRef: React.RefObject<HTMLVideoElement | null>,
  sectionRef: React.RefObject<HTMLElement | null>
) => {
  const [videoExpanded, setVideoExpanded] = useState(false);
  const isExpandedRef = useRef(false);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_TEST_ENVIRONMENT === 'true') return;

    const handleScroll = () => {
      // Clear existing timeout
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      // Debounce the scroll handling
      debounceTimeout.current = setTimeout(() => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;

        const viewportHeight = window.innerHeight;
        const blockTop = rect.top;

        // Block is visible in viewport
        const screenHalf = viewportHeight / 2;

        // EXPAND: When scrolling down and block top reaches half of screen
        if (!isExpandedRef.current && blockTop <= screenHalf) {
          setVideoExpanded(true);
          isExpandedRef.current = true;
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        }

        // COLLAPSE: Only when scrolling up AND block top goes above half of screen
        if (isExpandedRef.current && blockTop > screenHalf + 200) {
          setVideoExpanded(false);
          isExpandedRef.current = false;
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }
      }, 30); // 30ms debounce delay
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRef, videoRef]);

  return videoExpanded;
};