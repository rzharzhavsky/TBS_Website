import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Events & Calendar",
  description:
    "View upcoming events, Shabbat services, Torah study, holiday celebrations, and community programs at Temple Beth Sholom in Rockland County, NY.",
  openGraph: {
    title: "Events & Calendar | Temple Beth Sholom",
    description:
      "Upcoming services, classes, holiday celebrations, and community events at TBS Rockland.",
  },
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/holidays/holidays-7454.jpg"
          alt="Community members celebrating a holiday together at Temple Beth Sholom"
          fill
          className="object-cover object-[center_55%] sm:object-[center_50%] md:object-[center_45%]"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Events
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              What&apos;s<br />Happening
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-lg">
              Services, celebrations, classes, and community gatherings. There is
              always something meaningful happening at TBS.
            </p>
          </div>
        </div>
      </section>

      {/* Full Calendar */}
      <section className="py-16 md:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
            Stay Up to Date
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-10">
            Full Calendar
          </h2>
          <div className="bg-white rounded-2xl p-2 sm:p-4 border border-gray-100 shadow-sm">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=tbscalendar5785%40gmail.com&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&mode=MONTH"
              className="w-full border-0 rounded-2xl"
              height="600"
              title="TBS Events Calendar"
            />
          </div>
        </div>
      </section>

      {/* Weekly Rhythm */}
      <section className="py-16 md:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Every Week
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Our Weekly Rhythm
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              These are the regular gatherings that bring us together week after
              week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Friday Night Shabbat",
                time: "Fridays at 7:30 PM",
                description:
                  "Warm, musical services led by Rabbi Doug and Cantor Anna. Open to everyone.",
                link: "/worship",
              },
              {
                title: "Torah Study",
                time: "Saturdays at 10:00 AM",
                description:
                  "Explore the weekly Torah portion in a welcoming, discussion-based setting. In person and on Zoom.",
                link: "/torah-study",
              },
              {
                title: "Religious School",
                time: "Weekly",
                description:
                  "Engaging Jewish education for children of all ages. Hebrew, Torah, values, and community.",
                link: "/religious-school",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg hover:border-tbs-gold-200 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-2 group-hover:text-tbs-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-tbs-gold-500 text-sm font-medium mb-3">
                  {item.time}
                </p>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image
          src="/images/holidays/torah-reading.jpg"
          alt="Torah reading during a holiday service at Temple Beth Sholom"
          fill
          className="object-cover object-[center_50%] sm:object-[center_40%] md:object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-blue-900/90 to-tbs-blue-800/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Want to Know More?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Have questions about an upcoming event or want to get involved? We
            would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg"
            >
              Email Us
            </a>
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
