"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function CustomerNotice() {
  const { t, setIsNoticeOpen } = useLanguage();

  return (
    <section id="front-details" className="relative pt-4 pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-200/80 ring-2 ring-red-500/15 relative overflow-hidden">
        {/* Ambient Decorative Circles */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Top Announcement Header & Quick Direct Contact Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-slate-200">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
              <span className="animate-pulse text-sm">📢</span>
              <span>{t.noticeBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-heading leading-tight">
              {t.noticeGreeting}
            </h2>
            <p className="text-sm sm:text-base font-bold text-red-600 flex items-center gap-2">
              {t.noticeSub}
            </p>
          </div>
          
          {/* Quick Action Contact Pills: Responsive 2x2 on mobile, flex on desktop */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap items-center gap-2 w-full lg:w-auto shrink-0">
            <a
              href="https://wa.me/94779227102?text=வணக்கம்%20டினேஸ்%20லேணர்ஸ்!%20விசேட%20சாரதிப்%20பயிற்சி%20பற்றிய%20விபரங்களை%20அறிய%20விரும்புகிறேன்."
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-md shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 text-xs"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>{t.noticeWaBtn}</span>
            </a>
            <a
              href="tel:0779227102"
              className="px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl shadow-md shadow-red-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 text-xs"
              title="Mobile Call"
            >
              <i className="fa-solid fa-mobile-screen text-xs"></i>
              <span>{t.noticeCallBtn}</span>
            </a>
            <a
              href="tel:0214327102"
              className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-md shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 text-xs"
              title="Land Phone (Second Option)"
            >
              <i className="fa-solid fa-phone text-xs"></i>
              <span>021 4327 102 <span className="text-[10px] opacity-80">(Land)</span></span>
            </a>
            <a
              href="#simulator"
              className="px-3 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold rounded-xl shadow-md shadow-cyan-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 text-xs"
            >
              <i className="fa-solid fa-circle-play text-amber-300"></i>
              <span>{t.btnWatchVideo}</span>
            </a>
          </div>
        </div>

        {/* Feature Grid: 4 Core Customer Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-6">
          {/* Feature 1: Modern Tech Training */}
          <div className="bg-gradient-to-b from-white to-red-50/30 rounded-2xl p-5 border border-red-200/80 shadow-xs hover:shadow-md hover:border-red-400 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-100/80 border border-red-200 text-red-600 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform shadow-xs">
                🚗
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 font-heading">
                {t.noticeTechTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {t.noticeTechDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-red-100 flex items-center gap-1.5 text-[11px] font-bold text-red-600">
              <i className="fa-solid fa-check-circle text-xs"></i>
              <span>{t.noticeTechFeature}</span>
            </div>
          </div>

          {/* Feature 2: Exam Assistance */}
          <div className="bg-gradient-to-b from-white to-amber-50/30 rounded-2xl p-5 border border-amber-200/80 shadow-xs hover:shadow-md hover:border-amber-400 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100/80 border border-amber-200 text-amber-600 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform shadow-xs">
                🚗
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 font-heading">
                {t.noticeExamTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {t.noticeExamDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-100 flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
              <i className="fa-solid fa-check-circle text-xs"></i>
              <span>{t.noticeExamFeature}</span>
            </div>
          </div>

          {/* Feature 3: Medical Test Support */}
          <div className="bg-gradient-to-b from-white to-blue-50/30 rounded-2xl p-5 border border-blue-200/80 shadow-xs hover:shadow-md hover:border-blue-400 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 border border-blue-200 text-blue-600 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform shadow-xs">
                🚗
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 font-heading">
                {t.noticeMedTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {t.noticeMedDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-100 flex items-center gap-1.5 text-[11px] font-bold text-blue-600">
              <i className="fa-solid fa-check-circle text-xs"></i>
              <span>{t.noticeMedFeature}</span>
            </div>
          </div>

          {/* Feature 4: Easy Installment Plan */}
          <div className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white rounded-2xl p-5 border-2 border-amber-400/80 shadow-xs hover:shadow-md hover:border-amber-500 transition-all group flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-2 right-2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
              {t.noticeInstallmentFeature}
            </span>
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform shadow-xs">
                🎉
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 font-heading">
                {t.noticeInstallmentTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                {t.noticeInstallmentDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200 flex items-center gap-1.5 text-[11px] font-extrabold text-amber-800">
              <i className="fa-solid fa-wallet text-xs"></i>
              <span>{t.noticeInstallmentFeature}</span>
            </div>
          </div>
        </div>

        {/* Real Estate Announcement Teaser */}
        <div className="mt-6 p-5 sm:p-6 bg-gradient-to-r from-amber-50 via-rose-50/50 to-amber-50 rounded-2xl border border-amber-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-base">🏡</span>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wide">
                {t.noticeReTag}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
              {t.noticeReDesc}
            </p>
            <p className="text-xs text-slate-600 font-medium flex items-center gap-1">
              <i className="fa-solid fa-location-dot text-red-500 text-xs"></i>
              <span><strong>{t.noticeAddressLabel}</strong> {t.noticeAddressText}</span>
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href="https://wa.me/94779227102?text=வணக்கம்%20தினேஷ்%20ரியல்%20எஸ்டேட்!%20நான்%20காணி%20/%20வீடு%20வாங்க%20/%20விற்க%20விரும்புகிறேன்."
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-xs flex items-center justify-center gap-1.5 text-xs transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>{t.noticeWaBtn}</span>
            </a>
            <button
              onClick={() => setIsNoticeOpen(true)}
              className="px-3.5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-300 text-xs shadow-xs transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-expand text-xs"></i>
              <span>{t.navNotice}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
