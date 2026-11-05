export interface BasePrice {
  price: number;
  name: string;
  nameTa: string;
  nameSi: string;
  lessons: number;
  badge?: string;
}

export const basePrices: Record<string, BasePrice> = {
  van: { 
    price: 25000, 
    name: "Dual-Control Van / Car", 
    nameTa: "வான் / கார் (Dual Control)", 
    nameSi: "වෑන් / කාර් (Dual Control)", 
    lessons: 15,
    badge: "Class B"
  },
  bike: { 
    price: 12000, 
    name: "Motorcycle / Scooter", 
    nameTa: "மோட்டார் பைக் / ஸ்கூட்டர்", 
    nameSi: "යතුරුපැදි සහ ස්කූටර්", 
    lessons: 8,
    badge: "Class A / A1"
  },
  tuktuk: { 
    price: 15000, 
    name: "Three-Wheeler (Auto Tuk-Tuk)", 
    nameTa: "முச்சக்கரவண்டி (Auto / Tuk-Tuk)", 
    nameSi: "ත්‍රිරෝද රථය (Auto / Tuk-Tuk)", 
    lessons: 10,
    badge: "Class B1"
  },
  combo_bike_van: {
    price: 30000,
    name: "Bike + Van Combo",
    nameTa: "பைக் + வான் Combo",
    nameSi: "බයික් + වෑන් Combo",
    lessons: 20,
    badge: "Popular Combo"
  },
  combo_auto_van: {
    price: 30000,
    name: "Auto + Van Combo",
    nameTa: "ஓட்டோ + வான் Combo",
    nameSi: "ඔටෝ + වෑන් Combo",
    lessons: 22,
    badge: "Best Value"
  },
  combo_auto_bike: {
    price: 23000,
    name: "Auto + Bike Combo",
    nameTa: "ஓட்டோ + பைக் Combo",
    nameSi: "ඔටෝ + බයික් Combo",
    lessons: 16,
    badge: "Economy Combo"
  },
  combo_all: {
    price: 35000,
    name: "Auto + Bike + Van (All-in-One)",
    nameTa: "ஓட்டோ + பைக் + வான் (முழு தொகுப்பு)",
    nameSi: "ඔටෝ + බයික් + වෑන් (සම්පූර්ණ පැකේජය)",
    lessons: 28,
    badge: "Complete License Pack"
  },
  bus: { 
    price: 38000, 
    name: "Heavy Vehicle (TaTa / Lanka Ashok Leyland Bus)", 
    nameTa: "கனரக வாகனம் (TaTa / Ashok Leyland பஸ்)", 
    nameSi: "බර වාහන (TaTa / Ashok Leyland බස්)", 
    lessons: 20,
    badge: "Class D / CE"
  }
};

