'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" role="contentinfo" className="bg-background border-t border-border/10 py-12">
      <div className="mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10 text-sm text-muted-foreground max-w-page-full">
        <div className="text-center md:text-left space-y-8">
          <p className="text-base text-foreground/80">© 2025 «Грим та Грім». Всі права захищені.</p>
          <p className="text-foreground text-base">
            <a href="mailto:booking@lotoplay.com" className="hover:text-primary transition-colors">booking@lotoplay.com</a> | <a href="tel:+380991234567" className="hover:text-primary transition-colors">+38 (099) 123-45-67</a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { name: 'Instagram', url: 'https://www.instagram.com/reel/C_dwFAcPNkT/' },
            { name: 'YouTube', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
            { name: 'Facebook', url: 'https://www.facebook.com/groups/1199210663926081/posts/1199670603880087/' }
          ].map((link, index) => (
            <React.Fragment key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground/70 hover:text-primary transition-colors text-base">{link.name}</a>
              {index < 2 && <span className="text-foreground/70 text-sm">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
