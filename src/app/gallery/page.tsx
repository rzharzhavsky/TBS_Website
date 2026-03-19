import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo and Video Gallery",
  description:
    "Browse photos and videos from Temple Beth Sholom, including Shabbat services, holiday celebrations, Purim Shpiels, music performances, Religious School, community events, and Israel Parade.",
  openGraph: {
    title: "Gallery | Temple Beth Sholom",
    description:
      "Photos and videos from our vibrant Reform Jewish community in Rockland County.",
  },
};

const GALLERY_IMAGES = [
  {
    src: "/images/gallery/IMG_3634.JPG",
    alt: "Rabbi Doug holding the Torah scroll with a child and community members in the sanctuary with colorful mural backdrop",
    category: "Shabbat",
  },
  {
    src: "/images/events/High holidays.JPG",
    alt: "Cantor Anna leading the choir in white robes during High Holiday services",
    category: "Holidays",
  },
  {
    src: "/images/shabbat/candle-lighting.jpg",
    alt: "A couple lights Shabbat candles together at Temple Beth Sholom",
    category: "Shabbat",
  },
  {
    src: "/images/events/Tezza-6405.JPG",
    alt: "Cantor Anna smiling warmly with guitar surrounded by children",
    category: "Music",
  },
  {
    src: "/images/events/IMG_6376.jpg",
    alt: "Community gathered outdoors for Hanukkah menorah lighting with guitar",
    category: "Holidays",
  },
  {
    src: "/images/shabbat/service-bimah.jpg",
    alt: "A service on the bimah at Temple Beth Sholom",
    category: "Shabbat",
  },
  {
    src: "/images/events/IMG_3633.jpg",
    alt: "Rabbi Doug smiling warmly while holding the Torah scroll",
    category: "Shabbat",
  },
  {
    src: "/images/events/IMG_3370.JPG",
    alt: "Cantor Anna in a sparkly outfit with top hat performing at Broadway Shabbat",
    category: "Music",
  },
  {
    src: "/images/community/6c35b0d5-57cf-48eb-ac7f-a526f10c9b8c.JPG",
    alt: "TBS community gathered by the lake for Tashlich with guitar player in a beautiful outdoor setting",
    category: "Community",
  },
  {
    src: "/images/shabbat/cantor-singing.jpg",
    alt: "Cantor Anna Zhar singing joyfully during a service",
    category: "Music",
  },
  {
    src: "/images/events/FullSizeRender.JPG",
    alt: "Community members holding the Torah scroll open during a Torah unrolling ceremony",
    category: "Shabbat",
  },
  {
    src: "/images/shabbat/baby-naming.jpg",
    alt: "A joyful baby naming ceremony at TBS",
    category: "Community",
  },
  {
    src: "/images/events/Purim/83e54496-ea5c-4c25-a100-14651aad6ac5.JPG",
    alt: "Purim celebration with hamantaschen and festive food on display",
    category: "Holidays",
  },
  {
    src: "/images/holidays/choir-performance.jpg",
    alt: "The TBS choir performing during a holiday celebration",
    category: "Music",
  },
  {
    src: "/images/shabbat/torah-procession.jpg",
    alt: "Torah procession through the congregation",
    category: "Shabbat",
  },
  {
    src: "/images/holidays/holidays-7302.jpg",
    alt: "Community members celebrating during a holiday event",
    category: "Holidays",
  },
  {
    src: "/images/shabbat/shabbat-6630.jpg",
    alt: "A moment from Friday night Shabbat services",
    category: "Shabbat",
  },
  {
    src: "/images/holidays/holidays-7667.jpg",
    alt: "A holiday celebration at Temple Beth Sholom",
    category: "Holidays",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/holidays/holidays-6621.jpg"
          alt="Temple Beth Sholom community gathered for a celebration"
          fill
          className="object-cover object-[center_40%] sm:object-[center_30%] md:object-[center_25%]"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Photos and Videos
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Our Community<br />in Pictures
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-lg">
              Moments of joy, prayer, celebration, and togetherness from the
              life of Temple Beth Sholom.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Browse
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Snapshots of Community Life
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From Shabbat services to holiday celebrations, here is what it
              looks like to be part of TBS.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {GALLERY_IMAGES.map((image, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-tbs-blue-800">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clergy Team Photo */}
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/clergy/team-photo.jpg"
          alt="The Temple Beth Sholom clergy and staff team"
          fill
          className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-tbs-blue-900/30" />
      </section>

      {/* More Coming Soon */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
            Stay Tuned
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
            More Photos Coming Soon
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We are always capturing new moments from our services, events, and
            community life. Check back often for new additions, and follow us on
            social media for the latest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/TBSNewCityNY/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 transition-all duration-300 shadow-lg"
            >
              Follow on Facebook
            </a>
            <a
              href="https://www.instagram.com/rockland.tbs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border-2 border-tbs-blue-600 text-tbs-blue-600 hover:bg-tbs-blue-600 hover:text-white transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