export interface QuizQuestion {
  id: number;
  category: string;
  categoryTa: string;
  categorySi: string;
  signSvg: string;
  titleTa: string;
  titleEn: string;
  titleSi: string;
  optionsTa: string[];
  optionsEn: string[];
  optionsSi: string[];
  answer: number;
  explanationTa: string;
  explanationEn: string;
  explanationSi: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Danger Warning",
    categoryTa: "முன்னெச்சரிக்கை சமிக்கை",
    categorySi: "අන්තරාය අනතුරු ඇඟවීමේ සංඥා",
    signSvg: `
      <svg width="100" height="90" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,5 95,85 5,85" fill="#FACC15" stroke="#DC2626" stroke-width="8" stroke-linejoin="round"/>
        <path d="M50 28V56M50 67V72" stroke="#000000" stroke-width="7" stroke-linecap="round"/>
      </svg>
    `,
    titleTa: "முக்கோண வடிவ மஞ்சள்/சிவப்பு சமிக்கை பலகை என்ன குறிக்கிறது?",
    titleEn: "What does an equilateral triangular road sign with a red border indicate?",
    titleSi: "රතු දාරයක් සහිත ත්‍රිකෝණාකාර මාර්ග සංඥාවකින් පෙන්නුම් කරන්නේ කුමක්ද?",
    optionsTa: [
      "கட்டாய கட்டளை சமிக்கை (Mandatory Sign)",
      "முன்னெச்சரிக்கை அல்லது ஆபத்து சமிக்கை (Danger Warning Sign)",
      "தகவல் அல்லது வழிகாட்டி சமிக்கை (Informative Sign)",
      "வேக எல்லை சமிக்கை (Speed Limit)"
    ],
    optionsEn: [
      "Mandatory Command Sign",
      "Danger Warning or Hazard Ahead Sign",
      "Informative / Directional Sign",
      "Speed Limit Enforcement Sign"
    ],
    optionsSi: [
      "අනිවාර්ය නියෝග සංඥාවකි",
      "අන්තරාය අනතුරු ඇඟවීමේ සංඥාවකි (Danger Warning)",
      "තොරතුරු හෝ මඟපෙන්වීමේ සංඥාවකි",
      "වේග සීමා සංඥාවකි"
    ],
    answer: 1,
    explanationTa: "இலங்கை மோட்டார் போக்குவரத்து விதிகளின்படி முக்கோண வடிவ சமிக்கைகள் வீதி ஆபத்துகள் பற்றிய முன்னெச்சரிக்கையை உணர்த்துகின்றன.",
    explanationEn: "Under the Sri Lanka Highway Code, triangular signs with red borders warn drivers of imminent road hazards ahead.",
    explanationSi: "ශ්‍රී ලංකා මාර්ග නීතියට අනුව රතු දාරයක් සහිත ත්‍රිකෝණාකාර සංඥා මගින් ඉදිරියේ ඇති අනතුරු පිළිබඳව අනතුරු අඟවයි."
  },
  {
    id: 2,
    category: "Prohibitory",
    categoryTa: "தடை உத்தரவு சமிக்கை",
    categorySi: "තහනම් නියෝග සංඥා",
    signSvg: `
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="45" r="40" fill="#FFFFFF" stroke="#DC2626" stroke-width="8"/>
        <line x1="20" y1="20" x2="70" y2="70" stroke="#DC2626" stroke-width="8" stroke-linecap="round"/>
        <path d="M45 25L58 38M45 25L32 38M45 25V65" stroke="#000000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    titleTa: "வட்ட வடிவ சிவப்பு எல்லையுடைய, குறுக்கு கோடுடைய சமிக்கை பலகை எதை குறிக்கிறது?",
    titleEn: "What does a circular sign with a red border and a diagonal slash indicate?",
    titleSi: "රතු දාරයක් සහ හරස් ඉරක් සහිත වෘත්තාකාර සංඥාවකින් අදහස් වන්නේ කුමක්ද?",
    optionsTa: [
      "வாகனம் செலுத்த அனுமதிக்கப்பட்ட பகுதி",
      "தடைசெய்யப்பட்ட செயல் - உள்நுழைய தடை (Prohibitory Sign)",
      "பரிந்துரைக்கப்பட்ட வேகம்",
      "பாதசாரிகள் கடவை"
    ],
    optionsEn: [
      "Permitted Vehicle Action",
      "Prohibited / Forbidden Action (e.g., No Entry)",
      "Recommended Driving Speed",
      "Pedestrian Crossing Ahead"
    ],
    optionsSi: [
      "අවසර ලත් ක්‍රියාවකි",
      "තහනම් නියෝග සංඥාවකි (Prohibitory - ඇතුළුවීම තහනම්)",
      "නිර්දේශිත වේග සීමාවකි",
      "පදික මාරුවකි"
    ],
    answer: 1,
    explanationTa: "வட்ட வடிவ சிவப்பு குறுக்கு கோடு கொண்டவை அந்த குறிப்பிட்ட செயல் (எ.கா: உள்நுழைவு தடை, திருப்பம் தடை) தடைசெய்யப்பட்டுள்ளது என்பதை குறிக்கும்.",
    explanationEn: "Red circular signs with diagonal crossbars represent prohibition (e.g. No Entry, No Right Turn).",
    explanationSi: "රතු දාරයක් සහ හරස් ඉරක් සහිත වෘත්තාකාර සංඥා මගින් කිසියම් ක්‍රියාවක් තහනම් කර ඇති බව පෙන්නුම් කරයි."
  },
  {
    id: 3,
    category: "Mandatory Direction",
    categoryTa: "கட்டாய உத்தரவு சமிக்கை",
    categorySi: "අනිවාර්ය නියෝග සංඥා",
    signSvg: `
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="45" r="40" fill="#2563EB" stroke="#FFFFFF" stroke-width="4"/>
        <path d="M45 22L62 38M45 22L28 38M45 22V68" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    titleTa: "நீல நிற வட்ட வடிவில் மேல்நோக்கிய வெள்ளை அம்பு குறி எதைக் குறிக்கிறது?",
    titleEn: "What does a circular blue sign with an upward white arrow indicate?",
    titleSi: "නිල් පැහැති වෘත්තාකාර සංඥාවක ඉහළට යොමු වූ සුදු පැහැති ඊතලයකින් අදහස් වන්නේ කුමක්ද?",
    optionsTa: [
      "விரும்பினால் செல்லலாம் (Optional)",
      "கட்டாயமாக நேராக மட்டுமே செல்ல வேண்டும் (Ahead Only Mandatory)",
      "வலதுபுறம் திரும்ப தடை",
      "வேகத்தை அதிகரிக்கவும்"
    ],
    optionsEn: [
      "Optional Lane Direction",
      "Mandatory: Straight Ahead Only",
      "Prohibited Right Turn",
      "Minimum Speed Limit"
    ],
    optionsSi: [
      "කැමති නම් යා හැක",
      "අනිවාර්යයෙන්ම කෙළින්ම පමණක් ගමන් කළ යුතුය",
      "දකුණට හැරවීම තහනම්",
      "අවම වේග සීමාවකි"
    ],
    answer: 1,
    explanationTa: "நீல நிற வட்ட சமிக்கைகள் கட்டாயமாக பின்பற்றப்பட வேண்டிய ஒழுங்குகளை (Mandatory Signs) குறிக்கின்றன.",
    explanationEn: "Blue circular signs are mandatory regulatory signs instructing drivers of an action they MUST follow.",
    explanationSi: "නිල් පැහැති වෘත්තාකාර සංඥා මගින් රියදුරන් අනිවාර්යයෙන්ම පිළිපැදිය යුතු විධානයන් පෙන්නුම් කරයි."
  },
  {
    id: 4,
    category: "Stop / Priority",
    categoryTa: "நிறுத்தல் சமிக்கை",
    categorySi: "නැවැත්වීමේ සංඥා",
    signSvg: `
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="26,10 64,10 80,26 80,64 64,80 26,80 10,64 10,26" fill="#DC2626" stroke="#FFFFFF" stroke-width="3"/>
        <text x="45" y="52" fill="#FFFFFF" font-size="20" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle">STOP</text>
      </svg>
    `,
    titleTa: "எண்கோண (Octagonal) சிவப்பு 'STOP' பலகை காணப்பட்டால் சாரதி என்ன செய்ய வேண்டும்?",
    titleEn: "When approaching an octagonal red 'STOP' sign, what is the driver required to do?",
    titleSi: "අෂ්ටාස්‍රාකාර රතු 'STOP' සංඥාවක් දුටු විට රියදුරු කළ යුත්තේ කුමක්ද?",
    optionsTa: [
      "வாகனத்தை மெதுவாக்கி தொடர்ந்து செல்லலாம்",
      "நிறுத்துக் கோட்டுக்கு முன்பாக வாகனத்தை முழுமையாக நிறுத்த வேண்டும் (Complete Stop)",
      "ஹோர்ன் அடித்துவிட்டு செல்ல வேண்டும்",
      "முன்னால் வாகனம் இல்லாவிட்டால் நிற்க தேவையில்லை"
    ],
    optionsEn: [
      "Slow down slightly and continue without stopping",
      "Come to a complete stop before the stop line and check both ways before proceeding",
      "Honk horn and proceed quickly",
      "Proceed without stopping if no cross traffic is visible"
    ],
    optionsSi: [
      "වාහනය වේගය අඩු කර ගමන් කිරීම",
      "නැවතුම් ඉරට පෙර වාහනය සම්පූර්ණයෙන්ම නවතා පරීක්ෂා කර ඉදිරියට යාම",
      "නලා ශබ්ද කර ඉදිරියට යාම",
      "වෙනත් වාහන නොමැති නම් නොනවත්වා යාම"
    ],
    answer: 1,
    explanationTa: "STOP பலகை உள்ள இடங்களில் வீதியில் வேறு வாகனங்கள் இல்லாத போதிலும் கூட வாகனத்தை முழுமையாக நிறுத்தி உறுதி செய்த பின்பே நகர வேண்டும்.",
    explanationEn: "Under DMT rules, a STOP sign legally mandates a complete stop before the line, regardless of whether traffic is visible.",
    explanationSi: "STOP සංඥාව ඇති තැනකදී වාහනය සම්පූර්ණයෙන්ම නවතා, මාර්ගය ආරක්ෂිත බව තහවුරු කර ගැනීමෙන් පසු පමණක් ඉදිරියට යා යුතුය."
  },
  {
    id: 5,
    category: "Pedestrian Crossing",
    categoryTa: "பாதசாரிகள் கடவை",
    categorySi: "පදික මාරුව",
    signSvg: `
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="45,8 85,78 5,78" fill="#FACC15" stroke="#DC2626" stroke-width="6" stroke-linejoin="round"/>
        <line x1="22" y1="68" x2="68" y2="68" stroke="#000000" stroke-width="4"/>
        <line x1="25" y1="62" x2="65" y2="62" stroke="#000000" stroke-width="4"/>
        <circle cx="45" cy="34" r="5" fill="#000000"/>
        <path d="M45 39V52M45 44L35 50M45 44L55 50M45 52L38 62M45 52L52 62" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `,
    titleTa: "பாதசாரிகள் கடவையை (Zebra Crossing) அணுகும்போது சாரதியின் கடமை என்ன?",
    titleEn: "What is the primary duty of a driver when approaching a pedestrian zebra crossing?",
    titleSi: "පදික මාරුවක් (Zebra Crossing) වෙත ළඟා වන විට රියදුරුගේ ප්‍රධාන වගකීම කුමක්ද?",
    optionsTa: [
      "வேகத்தை கூட்டி விரைவாக கடந்து செல்வது",
      "வேகத்தை குறைத்து, கடக்க காத்திருக்கும் பாதசாரிகளுக்கு முதலுரிமை அளிப்பது (Yield Priority)",
      "ஹோர்ன் அடித்து பாதசாரிகளை விலக சொல்வது",
      "பாதசாரிகள் கடவை மீது வாகனத்தை நிறுத்துவது"
    ],
    optionsEn: [
      "Accelerate to clear the crossing quickly before pedestrians step on it",
      "Slow down and give precedence / full priority to pedestrians waiting or crossing",
      "Sound horn aggressively to make pedestrians wait",
      "Park vehicle directly over the crossing stripes"
    ],
    optionsSi: [
      "වේගය වැඩි කර ඉක්මනින් පසු කර යාම",
      "වේගය අඩු කර පාර මාරුවන පදිකයින්ට ප්‍රමුඛතාවය දීම",
      "නලා ශබ්ද කර පදිකයින් ඉවත් කිරීම",
      "පදික මාරුව මත වාහනය නැවැත්වීම"
    ],
    answer: 1,
    explanationTa: "பாதசாரிகள் கடவையில் இறங்கும் பாதசாரிகளுக்கு எப்போதும் முதலுரிமை வழங்கப்பட வேண்டும். கடவை மீது வாகனத்தை நிறுத்துவது சட்டப்படி குற்றமாகும்.",
    explanationEn: "Pedestrians on or waiting at a zebra crossing have absolute right of way under Sri Lanka Highway Code Section 161.",
    explanationSi: "පදික මාරුවකදී පදිකයින්ට සම්පූර්ණ ප්‍රමුඛතාවය ලබා දිය යුතුය. ඒ මත වාහන නැවැත්වීම නීති විරෝධී වේ."
  },
  {
    id: 6,
    category: "Speed Limit",
    categoryTa: "வேக எல்லை சமிக்கை",
    categorySi: "වේග සීමා සංඥා",
    signSvg: `
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="45" r="38" fill="#FFFFFF" stroke="#DC2626" stroke-width="8"/>
        <text x="45" y="54" fill="#000000" font-size="28" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle">50</text>
      </svg>
    `,
    titleTa: "சிவப்பு வட்டத்தினுள் '50' என்று எழுதப்பட்ட பலகை எதைக் குறிக்கிறது?",
    titleEn: "What does the number '50' enclosed within a red circle signify?",
    titleSi: "රතු වෘත්තයක් තුළ '50' සලකුණු කර ඇති සංඥාවෙන් අදහස් වන්නේ කුමක්ද?",
    optionsTa: [
      "குறைந்தபட்ச வேகம் மணிக்கு 50 கி.மீ",
      "அனுமதிக்கப்பட்ட அதிஉயர் வேகம் மணிக்கு 50 கி.மீ (Maximum Speed Limit 50 km/h)",
      "இன்னும் 50 மீட்டரில் எரிபொருள் நிலையம் உள்ளது",
      "50 பயணிகள் மட்டுமே செல்லலாம்"
    ],
    optionsEn: [
      "Minimum required speed is 50 km/h",
      "Maximum legal speed limit is 50 km/h (Must not exceed)",
      "Fuel station located 50 metres ahead",
      "Maximum allowed vehicle capacity is 50 persons"
    ],
    optionsSi: [
      "අවම වේග සීමාව පැයට කි.මී. 50 කි",
      "උපරිම වේග සීමාව පැයට කි.මී. 50 කි (50 km/h)",
      "මීටර් 50 කින් ඉන්ධන පිරවුම්හලක් ඇත",
      "මගීන් 50 දෙනෙකුට පමණක් අවසර ඇත"
    ],
    answer: 1,
    explanationTa: "சிவப்பு வட்டத்திற்குள் உள்ள எண் அவ்வழியில் செல்லக்கூடிய அதிகபட்ச வேக எல்லையாகும் (Maximum Speed Limit).",
    explanationEn: "Red circular signs with numbers specify the absolute maximum speed allowed on that roadway.",
    explanationSi: "රතු වෘත්තයක ඇති අංකයෙන් එම මාර්ගයේ ධාවනය කළ හැකි උපරිම වේගය පැයට කිලෝමීටර් වලින් පෙන්නුම් කරයි."
  }
];

