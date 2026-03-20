import Link from "next/link";
import Image from "next/image";
import { SITE, CONTACT, SOCIAL, SERVICES, DONATE } from "@/lib/constants";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-tbs-blue-800 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logos/tbs-logo.png"
                alt="Temple Beth Sholom"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-bold font-[family-name:var(--font-heading)]">
                {SITE.name}
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              A warm, vibrant Reform Jewish community in Rockland County, NY.
            </p>
            <div className="text-blue-200 text-sm space-y-1">
              <p>{CONTACT.address}</p>
              <p>{CONTACT.city}, {CONTACT.state} {CONTACT.zip}</p>
              <p className="mt-2">
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-tbs-gold-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Worship & Shabbat", href: "/worship" },
                { label: "Torah Study", href: "/torah-study" },
                { label: "Events Calendar", href: "/events" },
                { label: "Watch Live", href: "/watch-live" },
                { label: "Religious School", href: "/religious-school" },
                { label: "Music & Community", href: "/music-community" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Times */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-tbs-gold-300 mb-4">
              Service Times
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white">Shabbat Services</p>
                <p className="text-blue-200">{SERVICES.shabbat.day} at {SERVICES.shabbat.time}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Torah Study</p>
                <p className="text-blue-200">{SERVICES.torahStudy.day} at {SERVICES.torahStudy.time}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-tbs-gold-300 mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-6">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-sm font-semibold mb-1">Donate via Zelle</p>
              <p className="text-tbs-gold-300 font-bold text-lg">{DONATE.zelle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-1">
                Stay Connected
              </h3>
              <p className="text-blue-200 text-sm">
                Get our weekly newsletter with service times, events, and community updates.
              </p>
            </div>
            <NewsletterForm variant="dark" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-300">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>A proud member of the Union for Reform Judaism</p>
        </div>
      </div>
    </footer>
  );
}
