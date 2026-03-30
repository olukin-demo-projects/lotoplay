import { useEffect, useState } from 'react';

export const useVideoExpansion = (
  videoRef: React.RefObject<HTMLVideoElement | null>,
  sectionRef: React.RefObject<HTMLElement | null>
) => {
  const [videoExpanded, setVideoExpanded] = useState(false);

  useEffect(() => {
    // Disable video expansion in test environments
    if (process.env.NEXT_PUBLIC_TEST_ENVIRONMENT === 'true') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only expand when section is fully visible (90%+)
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
            setVideoExpanded(true);
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
            }
          }
          // Only collapse when scrolling back up (section is less than 50% visible from top)
          else if (entry.intersectionRatio < 0.5 && entry.boundingClientRect.top > 0) {
            setVideoExpanded(false);
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }
        });
      },
      {
        threshold: [0.5, 0.9], // 50% and 90% visibility
        rootMargin: '-60px 0px 0px 0px' // Account for sticky header
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return videoExpanded;
};
