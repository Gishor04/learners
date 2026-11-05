"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { lang, t } = useLanguage();
  const [selectedPracticeVid, setSelectedPracticeVid] = useState<"exam" | "fleet">("exam");

  const practiceVideos = {
    exam: {
      src: "/assets/dinesh-practical-exam-pass-students.mp4",
      poster: "/assets/poster-practical-exam-pass.jpg",
      badgeTa: "🎉 செய்முறைப் பரீட்சை வெற்றி • Trial Pass Batch",
      badgeEn: "🎉 Practical Trial Exam Passing Batch",
      badgeSi: "🎉 ප්‍රායෝගික පරීක්ෂණ සමත් සිසුන්",
      titleTa: "செய்முறைப் பரீட்சையில் தோற்றிய மாணவர்கள் வெற்றித் தருணம்",
      titleEn: "Dinesh Learners Candidates Passing Practical Driving Trials",
      titleSi: "ප්‍රායෝගික රියදුරු පරීක්ෂණය සාර්ථකව සමත් වූ සිසුන්",
      descTa: "தினேஷ் லேணர்ஸ் செய்முறைப் பரீட்சையில் தோற்றி அனுமதிப்பத்திரம் பெற்ற மாணவர்கள் மற்றும் பயிற்றுநர்களின் வாழ்த்துத் தருணம் (சினிமா பாடல் நீக்கப்பட்டு சுத்தமான வடிவில்).",
      descEn: "Celebration of our students successfully passing the DMT practical driving examination with confidence.",
      descSi: "DMT ප්‍රායෝගික රියදුරු පරීක්ෂණය සාර්ථකව සමත් වූ සිසුන්ගේ සතුටුදායක අවස්ථාව."
    },
    fleet: {
      src: "/assets/dinesh-learners-training-video.mp4",
      poster: "/assets/real-van.jpg",
      badgeTa: "🚗 வாகனப் பயிற்சி • Live Road Practice",
      badgeEn: "🚗 Fleet Practical Road Training",
      badgeSi: "🚗 ප්‍රායෝගික මාර්ග පුහුණුව",
      titleTa: "நேரடி வீதிப் பயிற்சி மற்றும் அகாதமி வகுப்புகள்",
      titleEn: "Practical Road Driving and Dual-Control Fleet Coaching",
      titleSi: "ද්විත්ව පාලන වාහන මගින් සැබෑ මාර්ග පුහුණුව",
      descTa: "இரட்டை பிரேக் கொண்ட வாகனங்கள் மூலம் அனுபவமிக்க பயிற்றுநர்களின் வழிகாட்டலில் பாதுகாப்பான பயிற்சி.",
      descEn: "Comprehensive practical road training ensuring student safety, clutch mastery, and highway confidence.",
      descSi: "පළපුරුදු උපදේශකවරුන් යටතේ ආරක්ෂිත මාර්ග පුහුණුව."
    }
  };

  const currentVid = practiceVideos[selectedPracticeVid];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            {t.galleryPill}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            {t.galleryTitle}
          </h2>
          <p className="text-slate-600 text-sm">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Gallery Grid: Featured Practical Video + Real Academy Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Video: Practical Academy Road Training Video Player */}
          <div className="md:col-span-2 bg-slate-900 rounded-3xl overflow-hidden border border-red-500/40 shadow-xl group hover-glow-red transition-all flex flex-col">
            
            {/* Quick Toggle for Practical Videos */}
            <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-play text-red-500"></i>
                <span>{lang === "ta" ? currentVid.badgeTa : lang === "si" ? currentVid.badgeSi : currentVid.badgeEn}</span>
              </span>

              <div className="flex gap-1.5 text-[11px] font-bold">
                <button
                  onClick={() => setSelectedPracticeVid("exam")}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    selectedPracticeVid === "exam" ? "bg-red-600 text-white shadow" : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  🎉 {lang === "ta" ? "பரீட்சை வெற்றி" : "Exam Pass Batch"}
                </button>
                <button
                  onClick={() => setSelectedPracticeVid("fleet")}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    selectedPracticeVid === "fleet" ? "bg-red-600 text-white shadow" : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  🚗 {lang === "ta" ? "வீதிப் பயிற்சி" : "Road Practice"}
                </button>
              </div>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <video
                key={currentVid.src}
                controls
                playsInline
                preload="metadata"
                poster={currentVid.poster}
                className="w-full h-full object-contain bg-black"
              >
                <source src={currentVid.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 pointer-events-none">
                <i className="fa-solid fa-video"></i>
                <span>{lang === "ta" ? currentVid.badgeTa : lang === "si" ? currentVid.badgeSi : currentVid.badgeEn}</span>
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between bg-slate-900 text-white">
              <h4 className="font-extrabold text-sm sm:text-base text-white">
                {lang === "ta" ? currentVid.titleTa : lang === "si" ? currentVid.titleSi : currentVid.titleEn}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {lang === "ta" ? currentVid.descTa : lang === "si" ? currentVid.descSi : currentVid.descEn}
              </p>
            </div>
          </div>

          {/* Photo: Theory Classroom */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm group hover-glow-red transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/classroom-theory.jpg"
                alt="Theory Classroom and DMT Exam Prep"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                {lang === "ta" ? "தியரி வகுப்பறை" : lang === "si" ? "න්‍යායාත්මක පන්තිය" : "Theory Classroom"}
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h4 className="font-bold text-sm text-slate-900">
                {lang === "ta" ? "DMT தியரி வழிகாட்டல் கூடம்" : lang === "si" ? "DMT න්‍යායාත්මක පුහුණුව" : "DMT Theory Preparation"}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {lang === "ta" ? "வீதி சமிக்கைகள் மற்றும் போக்குவரத்து விதிகள் கற்பிக்கப்படும் நவீன வகுப்பறை." : lang === "si" ? "මාර්ග නීති සහ සංඥා පිළිබඳ පුහුණු පන්තිය." : "Modern theory classroom for highway rules and sign learning."}
              </p>
            </div>
          </div>

          {/* Photo: Lanka Ashok Leyland Heavy Bus */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm group hover-glow-red transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/ashok-leyland-bus.jpg"
                alt="Lanka Ashok Leyland Heavy Training Bus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                {lang === "ta" ? "அசல் Ashok Leyland பஸ்" : lang === "si" ? "Ashok Leyland බස් රථය" : "Lanka Ashok Leyland"}
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h4 className="font-bold text-sm text-slate-900">
                {lang === "ta" ? "கனரக பேருந்து பயிற்சி (Ashok Leyland / TaTa)" : lang === "si" ? "බර වාහන බස් රථ පුහුණුව" : "Heavy Bus Training (Ashok Leyland)"}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {lang === "ta" ? "இலங்கை தரமுறை பேருந்து ஓட்டுநர் நேரடி பயிற்சி வாகனம்." : lang === "si" ? "සැබෑ බස් රථ පුහුණු අත්දැකීම." : "Real commercial bus training vehicle for heavy license candidates."}
              </p>
            </div>
          </div>

          {/* Photo 1: Live Simulator Coaching */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm group hover-glow-red transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/simulator-live-training.jpg"
                alt="Live 3D Simulator Coaching at Dinesh Learners"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                {t.g1Badge}
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h4 className="font-bold text-sm text-slate-900">{t.g1Caption}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.g1Sub}</p>
            </div>
          </div>

          {/* Photo 2: Branch Entrance */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm group hover-glow-red transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/branch-entrance.jpg"
                alt="Dinesh Learners YMCA Jaffna Branch Entrance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                {t.g2Badge}
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h4 className="font-bold text-sm text-slate-900">{t.g2Caption}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.g2Sub}</p>
            </div>
          </div>

          {/* Photo 3: Dual-Control Branded Training Van */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm group hover-glow-red transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/real-van.jpg"
                alt="Dinesh Learners Branded Dual-Control Vehicle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                {t.g3Badge}
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h4 className="font-bold text-sm text-slate-900">{t.g3Caption}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.g3Sub}</p>
            </div>
          </div>

          {/* Photo 4: Motorbike Fleet */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm group hover-glow-red transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/real-fleet-bikes.jpg"
                alt="Dinesh Learners Training Bikes and Scooter Fleet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                {t.g4Badge}
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h4 className="font-bold text-sm text-slate-900">{t.g4Caption}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.g4Sub}</p>
            </div>
          </div>

          {/* Photo 5: Real Tuk-Tuk */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm group hover-glow-red transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/real-tuktuk.jpg"
                alt="Dinesh Learners Three-Wheeler Tuk Tuk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-teal-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                {t.g5Badge}
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h4 className="font-bold text-sm text-slate-900">{t.g5Caption}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.g5Sub}</p>
            </div>
          </div>

          {/* Photo 6: Logitech Simulator Rig */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm group hover-glow-red transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/simulator-cockpit.jpg"
                alt="Logitech G29 Virtual Cockpit Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                {t.g6Badge}
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h4 className="font-bold text-sm text-slate-900">{t.g6Caption}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.g6Sub}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
