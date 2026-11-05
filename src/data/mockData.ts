export interface BasePrice {
  price: number;
  name: string;
  nameTa: string;
  nameSi: string;
  lessons: number;
}

export const basePrices: Record<string, BasePrice> = {
  car_manual: { 
    price: 28000, 
    name: "Car (Manual - Dual Control)", 
    nameTa: "கார் (Manual - Dual Control)", 
    nameSi: "කාර් (මැනුවල් - Dual Control)", 
    lessons: 15 
  },
  car_auto: { 
    price: 26000, 
    name: "Car (Automatic - Dual Control)", 
    nameTa: "கார் (Auto - Dual Control)", 
    nameSi: "කාර් (ඔටෝ - Dual Control)", 
    lessons: 12 
  },
  bike: { 
    price: 12000, 
    name: "Motorcycle / Scooter", 
    nameTa: "மோட்டார் பைக் / ஸ்கூட்டர்", 
    nameSi: "යතුරුපැදි සහ ස්කූටර්", 
    lessons: 8 
  },
  tuktuk: { 
    price: 14000, 
    name: "Three-Wheeler (Tuk-Tuk)", 
    nameTa: "முச்சக்கரவண்டி (Tuk-Tuk)", 
    nameSi: "ත්‍රිරෝද රථය (Tuk-Tuk)", 
    lessons: 10 
  },
  bus: { 
    price: 38000, 
    name: "Heavy Vehicle (Bus & Truck)", 
    nameTa: "கனரக வாகனம் (பஸ் & லொறி)", 
    nameSi: "බර වාහන (බස් සහ ලොරි)", 
    lessons: 20 
  }
};

export interface QuizQuestion {
  id: number;
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
      "අන්තරාය අනතුරු ඇඟවීමේ සංඥාවකි",
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
      "தடைசெய்யப்பட்ட செயல் (Prohibitory Sign)",
      "பரிந்துரைக்கப்பட்ட வேகம்",
      "பாதசாரிகள் கடவை"
    ],
    optionsEn: [
      "Permitted Vehicle Action",
      "Prohibited / Forbidden Action",
      "Recommended Driving Speed",
      "Pedestrian Crossing Ahead"
    ],
    optionsSi: [
      "අවසර ලත් ක්‍රියාවකි",
      "තහනම් නියෝග සංඥාවකි (Prohibitory Sign)",
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
    signSvg: `
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="45" r="40" fill="#2563EB" stroke="#FFFFFF" stroke-width="4"/>
        <path d="M45 22L62 38M45 22L28 38M45 22V68" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    titleTa: "நீல நிற வட்ட வடிவில் வெள்ளை அம்பு குறி எதைக் குறிக்கிறது?",
    titleEn: "What does a circular blue sign with a white arrow indicate?",
    titleSi: "නිල් පැහැති වෘත්තාකාර සංඥාවක සුදු පැහැති ඊතලයකින් අදහස් වන්නේ කුමක්ද?",
    optionsTa: [
      "விரும்பினால் செல்லலாம்",
      "கட்டாயமாக அம்புக்குறி காட்டும் திசையில் செல்ல வேண்டும் (Mandatory Direction)",
      "வலதுபுறம் திரும்ப தடை",
      "வேகத்தை அதிகரிக்கவும்"
    ],
    optionsEn: [
      "Optional Lane Direction",
      "Mandatory Direction to Follow (Must proceed straight)",
      "Prohibited Right Turn",
      "Minimum Speed Limit"
    ],
    optionsSi: [
      "කැමති නම් යා හැක",
      "අනිවාර්යයෙන්ම ඊතලය පෙන්වන දිශාවට පමණක් ගමන් කළ යුතුය",
      "දකුණට හැරවීම තහනම්",
      "අවම වේග සීමාවකි"
    ],
    answer: 1,
    explanationTa: "நீல நிற வட்ட சமிக்கைகள் கட்டாயமாக பின்பற்றப்பட வேண்டிய ஒழுங்குகளை (Mandatory Signs) குறிக்கின்றன.",
    explanationEn: "Blue circular signs are mandatory regulatory signs instructing drivers of an action they MUST follow.",
    explanationSi: "නිල් පැහැති වෘත්තාකාර සංඥා මගින් රියදුරන් අනිවාර්යයෙන්ම පිළිපැදිය යුතු විධානයන් පෙන්නුම් කරයි."
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
    date: "30/10/2027 09:30 AM",
    name: "எஸ். சிவகுமார் (S. Sivakumaran)",
    phone: "0771234567",
    course: "Car (Dual-Control)",
    slot: "காலை (Morning 7am-10am)",
    note: "Alto Automatic கார் பயிற்சி. மாலை நேரம் வசதியா என கேட்கப்பட்டது.",
    status: "New"
  },
  {
    id: "ADM-102",
    date: "29/10/2027 04:15 PM",
    name: "டி. பிரியா (T. Priya)",
    phone: "0778901234",
    course: "3D Driving Simulator",
    slot: "மாலை (Evening 3pm-7pm)",
    note: "ஆரம்ப அச்சம் நீங்க 3D சிமுலேட்டர் டெமோ வகுப்பு கேட்கிறார்.",
    status: "Contacted"
  },
  {
    id: "ADM-103",
    date: "28/10/2027 11:20 AM",
    name: "எம். கபிலன் (M. Kabilan)",
    phone: "0765432109",
    course: "Three-Wheeler (Tuk Tuk)",
    slot: "நண்பகல் (Mid-day 10am-2pm)",
    note: "முச்சக்கரவண்டி உரிமம். முன்பணம் செலுத்திவிட்டார்.",
    status: "Confirmed"
  }
];
