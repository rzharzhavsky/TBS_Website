import Link from "next/link";
import Image from "next/image";
import { SERVICES, SOCIAL } from "@/lib/constants";
import { UPCOMING_EVENTS, CATEGORY_COLORS } from "@/lib/events-data";
import { fetchCalendarEvents } from "@/lib/google-calendar";
import HeroSlider from "@/components/HeroSlider";
import NewsletterForm from "@/components/NewsletterForm";

export const revalidate = 3600;

export default async function Home() {
  const calendarEvents = await fetchCalendarEvents(3);
  const events = calendarEvents ?? UPCOMING_EVENTS.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        <HeroSlider />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Reform Jewish Community in Rockland County, NY
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Welcome<br />Home
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-lg">
              A place where every person is welcomed, every voice matters, and every Shabbat feels like coming home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/welcome"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                I&apos;m New Here
              </Link>
              <Link
                href="/watch-live"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Live
              </Link>
            </div>
          </div>
        </div>

        {/* Service times bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-tbs-blue-900/70 backdrop-blur-md border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tbs-gold-300" />
                <span className="text-tbs-gold-300 font-medium">Shabbat</span>
                <span className="text-blue-200">{SERVICES.shabbat.day}s at {SERVICES.shabbat.time}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tbs-gold-300" />
                <span className="text-tbs-gold-300 font-medium">Torah Study</span>
                <span className="text-blue-200">{SERVICES.torahStudy.day}s at {SERVICES.torahStudy.time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-16 md:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Our Community</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 leading-tight mb-6">
                A Place to<br />Belong
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Temple Beth Sholom is a welcoming Reform Jewish community where people of all
                  backgrounds come together to worship, learn, and celebrate. Based at RJCC Rockland
                  in West Nyack, we believe in the power of inclusivity, music, and real connection.
                </p>
                <p>
                  Whether you are looking for a spiritual home, want to give your children a strong
                  Jewish education, or simply want to be part of something warm and meaningful, you
                  will find your place here.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/about" className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 transition-all duration-300">
                  Our Story
                </Link>
                <Link href="/clergy-staff" className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full border-2 border-tbs-blue-200 text-tbs-blue-700 hover:bg-tbs-blue-50 transition-all duration-300">
                  Meet Our Clergy
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/clergy/team-photo.jpg"
                  alt="The Temple Beth Sholom clergy and staff team smiling together"
                  fill
                  className="object-cover object-[center_30%] sm:object-[center_28%] md:object-[center_25%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Jewish Life - Photo Mosaic */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Life at TBS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Experience Jewish Life
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Worship, learn, sing, and grow together.
            </p>
          </div>

          {/* Desktop: 3-col mosaic, Mobile: 2-col simple grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <Link href="/worship" className="group relative aspect-[3/4] md:aspect-[3/5] rounded-2xl overflow-hidden md:row-span-2">
              <Image src="/images/events/IMG_6420.JPG" alt="Interfaith candle lighting ceremony on the bimah at Temple Beth Sholom" fill className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%] transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white text-lg md:text-2xl font-bold font-[family-name:var(--font-heading)] group-hover:text-tbs-gold-300 transition-colors">Worship &amp; Shabbat</h3>
                <p className="text-white/70 text-sm mt-1 hidden sm:block">Friday nights at 7:30 PM</p>
              </div>
            </Link>

            <Link href="/torah-study" className="group relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/events/shabbat high holidays rabbi.JPG" alt="Rabbi Doug speaking passionately from the podium during High Holiday services" fill className="object-cover object-[center_35%] sm:object-[center_30%] md:object-[center_25%] transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="text-white text-base md:text-xl font-bold font-[family-name:var(--font-heading)] group-hover:text-tbs-gold-300 transition-colors">Torah Study</h3>
                <p className="text-white/70 text-sm mt-1 hidden sm:block">Saturdays at 10 AM</p>
              </div>
            </Link>

            <Link href="/music-community" className="group relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/events/IMG_9809.JPEG" alt="Cantor Anna conducting the TBS choir during a spirited service" fill className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%] transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="text-white text-base md:text-xl font-bold font-[family-name:var(--font-heading)] group-hover:text-tbs-gold-300 transition-colors">Music &amp; Choir</h3>
                <p className="text-white/70 text-sm mt-1 hidden sm:block">Voices of our community</p>
              </div>
            </Link>

            <Link href="/events" className="group relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/holidays/holidays-7667.jpg" alt="A young person blows the shofar during High Holiday services" fill className="object-cover object-[center_40%] sm:object-[center_30%] md:object-[center_25%] transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="text-white text-base md:text-xl font-bold font-[family-name:var(--font-heading)] group-hover:text-tbs-gold-300 transition-colors">High Holidays</h3>
                <p className="text-white/70 text-sm mt-1 hidden sm:block">Sacred moments together</p>
              </div>
            </Link>

            <Link href="/religious-school" className="group relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/holidays/holidays-7249.jpg" alt="Young people sing together on the bimah during services" fill className="object-cover object-[center_45%] sm:object-[center_40%] md:object-[center_35%] transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="text-white text-base md:text-xl font-bold font-[family-name:var(--font-heading)] group-hover:text-tbs-gold-300 transition-colors">Next Generation</h3>
                <p className="text-white/70 text-sm mt-1 hidden sm:block">Learning and growing</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* This Week at TBS */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-3">Upcoming</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800">
                This Week at TBS
              </h2>
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-tbs-blue-600 hover:text-tbs-blue-800 transition-colors">
              View all events
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${CATEGORY_COLORS[event.category]}`}>
                  {event.category}
                </span>
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/holidays/holidays-7606.jpg"
          alt="Rabbi Doug and a musician blow shofars together during High Holiday services"
          fill
          className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-tbs-blue-900/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <svg className="w-10 h-10 text-tbs-gold-300/50 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-white leading-snug italic mb-8">
            The Torah is not in heaven. It is here, in our hands, in our hearts, in the conversations we share.
          </blockquote>
          <cite className="text-tbs-gold-300 text-lg not-italic font-medium">
            Rabbi Doug Sagal
          </cite>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-full bg-tbs-gold-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Get our weekly newsletter with Shabbat times, upcoming events, and community news delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="light" />
          </div>
          <p className="text-gray-400 text-xs mt-4">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Instagram & Podcast */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Instagram */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800">
                    {SOCIAL.instagramHandle}
                  </h2>
                  <p className="text-gray-400 text-sm">Follow our community moments</p>
                </div>
              </div>
              {/* Live Instagram Embed */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.instagram.com/rockland.tbs/embed"
                  className="w-full border-0"
                  height="480"
                  scrolling="no"
                  /* @ts-expect-error - lowercase HTML attribute */
                  allowtransparency="true"
                  title="TBS Rockland Instagram Feed"
                />
              </div>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-90 transition-opacity">
                Follow on Instagram
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Podcast */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Image src="/images/logos/spiritually-speaking.png" alt="Spiritually Speaking Podcast" width={56} height={56} className="rounded-xl shadow-md" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800">
                    Spiritually Speaking
                  </h2>
                  <p className="text-gray-400 text-sm">Our podcast</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Honest conversations about Jewish life, spirituality, and what it really means to be part of a community. New episodes regularly.
              </p>
              <div className="bg-warm-100 rounded-2xl p-6 mb-6 border border-warm-200">
                <p className="text-sm text-gray-500 mb-4">Listen wherever you get your podcasts:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 rounded-full bg-white text-sm font-medium text-gray-700 shadow-sm">Apple Podcasts</span>
                  <span className="px-5 py-2.5 rounded-full bg-white text-sm font-medium text-gray-700 shadow-sm">Spotify</span>
                  <span className="px-5 py-2.5 rounded-full bg-white text-sm font-medium text-gray-700 shadow-sm">YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/shabbat/shabbat-6926.jpg"
          alt="Community members gathered together during services"
          fill
          className="object-cover object-[center_65%] sm:object-[center_60%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-blue-900/90 to-tbs-blue-800/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Come As You Are
          </h2>
          <p className="text-blue-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether it is your first Shabbat or your thousandth, there is always room at our table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-donate" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg">
              Become a Member
            </Link>
            <Link href="/join-donate" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
