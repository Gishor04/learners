"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { lang, t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<"girl" | "award" | "tour">("girl");

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

        {/* Gallery Grid: Featured Video + Real Academy Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Video 1: Featured Live Training & Award Video Player */}
          <div className="md:col-span-2 bg-slate-900 rounded-3xl overflow-hidden border border-red-500/40 shadow-xl group hover-glow-red transition-all flex flex-col">
            
            {/* Quick Toggle for Video */}
            <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-play text-red-500"></i>
                <span>
                  {selectedVideo === "girl"
                    ? "3D Girl Demo Video"
                    : selectedVideo === "award"
                    ? "🏆 BGIA Global Award Ceremony Video"
                    : "Academy Training Tour"}
                </span>
              </span>
              <div className="flex gap-1.5 text-[11px] font-bold">
                <button
                  onClick={() => setSelectedVideo("girl")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    selectedVideo === "girl" ? "bg-red-600 text-white" : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  3D Girl Demo
                </button>
                <button
                  onClick={() => setSelectedVideo("award")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    selectedVideo === "award" ? "bg-amber-500 text-slate-950 font-black shadow-md" : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  🏆 Award Video
                </button>
                <button
                  onClick={() => setSelectedVideo("tour")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    selectedVideo === "tour" ? "bg-red-600 text-white" : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  Academy Tour
                </button>
              </div>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <video
                key={selectedVideo}
                controls
                playsInline
                preload="metadata"
                poster={
                  selectedVideo === "award"
                    ? "/assets/bgia-global-award-ceremony.jpg"
                    : "/assets/simulator-live-training.jpg"
                }
                className="w-full h-full object-contain bg-black"
              >
                <source
                  src={
                    selectedVideo === "girl"
                      ? "/assets/dinesh-3d-girl-driving-simulator.mp4"
                      : selectedVideo === "award"
                      ? "/assets/dinesh-global-award-video.mp4"
                      : "/assets/dinesh-learners-training-video.mp4"
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 pointer-events-none">
                <i className="fa-solid fa-video"></i>
                <span>
                  {selectedVideo === "girl"
                    ? "3D பெண் சிமுலேட்டர் நேரடி பயிற்சி"
                    : selectedVideo === "award"
                    ? "🏆 BGIA 2026 சர்வதேச விருது விழா"
                    : t.galleryVideoBadge}
                </span>
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between bg-slate-900 text-white">
              <h4 className="font-extrabold text-sm sm:text-base text-white">
                {selectedVideo === "girl"
                  ? (lang === "ta" ? "🎮 3D கணினி சிமுலேட்டரில் பெண் மாணவரின் நேரடி பயிற்சி" : lang === "si" ? "3D සිමියුලේටර් සජීවී පුහුණුව" : "3D Virtual Simulator Live Student Demo Session")
                  : selectedVideo === "award"
                  ? (lang === "ta" ? "🏆 Business Global International Award (BGIA 2026) கௌரவிப்பு" : lang === "si" ? "BGIA 2026 ජාත්‍යන්තර සම්මාන උළෙල" : "Business Global International Award (BGIA 2026) Ceremony")
                  : t.galleryVideoCaption}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {selectedVideo === "girl"
                  ? (lang === "ta" ? "ஸ்டீயரிங் மற்றும் கிளட்ச் கட்டுப்பாட்டை அச்சமின்றி பழகும் நேரடி கணினி 3D சிமுலேட்டர் காட்சி." : lang === "si" ? "සුක්කානම් පාලනය පිළිබඳ සජීවී අත්දැකීම." : "Direct view of high-precision steering and brake handling inside the virtual cockpit.")
                  : selectedVideo === "award"
                  ? (lang === "ta" ? "தினேஷ் லேணர்ஸ் மற்றும் ரியல் எஸ்டேட் சிறந்த கல்வி மற்றும் தொழில் சேவைக்கான சர்வதேச கௌரவிப்பு விருது." : lang === "si" ? "විශිෂ්ට සේවය වෙනුවෙන් පිරිනැමුණු සම්මානය." : "International recognition for excellence in driver training and verified property services.")
                  : t.galleryVideoSub}
              </p>
            </div>
          </div>

          {/* Photo: BGIA 2026 International Award Stage (New Upload) */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border-2 border-amber-400/80 shadow-md group hover-glow-red transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="/assets/bgia-global-award-ceremony.jpg"
                alt="Business Global International Award BGIA 2026 Dinesh Learners"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[11px] font-black px-2.5 py-1 rounded-full shadow">
                🏆 BGIA 2026 விருது
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h4 className="font-black text-sm text-slate-900">
                {lang === "ta" ? "சர்வதேச BGIA 2026 கௌரவ விருது" : lang === "si" ? "BGIA 2026 ජාත්‍යන්තර සම්මානය" : "Business Global International Award (BGIA)"}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {lang === "ta" ? "யாழ்ப்பாணத்தின் முன்னணி நிறுவனமாக கௌரவிக்கப்பட்ட சர்வதேச விருது விழா மேடை தருணம்." : lang === "si" ? "විශිෂ්ටතා සම්මාන උළෙලේදී." : "Stage ceremony of Business Global International Award Organization (BGIA 2026)."}
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
