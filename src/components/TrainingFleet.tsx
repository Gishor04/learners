"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrainingFleet() {
  const { t, openEnrollModal } = useLanguage();
  const [filter, setFilter] = useState("all");

  const courses = [
    {
      id: "car",
      category: "car",
      image: "/assets/real-van.jpg",
      badgeClass: t.badgeClassB,
      badgeGear: t.badgeGear,
      title: t.c1Title,
      popular: true,
      sub: t.c1Sub,
      desc: t.c1Desc,
      features: [t.c1f1, t.c1f2, t.c1f3],
      price: "LKR 26,000",
      courseName: "Car (Dual-Control)",
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
      features: [t.c2f1, t.c2f2, t.c2f3],
      price: "Free Trial",
      courseName: "3D Driving Simulator",
    },
    {
      id: "bike",
      category: "bike",
      image: "/assets/real-fleet-bikes.jpg",
      badgeClass: t.badgeClassA,
      badgeGear: t.badgeGearedAuto,
      title: t.c3Title,
      popular: false,
      sub: t.c3Sub,
      desc: t.c3Desc,
      features: [t.c3f1, t.c3f2, t.c3f3],
      price: "LKR 12,000",
      courseName: "Motorcycle (Class A)",
    },
    {
      id: "tuktuk",
      category: "tuktuk",
      image: "/assets/real-tuktuk.jpg",
      badgeClass: t.badgeClassB1,
      badgeGear: t.badgeCommercial,
      title: t.c4Title,
      popular: false,
      sub: t.c4Sub,
      desc: t.c4Desc,
      features: [t.c4f1, t.c4f2, t.c4f3],
      price: "LKR 14,000",
      courseName: "Three-Wheeler (Tuk Tuk)",
    },
    {
      id: "heavy",
      category: "heavy",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80",
      badgeClass: t.badgeClassD,
      badgeGear: t.badgeHeavyFleet,
      title: t.c5Title,
      popular: false,
      sub: t.c5Sub,
      desc: t.c5Desc,
      features: [t.c5f1, t.c5f2, t.c5f3],
      price: "LKR 38,000",
      courseName: "Heavy Bus & Lorry",
    },
    {
      id: "combo",
      category: "car",
      isCombo: true,
      title: t.c6Title,
      sub: t.c6Sub,
      desc: t.c6Desc,
      features: [t.c6f1, t.c6f2, t.c6f3, t.c6f4],
      price: "LKR 36,000",
      courseName: "Car + Bike Combo",
    },
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

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: t.tabAll },
              { id: "car", label: t.tabCar },
              { id: "bike", label: t.tabBike },
              { id: "tuktuk", label: t.tabTuk },
              { id: "heavy", label: t.tabBus },
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
                  className="course-card flex flex-col bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-3xl overflow-hidden shadow-xl hover-glow-red transition-all"
                >
                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <i className="fa-solid fa-fire text-amber-300"></i>
                        <span>{t.c6Badge}</span>
                      </div>
                      <h3 className="text-2xl font-black mt-4 font-heading">{c.title}</h3>
                      <p className="text-xs text-red-100 mt-1">{c.sub}</p>
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
                        <p className="text-xl font-black text-white">{c.price}</p>
                      </div>
                      <button
                        onClick={() => openEnrollModal(c.courseName)}
                        className="px-5 py-2.5 bg-white text-red-600 hover:bg-red-50 text-xs font-black rounded-xl shadow-lg transition-all"
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
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-2.5 py-1 rounded-md shadow">
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
                      <p className="text-lg font-black text-slate-900">{c.price}</p>
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
