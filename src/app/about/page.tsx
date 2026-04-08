import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Our Community",
  description:
    "Temple Beth Sholom is a warm, vibrant Reform Jewish congregation in Rockland County, NY. Located at RJCC Rockland in West Nyack, we value inclusivity, music, community, and lifelong learning.",
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
    icon: (
      <svg className="w-6 h-6 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Music & Joy",
    description:
      "Music is at the heart of everything we do, from Shabbat services to holiday celebrations and beyond.",
    icon: (
      <svg className="w-6 h-6 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    title: "Tikkun Olam",
    description:
      "We are committed to repairing the world through acts of social justice, compassion, and kindness.",
    icon: (
      <svg className="w-6 h-6 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Lifelong Learning",
    description:
      "We value curiosity and growth, from Torah study to adult education and our vibrant religious school.",
    icon: (
      <svg className="w-6 h-6 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "We build lasting relationships through shared experiences, mutual support, and genuine connection.",
    icon: (
      <svg className="w-6 h-6 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Reform Judaism",
    description:
      "We celebrate a progressive, egalitarian approach to Jewish tradition, honoring the past while embracing the future.",
    icon: (
      <svg className="w-6 h-6 text-tbs-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tbs-blue-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-4">
            Our Community
          </h1>
          <p className="text-xl md:text-2xl text-white/85 max-w-2xl leading-relaxed">
            {CONTACT.fullAddress}
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
                src="/images/events/IMG_6420.JPG"
                alt="Interfaith candle lighting ceremony on the bimah with clergy and community leaders"
                fill
                className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
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
                <div className="w-12 h-12 rounded-full bg-tbs-gold-100 flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Community Groups */}
      <section className="py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4 block">
              Get involved
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Clubs &amp; Community
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Men\u2019s Club",
                image: "/images/MensClub.png",
                description:
                  "The Temple Beth Sholom Men’s Club has served our congregation for more than 60 years. We are a diverse group of men of all ages, and our mission is to serve our members, our congregation, and our community through social events, avodah (service and prayer), kehillah (community participation), and tzedakah (charity).\n\nMen’s Club member meetings include a dinner, a business meeting, a guest speaker, and activities. The Men’s Club sponsors barbecues and holds an assortment of programs throughout the year.",
              },
              {
                title: "Sisterhood",
                image: "/images/Sisterhood.png",
                description:
                  "The Sisterhood of Temple Beth Sholom brings together women of all ages to share their lives, careers, values, and journeys. Together we create a warm and dynamic community that supports programs to benefit the synagogue, the community, and the Jewish world at large.​\n\nSisterhood members have the opportunity to enrich their lives through personal growth and friendships, intellectual pursuits, community service, leadership development and recognition of the value of their Jewish heritage.  In addition, Sisterhood provides significant financial support to the temple by sponsoring events geared toward enriching Jewish life within the Congregation",
              },
              {
                title: "Hiking Club",
                image: "/images/Hiking.png",
                description:
                  "During warm months, our Shabbat Hiking club takes excursions throughout the Hudson Valley–appreciating the beauty of our area and sanctifying Shabbat with our feet.   If you are interested in join ing us on our next hike, please email Shara Abraham at sharajill@yahoo.com.",
              },
              {
                title: "Mental Health Awareness Club",
                image: "/images/MentalHealthTBS.webp",
                description:
                  "The TBS Cares mental health awareness task force is responsible for programming, fundraising and resource preparation related to the mental health issue within the Temple Beth Sholom community.   We encourage you to join us as we make mental health awareness a priority for Rockland’s Jewish community. ",
              },
            ].map((group) => (
              <div
                key={group.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-tbs-gold-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 sm:h-52">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-3">
                    {group.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {group.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/shabbat/baby-naming.jpg"
          alt="A joyful baby naming ceremony at Temple Beth Sholom"
          fill
          className="object-cover object-[center_58%] sm:object-[center_55%] md:object-[center_62%]"
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
