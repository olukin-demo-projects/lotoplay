'use client';

import { lazy, Suspense, useState, useEffect, useMemo } from 'react';

interface LazyGoogleMapProps {
  center: { lat: number; lng: number };
  zoom: number;
  placeName: string;
  placeId: string;
  language: string;
  region: string;
  className?: string;
}

const LazyGoogleMap: React.FC<LazyGoogleMapProps> = (props) => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load map after page load to improve Lighthouse score
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000); // Load after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Memoize the lazy component so it's only created once
  const GoogleMapComponent = useMemo(() => {
    if (!shouldLoad) return null;
    
    return lazy(() => import('@/components/GoogleMap'));
  }, [shouldLoad]);

  if (!shouldLoad || !GoogleMapComponent) {
    // Show placeholder while loading
    return (
      <div className="w-full h-full min-h-[400px] rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Завантаження мапи...</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full min-h-[400px] rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Завантаження мапи...</p>
          </div>
        </div>
      }
    >
      <GoogleMapComponent {...props} />
    </Suspense>
  );
};

export default LazyGoogleMap;
