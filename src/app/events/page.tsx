import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { UPCOMING_EVENTS, CATEGORY_COLORS } from "@/lib/events-data";
import { fetchCalendarEvents } from "@/lib/google-calendar";
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

export default async function EventsPage() {
  const calendarEvents = await fetchCalendarEvents(10);
  const events = calendarEvents ?? UPCOMING_EVENTS;
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

      {/* Upcoming Events */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
            Mark Your Calendar
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-10">
            Upcoming Events
          </h2>
          <div className="space-y-5">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${CATEGORY_COLORS[event.category]}`}
                      >
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
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
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/events/IMG_6376.jpg"
          alt="Community gathered outdoors for Hanukkah menorah lighting with guitar"
          fill
          className="object-cover object-[center_50%] sm:object-[center_45%] md:object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-tbs-blue-900/30" />
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
                time: "Sundays, 9:00 AM to 12:00 PM",
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
