"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrainingFleet() {
  const { lang, t, openEnrollModal } = useLanguage();
  const [filter, setFilter] = useState("all");

  const courses = [
    {
      id: "van",
      category: "car",
      image: "/assets/real-van.jpg",
      badgeClass: t.badgeClassB,
      badgeGear: t.badgeGear,
      title: lang === "ta" ? "வான் / கார் (Dual-Control)" : lang === "si" ? "වෑන් / කාර් (Dual-Control)" : "Van / Dual-Control Car",
      popular: true,
      sub: lang === "ta" ? "Manual & Auto இரட்டை பிரேக் பாதுகாப்பு பயிற்சி" : lang === "si" ? "ද්විත්ව තිරිංග සහිත ආරක්ෂිත පුහුණුව" : "Dual-Control Safety Training",
      desc: lang === "ta" ? "யாழ்ப்பாணத்தின் போக்குவரத்து நிறைந்த வீதிகளில் தன்னம்பிக்கையுடன் வான் அல்லது கார் ஓட்ட முழுமையான நேரடி பயிற்சி." : lang === "si" ? "ප්‍රායෝගික ආරක්ෂිත රිය පැදවීමේ පුහුණුව." : "Comprehensive real road training on Jaffna streets with dual-brake safety.",
      features: [
        lang === "ta" ? "🩺 இலவச மருத்துவ சான்றிதழ் ஒழுங்குபடுத்தல்" : lang === "si" ? "🩺 නොමිලේ වෛද්‍ය සහතික පහසුකම්" : "🩺 Free Medical Examination Arrangement",
        lang === "ta" ? "🏛️ இலவச கச்சேரி பரீட்சை முன்பதிவு" : lang === "si" ? "🏛️ නොමිලේ කච්චේරි විභාග දිනය වෙන්කිරීම" : "🏛️ Free Kachcheri Exam Slot Booking",
        lang === "ta" ? "15 நேரடி பயிற்சி அமர்வுகள் + சிமுலேட்டர்" : lang === "si" ? "ප්‍රායෝගික සැසි 15ක්" : "15 Practical Sessions + Simulator"
      ],
      price: "LKR 25,000",
      courseName: "Van / Dual-Control Car (LKR 25,000)",
    },
    {
      id: "bike",
      category: "bike",
      image: "/assets/real-fleet-bikes.jpg",
      badgeClass: t.badgeClassA,
      badgeGear: t.badgeGearedAuto,
      title: lang === "ta" ? "மோட்டார் சைக்கிள் / ஸ்கூட்டர்" : lang === "si" ? "යතුරුපැදි සහ ස්කූටර්" : "Motorcycle & Scooter (Class A)",
      popular: false,
      sub: lang === "ta" ? "கியர் & ஆட்டோமேட்டிக் பைக் பயிற்சி" : lang === "si" ? "ගියර් සහ ඔටෝ පුහුණුව" : "Geared & Scooter Training",
      desc: lang === "ta" ? "இருசக்கர வாகன சமநிலை, வளைவுகளில் பாதுகாப்பு மற்றும் DMT பரீட்சைக்கான '8' வடிவ கள பயிற்சி." : lang === "si" ? "සමබරතාවය සහ DMT විභාග පුහුණුව." : "Balance mastery, defensive turning, and DMT Figure-8 track training.",
      features: [
        lang === "ta" ? "🩺 இலவச மருத்துவ சான்றிதழ் உதவி" : lang === "si" ? "🩺 නොමිලේ වෛද්‍ය සහතික සහය" : "🩺 Free Medical Support",
        lang === "ta" ? "🏛️ இலவச கச்சேரி பரீட்சை முன்பதிவு" : lang === "si" ? "🏛️ නොමිලේ කච්චේරි වෙන්කිරීම" : "🏛️ Free Kachcheri Booking",
        lang === "ta" ? "DMT '8' வடிவ தரை பயிற்சி" : lang === "si" ? "DMT 8 හැඩයේ ධාවන පුහුණුව" : "DMT Figure-8 Track Training"
      ],
      price: "LKR 12,000",
      courseName: "Motorcycle (Class A - LKR 12,000)",
    },
    {
      id: "tuktuk",
      category: "tuktuk",
      image: "/assets/real-tuktuk.jpg",
      badgeClass: t.badgeClassB1,
      badgeGear: t.badgeCommercial,
      title: lang === "ta" ? "முச்சக்கரவண்டி (Auto / Tuk-Tuk)" : lang === "si" ? "ත්‍රිරෝද රථය (Auto / Tuk-Tuk)" : "Three-Wheeler (Auto / Tuk-Tuk)",
      popular: false,
      sub: lang === "ta" ? "வணிக & தனிப்பட்ட பாவனை உரிமம்" : lang === "si" ? "ව්‍යාපාරික හා පෞද්ගලික බලපත්‍රය" : "Commercial & Private License",
      desc: lang === "ta" ? "யாழ்ப்பாணத்தின் வீதிகளில் குறுகிய திருப்பங்கள், ரிவர்ஸ் மற்றும் வணிக ரீதியான பாதுகாப்பான முச்சக்கரவண்டி ஓட்டுதல்." : lang === "si" ? "ආරක්ෂිත ත්‍රිරෝද රථ ධාවනය." : "Reverse control, tight lane maneuvers, and professional passenger safety.",
      features: [
        lang === "ta" ? "🩺 இலவச மருத்துவம் & கச்சேரி முன்பதிவு" : lang === "si" ? "🩺 නොමිලේ වෛද්‍ය හා කච්චේරි වෙන්කිරීම්" : "🩺 Free Medical & Free Kachcheri Booking",
        lang === "ta" ? "இலகு தவணை முறை கட்டண வசதி" : lang === "si" ? "පහසු වාරික ක්‍රමය" : "Easy Installment Payment",
        lang === "ta" ? "DMT ட்ரையல் பரீட்சை கள பயிற்சி" : lang === "si" ? "DMT ප්‍රායෝගික විභාග පුහුණුව" : "DMT Practical Trial Ground Training"
      ],
      price: "LKR 15,000",
      courseName: "Three-Wheeler Auto (LKR 15,000)",
    },
    {
      id: "heavy",
      category: "heavy",
      image: "/assets/ashok-leyland-bus.jpg",
      badgeClass: "Class D / CE",
      badgeGear: lang === "ta" ? "நிஜ Ashok Leyland பேருந்து" : lang === "si" ? "Ashok Leyland බස් රථය" : "Lanka Ashok Leyland Bus",
      title: lang === "ta" ? "கனரக வாகனம் (TaTa / Ashok Leyland பஸ்)" : lang === "si" ? "බර වාහන (TaTa / Ashok Leyland බස්)" : "Heavy Vehicle (TaTa & Ashok Leyland Bus)",
      popular: false,
      sub: lang === "ta" ? "நிஜ இலங்கை Ashok Leyland மற்றும் TaTa பேருந்து பயிற்சி" : lang === "si" ? "ශ්‍රී ලංකා Ashok Leyland සහ TaTa බස් රථ පුහුණුව" : "Sri Lanka Heavy Commercial Bus & Lorry Training",
      desc: lang === "ta" ? "இலங்கையின் அசல் Ashok Leyland / TaTa கனரக பேருந்து மற்றும் லொறி ஓட்டுநர் பயிற்சி. ஏர்-பிரேக் மற்றும் கனரக வாகன கையாளுதல்." : lang === "si" ? "Ashok Leyland බස් රථ සමඟ බර වාහන පුහුණුව." : "Heavy vehicle driving on Lanka Ashok Leyland buses with air-brake handling and commercial highway training.",
      features: [
        lang === "ta" ? "📸 நிஜ Ashok Leyland பேருந்து பயிற்சி வாகனம்" : lang === "si" ? "📸 සැබෑ Ashok Leyland බස් රථය" : "📸 Real Lanka Ashok Leyland Bus Fleet",
        lang === "ta" ? "🩺 இலவச மருத்துவம் & கச்சேரி முன்பதிவு" : lang === "si" ? "🩺 නොමිලේ වෛද්‍ය හා කච්චේරි වෙන්කිරීම" : "🩺 Free Medical & Kachcheri Booking",
        lang === "ta" ? "ஏர்-பிரேக் மற்றும் கனரக வாகன வீதி பயிற்சி" : lang === "si" ? "එයාර් බ්‍රේක් සහ බර වාහන හැසිරවීම" : "Air-brake & Heavy Highway Training"
      ],
      price: "LKR 38,000",
      courseName: "TaTa & Ashok Leyland Heavy Bus (LKR 38,000)",
    },
    {
      id: "simulator",
      category: "simulator",
      image: "/assets/simulator-live-training.jpg",
      badgeClass: t.badgeRealHardware,
      badgeGear: t.badgeLogitech,
      title: t.c2Title,
      popular: false,
      isDark: true,
      sub: t.c2Sub,
      desc: t.c2Desc,
      features: [
        lang === "ta" ? "வீடியோவில் உள்ள அதே 3D சிமுலேட்டர் காக்பிட்" : lang === "si" ? "3D සිමියුලේටර් පුහුණුව" : "Direct 3D Simulator Cockpit Training",
        lang === "ta" ? "Logitech G29 விசை பின்னூட்ட ஸ்டீயரிங்" : lang === "si" ? "Logitech G29 සුක්කානම" : "Force-Feedback Logitech G29 Rig",
        lang === "ta" ? "முதல் வகுப்பு முற்றிலும் இலவச டெமோ சோதனை" : lang === "si" ? "පළමු සැසිය නොමිලේ" : "1st Session 100% Free Trial"
      ],
      price: "Free Trial",
      courseName: "3D Driving Simulator Trial",
    },
    {
      id: "combo-all",
      category: "car",
      isCombo: true,
      badge: "⭐ ALL-IN-ONE MEGA PACK",
      title: lang === "ta" ? "ஓட்டோ + பைக் + வான் (முழுமையான தொகுப்பு)" : lang === "si" ? "ඔටෝ + බයික් + වෑන් (සම්පූර්ණ පැකේජය)" : "Auto + Bike + Van (All-in-One Mega Pack)",
      sub: lang === "ta" ? "அனைத்து வகுப்புகளும் ஒரே கட்டணத்தில்!" : lang === "si" ? "සියලුම වාහන එකම පැකේජයකින්" : "Complete Multi-Class License Package",
      desc: lang === "ta" ? "மூன்று வாகன உரிமங்களையும் (Class A + B + B1) ஒன்றாகப் பெற்று பணத்தையும் நேரத்தையும் மிச்சப்படுத்துங்கள்." : lang === "si" ? "වාහන 3ම එකවර ඉගෙන ගන්න." : "Get all 3 vehicle licenses (Bike, Auto, Van) in one comprehensive curriculum at the biggest discount.",
      features: [
        lang === "ta" ? "Auto + Bike + Van 3 வாகன பயிற்சி" : lang === "si" ? "ඔටෝ, බයික්, වෑන් වාහන 3ම" : "Full training on Auto, Bike & Van",
        lang === "ta" ? "🩺 இலவச மருத்துவ சான்றிதழ் உதவி" : lang === "si" ? "🩺 නොමිලේ වෛද්‍ය සහතිකය" : "🩺 100% Free Medical Certificate Assistance",
        lang === "ta" ? "🏛️ இலவச கச்சேரி முன்பதிவு" : lang === "si" ? "🏛️ නොමිලේ කච්චේරි වෙන්කිරීම" : "🏛️ Free Kachcheri Exam Booking",
        lang === "ta" ? "தவணை முறை கட்டண வசதி (2 தவணைகள்)" : lang === "si" ? "පහසු වාරික 2කින් ගෙවන්න" : "Easy 2-Part Installment Available"
      ],
      price: "LKR 35,000",
      courseName: "Auto + Bike + Van All-in-One (LKR 35,000)",
    },
    {
      id: "combo-bike-van",
      category: "car",
      isCombo: true,
      badge: "🔥 POPULAR COMBO",
      title: lang === "ta" ? "பைக் + வான் Combo (Bike + Van)" : lang === "si" ? "බයික් + වෑන් Combo" : "Bike + Van Combo",
      sub: lang === "ta" ? "மிகவும் பிரபலமான இரட்டை உரிமத் தொகுப்பு" : lang === "si" ? "වඩාත් ජනප්‍රිය පැකේජය" : "Most Popular Dual License Package",
      desc: lang === "ta" ? "மோட்டார் சைக்கிள் மற்றும் கார்/வான் இரண்டிற்கும் முழுமையான செய்முறை பயிற்சி." : lang === "si" ? "බයික් සහ වෑන් සම්පූර්ණ පුහුණුව." : "Complete dual vehicle practical sessions with theory and trial support.",
      features: [
        lang === "ta" ? "வான் (Dual Control) + மோட்டார் பைக்" : lang === "si" ? "වෑන් සහ බයික්" : "Dual Control Van + Motorbike",
        lang === "ta" ? "🩺 இலவச மருத்துவம் + 🏛️ கச்சேரி முன்பதிவு" : lang === "si" ? "🩺 නොමිලේ වෛද්‍ය හා කච්චේරි වෙන්කිරීම" : "🩺 Free Medical + Free Kachcheri Booking",
        lang === "ta" ? "தவணை முறை வசதி" : lang === "si" ? "වාරික ක්‍රමය" : "Flexible Installments"
      ],
      price: "LKR 30,000",
      courseName: "Bike + Van Combo (LKR 30,000)",
    },
    {
      id: "combo-auto-van",
      category: "car",
      isCombo: true,
      badge: "⚡ BEST VALUE",
      title: lang === "ta" ? "ஓட்டோ + வான் Combo (Auto + Van)" : lang === "si" ? "ඔටෝ + වෑන් Combo" : "Auto + Van Combo",
      sub: lang === "ta" ? "முச்சக்கரவண்டி மற்றும் கார்/வான் பயிற்சி" : lang === "si" ? "ත්‍රිරෝද රථ සහ වෑන් පුහුණුව" : "Three-Wheeler & Van Combo",
      desc: lang === "ta" ? "வணிக ஓட்டோ மற்றும் குடும்ப கார்/வான் இரண்டிற்கும் சிறந்த கட்டணத்தில் உரிமம்." : lang === "si" ? "ඔටෝ සහ වෑන් වාහන දෙකම." : "Master both Three-Wheeler and Dual Control Van with expert mentors.",
      features: [
        lang === "ta" ? "முச்சக்கரவண்டி + வான்/கார் பயிற்சி" : lang === "si" ? "ත්‍රිරෝද රථ සහ වෑන්" : "Three Wheeler + Van Training",
        lang === "ta" ? "🩺 இலவச மருத்துவம் + 🏛️ கச்சேரி முன்பதிவு" : lang === "si" ? "🩺 නොමිලේ වෛද්‍ය හා කච්චේරි වෙන්කිරීම" : "🩺 Free Medical + Free Kachcheri Booking",
        lang === "ta" ? "தவணை முறை வசதி" : lang === "si" ? "වාරික ක්‍රමය" : "Flexible Installments"
      ],
      price: "LKR 30,000",
      courseName: "Auto + Van Combo (LKR 30,000)",
    },
    {
      id: "combo-auto-bike",
      category: "bike",
      isCombo: true,
      badge: "💡 ECONOMY COMBO",
      title: lang === "ta" ? "ஓட்டோ + பைக் Combo (Auto + Bike)" : lang === "si" ? "ඔටෝ + බයික් Combo" : "Auto + Bike Combo",
      sub: lang === "ta" ? "சிக்கனமான இருசக்கர & முச்சக்கர பயிற்சி" : lang === "si" ? "ලාභදායී පැකේජය" : "Economy 2-Wheeler & 3-Wheeler Pack",
      desc: lang === "ta" ? "குறைந்த கட்டணத்தில் பைக் மற்றும் ஓட்டோ ஆகிய இரண்டு வாகனங்களுக்கும் உரிமம் பெறுங்கள்." : lang === "si" ? "බයික් සහ ඔටෝ බලපත්‍රය." : "Budget-friendly combination for Motorcycle and Three-Wheeler licenses.",
      features: [
        lang === "ta" ? "பைக் + முச்சக்கரவண்டி கள பயிற்சி" : lang === "si" ? "බයික් සහ ත්‍රිරෝද රථ පුහුණුව" : "Bike + Three-Wheeler Track Practice",
        lang === "ta" ? "🩺 இலவச மருத்துவம் + 🏛️ கச்சேரி முன்பதிவு" : lang === "si" ? "🩺 නොමිලේ වෛද්‍ය හා කච්චේරි වෙන්කිරීම" : "🩺 Free Medical + Free Kachcheri Booking",
        lang === "ta" ? "முன்பணம் LKR 12,000 செலுத்தி ஆரம்பிக்கலாம்" : lang === "si" ? "මුලික ගෙවීමෙන් පසු ආරම්භ කරන්න" : "Start with easy deposit"
      ],
      price: "LKR 23,000",
      courseName: "Auto + Bike Combo (LKR 23,000)",
    }
  ];

  const filteredCourses = filter === "all" ? courses : courses.filter((c) => c.category === filter);

  return (
    <section id="courses" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-extrabold tracking-widest text-red-600 uppercase bg-red-100/80 px-3.5 py-1.5 rounded-full border border-red-200">
            {t.coursePill}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {t.courseSectionTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t.courseSectionSubtitle}
          </p>

          {/* Quick Announcement Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2.5 px-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs font-extrabold text-emerald-800 shadow-sm">
            <span>🩺 {lang === "ta" ? "இலவச மருத்துவ சான்றிதழ் உதவி" : lang === "si" ? "නොමිලේ වෛද්‍ය සහතිකය" : "Free Medical Assistance"}</span>
            <span className="text-emerald-400">•</span>
            <span>🏛️ {lang === "ta" ? "இலவச கச்சேரி பரீட்சை முன்பதிவு" : lang === "si" ? "නොමිලේ කච්චේරි විභාග වෙන්කිරීම" : "Free Kachcheri Booking"}</span>
            <span className="text-emerald-400">•</span>
            <span>🗓️ {lang === "ta" ? "ஞாயிறு விடுமுறை (Sunday Off)" : lang === "si" ? "ඉරිදා නිවාඩු (Sunday Off)" : "Sunday Closed / Off"}</span>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: t.tabAll },
              { id: "car", label: t.tabCar },
              { id: "bike", label: t.tabBike },
              { id: "tuktuk", label: t.tabTuk },
              { id: "heavy", label: lang === "ta" ? "Ashok Leyland / TaTa பஸ்" : lang === "si" ? "බස් රථ (Heavy)" : "Bus & Heavy" },
              { id: "simulator", label: t.tabSim },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === tab.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-500/25"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((c) => {
            if (c.isCombo) {
              return (
                <div
                  key={c.id}
                  className="course-card flex flex-col bg-gradient-to-br from-red-600 via-rose-600 to-rose-700 text-white rounded-3xl overflow-hidden shadow-xl hover-glow-red transition-all"
                >
                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                        <i className="fa-solid fa-fire text-amber-300"></i>
                        <span>{c.badge || t.c6Badge}</span>
                      </div>
                      <h3 className="text-2xl font-black mt-4 font-heading">{c.title}</h3>
                      <p className="text-xs text-red-100 mt-1 font-semibold">{c.sub}</p>
                      <p className="text-sm text-white/90 mt-3 leading-relaxed">{c.desc}</p>
                      <div className="mt-6 space-y-2.5 text-xs font-semibold">
                        {c.features.map((f, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <i className="fa-solid fa-circle-check text-amber-300"></i>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-red-200">{t.feeStartFrom}</span>
                        <p className="text-2xl font-black text-white">{c.price}</p>
                      </div>
                      <button
                        onClick={() => openEnrollModal(c.courseName)}
                        className="px-5 py-2.5 bg-white text-red-600 hover:bg-red-50 text-xs font-black rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
                      >
                        {t.btnRegisterCourse}
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            if (c.isDark) {
              return (
                <div
                  key={c.id}
                  className="course-card flex flex-col bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-xl hover-glow-blue transition-all"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-950 group">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <span className="absolute top-4 left-4 bg-cyan-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                      {c.badgeClass}
                    </span>
                    <span className="absolute top-4 right-4 bg-indigo-900/80 backdrop-blur text-indigo-200 text-xs font-bold px-2.5 py-1 rounded-md border border-indigo-700">
                      {c.badgeGear}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white font-heading">{c.title}</h3>
                        <span className="text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-2 py-0.5 rounded">
                          {t.badgeHighTech}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{c.sub}</p>
                      <p className="text-sm text-slate-300 mt-3 leading-relaxed">{c.desc}</p>
                      <ul className="mt-4 space-y-2 text-xs font-medium text-slate-300">
                        {c.features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <i className="fa-solid fa-check text-cyan-400"></i>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400">{t.badgeDemo}</span>
                        <p className="text-lg font-black text-cyan-400">{t.badgeFreeTrial}</p>
                      </div>
                      <button
                        onClick={() => openEnrollModal(c.courseName)}
                        className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold rounded-xl shadow-md transition-colors"
                      >
                        {t.btnRegisterCourse}
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={c.id}
                className="course-card flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover-glow-red transition-all"
              >
                <div className="relative h-56 overflow-hidden bg-slate-900 group">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {c.badgeClass}
                  </span>
                  {c.badgeGear && (
                    <span className="absolute top-4 right-4 bg-white/95 backdrop-blur text-slate-900 text-xs font-extrabold px-2.5 py-1 rounded-md shadow border border-slate-200">
                      {c.badgeGear}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900 font-heading">{c.title}</h3>
                      {c.popular && (
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                          {t.badgePopular}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{c.sub}</p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">{c.desc}</p>
                    <ul className="mt-4 space-y-2 text-xs font-medium text-slate-700">
                      {c.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <i className="fa-solid fa-check text-emerald-500"></i>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">{t.feeStartFrom}</span>
                      <p className="text-xl font-black text-slate-900">{c.price}</p>
                    </div>
                    <button
                      onClick={() => openEnrollModal(c.courseName)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
                    >
                      {t.btnRegisterCourse}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
