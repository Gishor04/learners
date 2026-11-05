"use client";

import React from "react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 floating-quick-actions">
      <a
        href="tel:0779227102"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl flex items-center justify-center text-lg hover:scale-110 active:scale-95 transition-all"
        title="Direct Phone Call"
      >
        <i className="fa-solid fa-phone"></i>
      </a>
      <a
        href="https://wa.me/94779227102?text=Hello%20Dinesh%20Learners!%20I%20would%20like%20to%20enroll%20for%20driving%20classes."
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all relative"
        title="Chat on WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
        <i className="fa-brands fa-whatsapp relative z-10"></i>
      </a>
    </div>
  );
}
