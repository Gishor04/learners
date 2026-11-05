"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function SimulatorSection() {
  const { lang, t, openEnrollModal } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<"girl" | "clip2" | "clip3" | "clip4" | "tour">("girl");

  const videoList = [
    {
      id: "girl" as const,
      tabLabel: "🎮 3D Girl Demo",
      titleTa: "🎮 3D பெண் சிமுலேட்டர் நேரடி பயிற்சி (3D Girl Simulator Demo)",
      titleEn: "🎮 3D Girl Virtual Simulator Live Demo",
      titleSi: "🎮 3D සිමියුලේටර් සජීවී පුහුණුව",
      badge: "Clean Video • 3D Girl Simulator",
      src: "/assets/dinesh-3d-girl-driving-simulator.mp4",
      descTa: "கணினி 3D சிமுலேட்டரில் பெண் மாணவர் பயமின்றி ஸ்டீயரிங் மற்றும் கியர் சமநிலையை கற்கும் அசல் பயிற்சி வீடியோ (சினிமா பாடல் நீக்கப்பட்டு சுத்தமான வடிவில்).",
      descEn: "Live showcase of a student comfortably operating steering and gear shifting inside our 3D simulator rig.",
      descSi: "අපගේ 3D සිමියුලේටරය තුළ සිසුවියක රිය පැදවීමේ මුලික කරුණු ප්‍රගුණ කරන ආකාරය."
    },
    {
      id: "clip2" as const,
      tabLabel: "Clip 2",
      titleTa: "🎬 சிமுலேட்டர் செய்முறை காட்சி (Demo Clip 2)",
      titleEn: "🎬 Simulator Hands-On Session (Clip 2)",
      titleSi: "🎬 සිමියුලේටර් ප්‍රායෝගික සැසිය (කොටස 2)",
      badge: "Live Training Clip",
      src: "/assets/dinesh-3d-simulator-clip2.mp4",
      descTa: "சிமுலேட்டர் காக்பிட் கட்டுப்பாடுகள் மற்றும் வீதி சவால்களை எதிர்கொள்ளும் பயிற்சி காட்சி.",
      descEn: "Close-up perspective of cockpit controls, steering resistance, and road hazard reactions.",
      descSi: "සුක්කානම සහ තිරිංග හැසිරවීමේ සමීප දසුන්."
    },
    {
      id: "clip3" as const,
      tabLabel: "Clip 3",
      titleTa: "🚗 நேரடி வீதிப் பயிற்சி காட்சி (Training Clip 3)",
      titleEn: "🚗 Live Practical Driving Session (Clip 3)",
      titleSi: "🚗 ප්‍රායෝගික රියදුරු පුහුණු දර්ශනය (කොටස 3)",
      badge: "Practical Training",
      src: "/assets/dinesh-training-video-clip3.mp4",
      descTa: "மாணவர்களின் தன்னம்பிக்கை மிக்க நேரடி வீதிப் பயிற்சி மற்றும் கட்டுப்பாட்டு முறைமைகள்.",
      descEn: "Student live training showcasing clutch balance, smooth turning and mirror checks.",
      descSi: "ප්‍රායෝගික පුහුණු සැසි හා සුක්කානම් හැසිරවීම."
    },
    {
      id: "clip4" as const,
      tabLabel: "Clip 4",
      titleTa: "⚡ சிமுலேட்டர் & பிராக்டிகல் பயிற்சி (Training Clip 4)",
      titleEn: "⚡ Simulator & Road Practice (Clip 4)",
      titleSi: "⚡ සිමියුලේටර් සහ මාර්ග පුහුණුව (කොටස 4)",
      badge: "Academy Live Session",
      src: "/assets/dinesh-training-video-clip4.mp4",
      descTa: "நவீன 3D சிமுலேட்டரில் ஆரம்பித்து நிஜ வீதிக்குச் செல்லும் முழுமையான பயிற்சி தொகுப்பு.",
      descEn: "Comprehensive demo highlighting transition from 3D cockpit to live vehicle practice.",
      descSi: "3D සිමියුලේටරයේ සිට සැබෑ මාර්ගය දක්වා සම්පූර්ණ පුහුණුව."
    },
    {
      id: "tour" as const,
      tabLabel: "Full Tour",
      titleTa: "🏛️ அகாதமி முழுமையான பயிற்சி விபரம் (Full Academy Session)",
      titleEn: "🏛️ Dinesh Learners Full Practical Academy Session",
      titleSi: "🏛️ ආයතනික පුහුණු සැසිය",
      badge: "Academy Overview",
      src: "/assets/dinesh-learners-training-video.mp4",
      descTa: "தினேஷ் லேணர்ஸ் யாழ்ப்பாணத்தின் முழுமையான தியரி, சிமுலேட்டர் மற்றும் இரட்டை பிரேக் வாகன பயிற்சி தொகுப்பு.",
      descEn: "Full practical overview featuring dual-control fleet training and theory classroom.",
      descSi: "ප්‍රායෝගික පුහුණු සැසි හා පන්ති කාමර පුහුණුව."
    }
  ];

  const currentVid = videoList.find((v) => v.id === activeVideo) || videoList[0];

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

          {/* Right: Simulator Video & Photo Showcase */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Video Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-800/90 rounded-2xl border border-slate-700">
              {videoList.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVideo(v.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                    activeVideo === v.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/60"
                  }`}
                >
                  <i className="fa-solid fa-play text-[10px]"></i>
                  <span>{v.tabLabel}</span>
                </button>
              ))}
            </div>

            {/* Main Video Box */}
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 bg-slate-950 p-2 sm:p-2.5 shadow-2xl group shadow-cyan-500/10">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center">
                <video
                  key={currentVid.src}
                  controls
                  playsInline
                  autoPlay={false}
                  preload="metadata"
                  poster="/assets/simulator-live-training.jpg"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={currentVid.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-2.5 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                    <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">
                      {currentVid.badge}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-lg border border-emerald-500/30">
                    {t.simActiveStatus}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-black text-white">
                  {lang === "ta" ? currentVid.titleTa : lang === "si" ? currentVid.titleSi : currentVid.titleEn}
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {lang === "ta" ? currentVid.descTa : lang === "si" ? currentVid.descSi : currentVid.descEn}
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
                  🎮 Live Simulator
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
