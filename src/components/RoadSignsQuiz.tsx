"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { quizQuestions, SECURE_EXAM_AUTH_HASH, computeSha256 } from "@/data/mockData";

export default function RoadSignsQuiz() {
  const { lang, t, showToast } = useLanguage();
  const [isExamLogged, setIsExamLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  // Local quiz language toggle (Tamil, English, Sinhala)
  const [quizLang, setQuizLang] = useState<"ta" | "en" | "si">(lang);

  // Keep quizLang in sync when global lang changes
  useEffect(() => {
    setQuizLang(lang);
  }, [lang]);

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const logged = sessionStorage.getItem("dinesh_exam_logged") === "true";
    setIsExamLogged(logged);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const inputEmail = email.trim().toLowerCase();
    const inputPass = password.trim();

    const hash = await computeSha256(inputEmail + ":" + inputPass);

    if (hash === SECURE_EXAM_AUTH_HASH) {
      sessionStorage.setItem("dinesh_exam_logged", "true");
      setIsExamLogged(true);
      setLoginError(false);
      showToast(
        lang === "ta"
          ? "வெற்றி! மாதிரி வினாத்தாள் திறக்கப்பட்டது."
          : lang === "si"
          ? "සාර්ථකයි! විභාග ප්‍රශ්න පත්‍රය විවෘත විය."
          : "Success! Model exam questions unlocked."
      );
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("dinesh_exam_logged");
    setIsExamLogged(false);
    setPassword("");
    showToast(
      lang === "ta"
        ? "வினாத்தாள் அமர்விலிருந்து வெளியேறியுள்ளீர்கள்."
        : lang === "si"
        ? "විභාග සැසියෙන් ඉවත් විය."
        : "Signed out from exam session."
    );
  };

  const q = quizQuestions[currentIndex];

  const questionTitle =
    quizLang === "ta" ? q.titleTa : quizLang === "si" ? q.titleSi : q.titleEn;

  const options =
    quizLang === "ta" ? q.optionsTa : quizLang === "si" ? q.optionsSi : q.optionsEn;

  const explanation =
    quizLang === "ta" ? q.explanationTa : quizLang === "si" ? q.explanationSi : q.explanationEn;

  const handleSelectOption = (idx: number) => {
    if (answered) return;
    setSelectedOption(idx);
    setAnswered(true);
    if (idx === q.answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setSelectedOption(null);
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <section id="quiz" className="py-16 sm:py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            {t.quizPill}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            {t.quizTitle}
          </h2>
          <p className="text-slate-600 text-sm">
            {t.quizSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left: Real Classroom Preview */}
          <div className="lg:col-span-5 bg-white p-3 rounded-3xl border border-slate-200 shadow-md">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 mb-3">
              <img
                src="/assets/classroom-theory.jpg"
                alt="Actual Classroom Theory Board at Dinesh Learners"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 text-center">
              <p className="text-xs font-bold text-slate-800">{t.quizClassroomTitle}</p>
              <p className="text-[11px] text-slate-500">{t.quizClassroomSub}</p>
            </div>
          </div>

          {/* Right Side: Candidate Exam Questions Portal */}
          <div className="lg:col-span-7">

            {/* STATE 1: EXAM LOGIN GATE (Visible when not logged in) */}
            {!isExamLogged ? (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-black uppercase tracking-wider mb-2">
                    <i className="fa-solid fa-lock"></i>
                    <span>{t.examGateBadge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                    {t.examPortalTitle}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {t.examPortalSub}
                  </p>
                </div>

                {/* Error Banner */}
                {loginError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
                    <i className="fa-solid fa-circle-exclamation text-red-500 text-sm shrink-0"></i>
                    <span>{t.examInvalidCreds}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      {t.examEmailLabel}
                    </label>
                    <div className="relative">
                      <i className="fa-solid fa-envelope absolute left-3.5 top-3 text-slate-400 text-sm"></i>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="candidate@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      {t.examPassLabel}
                    </label>
                    <div className="relative">
                      <i className="fa-solid fa-key absolute left-3.5 top-3 text-slate-400 text-sm"></i>
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"} text-sm`}></i>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-600/30 text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-unlock-keyhole"></i>
                    <span>{t.examSignInBtn}</span>
                  </button>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-shield-halved text-emerald-600"></i>
                      <span>{t.examHelpText}</span>
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              /* STATE 2: UNLOCKED CANDIDATE QUIZ */
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                
                {/* Header with Active Session & Logout */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-xs font-bold text-emerald-700">{t.examSessionActive}</span>
                  </div>

                  {/* 3-Language Switcher Tabs */}
                  <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setQuizLang("ta")}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        quizLang === "ta" ? "bg-white text-emerald-700 shadow-sm font-black" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      தமிழ்
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizLang("en")}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        quizLang === "en" ? "bg-white text-emerald-700 shadow-sm font-black" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuizLang("si")}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        quizLang === "si" ? "bg-white text-emerald-700 shadow-sm font-black" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      සිංහල
                    </button>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-700 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all"
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <span>{t.examLogoutBtn}</span>
                  </button>
                </div>

                {/* Question Info */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span>
                    Question {currentIndex + 1} / {quizQuestions.length}
                  </span>
                  <span>
                    Score: {score} / {quizQuestions.length}
                  </span>
                </div>

                {/* Sign SVG */}
                <div
                  className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center min-h-[110px]"
                  dangerouslySetInnerHTML={{ __html: q.signSvg }}
                />

                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                  {questionTitle}
                </h3>

                {/* Options */}
                <div className="space-y-2.5">
                  {options.map((opt, idx) => {
                    let btnStyle = "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200";

                    if (answered) {
                      if (idx === q.answer) {
                        btnStyle = "bg-emerald-50 text-emerald-900 border-emerald-400 font-bold ring-2 ring-emerald-500";
                      } else if (idx === selectedOption) {
                        btnStyle = "bg-rose-50 text-rose-900 border-rose-300 font-bold";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={answered}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {answered && idx === q.answer && (
                          <i className="fa-solid fa-circle-check text-emerald-600 text-base shrink-0 ml-2"></i>
                        )}
                        {answered && idx === selectedOption && idx !== q.answer && (
                          <i className="fa-solid fa-circle-xmark text-rose-500 text-base shrink-0 ml-2"></i>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Feedback */}
                {answered && (
                  <div
                    className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1 ${
                      selectedOption === q.answer
                        ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                        : "bg-amber-50 border-amber-200 text-amber-900"
                    }`}
                  >
                    <p className="font-bold flex items-center gap-1.5">
                      <i className={`fa-solid ${selectedOption === q.answer ? "fa-circle-check text-emerald-600" : "fa-triangle-exclamation text-amber-600"}`}></i>
                      <span>
                        {selectedOption === q.answer
                          ? (quizLang === "ta" ? "சரியான விடை!" : quizLang === "si" ? "නිවැරදි පිළිතුරයි!" : "Correct Answer!")
                          : (quizLang === "ta" ? "தவறான விடை!" : quizLang === "si" ? "වැරදි පිළිතුරයි!" : "Incorrect Answer!")}
                      </span>
                    </p>
                    <p>{explanation}</p>
                  </div>
                )}

                {/* Next Question */}
                {answered && (
                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>
                      {currentIndex + 1 < quizQuestions.length
                        ? t.quizNextBtn
                        : (quizLang === "ta" ? "மீண்டும் ஆரம்பி" : quizLang === "si" ? "නැවත අරඹන්න" : "Restart Quiz")}
                    </span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                )}

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
