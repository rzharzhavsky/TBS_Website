import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CONTACT, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Welcome to Temple Beth Sholom",
  description:
    "New to Temple Beth Sholom? Learn how to get involved in our warm Reform Jewish community in Rockland County, NY.",
};

const WAYS_TO_CONNECT = [
  {
    title: "Shabbat Services",
    description:
      "Our Friday night services are warm, musical, and open to everyone. Come as you are and feel the spirit of community.",
    detail: `${SERVICES.shabbat.day}s at ${SERVICES.shabbat.time}`,
    href: "/worship",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    color: "bg-tbs-gold-100 text-tbs-gold-500",
  },
  {
    title: "Torah Study",
    description:
      "A relaxed Saturday morning where we read, question, and discuss the weekly Torah portion together. All perspectives are welcome.",
    detail: `${SERVICES.torahStudy.day}s at ${SERVICES.torahStudy.time}`,
    href: "/torah-study",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: "bg-tbs-blue-100 text-tbs-blue-600",
  },
  {
    title: "Religious School",
    description:
      "Our religious school gives children a strong Jewish foundation through engaging lessons, holiday celebrations, and Bar/Bat Mitzvah preparation.",
    detail: "Grades K–7",
    href: "/religious-school",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    color: "bg-tbs-mint-100 text-tbs-mint-500",
  },
  {
    title: "Music & Choir",
    description:
      "Music is at the heart of what we do. Whether you love to sing, play, or simply listen, our musical community will move you.",
    detail: "All skill levels welcome",
    href: "/music-community",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    color: "bg-purple-100 text-purple-500",
  },
  {
    title: "Community Events",
    description:
      "From holiday celebrations and social gatherings to guest speakers and tikkun olam projects, there is always something happening at TBS.",
    detail: "See what\u2019s coming up",
    href: "/events",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    color: "bg-rose-100 text-rose-500",
  },
  {
    title: "Watch Live",
    description:
      "Can\u2019t make it in person? Join us from anywhere through our live stream. You\u2019re part of the community no matter where you are.",
    detail: "Stream every Friday",
    href: "/watch-live",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    color: "bg-tbs-blue-100 text-tbs-blue-500",
  },
];

const FIRST_VISIT_TIPS = [
  "No dress code. Come as you are. Some dress up, some keep it casual.",
  "Prayer books and kippot are provided. You don\u2019t need to bring anything.",
  "Our services include English and Hebrew: transliterations are in the prayer book so you can follow along.",
  "Feel free to sit anywhere. There\u2019s no assigned seating.",
  "After services, join us for an oneg (reception) with refreshments and friendly faces.",
];

export default function WelcomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <Image
          src="/images/events/IMG_6420.JPG"
          alt="Temple Beth Sholom community gathered in worship"
          fill
          className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tbs-blue-900/70 via-tbs-blue-900/60 to-tbs-blue-900/80" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
            Welcome to Temple Beth Sholom
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-white leading-[1.1] mb-6">
            We&apos;re So Glad<br />You&apos;re Here
          </h1>
          <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you&apos;re exploring Judaism for the first time, looking for a new
            spiritual home, or just curious about who we are — you belong here.
            No prerequisites, no expectations, just a warm welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/worship"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Us This Friday
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Welcome Message */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">A Message for You</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
              Come As You Are
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-5">
              <p>
                At Temple Beth Sholom, we believe that everyone deserves a place where they
                feel seen, heard, and valued. It doesn&apos;t matter where you are in your
                Jewish journey — or if you&apos;re just beginning to explore.
              </p>
              <p>
                We are a Reform Jewish community that finds meaning in tradition while
                embracing the world around us. Our services are filled with music, warmth,
                and genuine connection. Our doors are open to individuals, couples, and
                families of all backgrounds.
              </p>
              <p>
                There&apos;s no right or wrong way to start. You might come to a Friday night
                service, drop into Torah Study on a Saturday morning, or sign your kids up for
                Religious School. However you choose to begin, we&apos;ll be here to welcome
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Your First Visit</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Here are a few things to know before your first visit.
            </p>
          </div>

          <div className="space-y-4">
            {FIRST_VISIT_TIPS.map((tip, i) => (
              <div key={i} className="flex gap-4 items-start bg-warm-50 rounded-2xl p-5 md:p-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tbs-blue-100 text-tbs-blue-600 flex items-center justify-center font-semibold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-0.5">{tip}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-tbs-gold-50 border border-tbs-gold-200 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-tbs-blue-800 text-lg font-medium font-[family-name:var(--font-heading)]">
              We meet at RJCC Rockland
            </p>
            <p className="text-gray-500 mt-1">{CONTACT.fullAddress}</p>
            <p className="text-gray-500 mt-1">
              Questions? Call us at{" "}
              <a href={`tel:${CONTACT.phone}`} className="text-tbs-blue-600 font-medium hover:underline">
                {CONTACT.phone}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-tbs-blue-600 font-medium hover:underline">
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Get Involved</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Ways to Connect
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              There&apos;s something for everyone at TBS. Here are some great places to start.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WAYS_TO_CONNECT.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-2 group-hover:text-tbs-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-tbs-blue-600">
                  {item.detail}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/shabbat/shabbat-6926.jpg"
          alt="Community members gathered during services"
          fill
          className="object-cover object-[center_65%] sm:object-[center_60%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-blue-900/90 to-tbs-blue-800/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-blue-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you want to become a member, learn more, or just say hello — we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join-donate"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg"
            >
              Become a Member
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
