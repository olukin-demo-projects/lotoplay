'use client';

import type { NextPage } from 'next';
import React, { useRef, useState } from 'react';

import { useParallax } from '@/hooks/useParallax';
import { useVideoPreload } from '@/hooks/useVideoPreload';
import { useVideoExpansion } from '@/hooks/useVideoExpansion';
import { upcomingConcerts, concertDateUrls } from '@/utils/consts';

import SEOHead from '@/components/SEOHead';
import { Header } from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import UpcomingEvents from '@/components/sections/UpcomingEvents';
import BandMembers from '@/components/sections/BandMembers';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import TicketPopup from '@/components/TicketPopup';

const Page: NextPage = () => {
  useParallax();
  
  const aboutVideoRef = useRef<HTMLVideoElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const videoExpanded = useVideoExpansion(aboutVideoRef, aboutTextRef);

  const [isTicketPopupOpen, setIsTicketPopupOpen] = useState(false);
  const [selectedDateUrl, setSelectedDateUrl] = useState('');

  const openTicketPopup = (dateId: string) => {
    setSelectedDateUrl(concertDateUrls[dateId]);
    setIsTicketPopupOpen(true);
  };

  const closeTicketPopup = () => {
    setIsTicketPopupOpen(false);
    setSelectedDateUrl('');
  };

  // Preload video when section enters viewport OR after 15s
  useVideoPreload(aboutVideoRef, aboutSectionRef);

  return (
    <>
      <SEOHead upcomingConcerts={upcomingConcerts} />

      <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
        <Header />

        <HeroSection />

        <UpcomingEvents openTicketPopup={openTicketPopup} />

        <BandMembers />

        <AboutSection 
          aboutSectionRef={aboutSectionRef}
          aboutVideoRef={aboutVideoRef}
          aboutTextRef={aboutTextRef}
          videoExpanded={videoExpanded}
        />

        <ContactSection />

        <Footer />

        <TicketPopup
          isOpen={isTicketPopupOpen}
          onClose={closeTicketPopup}
          dateUrl={selectedDateUrl}
        />

      </div>
    </>
  );
};

export default Page;