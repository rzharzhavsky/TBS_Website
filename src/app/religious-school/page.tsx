import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Religious School",
  description:
    "Temple Beth Sholom Religious School (K–7): academically strong Jewish education with Jewish pride and identity, Hebrew, Torah, experiential learning, and teen Confirmation. RJCC Rockland, West Nyack.",
  openGraph: {
    title: "Religious School | Temple Beth Sholom",
    description:
      "Jewish education for K–7, teen program grades 8–12, and Confirmation at RJCC Rockland, West Nyack, NY.",
  },
};

const PROGRAM_HIGHLIGHTS = [
  {
    text: "Hebrew language and prayer",
    detail: "Building skills at every level",
  },
  {
    text: "Torah and Jewish History",
    detail: "Stories and lessons from our ancestors",
  },
  {
    text: "Jewish values and ethics",
    detail: "Tikkun olam, kindness, and community",
  },
  {
    text: "B'nai Mitzvah preparation",
    detail: "Guidance, confidence, and celebration",
  },
  {
    text: "Music and creative arts",
    detail: "Singing, art projects, and holiday crafts",
  },
];

const WHY_FAMILIES = [
  {
    title: "Building Identity",
    description:
      "Our students develop Jewish identity and pride through authentic learning. Judaism is a lived experience that shapes us every day.",
  },
  {
    title: "Immersive Learning",
    description:
      "Music, art, stories, and hands-on activities make Jewish education come alive through experiential, student-centered programming.",
  },
  {
    title: "Community Connection",
    description:
      "Students build lasting friendships and connections, and recognize their role as valued members of our larger Jewish community.",
  },
  {
    title: "Family Involvement",
    description:
      "Jewish life is centered around family. Holiday programs at TBS-RS bring our families together for joyful celebrations.",
  },
];

