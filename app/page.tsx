'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import GoogleMap from '@/components/GoogleMap';
import { useParallax } from '@/hooks/useParallax';

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

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId.replace('#', ''));
  if (targetElement) {
    const headerHeight = 80; // Approximate header height for offset
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

const Page: NextPage = () => {
  useParallax();

  return (
    <>
      <Head>
        <title>Гурд Грим та Грім | Офіційний сайт</title>
      </Head>

      <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">

        {/* Header/Nav */}
        <header id="header" className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/10">
          <nav className="mx-auto px-6 py-6 flex items-center justify-between max-w-menu">
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
        <section id="hero" className="relative h-[606px] flex flex-col justify-center items-center text-left overflow-hidden">
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
            <a
              href="#concerts"
              onClick={(e) => handleSmoothScroll(e, '#concerts')}
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-base font-bold text-primary-foreground uppercase tracking-wider transition-all btn-glow btn-brutalist"
            >
              Замовити квиток
            </a>
          </div>
        </section>

        {/* Upcoming Concerts */}
        <section id="concerts" className="py-20">
          <div className="mx-auto px-6 max-w-page-full">
            <div className="overflow-x-auto rounded-xl border-2 border-table-border backdrop-blur-md overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-table-header border-b-2 border-table-border">
                  <tr>
                    <th colSpan={4} className="p-6">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">
                        Найближчі концерти
                      </h2>
                    </th>
                  </tr>
                  <tr className="border-t-2 border-table-border">
                    {['Місто / Заклад', 'К-сть місць', 'Дата і час', ''].map((header) => (
                      <th key={header} className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-table-row divide-y-2 divide-table-border">
                  {upcomingConcerts.map((concert, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-sm font-bold text-white">{concert.city}</td>
                      <td className="px-6 py-5 text-sm text-white">{concert.capacity}</td>
                      <td className="px-6 py-5 text-sm text-white">{concert.date}</td>
                      <td className="px-6 py-5 text-center">
                        <button className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground hover:bg-secondary/90 transition-colors whitespace-nowrap">
                          Замовити квиток
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto px-6 py-20 max-w-page-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Учасники гурту
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {bandMembers.map((member) => (
              <div key={member.name} className="group relative">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border border-border/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={member.imgSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xl font-bold text-foreground/90 tracking-tight transition-colors group-hover:text-primary">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-linear-to-b from-muted/30 to-background py-24">
          <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center max-w-page-full">
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-foreground">
                Наша історія
              </h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                <p>
                  «Грим та Грім» народився з бажання створювати музику, яка відчувається серцем. Ми почали свій шлях у маленькій студії в центрі Києва, де кожен акорд, кожне слово було наповнене емоціями та переживаннями. Це було місце, де народжувались наші перші пісні, де ми вчились грати разом як єдиний організм.
                </p>
                <p>
                  За роки нашої діяльності ми виступили на десятках сцен, від невеликих клубів до великих фестивалів. Наша музика — це поєднання традиційного року з сучасними елементами, що робить її унікальною та впізнаваною. Ми не боїмось експериментувати з звуком, додаючи електронні елементи або народні інструменти.
                </p>
                <p>
                  Кожен наш виступ — це не просто концерт, а справжня подія, де ми ділимося своєю енергією з глядачами та створюємо неповторну атмосферу. Ми віримо, що музика має силу об’єднувати людей, створювати спільноти та надихати на зміни.
                </p>
                <p>
                  Наш колектив складається з досвідчених музикантів, кожен з яких привносить свій унікальний стиль та бачення. Максим створює неймовірні гітарні рифи, Олена зачаровує своїм вокалом, а Тарас тримає ритм, який змушує серця битися в унісон з музикою.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="relative rounded-2xl border border-border/10 overflow-hidden aspect-[4/3] shadow-2xl skew-y-1 transition-transform duration-500 hover:skew-y-0 hover:scale-[1.02]">
                <Image
                  src="https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx71dmeCKfy7F6dY4wiWxfqopgOIuyz5B1hXebS"
                  alt="Concert crowd section"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 41vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 -z-10 w-full h-full bg-primary/10 rounded-2xl border border-primary/20"></div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="bg-linear-to-t from-muted/30 to-background py-24">
          <div className="mx-auto px-6 max-w-page-full">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Зв&apos;яжіться з нами
              </h2>
              <p className="text-foreground/60">Хочеш заказати виступ або маєш питання? Пиши!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

              {/* Contact Form */}
              <div className="bg-card/40 backdrop-blur-xl p-10 rounded-3xl border border-border/10 shadow-2xl">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Ім&apos;я</label>
                    <input type="text" placeholder="Ваше ім'я" className="w-full px-6 py-4 bg-input/50 border border-border/10 rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Email</label>
                    <input type="email" placeholder="example@mail.com" className="w-full px-6 py-4 bg-input/50 border border-border/10 rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Повідомлення</label>
                    <textarea placeholder="Розкажи про свої ідеї..." rows={5} className="w-full px-6 py-4 bg-input/50 border border-border/10 rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:outline-none transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center rounded-xl bg-secondary py-5 text-base font-bold text-secondary-foreground uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
                    Відправити
                  </button>
                </form>
              </div>

              {/* Google Map */}
              <div className="space-y-6">
                <div className="bg-card/40 backdrop-blur-xl rounded-3xl border border-border/10 shadow-2xl overflow-hidden aspect-square relative group">
                  <GoogleMap
                    center={{ lat: 50.4501, lng: 30.5234 }}
                    zoom={14}
                    className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-6 py-3 rounded-full text-xs font-bold text-foreground border border-border/10 shadow-2xl tracking-widest uppercase">
                    Наше місцезнаходження
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer" className="bg-background border-t border-border/10 py-12">
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