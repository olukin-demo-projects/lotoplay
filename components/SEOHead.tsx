import Head from 'next/head';
import { JsonLd } from 'react-schemaorg';
import { MusicGroup, MusicEvent } from 'schema-dts';

interface SEOHeadProps {
  upcomingConcerts: Array<{
    city: string;
    capacity: string;
    date: string;
  }>;
}

const SEOHead: React.FC<SEOHeadProps> = ({ upcomingConcerts }) => {
  return (
    <Head>
      <title>Гурт «Грим та Грім» | Офіційний сайт українського рок-гурту</title>
      
      {/* Basic Meta Tags */}
      <meta name="description" content="Офіційний сайт українського рок-гурту «Грим та Грім». Концерти, квитки, учасники гурту. Найближчі виступи: Київ, Львів, Одеса, Харків. Справжній український рок." />
      <meta name="keywords" content="Грим та Грім, український рок, рок-гурт, концерти, квитки, Максим, Олена, Тарас, українська музика, live music, Київ, Львів, Одеса, Харків" />
      <meta name="author" content="Гурт «Грим та Грім»" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Geo/Location Meta Tags for SEO */}
      <meta name="geo.region" content="UA" />
      <meta name="geo.placename" content="Київ, Україна" />
      <meta name="geo.position" content="50.401279;30.529451" />
      <meta name="ICBM" content="50.401279, 30.529451" />
      
      {/* Event/Concert Meta Tags */}
      <meta name="event" content="Концерт «Грим та Грім» в Києві" />
      <meta name="event_start_date" content="2025-10-25T19:00:00+03:00" />
      <meta name="event_location" content="Docker-G Pub, Київ" />
      <meta name="event_organizer" content="Гурт «Грим та Грім»" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lotoplay.com" />
      <meta property="og:title" content="Гурт «Грим та Грім» | Офіційний сайт" />
      <meta property="og:description" content="Офіційний сайт українського рок-гурту «Грим та Грім». Концерти, квитки, учасники гурту. Приєднуйся до найближчих виступів!" />
      <meta property="og:image" content="https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7dxmL5aHqgxe3FC2SzKjJi19sVWImrBNb84cL" />
      <meta property="og:image:alt" content="Гурт «Грим та Грім» на сцені" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="uk_UA" />
      <meta property="og:site_name" content="Грим та Грім" />
      
      {/* Open Graph Event Tags */}
      <meta property="event:title" content="Концерт «Грим та Грім»" />
      <meta property="event:description" content="Живий виступ українського рок-гурту «Грим та Грім»" />
      <meta property="event:start_time" content="2025-10-25T19:00:00+03:00" />
      <meta property="event:location:latitude" content="50.401279" />
      <meta property="event:location:longitude" content="30.529451" />
      <meta property="event:location:city" content="Київ" />
      <meta property="event:location:country" content="Україна" />
      
      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://lotoplay.com" />
      <meta property="twitter:title" content="Гурт «Грим та Грім» | Офіційний сайт" />
      <meta property="twitter:description" content="Український рок-гурт. Концерти у Києві, Львові, Одесі, Харкові. Замовляй квитки!" />
      <meta property="twitter:image" content="https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7dxmL5aHqgxe3FC2SzKjJi19sVWImrBNb84cL" />
      <meta property="twitter:image:alt" content="Гурт «Грим та Грім» на сцені" />
      
      {/* Music/Band Specific Meta Tags */}
      <meta name="music:musician" content="Грим та Грім" />
      <meta name="music:album" content="Грим та Грім - Сингли" />
      <meta name="music:release_date" content="2025" />
      <meta name="music:duration" content="240" />
      
      {/* Schema.org structured data for MusicGroup */}
      <JsonLd<MusicGroup>
        item={{
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
          event: upcomingConcerts.map((concert): MusicEvent => ({
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
        }}
      />
    </Head>
  );
};

export default SEOHead;
