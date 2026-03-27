'use client';

interface GoogleMapProps {
  center: { lat: number; lng: number };
  zoom: number;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ center, zoom, className }) => {
  // Use the simple Google Maps embed URL that doesn't require API key
  const embedUrl = `https://maps.google.com/maps?q=${center.lat},${center.lng}&z=${zoom}&output=embed`;

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
