"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { StudentAdmission, INITIAL_SAMPLE_ADMISSIONS } from "@/data/mockData";

export default function EnrollModal() {
  const { t, isEnrollOpen, setIsEnrollOpen, selectedCourseForEnroll, showToast } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("Car (Dual-Control)");
  const [slot, setSlot] = useState("Morning (7:00 AM - 10:00 AM)");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (selectedCourseForEnroll) {
      setCourse(selectedCourseForEnroll);
    }
  }, [selectedCourseForEnroll]);

  if (!isEnrollOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Save to localStorage admissions
    const rawData = localStorage.getItem("dinesh_admissions");
    const current: StudentAdmission[] = rawData ? JSON.parse(rawData) : INITIAL_SAMPLE_ADMISSIONS;

    const newRecord: StudentAdmission = {
      id: "ADM-" + (100 + current.length + 1),
      date: new Date().toLocaleDateString("en-GB") + " " + new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      name: name.trim(),
      phone: phone.trim(),
      course,
      slot,
      note: note.trim() || "-",
      status: "New",
    };

    localStorage.setItem("dinesh_admissions", JSON.stringify([newRecord, ...current]));

    // Format WhatsApp message
    const msg = `🚗 *Dinesh Learners - New Student Admission (2027)*%0A%0A*Name:* ${encodeURIComponent(
      name
    )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Course:* ${encodeURIComponent(
      course
    )}%0A*Slot:* ${encodeURIComponent(slot)}%0A*Note:* ${encodeURIComponent(
      note || "None"
    )}%0A%0A_Sent via Dinesh Learners Online Portal (DMT: DS:385)_`;

    setIsEnrollOpen(false);
    showToast("முன்பதிவு தயார்! WhatsApp திறக்கப்படுகிறது...");

    // Open WhatsApp
    window.open(`https://wa.me/94779227102?text=${msg}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative animate-float-delayed safe-modal-dialog max-h-[92vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-red-600 to-rose-600 p-6 text-white relative">
          <button
            onClick={() => setIsEnrollOpen(false)}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white text-sm transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="inline-flex items-center gap-1.5 bg-white/20 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
            <span>DMT: DS:385 • Jaffna</span>
          </div>
          <h3 className="text-xl font-black font-heading">{t.modalTitle}</h3>
          <p className="text-xs text-red-100 mt-1">{t.modalSub}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.mNameLabel}</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.mPhoneLabel}</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="077 XXXXXXX"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.mCourseLabel}</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              <option value="Car (Dual-Control)">🚗 Car (Manual / Auto Dual Control)</option>
              <option value="Motorcycle (Class A)">🏍️ Motorcycle / Scooter</option>
              <option value="Three-Wheeler (Tuk Tuk)">🛺 Three Wheeler (Tuk Tuk)</option>
              <option value="Heavy Bus & Lorry">🚌 Heavy Bus & Lorry (Class D/CE)</option>
              <option value="Car + Bike Combo">🔥 Car + Bike Combo Package</option>
              <option value="3D Driving Simulator">🕹️ 3D Virtual Simulator Trial</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.mSlotLabel}</label>
            <select
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              <option value="Morning (7:00 AM - 10:00 AM)">{t.mSlotOpt1}</option>
              <option value="Mid-day (10:00 AM - 2:00 PM)">{t.mSlotOpt2}</option>
              <option value="Evening (3:00 PM - 7:00 PM)">{t.mSlotOpt3}</option>
              <option value="Weekend (Sat / Sun)">{t.mSlotOpt4}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.mNoteLabel}</label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/30 text-sm transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>{t.mSubmitBtn}</span>
          </button>

          <p className="text-[11px] text-center text-slate-400">
            {t.mFootNote}
          </p>
        </form>
      </div>
    </div>
  );
}
