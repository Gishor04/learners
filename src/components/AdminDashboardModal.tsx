"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { StudentAdmission, INITIAL_SAMPLE_ADMISSIONS } from "@/data/mockData";

export default function AdminDashboardModal() {
  const { t, isAdminPanelOpen, setIsAdminPanelOpen, showToast } = useLanguage();

  const [activeTab, setActiveTab] = useState<"tabAdmissions" | "tabAddManual" | "tabAnalytics">("tabAdmissions");
  const [filter, setFilter] = useState<"all" | "New" | "Contacted" | "Confirmed">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [clock, setClock] = useState("");
  const [records, setRecords] = useState<StudentAdmission[]>([]);

  // Form states for manual add
  const [manualName, setManualName] = useState("");
  const [manualPhone, setManualPhone] = useState("");
  const [manualCourse, setManualCourse] = useState("Car (Dual-Control)");
  const [manualSlot, setManualSlot] = useState("Morning (7:00 AM - 10:00 AM)");
  const [manualNote, setManualNote] = useState("");

  useEffect(() => {
    // Clock
    const timer = setInterval(() => {
      const now = new Date();
      setClock(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isAdminPanelOpen) {
      loadRecords();
    }
  }, [isAdminPanelOpen]);

  const loadRecords = () => {
    const raw = localStorage.getItem("dinesh_admissions");
    if (!raw) {
      localStorage.setItem("dinesh_admissions", JSON.stringify(INITIAL_SAMPLE_ADMISSIONS));
      setRecords(INITIAL_SAMPLE_ADMISSIONS);
    } else {
      try {
        setRecords(JSON.parse(raw));
      } catch (e) {
        setRecords(INITIAL_SAMPLE_ADMISSIONS);
      }
    }
  };

  if (!isAdminPanelOpen) return null;

  const handleLogout = () => {
    sessionStorage.removeItem("dinesh_admin_logged");
    setIsAdminPanelOpen(false);
    showToast("நிர்வாக அமர்விலிருந்து வெளியேறியுள்ளீர்கள்.");
  };

  const handleStatusChange = (id: string, newStatus: "New" | "Contacted" | "Confirmed") => {
    const updated = records.map((r) => (r.id === id ? { ...r, status: newStatus } : r));
    setRecords(updated);
    localStorage.setItem("dinesh_admissions", JSON.stringify(updated));
    showToast(`மாணவர் ${id} நிலை (${newStatus}) புதுப்பிக்கப்பட்டது.`);
  };

  const handleDelete = (id: string) => {
    if (!confirm(`Are you sure you want to delete student admission record ${id}?`)) return;
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
    localStorage.setItem("dinesh_admissions", JSON.stringify(updated));
    showToast(`பதிவு ${id} நீக்கப்பட்டது.`);
  };

  const handleManualAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualName.trim() || !manualPhone.trim()) return;

    const newRec: StudentAdmission = {
      id: "ADM-" + (100 + records.length + 1),
      date: new Date().toLocaleDateString("en-GB") + " " + new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      name: manualName.trim(),
      phone: manualPhone.trim(),
      course: manualCourse,
      slot: manualSlot,
      note: manualNote.trim() || "-",
      status: "New",
    };

    const updated = [newRec, ...records];
    setRecords(updated);
    localStorage.setItem("dinesh_admissions", JSON.stringify(updated));

    setManualName("");
    setManualPhone("");
    setManualNote("");
    setActiveTab("tabAdmissions");
    showToast(`மாணவர் சேர்க்கை ${newRec.id} வெற்றிகரமாக சேர்க்கப்பட்டது!`);
  };

  const handleExportCsv = () => {
    let csv = "ID,Date,Name,Phone,Course,Slot,Status,Note\n";
    records.forEach((r) => {
      const row = [
        `"${r.id}"`,
        `"${r.date}"`,
        `"${r.name.replace(/"/g, '""')}"`,
        `"${r.phone}"`,
        `"${r.course.replace(/"/g, '""')}"`,
        `"${r.slot.replace(/"/g, '""')}"`,
        `"${r.status}"`,
        `"${(r.note || "").replace(/"/g, '""')}"`,
      ];
      csv += row.join(",") + "\n";
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `dinesh_learners_admissions_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("CSV கோப்பு பதிவிறக்கம் செய்யப்பட்டது!");
  };

  const filteredRecords = records.filter((r) => {
    const matchesFilter = filter === "all" || r.status === filter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.phone.toLowerCase().includes(q) ||
      r.course.toLowerCase().includes(q) ||
      r.id.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const totalCount = records.length;
  const simCount = records.filter((r) => (r.course || "").toLowerCase().includes("simul")).length;
  const newCount = records.filter((r) => r.status === "New").length;
  const confirmedCount = records.filter((r) => r.status === "Confirmed").length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="min-h-screen bg-slate-100 text-slate-900 pb-12">
        
        {/* Admin Header */}
        <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-xl border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl border-2 border-red-600 flex items-center justify-center font-black text-red-600 text-2xl shadow-md">
                L
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-base sm:text-lg tracking-tight font-heading">
                    {t.adminPanelTitle}
                  </span>
                  <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                    DS:385
                  </span>
                </div>
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  <span>நிர்வாகம்: <strong className="text-amber-300">DMT DS:385 Certified</strong></span>
                  <span>•</span>
                  <span className="text-slate-300 font-mono">{clock}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsAdminPanelOpen(false)}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-all border border-slate-700 flex items-center gap-1.5"
                title="View Public Website"
              >
                <i className="fa-solid fa-globe text-xs"></i>
                <span className="hidden sm:inline">தளத்தைப் பார்க்க</span>
              </button>
              <button
                onClick={handleLogout}
                className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md shadow-red-600/30 transition-all flex items-center gap-1.5"
              >
                <i className="fa-solid fa-power-off text-xs"></i>
                <span>{t.adminLogoutBtn}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Main */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center text-xl shrink-0">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">மொத்த சேர்க்கைகள்</p>
                <h4 className="text-2xl font-black text-slate-900 font-heading">{totalCount}</h4>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-200 flex items-center justify-center text-xl shrink-0">
                <i className="fa-solid fa-gamepad"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">3D சிமுலேட்டர்</p>
                <h4 className="text-2xl font-black text-slate-900 font-heading">{simCount}</h4>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center text-xl shrink-0">
                <i className="fa-solid fa-clock-rotate-left"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">புதிய விண்ணப்பங்கள்</p>
                <h4 className="text-2xl font-black text-slate-900 font-heading">{newCount}</h4>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-xl shrink-0">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">உறுதிப்படுத்தப்பட்டவை</p>
                <h4 className="text-2xl font-black text-slate-900 font-heading">{confirmedCount}</h4>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("tabAdmissions")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === "tabAdmissions"
                    ? "bg-red-600 text-white shadow-md shadow-red-500/25"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <i className="fa-solid fa-users"></i>
                <span>மாணவர் சேர்க்கைகள் பட்டியல்</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">{records.length}</span>
              </button>

              <button
                onClick={() => setActiveTab("tabAddManual")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === "tabAddManual"
                    ? "bg-red-600 text-white shadow-md shadow-red-500/25"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <i className="fa-solid fa-user-plus"></i>
                <span>புதிய சேர்க்கை உள்ளீடு</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCsv}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-200"
              >
                <i className="fa-solid fa-file-csv text-emerald-600"></i>
                <span>CSV Export</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-200"
              >
                <i className="fa-solid fa-print text-blue-600"></i>
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* TAB 1: ADMISSIONS TABLE VIEW */}
          {activeTab === "tabAdmissions" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative w-full sm:w-80">
                  <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, phone or course..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                  {[
                    { id: "all", label: "அனைத்தும்" },
                    { id: "New", label: "புதியவை (New)" },
                    { id: "Contacted", label: "தொடர்புகொள்ளப்பட்டது" },
                    { id: "Confirmed", label: "உறுதியானது" },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFilter(f.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                        filter === f.id
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase tracking-wider text-[11px]">
                        <th className="py-3.5 px-4">ID / திகதி</th>
                        <th className="py-3.5 px-4">மாணவர் விபரம்</th>
                        <th className="py-3.5 px-4">பயிற்சிப் பிரிவு</th>
                        <th className="py-3.5 px-4">விருப்ப நேரம்</th>
                        <th className="py-3.5 px-4">குறிப்பு</th>
                        <th className="py-3.5 px-4">நிலை (Status)</th>
                        <th className="py-3.5 px-4 text-right">செயல்கள்</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {filteredRecords.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-400 text-xs">
                            <i className="fa-solid fa-inbox text-3xl mb-2 block"></i>
                            மாணவர் பதிவுகள் எதுவும் காணப்படவில்லை.
                          </td>
                        </tr>
                      ) : (
                        filteredRecords.map((r) => {
                          let statusClass = "bg-amber-100 text-amber-800 border-amber-300";
                          if (r.status === "Contacted") statusClass = "bg-blue-100 text-blue-800 border-blue-300";
                          if (r.status === "Confirmed") statusClass = "bg-emerald-100 text-emerald-800 border-emerald-300";

                          const cleanPhone = (r.phone || "").replace(/[^0-9]/g, "");
                          const waPhone = cleanPhone.startsWith("0") ? "94" + cleanPhone.slice(1) : cleanPhone;

                          return (
                            <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-3.5 px-4 whitespace-nowrap">
                                <span className="font-black text-slate-900 block">{r.id}</span>
                                <span className="text-[11px] text-slate-400 font-normal">{r.date}</span>
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="font-bold text-slate-900 block">{r.name}</span>
                                <a href={`tel:${cleanPhone}`} className="text-[11px] text-red-600 hover:underline">
                                  {r.phone}
                                </a>
                              </td>
                              <td className="py-3.5 px-4 font-bold text-slate-800">{r.course}</td>
                              <td className="py-3.5 px-4 text-[11px] text-slate-600">{r.slot}</td>
                              <td className="py-3.5 px-4 text-[11px] text-slate-500 max-w-xs truncate">{r.note}</td>
                              <td className="py-3.5 px-4">
                                <select
                                  value={r.status}
                                  onChange={(e) => handleStatusChange(r.id, e.target.value as any)}
                                  className={`px-2 py-1 rounded-lg text-[11px] font-bold border ${statusClass} cursor-pointer focus:outline-none`}
                                >
                                  <option value="New">புதியது (New)</option>
                                  <option value="Contacted">தொடர்புகொள்ளப்பட்டது</option>
                                  <option value="Confirmed">உறுதியானது (Confirmed)</option>
                                </select>
                              </td>
                              <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                <div className="flex items-center justify-end gap-1.5">
                                  <a
                                    href={`https://wa.me/${waPhone}?text=${encodeURIComponent(
                                      `வணக்கம் ${r.name}! தினேஷ் லேணர்ஸ் (DMT DS:385) சார்பாக உங்களை தொடர்பு கொள்கிறோம்.`
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                                    title="Send WhatsApp Message"
                                  >
                                    <i className="fa-brands fa-whatsapp text-sm"></i>
                                  </a>
                                  <a
                                    href={`tel:${cleanPhone}`}
                                    className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                    title="Call Student"
                                  >
                                    <i className="fa-solid fa-phone text-xs"></i>
                                  </a>
                                  <button
                                    onClick={() => handleDelete(r.id)}
                                    className="p-1.5 rounded-lg bg-slate-100 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                    title="Delete Record"
                                  >
                                    <i className="fa-solid fa-trash text-xs"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MANUAL ADD STUDENT */}
          {activeTab === "tabAddManual" && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-5">
              <h3 className="text-lg font-black text-slate-900 font-heading">
                புதிய மாணவர் சேர்க்கையை கைமுறையாக உள்ளிடுக
              </h3>
              <form onSubmit={handleManualAdd} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">மாணவர் பெயர்*</label>
                  <input
                    type="text"
                    required
                    value={manualName}
                    onChange={(e) => setManualName(e.target.value)}
                    placeholder="Student Full Name"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">தொலைபேசி எண்*</label>
                  <input
                    type="tel"
                    required
                    value={manualPhone}
                    onChange={(e) => setManualPhone(e.target.value)}
                    placeholder="077 XXXXXXX"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">பயிற்சிப் பிரிவு</label>
                  <select
                    value={manualCourse}
                    onChange={(e) => setManualCourse(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
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
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">விருப்ப நேரம்</label>
                  <select
                    value={manualSlot}
                    onChange={(e) => setManualSlot(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="Morning (7:00 AM - 10:00 AM)">காலை (Morning 7:00 AM - 10:00 AM)</option>
                    <option value="Mid-day (10:00 AM - 2:00 PM)">நண்பகல் (Mid-day 10:00 AM - 2:00 PM)</option>
                    <option value="Evening (3:00 PM - 7:00 PM)">மாலை (Evening 3:00 PM - 7:00 PM)</option>
                    <option value="Weekend (Sat / Sun)">வார இறுதி (Weekend Only)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">மேலதிக குறிப்பு</label>
                  <textarea
                    rows={2}
                    value={manualNote}
                    onChange={(e) => setManualNote(e.target.value)}
                    placeholder="Special instructions or remarks..."
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-check"></i>
                  <span>மாணவர் பதிவை உறுதிப்படுத்துக</span>
                </button>
              </form>
            </div>
          )}

        </main>

      </div>
    </div>
  );
}
