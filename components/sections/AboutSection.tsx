'use client';

import React from 'react';
import { VideoContainer, VideoWrapper, VideoImage, VideoElement, VideoBackdrop } from "@/components/ui/video-container";
import { ABOUT_VIDEO_SRC, ABOUT_STATIC_IMAGE_SRC } from '@/utils/consts';

interface AboutSectionProps {
  aboutSectionRef: React.RefObject<HTMLElement | null>;
  aboutVideoRef: React.RefObject<HTMLVideoElement | null>;
  aboutTextRef: React.RefObject<HTMLParagraphElement | null>;
  videoExpanded: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ 
  aboutSectionRef, 
  aboutVideoRef, 
  aboutTextRef, 
  videoExpanded 
}) => {
  return (
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
                src={ABOUT_STATIC_IMAGE_SRC}
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
  );
};

export default AboutSection;
