"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, openEnrollModal } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-white via-rose-50/40 to-slate-100">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            
            {/* Govt DMT Badge Pill & Customer Announcement Jump Link */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 bg-white/95 border border-red-200 px-3 py-1 rounded-full shadow-xs text-xs font-bold text-red-700">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                <span>{t.heroPill}</span>
              </div>
              <a
                href="#front-details"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-600 text-white px-3 py-1 rounded-full text-xs font-black shadow-xs hover:scale-[1.03] transition-all"
              >
                <i className="fa-solid fa-bullhorn text-amber-300 animate-pulse text-xs"></i>
                <span>{t.heroNoticePill}</span>
                <i className="fa-solid fa-arrow-down text-[10px]"></i>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] font-heading">
              <span>{t.heroTitlePrefix}</span>
              <span className="text-gradient-fire font-black">{t.heroTitleHighlight}</span>
              <span>{t.heroTitleSuffix}</span>
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.heroDesc}
            </p>

            {/* Key highlights bullet tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-700">
              <span className="bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-300 shadow-xs flex items-center gap-1.5 font-bold">
                <i className="fa-solid fa-stethoscope text-emerald-600"></i> <span>{t.heroTagFreeMed}</span>
              </span>
              <span className="bg-blue-50 text-blue-800 px-3 py-1.5 rounded-lg border border-blue-300 shadow-xs flex items-center gap-1.5 font-bold">
                <i className="fa-solid fa-building-columns text-blue-600"></i> <span>{t.heroTagFreeKachcheri}</span>
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5">
                <i className="fa-solid fa-gamepad text-indigo-500"></i> <span>{t.heroTagSim}</span>
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5">
                <i className="fa-solid fa-car text-red-500"></i> <span>{t.heroTagDual}</span>
              </span>
              <span className="bg-amber-50 text-amber-900 px-3 py-1.5 rounded-lg border border-amber-300 shadow-xs flex items-center gap-1.5 font-bold">
                <i className="fa-regular fa-calendar-xmark text-amber-600"></i> <span>{t.heroTagDays}</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => openEnrollModal("3D Driving Simulator")}
                className="open-enroll-modal w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 text-sm"
              >
                <i className="fa-solid fa-steering-wheel"></i>
                <span>{t.btnHeroTrial}</span>
              </button>
              
              <a
                href="https://wa.me/94779227102?text=Hello%20Dinesh%20Learners!%20I%20am%20interested%20in%20driving%20classes."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>{t.btnHeroWhatsapp}</span>
              </a>
            </div>

            {/* Trust Badges & Dual Phone Strip */}
            <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <i className="fa-solid fa-location-dot text-red-500"></i>
                <span>{t.heroLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:0779227102"
                  className="flex items-center gap-1 font-bold text-slate-800 hover:text-red-600 transition-colors bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs"
                  title="Mobile / WhatsApp"
                >
                  <i className="fa-solid fa-mobile-screen text-emerald-600 text-xs"></i>
                  <span>077 9227 102</span>
                </a>
                <a
                  href="tel:0214327102"
                  className="flex items-center gap-1 font-bold text-slate-800 hover:text-blue-600 transition-colors bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs"
                  title="Landline Number (Second Option)"
                >
                  <i className="fa-solid fa-phone text-blue-600 text-xs"></i>
                  <span>021 4327 102 <span className="text-[10px] text-slate-400 font-normal">(Land)</span></span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-white rounded-3xl p-3 shadow-xl border-2 border-red-100 hover:border-red-300 transition-all">
              
              {/* Official DMT Banner */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner border border-slate-200 bg-slate-950 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center group">
                <img
                  src="/assets/banner.jpg"
                  alt="Dinesh Learners Jaffna Official DMT DS:385"
                  className="w-full h-full object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                />
                
                {/* Official Govt Badge */}
                <div className="absolute top-2.5 left-2.5 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Official DMT: DS:385 • Jaffna</span>
                </div>
              </div>

              {/* Integrated Live Simulator Feature Bar */}
              <div className="mt-2.5 p-2 sm:p-2.5 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between gap-3 text-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-white/20 relative shadow-sm">
                    <img
                      src="/assets/simulator-live-training.jpg"
                      alt="3D Simulator Training Session"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-slate-950"></span>
                  </div>
                  <div>
                    <span className="text-[10px] text-cyan-400 font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                      <span>{t.heroLabBadge}</span>
                    </span>
                    <p className="text-xs font-black text-white leading-tight">{t.g1Caption}</p>
                  </div>
                </div>

                {/* Pass Rate Mini Badge */}
                <div className="shrink-0 text-right bg-white/10 px-2.5 py-1 rounded-xl border border-white/10">
                  <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">{t.cardPassTitle}</p>
                  <p className="text-xs font-black text-white">99.4% தேர்ச்சி</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
