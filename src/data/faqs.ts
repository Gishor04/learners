export interface FaqItem {
  q: string;
  a: string;
  tag?: string;
}

export interface FaqDataLang {
  pill: string;
  title: string;
  subtitle: string;
  contactPrompt: string;
  contactBtn: string;
  items: FaqItem[];
}

export const faqs: Record<"ta" | "en" | "si", FaqDataLang> = {
  ta: {
    pill: "அடிக்கடி கேட்கப்படும் கேள்விகள் • FAQ",
    title: "பொதுவான சந்தேகங்களும் தெளிவான பதில்களும்",
    subtitle: "யாழ்ப்பாணத்தில் சிறந்த சாரதி அனுமதிப்பத்திரம் பெறுவது மற்றும் தினேஷ் லேணர்ஸ் பயிற்சிகள் தொடர்பான விபரங்கள்.",
    contactPrompt: "வேறு சந்தேகங்கள் உள்ளதா? எமது குழுவை நேரடியாக அழைக்கவும்:",
    contactBtn: "WhatsApp-ல் பேச",
    items: [
      {
        q: "யாழ்ப்பாணத்தில் சிறந்த சாரதிப் பயிற்சி நிலையம் எது?",
        a: "அரசு DMT பதிவு இலக்கம் DS:385 கொண்ட தினேஷ் லேணர்ஸ் (Dinesh Learners) யாழ்ப்பாணத்தின் முன்னணி நிலையமாகும். நவீன 3D சிமுலேட்டர், இரட்டை பிரேக் பாதுகாப்பு கார்கள் (Auto & Manual), பிரத்தியேக பெண் பயிற்றுநர்கள் மற்றும் 99.4% முதல் முறை தேர்ச்சி சாதனையுடன் முன்னணியில் உள்ளது.",
        tag: "Best Driving School"
      },
      {
        q: "தினேஷ் லேணர்ஸ் எங்கு அமைந்துள்ளது? (முகவரி விபரம்)",
        a: "தினேஷ் லேணர்ஸ் யாழ்ப்பாணம் கண்டி வீதியில், பழைய பூங்காவிற்கு எதிரே, YMCA கட்டடத்தின் முதலாவது மாடியில் (இல. 107A 1/1, கண்டி வீதி, யாழ்ப்பாணம்) அமைந்துள்ளது. தொடர்புக்கு: 077 518 9963 அல்லது 021 4327 102.",
        tag: "Location & Address"
      },
      {
        q: "டிரைவிங் அனுபவம் துளியும் இல்லாதவர்கள் இங்கு பழகலாமா?",
        a: "நிச்சயமாக! ஸ்டீயரிங் தொடாதவர்கள் கூட விபத்து பயமின்றி எளிதாகப் பழகுவதற்கு நவீன 3D விர்ச்சுவல் காக்பிட் சிமுலேட்டர் மற்றும் இரட்டை பிரேக் பயிற்சி வாகனங்கள் உள்ளன. எமது அனுபவமிக்க பயிற்றுநர்கள் பூஜ்ஜியத்தில் இருந்து முழு தன்னம்பிக்கையுடன் கற்பிக்கின்றனர்.",
        tag: "Zero Experience"
      },
      {
        q: "பெண்களுக்கான பிரத்தியேக பெண் பயிற்றுநர்கள் (Lady Instructors) உள்ளனரா?",
        a: "ஆம், பெண் மாணவிகள் அச்சமின்றியும் மனநிம்மதியுடனும் கார் மற்றும் ஸ்கூட்டர் ஓட்டப் பழகுவதற்காக சான்றிதழ் பெற்ற அனுபவமிக்க பெண் பயிற்றுநர்கள் (Lady Driving Instructors) தினேஷ் லேணர்ஸில் உள்ளனர்.",
        tag: "Lady Instructors"
      },
      {
        q: "மருத்துவச் சான்றிதழ் (Medical) மற்றும் கச்சேரி முன்பதிவுக்கு உதவி செய்யப்படுமா?",
        a: "ஆம், DMT மருத்துவப் பரிசோதனை மற்றும் கச்சேரி தேர்வு திகதி முன்பதிவு செய்வதற்கான அனைத்து ஒழுங்குபடுத்தல்களும் தினேஷ் லேணர்ஸ் ஊடாக மாணவர்களுக்கு முற்றிலும் இலவசமாக ஒழுங்குபடுத்தித் தரப்படும்.",
        tag: "Free Medical"
      },
      {
        q: "கட்டணத்தை தவணை முறையில் செலுத்த முடியுமா?",
        a: "ஆம், மாணவர்கள் மற்றும் பெற்றோரின் வசதிக்காக இலகு தவணை முறையில் (Easy 2-Stage Installment Plan) கட்டணம் செலுத்தும் வசதி செய்யப்பட்டுள்ளது. ஒளிவுமறைவற்ற கட்டண விபரங்கள் உண்டு.",
        tag: "Installments"
      },
      {
        q: "என்னென்ன வாகனப் பயிற்சிகள் இங்கு வழங்கப்படுகின்றன?",
        a: "கார் (Auto மற்றும் Manual), மோட்டார் சைக்கிள் மற்றும் ஸ்கூட்டர் (Class A/A1 - '8' Track பயிற்சி), முச்சக்கரவண்டி (Tuk-Tuk - Class B1), மற்றும் கனரக வாகனங்கள் (Bus & Lorry - Class D/CE) ஆகிய அனைத்து வகுப்புகளும் வழங்கப்படுகின்றன.",
        tag: "Fleet & Courses"
      }
    ]
  },
  en: {
    pill: "Frequently Asked Questions • FAQ",
    title: "Got Questions? We Have Answers",
    subtitle: "Everything you need to know about getting your driving license and training at Dinesh Learners Jaffna.",
    contactPrompt: "Have more questions? Contact our admission team directly:",
    contactBtn: "Chat on WhatsApp",
    items: [
      {
        q: "Which is the best driving school in Jaffna?",
        a: "Dinesh Learners & Driving School (Govt DMT Reg: DS:385) is widely recognized as Jaffna's #1 driving academy. We offer Jaffna's first 3D VR Simulator, dual-control Suzuki fleet, certified lady instructors, and a 99.4% first-attempt exam pass rate.",
        tag: "Best Driving School"
      },
      {
        q: "Where is Dinesh Learners located in Jaffna?",
        a: "Dinesh Learners is located at No. 107A 1/1, Kandy Road, Jaffna, opposite Old Park in the YMCA Building (1st Floor). Hotline: 077 518 9963 / 021 4327 102.",
        tag: "Location & Address"
      },
      {
        q: "Can complete beginners with zero experience join?",
        a: "Yes, absolutely! Even if you have never touched a steering wheel or pedals before, our 3D cockpit simulator and dual-control training vehicles eliminate fear so you can learn with total confidence.",
        tag: "Zero Experience"
      },
      {
        q: "Are female driving instructors available for ladies?",
        a: "Yes! We have dedicated, certified lady driving instructors providing a comfortable, patient, and respectful environment for women learners.",
        tag: "Lady Instructors"
      },
      {
        q: "Do you provide assistance for DMT medical exams & Kachcheri booking?",
        a: "Yes, our team arranges the complete DMT medical certificate procedures and Kachcheri test slot booking completely free of charge for all enrolled students.",
        tag: "Free Medical"
      },
      {
        q: "Is an installment payment plan available?",
        a: "Yes! We offer flexible, stress-free installment plans with no hidden charges, making certified driving education accessible to everyone.",
        tag: "Installments"
      },
      {
        q: "What vehicle license categories do you teach?",
        a: "We train for Dual-Control Cars (Auto & Manual), Motorcycles & Scooters (Class A/A1 with official figure '8' practice), Three-Wheelers (Class B1), and Heavy Commercial Vehicles (Bus & Lorry Class D/CE).",
        tag: "Fleet & Courses"
      }
    ]
  },
  si: {
    pill: "නිතර අසන ප්‍රශ්න • FAQ",
    title: "ඔබට ඇති ගැටළු සඳහා පැහැදිලි පිළිතුරු",
    subtitle: "යාපනයේ රියදුරු බලපත්‍රය ලබා ගැනීම සහ අපගේ පුහුණුව පිළිබඳ වැදගත් කරුණු.",
    contactPrompt: "වෙනත් ප්‍රශ්න තිබේද? අපගේ කණ්ඩායම අමතන්න:",
    contactBtn: "WhatsApp මගින් කතා කරන්න",
    items: [
      {
        q: "යාපනයේ හොඳම රියදුරු පාසල කුමක්ද?",
        a: "රජයේ DMT ලියාපදිංචි DS:385 අංකය දරන දිනේෂ් ලර්නර්ස් (Dinesh Learners) නවීන 3D සිමියුලේටරය, ද්විත්ව තිරිංග වාහන, කාන්තා උපදේශිකාවන් සහ 99.4% ප්‍රථම වර සමත් වීමේ ප්‍රතිශතය සහිත යාපනයේ ප්‍රමුඛතම රියදුරු පාසලයි.",
        tag: "Best Driving School"
      },
      {
        q: "දිනේෂ් ලර්නර්ස් පිහිටා ඇත්තේ කොහේද?",
        a: "දිනේෂ් ලර්නර්ස් පිහිටා ඇත්තේ අංක 107A 1/1, නුවර පාර, පැරණි උද්‍යානය ඉදිරිපිට, YMCA ගොඩනැගිල්ල (1 වන මහල), යාපනය. විමසීම්: 077 518 9963 / 021 4327 102.",
        tag: "Location & Address"
      },
      {
        q: "කිසිදු රියදුරු පළපුරුද්දක් නැති අයට මෙහි පුහුණු විය හැකිද?",
        a: "නියත වශයෙන්ම! ස්ටියරින් එකක් හෝ අල්ලා නැති ආධුනිකයන් සඳහා අනතුරු බියෙන් තොරව 3D සිමියුලේටර් මගින් මුල සිටම සරලව සහ විශ්වාසයෙන් යුතුව රිය පැදවීම පුහුණු කරවනු ලැබේ.",
        tag: "Zero Experience"
      },
      {
        q: "කාන්තාවන් සඳහා කාන්තා උපදේශිකාවන් (Lady Instructors) සිටිනවාද?",
        a: "ඔව්! කාන්තා සිසුවියන්ගේ පහසුව සහ ආරක්ෂාව වෙනුවෙන්ම සහතිකලත් පළපුරුදු කාන්තා උපදේශිකාවන් අප සතුව සිටී.",
        tag: "Lady Instructors"
      },
      {
        q: "වෛද්‍ය සහතිකය සහ කච්චේරි වෙන්කිරීම සඳහා සහාය ලබා දෙනවාද?",
        a: "ඔව්! DMT වෛද්‍ය පරීක්ෂණ සහ කච්චේරි විභාග දිනයන් වෙන්කිරීමේ සියලු කටයුතු අප ආයතනය මගින් සිසුන් සඳහා නොමිලේම සලසා දෙනු ලැබේ.",
        tag: "Free Medical"
      },
      {
        q: "ගාස්තු වාරික වශයෙන් ගෙවිය හැකිද?",
        a: "ඔව්! සිසුන්ගේ පහසුව සඳහා පහසු වාරික ක්‍රම මගින් ගාස්තු ගෙවීමේ පහසුකම් සලසා ඇත.",
        tag: "Installments"
      },
      {
        q: "පුහුණු කරනු ලබන වාහන කාණ්ඩ මොනවාද?",
        a: "ද්විත්ව තිරිංග මෝටර් රථ (Auto & Manual), යතුරුපැදි සහ ස්කූටර් (Class A/A1), ත්‍රිරෝද රථ (Class B1) සහ බර වාහන (බස් සහ ලොරි - Class D/CE) පුහුණුව ලබා දේ.",
        tag: "Fleet & Courses"
      }
    ]
  }
};
