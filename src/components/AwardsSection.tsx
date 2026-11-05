"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface AwardItem {
  id: string;
  tagTa: string;
  tagEn: string;
  tagSi: string;
  titleTa: string;
  titleEn: string;
  titleSi: string;
  descTa: string;
  descEn: string;
  descSi: string;
  image: string;
  badgeColor: string;
  isInnovation?: boolean;
  externalLink?: string;
}

export default function AwardsSection() {
  const { lang, t, openEnrollModal } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<AwardItem | null>(null);

  const awards: AwardItem[] = [
    {
      id: "bgia-ceremony",
      tagTa: "🏆 சர்வதேச விருது 2026",
      tagEn: "🏆 International Award 2026",
      tagSi: "🏆 ජාත්‍යන්තර සම්මානය 2026",
      titleTa: "Business Global International Award (BGIA 2026)",
      titleEn: "Business Global International Award (BGIA 2026)",
      titleSi: "Business Global International Award (BGIA 2026)",
      descTa: "யாழ்ப்பாணம் திவ்யா மஹால் மண்டபத்தில் நடைபெற்ற சர்வதேச BGIA 2026 விருது விழாவில், சிறந்த வணிக சேவை மற்றும் தொழில்முனைவுக்காக தினேஷ் அவர்களுக்கு வழங்கப்பட்ட உயரிய சர்வதேச கௌரவிப்பு.",
      descEn: "Prestigious stage honor presented to Mr. Dinesh at Divya Mahal, Jaffna by the Business Global International Award Organization (BGIA 2026).",
      descSi: "යාපනය දිව්‍යා මහල් හි පැවති BGIA 2026 ජාත්‍යන්තර සම්මාන උළෙලේදී දිනේෂ් ලර්නර්ස් සහ රියල් එස්ටේට් ආයතනය වෙත පිරිනැමුණු විශේෂ සම්මානය.",
      image: "/assets/bgia-global-award-ceremony.jpg",
      badgeColor: "bg-amber-500 text-slate-950"
    },
    {
      id: "imc-trophy",
      tagTa: "🥇 தங்கக் கோப்பை • Community Service 2025",
      tagEn: "🥇 Gold Trophy • Community Service 2025",
      tagSi: "🥇 රන් කුසලානය • Community Service 2025",
      titleTa: "IMC Merit Award 2025 - Community Service (தங்கக் கோப்பை)",
      titleEn: "IMC Merit Award 2025 - Community Service (Gold Trophy)",
      titleSi: "IMC Merit Award 2025 - Community Service (රන් කුසලානය)",
      descTa: "International Merit Campus (IMC) நிறுவனத்தால் சமூக மேம்பாட்டிற்கான அர்ப்பணிப்பு மிக்க சேவைகளுக்காக திரு. அரியசீலன் தினேஷ் அவர்களுக்கு வழங்கப்பட்ட தங்க விருதுக் கோப்பை.",
      descEn: "Gold Merit Trophy presented to Mr. Ariyaseelan Dinesh by International Merit Campus (IMC) in recognition of outstanding community service 2025.",
      descSi: "යාපනය ප්‍රජාව වෙනුවෙන් සිදු කළ කැපකිරීම් සහ සමාජ සේවාව වෙනුවෙන් International Merit Campus වෙතින් අරියසීලන් දිනේෂ් මහතා වෙත පිරිනැමුණු රන් කුසලානය.",
      image: "/assets/award-imc-merit-trophy-2025.jpg",
      badgeColor: "bg-yellow-500 text-slate-950"
    },
    {
      id: "imc-certificate",
      tagTa: "📜 அதிகாரபூர்வ சான்றிதழ் • Excellence Award",
      tagEn: "📜 Certified Excellence Award",
      tagSi: "📜 නිල විශිෂ්ටතා සහතිකය",
      titleTa: "Community Service Excellence Award - நற்சான்றிதழ்",
      titleEn: "Community Service Excellence Award Certificate",
      titleSi: "Community Service Excellence Award සහතිකය",
      descTa: "International Merit Campus (IMC), Midwest College of London மற்றும் Soft View College இணைந்து திரு. அரியசீலன் தினேஷ் அவர்களின் தன்னலமற்ற சமூக பங்களிப்பிற்காக வழங்கிய கௌரவச் சான்றிதழ்.",
      descEn: "Official Excellence Award Certificate presented to Mr. Ariyaseelan Dinesh in recognition of outstanding contribution, compassion, and community service.",
      descSi: "International Merit Campus සහ Midwest College of London එක්ව ප්‍රදානය කළ ප්‍රජා සේවා විශිෂ්ටතා නිල සහතිකය.",
      image: "/assets/award-imc-certificate-2025.jpg",
      badgeColor: "bg-blue-600 text-white"
    },
    {
      id: "strength-lifting",
      tagTa: "🏅 விளையாட்டுத்துறை பதக்கம் • Sponsor Honor",
      tagEn: "🏅 Athletic Sponsor & Honor Medal",
      tagSi: "🏅 ක්‍රීඩා අනුග්‍රාහක පදක්කම",
      titleTa: "யாழ் மாவட்ட ஹேக் லிஃப்டிங் சாம்பியன்ஷிப் 2025 - பதக்கம் & நினைவுச் சின்னம்",
      titleEn: "Jaffna District Strength Lifting Championship 2025 Medal",
      titleSi: "යාපනය හැක් ලිෆ්ටින් ශූරතාවලිය 2025 පදක්කම",
      descTa: "இலங்கை பலம் தூக்கும் சம்மேளனத்துடன் இணைந்த யாழ் மாவட்ட ஹேக் லிஃப்டிங் சாம்பியன்ஷிப் 2025 (துரையப்பா விளையாட்டரங்கு) போட்டிக்கு அனுசரணை வழங்கியமைக்காக ஏ. தினேஷ் அவர்களுக்கு வழங்கப்பட்ட பதக்கம்.",
      descEn: "Official sponsor medal & memorial plaque awarded to A. Dinesh (Nelson Driving School) for supporting the Hack Lifting Championship at Dhuraiyappa Stadium.",
      descSi: "දුරෙයප්පා ක්‍රීඩාංගනයේ පැවති ශ්‍රී ලංකා ශක්ති එසවීමේ සම්මේලනය අනුබද්ධ තරගාවලියේ නිල අනුග්‍රාහකත්වය වෙනුවෙන් ඒ. දිනේෂ් මහතා වෙත පිරිනැමුණු පදක්කම.",
      image: "/assets/award-strength-lifting-2025.jpg",
      badgeColor: "bg-red-600 text-white"
    },
    {
      id: "smart-stove",
      tagTa: "💡 தொழில்நுட்ப புத்தாக்கம் • Green Innovation",
      tagEn: "💡 Green Technology Innovation",
      tagSi: "💡 හරිත තාක්ෂණික නව නිපැයුම",
      titleTa: "NGC Smart Stove - தினேஷின் நவீன அடுப்பு கண்டுபிடிப்பு",
      titleEn: "NGC Smart Stove - Innovation by Dinesh",
      titleSi: "NGC Smart Stove - දිනේෂ්ගේ නව නිපැයුම",
      descTa: "குறைந்த எரிபொருள் பயன்பாட்டில் அதிவேக சமையல் செய்யக்கூடிய ஸ்மார்ட் அடுப்பு. தினேஷ் அவர்களின் சொந்த முயற்சியில் உருவாக்கப்பட்ட இந்த கண்டுபிடிப்பை YouTube-ல் முழுமையாகப் பார்க்கலாம்.",
      descEn: "High-efficiency, smokeless biomass smart cooking technology innovated by Dinesh. Demonstrations and real tests available on the official YouTube channel.",
      descSi: "අවම ඉන්ධන සහ දුමාර රහිත ස්මාර්ට් ලිප. දිනේෂ්ගේ නව නිපැයුම් වීඩියෝ YouTube ඔස්සේ නරඹන්න.",
      image: "/assets/innovation-smart-stove.jpg",
      badgeColor: "bg-emerald-600 text-white",
      isInnovation: true,
      externalLink: "https://youtube.com/@ngcsmartstove6985?si=BDX_E-pg2wXvarU6"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-b border-amber-500/20">
      {/* Background Lighting Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full text-xs font-black text-amber-300 tracking-wide uppercase shadow-lg shadow-amber-500/10">
            <i className="fa-solid fa-trophy text-amber-400"></i>
            <span>{t.awardsBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300">
            {t.awardsTitle}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.awardsSubtitle}
          </p>
        </div>

        {/* FEATURE 1: Dedicated Award Ceremony Stage Video Player */}
        <div className="mb-16 bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl border border-amber-500/30 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-amber-500/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Video Player Box */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-amber-500/40 shadow-2xl group">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/assets/bgia-global-award-ceremony.jpg"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src="/assets/dinesh-bgia-award-ceremony.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-[11px] font-extrabold text-amber-300 flex items-center gap-1.5 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>{t.awardVideoBadge}</span>
                </div>
              </div>
            </div>

            {/* Video Details Description */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 rounded-xl text-xs font-black border border-amber-500/30">
                🏆 Stage Ceremony • Divya Mahal, Jaffna
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading leading-tight">
                {t.awardVideoTitle}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {t.awardVideoDesc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Business Global International Award</h5>
                    <p className="text-[11px] text-slate-400">யாழ்ப்பாணத்தில் தலைசிறந்த தொழில் ஆளுமைக்கான சர்வதேச அங்கீகாரம்.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Dedicated Community Service</h5>
                    <p className="text-[11px] text-slate-400">இலவச DMT மருத்துவம் மற்றும் பொது மக்கள் சேவைகளுக்கான விசேட கௌரவிப்பு.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => openEnrollModal("Awards & VIP Admission")}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black rounded-xl text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <i className="fa-solid fa-file-signature"></i>
                  <span>{t.btnEnroll}</span>
                </button>

                <a
                  href="https://youtube.com/@ngcsmartstove6985?si=BDX_E-pg2wXvarU6"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs shadow transition-all flex items-center gap-2"
                >
                  <i className="fa-brands fa-youtube"></i>
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* FEATURE 2: Grid of All Awards, Certificates, Medals & Innovations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer bg-slate-900/90 rounded-3xl border border-slate-800 hover:border-amber-500/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image Container with Zoom Hover */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={lang === "ta" ? item.titleTa : lang === "si" ? item.titleSi : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Badge */}
                  <span className={`absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-lg shadow-md ${item.badgeColor}`}>
                    {lang === "ta" ? item.tagTa : lang === "si" ? item.tagSi : item.tagEn}
                  </span>

                  {/* Click to Expand Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="bg-white/90 text-slate-950 text-xs font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <i className="fa-solid fa-expand"></i>
                      <span>பெரிதாக்க (Zoom)</span>
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-black text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {lang === "ta" ? item.titleTa : lang === "si" ? item.titleSi : item.titleEn}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {lang === "ta" ? item.descTa : lang === "si" ? item.descSi : item.descEn}
                  </p>
                </div>
              </div>

              {/* Bottom Action for Innovation / More */}
              <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                  <i className="fa-solid fa-circle-check text-xs text-emerald-400"></i>
                  <span>சரிபார்க்கப்பட்டது (Verified)</span>
                </span>

                {item.isInnovation && item.externalLink ? (
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] font-black bg-red-600 hover:bg-red-500 text-white px-2.5 py-1 rounded-lg transition-colors shadow"
                  >
                    <i className="fa-brands fa-youtube"></i>
                    <span>YouTube வீடியோ</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1 font-semibold">
                    <span>விபரம் பார்க்க</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Full View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-slate-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl overflow-hidden space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow z-10"
              title="Close"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            {/* Modal Image */}
            <div className="rounded-2xl overflow-hidden bg-black max-h-[60vh] flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={lang === "ta" ? selectedImage.titleTa : lang === "si" ? selectedImage.titleSi : selectedImage.titleEn}
                className="max-h-[60vh] w-auto object-contain rounded-2xl"
              />
            </div>

            {/* Modal Details */}
            <div className="space-y-2 pt-2">
              <span className={`inline-block text-[11px] font-black px-2.5 py-0.5 rounded-lg shadow-sm ${selectedImage.badgeColor}`}>
                {lang === "ta" ? selectedImage.tagTa : lang === "si" ? selectedImage.tagSi : selectedImage.tagEn}
              </span>
              <h3 className="text-xl font-black text-white">
                {lang === "ta" ? selectedImage.titleTa : lang === "si" ? selectedImage.titleSi : selectedImage.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === "ta" ? selectedImage.descTa : lang === "si" ? selectedImage.descSi : selectedImage.descEn}
              </p>

              {selectedImage.externalLink && (
                <div className="pt-3">
                  <a
                    href={selectedImage.externalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md transition-colors"
                  >
                    <i className="fa-brands fa-youtube"></i>
                    <span>YouTube சேனலில் நேரடி விளக்கம் காண</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
