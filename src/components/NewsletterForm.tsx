"use client";

import { useState, FormEvent } from "react";

type Variant = "light" | "dark";

const styles = {
  light: {
    input:
      "flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 focus:border-tbs-blue-500 focus:ring-2 focus:ring-tbs-blue-200 outline-none transition-all text-sm",
    button:
      "px-7 py-3.5 rounded-full bg-tbs-blue-700 text-white font-semibold text-sm hover:bg-tbs-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap disabled:opacity-60",
    success: "text-tbs-blue-700",
    error: "text-red-600",
  },
  dark: {
    input:
      "px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-300 focus:border-tbs-gold-300 focus:ring-2 focus:ring-tbs-gold-300/30 outline-none transition-all text-sm w-full md:w-72",
    button:
      "px-6 py-3 rounded-full bg-tbs-gold-500 text-tbs-blue-900 font-semibold text-sm hover:bg-tbs-gold-400 transition-all duration-300 whitespace-nowrap disabled:opacity-60",
    success: "text-tbs-gold-300",
    error: "text-red-300",
  },
};

export default function NewsletterForm({ variant = "light" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const s = styles[variant];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're subscribed! Welcome to the community.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-2 text-sm font-medium ${s.success}`}>
        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
        className={s.input}
      />
      <button type="submit" disabled={status === "loading"} className={s.button}>
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className={`text-xs self-center ${s.error}`}>{message}</p>
      )}
    </form>
  );
}
