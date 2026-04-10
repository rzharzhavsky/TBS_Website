import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT, DONATE } from "@/lib/constants";
import ZelleQrModalButton from "@/components/ZelleQrModalButton";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Temple Beth Sholom, a welcoming Reform Jewish community in Rockland County, NY. Donate via Zelle (TBSRockland) and designated funds.",
  openGraph: {
    title: "Donate | Temple Beth Sholom",
    description:
      "Support our warm Reform Jewish community. Donate via Zelle: TBSRockland.",
  },
};

type DonationFund = { name: string; description: string };

const DONATION_FUND_CATEGORIES: { category: string; funds: DonationFund[] }[] = [
  {
    category: "Clergy",
    funds: [
      {
        name: "Rabbi's Discretionary Fund",
        description:
          "Enables the Rabbi to anonymously assist families and individuals in need throughout the community.",
      },
      {
        name: "Cantor's Discretionary Fund",
        description:
          "Enables the Cantor to anonymously assist families and individuals in need throughout the community.",
      },
      {
        name: "Caring Community",
        description:
          "Helps congregants in time of need and is just a phone call away.",
      },
    ],
  },
  {
    category: "Arts & Music",
    funds: [
      {
        name: "Music Fund",
        description:
          "To help add to congregant's musical awareness and add to our ability to increase musical offerings at Temple.",
      },
    ],
  },
  {
    category: "Education",
    funds: [
      {
        name: "Howard Simons Mensch Fund",
        description:
          "Supports the Pre-K to 12 educational curriculum and focuses on social/ethical values through a Jewish lens and helps each and every member of the Temple community recognize the concept of the Yiddish word Mensch.",
      },
      {
        name: "David Charger Fund",
        description:
          "In memory of David Chargar, who attended our Nursery School, to benefit the nursery school through special programs, supplies and equipment.",
      },
      {
        name: "Educational Resource",
        description:
          "Enhance our Religious School children's education through special programs, events and projects.",
      },
    ],
  },
  {
    category: "Temple",
    funds: [
      {
        name: "Social Action",
        description:
          "Reaches out to the community within and beyond the Temple to ensure that TBS is an active participant in the community around it.",
      },
      {
        name: "High Holy Days",
        description: "Operating fundraiser.",
      },
      {
        name: "Temple Beautification",
        description: "Enhancement of the Temple building, sanctuary and grounds.",
      },
    ],
  },
  {
    category: "Group",
    funds: [
      {
        name: "Brotherhood Elliot Teitelbaum",
        description:
          "Enables Brotherhood to be wherever needed to help Temple achieve its goals.",
      },
      {
        name: "General Temple Fund",
        description: "Thank you for your generosity!",
      },
    ],
  },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/shabbat/shabbat-6642.jpg"
          alt="Community members gathered at Temple Beth Sholom"
          fill
          className="object-cover object-[center_65%] sm:object-[center_60%]"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Join and Support
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Become Part<br />of Our Family
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-2xl mx-auto">
              Join a warm and vibrant community where everyone belongs. Your
              membership and generosity help us thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg"
              >
                Inquire About Membership
              </a>
              <ZelleQrModalButton className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300" />
            </div>
            <p className="mt-6 text-sm md:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Before you donate, please{" "}
              <a
                href="#donation-funds"
                className="underline underline-offset-2 font-semibold text-white hover:text-tbs-gold-200 transition-colors"
              >
                scroll down to see the funds you can support
              </a>
              . That way you can include the right fund name in your Zelle note.
            </p>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-16 md:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
            Give
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
            Support Our Community
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl">
            Your generous support helps us maintain our programs, services,
            and community activities. Every donation makes a difference and
            helps us continue welcoming everyone who walks through our doors.
          </p>

          <div className="mb-12 rounded-2xl border border-tbs-blue-200 bg-tbs-blue-50/80 p-6 sm:p-8 max-w-3xl">
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-3">
              Designating your gift
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you would like your donation to go to a specific fund below, please say so when you give:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Zelle:</strong> Include the fund name in the{" "}
                <strong>note</strong> with your payment so we can direct your gift
                correctly.
              </li>
            </ul>
          </div>

          <div id="donation-funds" className="mb-16 scroll-mt-28">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
              Funds you can support
            </h3>
            <div className="space-y-12">
              {DONATION_FUND_CATEGORIES.map(({ category, funds }) => (
                <div key={category}>
                  <p className="text-tbs-gold-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                    {category}
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {funds.map((fund) => (
                      <div
                        key={fund.name}
                        className="rounded-2xl bg-white border border-warm-200 p-5 sm:p-6 shadow-sm"
                      >
                        <h4 className="font-bold text-tbs-blue-800 font-[family-name:var(--font-heading)] mb-2">
                          {fund.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {fund.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl">
            {/* Zelle Card */}
            <div className="bg-gradient-to-br from-tbs-blue-600 to-tbs-blue-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                    Donate via Zelle
                  </h3>
                </div>
                <p className="text-blue-200 mb-4">
                  Send your donation quickly and easily through Zelle using our
                  tag:
                </p>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <p className="text-sm text-blue-200 mb-2">Zelle Tag</p>
                  <p className="text-3xl font-bold text-tbs-mint-300">
                    {DONATE.zelle}
                  </p>
                </div>
                <p className="text-sm text-blue-300 mt-4">
                  Search for &quot;{DONATE.zelle}&quot; in your banking
                  app&apos;s Zelle feature to send a donation.
                </p>
                <p className="text-sm text-tbs-mint-200/95 mt-4 border-t border-white/20 pt-4">
                  To direct your gift to a specific fund, write the{" "}
                  <strong>fund name in the Zelle note</strong> (see{" "}
                  <a href="#donation-funds" className="underline hover:text-white">
                    funds above
                  </a>
                  ).
                </p>
              </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image
          src="/images/shabbat/shabbat-6805.jpg"
          alt="Community members sharing Torah during Shabbat services"
          fill
          className="object-cover object-[center_55%] sm:object-[center_50%] md:object-[center_45%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-blue-900/90 to-tbs-blue-800/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Questions? We Are Here.
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            We would love to tell you more about membership, giving
            opportunities, or anything else. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg"
            >
              Call {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
