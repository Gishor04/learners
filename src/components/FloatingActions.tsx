"use client";

import React from "react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 floating-quick-actions items-center">
      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@dinesh.niro?_r=1&_t=ZS-9B7EPz39NCr"
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 bg-black/90 hover:bg-black text-white rounded-full shadow-xl flex items-center justify-center text-lg hover:scale-110 active:scale-95 transition-all border border-pink-500/40"
        title="Follow Dinesh on TikTok (@dinesh.niro)"
      >
        <i className="fa-brands fa-tiktok text-cyan-400"></i>
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/@ngcsmartstove6985?si=BDX_E-pg2wXvarU6"
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-xl flex items-center justify-center text-lg hover:scale-110 active:scale-95 transition-all"
        title="Watch on YouTube (@ngcsmartstove6985)"
      >
        <i className="fa-brands fa-youtube"></i>
      </a>

      {/* Call */}
      <a
        href="tel:0779227102"
        className="w-11 h-11 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-xl flex items-center justify-center text-base hover:scale-110 active:scale-95 transition-all"
        title="Direct Phone Call: 077 9227 102"
      >
        <i className="fa-solid fa-phone"></i>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/94779227102?text=Hello%20Dinesh%20Learners!%20I%20would%20like%20to%20enroll%20for%20driving%20classes."
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all relative"
        title="Chat on WhatsApp (+94 77 922 7102)"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
        <i className="fa-brands fa-whatsapp relative z-10"></i>
      </a>
    </div>
  );
}
