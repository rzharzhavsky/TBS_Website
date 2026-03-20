"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface TickerItem {
  label: string;
  text: string;
  link?: string;
}

interface TickerData {
  enabled: boolean;
  items: TickerItem[];
}

export default function NewsTicker({ data }: { data: TickerData }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("ticker-dismissed");
    if (dismissed === "true") setVisible(false);
  }, []);

  if (!data.enabled || data.items.length === 0 || !visible) return null;

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("ticker-dismissed", "true");
  };

  const content = data.items.map((item, i) => (
    <span key={i} className="inline-flex items-center gap-2 mx-8 shrink-0">
      <span className="font-semibold text-tbs-gold-300 uppercase text-base tracking-wider">
        {item.label}:
      </span>
      <span className="text-blue-100">{item.text}</span>
      {i < data.items.length - 1 && (
        <span className="mx-4 text-blue-300/30">|</span>
      )}
    </span>
  ));

  const ticker = (
    <div className="ticker-track">
      {content}
      {content}
    </div>
  );

  const wrappedTicker = data.items[0]?.link ? (
    <Link href={data.items[0].link} className="block overflow-hidden hover:opacity-90 transition-opacity">
      {ticker}
    </Link>
  ) : (
    <div className="overflow-hidden">{ticker}</div>
  );

  return (
    <div className="bg-tbs-blue-800 text-lg relative">
      <div className="mx-auto max-w-[calc(100%-3rem)]">
        {wrappedTicker}
      </div>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-blue-300/60 hover:text-white transition-colors"
        aria-label="Dismiss ticker"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
