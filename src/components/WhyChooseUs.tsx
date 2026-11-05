"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: "fa-gamepad",
      color: "bg-red-50 text-red-600",
      title: t.w1Title,
      desc: t.w1Desc,
    },
    {
      icon: "fa-person-chalkboard",
      color: "bg-blue-50 text-blue-600",
      title: t.w2Title,
      desc: t.w2Desc,
    },
    {
      icon: "fa-person-dress",
      color: "bg-pink-50 text-pink-600",
      title: t.w3Title,
      desc: t.w3Desc,
    },
    {
      icon: "fa-calendar-days",
      color: "bg-emerald-50 text-emerald-600",
      title: t.w4Title,
      desc: t.w4Desc,
    },
    {
      icon: "fa-car-tunnel",
      color: "bg-amber-50 text-amber-600",
      title: t.w5Title,
      desc: t.w5Desc,
    },
    {
      icon: "fa-map-location-dot",
      color: "bg-indigo-50 text-indigo-600",
      title: t.w6Title,
      desc: t.w6Desc,
    },
  ];

  return (
    <>
      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold tracking-widest text-red-600 uppercase bg-red-100/80 px-3.5 py-1.5 rounded-full border border-red-200">
              {t.whyPill}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              {t.whyTitle}
            </h2>
            <p className="text-slate-600 text-sm">
              {t.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
              >
                <div className={`w-12 h-12 rounded-2xl ${r.color} flex items-center justify-center text-xl font-bold`}>
                  <i className={`fa-solid ${r.icon}`}></i>
                </div>
                <h3 className="font-bold text-lg text-slate-900">{r.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold tracking-widest text-red-400 uppercase bg-red-950 px-3.5 py-1.5 rounded-full border border-red-800">
              {t.revPill}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading">
              {t.reviewTitle}
            </h2>
            <p className="text-slate-400 text-sm">
              {t.reviewSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 backdrop-blur rounded-3xl p-6 border border-slate-700 space-y-4">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">{t.r1Text}</p>
              <div className="pt-2 flex items-center gap-3 border-t border-slate-700/60">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-sm">
                  {t.r1Initial}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{t.r1Name}</h4>
                  <p className="text-[11px] text-slate-400">{t.r1Place}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur rounded-3xl p-6 border border-slate-700 space-y-4">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">{t.r2Text}</p>
              <div className="pt-2 flex items-center gap-3 border-t border-slate-700/60">
                <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center font-bold text-white text-sm">
                  {t.r2Initial}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{t.r2Name}</h4>
                  <p className="text-[11px] text-slate-400">{t.r2Place}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur rounded-3xl p-6 border border-slate-700 space-y-4">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">{t.r3Text}</p>
              <div className="pt-2 flex items-center gap-3 border-t border-slate-700/60">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                  {t.r3Initial}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{t.r3Name}</h4>
                  <p className="text-[11px] text-slate-400">{t.r3Place}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
