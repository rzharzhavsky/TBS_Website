import { Event } from "./events-data";

const CALENDAR_ID = "tbscalendar5785@gmail.com";

interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

function categorizeEvent(title: string): Event["category"] {
  const lower = title.toLowerCase();
  if (lower.includes("shabbat") || lower.includes("service") || lower.includes("worship"))
    return "worship";
  if (lower.includes("torah") || lower.includes("study") || lower.includes("class"))
    return "learning";
  if (lower.includes("choir") || lower.includes("music") || lower.includes("band") || lower.includes("broadway"))
    return "music";
  if (lower.includes("school") || lower.includes("hebrew") || lower.includes("bnai") || lower.includes("b'nai"))
    return "school";
  if (lower.includes("holiday") || lower.includes("rosh") || lower.includes("yom") || lower.includes("purim") || lower.includes("chanukah") || lower.includes("hanukkah") || lower.includes("passover") || lower.includes("pesach") || lower.includes("sukkot"))
    return "holiday";
  return "community";
}

function formatTime(dateTime?: string, date?: string): string {
  if (dateTime) {
    return new Date(dateTime).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/New_York",
    });
  }
  return "All Day";
}

function formatDate(dateTime?: string, date?: string): string {
  const d = dateTime ? new Date(dateTime) : date ? new Date(date + "T12:00:00") : new Date();
  return d.toISOString().split("T")[0];
}

export async function fetchCalendarEvents(maxResults = 10): Promise<Event[] | null> {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  if (!apiKey) return null;

  const now = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${apiKey}&timeMin=${now}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const data = await res.json();
    const items: GoogleCalendarEvent[] = data.items || [];

    return items.map((item, i) => ({
      id: item.id || String(i),
      title: item.summary || "TBS Event",
      date: formatDate(item.start.dateTime, item.start.date),
      time: item.end?.dateTime
        ? `${formatTime(item.start.dateTime, item.start.date)} - ${formatTime(item.end.dateTime, item.end.date)}`
        : formatTime(item.start.dateTime, item.start.date),
      location: item.location || "JCC Rockland",
      description: item.description
        ? item.description.replace(/<[^>]*>/g, "").slice(0, 200)
        : "",
      category: categorizeEvent(item.summary || ""),
    }));
  } catch {
    return null;
  }
}
