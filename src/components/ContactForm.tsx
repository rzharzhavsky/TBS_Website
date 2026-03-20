"use client";

import { useState, FormEvent } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mojkbygq";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({})) as { error?: string };
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Could not send your message. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 py-8">
        <div className="w-14 h-14 rounded-full bg-tbs-mint-100 flex items-center justify-center">
          <svg className="w-7 h-7 text-tbs-blue-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-tbs-blue-800">Message Sent!</h3>
        <p className="text-gray-500 text-lg">Thank you for reaching out. We&apos;ll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-tbs-blue-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all"
        >
          <option value="">Select a topic...</option>
          <option value="General Question">General Question</option>
          <option value="Membership">Membership</option>
          <option value="Religious School">Religious School</option>
          <option value="B'nai Mitzvah">B&apos;nai Mitzvah</option>
          <option value="Events">Events</option>
          <option value="Donations">Donations</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all resize-vertical"
          placeholder="How can we help you?"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
