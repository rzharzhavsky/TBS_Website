const DATACENTER = "us13";
const LIST_ID = "a7a578fde7";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return Response.json(
      { success: false, message: "Email is required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  if (!apiKey) {
    return Response.json(
      { success: false, message: "Server configuration error." },
      { status: 500 }
    );
  }

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    const data = await res.json() as { status?: string | number; title?: string };

    if (res.ok) {
      return Response.json({ success: true });
    }

    if (data.title === "Member Exists") {
      return Response.json(
        { success: false, message: "You're already subscribed!" },
        { status: 400 }
      );
    }

    return Response.json(
      { success: false, message: data.title || "Something went wrong." },
      { status: 400 }
    );
  } catch {
    return Response.json(
      { success: false, message: "Could not connect. Please try again later." },
      { status: 500 }
    );
  }
}
