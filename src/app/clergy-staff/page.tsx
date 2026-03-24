import type { Metadata } from "next";
import Image from "next/image";
import { CLERGY, type StaffMember } from "@/lib/clergy-data";
import { SITE } from "@/lib/constants";

const profileNameClass =
  "text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8";

function ProfileArticle({
  person,
  isReversed,
  nameHeading = "h2",
}: {
  person: StaffMember;
  isReversed: boolean;
  nameHeading?: "h2" | "h3";
}) {
  const body = person.fullBio ?? person.bio;
  const nameEl =
    nameHeading === "h3" ? (
      <h3 className={profileNameClass}>{person.name}</h3>
    ) : (
      <h2 className={profileNameClass}>{person.name}</h2>
    );
  return (
    <article className="group">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          isReversed ? "lg:direction-rtl" : ""
        }`}
      >
        <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
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

        <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
          <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
            {person.title}
          </p>
          {nameEl}
          <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
            {body.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

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
  const clergy = CLERGY.slice(0, 2);
  const staff = CLERGY.slice(2);

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

      {/* ── Clergy & staff (same layout, one flow) ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {clergy.map((person, index) => (
              <ProfileArticle
                key={person.name}
                person={person}
                isReversed={index % 2 === 1}
              />
            ))}
            {staff.map((person, index) => (
              <ProfileArticle
                key={person.name}
                person={person}
                isReversed={(clergy.length + index) % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
