"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { basePrices } from "@/data/mockData";

export default function FeeCalculator() {
  const { lang, t, openEnrollModal } = useLanguage();
  const [vehicleKey, setVehicleKey] = useState("car_manual");
  const [includeMedical, setIncludeMedical] = useState(true);
  const [includeSimulator, setIncludeSimulator] = useState(true);
  const [includeFastTrack, setIncludeFastTrack] = useState(false);

  const base = basePrices[vehicleKey] || basePrices.car_manual;
  let total = base.price;
  let lessonCount = base.lessons;

  if (includeMedical) total += 3500;
  if (includeSimulator) {
    total += 3000;
    lessonCount += 4;
  }
  if (includeFastTrack) total += 5000;

  const installment1 = Math.round(total * 0.5);
  const installment2 = total - installment1;

  const sessionLabel =
    lang === "ta" ? "பயிற்சி அமர்வுகள்" : lang === "si" ? "පුහුණු සැසි" : "Practical Sessions";

  const vehicleName =
    lang === "ta" ? base.nameTa : lang === "si" ? base.nameSi : base.name;

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            {t.calcPill}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            {t.calcTitle}
          </h2>
          <p className="text-slate-600 text-sm">
            {t.calcSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls Column */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                  {t.calcStep1}
                </label>
                <select
                  value={vehicleKey}
                  onChange={(e) => setVehicleKey(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-2xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all shadow-sm"
                >
                  <option value="car_manual">🚗 Car - Manual Transmission (Dual Control)</option>
                  <option value="car_auto">🚗 Car - Automatic Transmission</option>
                  <option value="bike">🏍️ Motorcycle / Scooter (Class A/A1)</option>
                  <option value="tuktuk">🛺 Three-Wheeler Tuk-Tuk (Class B1)</option>
                  <option value="bus">🚌 Heavy Vehicle - Bus & Lorry (Class D/CE)</option>
                </select>
              </div>

              {/* Optional Add-ons */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  {t.calcStep2}
                </label>

                <label className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-red-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeMedical}
                      onChange={(e) => setIncludeMedical(e.target.checked)}
                      className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {t.calcOptMedical}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500">+ LKR 3,500</span>
                </label>

                <label className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-red-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeSimulator}
                      onChange={(e) => setIncludeSimulator(e.target.checked)}
                      className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {t.calcOptSim}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500">+ LKR 3,000</span>
                </label>

                <label className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-red-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeFastTrack}
                      onChange={(e) => setIncludeFastTrack(e.target.checked)}
                      className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {t.calcOptFast}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500">+ LKR 5,000</span>
                </label>
              </div>

            </div>

            {/* Total Calculation Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-red-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase">{t.calcSelectedLabel}</span>
                <span className="text-xs font-extrabold text-red-600">{vehicleName}</span>
              </div>

              <div>
                <span className="text-xs font-medium text-slate-500">{t.calcTotalLabel}</span>
                <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading mt-1">
                  LKR {total.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold text-emerald-700">
                    {lessonCount} {sessionLabel}
                  </span>
                </div>
              </div>

              {/* Installment Plan breakdown */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 space-y-2 text-xs">
                <p className="font-extrabold text-slate-700 uppercase tracking-wider text-[11px]">
                  {t.calcInstLabel}
                </p>
                <div className="flex justify-between font-medium text-slate-600">
                  <span>{t.calcInst1Label}</span>
                  <span className="font-bold text-slate-900">LKR {installment1.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-medium text-slate-600">
                  <span>{t.calcInst2Label}</span>
                  <span className="font-bold text-slate-900">LKR {installment2.toLocaleString()}</span>
                </div>
              </div>

              {/* Book CTA */}
              <button
                onClick={() => openEnrollModal(vehicleName)}
                className="w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/25 transition-all text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-receipt"></i> <span>{t.btnBookThisPlan}</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">{t.calcNoHidden}</p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
