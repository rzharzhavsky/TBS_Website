import type { Metadata } from "next";
import "./globals.css";
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import Footer from "@/components/layout/Footer";
import { CONSTANT_CONTACT_ACTIVE_FORM_SITE_ID } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: "Temple Beth Sholom | Reform Jewish Community in Rockland County, NY",
    template: "%s | Temple Beth Sholom",
  },
  description:
    "Temple Beth Sholom is a warm, vibrant Reform Jewish community in Rockland County, NY. Join us for Shabbat services, Torah study, music, and community events at RJCC Rockland in West Nyack.",
  keywords: [
    "Temple Beth Sholom",
    "TBS Rockland",
    "Reform Judaism",
    "Rockland County synagogue",
    "Shabbat services West Nyack",
    "Jewish community Rockland",
    "Reform Jewish temple NY",
    "Friday night services",
    "Torah study",
    "Jewish music programs",
    "Religious school Rockland County",
    "Rabbi Doug Sagal",
    "Cantor Anna Zhar",
  ],
  openGraph: {
    title: "Temple Beth Sholom | Reform Jewish Community in Rockland County",
    description:
      "A warm, vibrant Reform Jewish community in Rockland County, NY. Shabbat services, Torah study, music programs, and more at RJCC Rockland.",
    type: "website",
    locale: "en_US",
    siteName: "Temple Beth Sholom",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temple Beth Sholom",
    description:
      "A warm, vibrant Reform Jewish community in Rockland County, NY.",
  },
  alternates: {
    canonical: "https://tbsrockland.org",
  },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "West Nyack",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PlaceOfWorship",
  name: "Temple Beth Sholom",
  alternateName: "TBS Rockland",
  description:
    "A warm, vibrant Reform Jewish community in Rockland County, NY. Offering Shabbat services, Torah study, music programs, religious school, and community events.",
  url: "https://tbsrockland.org",
  telephone: "(845) 638-0770",
  address: {
    "@type": "PostalAddress",
    streetAddress: "RJCC Rockland, 450 W Nyack Rd",
    addressLocality: "West Nyack",
    addressRegion: "NY",
    postalCode: "10994",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.1,
    longitude: -73.97,
  },
  sameAs: [
    "https://www.facebook.com/TBSrockalnd",
    "https://www.instagram.com/rockland.tbs/",
    "https://www.youtube.com/@tbsrockland",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "19:30",
      closes: "21:00",
      description: "Shabbat Services",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "11:30",
      description: "Torah Study",
    },
  ],
  memberOf: {
    "@type": "Organization",
    name: "Union for Reform Judaism",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Plain script so _ctct_m runs in initial HTML before Next chunks (CC widget needs this for submit). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var _ctct_m = ${JSON.stringify(CONSTANT_CONTACT_ACTIVE_FORM_SITE_ID)};`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-[family-name:var(--font-body)]" suppressHydrationWarning>
        <HeaderWrapper />
        <main className="[padding-top:var(--header-height,7.5rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
