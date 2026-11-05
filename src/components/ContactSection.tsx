"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-extrabold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            {t.contactPill}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            {t.contactTitle}
          </h2>
          <p className="text-slate-600 text-sm">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-red-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-xl shrink-0">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">{t.cPhoneLabel}</p>
                <div className="text-base font-extrabold text-slate-900 mt-0.5 space-x-2">
                  <a href="tel:0214327102" className="hover:text-red-600">021 4327 102</a>
                  <span>/</span>
                  <a href="tel:0779227102" className="hover:text-red-600">077 9227 102</a>
                </div>
              </div>
            </div>

            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-4 hover:border-emerald-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-2xl shrink-0">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-emerald-800 uppercase">{t.cWaLabel}</p>
                <p className="text-sm font-extrabold text-emerald-950 mt-0.5">+94 77 922 7102</p>
              </div>
              <a
                href="https://wa.me/94779227102"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow transition-colors"
              >
                {t.cWaBtn}
              </a>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0 mt-1">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">{t.cLocLabel}</p>
                <p className="text-sm font-bold text-slate-900 mt-1 leading-relaxed">
                  {t.addressText}
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl shrink-0">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">{t.cHoursLabel}</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{t.hoursText}</p>
                <p className="text-xs text-emerald-600 font-semibold mt-0.5">{t.cHoursSub}</p>
              </div>
            </div>

          </div>

          {/* Google Map Iframe & Location Card */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-crosshairs text-red-500"></i>
                <span className="text-xs font-bold">{t.mapLocationText}</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=YMCA+Jaffna+Kandy+Road"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
              >
                Google Maps <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>

            <div className="w-full h-80 sm:h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.003923363375!2d80.0185!3d9.6644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53f1f33a925f%3A0x6b4ef8d4b3b18544!2sYMCA%20Jaffna!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
