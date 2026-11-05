"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, setIsAdminSignInOpen } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Dinesh Learners Brand */}
          <div className="space-y-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white rounded-lg border-2 border-red-600 flex items-center justify-center font-black text-red-600 text-lg">
                L
              </div>
              <span className="text-lg font-black text-white font-heading">{t.brandTitle}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              DMT Reg: DS:385 • <span>{t.heroPill}</span>
            </p>
            <p className="text-slate-300 font-bold">{t.ownerText}</p>
          </div>

          {/* Col 2: Training Courses */}
          <div className="space-y-2">
            <p className="font-bold text-white text-sm">{t.footerQuickLinks}</p>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#courses" className="hover:text-white transition-colors">{t.tabCar}</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">{t.tabBike}</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">{t.tabTuk}</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">{t.tabBus}</a></li>
              <li><a href="#simulator" className="hover:text-cyan-400 transition-colors">{t.tabSim}</a></li>
            </ul>
          </div>

          {/* Col 3: Dinesh Real Estate */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-sm">
              <i className="fa-solid fa-house-chimney text-xs"></i>
              <span>{t.reFooterBrand}</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              {t.reFooterDesc}
            </p>
            <ul className="space-y-1 text-[11px]">
              <li className="text-slate-300 flex items-center gap-1">
                <i className="fa-solid fa-envelope text-rose-400"></i> nelsonrealestate@gmail.com
              </li>
              <li className="text-slate-300 flex items-center gap-1">
                <i className="fa-solid fa-phone text-amber-400"></i> 077 9227 102
              </li>
              <li className="pt-1">
                <a href="#real-estate" className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1">
                  <span>{t.reFooterLink}</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Student Resources */}
          <div className="space-y-2">
            <p className="font-bold text-white text-sm">{t.footerSupport}</p>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#calculator" className="hover:text-white transition-colors">{t.navFees}</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">{t.navQuiz}</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">{t.navGallery}</a></li>
              <li><a href="#zero-exp" className="hover:text-white transition-colors">{t.zeroExpBadge}</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-2">
            <p className="font-bold text-white text-sm">{t.footerContact}</p>
            <p className="text-xs text-slate-300">{t.addressText}</p>
            <p className="text-xs text-white font-bold">{t.callUsText}</p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/94779227102"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                title="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="tel:0779227102"
                className="w-8 h-8 rounded-lg bg-red-600/30 text-red-400 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                title="Call"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Row with 2027 */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>{t.footerRights}</p>
          <div className="flex items-center gap-4 text-xs">
            <p>{t.footerLocation}</p>
            <span>•</span>
            <button
              onClick={() => setIsAdminSignInOpen(true)}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-bold"
            >
              <i className="fa-solid fa-lock text-[10px]"></i>
              <span>{t.adminPortalBtn}</span>
            </button>
          </div>
        </div>

        {/* PIRA AI AURA OFFICIAL BRANDING FOOTER */}
        <div className="pt-8 border-t border-slate-900/90 flex flex-col items-center justify-center text-center space-y-3.5">
          <div className="inline-flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-indigo-500/40 shadow-2xl shadow-indigo-950/60 hover:border-cyan-400/70 hover:shadow-cyan-900/40 hover:scale-[1.02] transition-all group">
            <img
              src="/assets/pira-ai-aura-logo.jpg"
              alt="PIRA AI AURA Logo"
              className="w-12 h-12 rounded-xl object-cover ring-2 ring-indigo-500/50 group-hover:ring-cyan-400 shadow-md transition-all"
            />
            <div className="text-left">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <span>DESIGNED & POWERED BY</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </div>
              <div className="text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent font-heading">
                PIRA AI AURA
              </div>
            </div>
          </div>

          <p className="text-[11px] tracking-widest uppercase font-extrabold text-slate-400">
            <span className="text-cyan-400 font-extrabold">CREATIVE</span> •{" "}
            <span className="text-sky-300 font-extrabold">INTELLIGENT</span> •{" "}
            <span className="text-indigo-400 font-extrabold">IMPACTFUL</span>
          </p>

          <p className="text-[11px] text-slate-400 max-w-md">
            Next-generation AI & Digital Innovation • Sri Lanka
          </p>
        </div>

      </div>
    </footer>
  );
}
