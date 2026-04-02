'use client';

import Image from "next/image";
import React from 'react';
import { bandMembers } from '@/utils/consts';

const BandMembers: React.FC = () => {
  return (
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
  );
};

export default BandMembers;
