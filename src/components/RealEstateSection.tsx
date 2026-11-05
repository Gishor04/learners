"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function RealEstateSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="real-estate" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background glow & ambient effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/40 text-amber-300 text-xs font-extrabold uppercase tracking-widest shadow-sm">
            <i className="fa-solid fa-certificate"></i>
            <span>{t.reBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-red-500 bg-clip-text text-transparent">
              {t.reTitle}
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.reSubtitle}
          </p>
        </div>

        {/* Transparent Commission Rates Highlight (User Request: Buy 1%, Sell 2%) */}
        <div className="bg-gradient-to-r from-amber-500/10 via-rose-500/15 to-amber-500/10 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-wider">
              <i className="fa-solid fa-handshake"></i>
              <span>{t.reCommissionBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
              {t.reCommissionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {t.reCommissionSubtitle}
            </p>

            {/* 2 Big Commission Percentage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Buy: 1% */}
              <div className="p-6 bg-slate-900/90 rounded-2xl border border-emerald-500/50 shadow-lg text-center space-y-2 relative overflow-hidden group hover:border-emerald-400 transition-all">
                <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  {t.reBuyBadge}
                </div>
                <div className="text-5xl font-black text-emerald-400 font-heading">
                  1%
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white">
                  {t.reBuyTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.reBuyDesc}
                </p>
              </div>

              {/* Sell: 2% */}
              <div className="p-6 bg-slate-900/90 rounded-2xl border border-rose-500/50 shadow-lg text-center space-y-2 relative overflow-hidden group hover:border-rose-400 transition-all">
                <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  {t.reSellBadge}
                </div>
                <div className="text-5xl font-black text-rose-400 font-heading">
                  2%
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white">
                  {t.reSellTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.reSellDesc}
                </p>
              </div>
            </div>

            <p className="text-xs text-amber-300 font-bold pt-2">
              ⭐ {t.reCommissionTrust}
            </p>
          </div>
        </div>

        {/* Real Estate Visual Banner & Contact Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Official Banner Showcase */}
          <div className="lg:col-span-7 relative group">
            <div className="relative bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-3 sm:p-4 rounded-3xl border border-slate-700/80 shadow-2xl backdrop-blur">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/assets/dinesh-real-estate-banner.jpg"
                  alt="Dinesh Real Estate Official Banner Jaffna"
                  className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm text-white text-xs font-black px-3 py-1 rounded-full shadow-lg border border-white/20 flex items-center gap-1.5">
                  <i className="fa-solid fa-stamp"></i>
                  <span>{t.reBannerTag}</span>
                </div>
              </div>

              {/* Quick Info Bar below banner */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-user-tie text-amber-400 text-sm"></i>
                  <span className="font-semibold text-slate-400">{t.reProprietorLabel}</span>
                  <span className="font-bold text-white">{t.reProprietorName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-rose-400 text-sm"></i>
                  <a href="mailto:nelsonrealestate@gmail.com" className="font-bold text-slate-200 hover:text-rose-400 transition-colors">
                    nelsonrealestate@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Real Estate Contact & Direct Enquiry Box */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl space-y-6">
              
              <div className="border-b border-slate-700/70 pb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{t.reSideTag}</span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-1">
                  {t.reSideTitle}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {t.reSideDesc}
                </p>
              </div>

              {/* Direct Contact Points */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 text-sm font-bold">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-slate-400 font-semibold">{t.rePhoneLabel}</p>
                    <p className="text-white font-black text-sm mt-0.5">021 4327 102 &nbsp;|&nbsp; 077 9227 102</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-sm font-bold">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-400 font-semibold">{t.reWaInquiryLabel}</p>
                    <p className="text-emerald-400 font-black text-sm mt-0.5">+94 77 922 7102</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-sm font-bold">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-slate-400 font-semibold">{t.reAddressLabel}</p>
                    <p className="text-white font-semibold text-xs mt-0.5 leading-relaxed">
                      {t.reAddressValue}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/94779227102?text=வணக்கம்%20தினேஷ்%20ரியல்%20எஸ்டேட்!%20நான்%20யாழ்ப்பாணத்தில்%20வீடு%20/%20காணி%20வாங்க%20/%20விற்க%20விரும்புகிறேன்."
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-center shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  <span>{t.reBtnWa}</span>
                </a>
                <a
                  href="tel:0779227102"
                  className="py-3.5 px-5 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-xl text-center shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>{t.reBtnCall}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Core Real Estate Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 transition-all hover:border-amber-500/50 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-house-chimney"></i>
            </div>
            <h4 className="text-lg font-black text-white font-heading">{t.reCard1Title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{t.reCard1Desc}</p>
          </div>

          <div className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 transition-all hover:border-rose-500/50 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>
            <h4 className="text-lg font-black text-white font-heading">{t.reCard2Title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{t.reCard2Desc}</p>
          </div>

          <div className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 transition-all hover:border-blue-500/50 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-building-wheat"></i>
            </div>
            <h4 className="text-lg font-black text-white font-heading">{t.reCard3Title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{t.reCard3Desc}</p>
          </div>

          <div className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 transition-all hover:border-emerald-500/50 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-file-shield"></i>
            </div>
            <h4 className="text-lg font-black text-white font-heading">{t.reCard4Title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{t.reCard4Desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
