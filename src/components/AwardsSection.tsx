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

interface AwardCeremonyVideo {
  id: "bgia" | "imc";
  tabTa: string;
  tabEn: string;
  tabSi: string;
  badgeTa: string;
  badgeEn: string;
  badgeSi: string;
  titleTa: string;
  titleEn: string;
  titleSi: string;
  descTa: string;
  descEn: string;
  descSi: string;
  src: string;
  poster: string;
}

interface CommunityVideo {
  id: string;
  labelTa: string;
  labelEn: string;
  labelSi: string;
  titleTa: string;
  titleEn: string;
  titleSi: string;
  descTa: string;
  descEn: string;
  descSi: string;
  src: string;
  poster: string;
}

export default function AwardsSection() {
  const { lang, t, openEnrollModal } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<AwardItem | null>(null);
  const [activeAwardVid, setActiveAwardVid] = useState<"bgia" | "imc">("bgia");
  const [activeCommunityVid, setActiveCommunityVid] = useState<string>("nallur");

  const awardCeremonyVideos: AwardCeremonyVideo[] = [
    {
      id: "bgia",
      tabTa: "🏆 BGIA 2026 விருது விழா",
      tabEn: "🏆 BGIA 2026 Gala Video",
      tabSi: "🏆 BGIA 2026 සම්මාන උළෙල",
      badgeTa: "🏆 BGIA 2026 சர்வதேச வணிக விருது விழா",
      badgeEn: "🏆 Business Global International Award Gala",
      badgeSi: "🏆 BGIA 2026 ජාත්‍යන්තර සම්මාන රාත්‍රිය",
      titleTa: "Business Global International Award (BGIA 2026) விழா மேடை",
      titleEn: "Business Global International Award (BGIA 2026) Gala Ceremony",
      titleSi: "Business Global International Award (BGIA 2026) සම්මාන උළෙල",
      descTa: "யாழ்ப்பாணம் திவ்யா மஹால் மண்டபத்தில் நடைபெற்ற சர்வதேச BGIA 2026 வணிக விருது விழாவில் சிறந்த தொழில்முனைவு மற்றும் சாரதிப் பயிற்சி சேவைக்காக தினேஷ் அவர்களுக்கு வழங்கப்பட்ட சர்வதேச கௌரவிப்பு நேரடி வீடியோ.",
      descEn: "Prestigious stage honor presented to Mr. Dinesh at Divya Mahal, Jaffna by the Business Global International Award Organization (BGIA 2026).",
      descSi: "යාපනය දිව්‍යා මහල් හි පැවති BGIA 2026 ජාත්‍යන්තර සම්මාන උළෙලේදී දිනේෂ් ලර්නර්ස් වෙත පිරිනැමුණු විශේෂ ගෞරව සම්මානය.",
      src: "/assets/dinesh-bgia-award-ceremony.mp4",
      poster: "/assets/bgia-global-award-ceremony.jpg"
    },
    {
      id: "imc",
      tabTa: "🥇 IMC Merit விருது விழா",
      tabEn: "🥇 IMC Merit Award Stage Video",
      tabSi: "🥇 IMC Merit සම්මාන උළෙල",
      badgeTa: "🥇 International Merit Campus மேடை விழா",
      badgeEn: "🥇 International Merit Campus Gala Video",
      badgeSi: "🥇 International Merit Campus සම්මාන උළෙල",
      titleTa: "International Merit Campus - சமூக சேவகர் விருது மேடை தருணம்",
      titleEn: "International Merit Award Ceremony - Stage Honor for Mr. Dinesh",
      titleSi: "International Merit Campus - දිනේෂ් මහතා සම්මානයෙන් පිදුම් ලැබූ අවස්ථාව",
      descTa: "International Merit Campus பிரம்மாண்ட மேடையில் திரு. தினேஷ் அவர்கள் கலந்துகொண்டு சமூக சேவகர் கௌரவத்தை ஏற்றுக்கொண்ட நேரடி வீடியோ.",
      descEn: "Live stage celebration honoring Mr. Dinesh at the International Merit Campus gala ceremony for outstanding social work.",
      descSi: "International Merit Campus සම්මාන රාත්‍රියේදී දිනේෂ් මහතා ගෞරව සම්මානයෙන් පිදුම් ලැබූ සජීවී දර්ශනය.",
      src: "/assets/dinesh-imc-award-ceremony.mp4",
      poster: "/assets/poster-imc-award-ceremony.jpg"
    }
  ];

  const currentAwardVid = awardCeremonyVideos.find((v) => v.id === activeAwardVid) || awardCeremonyVideos[0];

  const communityVideos: CommunityVideo[] = [
    {
      id: "nallur",
      labelTa: "🛕 நல்லூர் கார்த்திகை உபயம்",
      labelEn: "🛕 Nallur Temple Ubayam",
      labelSi: "🛕 නල්ලූර් කෝවිල් දානය",
      titleTa: "நல்லூர் கந்தன் 18ம் நாள் கார்த்திகைத் திருவிழா அன்னதான உபயம்",
      titleEn: "Nallur Kandaswamy Kovil Festival Annadhanam Community Service",
      titleSi: "නල්ලූර් කන්දස්වාමි කෝවිල් උත්සව ප්‍රජා දානමය සේවාව",
      descTa: "நல்லூர் கந்தசுவாமி ஆலய கார்த்திகைத் திருவிழாவில் பக்தர்களுக்கான தாகசாந்தி மற்றும் அன்னதான உபயம் வழங்கிய தருணம்.",
      descEn: "Devotional community service and refreshment distribution during the holy Nallur Kandaswamy Kovil Festival in Jaffna.",
      descSi: "නල්ලූර් කෝවිල් මංගල්‍යයේදී බැතිමතුන් සඳහා සිදුකළ දානමය සත්කාරය.",
      src: "/assets/dinesh-nallur-kandhan-community-service.mp4",
      poster: "/assets/poster-nallur-kandhan.jpg"
    },
    {
      id: "cricket-trophy",
      labelTa: "🏆 கிரிக்கெட் வெற்றிக்கிண்ணம்",
      labelEn: "🏆 Cricket Trophy Presentation",
      labelSi: "🏆 ක්‍රිකට් කුසලාන ප්‍රදානය",
      titleTa: "யாழ் மாவட்ட கிரிக்கெட் சாம்பியன்ஷிப் வெற்றிக்கிண்ணம் வழங்கல்",
      titleEn: "Jaffna District Cricket Championship Trophy Presentation on Field",
      titleSi: "යාපනය ක්‍රිකට් ශූරතාවලියේ ජයග්‍රාහී කුසලාන ප්‍රදානය",
      descTa: "விளையாட்டு மைதானத்தில் வெற்றிபெற்ற இளம் வீரர்களுக்கு தினேஷ் லேணர்ஸ் சார்பில் சாம்பியன்ஷிப் வெற்றிக்கிண்ணம் வழங்கி கௌரவிக்கப்பட்ட தருணம்.",
      descEn: "On-field championship trophy presentation by Dinesh Learners celebrating victorious youth cricket teams.",
      descSi: "ක්‍රීඩාංගනයේදී ජයග්‍රාහී තරුණ ක්‍රීඩකයන්ට කුසලාන ප්‍රදානය කළ අවස්ථාව.",
      src: "/assets/dinesh-cricket-championship-presentation.mp4",
      poster: "/assets/poster-cricket-championship.jpg"
    },
    {
      id: "interfaith",
      labelTa: "🕊️ மதநல்லிணக்க நிகழ்வு",
      labelEn: "🕊️ Interfaith Harmony",
      labelSi: "🕊️ ආගමික සහජීවනය",
      titleTa: "செட்டித்தெரு மெதடிஸ்ட் மிசன் பாடசாலை மதநல்லிணக்க நிகழ்வு",
      titleEn: "Interfaith Harmony Event at Settitheru Methodist Mission Tamil School",
      titleSi: "සෙට්ටිතෙරු මෙතෝදිස්ත මිෂන් දෙමළ පාසලේ ආගමික සහජීවන උළෙල",
      descTa: "மதநல்லிணக்க விசேட நிகழ்வில் நெல்சன் லேணர்ஸ் உரிமையாளர் திரு. தினேஷ் அவர்கள் சிறப்பு விருந்தினராகக் கலந்துகொண்ட நேரடி வீடியோ.",
      descEn: "Honorable presence of Mr. Dinesh as Chief Guest at the Interfaith Harmony Celebration at Settitheru Methodist Mission School.",
      descSi: "ආගමික සහජීවන වැඩසටහනේ ප්‍රධාන ආරාධිත අමුත්තා ලෙස දිනේෂ් මහතා සහභාගී වූ අවස්ථාව.",
      src: "/assets/dinesh-interfaith-community-event.mp4",
      poster: "/assets/poster-interfaith-event.jpg"
    },
    {
      id: "sports-jubilee",
      labelTa: "🏏 உதய ஒளி கிரிக்கெட் அனுசரணை",
      labelEn: "🏏 Udhaya Oli Jubilee",
      labelSi: "🏏 උදය ඔලි සංවත්සරය",
      titleTa: "நாவலடி உதய ஒளி சனசமூக நிலையம் 80வது ஆண்டு கிரிக்கெட் துடுப்பாட்டப் போட்டி",
      titleEn: "Udhaya Oli 80th Jubilee Cricket Tournament Official Sponsorship",
      titleSi: "උදය ඔලි 80 වන සංවත්සර ක්‍රිකට් තරගාවලියේ නිල අනුග්‍රාහකත්වය",
      descTa: "இளைஞர் மற்றும் விளையாட்டுத்துறை வளர்ச்சிக்காக கிரிக்கெட் போட்டிக்கு நெல்சன் லேணர்ஸ் சார்பில் அனுசரணை வழங்கியமைக்கான நேரடி வீடியோ.",
      descEn: "Official sponsorship by Dinesh/Nelson Learners empowering youth athletics and community sports in Jaffna.",
      descSi: "යාපනය තරුණ ප්‍රජාව වෙනුවෙන් පැවති ක්‍රිකට් තරගාවලියේ නිල අනුග්‍රාහකත්වය.",
      src: "/assets/dinesh-sports-cricket-sponsorship.mp4",
      poster: "/assets/poster-sports-sponsorship.jpg"
    },
    {
      id: "kilinochchi",
      labelTa: "🏛️ அரச அதிபர் கௌரவிப்பு",
      labelEn: "🏛️ Kilinochchi Secretariat",
      labelSi: "🏛️ කිලිනොච්චි දිසාපති හමුව",
      titleTa: "கிளிநொச்சி மாவட்ட அரசாங்க அதிபர் செயலக கௌரவிப்பு தருணம்",
      titleEn: "Kilinochchi District Government Secretariat Presentation",
      titleSi: "කිලිනොච්චි දිස්ත්‍රික් ලේකම් කාර්යාල හමුව",
      descTa: "கிளிநொச்சி மாவட்ட அரச அதிபரிடம் சமூக சேவைகள் மற்றும் கல்வி வழிகாட்டல் விபரங்கள் சமர்ப்பிக்கப்பட்ட தருணம்.",
      descEn: "Presentation of community service and driving education initiatives to the Kilinochchi District Government Agent.",
      descSi: "කිලිනොච්චි දිසාපතිතුමිය වෙත ප්‍රජා සේවා තොරතුරු ඉදිරිපත් කිරීමේ අවස්ථාව.",
      src: "/assets/dinesh-kilinochchi-secretariat-event.mp4",
      poster: "/assets/poster-kilinochchi-event.jpg"
    }
  ];

  const currentComVid = communityVideos.find((v) => v.id === activeCommunityVid) || communityVideos[0];

  const awards: AwardItem[] = [
    {
      id: "imc-social-worker-2026",
      tagTa: "🏆 சர்வதேச விருது 2026 • Social Worker Award",
      tagEn: "🏆 International Award 2026 • Social Worker Award",
      tagSi: "🏆 ජාත්‍යන්තර සම්මානය 2026 • සමාජ සේවා සම්මානය",
      titleTa: "International Merit Award 2026 - Social Worker Award (விருதுக் கோப்பை)",
      titleEn: "International Merit Award 2026 - Social Worker Award (Trophy Plaque)",
      titleSi: "International Merit Award 2026 - Social Worker Award (සම්මාන ඵලකය)",
      descTa: "International Merit Campus வழங்கிய 2026-ம் ஆண்டிற்கான உயரிய சமூக சேவகர் விருதுக் கோப்பை. யாழ்ப்பாண மக்களுக்கு ஆற்றிய சிறந்த சமூக மேம்பாடு மற்றும் நற்பணிகளுக்காக திரு. அரியசீலன் தினேஷ் (Dinesh Learners) அவர்களுக்கு வழங்கப்பட்டது.",
      descEn: "Prestigious International Merit Award 2026 (Social Worker Award) presented to Mr. Ariyaseelan Dinesh (Dinesh Learners) by International Merit Campus for exceptional societal upliftment.",
      descSi: "යාපනය ප්‍රජාව වෙනුවෙන් සිදු කළ කැපකිරීම් වෙනුවෙන් International Merit Campus වෙතින් අරියසීලන් දිනේෂ් මහතා වෙත පිරිනැමුණු 2026 විශිෂ්ට සමාජ සේවා සම්මාන ඵලකය.",
      image: "/assets/award-imc-social-worker-trophy-2026.jpg",
      badgeColor: "bg-amber-400 text-slate-950 font-black"
    },
    {
      id: "fhro-director-appointment-2026",
      tagTa: "📜 உத்தியோகபூர்வ நியமனச் சான்றிதழ் • Director FHRO",
      tagEn: "📜 Official Appointment Certificate • Director FHRO",
      tagSi: "📜 නිල පත්වීම් සහතිකය • අධ්‍යක්ෂක FHRO",
      titleTa: "சுதந்திர மனித உரிமைகள் அமைப்பு (FHRO) - யாழ் மாவட்ட இயக்குநர் நியமனம்",
      titleEn: "Freedom Human Rights Organization (FHRO) - Director Appointment Certificate",
      titleSi: "නිදහස් මානව හිමිකම් සංවිධානය (FHRO) - යාපනය අධ්‍යක්ෂ පත්වීම",
      descTa: "சுதந்திர மனித உரிமைகள் அமைப்பின் (FHRO Sri Lanka) யாழ் மாவட்ட சுற்றாடல் பாதுகாப்பு இயக்குநராகவும் (Director Environmental Conservation) மற்றும் யாழ் ஆயர் இல்ல பொதுநிலையினர் பிரதிநிதியாகவும் (Lay Representative) நியமிக்கப்பட்ட உத்தியோகபூர்வ நற்சான்றிதழ் மற்றும் அடையாள அட்டை.",
      descEn: "Official Appointment Certificate and Director ID Card certifying Mr. A. Dinesh as Director Environmental Conservation (Jaffna Province) for Freedom Human Rights Organization (FHRO), along with Episcopal Installation Lay Representative credential.",
      descSi: "නිදහස් මානව හිමිකම් සංවිධානයේ (FHRO) යාපනය පරිසර සංරක්ෂණ අධ්‍යක්ෂකවරයා ලෙස අරියසීලන් දිනේෂ් මහතා පත් කිරීමේ නිල සහතිකය සහ හැඳුනුම්පත.",
      image: "/assets/award-fhro-director-appointment-2026.jpg",
      badgeColor: "bg-rose-600 text-white font-bold"
    },
    {
      id: "bgia-ceremony",
      tagTa: "🏆 சர்வதேச விருது 2026 • Gala Ceremony",
      tagEn: "🏆 International Award 2026 • Gala Ceremony",
      tagSi: "🏆 ජාත්‍යන්තර සම්මානය 2026",
      titleTa: "Business Global International Award (BGIA 2026)",
      titleEn: "Business Global International Award (BGIA 2026)",
      titleSi: "Business Global International Award (BGIA 2026)",
      descTa: "யாழ்ப்பாணம் திவ்யா மஹால் மண்டபத்தில் நடைபெற்ற சர்வதேச BGIA 2026 விருது விழாவில், சிறந்த வணிக சேவை மற்றும் தொழில்முனைவுக்காக தினேஷ் அவர்களுக்கு வழங்கப்பட்ட உயரிய சர்வதேச கௌரவிப்பு.",
      descEn: "Prestigious stage honor presented to Mr. Dinesh at Divya Mahal, Jaffna by the Business Global International Award Organization (BGIA 2026).",
      descSi: "යාපනය දිව්‍යා මහල් හි පැවති BGIA 2026 ජාත්‍යන්තර සම්මාන උළෙලේදී දිනේෂ් ලර්නර්ස් සහ රියල් எஸ்டேட் ආයතනය වෙත පිරිනැමුණු විශේෂ සම්මානය.",
      image: "/assets/bgia-global-award-ceremony.jpg",
      badgeColor: "bg-amber-500 text-slate-950 font-bold"
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
      badgeColor: "bg-yellow-500 text-slate-950 font-bold"
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
      badgeColor: "bg-blue-600 text-white font-bold"
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
      badgeColor: "bg-red-600 text-white font-bold"
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
      badgeColor: "bg-emerald-600 text-white font-bold",
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
        <div className="mb-14 bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl border border-amber-500/30 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-amber-500/5">
          {/* Award Video Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                {lang === "ta" ? "அதிகாரபூர்வ விருது விழா வீடியோக்கள்" : lang === "si" ? "නිල සම්මාන උළෙල වීඩියෝ" : "Official Award Gala Videos"}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {awardCeremonyVideos.map((av) => (
                <button
                  key={av.id}
                  onClick={() => setActiveAwardVid(av.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                    activeAwardVid === av.id
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20"
                      : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <i className="fa-solid fa-trophy text-[10px]"></i>
                  <span>{lang === "ta" ? av.tabTa : lang === "si" ? av.tabSi : av.tabEn}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Video Player Box */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-amber-500/40 shadow-2xl group">
                <video
                  key={currentAwardVid.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={currentAwardVid.poster}
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={currentAwardVid.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-[11px] font-extrabold text-amber-300 flex items-center gap-1.5 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>{lang === "ta" ? currentAwardVid.badgeTa : lang === "si" ? currentAwardVid.badgeSi : currentAwardVid.badgeEn}</span>
                </div>
              </div>
            </div>

            {/* Video Details Description */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 rounded-xl text-xs font-black border border-amber-500/30">
                🏆 {lang === "ta" ? "விருது விழா மேடை" : lang === "si" ? "සම්මාන උළෙල වේදිකාව" : "Stage Gala Ceremony"}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading leading-tight">
                {lang === "ta" ? currentAwardVid.titleTa : lang === "si" ? currentAwardVid.titleSi : currentAwardVid.titleEn}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {lang === "ta" ? currentAwardVid.descTa : lang === "si" ? currentAwardVid.descSi : currentAwardVid.descEn}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{lang === "ta" ? "சரிபார்க்கப்பட்ட சிறப்பு விருது" : lang === "si" ? "විශිෂ්ටතා සම්මානය" : "Verified Excellence Award"}</h5>
                    <p className="text-[11px] text-slate-400">{lang === "ta" ? "யாழ்ப்பாணத்தில் தலைசிறந்த தொழில் ஆளுமை மற்றும் பொதுநல சேவைக்கான உயரிய அங்கீகாரம்." : lang === "si" ? "යාපනයේ විශිෂ්ටතම ව්‍යාපාරික නායකත්වය සහ ප්‍රජා සේවය වෙනුවෙන් පිරිනැමුණු උසස් ඇගයීම." : "Prestigious recognition honoring exceptional business leadership and public community service in Jaffna."}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{lang === "ta" ? "அர்ப்பணிப்புமிக்க மக்கள் சேவை" : lang === "si" ? "කැපවූ ප්‍රජා සේවාව" : "Dedicated Community Service"}</h5>
                    <p className="text-[11px] text-slate-400">{lang === "ta" ? "இலவச DMT மருத்துவம், இளைஞர் விளையாட்டு அனுசரணை மற்றும் மதநல்லிணக்க பணிகள்." : lang === "si" ? "නොමිලේ DMT වෛද්‍ය සහාය, තරුණ ක්‍රීඩා අනුග්‍රාහකත්වය සහ ආගමික සහජීවන සේවා." : "Free DMT medical checkup assistance, youth sports sponsorships, and active interfaith harmony initiatives."}</p>
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
                  <span>{lang === "ta" ? "YouTube சேனல்" : lang === "si" ? "YouTube නාලිකාව" : "YouTube Channel"}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* FEATURE 2: Community Service & Public Honors Videos (Sound Cleaned) */}
        <div className="mb-16 bg-slate-900/80 rounded-3xl border border-slate-800 p-4 sm:p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <i className="fa-solid fa-users"></i>
                <span>{lang === "ta" ? "சமூகப் பங்களிப்பு & மக்கள் பணிகள்" : lang === "si" ? "ප්‍රජා සේවා සහ සමාජ සත්කාර" : "Community Welfare & Social Impact"}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {lang === "ta" ? "மதநல்லிணக்கம் & மக்கள் சேவை நிகழ்வுகள்" : lang === "si" ? "ප්‍රජා සේවා සහ ආගමික සහජීවන වැඩසටහන්" : "Community Welfare & Interfaith Harmony Sessions"}
              </h3>
            </div>

            {/* Video Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {communityVideos.map((cv) => (
                <button
                  key={cv.id}
                  onClick={() => setActiveCommunityVid(cv.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeCommunityVid === cv.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black shadow-lg"
                      : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <i className="fa-solid fa-play text-[10px]"></i>
                  <span>{lang === "ta" ? cv.labelTa : lang === "si" ? cv.labelSi : cv.labelEn}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Active Video Player */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-cyan-500/30 shadow-xl">
                <video
                  key={currentComVid.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={currentComVid.poster}
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={currentComVid.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <span className="absolute top-3 left-3 bg-cyan-600/90 backdrop-blur text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow pointer-events-none">
                  {lang === "ta" ? currentComVid.labelTa : lang === "si" ? currentComVid.labelSi : currentComVid.labelEn}
                </span>
              </div>
            </div>

            {/* Active Video Details */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-lg sm:text-xl font-black text-white">
                {lang === "ta" ? currentComVid.titleTa : lang === "si" ? currentComVid.titleSi : currentComVid.titleEn}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === "ta" ? currentComVid.descTa : lang === "si" ? currentComVid.descSi : currentComVid.descEn}
              </p>
            </div>
          </div>
        </div>

        {/* FEATURE 3: Grid of All Awards, Certificates, Medals & Innovations */}
        <div className="mb-4">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 className="text-2xl font-black text-white">
              {lang === "ta" ? "அங்கீகாரங்கள் & சான்றிதழ்கள் தொகுப்பு" : lang === "si" ? "සම්මාන සහ සහතික එකතුව" : "Awards & Verified Credentials Showcase"}
            </h3>
            <p className="text-xs text-slate-400">
              {lang === "ta" ? "அனைத்து விருதுகளையும் பெரிதாக்கப் படங்களின் மீது கிளிக் செய்யவும்." : lang === "si" ? "විශාල කර බැලීමට ඡායාරූප මත ක්ලික් කරන්න." : "Click on any image to zoom in full resolution."}
            </p>
          </div>

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
                        <span>{lang === "ta" ? "பெரிதாக்க" : lang === "si" ? "විශාල කරන්න" : "Zoom"}</span>
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
                    <span>{lang === "ta" ? "சரிபார்க்கப்பட்டது (Verified)" : lang === "si" ? "තහවුරු කර ඇත (Verified)" : "Verified"}</span>
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
                      <span>{lang === "ta" ? "YouTube வீடியோ" : lang === "si" ? "YouTube වීඩියෝව" : "YouTube Video"}</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1 font-semibold">
                      <span>{lang === "ta" ? "விபரம் பார்க்க" : lang === "si" ? "විස්තර බලන්න" : "View Details"}</span>
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
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
                    <span>{lang === "ta" ? "YouTube சேனலில் விளக்கம் காண" : lang === "si" ? "YouTube නාලිකාවෙන් නරඹන්න" : "Watch on YouTube Channel"}</span>
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
