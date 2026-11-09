"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { faqs } from "@/data/faqs";

export default function FaqSection() {
  const { lang, openEnrollModal } = useLanguage();
  const currentFaq = faqs[lang] || faqs.ta;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-white via-rose-50/30 to-slate-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-100/80 px-4 py-1.5 rounded-full border border-red-200 shadow-xs inline-flex items-center gap-1.5">
            <i className="fa-solid fa-circle-question"></i>
            <span>{currentFaq.pill}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            {currentFaq.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {currentFaq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {currentFaq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`transition-all duration-200 rounded-2xl border ${
                  isOpen
                    ? "bg-white border-red-300 shadow-md shadow-red-500/5 ring-1 ring-red-200"
                    : "bg-white/80 hover:bg-white border-slate-200 shadow-xs hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                        isOpen
                          ? "bg-red-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      Q{idx + 1}
                    </span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {item.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-red-50 text-red-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-1">
                    <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <p className="text-slate-700 leading-relaxed font-normal">{item.a}</p>
                      {item.tag && (
                        <span className="self-start sm:self-auto text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-200/80 shrink-0">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & Quick Action */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-red-600/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-black font-heading">
              {currentFaq.contactPrompt}
            </h3>
            <p className="text-rose-100 text-xs sm:text-sm">
              Dinesh Learners, No. 107A 1/1, Kandy Road, Jaffna (YMCA 1st Floor).
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/94775189963?text=Hello%20Dinesh%20Learners,%20I%20would%20like%20to%20inquire%20about%20driving%20lessons"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-white hover:bg-slate-50 text-red-600 font-extrabold text-xs sm:text-sm rounded-xl shadow transition-transform active:scale-95 flex items-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-emerald-500 text-base"></i>
              <span>{currentFaq.contactBtn}</span>
            </a>
            <button
              onClick={() => openEnrollModal("General Driving Course")}
              className="px-5 py-3 bg-red-950/40 hover:bg-red-950/60 text-white font-extrabold text-xs sm:text-sm rounded-xl border border-white/20 transition-transform active:scale-95 flex items-center gap-2"
            >
              <i className="fa-solid fa-graduation-cap"></i>
              <span>Enroll Now</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
