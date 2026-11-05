"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ZeroExperience() {
  const { t, openEnrollModal } = useLanguage();

  return (
    <section id="zero-exp" className="py-16 sm:py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white relative overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Catchy USP Content */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-white/30">
              <i className="fa-solid fa-sparkles text-yellow-200"></i>
              <span>{t.zeroExpBadge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight">
              {t.zeroExpTitle}
            </h2>

            <p className="text-white/95 text-sm sm:text-base leading-relaxed max-w-2xl">
              {t.zeroExpDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="bg-black/20 backdrop-blur p-3.5 rounded-2xl border border-white/20 text-left">
                <span className="text-lg">🔰</span>
                <h4 className="font-bold text-sm text-white mt-1">{t.zeroExpP1Title}</h4>
                <p className="text-[11px] text-white/80 mt-0.5">{t.zeroExpP1Desc}</p>
              </div>
              <div className="bg-black/20 backdrop-blur p-3.5 rounded-2xl border border-white/20 text-left">
                <span className="text-lg">🕹️</span>
                <h4 className="font-bold text-sm text-white mt-1">{t.zeroExpP2Title}</h4>
                <p className="text-[11px] text-white/80 mt-0.5">{t.zeroExpP2Desc}</p>
              </div>
              <div className="bg-black/20 backdrop-blur p-3.5 rounded-2xl border border-white/20 text-left">
                <span className="text-lg">🚦</span>
                <h4 className="font-bold text-sm text-white mt-1">{t.zeroExpP3Title}</h4>
                <p className="text-[11px] text-white/80 mt-0.5">{t.zeroExpP3Desc}</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openEnrollModal("3D Driving Simulator")}
                className="open-enroll-modal px-6 py-3 bg-white text-red-600 hover:bg-slate-100 font-black rounded-xl text-sm shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-calendar-check"></i>
                <span>{t.btnZeroExpTrial}</span>
              </button>
            </div>
          </div>

          {/* Right: Real Classroom & Simulator Photos collage */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white/30 group">
              <img
                src="/assets/classroom-theory.jpg"
                alt="Dinesh Learners Real Classroom"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-2 bg-black/70 text-white text-[10px] font-bold text-center">
                {t.labTheoryLabel}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white/30 group">
              <img
                src="/assets/simulator-room.jpg"
                alt="Real 3D Simulator Lab"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-2 bg-black/70 text-white text-[10px] font-bold text-center">
                {t.labSimLabel}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
