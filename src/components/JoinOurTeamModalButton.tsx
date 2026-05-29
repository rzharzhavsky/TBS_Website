"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

const PLACEHOLDER_PARAGRAPHS = [
  "Do you live 10 for 2? We have the job for you!",

"You may be exactly who we are looking for, even if you do not check every box. We value diverse perspectives, nontraditional career paths, and a willingness to learn.",

<><strong>Religious School Director</strong> - Part-time $65,000 annually.</>,

"Temple Beth Sholom, a warm, welcoming, and unique Reform congregation located on the Rockland Jewish Community Campus in West Nyack, NY, is seeking a passionate and caring Jewish educator to help shape the heart of our community - our children, teens, and families.",

"Temple Beth Sholom is a community that proudly welcomes and embraces families of all backgrounds, including interfaith families, and hopes to find someone who shares that inclusive spirit.",

"We are looking for an enthusiastic, dynamic, child-focused individual who believes deeply in the power of ruach, song session, and the magical potential of Jewish programming to educate, inspire identity, connection, and pride. This is an opportunity to build meaningful relationships, create joyful and engaging learning experiences, and help guide families on their Jewish journeys. Beginning July 1, 2026, our new Director will partner with clergy, staff, and lay leaders to thoughtfully evolve our programs while honoring the traditions and values that define us.",

<><u>About the Role</u></>,

"At Temple Beth Sholom, our Religious School is more than a place of learning - it is a place of belonging. The Director will lead all aspects of our school (Sundays and Tuesdays, with additional small-group learning during the week), as well as family education, and our teen program. This role is both visionary and hands-on, blending creativity, leadership, and relationship-building.",

<><u>Key Responsibilities</u></>,

"● Guide the day-to-day life of the Religious School, supervising, supporting and inspiring teachers and madrechim",

"● Create and nurture a grade-level curriculum that brings Judaism to life through Hebrew, prayer, holidays, values, and culture",

"● Establish and ensure implementation of developmentally-appropriate benchmarks for educational goals",

"● Design meaningful opportunities for families to learn, celebrate, and grow together",

"● Ensure every child feels seen, supported, and included",

"● Build strong, trusting relationships with students, families, and staff",

"● Partner with clergy on Bnei Mitzvah preparation",

"● Grow and deepen our teen program to keep teens connected and inspired",

"● Partner with clergy to engage our youth in meaningful Shabbat and holiday experiences",

"● Support outreach and enrollment efforts to welcome new families into our community",

"● Collaborate as part of a small, dedicated team that dreams big and works together to bring ideas to life",

<><u>Who We Are</u></>,

"Temple Beth Sholom is a close-knit Reform congregation where tradition and progressive values come together in meaningful ways. We strive to create a community where people feel welcome and connected to Judaism, to one another, and to something larger than themselves. Our school reflects that vision: relationship-centered, engaging, and rooted in a deep sense of Jewish pride and purpose. We are committed to fostering an inclusive environment where people of all backgrounds, sexual orientations, gender identities and expressions feel respected, valued, and empowered to contribute and succeed.",

<><u>Qualifications</u></>,

"● Warm, engaging presence with strong leadership and organizational skills",

"● Comfortable working with Google Sheets/docs and Microsoft Office.",

"● A passion for experiential, inclusive, and community-based learning",

"● Hebrew literacy a plus",

"● Comfort working within a Reform Jewish environment",

"● A collaborative spirit and desire to be part of a supportive team",

"● Degree in Education preferred",

<><u>Schedule Expectations</u></>,

"● Sundays and Tuesdays, with additional weekday responsibilities",

"● Presence at select Shabbat and holiday programs throughout the year",

<><u>Application Process</u></>,

"Applications will be reviewed on a rolling basis and include virtual and in-person conversations, as well as a sample teaching or program experience.",

"If you are someone who finds joy in building relationships, nurturing Jewish identity, and creating meaningful moments for children and families, we would love to hear from you.",

"Please submit a resume and cover letter describing your approach to Jewish education to TempleBethSholomSchool@gmail.com",
];

export default function JoinOurTeamModalButton({
  className,
  buttonLabel = "View Open Positions",
}: {
  className?: string;
  buttonLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
      >
        {buttonLabel}
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onMouseDown={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

            <div
              className="relative w-full max-w-2xl max-h-[min(85vh,720px)] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-100 shrink-0">
                <h2 id={titleId} className="text-lg font-semibold text-gray-900">
                  Job Application
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="text-gray-600 leading-relaxed space-y-4 text-base">
                  {PLACEHOLDER_PARAGRAPHS.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-6">
                  Tip: press <span className="font-medium text-gray-700">Esc</span> to
                  close.
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
