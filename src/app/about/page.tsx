import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Our Community",
  description:
    "Temple Beth Sholom is a warm, vibrant Reform Jewish congregation in Rockland County, NY. Located at JCC Rockland in West Nyack, we value inclusivity, music, community, and lifelong learning.",
  openGraph: {
    title: "About Our Community | Temple Beth Sholom",
    description: "A welcoming Reform Jewish congregation in Rockland County, NY. Discover our values, story, and community.",
  },
};

const VALUES = [
  {
    title: "Welcoming",
    description:
      "We embrace everyone regardless of background, identity, or level of observance. At TBS, you belong.",
  },
  {
    title: "Music & Joy",
    description:
      "Music is at the heart of everything we do, from Shabbat services to holiday celebrations and beyond.",
  },
  {
    title: "Tikkun Olam",
    description:
      "We are committed to repairing the world through acts of social justice, compassion, and kindness.",
  },
  {
    title: "Lifelong Learning",
    description:
      "We value curiosity and growth, from Torah study to adult education and our vibrant religious school.",
  },
  {
    title: "Community",
    description:
      "We build lasting relationships through shared experiences, mutual support, and genuine connection.",
  },
  {
    title: "Reform Judaism",
    description:
      "We celebrate a progressive, egalitarian approach to Jewish tradition, honoring the past while embracing the future.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/clergy/team-photo.jpg"
          alt="The Temple Beth Sholom clergy and staff team in front of the TBS sign"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
          <span className="text-tbs-gold-300 text-sm font-medium tracking-[0.15em] uppercase mb-4 block">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-4">
            Our Community
          </h1>
          <p className="text-xl md:text-2xl text-white/85 max-w-2xl leading-relaxed">
            A warm and vibrant Reform Jewish home in Rockland County.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
                Where Everyone <br className="hidden md:block" />
                Belongs
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Temple Beth Sholom is a vibrant Reform Jewish congregation serving the
                  Rockland County community. We are a place where people of all backgrounds,
                  ages, and walks of life come together to find meaning, build friendships,
                  and celebrate Jewish life.
                </p>
                <p>
                  Our congregation is known for our extraordinary music program, our
                  welcoming spirit, and our commitment to making Judaism accessible and
                  relevant. Under the leadership of Rabbi Doug Sagal and Cantor Anna Zhar,
                  we create worship experiences that are both deeply spiritual and joyfully
                  engaging.
                </p>
                <p>
                  As a proud member of the Union for Reform Judaism, we embrace a progressive,
                  egalitarian approach to Jewish practice. We believe that Judaism should be a
                  source of joy, comfort, and inspiration for everyone.
                </p>
              </div>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="/images/shabbat/candle-lighting.jpg"
                alt="Candle lighting during a Shabbat service at Temple Beth Sholom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4 block">
              What Guides Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that shape our community and define who we are.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-warm-50 rounded-2xl p-8 border border-warm-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/holidays/choir-performance.jpg"
          alt="The TBS choir performing during a holiday celebration"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </section>

      {/* Our Home / Location */}
      <section className="py-24 bg-warm-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/images/holidays/rabbi-podium.jpg"
                alt="Rabbi Doug speaking from the podium during a holiday service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4 block">
                Visit Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                Our Home
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Temple Beth Sholom is located at JCC Rockland in West Nyack, NY. Our space
                provides a warm and comfortable setting for worship, learning, and community
                gatherings. We would love for you to come see it in person.
              </p>
              <div className="bg-white rounded-2xl p-8 border border-warm-200 space-y-4">
                <p className="font-semibold text-tbs-blue-800 text-lg">
                  {CONTACT.fullAddress}
                </p>
                <p className="text-gray-600">
                  Phone:{" "}
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-tbs-blue-600 hover:underline"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-tbs-blue-600 hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reform Judaism */}
      <section className="py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4 block">
                Our Movement
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                Reform Judaism
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  As a congregation of the Union for Reform Judaism, we celebrate a
                  progressive and egalitarian approach to Jewish life. Reform Judaism embraces
                  modernity while honoring the richness of our traditions, encouraging each
                  individual to find personal meaning in Jewish practice.
                </p>
                <p>
                  We believe in the power of informed choice, the importance of social
                  justice, and the beauty of a Judaism that evolves with the times while
                  staying rooted in timeless values.
                </p>
              </div>
              <Link
                href="https://urj.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-8 text-tbs-blue-700 font-semibold hover:text-tbs-blue-800 transition-colors"
              >
                Learn more about the URJ
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="/images/shabbat/service-bimah.jpg"
                alt="A service on the bimah at Temple Beth Sholom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/shabbat/baby-naming.jpg"
          alt="A joyful baby naming ceremony at Temple Beth Sholom"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tbs-gold-300 text-sm font-medium tracking-[0.15em] uppercase mb-4 block">
            Come As You Are
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            You Are Welcome Here
          </h2>
          <p className="text-white/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are exploring Judaism for the first time or looking for a new spiritual
            home, we would love to welcome you. Join us for a Shabbat service and see for
            yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/worship"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 transition-all hover:shadow-xl"
            >
              Join Us for Shabbat
            </Link>
            <Link
              href="/clergy-staff"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-tbs-blue-200 text-white hover:bg-white/10 transition-all"
            >
              Meet Our Clergy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
