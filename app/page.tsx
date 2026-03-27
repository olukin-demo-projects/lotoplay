'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import GoogleMap from '@/components/GoogleMap';

const navigationLinks = [
  { name: 'Про гурт', href: '#about' },
  { name: 'Концерти', href: '#concerts' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Контакти', href: '#contact' },
];

const bandMembers = [
  {
    name: 'Олесь - Гитарист',
    imgSrc: 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7WSTEJXbG58AwNPMyfErg63vD2a9uOQjh7o4i', // Replace path
  },
  {
    name: 'Іван - Вокал',
    imgSrc: 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7brMdk4I9jKouTtwhXeOJB2rPdlYRgFik7Gap', // Replace path
  },
  {
    name: 'Тарас - Барабани',
    imgSrc: 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7mgJWfwtoDt4cpP6FhmXb3ivCYZro9Vg2E5dN', // Replace path
  },
];

const upcomingConcerts = [
  { date: '12.10.2024', name: 'Kyiv Rock Fest', location: 'Палац Спорту' },
  { date: '25.10.2024', name: 'Autumn Scream', location: 'Docker\'s Pub' },
  { date: '15.11.2024', name: 'Lviv Metal Madness', location: 'Malevich Concert Arena' },
  { date: '30.11.2024', name: 'Winter Fury Tour', location: 'Odesa Philharmonic Theatre' },
];

const Page: NextPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5; // Adjust speed multiplier as needed
      document.documentElement.style.setProperty('--scroll-y', `${parallax}px`);
    };

    // Set initial value
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Гурд Грим та Грім | Офіційний сайт</title>
      </Head>

      <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
        
        {/* Header/Nav */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/10">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black uppercase tracking-widest text-foreground">
                Грим та Грім
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm font-medium">
              {navigationLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-foreground hover:text-primary transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative h-[606px] flex flex-col justify-center items-center text-center overflow-hidden">
          {/* Background Image (with parallax effect) */}
          <div className="absolute inset-0 z-0 opacity-10 will-change-transform">
            <Image
              src="https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7dxmL5aHqgxe3FC2SzKjJi19sVWImrBNb84cL" // Replace path
              alt="Concert scene background"
              fill
              className="object-cover"
              priority
              style={{
                transform: 'translateY(var(--scroll-y))',
                willChange: 'transform'
              }}
            />
          </div>
          
          <div className="relative z-10 max-w-3xl container mx-auto px-6 py-12 md:py-24">
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white mb-6">
              Грут «Грим та Грім»
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-12">
              Справжній український рок. Магія та драйв у кожній ноті, що проникає у серце.
            </p>
            <a
              href="#concerts"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-base font-bold text-primary-foreground uppercase tracking-wider shadow-lg hover:bg-primary/90 transition-colors"
            >
              ЗАМОВИТИ КВИТОК
            </a>
          </div>
        </section>

        {/* Upcoming Concerts */}
        <section id="concerts" className="bg-muted py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Найближчі концерти
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border/10 bg-card p-6">
              <table className="w-full text-left">
                <thead className="border-b border-border/10">
                  <tr>
                    {['Дата', 'Концерт', 'Локація', 'Квитки'].map((header) => (
                      <th key={header} className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/10">
                  {upcomingConcerts.map((concert, idx) => (
                    <tr key={idx} className="hover:bg-card/50">
                      <td className="px-6 py-5 text-base font-medium">{concert.date}</td>
                      <td className="px-6 py-5 text-base">{concert.name}</td>
                      <td className="px-6 py-5 text-base">{concert.location}</td>
                      <td className="px-6 py-5">
                        <button className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2.5 text-xs font-semibold text-secondary-foreground uppercase tracking-wide hover:bg-secondary/90 transition-colors">
                          Купити квиток
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Band Members */}
        <section id="gallery" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Учасники гурту
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bandMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl border border-border/10 overflow-hidden shadow-xl text-center">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={member.imgSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xl font-bold text-foreground">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our History */}
        <section id="about" className="bg-muted py-20">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Наша історія
              </h2>
              <p className="text-base text-foreground/90 leading-relaxed mb-6">
                «Грим та Грім» народилися з бажання створювати музику, яка йде від самого серця... Наша музика — це справжня українська магія. Ми поєднуємо традиційні елементи та сучасне звучання, створюючи унікальний драйв.
              </p>
              <p className="text-base text-foreground/90 leading-relaxed">
                Кожен наш виступ — це не просто концерт, а справжня подія, де ми ділимося своєю енергією та створюємо незабутню атмосферу.
              </p>
            </div>
            <div className="md:col-span-4 rounded-xl border border-border/10 overflow-hidden aspect-[4/3] relative">
              <Image
                src="https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx71dmeCKfy7F6dY4wiWxfqopgOIuyz5B1hXebS" // Replace path
                alt="Concert crowd section"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Зв&apos;яжіться з нами
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border/10 shadow-xl">
              <form className="space-y-6">
                <input type="text" placeholder="Ім'я" className="w-full px-5 py-4 bg-input border border-border/15 rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none" />
                <input type="email" placeholder="Email" className="w-full px-5 py-4 bg-input border border-border/15 rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none" />
                <textarea placeholder="Повідомлення" rows={5} className="w-full px-5 py-4 bg-input border border-border/15 rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"></textarea>
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-lg bg-secondary py-4 text-base font-bold text-secondary-foreground uppercase tracking-wider shadow-lg hover:bg-secondary/90 transition-colors">
                  ВІДПРАВИТИ
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="bg-card rounded-2xl border border-border/10 shadow-xl overflow-hidden aspect-[4/3] relative">
              <GoogleMap 
                center={{ lat: 50.4501, lng: 30.5234 }} // Kyiv coordinates
                zoom={14}
                className="w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-background/90 px-4 py-2 rounded-full text-xs font-medium text-foreground border border-border/10 shadow-md">
                Місцезнаходження
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted border-t border-border/10 py-8">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p>&copy; 2024 Гурд Грим та Грім. Всі права захищені.</p>
              <p>booking@grimtagrim.com | +38 099 123-45-67</p>
            </div>
            <div className="flex gap-6">
              {['Instagram', 'Facebook', 'YouTube'].map(link => (
                <a key={link} href="#" className="hover:text-primary transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Page;