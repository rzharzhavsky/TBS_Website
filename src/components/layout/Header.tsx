"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import NewsTicker, { type TickerData } from "@/components/NewsTicker";
import tickerFallback from "@/content/ticker.json";

const SCROLL_DIR_EPS = 4;

export default function Header({ tickerData }: { tickerData?: TickerData }) {
  const data = tickerData ?? (tickerFallback as TickerData);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subNavHidden, setSubNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
  }, []);

  // Fixed header: sync real height to --header-height so <main> padding matches (avoids layout gap when hiding).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setVar = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${el.offsetHeight}px`
      );
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (mobileOpen) {
        setSubNavHidden(false);
        lastScrollY.current = y;
        return;
      }

      if (y <= 12) {
        setSubNavHidden(false);
      } else {
        const delta = y - lastScrollY.current;
        if (delta > SCROLL_DIR_EPS) setSubNavHidden(true);
        else if (delta < -SCROLL_DIR_EPS) setSubNavHidden(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Keep sub-nav + ticker visible while mobile menu is open
  useEffect(() => {
    if (mobileOpen) setSubNavHidden(false);
  }, [mobileOpen]);

  const collapseSubNav = subNavHidden && !mobileOpen;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full flex flex-col transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : "bg-white"
      }`}
    >
      {/* Top bar with logo and CTA — always visible */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 w-full">
        <div className="flex min-h-[4.25rem] sm:min-h-20 lg:min-h-[5.5rem] py-1.5 sm:py-2 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/images/community/logo.PNG"
              alt="Temple Beth Sholom"
              width={320}
              height={320}
              className="h-14 w-auto sm:h-16 lg:h-20 object-contain object-left group-hover:scale-[1.02] transition-transform duration-300"
            />
          </Link>

          {/* Desktop: CTA + hamburger hidden on xl */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              href="/join-donate"
              className={`px-6 py-2.5 text-[13px] font-semibold tracking-wide uppercase rounded-full transition-all duration-300 ${
                pathname === "/join-donate"
                  ? "bg-tbs-blue-800 text-white"
                  : "bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 hover:shadow-md"
              }`}
            >
              Join / Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-full text-gray-500 hover:text-tbs-blue-700 hover:bg-gray-50 transition-all"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5M3.75 15.75h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop nav, mobile drawer, ticker — hide on scroll down */}
      <div
        className={`grid w-full transition-[grid-template-rows] duration-300 ease-out ${
          collapseSubNav ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden flex flex-col">
          {/* Desktop Navigation Bar */}
          <div
            className={`hidden xl:block border-t transition-colors duration-300 ${
              scrolled ? "border-gray-100" : "border-gray-100"
            }`}
          >
            <div className="px-4 2xl:px-8">
              <nav className="flex items-center justify-between h-12">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-2.5 py-2 text-[15px] font-medium tracking-[0.01em] rounded-md transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? "text-tbs-blue-700"
                          : "text-gray-500 hover:text-tbs-blue-700"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-5 h-[2px] bg-tbs-blue-600 rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div
              className="xl:hidden bg-white border-t border-gray-100 shadow-xl"
              style={{ maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}
            >
              <nav className="flex flex-col px-6 py-6 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3.5 text-lg font-medium rounded-xl transition-colors ${
                      pathname === item.href
                        ? "text-tbs-blue-700 bg-tbs-blue-50"
                        : "text-gray-700 hover:text-tbs-blue-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="/join-donate"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center py-4 text-lg font-semibold rounded-full bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 transition-colors"
                  >
                    Join / Donate
                  </Link>
                </div>
              </nav>
            </div>
          )}

          <NewsTicker data={data} />
        </div>
      </div>
    </header>
  );
}
