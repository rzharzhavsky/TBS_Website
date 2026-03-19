import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress pages → new site pages

      // About section
      { source: "/aboutus", destination: "/about", permanent: true },
      { source: "/aboutus/", destination: "/about", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },

      // Clergy & Staff
      { source: "/aboutus/rabbi-doug-segal", destination: "/clergy-staff", permanent: true },
      { source: "/aboutus/rabbi-doug-segal/", destination: "/clergy-staff", permanent: true },
      { source: "/aboutus/cantor-zhar", destination: "/clergy-staff", permanent: true },
      { source: "/aboutus/cantor-zhar/", destination: "/clergy-staff", permanent: true },
      { source: "/rabbi", destination: "/clergy-staff", permanent: true },
      { source: "/cantor", destination: "/clergy-staff", permanent: true },
      { source: "/staff", destination: "/clergy-staff", permanent: true },

      // Donate / Membership
      { source: "/aboutus/donate", destination: "/join-donate", permanent: true },
      { source: "/aboutus/donate/", destination: "/join-donate", permanent: true },
      { source: "/donate", destination: "/join-donate", permanent: true },
      { source: "/membership", destination: "/join-donate", permanent: true },
      { source: "/get-connected", destination: "/join-donate", permanent: true },
      { source: "/get-connected/", destination: "/join-donate", permanent: true },

      // Worship / Prayer / Services
      { source: "/prayer", destination: "/worship", permanent: true },
      { source: "/prayer/", destination: "/worship", permanent: true },
      { source: "/prayer/shabbat-services", destination: "/worship", permanent: true },
      { source: "/prayer/shabbat-services/", destination: "/worship", permanent: true },
      { source: "/services", destination: "/worship", permanent: true },
      { source: "/shabbat", destination: "/worship", permanent: true },
      { source: "/high-holy-days", destination: "/worship", permanent: true },
      { source: "/high-holy-days/", destination: "/worship", permanent: true },

      // Music
      { source: "/prayer/music", destination: "/music-community", permanent: true },
      { source: "/prayer/music/", destination: "/music-community", permanent: true },

      // B'nai Mitzvah
      { source: "/prayer/bnai-mitzvah", destination: "/religious-school#bnai-mitzvah", permanent: true },
      { source: "/prayer/bnai-mitzvah/", destination: "/religious-school#bnai-mitzvah", permanent: true },

      // Torah Study
      { source: "/study/torah-study", destination: "/torah-study", permanent: true },
      { source: "/study/torah-study/", destination: "/torah-study", permanent: true },
      { source: "/study", destination: "/torah-study", permanent: true },
      { source: "/study/", destination: "/torah-study", permanent: true },

      // Religious School
      { source: "/study/tbs-religious-school", destination: "/religious-school", permanent: true },
      { source: "/study/tbs-religious-school/", destination: "/religious-school", permanent: true },
      { source: "/school", destination: "/religious-school", permanent: true },
      { source: "/study/nefesh-hebrew-high", destination: "/religious-school", permanent: true },
      { source: "/study/nefesh-hebrew-high/", destination: "/religious-school", permanent: true },
      { source: "/nursery-school-engagement-program", destination: "/religious-school", permanent: true },
      { source: "/nursery-school-engagement-program/", destination: "/religious-school", permanent: true },

      // Community
      { source: "/community", destination: "/events", permanent: true },
      { source: "/community/", destination: "/events", permanent: true },

      // Calendar / Events
      { source: "/calendar", destination: "/events", permanent: true },
      { source: "/calendar/", destination: "/events", permanent: true },
      { source: "/monthly-calendar", destination: "/events", permanent: true },
      { source: "/monthly-calendar/", destination: "/events", permanent: true },
      { source: "/events/", destination: "/events", permanent: true },

      // Contact
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },

      // Media Gallery / Videos / Live
      { source: "/media-gallery", destination: "/gallery", permanent: true },
      { source: "/media-gallery/", destination: "/gallery", permanent: true },
      { source: "/media-gallery/videos", destination: "/watch-live", permanent: true },
      { source: "/media-gallery/videos/", destination: "/watch-live", permanent: true },
      { source: "/media-gallery/live-streaming", destination: "/watch-live", permanent: true },
      { source: "/media-gallery/live-streaming/", destination: "/watch-live", permanent: true },
      { source: "/live", destination: "/watch-live", permanent: true },
      { source: "/livestream", destination: "/watch-live", permanent: true },
      { source: "/hhdlive", destination: "/watch-live", permanent: true },
      { source: "/hhdlive/", destination: "/watch-live", permanent: true },

      // Sermons / Siddur
      { source: "/media-gallery/rabbi-sermons", destination: "/clergy-staff", permanent: true },
      { source: "/media-gallery/rabbi-sermons/", destination: "/clergy-staff", permanent: true },
      { source: "/sermons", destination: "/clergy-staff", permanent: true },
      { source: "/sermons/", destination: "/clergy-staff", permanent: true },
      { source: "/media-gallery/online-siddur", destination: "/worship", permanent: true },
      { source: "/media-gallery/online-siddur/", destination: "/worship", permanent: true },

      // Newsletter & misc
      { source: "/the-lamp-monthly-newsletter", destination: "/about", permanent: true },
      { source: "/the-lamp-monthly-newsletter/", destination: "/about", permanent: true },
      { source: "/the-future", destination: "/about", permanent: true },
      { source: "/the-future/", destination: "/about", permanent: true },
      { source: "/israel-in-crisis", destination: "/about", permanent: true },
      { source: "/israel-in-crisis/", destination: "/about", permanent: true },
      { source: "/ken-bernstein-author-series", destination: "/events", permanent: true },
      { source: "/ken-bernstein-author-series/", destination: "/events", permanent: true },
      { source: "/photos", destination: "/gallery", permanent: true },
    ];
  },
};

export default nextConfig;
