import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SERVICES, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Watch Live Services",
  description:
    "Watch Temple Beth Sholom Shabbat services live on Facebook every Friday at 7:30 PM ET. Stream Reform Jewish worship from anywhere in the world.",
  openGraph: {
    title: "Watch Live | Temple Beth Sholom",
    description:
      "Stream our Friday night Shabbat services live on Facebook. Join from anywhere.",
  },
};

export default function WatchLivePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/shabbat/shabbat-6818.jpg"
          alt="Congregation gathered for Shabbat services at Temple Beth Sholom"
          fill
          className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Live Stream
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Watch Our<br />Services Live
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-lg">
              Join us from anywhere in the world. Our Shabbat services stream
              live every Friday evening on Facebook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Watch on Facebook
              </a>
              <a
                href="https://www.youtube.com/@TempleBethShalomrockland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* YouTube Section */}
      <section className="py-16 md:py-20 bg-warm-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-full bg-[#FF0000]/10 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-7 h-7 text-[#FF0000]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
            Watch Past Services on YouTube
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
            Missed a service? Catch up on past Shabbat services, High Holiday
            worship, concerts, and more on our YouTube channel.
          </p>
          <a
            href="https://www.youtube.com/@TempleBethShalomrockland"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-[#FF0000] text-white hover:bg-[#cc0000] transition-all duration-300 shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit Our YouTube Channel
          </a>
        </div>
      </section>

      {/* Stream Schedule */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Every Week
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
                Live Stream Schedule
              </h2>

              <div className="bg-warm-50 rounded-2xl p-6 sm:p-8 mb-8 border border-warm-200">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-tbs-gold-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        {SERVICES.shabbat.day} Night Shabbat
                      </p>
                      <p className="text-tbs-blue-600 font-bold text-2xl sm:text-3xl font-[family-name:var(--font-heading)]">
                        {SERVICES.shabbat.time} ET
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-tbs-gold-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        Special Services and Holidays
                      </p>
                      <p className="text-gray-500">
                        Check our events calendar for additional streams
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you are traveling, under the weather, or simply too far
                away to join in person, our live stream keeps you connected to
                the TBS community. Every Friday evening, we bring Shabbat to
                your screen with the same warmth and music you would feel in the
                room.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                How to Watch
              </h3>
              <div className="space-y-3">
                {[
                  {
                    step: "1",
                    text: "Visit our Facebook page",
                    detail:
                      "Go to facebook.com/TBSNewCityNY a few minutes before the service begins",
                  },
                  {
                    step: "2",
                    text: "Find the live video",
                    detail:
                      "The stream will appear at the top of our page when we go live",
                  },
                  {
                    step: "3",
                    text: "Join the community",
                    detail:
                      "Comment, share, and feel the connection from wherever you are",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 p-4 rounded-xl bg-warm-50 border border-warm-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-tbs-blue-700 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {item.step}
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
                  src="/images/shabbat/cantor-singing.jpg"
                  alt="Cantor Anna Zhar singing during a Shabbat service at Temple Beth Sholom"
                  fill
                  className="object-cover object-[center_40%] sm:object-[center_30%] md:object-[center_25%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Follow Along
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Follow us on social media to get notified when we go live and
              never miss a service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-tbs-blue-600 transition-colors">
                  Facebook
                </p>
                <p className="text-gray-500 text-sm">Watch live and replay</p>
              </div>
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-tbs-blue-600 transition-colors">
                  Instagram
                </p>
                <p className="text-gray-500 text-sm">{SOCIAL.instagramHandle}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image
          src="/images/shabbat/torah-procession.jpg"
          alt="Joyful Torah procession through the congregation at TBS"
          fill
          className="object-cover object-[center_55%] sm:object-[center_50%] md:object-[center_45%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-blue-900/90 to-tbs-blue-800/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Even Better in Person
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            The live stream is wonderful, but nothing compares to being in the
            room. Join us this Friday and feel the warmth for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/worship"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg"
            >
              Service Details
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
