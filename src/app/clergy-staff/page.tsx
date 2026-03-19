import type { Metadata } from "next";
import Image from "next/image";
import { CLERGY } from "@/lib/clergy-data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clergy & Staff",
  description:
    "Meet the clergy and staff of Temple Beth Sholom in Rockland County, NY. Rabbi Doug Sagal, Cantor Anna Zhar, and our dedicated team serving the Reform Jewish community.",
  openGraph: {
    title: "Clergy & Staff | Temple Beth Sholom",
    description:
      "Meet Rabbi Doug Sagal, Cantor Anna Zhar, and the dedicated team at Temple Beth Sholom, a Reform Jewish community in Rockland County, NY.",
  },
};

export default function ClergyStaffPage() {
  const featured = CLERGY.filter((p) => p.fullBio);
  const staff = CLERGY.filter((p) => !p.fullBio);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Temple Beth Sholom Clergy & Staff",
    itemListElement: CLERGY.map((person, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: person.name,
        jobTitle: person.title,
        worksFor: { "@type": "Organization", name: SITE.name },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src="/images/clergy/team-photo.jpg"
          alt="The clergy and staff of Temple Beth Sholom"
          fill
          priority
          className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
          <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
            Our Team
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight">
            Clergy &amp; Staff
          </h1>
        </div>
      </section>

      {/* ── Featured Clergy ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featured.map((person, index) => {
              const isReversed = index % 2 === 1;
              return (
                <article key={person.name} className="group">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                      isReversed ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {/* Photo side */}
                    <div
                      className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={person.image}
                          alt={`Portrait of ${person.name}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
                        />
                      </div>
                    </div>

                    {/* Bio side */}
                    <div
                      className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
                        {person.title}
                      </p>
                      <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
                        {person.name}
                      </h2>
                      <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                        {person.fullBio?.split("\n\n").map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Staff Grid ── */}
      {staff.length > 0 && (
        <section className="py-20 md:py-28 bg-warm-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Our Staff
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800">
                The People Behind the Scenes
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {staff.map((person) => (
                <article
                  key={person.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-warm-100"
                >
                  <div className="relative aspect-[2/3]">
                    <Image
                      src={person.image}
                      alt={`Portrait of ${person.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-2">
                      {person.title}
                    </p>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-2">
                      {person.name}
                    </h3>
                    <p className="text-gray-600">{person.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
