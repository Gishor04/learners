"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function SimulatorSection() {
  const { t, openEnrollModal } = useLanguage();

  return (
    <section id="simulator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Simulator Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-cyan-400">
              <i className="fa-solid fa-microchip"></i>
              <span>{t.simCockpitBadge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight">
              {t.simTitle}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.simDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-800/80 backdrop-blur p-4 rounded-2xl border border-slate-700/80 space-y-1.5">
                <div className="w-9 h-9 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-shield-cat"></i>
                </div>
                <h4 className="font-bold text-sm text-white">{t.simB1Title}</h4>
                <p className="text-xs text-slate-400">{t.simB1Desc}</p>
              </div>

              <div className="bg-slate-800/80 backdrop-blur p-4 rounded-2xl border border-slate-700/80 space-y-1.5">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-cloud-showers-heavy"></i>
                </div>
                <h4 className="font-bold text-sm text-white">{t.simB2Title}</h4>
                <p className="text-xs text-slate-400">{t.simB2Desc}</p>
              </div>

              <div className="bg-slate-800/80 backdrop-blur p-4 rounded-2xl border border-slate-700/80 space-y-1.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h4 className="font-bold text-sm text-white">{t.simB3Title}</h4>
                <p className="text-xs text-slate-400">{t.simB3Desc}</p>
              </div>

              <div className="bg-slate-800/80 backdrop-blur p-4 rounded-2xl border border-slate-700/80 space-y-1.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <h4 className="font-bold text-sm text-white">{t.simB4Title}</h4>
                <p className="text-xs text-slate-400">{t.simB4Desc}</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openEnrollModal("3D Driving Simulator")}
                className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold rounded-2xl shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-all flex items-center gap-2 text-sm"
              >
                <i className="fa-solid fa-play"></i> <span>{t.btnSimDemo}</span>
              </button>
            </div>
          </div>

          {/* Right: Simulator Video & Photo Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 bg-slate-950 p-2 sm:p-2.5 shadow-2xl group shadow-cyan-500/10">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/assets/simulator-live-training.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/dinesh-learners-training-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-2.5 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center text-sm font-bold shrink-0">
                    <i className="fa-solid fa-play"></i>
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">{t.simVideoLiveBadge}</p>
                    <p className="text-xs sm:text-sm font-black text-white">{t.simVideoLiveTitle}</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-lg border border-emerald-500/30 items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  {t.simActiveStatus}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow relative group">
                <img
                  src="/assets/dinesh-owner-vr.jpg"
                  alt="Dinesh in 3D VR Simulator"
                  className="w-full h-24 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-2 text-[10px] bg-red-600/90 px-2 py-0.5 rounded text-white font-bold">
                  VR Rig
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow relative group">
                <img
                  src="/assets/simulator-cockpit.jpg"
                  alt="Logitech Steering Rig"
                  className="w-full h-24 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-2 text-[10px] bg-black/70 px-2 py-0.5 rounded text-white font-bold">
                  {t.simWheelTag}
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow relative group">
                <img
                  src="/assets/simulator-room.jpg"
                  alt="Simulator Room & Waiting Area"
                  className="w-full h-24 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-2 text-[10px] bg-black/70 px-2 py-0.5 rounded text-white font-bold">
                  {t.g2Badge}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
