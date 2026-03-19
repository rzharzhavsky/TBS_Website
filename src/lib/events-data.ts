export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: "worship" | "learning" | "music" | "community" | "school" | "holiday";
}

export const UPCOMING_EVENTS: Event[] = [
  {
    id: "1",
    title: "Friday Night Shabbat Service",
    date: "2026-03-20",
    time: "7:30 PM",
    location: "JCC Rockland",
    description: "Join us for a warm, musical Shabbat service.",
    category: "worship",
  },
  {
    id: "2",
    title: "Torah Study with Rabbi Doug",
    date: "2026-03-21",
    time: "10:00 AM",
    location: "JCC Rockland / Zoom",
    description: "Explore the weekly Torah portion together.",
    category: "learning",
  },
  {
    id: "3",
    title: "Adult Choir Rehearsal",
    date: "2026-03-19",
    time: "7:00 PM - 9:00 PM",
    location: "JCC Rockland",
    description: "Weekly rehearsal for our Adult Choir & Band.",
    category: "music",
  },
  {
    id: "4",
    title: "Broadway Shabbat",
    date: "2026-04-03",
    time: "7:30 PM",
    location: "JCC Rockland",
    description: "A special musical Shabbat featuring Broadway favorites.",
    category: "worship",
  },
  {
    id: "5",
    title: "Religious School",
    date: "2026-03-22",
    time: "9:00 AM - 12:00 PM",
    location: "JCC Rockland",
    description: "Sunday morning Religious School for all ages.",
    category: "school",
  },
];

export const CATEGORY_COLORS: Record<Event["category"], string> = {
  worship: "bg-blue-100 text-blue-800",
  learning: "bg-emerald-100 text-emerald-800",
  music: "bg-purple-100 text-purple-800",
  community: "bg-amber-100 text-amber-800",
  school: "bg-rose-100 text-rose-800",
  holiday: "bg-orange-100 text-orange-800",
};
