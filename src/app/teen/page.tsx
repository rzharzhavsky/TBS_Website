import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Teen Program – NEFESH",
  description:
    "TBS NEFESH is a teen program for grades 8–12 at Temple Beth Sholom, offering trips, social action, interfaith experiences, volunteer opportunities, and mental health awareness.",
  openGraph: {
    title: "Teen Program – NEFESH | Temple Beth Sholom",
    description:
      "Explore, connect, and grow with the TBS NEFESH teen program for grades 8–12.",
  },
};

const PROGRAM_HIGHLIGHTS = [
  {
    title: "Local Trips",
    description: "Socially distanced local outings that bring teens together for fun and meaningful experiences.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "Social Action",
    description: "Community events that put Jewish values into practice through tikkun olam and hands-on giving.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Interfaith Experiences",
    description: "Build bridges with peers from other faith traditions, fostering understanding and respect.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Enrichment Programs",
    description: "Engaging learning experiences that connect Jewish identity to real life and the world around us.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Volunteer Opportunities",
    description: "Give back to the community while building leadership skills and lasting friendships.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Mental Health Awareness",
    description: "A safe, supportive space where teens can talk openly, find resources, and support one another.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
];

export default function TeenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden bg-tbs-blue-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tbs-blue-900 via-tbs-blue-800 to-tbs-blue-700" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #f5d98a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #5aad82 0%, transparent 40%)" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-3xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Grades 8–12
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-4">
              TBS NEFESH
            </h1>
            <p className="text-tbs-gold-300 text-xl sm:text-2xl font-[family-name:var(--font-heading)] mb-6 italic">
              Connect. Grow. Lead.
            </p>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-xl">
              A teen program designed to keep you engaged, inspired, and
              connected to Jewish life long after your Bar or Bat Mitzvah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/religious-school#enrollment-form"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Involved
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome + Photo */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Welcome
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 leading-tight mb-6">
                A Place to Belong<br />Beyond Bar/Bat Mitzvah
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Welcome to the TBS NEFESH Program for grade 8–12 students! Our program
                  offers a diverse range of experiences and opportunities to help teens
                  stay engaged in synagogue life beyond their Bar/Bat Mitzvah.
                </p>
                <p>
                  We believe that a vibrant synagogue community is essential for the
                  personal growth and development of our young people. That&apos;s why
                  we created the TBS NEFESH Program — to provide a welcoming and
                  supportive environment where teens can explore their passions, build
                  lasting relationships, and make a positive impact in the world.
                </p>
                <p>
                  We invite you to join us. Experience the power of community, growth,
                  and self-discovery as you continue your journey towards adulthood.
                  Let&apos;s connect, learn, and grow together!
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/Nefesh_Picture.png"
                alt="TBS NEFESH teen program"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-blue-900 to-tbs-blue-700" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #f5d98a 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Ready to Join NEFESH?
          </h2>
          <p className="text-blue-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you&apos;re just starting high school or heading into your senior year,
            there&apos;s a place for you in our community. Reach out and let&apos;s get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/religious-school#enrollment-form"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg"
            >
              Get Involved
            </Link>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
