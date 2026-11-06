"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { basePrices } from "@/data/mockData";

export default function FeeCalculator() {
  const { lang, t, openEnrollModal } = useLanguage();
  const [vehicleKey, setVehicleKey] = useState("van");
  const [includeMedical, setIncludeMedical] = useState(true);
  const [includeKachcheri, setIncludeKachcheri] = useState(true);
  const [includeSimulator, setIncludeSimulator] = useState(true);
  const [includeFastTrack, setIncludeFastTrack] = useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);

  const base = basePrices[vehicleKey] || basePrices.van;
  let total = base.price;
  let lessonCount = base.lessons;

  // Medical and Kachcheri booking are 100% FREE!
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
                  <option value="van">🚐 Van / Dual-Control Car — LKR 25,000</option>
                  <option value="bike">🏍️ Motorcycle / Scooter (Bike) — LKR 12,000</option>
                  <option value="tuktuk">🛺 Three-Wheeler / Auto (Tuk-Tuk) — LKR 15,000</option>
                  <option value="combo_bike_van">🔥 Bike + Van Combo — LKR 30,000</option>
                  <option value="combo_auto_van">🔥 Auto + Van Combo — LKR 30,000</option>
                  <option value="combo_auto_bike">⚡ Auto + Bike Combo — LKR 23,000</option>
                  <option value="combo_all">⭐ Auto + Bike + Van (All-in-One Complete) — LKR 35,000</option>
                  <option value="bus">🚌 Heavy Vehicle - TaTa & Ashok Leyland Bus — LKR 38,000</option>
                </select>
              </div>

              {/* Optional Add-ons & Benefits */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  {t.calcStep2}
                </label>

                {/* Free Medical Box */}
                <label className="flex items-center justify-between p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-300 cursor-pointer hover:bg-emerald-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeMedical}
                      onChange={(e) => setIncludeMedical(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-emerald-950 block">
                        🩺 {t.calcOptMedical}
                      </span>
                      <span className="text-[11px] text-emerald-700 font-medium">
                        {lang === "ta" ? "மருத்துவ சான்றிதழ் உதவி முழுமையாக இலவசம்" : lang === "si" ? "වෛද්‍ය පරීක්ෂණ සහය නොමිලේ" : "Full Medical examination assistance included"}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-700 uppercase bg-emerald-200/80 px-2.5 py-1 rounded-full">
                    {lang === "ta" ? "இலவசம் (FREE)" : lang === "si" ? "නොමිලේ (FREE)" : "FREE (0 LKR)"}
                  </span>
                </label>

                {/* Free Kachcheri Booking */}
                <label className="flex items-center justify-between p-3.5 bg-blue-50/80 rounded-xl border border-blue-300 cursor-pointer hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeKachcheri}
                      onChange={(e) => setIncludeKachcheri(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-blue-950 block">
                        🏛️ {t.calcOptKachcheri}
                      </span>
                      <span className="text-[11px] text-blue-700 font-medium">
                        {lang === "ta" ? "DMT கச்சேரி பரீட்சைக்கான முன்பதிவு எம்மால் இலவசமாக செய்யப்படும்" : lang === "si" ? "DMT කච්චේරි විභාග දිනය වෙන්කර දීම නොමිලේ" : "DMT Kachcheri exam slot booking arranged completely free"}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-blue-700 uppercase bg-blue-200/80 px-2.5 py-1 rounded-full">
                    {lang === "ta" ? "இலவசம் (FREE)" : lang === "si" ? "නොමිලේ (FREE)" : "FREE (0 LKR)"}
                  </span>
                </label>

                {/* 3D Simulator Sessions */}
                <label className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-red-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeSimulator}
                      onChange={(e) => setIncludeSimulator(e.target.checked)}
                      className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      🎮 {t.calcOptSim} (+4 Sessions)
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-600">+ LKR 3,000</span>
                </label>

                {/* Fast-Track VIP */}
                <label className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-red-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeFastTrack}
                      onChange={(e) => setIncludeFastTrack(e.target.checked)}
                      className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      ⚡ {t.calcOptFast}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-600">+ LKR 5,000</span>
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
                  <span className="text-xs font-semibold text-slate-600">
                    {lessonCount} {sessionLabel}
                  </span>
                </div>
              </div>

              {/* Installment Plan */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <span className="font-extrabold text-slate-800 block text-xs uppercase tracking-wider">
                  {t.calcInstallTitle}
                </span>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>{t.calcInst1}</span>
                  <span className="font-bold text-slate-900">LKR {installment1.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>{t.calcInst2}</span>
                  <span className="font-bold text-slate-900">LKR {installment2.toLocaleString()}</span>
                </div>
              </div>

              {/* Sunday Off Notice */}
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 flex items-center gap-2.5 text-[11px] text-amber-900 font-bold">
                <i className="fa-solid fa-clock text-amber-600 text-sm shrink-0"></i>
                <span>{t.hoursText}</span>
              </div>

              <button
                onClick={() => openEnrollModal(vehicleName)}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold rounded-xl shadow-lg shadow-red-600/30 text-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-calendar-check"></i>
                <span>{t.calcEnrollBtn}</span>
              </button>

              <p className="text-[11px] text-center text-slate-500 font-medium">
                {t.calcTrust}
              </p>
            </div>

          </div>
        </div>


        {/* Official DMT Price Board Display Card */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-red-500/30 p-6 sm:p-8 shadow-2xl text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-5/12 shrink-0">
              <div 
                onClick={() => setIsPriceModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-red-500/50 shadow-xl cursor-pointer group aspect-[3/4] bg-slate-950 flex items-center justify-center"
              >
                <img
                  src="/assets/dinesh-learners-price-board.jpg"
                  alt="Dinesh Learners Official Govt Price Board DS:385"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="bg-white text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <i className="fa-solid fa-expand"></i>
                    <span>{lang === "ta" ? "பெரிதாக்கிக் காண்க (Zoom)" : lang === "si" ? "විශාල කර බලන්න" : "Click to Zoom Full Board"}</span>
                  </span>
                </div>
                <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                  DMT DS:385 • Official
                </span>
              </div>
            </div>

            <div className="w-full md:w-7/12 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 border border-red-500/40 px-3 py-1 rounded-full text-xs font-black">
                <i className="fa-solid fa-clipboard-check"></i>
                <span>{lang === "ta" ? "அரசு அங்கீகாரம் பெற்ற கட்டணப் பட்டியல் பலகை" : lang === "si" ? "රජයේ ලියාපදිංචි නිල ගාස්තු පුවරුව" : "Official Govt Registered Fee Rate Board"}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                {lang === "ta" ? "நேரடி அலுவலக கட்டண விபரம் (அரச அங்கீகாரம் பெற்றது)" : lang === "si" ? "කාර්යාලීය නිල ගාස්තු විස්තරය (DMT අනුමතයි)" : "Dinesh Learners Official Academy Fee Board"}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === "ta"
                  ? "எமது தினேஷ் லேணர்ஸ் (DMT DS:385) யாழ்ப்பாண அலுவலகத்தில் காட்சிப்படுத்தப்பட்டுள்ள வெளிப்படையான, அரச அங்கீகாரம் பெற்ற உத்தியோகபூர்வ கட்டணப் பலகையை மேலே காணலாம்."
                  : lang === "si"
                  ? "දිනේෂ් ලර්නර්ස් (DMT DS:385) යාපනය ප්‍රධාන කාර්යාලයේ ප්‍රදර්ශනය කර ඇති නිල ගාස්තු පුවරුව මෙහිදී සෘජුවම නැරඹිය හැකිය."
                  : "View our completely transparent, government-approved official fee rate sheet displayed at our main Jaffna academy premises."}
              </p>

              {/* Quick Table Summary / Key Rates */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 block">Class A (Bike)</span>
                  <span className="text-sm font-black text-amber-400">LKR 12,000</span>
                  <span className="text-[9px] text-emerald-400 block">{lang === "ta" ? "முற்பணம்: 3,000" : lang === "si" ? "මූලික: 3,000" : "Advance: 3,000"}</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 block">Class B (Car/Van)</span>
                  <span className="text-sm font-black text-amber-400">LKR 25,000</span>
                  <span className="text-[9px] text-emerald-400 block">{lang === "ta" ? "முற்பணம்: 5,000" : lang === "si" ? "මූලික: 5,000" : "Advance: 5,000"}</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 block">Class B1 (3-Wheel)</span>
                  <span className="text-sm font-black text-amber-400">LKR 15,000</span>
                  <span className="text-[9px] text-emerald-400 block">{lang === "ta" ? "முற்பணம்: 5,000" : lang === "si" ? "මූලික: 5,000" : "Advance: 5,000"}</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 block">Auto+Van (BB1)</span>
                  <span className="text-sm font-black text-amber-400">LKR 30,000</span>
                  <span className="text-[9px] text-emerald-400 block">{lang === "ta" ? "முற்பணம்: 5,000" : lang === "si" ? "මූලික: 5,000" : "Advance: 5,000"}</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 block">Combo (ABB1)</span>
                  <span className="text-sm font-black text-amber-400">LKR 35,000</span>
                  <span className="text-[9px] text-emerald-400 block">{lang === "ta" ? "முற்பணம்: 5,000" : lang === "si" ? "මූලික: 5,000" : "Advance: 5,000"}</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 block">Heavy (D / AD)</span>
                  <span className="text-sm font-black text-amber-400">LKR 35,000+</span>
                  <span className="text-[9px] text-emerald-400 block">{lang === "ta" ? "முற்பணம்: 7,000" : lang === "si" ? "මූලික: 7,000" : "Advance: 7,000"}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsPriceModalOpen(true)}
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow"
                >
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                  <span>{lang === "ta" ? "முழு கட்டண பலகையை பெரிதாகப் பார்க்க" : lang === "si" ? "සම්පූර්ණ ගාස්තු පුවරුව විශාල කර බලන්න" : "Open Full Resolution Fee Board"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Board Full-Screen Modal */}
      {isPriceModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsPriceModalOpen(false)}
        >
          <div
            className="relative bg-slate-900 border border-red-500/40 rounded-3xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl overflow-hidden space-y-4 max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-sm font-black text-white">
                {lang === "ta" ? "தினேஷ் லேணர்ஸ் - அதிகாரபூர்வ கட்டணப் பட்டியல்" : lang === "si" ? "දිනේෂ් ලර්නර්ස් - නිල ගාස්තු ලේඛනය" : "Dinesh Learners Official Fee Board"}
              </span>
              <button
                onClick={() => setIsPriceModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-black rounded-xl p-2 flex items-center justify-center">
              <img
                src="/assets/dinesh-learners-price-board.jpg"
                alt="Dinesh Learners Official Price Board"
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
