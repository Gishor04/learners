"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function SimulatorSection() {
  const { lang, t, openEnrollModal } = useLanguage();

  const simVideo = {
    src: "/assets/dinesh-3d-girl-driving-simulator.mp4",
    badge: "3D Driving Simulator",
    titleTa: "🎮 3D பெண் சிமுலேட்டர் நேரடி பயிற்சி (3D Driving Simulator Demo)",
    titleEn: "🎮 3D Virtual Driving Simulator Live Student Demo",
    titleSi: "🎮 3D සිමියුලේටර් සජීවී පුහුණුව",
    descTa: "கணினி 3D சிமுலேட்டரில் பெண் மாணவர் பயமின்றி ஸ்டீயரிங் மற்றும் கிளட்ச் கட்டுப்பாட்டை கற்கும் அசல் நேரடி பயிற்சி வீடியோ (சினிமா பாடல் நீக்கப்பட்டு சுத்தமான வடிவில்).",
    descEn: "Live showcase of a student comfortably operating steering, pedals, and gear shifting inside our high-tech 3D simulator cockpit.",
    descSi: "අපගේ 3D සිමියුලේටරය තුළ සිසුවියක රිය පැදවීමේ මුලික කරුණු ප්‍රගුණ කරන ආකාරය."
  };

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

            <div className="pt-4 flex flex-wrap gap-3 items-center">
              <button
                onClick={() => openEnrollModal("3D Driving Simulator")}
                className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold rounded-2xl shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-all flex items-center gap-2 text-sm"
              >
                <i className="fa-solid fa-play"></i> <span>{t.btnSimDemo}</span>
              </button>

              <a
                href="https://www.tiktok.com/@dinesh.niro?_r=1&_t=ZS-9B7EPz39NCr"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-pink-400 hover:text-white font-bold rounded-2xl border border-slate-700 transition-all flex items-center gap-2 text-xs"
              >
                <i className="fa-brands fa-tiktok text-sm"></i>
                <span>TikTok @dinesh.niro</span>
              </a>

              <a
                href="https://youtube.com/@ngcsmartstove6985?si=BDX_E-pg2wXvarU6"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 bg-red-600/90 hover:bg-red-600 text-white font-bold rounded-2xl shadow transition-all flex items-center gap-2 text-xs"
              >
                <i className="fa-brands fa-youtube text-sm"></i>
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>

          {/* Right: ONLY the 3D Simulator Video */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main 3D Simulator Video Box */}
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 bg-slate-950 p-2 sm:p-2.5 shadow-2xl group shadow-cyan-500/10">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center">
                <video
                  controls
                  playsInline
                  autoPlay={false}
                  preload="metadata"
                  poster="/assets/dinesh-3d-girl-simulator-poster.jpg"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={simVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-2.5 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                    <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">
                      {simVideo.badge}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-lg border border-emerald-500/30">
                    {t.simActiveStatus}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-black text-white">
                  {lang === "ta" ? simVideo.titleTa : lang === "si" ? simVideo.titleSi : simVideo.titleEn}
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {lang === "ta" ? simVideo.descTa : lang === "si" ? simVideo.descSi : simVideo.descEn}
                </p>
              </div>
            </div>

            {/* Hardware Rig Thumbnails */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow relative group">
                <img
                  src="/assets/simulator-live-training.jpg"
                  alt="3D Simulator Live Training"
                  className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-2 text-[10px] bg-cyan-500 font-black text-slate-950 px-2 py-0.5 rounded shadow">
                  🎮 Live 3D Rig
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow relative group">
                <img
                  src="/assets/simulator-cockpit.jpg"
                  alt="Logitech Steering Rig"
                  className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-2 text-[10px] bg-black/70 px-2 py-0.5 rounded text-white font-bold">
                  {t.simWheelTag}
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow relative group">
                <img
                  src="/assets/simulator-room.jpg"
                  alt="Simulator Room & Waiting Area"
                  className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform duration-500"
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
