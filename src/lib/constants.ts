export const SITE = {
  name: "Temple Beth Sholom",
  tagline: "A Warm, Vibrant Reform Jewish Community in Rockland County",
  shortName: "TBS",
  url: "https://tbs-rockland.vercel.app",
} as const;

export const CONTACT = {
  address: "JCC Rockland, 450 W Nyack Rd",
  city: "West Nyack",
  state: "NY",
  zip: "10994",
  fullAddress: "JCC Rockland, 450 W Nyack Rd, West Nyack, NY 10994",
  phone: "(845) 638-0770",
  email: "info@tbsrockland.org",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/TBSNewCityNY/",
  instagram: "https://www.instagram.com/tbs.rockland/",
  instagramHandle: "@tbs.rockland",
  youtube: "https://www.youtube.com/@tbsrockland",
  podcast: "Spiritually Speaking by Temple Beth Sholom",
} as const;

export const SERVICES = {
  shabbat: {
    day: "Friday",
    time: "7:30 PM",
    location: "JCC Rockland",
    description:
      "Warm, musical, and welcoming Shabbat services open to everyone.",
  },
  torahStudy: {
    day: "Saturday",
    time: "10:00 AM",
    location: "JCC Rockland / Zoom",
    description:
      "Join Rabbi Doug and the community as we explore the weekly Torah portion.",
  },
} as const;

export const DONATE = {
  zelle: "TBSRockland",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Worship", href: "/worship" },
  { label: "Torah Study", href: "/torah-study" },
  { label: "Events", href: "/events" },
  { label: "Watch Live", href: "/watch-live" },
  { label: "Religious School", href: "/religious-school" },
  { label: "Music & Community", href: "/music-community" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clergy & Staff", href: "/clergy-staff" },
] as const;
