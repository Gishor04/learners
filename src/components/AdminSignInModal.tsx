"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SECURE_ADMIN_AUTH_HASH, computeSha256 } from "@/data/mockData";

export default function AdminSignInModal() {
  const {
    t,
    isAdminSignInOpen,
    setIsAdminSignInOpen,
    setIsAdminPanelOpen,
    showToast,
  } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  if (!isAdminSignInOpen) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const inputEmail = email.trim().toLowerCase();
    const inputPass = password.trim();

    const hash = await computeSha256(inputEmail + ":" + inputPass);

    if (hash === SECURE_ADMIN_AUTH_HASH) {
      sessionStorage.setItem("dinesh_admin_logged", "true");
      setIsAdminSignInOpen(false);
      setIsAdminPanelOpen(true);
      setError(false);
      showToast("நிர்வாகக் கட்டுப்பாட்டகம் திறக்கப்பட்டது (Admin Verified)");
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative safe-modal-dialog max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-6 text-white relative border-b border-slate-800">
          <button
            onClick={() => setIsAdminSignInOpen(false)}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="inline-flex items-center gap-2 bg-red-600/30 text-red-300 border border-red-500/40 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-2">
            <i className="fa-solid fa-shield-halved"></i>
            <span>DMT: DS:385 • ADMIN PORTAL</span>
          </div>
          <h3 className="text-xl font-black font-heading text-white flex items-center gap-2">
            <i className="fa-solid fa-lock text-red-500 text-lg"></i>
            <span>{t.adminLoginTitle}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">{t.adminSubtitle}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} className="p-6 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
              <i className="fa-solid fa-circle-exclamation text-red-500 text-sm shrink-0"></i>
              <span>மின்னஞ்சல் அல்லது கடவுச்சொல் தவறானது!</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
              {t.adminEmailLabel}
            </label>
            <div className="relative">
              <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@email.com"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
              {t.adminPassLabel}
            </label>
            <div className="relative">
              <i className="fa-solid fa-key absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                title="Show / Hide Password"
              >
                <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-sm`}></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600 font-medium">
              <input type="checkbox" defaultChecked className="rounded text-red-600 focus:ring-red-500" />
              <span>Remember login</span>
            </label>
            <span className="text-slate-400 text-[11px]">DS:385 Verified</span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/30 text-sm transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>{t.adminSignInBtn}</span>
          </button>

          <div className="pt-2 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-400">
              <i className="fa-solid fa-shield-halved text-[10px] text-emerald-500"></i> Encrypted Secure Access (DMT DS:385)
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}
