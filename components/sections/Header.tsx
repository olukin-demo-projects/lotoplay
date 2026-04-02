'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { handleSmoothScroll } from '@/utils/handleSmoothScroll';

const navigationLinks = [
  { name: 'Про гурт', href: '#about' },
  { name: 'Концерти', href: '#concerts' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Контакти', href: '#contact' },
];

export const Header = () => {
  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Close the sheet first by finding the close button and clicking it
    const closeButton = document.querySelector('[data-slot="sheet-close"]') as HTMLButtonElement;
    if (closeButton) {
      closeButton.click();
    }
    // Then handle smooth scroll
    handleSmoothScroll(e, targetId);
  };

  return (
    <header id="header" role="banner" className="sticky top-0 z-60 bg-background/80 backdrop-blur-sm border-b border-border/10">
      <nav aria-label="Основне меню" className="mx-auto px-6 py-6 flex items-center justify-between max-w-menu">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black uppercase tracking-widest text-foreground">
            G&G
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-md">
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <span className="sr-only">Меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Меню</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 p-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.href)}
                    className="font-medium text-sm hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
