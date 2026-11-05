"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function NoticeModal() {
  const { t, isNoticeOpen, setIsNoticeOpen } = useLanguage();

  if (!isNoticeOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative safe-modal-dialog max-h-[92vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-6 text-white relative">
          <button
            onClick={() => setIsNoticeOpen(false)}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white text-sm transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider mb-2">
            <span>📢 DMT: DS:385 • JAFFNA</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-heading">
            {t.modalNoticeTitle}
          </h3>
          <p className="text-xs text-amber-100 font-semibold mt-1">
            {t.noticeSub}
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-xl">🚗</span>
              <div className="flex-1 text-xs">
                <strong className="text-slate-900 block text-sm">{t.noticeGreeting}</strong>
                <p className="text-slate-600 mt-1">{t.noticeTechDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-slate-200/60">
              <span className="text-xl">🚗</span>
              <div className="flex-1 text-xs">
                <strong className="text-slate-900 block">{t.noticeExamTitle}</strong>
                <p className="text-slate-600 mt-0.5">{t.noticeExamDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-slate-200/60">
              <span className="text-xl">🚗</span>
              <div className="flex-1 text-xs">
                <strong className="text-slate-900 block">{t.noticeMedTitle}</strong>
                <p className="text-slate-600 mt-0.5">{t.noticeMedDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-slate-200/60">
              <span className="text-xl">🎉</span>
              <div className="flex-1 text-xs">
                <strong className="text-amber-800 font-black block">{t.noticeInstallmentTitle}</strong>
                <p className="text-slate-700 font-bold mt-0.5">{t.noticeInstallmentDesc}</p>
              </div>
            </div>
          </div>

          {/* Real Estate Box */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-base">🏡</span>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wide">
                {t.noticeReTag}
              </span>
            </div>
            <p className="text-xs text-amber-950 font-bold leading-relaxed">
              {t.noticeReDesc}
            </p>
            <p className="text-[11px] text-slate-700 pt-1 border-t border-amber-200/60">
              <strong>{t.noticeAddressLabel}</strong> <span>{t.noticeAddressText}</span>
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/94779227102?text=வணக்கம்%20டினேஸ்%20லேணர்ஸ்!%20விசேட%20சாரதிப்%20பயிற்சி%20பற்றிய%20விபரங்களை%20அறிய%20விரும்புகிறேன்."
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-md flex items-center justify-center gap-2 text-xs"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>{t.noticeWaBtn}</span>
            </a>
            <a
              href="tel:0779227102"
              className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl shadow-md flex items-center justify-center gap-2 text-xs"
            >
              <i className="fa-solid fa-phone text-xs"></i>
              <span>{t.noticeCallBtn}</span>
            </a>
            <button
              onClick={() => setIsNoticeOpen(false)}
              className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
            >
              {t.modalNoticeClose}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
