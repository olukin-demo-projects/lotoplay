import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { upcomingConcerts } from "@/utils/consts";

// Schema.org structured data with dynamic events
const schema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Грим та Грім",
  description: "Український рок-гурт з Києва",
  url: "https://lotoplay.com",
  image: "https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7dxmL5aHqgxe3FC2SzKjJi19sVWImrBNb84cL",
  genre: ["Rock", "Ukrainian Rock"],
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Київ",
    addressCountry: "Україна"
  },
  member: [
    {
      "@type": "Person",
      name: "Максим",
      jobTitle: "гітарист"
    },
    {
      "@type": "Person", 
      name: "Олена",
      jobTitle: "вокалістка"
    },
    {
      "@type": "Person",
      name: "Тарас",
      jobTitle: "барабанщик"
    }
  ],
  event: upcomingConcerts.map((concert) => ({
    "@type": "MusicEvent",
    name: `Концерт «Грим та Грім» - ${concert.city.split(' — ')[0]}`,
    startDate: concert.date.replace(/(\d{2})\.(\d{2})\.(\d{4}), (\d{2}):(\d{2})/, '$3-$2-$1T$4:$5:00+03:00'),
    location: {
      "@type": "Place",
      name: concert.city.split(' — ')[1],
      address: {
        "@type": "PostalAddress",
        addressLocality: concert.city.split(' — ')[0],
        addressCountry: "Україна"
      }
    },
    offers: {
      "@type": "Offer",
      url: "https://lotoplay.com",
      availability: "https://schema.org/InStock"
    }
  }))
};

// Set Roboto as the primary variable
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin", "cyrillic"], // Added cyrillic for the Ukrainian text
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Гурт «Грим та Грім» | Офіційний сайт українського рок-гурту",
  description: "Український рок-гурт «Грим та Грім» — потужні концерти, нові пісні та справжня енергія українського року. Замовляйте квитки онлайн!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={cn("h-full antialiased dark", roboto.variable, "font-sans")} // Forced dark mode to match design
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}