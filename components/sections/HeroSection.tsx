'use client';

import Image from "next/image";
import React from 'react';
import { Button } from '@/components/ui/button';
import { handleSmoothScroll } from '@/utils/handleSmoothScroll';
import { HERO_BACKGROUND_SRC, HERO_BACKGROUND_MOBILE_SRC } from '@/utils/consts';

const HeroSection: React.FC = () => {
  return (
    <main id="hero" role="main" className="relative h-[600px] flex flex-col justify-center items-center text-left overflow-hidden">
      {/* Background Image (with parallax effect) */}
      <div className="absolute inset-0 z-0 will-change-transform">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={HERO_BACKGROUND_MOBILE_SRC}
          alt="Concert scene background"
          fill
          sizes="(max-width: 768px) 100vw"
          className="object-cover saturate-[.6] brightness-125 blur-[1px] md:hidden"
          priority
          fetchPriority="high"
          style={{
            transform: 'translateY(var(--scroll-y))',
            willChange: 'transform'
          }}
        />
        <Image
          src={HERO_BACKGROUND_SRC}
          alt="Concert scene background"
          fill
          sizes="(min-width: 769px) 100vw"
          className="object-cover saturate-[.6] brightness-125 blur-[1px] hidden md:block"
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
  );
};

export default HeroSection;
