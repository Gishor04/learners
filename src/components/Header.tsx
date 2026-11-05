"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { lang, setLang, t, openEnrollModal, setIsNoticeOpen, setIsAdminSignInOpen } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-4 shadow-sm safe-header">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden min-w-0">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shrink-0">
              {t.newBadge}
            </span>
            <span className="truncate sm:whitespace-normal font-semibold text-xs sm:text-sm">
              {t.topNotice}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3.5 text-xs shrink-0">
            <span className="flex items-center gap-1.5 opacity-90">
              <i className="fa-regular fa-clock"></i>
              <span>{t.hoursText}</span>
            </span>
            <a
              href="tel:0775189963"
              className="font-bold hover:text-amber-200 transition-colors flex items-center gap-1"
              title="Mobile & WhatsApp"
            >
              <i className="fa-solid fa-mobile-screen text-[11px]"></i> 077 518 9963
            </a>
            <span className="opacity-60 text-[10px]">/</span>
            <a
              href="tel:0214327102"
              className="font-bold hover:text-amber-200 transition-colors flex items-center gap-1"
              title="Land Phone (Second Option)"
            >
              <i className="fa-solid fa-phone text-[10px]"></i> 021 4327 102
            </a>
            <span className="opacity-60 text-[10px]">|</span>
            <a
              href="https://www.tiktok.com/@dinesh.niro?_r=1&_t=ZS-9B7EPz39NCr"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-pink-300 transition-colors"
              title="TikTok: @dinesh.niro"
            >
              <i className="fa-brands fa-tiktok text-xs"></i>
            </a>
            <a
              href="https://youtube.com/@ngcsmartstove6985?si=BDX_E-pg2wXvarU6"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-red-300 transition-colors"
              title="YouTube: @ngcsmartstove6985"
            >
              <i className="fa-brands fa-youtube text-xs"></i>
            </a>
            <button
              onClick={() => setIsAdminSignInOpen(true)}
              className="bg-black/25 hover:bg-black/45 text-amber-200 hover:text-white px-2.5 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 border border-white/20 text-[11px]"
              title="Admin Sign In"
            >
              <i className="fa-solid fa-lock text-[10px]"></i>
              <span>{t.adminPortalBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN HEADER WRAPPER (2-TIER: SEPARATE BRAND/ACTIONS & FULL NAV) */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all safe-header">
        {/* ROW 1: BRAND LOGO + PHONE + LANGUAGE SELECTOR + ENROLL CTA */}
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-15 sm:h-20 flex items-center justify-between gap-1 sm:gap-4 w-full">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-1.5 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl border-2 border-red-600 shadow-xs sm:shadow-md flex items-center justify-center font-black text-red-600 text-lg sm:text-2xl font-sans tracking-tight group-hover:scale-105 transition-transform shrink-0">
              L
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-sm sm:text-xl font-black text-slate-900 tracking-tight font-heading whitespace-nowrap">
                  {t.brandTitle}
                </span>
                <span className="text-[8px] sm:text-[10px] bg-red-100 text-red-700 font-bold px-1 sm:px-2 py-0.5 rounded-full border border-red-200 shrink-0">
                  DS:385
                </span>
              </div>
              <span className="hidden sm:block text-[11px] font-semibold text-slate-500 tracking-tight whitespace-nowrap">
                {t.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Right Actions: Phone + Language Selector + Enroll CTA + Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Direct Call Button (Desktop md+) */}
            <a
              href="tel:0775189963"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-red-50 text-slate-800 hover:text-red-600 rounded-xl transition-colors border border-slate-200 text-xs font-bold shrink-0 shadow-xs"
              title="Call: 077 518 9963"
            >
              <i className="fa-solid fa-phone text-red-600 text-xs"></i>
              <span>077 518 9963</span>
            </a>

            {/* Language Selector: Compact on mobile, spacious on tablet/desktop */}
            <div className="flex items-center bg-slate-100 p-0.5 sm:p-1 rounded-lg sm:rounded-xl border border-slate-200 text-[10px] sm:text-xs font-bold shadow-inner shrink-0">
              <button
                onClick={() => setLang("ta")}
                className={'px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg transition-all whitespace-nowrap font-bold ' + (lang === "ta" ? "bg-red-600 text-white font-extrabold shadow-sm" : "text-slate-700 hover:bg-slate-200")}
                title="தமிழ்"
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLang("en")}
                className={'px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg transition-all whitespace-nowrap font-bold ' + (lang === "en" ? "bg-red-600 text-white font-extrabold shadow-sm" : "text-slate-700 hover:bg-slate-200")}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => setLang("si")}
                className={'px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg transition-all whitespace-nowrap font-bold ' + (lang === "si" ? "bg-red-600 text-white font-extrabold shadow-sm" : "text-slate-700 hover:bg-slate-200")}
                title="සිංහල"
              >
                <span className="sm:hidden">සිං</span>
                <span className="hidden sm:inline">සිංහල</span>
              </button>
            </div>

            {/* Admission CTA Button (Visible on sm/tablet and up) */}
            <button
              onClick={() => openEnrollModal()}
              className="hidden sm:flex bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-red-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all items-center gap-1.5 shrink-0 whitespace-nowrap"
            >
              <i className="fa-solid fa-id-card text-xs"></i>
              <span>{t.btnEnroll}</span>
            </button>

            {/* Mobile Menu Hamburger (Always 100% visible on mobile, lg:hidden) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors lg:hidden shrink-0 flex items-center justify-center min-w-[34px] min-h-[34px] sm:min-w-[38px] sm:min-h-[38px] border border-slate-200/80 shadow-xs"
              aria-label="Toggle navigation menu"
            >
              <i className={'fa-solid ' + (mobileMenuOpen ? "fa-xmark" : "fa-bars") + ' text-sm sm:text-base'}></i>
            </button>
          </div>
        </div>

        {/* ROW 2: DEDICATED DESKTOP NAVIGATION BAR (Full Width, Spacious, Never Overlaps!) */}
        <div className="hidden lg:block border-t border-slate-200/80 bg-slate-50/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <nav className="flex items-center justify-center gap-1.5 xl:gap-3 py-2 text-xs xl:text-sm font-bold text-slate-700 flex-wrap">
              <a
                href="#home"
                className="text-red-600 hover:text-red-700 transition-colors px-3 py-1 rounded-lg hover:bg-red-50/80 whitespace-nowrap font-bold"
              >
                {t.navHome}
              </a>
              <a
                href="#front-details"
                className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-1 font-extrabold bg-red-100/70 hover:bg-red-100 px-3 py-1 rounded-lg border border-red-200 shadow-2xs whitespace-nowrap"
              >
                <i className="fa-solid fa-bullhorn text-xs animate-pulse text-red-600"></i>
                <span>{t.navNotice}</span>
              </a>
              <a
                href="#zero-exp"
                className="text-amber-700 hover:text-amber-800 transition-colors flex items-center gap-1.5 font-bold px-3 py-1 rounded-lg hover:bg-amber-100/60 whitespace-nowrap"
              >
                <i className="fa-solid fa-wand-magic-sparkles text-xs text-amber-600"></i>
                <span>{t.navZeroExp}</span>
              </a>
              <a
                href="#courses"
                className="hover:text-red-600 transition-colors px-3 py-1 rounded-lg hover:bg-slate-200/70 whitespace-nowrap"
              >
                {t.navCourses}
              </a>
              <a
                href="#simulator"
                className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 px-3 py-1 rounded-lg hover:bg-cyan-50 whitespace-nowrap text-cyan-800 font-bold"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>{t.navSimulator}</span>
              </a>
              <a
                href="#awards"
                className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-amber-800 bg-amber-100/80 hover:bg-amber-100 px-3 py-1 rounded-lg border border-amber-300/80 font-extrabold whitespace-nowrap shadow-2xs"
              >
                <span>🏆 {t.navAwards}</span>
              </a>
              <a
                href="#gallery"
                className="hover:text-red-600 transition-colors px-3 py-1 rounded-lg hover:bg-slate-200/70 whitespace-nowrap"
              >
                {t.navGallery}
              </a>
              <a
                href="#real-estate"
                className="text-amber-700 hover:text-amber-800 transition-colors flex items-center gap-1.5 font-bold px-3 py-1 rounded-lg hover:bg-amber-100/60 whitespace-nowrap"
              >
                <i className="fa-solid fa-house-chimney text-xs text-amber-600"></i>
                <span>{t.navRealEstate}</span>
              </a>
              <a
                href="#contact"
                className="hover:text-red-600 transition-colors px-3 py-1 rounded-lg hover:bg-slate-200/70 whitespace-nowrap"
              >
                {t.navContact}
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl space-y-4 animate-in slide-in-from-top">
            <div className="flex items-center justify-around bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-bold">
              <button
                onClick={() => setLang("ta")}
                className={'flex-1 py-1.5 rounded-lg text-center transition-all ' + (lang === "ta" ? "bg-red-600 text-white font-bold" : "text-slate-700 hover:bg-slate-200")}
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLang("en")}
                className={'flex-1 py-1.5 rounded-lg text-center transition-all ' + (lang === "en" ? "bg-red-600 text-white font-bold" : "text-slate-700 hover:bg-slate-200")}
              >
                English
              </button>
              <button
                onClick={() => setLang("si")}
                className={'flex-1 py-1.5 rounded-lg text-center transition-all ' + (lang === "si" ? "bg-red-600 text-white font-bold" : "text-slate-700 hover:bg-slate-200")}
              >
                සිංහල
              </button>
            </div>

            <nav className="flex flex-col space-y-3 font-semibold text-slate-700">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-red-600 hover:text-red-700"
              >
                {t.navHome}
              </a>
              <a
                href="#front-details"
                onClick={() => setMobileMenuOpen(false)}
                className="text-red-600 font-bold flex items-center gap-1.5"
              >
                <i className="fa-solid fa-bullhorn text-xs"></i>
                <span>{t.navNotice}</span>
              </a>
              <a
                href="#zero-exp"
                onClick={() => setMobileMenuOpen(false)}
                className="text-amber-600 font-bold"
              >
                {t.navZeroExp}
              </a>
              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600"
              >
                {t.navCourses}
              </a>
              <a
                href="#simulator"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600"
              >
                {t.navSimulator}
              </a>
              <a
                href="#awards"
                onClick={() => setMobileMenuOpen(false)}
                className="text-amber-700 font-bold hover:text-amber-800 flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200"
              >
                <span>🏆 {t.navAwards}</span>
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600"
              >
                {t.navGallery}
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600"
              >
                {t.navFees}
              </a>
              <a
                href="#quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600"
              >
                {t.navQuiz}
              </a>
              <a
                href="#real-estate"
                onClick={() => setMobileMenuOpen(false)}
                className="text-amber-600 font-bold hover:text-amber-700 flex items-center gap-1.5"
              >
                <i className="fa-solid fa-house-chimney text-xs"></i>
                <span>{t.navRealEstate}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600"
              >
                {t.navContact}
              </a>
            </nav>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="tel:0775189963"
                className="w-full py-2.5 text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-phone text-red-600"></i> 077 518 9963
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnrollModal();
                }}
                className="w-full py-3 bg-red-600 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-id-card"></i> <span>{t.btnEnroll}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdminSignInOpen(true);
                }}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-700"
              >
                <i className="fa-solid fa-shield-halved text-amber-400"></i>
                <span>{t.adminPortalBtn} (Admin Sign In)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
