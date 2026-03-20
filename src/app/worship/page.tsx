import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SERVICES, CONTACT, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Worship & Shabbat Services",
  description:
    "Join Temple Beth Sholom for warm, musical Shabbat services every Friday at 7:30 PM at RJCC Rockland, West Nyack, NY. Inclusive Reform Jewish worship with English and Hebrew liturgy. Watch live on Facebook.",
  openGraph: {
    title: "Worship & Shabbat | Temple Beth Sholom",
    description: "Friday night Shabbat services at 7:30 PM. Musical, inclusive, welcoming Reform Jewish worship in Rockland County, NY.",
  },
};

const WHAT_TO_EXPECT = [
  { text: "Music-filled, participatory services", detail: "Singing, instruments, and joyful prayer" },
  { text: "Inclusive Reform Judaism", detail: "All are welcome, always" },
  { text: "Families and children welcome", detail: "Every age belongs here" },
  { text: "English and Hebrew liturgy", detail: "Accessible to everyone" },
  { text: "No membership required", detail: "Just come as you are" },
];

export default function WorshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/shabbat/candle-lighting.jpg"
          alt="A couple lights Shabbat candles together under the chuppah at Temple Beth Sholom"
          fill
          className="object-cover object-[center_65%] sm:object-[center_60%]"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">Worship</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Experience<br />Shabbat
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-lg">
              Warm, musical, and welcoming. Our Friday night services are a celebration of community, spirit, and song.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/watch-live" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                Watch Live
              </Link>
              <Link href="#schedule" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300">
                Service Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Icons */}
      <section className="py-10 md:py-14 bg-warm-50 border-b border-warm-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                label: "Candle Lighting",
                icon: (
                  <svg className="w-7 h-7 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
                  </svg>
                ),
              },
              {
                label: "Torah & Prayer",
                icon: (
                  <svg className="w-7 h-7 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
              {
                label: "Music & Song",
                icon: (
                  <svg className="w-7 h-7 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                  </svg>
                ),
              },
              {
                label: "Every Friday",
                icon: (
                  <svg className="w-7 h-7 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-tbs-gold-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-tbs-blue-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Schedule + What to Expect */}
      <section id="schedule" className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Every Week</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
                Friday Night Shabbat
              </h2>

              <div className="bg-warm-50 rounded-2xl p-6 sm:p-8 mb-8 border border-warm-200">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-tbs-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{SERVICES.shabbat.day} Evenings</p>
                      <p className="text-tbs-blue-600 font-bold text-2xl sm:text-3xl font-[family-name:var(--font-heading)]">{SERVICES.shabbat.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-tbs-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{SERVICES.shabbat.location}</p>
                      <p className="text-gray-500">{CONTACT.fullAddress}</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Shabbat services are the heart of Temple Beth Sholom. Led by Rabbi Doug Sagal and Cantor Anna Zhar,
                each Friday evening is a beautiful blend of prayer, music, and togetherness.
              </p>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Watch and follow:</span>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Facebook">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Instagram">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                What to Expect
              </h3>
              <div className="space-y-3">
                {WHAT_TO_EXPECT.map((item) => (
                  <div key={item.text} className="flex items-start gap-3 p-4 rounded-xl bg-warm-50 border border-warm-100">
                    <div className="w-6 h-6 rounded-full bg-tbs-mint-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-tbs-blue-700" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">{item.text}</p>
                      <p className="text-gray-500 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/events/High holidays.JPG"
                  alt="Cantor Anna leading the choir in white robes during High Holiday services"
                  fill
                  className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/events/shabbat high holidays rabbi.JPG"
          alt="Rabbi Doug speaking passionately from the podium during High Holiday services"
          fill
          className="object-cover object-[center_35%] sm:object-[center_30%] md:object-[center_25%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-tbs-blue-900/30" />
      </section>

      {/* Special Worship Experiences */}
      <section className="py-16 md:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Throughout the Year</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Special Worship Experiences
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Unique and inspiring services that make each Shabbat feel special.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Musical Shabbat", description: "An uplifting service filled with beautiful melodies and harmonies from our talented musicians and choir." },
              { title: "Broadway Shabbat", description: "Beloved show tunes woven into our worship. A celebration of both song and spirit." },
              { title: "Beatles Shabbat", description: "A fun, spirited Shabbat featuring the timeless music of The Beatles alongside our prayers." },
              { title: "High Holiday Services", description: "Meaningful Rosh Hashanah and Yom Kippur services for the entire community." },
            ].map((service) => (
              <div key={service.title} className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg hover:border-tbs-gold-200 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-3 group-hover:text-tbs-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/events" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 transition-all duration-300 shadow-lg">
              View Upcoming Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image
          src="/images/shabbat/shabbat-6805.jpg"
          alt="Community members share Torah during Shabbat services"
          fill
          className="object-cover object-[center_55%] sm:object-[center_50%] md:object-[center_45%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-blue-900/90 to-tbs-blue-800/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Join Us This Friday
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Everyone is welcome. Just come as you are.
          </p>
          <Link href="/watch-live" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg">
            Watch Services Live
          </Link>
        </div>
      </section>
    </>
  );
}
