'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import { useRef } from 'react';

import { useParallax } from '@/hooks/useParallax';
import { useVideoPreload } from '@/hooks/useVideoPreload';
import { useVideoExpansion } from '@/hooks/useVideoExpansion';
import { handleSmoothScroll } from '@/utils/handleSmoothScroll';

import SEOHead from '@/components/SEOHead';
import GoogleMap from '@/components/LazyGoogleMap';
import { FormInput } from '@/components/ui/form-input';
import { FormTextarea } from '@/components/ui/form-textarea';
import { Button } from '@/components/ui/button';
import { VideoContainer, VideoWrapper, VideoImage, VideoElement, VideoBackdrop } from "@/components/ui/video-container";

const navigationLinks = [
  { name: 'Про гурт', href: '#about' },
  { name: 'Концерти', href: '#concerts' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Контакти', href: '#contact' },
];

const bandMembers = [
  {
    name: 'Максим — гітара',
    imgSrc: 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7WSTEJXbG58AwNPMyfErg63vD2a9uOQjh7o4i',
  },
  {
    name: 'Олена — вокал',
    imgSrc: 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7brMdk4I9jKouTtwhXeOJB2rPdlYRgFik7Gap',
  },
  {
    name: 'Тарас — барабани',
    imgSrc: 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7mgJWfwtoDt4cpP6FhmXb3ivCYZro9Vg2E5dN',
  },
];

const upcomingConcerts = [
  { city: 'Київ — Docker-G Pub', capacity: '250', date: '25.10.2025, 19:00' },
  { city: 'Львів — !FESTrepublic', capacity: '400', date: '01.11.2025, 20:00' },
  { city: 'Одеса — Зелен театр', capacity: '700', date: '09.11.2025, 19:30' },
  { city: 'Харків — ArtZavod', capacity: '500', date: '16.11.2025, 19:00' },
];

const ABOUT_VIDEO_SRC = 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx745GptCXoIrTbCxKyLgJAVz6XpnjtZekcwM9P';

const Page: NextPage = () => {
  useParallax();
  
  const aboutVideoRef = useRef<HTMLVideoElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const videoExpanded = useVideoExpansion(aboutVideoRef, aboutTextRef);

  // Preload video when section enters viewport OR after 15s
  useVideoPreload(aboutVideoRef, aboutSectionRef);

  return (
    <>
      <SEOHead upcomingConcerts={upcomingConcerts} />

      <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">

        {/* Header/Nav */}
        <header id="header" role="banner" className="sticky top-0 z-60 bg-background/80 backdrop-blur-sm border-b border-border/10">
          <nav aria-label="Основне меню" className="mx-auto px-6 py-6 flex items-center justify-between max-w-menu">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black uppercase tracking-widest text-foreground">
                G&G
              </span>
            </div>
            <div className="flex items-center gap-8 text-md">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main id="hero" role="main" className="relative h-[600px] flex flex-col justify-center items-center text-left overflow-hidden">
          {/* Background Image (with parallax effect) */}
          <div className="absolute inset-0 z-0 will-change-transform">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src="https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7dxmL5aHqgxe3FC2SzKjJi19sVWImrBNb84cL" // Replace path
              alt="Concert scene background"
              fill
              sizes="100vw"
              className="object-cover saturate-[.6] brightness-125 blur-[1px]"
              priority
              fetchPriority="high"
              style={{
                transform: 'translateY(var(--scroll-y))',
                willChange: 'transform'
              }}
            />
          </div>

          <div className="relative z-10 w-full mx-auto px-6 py-12 md:py-24 max-w-page-full">
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white mb-10 text-shadow">
              Гурт «Грим та Грім»
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-8 text-shadow">
              Справжній український рок, який гуркоче в серці.
            </p>
            <div className="mb-10 space-y-4 text-shadow">
              <p className="text-base text-foreground/90">
                «Грим та Грім» — це поєднання <span className="text-highlight font-semibold">потужних</span> гітарних рифів, чесних текстів і вибухової енергії сцени. Ми граємо для тих, хто цінує живий звук, свободу та силу музики.
              </p>
              <p className="text-base text-foreground/90">
                <span className="text-highlight font-semibold">Наші концерти</span> — це завжди контакт з залом, драйв і емоції. Приєднуйся до нас на найближчих виступах і відчуй цей саунд наживо!
              </p>
            </div>
            <Button
              asChild
              variant="cta"
              size="cta"
            >
              <a
                href="#concerts"
                onClick={(e) => handleSmoothScroll(e, '#concerts')}
              >
                Замовити квиток
              </a>
            </Button>
          </div>
        </main>

        {/* Upcoming Concerts */}
        <section id="concerts" aria-labelledby="concerts-heading" className="py-16">
          <div className="mx-auto px-6 max-w-page-full">
            <div className="overflow-x-auto rounded-xl border-2 border-table-border backdrop-blur-md overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-table-header border-b-2 border-table-border">
                  <tr>
                    <th colSpan={4} className="p-4">
                      <h2 id="concerts-heading" className="text-xl md:text-2xl font-bold text-foreground">
                        Найближчі концерти
                      </h2>
                    </th>
                  </tr>
                  <tr className="border-t-2 border-table-border">
                    {['Місто / Заклад', 'К-сть місць', 'Дата і час', ''].map((header) => (
                      <th key={header} className="px-4 py-4 font-semibold text-muted-foreground tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-table-row divide-y-2 divide-table-border">
                  {upcomingConcerts.map((concert, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-sm font-bold text-white">{concert.city}</td>
                      <td className="px-4 py-3 text-sm text-white">{concert.capacity}</td>
                      <td className="px-4 py-3 text-sm text-white">{concert.date}</td>
                      <td className="px-4 py-3 text-center">
                        <Button 
                          variant="secondary" 
                          className="rounded-lg px-5 py-2 font-bold hover:bg-secondary/90"
                        >
                          Замовити квиток
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Band Members */}
        <section id="gallery" aria-labelledby="gallery-heading" className="py-20">
          <div className="mx-auto max-w-page-full">
            <h2 id="gallery-heading" className="text-2xl md:text-4xl font-extrabold mb-12 text-center text-foreground">
              Учасники гурту
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 px-16">
              {bandMembers.map((member) => (
                <div key={member.name} className="group relative flex flex-col items-left bg-table-header rounded-xl border border-white/10 shadow-2xl transition-all duration-500 hover:bg-table-header/80">
                  <div className="aspect-4/3 w-full relative rounded-xl rounded-b-none overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={member.imgSrc}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="text-start p-2">
                    <p className="text-lg text-foreground/80 tracking-tight transition-colors group-hover:text-primary">
                      {member.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" ref={aboutSectionRef} aria-labelledby="about-heading" className="section-gradient-1 py-16">
          <div className="mx-auto px-6 max-w-page-full">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-extrabold mb-8 text-foreground">
              Наша історія
            </h2>
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <VideoContainer expanded={videoExpanded}>
                <VideoWrapper expanded={videoExpanded}>
                  {/* Static image — visible when not hovering */}
                  <VideoImage
                    expanded={videoExpanded}
                    src="https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx71dmeCKfy7F6dY4wiWxfqopgOIuyz5B1hXebS"
                    alt="Concert crowd section"
                    loading="eager"
                    width={1407}
                    height={624}
                    sizes="(max-width: 768px) 100vw, 41vw"
                  />
                  {/* Video — preloaded lazily, plays on hover */}
                  <VideoElement
                    expanded={videoExpanded}
                    ref={aboutVideoRef}
                    src={ABOUT_VIDEO_SRC}
                    preload="none"
                    muted
                    loop
                    playsInline
                  />
                </VideoWrapper>
                <VideoBackdrop expanded={videoExpanded} />
              </VideoContainer>
              <p ref={aboutTextRef}>
                «Грим та Грім» народився з бажання створювати музику, яка відчувається серцем. Ми почали свій шлях у маленькій студії в центрі Києва, де кожен акорд, кожне слово було наповнене емоціями та переживаннями. Це було місце, де народжувались наші перші пісні, де ми вчились грати разом як єдиний організм.
              </p>
              <p>
                За роки нашої діяльності ми виступили на десятках сцен, від невеликих клубів до великих фестивалів. Наша музика — це поєднання традиційного року з сучасними елементами, що робить її унікальною та впізнаваною. Ми не боїмось експериментувати зі звуком, додаючи електронні елементи або народні інструменти.
              </p>
              
              <p>
                Кожен наш виступ — це не просто концерт, а справжня подія, де ми ділимося своєю енергією з глядачами та створюємо неповторну атмосферу. Ми віримо, що музика має силу об&apos;єднувати людей, створювати спільноти та надихати на зміни.
              </p>
              <p>
                Наш колектив складається з досвідчених музикантів, кожен з яких привносить свій унікальний стиль та бачення. Максим створює неймовірні гітарні рифи, Олена зачаровує своїм вокалом, а Тарас тримає ритм, який змушує серця битися в унісон з музикою.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" aria-labelledby="contact-heading" className="section-gradient-2 py-20">
          <div className="mx-auto px-6 max-w-page-full">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 id="contact-heading" className="text-2xl md:text-3xl font-extrabold mb-4 text-foreground">
                Зв&apos;яжіться з нами
              </h2>
              <p className="text-foreground/60 text-lg">Хочеш заказати виступ або маєш питання? Пиши!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

              {/* Contact Form */}
              <form role="form" aria-labelledby="contact-heading">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <FormInput
                    id="name"
                    type="text"
                    placeholder="Ваше ім'я"
                    autoComplete="name"
                    label="Ім'я"
                  />
                  <FormInput
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    autoComplete="email"
                    label="Email"
                  />
                </div>
                <FormTextarea
                  id="message"
                  placeholder="Розкажи про свої ідеї..."
                  rows={3}
                  autoComplete="off"
                  label="Повідомлення"
                />
                <Button
                  type="submit"
                  variant="submit"
                  size="submit"
                >
                  Відправити
                </Button>
              </form>

              {/* Google Map */}
              <div className="space-y-6">
                <div className="bg-form-input-bg backdrop-blur-xl rounded-lg py-3 px-1 border border-form-input-border shadow-2xl">
                  {/* Title */}
                  <div className="px-4 py-3">
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

        <footer id="footer" role="contentinfo" className="bg-background border-t border-border/10 py-12">
          <div className="mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 text-sm text-muted-foreground max-w-page-full">
            <div className="text-center md:text-left space-y-2">
              <p className="text-base font-bold text-foreground">© 2025 «Грим та Грім». Всі права захищені.</p>
              <p className="text-foreground/60">booking@lotoplay.com | +38 (099) 123-45-67</p>
            </div>
            <div className="flex gap-8">
              {['Instagram', 'YouTube', 'Facebook'].map(link => (
                <a key={link} href="#" className="font-medium text-foreground/70 hover:text-primary transition-colors text-base">{link}</a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Page;