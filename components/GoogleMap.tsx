'use client';

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
  // Advanced embed parameters
  placeId?: string;
  placeName?: string;
  width?: number;
  height?: number;
  pitch?: number;
  heading?: number;
  mapType?: string;
  language?: string;
  region?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  center = { lat: 50.401279090902456, lng: 30.529450776914626 }, 
  zoom = 13.1,
  className,
  placeId = '0x40d4cf862389df53%3A0xa83a86c350aa5dcd',
  placeName = 'Restaurant%20ichi',
  width = 800,
  height = 600,
  pitch = 0,
  heading = 0,
  mapType = '0',
  language = 'en',
  region = 'ua'
}) => {
  // Build the Google Maps embed URL with all parameters
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.1372818068708!2d${center.lng}!3d${center.lat}!2m3!1f${pitch}!2f${heading}!3f0!3m2!1i${width}!2i${height}!4f${zoom}!3m3!1m2!1s${placeId}!2s${placeName}!5e${mapType}!3m2!1s${language}!2s${region}!4v1774905431711!5m2!1s${language}!2s${region}`;

  return (
    <iframe
      src={embedUrl}
      className={`w-full h-full ${className}`}
      style={{ minHeight: '300px', border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    />
  );
};

export default GoogleMap;
