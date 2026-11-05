"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Lang } from "@/data/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)["ta"];
  isEnrollOpen: boolean;
  setIsEnrollOpen: (open: boolean) => void;
  selectedCourseForEnroll: string;
  openEnrollModal: (course?: string) => void;
  isNoticeOpen: boolean;
  setIsNoticeOpen: (open: boolean) => void;
  isAdminSignInOpen: boolean;
  setIsAdminSignInOpen: (open: boolean) => void;
  isAdminPanelOpen: boolean;
  setIsAdminPanelOpen: (open: boolean) => void;
  showToast: (msg: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ta");
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState("Car (Dual-Control)");
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [isAdminSignInOpen, setIsAdminSignInOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("dinesh_lang") as Lang;
    if (saved && (saved === "ta" || saved === "en" || saved === "si")) {
      setLangState(saved);
      document.documentElement.lang = saved;
      document.body.className = `lang-${saved} bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white`;
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("dinesh_lang", newLang);
    document.documentElement.lang = newLang;
    document.body.className = `lang-${newLang} bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white`;
  };

  const openEnrollModal = (course?: string) => {
    if (course) {
      setSelectedCourseForEnroll(course);
    }
    setIsEnrollOpen(true);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const t = translations[lang] || translations.ta;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
        isEnrollOpen,
        setIsEnrollOpen,
        selectedCourseForEnroll,
        openEnrollModal,
        isNoticeOpen,
        setIsNoticeOpen,
        isAdminSignInOpen,
        setIsAdminSignInOpen,
        isAdminPanelOpen,
        setIsAdminPanelOpen,
        showToast,
      }}
    >
      {children}
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs sm:text-sm font-bold flex items-center gap-2 animate-bounce">
          <i className="fa-solid fa-circle-check text-emerald-400 text-base"></i>
          <span>{toastMessage}</span>
        </div>
      )}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
