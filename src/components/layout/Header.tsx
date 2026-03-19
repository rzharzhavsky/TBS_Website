"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logos/tbs-logo.png"
              alt="Temple Beth Sholom"
              width={44}
              height={44}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-tbs-blue-700">
                Temple Beth Sholom
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-tbs-blue-700 bg-tbs-blue-50"
                    : "text-gray-600 hover:text-tbs-blue-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join-donate"
              className={`ml-2 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                pathname === "/join-donate"
                  ? "bg-tbs-blue-800 text-white"
                  : "bg-tbs-blue-700 text-white hover:bg-tbs-blue-800 shadow-sm hover:shadow-md"
              }`}
            >
              Join / Donate
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl" style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
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
    </header>
  );
}
