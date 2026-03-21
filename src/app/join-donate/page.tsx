import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT, DONATE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join and Donate",
  description:
    "Join Temple Beth Sholom, a welcoming Reform Jewish community in Rockland County, NY. Become a member, donate via Zelle (TBSRockland), and support our congregation's programs and services.",
  openGraph: {
    title: "Join and Donate | Temple Beth Sholom",
    description:
      "Become a member of our warm Reform Jewish community. Donate via Zelle: TBSRockland.",
  },
};

const MEMBERSHIP_BENEFITS = [
  {
    text: "Friday night Shabbat services and all holiday celebrations",
    detail: "Every week, every season",
  },
  {
    text: "Torah study and adult learning programs",
    detail: "Grow in knowledge and spirit",
  },
  {
    text: "Religious School for your children",
    detail: "Kindergarten through Confirmation",
  },
  {
    text: "High Holiday services",
    detail: "Rosh Hashanah and Yom Kippur",
  },
  {
    text: "Life cycle celebrations and pastoral support",
    detail: "We walk with you through it all",
  },
  {
    text: "Music programs, including Adult and Children's Choirs and Bands",
    detail: "Make music with us",
  },
  {
    text: "Community events and social gatherings",
    detail: "Friendships that last a lifetime",
  },
  {
    text: "A warm, supportive spiritual home",
    detail: "You belong here",
  },
];

export default function JoinDonatePage() {
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
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Join and Support
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Become Part<br />of Our Family
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-lg">
              Join a warm and vibrant community where everyone belongs. Your
              membership and generosity help us thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg"
              >
                Inquire About Membership
              </a>
              <a
                href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K2RPMHHM47R9G&ssrt=1702484562015"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
              >
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Membership
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
                A Home for Your<br />Jewish Journey
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When you join Temple Beth Sholom, you become part of a caring
                community that will support you through all of life&apos;s
                moments. From joyful celebrations to quiet times of need, we are
                here for each other.
              </p>

              <div className="bg-warm-50 rounded-2xl p-6 sm:p-8 border border-warm-200">
                <p className="font-semibold text-gray-900 mb-4">
                  Ready to join? We would love to hear from you.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                  >
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
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {CONTACT.phone}
                      </p>
                      <p className="text-gray-500 text-sm">Give us a call</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                  >
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
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {CONTACT.email}
                      </p>
                      <p className="text-gray-500 text-sm">Send us an email</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                Membership Includes
              </h3>
              <div className="space-y-3">
                {MEMBERSHIP_BENEFITS.map((benefit) => (
                  <div
                    key={benefit.text}
                    className="flex items-start gap-3 p-4 rounded-xl bg-warm-50 border border-warm-100"
                  >
                    <div className="w-6 h-6 rounded-full bg-tbs-mint-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-tbs-blue-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">
                        {benefit.text}
                      </p>
                      <p className="text-gray-500 text-sm">{benefit.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/shabbat/shabbat-6926.jpg"
          alt="A warm moment during services at Temple Beth Sholom"
          fill
          className="object-cover object-[center_65%] sm:object-[center_60%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-tbs-blue-900/30" />
      </section>

      {/* Donate */}
      <section id="donate" className="py-16 md:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Give
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
                Support Our Community
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Your generous support helps us maintain our programs, services,
                and community activities. Every donation makes a difference and
                helps us continue welcoming everyone who walks through our doors.
              </p>

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
              </div>

              {/* PayPal */}
              <div className="mt-6 bg-warm-50 border border-warm-200 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-7 h-7 text-[#003087]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c1.379 2.032.982 4.617-.944 6.141-1.418 1.117-3.388 1.682-5.946 1.682H12.19c-.524 0-.968.382-1.05.9l-1.35 8.562h3.048c.458 0 .85-.334.922-.785l.038-.196.733-4.649.047-.254a.932.932 0 0 1 .922-.785h.58c3.758 0 6.699-1.527 7.559-5.945.36-1.846.174-3.389-.617-4.13z"/>
                  </svg>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800">
                    Donate via PayPal
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-5">
                  Donate securely online with your PayPal account or any major credit card.
                </p>
                <a
                  href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=K2RPMHHM47R9G&ssrt=1702484562015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full bg-[#0070ba] text-white hover:bg-[#005ea6] transition-all duration-300 shadow-md hover:shadow-lg gap-2"
                >
                  Donate with PayPal
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                Other Ways to Give
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Check by Mail",
                    description:
                      "Send a check to our office at RJCC Rockland, 450 W Nyack Rd, West Nyack, NY 10994.",
                  },
                  {
                    title: "Sponsor a Shabbat Kiddush",
                    description:
                      "Celebrate a simcha or honor a loved one by sponsoring the Kiddush after services.",
                  },
                  {
                    title: "Tribute Gifts",
                    description:
                      "Honor or remember a loved one with a meaningful tribute donation.",
                  },
                  {
                    title: "Legacy Giving",
                    description:
                      "Ensure the future of TBS by including our community in your estate plans.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
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
