import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music & Community Life",
  description:
    "Discover vibrant music programs at Temple Beth Sholom. Adult Choir and Band, Children's Choir, Beatles Shabbat, Broadway Shabbat, holiday celebrations, and Israel Parade. Join our musical community in Rockland County.",
  openGraph: {
    title: "Music & Community Life | Temple Beth Sholom",
    description: "Adult & Children's Choirs, themed Shabbats (Beatles, Broadway), holiday celebrations, and more at TBS Rockland.",
  },
};

const THEMED_SHABBATS = [
  {
    name: "Beatles Shabbat",
    desc: "Timeless Beatles music woven into Shabbat prayers. A congregation favorite.",
    icon: (
      <svg className="w-5 h-5 text-tbs-gold-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 2.25a.75.75 0 01.75.75v12.08a3.75 3.75 0 11-1.5-2.998V6.31l-10.5 2.1v8.67a3.75 3.75 0 11-1.5-2.998V5.25a.75.75 0 01.6-.735l12-2.4a.75.75 0 01.9.735zM6 18a2.25 2.25 0 100-4.5A2.25 2.25 0 006 18zm12-2.4a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
      </svg>
    ),
  },
  {
    name: "Broadway Shabbat",
    desc: "Beloved Broadway show tunes meet Jewish worship in a spectacular evening.",
    icon: (
      <svg className="w-5 h-5 text-tbs-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    name: "Musical Shabbat",
    desc: "Extra instruments, extra harmony, extra spirit. A feast of sound and soul.",
    icon: (
      <svg className="w-5 h-5 text-tbs-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    name: "Sing-Along Shabbat",
    desc: "Everyone joins in. A joyful, participatory celebration of song and prayer.",
    icon: (
      <svg className="w-5 h-5 text-tbs-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function MusicCommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/events/IMG_3370.JPG"
          alt="Cantor Anna in a sparkly outfit with top hat performing at Broadway Shabbat"
          fill
          className="object-cover object-[center_40%] sm:object-[center_30%] md:object-[center_25%]"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">Music &amp; Community</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Where Music<br />Meets Soul
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-lg">
              From uplifting Shabbat services to festive holiday celebrations, our choirs and bands bring energy, joy, and heart to every moment.
            </p>
            <Link href="#choirs" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg">
              Explore Our Music
            </Link>
          </div>
        </div>
      </section>

      {/* Adult Choir & Band */}
      <section id="choirs" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Our Ensembles</p>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                Adult Choir &amp; Band
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The Adult Choir and Band bring together enthusiastic singers and instrumentalists who
                love sharing their passion for Jewish music. Whether performing beautiful traditional
                melodies or lively contemporary tunes, our adult musicians help lead the congregation
                and make our services truly special.
              </p>
              <div className="bg-warm-50 rounded-2xl p-6 border border-warm-200">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-tbs-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rehearsals: Thursday Evenings</p>
                    <p className="text-tbs-blue-600 font-bold text-2xl font-[family-name:var(--font-heading)]">7:00 &ndash; 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/events/IMG_3046.jpg"
                alt="Cantor Anna conducting and rehearsing in the sanctuary"
                fill
                className="object-cover object-[center_40%] sm:object-[center_30%] md:object-[center_25%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Children's Choir & Band */}
      <section className="py-20 md:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/images/events/Tezza-6405.JPG"
                alt="Cantor Anna smiling warmly with guitar surrounded by children"
                fill
                className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Young Voices</p>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                Children&apos;s Choir &amp; Band
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our Children&apos;s Choir and Band add their own spark of excitement and pride.
                Students rehearse during Religious School on Sundays, making music a natural and
                fun part of their Jewish learning experience. Watching our young performers sing,
                play, and grow in confidence is one of the highlights of congregational life.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-tbs-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rehearsals: During Religious School</p>
                    <p className="text-tbs-blue-600 font-bold text-2xl font-[family-name:var(--font-heading)]">Sunday Mornings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themed Shabbats */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Special Services</p>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Themed Shabbats
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Throughout the year we offer unique musical Shabbat experiences that bring fresh energy and creativity to worship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {THEMED_SHABBATS.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-tbs-gold-100 flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-2">{s.name}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Holiday Services */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/holidays/rabbi-podium.jpg"
            alt="Rabbi speaking at the podium during High Holiday services"
            fill
            className="object-cover object-[center_40%] sm:object-[center_30%] md:object-[center_25%]"
          />
          <div className="absolute inset-0 bg-tbs-blue-900/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.15em] uppercase mb-4">The High Holidays</p>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
              High Holiday Services
            </h2>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-8">
              From beautiful traditional Rosh Hashanah and Yom Kippur services to creative, musical
              High Holiday experiences, our choir and band bring fresh spirit and deep meaning to the
              most sacred time of the Jewish year.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Rosh Hashanah", "Yom Kippur", "Kol Nidre", "Yizkor"].map((service) => (
                <span key={service} className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-warm-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Get Involved</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
            Come Join the Music
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Whether you love to sing, play an instrument, or simply enjoy being part of a joyful
            musical community, our choirs and bands are a wonderful way to connect and celebrate.
            No audition necessary. Just an open heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 transition-all duration-300 shadow-lg">
              View Upcoming Events
            </Link>
            <Link href="/join-donate" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-tbs-blue-200 text-tbs-blue-700 hover:bg-tbs-blue-50 transition-all duration-300">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
