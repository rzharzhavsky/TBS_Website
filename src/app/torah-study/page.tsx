import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Torah Study & Learning",
  description:
    "Join Rabbi Doug Sagal for weekly Torah study every Shabbat morning at Temple Beth Sholom. Explore the Torah as a living, breathing text with real relevance to our lives. Open to all, no prior knowledge needed.",
  openGraph: {
    title: "Torah Study & Learning | Temple Beth Sholom",
    description:
      "Weekly Torah study with Rabbi Doug Sagal. Explore the weekly Torah portion like you have never encountered it. Saturdays at 10 AM via Zoom.",
  },
};

const ADULT_LEARNING = [
  { title: "Jewish Philosophy", description: "Explore the great Jewish thinkers and their ideas." },
  { title: "Holiday Traditions", description: "Deepen your understanding of Jewish holidays and customs." },
  { title: "Ethics & Modern Life", description: "Apply ancient Jewish wisdom to the challenges we face today." },
];

export default function TorahStudyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/events/shabbat high holidays rabbi.JPG"
          alt="Rabbi Doug at the podium with beautiful colorful mosaic tapestry behind him"
          fill
          className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">Torah Study & Learning</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Learning<br />Together
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-lg">
              Torah study, honest discussion, and Jewish wisdom for everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Rabbi Doug Invitation */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <blockquote className="text-center mb-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-tbs-blue-800 italic leading-relaxed">
              &ldquo;When I pray I speak to God... but when I study the Torah, God speaks to me.&rdquo;
            </p>
            <cite className="text-gray-500 mt-4 block not-italic font-medium">
              Louis Finkelstein
            </cite>
          </blockquote>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              For many of us, the last time we learned the Bible was in Sunday school, and it was
              mostly stories and fanciful tales that around the age of 13 we decided were
              nonsense, or had little relevancy to our lives.
            </p>
            <p>
              Yet the Hebrew Bible is actually layer upon layer of profound meaning and deeply
              relevant to our lives as human beings, and yes, as Jews. Few of us have had the
              experience of really delving into the Torah as a living, breathing reflection of
              profound truths and equally profound descriptions of the challenges of life.
            </p>
            <p className="text-tbs-blue-700 font-medium text-xl">
              I invite you to join us on Shabbat mornings at 10 AM (9 AM when there is a
              Bar/Bat Mitzvah) on Zoom as we explore the weekly Torah portion as, I promise you,
              you have never encountered it. Give us a try. You will make this a regular part of
              your week!
            </p>
            <p className="text-right text-gray-500 italic">
              Rabbi Doug Sagal
            </p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Every Shabbat</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                Weekly Torah Study
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Join Rabbi Doug and the community as we explore the weekly Torah portion together.
                No previous background or knowledge of Hebrew is necessary!
              </p>
              <div className="bg-warm-50 rounded-2xl p-6 sm:p-8 mb-6 border border-warm-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-tbs-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{SERVICES.torahStudy.day} Mornings</p>
                      <p className="text-tbs-blue-600 font-bold text-2xl sm:text-3xl font-[family-name:var(--font-heading)]">{SERVICES.torahStudy.time}</p>
                      <p className="text-gray-500 text-sm mt-1">9:00 AM when there is a Bar/Bat Mitzvah</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-tbs-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Via Zoom</p>
                      <a
                        href="https://us06web.zoom.us/j/81646152404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center mt-2 px-4 py-2 rounded-full bg-tbs-blue-700 text-white text-sm font-semibold hover:bg-tbs-blue-800 transition-all duration-300 shadow-sm"
                      >
                        Join on Zoom
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="text-tbs-mint-500">&#x2713;</span> Open to everyone, no prior knowledge needed</li>
                <li className="flex items-center gap-2"><span className="text-tbs-mint-500">&#x2713;</span> No knowledge of Hebrew necessary</li>
                <li className="flex items-center gap-2"><span className="text-tbs-mint-500">&#x2713;</span> Lively discussion and diverse perspectives</li>
                <li className="flex items-center gap-2"><span className="text-tbs-mint-500">&#x2713;</span> Available via Zoom every Shabbat morning</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                Adult Learning Programs
              </h2>
              <div className="space-y-5">
                {ADULT_LEARNING.map((program) => (
                  <div key={program.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-tbs-gold-200 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-500">{program.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6 mt-12">
                Special Learning Events
              </h2>
              <div className="space-y-3">
                {["Guest speakers and scholars", "Holiday learning sessions", "Community discussions and panels"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-warm-50 border border-warm-100">
                    <div className="w-8 h-8 rounded-full bg-tbs-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-tbs-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image
          src="/images/events/FullSizeRender.JPG"
          alt="Community members holding the Torah scroll open during a Torah unrolling ceremony"
          fill
          className="object-cover object-[center_40%] sm:object-[center_38%] md:object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-blue-900/90 to-tbs-blue-800/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Join This Week&apos;s Study
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Everyone is welcome. Bring your curiosity.
          </p>
          <Link href="/events" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg">
            View Schedule
          </Link>
        </div>
      </section>
    </>
  );
}
