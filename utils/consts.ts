// Band Members Data
export const bandMembers = [
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

// Upcoming Concerts Data
export const upcomingConcerts = [
  { city: 'Київ — Docker-G Pub', capacity: '250', date: '25.10.2025, 19:00', dateId: '240' },
  { city: 'Львів — !FESTrepublic', capacity: '400', date: '01.11.2025, 20:00', dateId: '261' },
  { city: 'Одеса — Зелен театр', capacity: '700', date: '09.11.2025, 19:30', dateId: '253' },
  { city: 'Харків — ArtZavod', capacity: '500', date: '16.11.2025, 19:00', dateId: '229' },
];

// Concert Date URLs Mapping
export const concertDateUrls: Record<string, string> = {
  '240': 'https://demo2.event.net.ua/cart/cart?id_date=240',
  '261': 'https://demo2.event.net.ua/cart/cart?id_date=261',
  '253': 'https://demo2.event.net.ua/cart/cart?id_date=253',
  '229': 'https://demo2.event.net.ua/cart/cart?id_date=229',
} as const;

// Media URLs
export const ABOUT_VIDEO_SRC = 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx745GptCXoIrTbCxKyLgJAVz6XpnjtZekcwM9P' as const;

// Hero Background Images
export const HERO_BACKGROUND_SRC = 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7dxmL5aHqgxe3FC2SzKjJi19sVWImrBNb84cL' as const;
export const HERO_BACKGROUND_MOBILE_SRC = 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx7yHoLPCtMk6sdqw932JNQm7VnoepAW0GZvyhE' as const;

// About Section Static Image
export const ABOUT_STATIC_IMAGE_SRC = 'https://zra0j6cq7i.ufs.sh/f/5k3xyIUP1Tx71dmeCKfy7F6dY4wiWxfqopgOIuyz5B1hXebS' as const;