export const SECURE_ADMIN_AUTH_HASH = "86e8f08367d7ea37c788a85035398e7564fb4f3578cc704ea9a33f4daf3199cf";
export const SECURE_EXAM_AUTH_HASH = "f755a1dee29e880253839a6abf56efdadff9ce03dd637d90d028d6ca0b9a60d3";

export async function computeSha256(str: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

export interface StudentAdmission {
  id: string;
  date: string;
  name: string;
  phone: string;
  course: string;
  slot: string;
  note: string;
  status: "New" | "Contacted" | "Confirmed";
}

export const INITIAL_SAMPLE_ADMISSIONS: StudentAdmission[] = [
  {
    id: "ADM-101",
    date: "04/11/2027 09:30 AM",
    name: "எஸ். சிவகுமார் (S. Sivakumaran)",
    phone: "0771234567",
    course: "Van / Dual-Control Car (LKR 25,000)",
    slot: "காலை (Morning 7am-10am)",
    note: "வான்/கார் பயிற்சி. ஞாயிறு விடுமுறை என்பதால் சனி வகுப்பு விரும்புகிறார்.",
    status: "New"
  },
  {
    id: "ADM-102",
    date: "03/11/2027 04:15 PM",
    name: "டி. பிரியா (T. Priya)",
    phone: "0778901234",
    course: "Auto + Bike Combo (LKR 23,000)",
    slot: "மாலை (Evening 3pm-7pm)",
    note: "3D பெண் சிமுலேட்டர் டெமோ வகுப்பு பார்த்துள்ளார். இலவச மருத்துவ உதவி கேட்டுள்ளார்.",
    status: "Contacted"
  },
  {
    id: "ADM-103",
    date: "02/11/2027 11:20 AM",
    name: "எம். கபிலன் (M. Kabilan)",
    phone: "0765432109",
    course: "Auto + Bike + Van All-in-One (LKR 35,000)",
    slot: "நண்பகல் (Mid-day 10am-2pm)",
    note: "முழுமையான தொகுப்பு. இலவச கச்சேரி முன்பதிவு கோரியுள்ளார்.",
    status: "Confirmed"
  }
];