export default function ReligiousSchoolPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/holidays/holidays-7249.jpg"
          alt="Young people on the bimah during a service at Temple Beth Sholom"
          fill
          className="object-cover object-[center_45%] sm:object-[center_40%] md:object-[center_35%]"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-tbs-gold-300 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              Education
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] text-white mb-6">
              Religious<br />School
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-lg">
              Jewish pride, Jewish identity, and embracing heritage through
              engaging, student-centered programming.
            </p>
            <a
              href="#enrollment-form"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white text-tbs-blue-800 hover:bg-tbs-gold-100 transition-all duration-300 shadow-lg"
            >
              Inquire About Enrollment
            </a>
          </div>
        </div>
      </section>

      {/* About the School */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Our Program
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-8">
                A Warm, Engaging Jewish Education
              </h2>

              <div className="bg-warm-50 rounded-2xl p-6 sm:p-8 mb-8 border border-warm-200">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
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
                        RJCC Rockland
                      </p>
                      <p className="text-gray-500">{CONTACT.fullAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
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
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        Grades &amp; programs
                      </p>
                      <p className="text-gray-500">
                        Religious School K–7; teen program grades 8–12; Confirmation
                        as part of our teen program—so families can grow with us for
                        the long term.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  Jewish pride and identity are the heart of our religous school. We
                  offer an{" "}
                  <strong className="text-gray-800">
                    academically strong program
                  </strong>{" "}
                  with direct, clear information about curriculum and focus:
                  student-centered programming, engagement, and exploring
                  connections between heritage and daily life.
                </p>
                <p>
                  Our Religious School is community-centered and among the
                  largest in Rockland County. Children are seen, valued, and
                  encouraged to grow through traditions, Hebrew, values, and
                  meaningful relationships with teachers and peers.
                </p>
                <p>
                  Explore our{" "}
                  <Link
                    href="#program-descriptions"
                    className="text-tbs-blue-700 font-semibold hover:underline"
                  >
                    program descriptions by grade
                  </Link>{" "}
                  below for curriculum, experiential learning, and Hebrew, and when
                  you are ready, we would love your child to experience our school
                  on the path to{" "}
                  <Link
                    href="#bnai-mitzvah"
                    className="text-tbs-blue-700 font-semibold hover:underline"
                  >
                    B&apos;nai Mitzvah
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                Your Child Will Learn
              </h3>
              <div className="space-y-3">
                {PROGRAM_HIGHLIGHTS.map((item) => (
                  <div
                    key={item.text}
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
                      <p className="text-gray-900 font-medium">{item.text}</p>
                      <p className="text-gray-500 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/events/a7da2f79-8a05-4a39-8afe-6064a189e844.JPG"
                  alt="Three smiling girls showing off their 'I love Temple Beth Sholom' hand stamps"
                  fill
                  className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Choose TBS */}
      <section className="py-16 md:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
              More Than a Classroom
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800">
              Why Families Choose TBS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {WHY_FAMILIES.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg hover:border-tbs-gold-200 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-3 group-hover:text-tbs-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Descriptions (verbatim from Religious School leadership) */}
      <section
        id="program-descriptions"
        className="py-16 md:py-28 scroll-mt-24"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">
            Curriculum &amp; programming
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
            Program Descriptions
          </h2>
         

          <div className="space-y-14">
            <article className="border-b border-warm-200 pb-14">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-2">
                K-2 Program
              </h3>
              <p className="text-base font-semibold text-tbs-blue-600 mb-6">
                One Sunday per month
              </p>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  Learning about Judaism and establishing a connection to Judaism is
                  so important for younger kids as they grow and begin to find
                  their place in the world. Our K-2 program is an excellent
                  opportunity for students to begin their Jewish learning and to
                  build friendships with other Jewish kids their age. Students get
                  to know our TBS clergy and are introduced to Jewish learning
                  through fun programs and activities.
                </p>
                <p>
                  Our K-2 students participate in a short tefillah with grades 3-5
                  and then enjoy a program led by a loved and experienced educator
                  that includes learning Shabbat blessings and short prayers, Jewish
                  holiday crafts and experiences, Torah stories, and much more!
                  They learn songs, play educational games, and enjoy hands-on
                  learning activities.
                </p>
              </div>
            </article>

            <article className="border-b border-warm-200 pb-14">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-2">
                3rd-5th Grade
              </h3>
              <p className="text-base font-semibold text-tbs-blue-600 mb-6">
                Sundays
              </p>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  Our student-centered program focuses on experiential learning and
                  activities that allow our students to enjoy our traditions
                  together in a fun and supportive environment. In individual
                  grade-level classes, students explore Jewish life and learning,
                  focusing on Judaism that is relevant and accessible to their age
                  and grade-level.
                </p>
                <p className="font-semibold text-tbs-blue-800">Curriculum:</p>
                <p>
                  Our TBS-RS Curriculum is based on the interaction of learning the
                  values of Judaism and experiencing Jewish life.
                </p>
                <p className="font-semibold text-gray-900">
                  Students receive instruction in:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Jewish holidays</li>
                  <li>Torah/Bible</li>
                  <li>Tefillah/Prayer</li>
                  <li>Israel</li>
                  <li>Hebrew language</li>
                  <li>Jewish history</li>
                  <li>Jewish values and culture</li>
                </ul>
                <p className="font-semibold text-gray-900">
                  Students experience Jewish life through:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Art</li>
                  <li>Music</li>
                  <li>Drama</li>
                  <li>Movement</li>
                  <li>Cooking</li>
                  <li>Holiday events and carnivals</li>
                  <li>Synagogue-based programs</li>
                </ul>

                <h4 className="text-xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 pt-6 mt-2 border-t border-warm-200">
                  Small-Group Hebrew
                </h4>
                <p>
                  Hebrew literacy is an important component of Jewish education, as
                  well as an essential part of B&apos;nai Mitzvah preparation and
                  success.
                </p>
                <p>
                  Our small-group Hebrew program consists of 30-minute lessons once
                  per week, tailored to each child&apos;s Hebrew literacy level.
                  This program allows our teachers to provide the individualized
                  and directed instruction your student needs to successfully learn
                  to read Hebrew.
                </p>
                <p>
                  In-person or on Zoom, students meet in groups of up to 4
                  students. Families will be given multiple day and time options to
                  sign-up for the lesson that works best for them on a first come/first
                  serve basis.
                </p>
              </div>
            </article>

            <article className="border-b border-warm-200 pb-14">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-2">
                6th and 7th Grades
              </h3>
              <p className="text-base font-semibold text-tbs-blue-600 mb-6">
                Tuesdays
              </p>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  As students begin middle school, their need for Jewish learning
                  and connection grows as they begin to mature and find their place
                  in the world.
                </p>
                <p>
                  Our 6th and 7th graders engage more deeply with Jewish texts,
                  values, and traditions, to form a stronger sense of Jewish
                  identity. TBS-RS provides a supportive space for our students to
                  explore their beliefs, build community with peers, and connect
                  their heritage to real-life experiences, laying the foundation
                  for a meaningful and lasting relationship with Judaism.
                </p>
                <p className="font-semibold text-tbs-blue-800">Curriculum:</p>
                <p>
                  Our TBS-RS Curriculum is based on the interaction of learning the
                  values of Judaism and experiencing Jewish life.
                </p>
                <p className="font-semibold text-gray-900">6th Grade Curriculum:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Jewish holidays</li>
                  <li>Torah/Bible</li>
                  <li>Tefillah/Prayer comprehension</li>
                  <li>Tefillah/Prayer skills</li>
                  <li>Israel</li>
                </ul>
                <p className="font-semibold text-gray-900">7th Grade Curriculum:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The Shoah and its lessons for Jews today.</li>
                  <li>
                    B&apos;nai Mitzvah prep and creating a connection to the this
                    important tradition and ritual.
                  </li>
                </ul>
              </div>
            </article>

            <article>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
                6th Grade Hebrew and B&apos;nai Mitzvah Preparation
              </h3>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p className="font-semibold text-gray-900">6th Grade:</p>
                <p>
                  Students continue to build their Hebrew skills in our once-weekly
                  small-group lessons, either in person or on Zoom. These sessions
                  focus on decoding fluency, prayer reading, and developing comfort
                  with the structure and language of Jewish liturgy.
                </p>
                <p className="font-semibold text-gray-900">7th Grade:</p>
                <p>
                  In their B&apos;nai Mitzvah year, students transition to weekly
                  30-minute one-on-one tutoring with a skilled B&apos;nai Mitzvah
                  educator. These individualized sessions focus on Torah chanting,
                  prayers, and personal preparation, helping each student gain
                  confidence, mastery, and a deeper connection to their B&apos;nai
                  Mitzvah experience.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* B'nai Mitzvah — concise; follows school program content */}
      <section id="bnai-mitzvah" className="py-12 md:py-16 border-t border-warm-200 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-3">
            A Sacred Milestone
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-6">
            B&apos;nai Mitzvah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Becoming a Bar or Bat Mitzvah is one of the most meaningful moments
                in a young person&apos;s Jewish journey. At Temple Beth Sholom, we
                guide each student with care, warmth, and personal attention as they
                prepare to lead the congregation in worship and take their place in
                the Jewish community.
              </p>
              <p>
                Our program blends Hebrew skills, Torah study, and personal growth.
                Each student works closely with Rabbi Doug and Cantor Anna to
                prepare their Torah portions, and develops a meaningful community
                service project that connects Jewish values to real-world action.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-tbs-gold-500 font-bold">•</span>
                  Personalized Torah preparation with clergy
                </li>
                <li className="flex gap-2">
                  <span className="text-tbs-gold-500 font-bold">•</span>
                  Hebrew reading and prayer skills
                </li>
                <li className="flex gap-2">
                  <span className="text-tbs-gold-500 font-bold">•</span>
                  Community service project (tikkun olam)
                </li>
                <li className="flex gap-2">
                  <span className="text-tbs-gold-500 font-bold">•</span>
                  Leading Shabbat services
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/events/BnaiMitvah.jpg"
                alt="B&apos;nai Mitzvah celebration at Temple Beth Sholom"
                fill
                className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Inquiry Form */}
      <section id="enrollment-form" className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-tbs-gold-500 text-sm font-medium tracking-[0.15em] uppercase mb-4">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800 mb-4">
              Inquire About Enrollment
            </h2>
            <p className="text-gray-500 text-lg">
              Fill out the form below and we&apos;ll be in touch soon.
            </p>
          </div>

          <form
            action="https://formspree.io/f/mdawrgle"
            method="POST"
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="enroll_email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="enroll_email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="enroll_message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="enroll_message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your child, their age/grade, any questions you have..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all resize-vertical"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image
          src="/images/holidays/holidays-7606.jpg"
          alt="A joyful moment during a holiday program at TBS"
          fill
          className="object-cover object-[center_45%] sm:object-[center_35%] md:object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-blue-900/90 to-tbs-blue-800/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Interested in Enrolling?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-4xl mx-auto">
            We would love to tell you more about our Religious School and help
            your family find a home here. Reach out anytime.
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
