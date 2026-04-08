export const SITE = {
  name: "Temple Beth Sholom",
  tagline: "A Warm, Vibrant Reform Jewish Community in Rockland County",
  shortName: "TBS",
  url: "https://tbsrockland.org",
} as const;

export const CONTACT = {
  address: "RJCC Rockland, 450 W Nyack Rd",
  city: "West Nyack",
  state: "NY",
  zip: "10994",
  fullAddress: "RJCC Rockland, 450 W Nyack Rd, West Nyack, NY 10994",
  phone: "(845) 638-0770",
  email: "vkatsnelson@tbsrockland.org",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/TBSrockalnd",
  instagram: "https://www.instagram.com/rockland.tbs/",
  instagramHandle: "@rockland.tbs",
  youtube: "https://www.youtube.com/@tbsrockland",
  podcast: "Spiritually Speaking by Temple Beth Sholom",
} as const;

export const SERVICES = {
  shabbat: {
    day: "Friday",
    time: "7:30 PM",
    location: "RJCC Rockland",
    description:
      "Warm, musical, and welcoming Shabbat services open to everyone.",
  },
  torahStudy: {
    day: "Saturday",
    time: "10:00 AM",
    location: "RJCC Rockland / Zoom",
    description:
      "Join Rabbi Doug and the community as we explore the weekly Torah portion.",
  },
} as const;

export const DONATE = {
  zelle: "TBSRockland",
} as const;

/** Constant Contact Active Forms — universal code (`var _ctct_m`) */
export const CONSTANT_CONTACT_ACTIVE_FORM_SITE_ID =
  process.env.NEXT_PUBLIC_CC_ACTIVE_FORM_SITE_ID ??
  "60f5e06749647e98447d10254d0a0809";

/** Inline form embed (`data-form-id`) */
export const CONSTANT_CONTACT_INLINE_FORM_ID =
  process.env.NEXT_PUBLIC_CC_INLINE_FORM_ID ??
  "d4f24638-566d-4ffb-ba1a-8eaa22dcf602";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Worship", href: "/worship" },
  { label: "Torah Study", href: "/torah-study" },
  { label: "Calendar", href: "/events" },
  { label: "Watch Live", href: "/watch-live" },
  { label: "Religious School", href: "/religious-school" },
  { label: "Teen", href: "/teen" },
  { label: "Music & Community", href: "/music-community" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clergy & Staff", href: "/clergy-staff" },
  { label: "Contact", href: "/contact" },
] as const;
