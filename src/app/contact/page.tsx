import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Temple Beth Sholom in Rockland County, NY. Contact us about membership, religious school, events, or any questions. Located at RJCC Rockland, West Nyack.",
  openGraph: {
    title: "Contact Us | Temple Beth Sholom",
    description:
      "Reach out to Temple Beth Sholom. We would love to hear from you.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/images/shabbat/baby-naming.jpg"
          alt="A warm moment at Temple Beth Sholom"
          fill
          className="object-cover object-[center_60%] sm:object-[center_55%]"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-lg">
              We would love to hear from you. Whether you have a question, want
              to learn more, or are ready to join, reach out anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Send a Message
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
                We Are Here to Help
              </h2>

              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Other Ways to Reach Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-4 mb-10">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-warm-50 border border-warm-200 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-tbs-gold-600"
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
                    <p className="font-semibold text-gray-900 text-lg">
                      {CONTACT.phone}
                    </p>
                    <p className="text-gray-500 text-sm">Give us a call</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-warm-50 border border-warm-200 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-tbs-gold-600"
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
                    <p className="font-semibold text-gray-900 text-lg">
                      {CONTACT.email}
                    </p>
                    <p className="text-gray-500 text-sm">Send us an email</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-warm-50 border border-warm-200">
                  <div className="w-12 h-12 rounded-full bg-tbs-gold-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-tbs-gold-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {CONTACT.fullAddress}
                    </p>
                    <p className="text-gray-500 text-sm">Visit us in person</p>
                  </div>
                </div>
              </div>

              {/* Map or Office Hours */}
              <div className="bg-tbs-blue-800 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-blue-200">
                  <p>We are available during regular business hours and always reachable by email.</p>
                  <p className="text-white font-medium mt-4">
                    For urgent pastoral needs, please call the office and leave a message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
