const MAILCHIMP_URL =
  "https://gmail.us13.list-manage.com/subscribe/post-json";
const MAILCHIMP_U = "e4f5adb2ab90c5e67bd8d72a9";
const MAILCHIMP_ID = "a7a578fde7";
const MAILCHIMP_FID = "00c726eaf0";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return Response.json(
      { success: false, message: "Email is required." },
      { status: 400 }
    );
  }

  const url = new URL(MAILCHIMP_URL);
  url.searchParams.set("u", MAILCHIMP_U);
  url.searchParams.set("id", MAILCHIMP_ID);
  url.searchParams.set("f_id", MAILCHIMP_FID);
  url.searchParams.set("EMAIL", email);

  try {
    const res = await fetch(url.toString(), { method: "GET" });
    const text = await res.text();

    let data: { result?: string; msg?: string } | undefined;
    try {
      data = JSON.parse(text);
    } catch {
      const match = text.match(/\([\s\S]+\)/);
      if (match) data = JSON.parse(match[1]);
    }

    if (data?.result === "success") {
      return Response.json({ success: true, message: data.msg });
    }

    const msg = data?.msg?.includes("already subscribed")
      ? "You're already subscribed!"
      : data?.msg || "Something went wrong. Please try again.";

    return Response.json({ success: false, message: msg }, { status: 400 });
  } catch {
    return Response.json(
      { success: false, message: "Could not connect. Please try again later." },
      { status: 500 }
    );
  }
}
