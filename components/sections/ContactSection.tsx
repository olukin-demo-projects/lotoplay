'use client';

import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import GoogleMap from '@/components/LazyGoogleMap';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-gradient-2 py-18">
      <div className="mx-auto px-6 max-w-page-full">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 id="contact-heading" className="text-2xl md:text-3xl font-extrabold mb-4 text-foreground">
            Зв&apos;яжіться з нами
          </h2>
          <p className="text-foreground/60 text-lg">Хочеш заказати виступ або маєш питання? Пиши!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Contact Form */}
          <ContactForm />

          {/* Google Map */}
          <div className="space-y-6">
            <div className="bg-form-input-bg backdrop-blur-xl rounded-lg py-3 px-1 border border-form-input-border shadow-2xl">
              {/* Title */}
              <div className="px-4 py-2">
                <h3 className="text-xl font-bold text-foreground tracking-widest">
                  Наше місцезнаходження
                </h3>
              </div>
              {/* Map */}
              <div className="p-4">
                <div className="relative group w-full h-full rounded-lg">
                  <GoogleMap
                    center={{ lat: 50.401279090902456, lng: 30.529450776914626 }}
                    zoom={13.1}
                    placeName="Restaurant%20ichi"
                    placeId="0x40d4cf862389df53%3A0xa83a86c350aa5dcd"
                    language="en"
                    region="ua"
                    className="w-full h-full rounded-lg object-cover transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
