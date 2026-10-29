// Dinesh Learners & Driving School Interactive Application Logic (100% Trilingual: Tamil | English | Sinhala)

let currentLang = 'ta'; // Default language

const translations = {
  ta: {
    // Top Announcement Bar
    topNotice: "📢 2026 புதிய சாரதிப் பயிற்சி வகுப்புகள் ஆரம்பம்! நவீன சிமுலேட்டர் & பிராக்டிகல் பயிற்சி | உடனே முன்பதிவு செய்யுங்கள்!",
    hoursText: "திங்கள் - ஞாயிறு: காலை 7:00 - மாலை 7:00",
    newBadge: "புதியது 2026",
    
    // Header & Navigation
    brandTitle: "தினேஷ் லேணர்ஸ்",
    brandSubtitle: "தினேஷ் சாரதிப் பயிற்சி நிலையம் • யாழ்ப்பாணம் (DMT: DS:385)",
    navHome: "முகப்பு",
    navZeroExp: "பயிற்சி சிறப்பம்சம்",
    navCourses: "பயிற்சி வாகனங்கள்",
    navSimulator: "சிமுலேட்டர் நுட்பம்",
    navGallery: "நேரடி புகைப்படங்கள்",
    navFees: "கட்டண விபரம்",
    navQuiz: "வீதி சமிக்கைகள்",
    navWhyUs: "எமது சிறப்புகள்",
    navRealEstate: "ரியல் எஸ்டேட்",
    navContact: "தொடர்பு",
    btnCall: "அழைக்க: 077 9227 102",
    btnEnroll: "இப்போதே பதிவு செய்",
    
    // Hero Section
    heroPill: "யாழ்ப்பாணத்தின் முன்னணி நவீன சாரதிப் பயிற்சி நிலையம்",
    heroTitlePrefix: "நம்பிக்கையுடன் ",
    heroTitleHighlight: "சாரதி அனுமதிப்பத்திரம்",
    heroTitleSuffix: " பெறுங்கள்!",
    heroDesc: "தினேஷ் லேணர்ஸ் (DMT DS:385) – நவீன கம்ப்யூட்டர் 3D சிமுலேட்டர் மற்றும் இரட்டை பிரேக் வாகனங்கள் மூலம் பாதுகாப்பான, தொழில்முறை சாரதிப் பயிற்சி. 100% பரீட்சை வெற்றி உத்தரவாதம்!",
    heroTagSim: "நவீன 3D சிமுலேட்டர்",
    heroTagDual: "இரட்டை பிரேக் வாகனங்கள்",
    heroTagLady: "பெண் பயிற்றுநர்கள் வசதி",
    heroTagDays: "7 நாட்களும் (காலை 7 - மாலை 7)",
    btnHeroTrial: "இலவச சிமுலேட்டர் சோதனை",
    btnHeroWhatsapp: "WhatsApp-ல் உரையாட",
    heroLocation: "YMCA கட்டடம், கண்டி வீதி, யாழ்ப்பாணம்",
    heroLabBadge: "நேரடி ஆய்வகப் புகைப்படம்",
    heroLabRig: "Logitech G29 விர்ச்சுவல் காக்பிட்",
    heroLabFeatures: "பந்தய இருக்கை • Force Feedback ஸ்டீயரிங் • 6-Speed கியர்",
    cardFleetTitle: "இரட்டை பிரேக் பாதுகாப்பு வாகனங்கள்",
    cardFleetSub: "Auto & Manual கார்கள் • சான்றிதழ் பெற்ற பயிற்றுநர்கள்",
    cardHighTech: "நவீன தொழில்நுட்பம்",
    cardSimTitle: "3D விர்ச்சுவல் காக்பிட் சிமுலேட்டர்",
    cardPassTitle: "பரீட்சை சாதனை",
    cardPassSub: "99.4% முதல் முறை தேர்ச்சி",
    
    // Zero Driving Experience USP Section
    zeroExpBadge: "டிரைவிங் துளியும் தெரியாதவர்களுக்கான விசேட பயிற்சி!",
    zeroExpTitle: "டிரைவிங் தெரியவில்லையா? பயம் வேண்டாம் – இங்கு வந்து இலகுவாகப் பழகுங்கள்!",
    zeroExpDesc: "ஸ்டீயரிங் தொட்டதே இல்லையா? கிளட்ச், கியர் சமநிலை தெரியாதா? விபத்து பயமின்றி எமது நேரடி 3D காக்பிட் சிமுலேட்டரில் பூஜ்ஜியத்தில் இருந்து ஆரம்பியுங்கள். முழுமையான தன்னம்பிக்கை வந்த பிறகு நிஜ வீதிக்குச் செல்லலாம்!",
    zeroExpP1Title: "பூஜ்ஜிய அனுபவத்தோடு வரலாம்",
    zeroExpP1Desc: "முன்பின் கார் ஓட்டிய பழக்கம் இல்லாவிட்டாலும் தொடக்கத்திலிருந்து கற்பிக்கிறோம்.",
    zeroExpP2Title: "சிமுலேட்டரில் அச்சமில்லா பயிற்சி",
    zeroExpP2Desc: "எஞ்சின் நின்றுவிடும் அல்லது விபத்து ஏற்படும் என்ற பயமே கிடையாது.",
    zeroExpP3Title: "நேரடி வகுப்பறை சமிக்கை பயிற்சி",
    zeroExpP3Desc: "உண்மையான வீதி சமிக்கை பலகைகளுடன் எழுத்து பரீட்சைக்கு முழு பயிற்சி.",
    btnZeroExpTrial: "இன்றே இலவச அறிமுக வகுப்பில் இணையுங்கள்!",
    labTheoryLabel: "தியரி வகுப்பறை",
    labSimLabel: "3D சிமுலேட்டர் கூடம்",
    
    // Stats Section
    statStudents: "வெற்றிபெற்ற மாணவர்கள்",
    statPassRate: "முதல் முறை தேர்ச்சி விகிதம்",
    statExperience: "வருட அனுபவம் & நற்பெயர்",
    statDmt: "அரசாங்க பதிவு எண்",
    
    // Gallery Section
    galleryPill: "நேரடி புகைப்படங்கள்",
    galleryTitle: "எமது நேரடி பயிற்சி வளாகப் புகைப்படங்கள்",
    gallerySubtitle: "யாழ்ப்பாணம் YMCA-ல் அமைந்துள்ள எமது உண்மையான 3D சிமுலேட்டர் லேப், பயிற்சி வாகனங்கள் மற்றும் வகுப்பறை!",
    g1Badge: "நேரடி பயிற்சி",
    g1Caption: "நேரடி 3D சிமுலேட்டர் பயிற்சி அமர்வு",
    g1Sub: "பயிற்றுநர் வழிகாட்டலுடன் மாணவர் நேரடி பயிற்சி",
    g2Badge: "YMCA கிளை",
    g2Caption: "யாழ்ப்பாணம் YMCA-ல் அமைந்துள்ள எமது பிரதான நுழைவாயில்",
    g2Sub: "கண்டி வீதி, பழைய பூங்கா முன்பாக, YMCA கட்டடம்",
    g3Badge: "பயிற்சி வாகனம்",
    g3Caption: "தினேஷ் லேணர்ஸ் இரட்டை பிரேக் பயிற்சி வாகனம்",
    g3Sub: "அங்கீகரிக்கப்பட்ட Dual-Control பாதுகாப்பு வாகனம்",
    g4Badge: "வாகன வரிசை",
    g4Caption: "பயிற்சி மோட்டார் பைக், ஸ்கூட்டர் & முச்சக்கரவண்டி",
    g4Sub: "DMT களப் பயிற்சிக்கான நவீன வாகனங்கள்",
    g5Badge: "முச்சக்கரவண்டி",
    g5Caption: "முச்சக்கரவண்டி (Tuk-Tuk) நேரடி பயிற்சி வாகனம்",
    g5Sub: "நகர வீதிகளுக்கான சிறப்பு வழிகாட்டல் பயிற்சி",
    g6Badge: "சிமுலேட்டர் காக்பிட்",
    g6Caption: "Logitech G29 விர்ச்சுவல் காக்பிட் & ஸ்டீயரிங் சிமுலேட்டர்",
    g6Sub: "உண்மையான கிளட்ச், பிரேக், கியர் & பந்தய இருக்கை",
    g7Badge: "தியரி வகுப்பறை",
    g7Caption: "DMT வீதி சமிக்கைகள் கொண்ட மாதிரி வகுப்பறை",
    g7Sub: "அபாய எச்சரிக்கை & கட்டாய சமிக்கை பலகைகளுடன் வகுப்பு",
    g8Badge: "அரசு பதிவு: DS:385",
    g8Caption: "அரசாங்க அங்கீகாரம் பெற்ற உத்தியோகபூர்வ பதாகை",
    g8Sub: "யாழ்ப்பாணத்தின் முன்னணி அரசு பதிவுபெற்ற சாரதிப் பள்ளி",
    g9Badge: "VR பயிற்சி",
    g9Caption: "மெய்நிகர் VR ஹெட்செட் சிமுலேட்டர் பயிற்சி",
    g9Sub: "உரிமையாளர் நட. தினேஷ் 3D VR சிமுலேட்டரை பரீட்சித்துப் பார்க்கிறார்",
    g10Badge: "ஆரம்ப விழா",
    g10Caption: "நவீன தொழில்நுட்ப சாரதிப் பள்ளி ஆரம்ப விழா அழைப்பிதழ்",
    g10Sub: "இல. 107A, 1/1, கண்டி வீதி, யாழ்ப்பாணம் (2-03-2026)",
    
    // Courses & Fleet Section
    coursePill: "பயிற்சி வாகனங்கள்",
    courseSectionTitle: "எமது பயிற்சிப் பிரிவுகள் & வாகனங்கள்",
    courseSectionSubtitle: "மோட்டார் பைக் முதல் பஸ் வரை அனைத்து வகை வாகனங்களுக்கும் பயிற்சி வழங்கப்படுகிறது.",
    tabAll: "அனைத்தும்",
    tabCar: "கார் (Dual-Control)",
    tabBike: "மோட்டார் பைக்",
    tabTuk: "முச்சக்கரவண்டி",
    tabBus: "கனரக பஸ் & லொறி",
    tabSim: "நவீன சிமுலேட்டர்",
    
    // Course Cards
    c1Title: "கார் சாரதிப் பயிற்சி (Dual Control)",
    c1Sub: "Car Driving Course (Manual & Auto Transmission)",
    c1Desc: "இரட்டை பிரேக் மற்றும் கிளட்ச் பாதுகாப்புடன் கூடிய சொகுசு கார்கள். வீதி ஓட்டுதல், ரிவர்ஸ், பேரலல் பார்கிங், மற்றும் DMT பரீட்சைக்கான விசேட பயிற்சி.",
    c1f1: "Suzuki Alto & WagonR இரட்டை பிரேக் கார்கள்",
    c1f2: "பெண் பயிற்சியாளர்கள் (Lady Instructors) வசதி",
    c1f3: "DMT மாதிரி மைதான ஒத்திகை பயிற்சி",
    
    c2Title: "நவீன 3D சிமுலேட்டர் பயிற்சி",
    c2Sub: "3D Driving Simulator Cockpit Training",
    c2Desc: "வீதிக்கு செல்லும் முன் ஸ்டீயரிங் கட்டுப்பாடு, கியர் மாற்றம், இரவு நேரம், மழை, மற்றும் திடீர் தடைகளை விபத்து பயமின்றி மெய்நிகர் வடிவில் கற்பிக்கப்படுகிறது.",
    c2f1: "விபத்து அச்சம் மற்றும் பயத்தைப் போக்கும் பயிற்சி",
    c2f2: "உண்மையான ஸ்டீயரிங், பெடல் & கியர் உணர்வு",
    c2f3: "ஆரம்ப மாணவர்களுக்கு இலவச டெமோ அமர்வு",
    
    c3Title: "மோட்டார் சைக்கிள் & ஸ்கூட்டர்",
    c3Sub: "Motorbike & Scooter Practical Training",
    c3Desc: "கிளட்ச் சமநிலை, வளைவுகளில் இலகுவாக திரும்புதல், மற்றும் DMT பரீட்சைக்கான '8' வடிவ களப் பயிற்சி முழுமையாக பயிற்றுவிக்கப்படும்.",
    c3f1: "DMT '8' ட்ராக் மாதிரி மைதான பயிற்சி",
    c3f2: "ஸ்கூட்டர் மற்றும் கியர் பைக்குகள் கிடைக்கும்",
    c3f3: "வேகமான அனுமதிப்பத்திர செயல்முறை",
    
    c4Title: "முச்சக்கரவண்டி (Tuk-Tuk)",
    c4Sub: "Three-Wheeler (Tuk-Tuk) Driving License",
    c4Desc: "யாழ்ப்பாணத்தின் நகர மற்றும் நெரிசல் வீதிகளில் பாதுகாப்பாக ஓட்டுவதற்கான தனிப்பயனாக்கப்பட்ட முச்சக்கரவண்டி பயிற்சி.",
    c4f1: "ஹாண்டில்பார் கட்டுப்பாடு & கியர் மாற்றம்",
    c4f2: "ரிவர்ஸ் பார்கிங் & குறுகிய வீதி ஓட்ட பயிற்சி",
    c4f3: "வணிக சாரதி அனுமதிப்பத்திர வழிகாட்டல்",
    
    c5Title: "கனரக பஸ் & லொறி பயிற்சி",
    c5Sub: "Commercial Bus & Truck Driver Training",
    c5Desc: "வெளிநாட்டு வேலைவாய்ப்புகள் மற்றும் உள்ளூர் போக்குவரத்து நிறுவனங்களுக்கான தொழில்முறை கனரக வாகன சாரதிப் பயிற்சி.",
    c5f1: "ஏர் பிரேக் (Air Brake) தொழில்நுட்ப பயிற்சி",
    c5f2: "நீண்ட தூர நெடுஞ்சாலை ஓட்டுநர் பயிற்சி",
    c5f3: "மத்திய கிழக்கு & சர்வதேச தகுதிக்கான வழிகாட்டல்",
    
    c6Badge: "சிறந்த சேமிப்பு காம்போ",
    c6Title: "முழுமையான காம்போ பேக்கேஜ்",
    c6Sub: "Car (Dual) + Motorbike + Theory & Medical Test",
    c6Desc: "ஒரே பதிவில் கார் மற்றும் பைக் இரண்டிற்கும் அனுமதிப்பத்திரம் பெறுங்கள். மருத்துவ சான்றிதழ் உதவி, சிமுலேட்டர் இலவசம்!",
    c6f1: "Car Manual/Auto + Motorbike License",
    c6f2: "4 இலவச 3D சிமுலேட்டர் அமர்வுகள்",
    c6f3: "DMT மருத்துவப் பரீட்சை வழிகாட்டல்",
    c6f4: "2 தவணைகளில் கட்டணம் செலுத்தும் வசதி",
    
    feeStartFrom: "கட்டணம்",
    btnRegisterCourse: "பதிவு செய்க",
    btnBookCombo: "இப்போதே முன்பதிவு",
    
    // Badges inside course cards
    badgeClassB: "Class B (இலகு வாகனம்)",
    badgeGear: "Auto / Manual",
    badgePopular: "பிரபலம்",
    badgeRealHardware: "நேரடி வன்பொருள் சிமுலேட்டர்",
    badgeLogitech: "Logitech G29",
    badgeHighTech: "உயர் தொழில்நுட்பம்",
    badgeDemo: "டெமோ",
    badgeFreeTrial: "இலவச சோதனை",
    badgeClassA: "Class A / A1 (மோட்டார் பைக்)",
    badgeGearedAuto: "கியர் & ஆட்டோ",
    badgeClassB1: "Class B1 (முச்சக்கரவண்டி)",
    badgeCommercial: "வர்த்தகம்",
    badgeClassD: "Class D / CE (கனரக வாகனம்)",
    badgeHeavyFleet: "கனரக வாகனங்கள்",
    
    // Simulator Section
    simTitle: "யாழ்ப்பாணத்தின் முதல் அதிநவீன 3D சிமுலேட்டர் பயிற்சி!",
    simDesc: "வீதிக்குச் செல்வதற்கு முன் விபத்து அச்சமின்றி, இரவு நேரம், மழைக்காலம், மற்றும் சவாலான வீதிச் சூழல்களை 3D மெய்நிகர் சிமுலேட்டரில் கற்றுக்கொள்ளுங்கள்.",
    simCockpitBadge: "Logitech G29 விர்ச்சுவல் காக்பிட் சிமுலேட்டர்",
    simB1Title: "பூஜ்ஜிய விபத்து அபாயம்",
    simB1Desc: "பயமின்றி கிளட்ச், கியர் மற்றும் ஸ்டீயரிங் திருப்பங்களைக் கற்கலாம்.",
    simB2Title: "பல்வேறு வானிலை சூழல்கள்",
    simB2Desc: "மழை, பனிமூட்டம், மற்றும் இரவு நேர வீதிகளை நேரடியாக உணரலாம்.",
    simB3Title: "கம்ப்யூட்டர் பகுப்பாய்வு",
    simB3Desc: "பிரேக் வேகம் மற்றும் எதிர்வினை நேரத்தை கணினி வரைபடம் காட்டும்.",
    simB4Title: "இலவச சோதனை அமர்வு",
    simB4Desc: "எமது மாணவர்களுக்கு கட்டணமின்றி சிமுலேட்டர் வழங்கப்படுகிறது.",
    btnSimDemo: "இலவச சிமுலேட்டர் அமர்வை முன்பதிவு செய்",
    simLabLive: "செயற்பாட்டில் உள்ள சிமுலேட்டர் கூடம்",
    simLabLocation: "YMCA கட்டடம் 1ம் மாடி • யாழ்ப்பாணம்",
    simActiveStatus: "செயற்பாட்டில் உள்ளது",
    simWheelTag: "Force Feedback ஸ்டீயரிங்",
    simSuspensionTag: "இயந்திரவியல் கற்றல் பலகை",
    
    // Fee Calculator
    calcPill: "வெளிப்படையான கட்டணங்கள்",
    calcTitle: "கட்டண கணிப்பான் & திட்டங்கள்",
    calcSubtitle: "உங்கள் தேவைகேற்ப வாகனங்களை தெரிவு செய்து உடனடி கட்டண விபரத்தை பெற்றுக்கொள்ளுங்கள்.",
    calcStep1: "1. முதன்மை வாகனம் தெரிவு (Select Vehicle)",
    calcStep2: "2. கூடுதல் சேவைகள் (Optional Add-ons)",
    calcOptMedical: "DMT மருத்துவ சான்றிதழ் உதவி (Medical Test)",
    calcOptSim: "4x தீவிர 3D சிமுலேட்டர் அமர்வுகள்",
    calcOptFast: "Fast-Track விசேட விரைவுப் பயிற்சி (VIP Batch)",
    calcSelectedLabel: "தேர்வு செய்யப்பட்ட விபரம்",
    calcTotalLabel: "மதிப்பீட்டுக் கட்டணம்:",
    calcInstLabel: "எளிய 2 கட்ட தவணை வசதி:",
    calcInst1Label: "1ம் தவணை (பதிவின் போது):",
    calcInst2Label: "2ம் தவணை (பரீட்சைக்கு முன்):",
    btnBookThisPlan: "இந்தத் திட்டத்தில் பதியவும்",
    calcNoHidden: "மறைமுகக் கட்டணங்கள் எதுவும் இல்லை • DMT DS:385",
    
    // Road Signs Quiz
    quizPill: "DMT எழுத்துப்பரீட்சை மாதிரி வினாக்கள்",
    quizTitle: "சாரதி பரீட்சை வீதி சமிக்கை வினாடி வினா",
    quizSubtitle: "DMT எழுத்துப்பரீட்சைக்கு தயாராகுங்கள்! எளிய முறையில் சமிக்கைகளை கற்றுக்கொள்ளுங்கள்.",
    quizRuleBadge: "இலங்கை போக்குவரத்து விதிகள்",
    quizNextBtn: "அடுத்த வினா (Next Question)",
    quizClassroomTitle: "எமது நேரடி தியரி வகுப்பறை",
    quizClassroomSub: "அனைத்து வீதி சமிக்கைகளையும் நேரடியாகக் கற்றுக்கொள்ளுங்கள்",
    
    // 4-Step Roadmap
    stepPill: "படிமுறை வழிகாட்டல்",
    stepTitle: "சாரதி அனுமதிப்பத்திரம் பெறும் எளிய படிமுறைகள்",
    stepSubtitle: "பதிவு முதல் லைசென்ஸ் கைக்கு வரும் வரை தினேஷ் லேணர்ஸ் உங்கள் பக்கத்தில் நிற்கும்!",
    s1Title: "1. பதிவு & மருத்துவப் பரீட்சை",
    s1Desc: "அடையாள அட்டைப் பிரதியுடன் இலகுவாக இணையுங்கள். DMT மருத்துவச் சான்றிதழை எமது வழிகாட்டலுடன் பெறுங்கள்.",
    s2Title: "2. எழுத்துப் பரீட்சை & L-அனுமதி",
    s2Desc: "வீதிச் சமிக்கை மாதிரி வினாத்தாள்கள் மற்றும் வகுப்புகளுடன் எழுத்துப் பரீட்சையில் முதல் முறையிலேயே வெற்றிபெறுங்கள்.",
    s3Title: "3. சிமுலேட்டர் & நேரடிப் பயிற்சி",
    s3Desc: "3D சிமுலேட்டரில் ஆரம்பித்து, இரட்டை பிரேக் வாகனங்கள் மூலம் யாழ்ப்பாண வீதிகளில் நிஜ ஓட்டுனர் பயிற்சியைப் பெறுங்கள்.",
    s4Title: "4. DMT ட்ரையல் & லைசென்ஸ்!",
    s4Desc: "அரசாங்க மோட்டார் வாகன திணைக்கள மாதிரி மைதானத்தில் இறுதிப் பயிற்சி பெற்று, உறுதியான வெற்றியை அடையுங்கள்!",
    
    // Why Choose Us
    whyPill: "எமது சிறப்புகள்",
    whyTitle: "ஏன் தினேஷ் லேணர்ஸ்-ஐ தெரிவு செய்ய வேண்டும்?",
    whySubtitle: "நம்பகமான அனுபவம், நவீன வசதிகள் மற்றும் முழுமையான மாணவர் பாதுகாப்பு!",
    w1Title: "நவீன 3D சிமுலேட்டர்",
    w1Desc: "யாழ்ப்பாணத்திலேயே முதன்முறையாக கம்ப்யூட்டர் சிமுலேட்டர் மூலம் ஆபத்தில்லாத, மெய்நிகர் ஓட்டுனர் பயிற்சி அனுபவம்.",
    w2Title: "அங்கீகரிக்கப்பட்ட பயிற்றுநர்கள்",
    w2Desc: "மோட்டார் போக்குவரத்து திணைக்களத்தின் (DMT) முழுமையான அங்கீகாரம் மற்றும் 15+ வருட கற்பித்தல் அனுபவம் கொண்ட நிபுணர்கள்.",
    w3Title: "Lady Instructors வசதி",
    w3Desc: "பெண்கள் மற்றும் மாணவிகள் எவ்வித தயக்கமுமின்றி நிதானமாக கற்றுக்கொள்ள அனுபவமுள்ள பெண் பயிற்சியாளர்கள் உள்ளனர்.",
    w4Title: "வாரம் 7 நாட்களும் (காலை 7 - மாலை 7)",
    w4Desc: "பல்கலைக்கழக மாணவர்கள், உத்தியோகத்தர்கள் மற்றும் தொழிலதிபர்களுக்கான நெகிழ்வான பயிற்சி நேர தெரிவுகள்.",
    w5Title: "முழுமையான Dual Control கார்கள்",
    w5Desc: "Dual-Pedal பிரேக் சிஸ்டம் கொண்ட புதிய கார்கள் மூலம் 100% பாதுகாப்பான வீதிப் பயிற்சி உறுதி செய்யப்படுகிறது.",
    w6Title: "மையப் பகுதி அமைவிடம் (YMCA Jaffna)",
    w6Desc: "யாழ்ப்பாண கண்டி வீதி பழைய பூங்கா முன்பாக, பேருந்து மற்றும் புகையிரத நிலையங்களுக்கு மிக அருகாமையில் அமைந்துள்ளது.",
    
    // Testimonials
    revPill: "மாணவர் அனுபவம்",
    reviewTitle: "எமது மாணவர்களின் அனுபவப் பகிர்வு",
    reviewSubtitle: "தினேஷ் லேணர்ஸ் மூலம் முதலாவது முயற்சியிலேயே சாரதி அனுமதிப்பத்திரம் பெற்ற யாழ்ப்பாண மாணவர்கள்.",
    r1Text: "\"சிமுலேட்டரில் முதல்ல பிராக்டிஸ் பண்ணியதால மெயின் ரோட்ல கார் ஓட்டும்போது எந்த பயமும் இல்லை. டிரையல் டெஸ்ட்ல முதல் அட்டெம்ப்ட்லயே பாஸ் பண்ணிட்டேன்! தினேஷ் சாருக்கு மிக்க நன்றி!\"",
    r1Name: "சுரேஷ் பாபு",
    r1Place: "நவாலி, யாழ்ப்பாணம் • Car + Bike",
    r2Text: "\"பெண்களுக்கு லேடி இன்ஸ்ட்ரக்டர் இருந்தது ரொம்ப வசதியா இருந்தது. பொறுமையா கத்துக்கொடுத்தாங்க. நேரம் காலையில 7 மணிக்கே இருக்கறதால காலேஜ் போறதுக்கு முன்னாடியே கிளாஸ் முடிஞ்சிடும்.\"",
    r2Name: "பிரியங்கா கே.",
    r2Place: "நல்லூர், யாழ்ப்பாணம் • Car Auto",
    r3Text: "\"ஹெவி வெஹிக்கிள் பஸ் லைசென்ஸ் எடுத்தேன். ஏர் பிரேக், ரிவர்சிங் எல்லாம் தெளிவா சொல்லி தந்தாங்க. வெளிநாட்டு வேலைக்கு அப்ளை பண்ணுறதுக்கு உடனே கைக்கு லைசென்ஸ் கிடைச்சிடுச்சு.\"",
    r3Name: "ஜெகதீஸ் ஆர்.",
    r3Place: "சாவகச்சேரி • Heavy Bus Class D",
    
    // Contact Section
    contactPill: "தொடர்புகளுக்கு",
    contactTitle: "நேரில் வாருங்கள் அல்லது தொடர்புகொள்ளுங்கள்",
    contactSubtitle: "உங்கள் சாரதி கனவை நனவாக்க தினேஷ் லேணர்ஸ் குழுவினர் எப்போதும் உதவத் தயாராக உள்ளனர்.",
    cPhoneLabel: "தொலைபேசி எண்கள் (Call Us)",
    cWaLabel: "WhatsApp நேரடி அரட்டை",
    cWaBtn: "Chat Now",
    cLocLabel: "முகவரி (Branch Location)",
    addressText: "இல. 107A, 1/1, கண்டி வீதி, யாழ்ப்பாணம். (பழைய பூங்கா முன்பாக, YMCA கட்டடம், 1ம் மாடி)",
    cHoursLabel: "செயற்பாட்டு நேரம் (Operating Hours)",
    cHoursSub: "வாரத்தின் 7 நாட்களும் திறந்திருக்கும்",
    ownerText: "உரிமையாளர்: நட. தினேஷ்",
    mapLocationText: "கண்டி வீதி • பழையபூங்கா முன்பாக • YMCA யாழ்ப்பாணம் (1ம் மாடி)",
    callUsText: "அழைக்க: 021 4327 102 / 077 9227 102",
    footerQuickLinks: "பயிற்சி வாகனங்கள்",
    footerSupport: "மாணவர் உதவிகள்",
    footerContact: "தொடர்புகளுக்கு",
    footerRights: "© 2026 தினேஷ் லேணர்ஸ் (DMT DS:385). அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    footerLocation: "யாழ்ப்பாணம் • இலங்கை",
    
    // Real Estate Section
    reBadge: "அரச அங்கீகாரம் பெற்ற முகவர் • Government Approved",
    reBadgeShort: "தினேஷ் ரியல் எஸ்டேட் (Buy & Sell)",
    reTitle: "தினேஷ் ரியல் எஸ்டேட்",
    reSubtitle: "வீடு, காணி, வியாபாரம், வாங்க விற்க நம்பிக்கையுடன் நாடுங்கள். நட்புறவான முழுநேர விற்பனை முகவர்கள் ஒரே முகவரியில்!",
    reBannerTag: "உத்தியோகபூர்வ ரியல் எஸ்டேட் பதாகை",
    reCard1Title: "வீடு வாங்க & விற்க",
    reCard1Desc: "யாழ்ப்பாணத்தின் முன்னணி பகுதிகளில் நவீன குடியிருப்புகள், தனி வீடுகள் மற்றும் சொகுசு வில்லாக்கள் நம்பகமான முறையில் வாங்க & விற்க.",
    reCard2Title: "காணி & நில விற்பனை",
    reCard2Desc: "குடியிருப்பு மனைகள், கண்டி வீதி மற்றும் பிரதான நகர எல்லைகளில் வர்த்தக காணிகள், விவசாய நிலங்கள் உடனடி ஆவண சரிபார்ப்புடன்.",
    reCard3Title: "வியாபார & வணிக நிலையங்கள்",
    reCard3Desc: "கடைகள், வணிக கட்டிடங்கள், முதலீட்டு நிறுவனங்கள் மற்றும் வாடகை/குத்தகை சொத்துக்களுக்கான முதற்தர ஆலோசனை.",
    reCard4Title: "சட்டபூர்வ ஆவண வழிகாட்டல்",
    reCard4Desc: "அரச அங்கீகாரம் பெற்ற முகவர்கள், நில அளவீட்டு திட்டங்கள், தெளிவான உறுதிப் பத்திரங்கள் மற்றும் வெளிப்படையான நடைமுறைகள்.",
    reProprietorLabel: "உரிமையாளர்:",
    reProprietorName: "நட. தினேஷ் (N. Dinesh)",
    reEmailLabel: "மின்னஞ்சல்:",
    reEmailValue: "nelsonrealestate@gmail.com",
    rePhoneLabel: "தொடர்பு எண்கள்:",
    rePhoneValue: "021 4327 102 / 077 9227 102",
    reAddressLabel: "முகவரி:",
    reAddressValue: "இல. 107A, 1/1, கண்டி வீதி, யாழ்ப்பாணம். (பழையபூங்கா முன்பாக, YMCA கட்டடம், 1ம் மாடி)",
    reBtnWa: "WhatsApp-ல் தொடர்பு கொள்ள",
    reBtnCall: "அழைக்க: 077 9227 102",
    reFooterBrand: "தினேஷ் ரியல் எஸ்டேட்",
    reFooterDesc: "அரச அங்கீகாரம் பெற்ற முதற்தர ரியல் எஸ்டேட். வீடு, காணி, வியாபாரம் வாங்க விற்க நம்பிக்கையுடன் நாடுங்கள்.",

    // Modal
    modalTitle: "புதிய மாணவர் சேர்க்கை & முன்பதிவு",
    modalSub: "விபரங்களைப் பூர்த்தி செய்யுங்கள், எமது குழுவினர் உடனடியாக தொடர்புகொள்வர்.",
    mNameLabel: "முழுப் பெயர் (Full Name)*",
    mPhoneLabel: "WhatsApp / தொலைபேசி எண்*",
    mCourseLabel: "பயிற்சி வாகனம் (Course)*",
    mSlotLabel: "விருப்பமான பயிற்சி நேரம் (Preferred Slot)",
    mSlotOpt1: "காலை (Morning 7:00 AM - 10:00 AM)",
    mSlotOpt2: "நண்பகல் (Mid-day 10:00 AM - 2:00 PM)",
    mSlotOpt3: "மாலை (Evening 3:00 PM - 7:00 PM)",
    mSlotOpt4: "வார இறுதி (Weekend Only)",
    mNoteLabel: "மேலதிக விபரங்கள் (Optional)",
    mSubmitBtn: "பதிவை உறுதிசெய்து WhatsApp-ல் அனுப்ப",
    mFootNote: "நேரில் வர: இல. 107A, 1/1, கண்டி வீதி, யாழ்ப்பாணம். (பழையபூங்கா முன்பாக, YMCA கட்டடம், 1ம் மாடி)"
  },
  
  en: {
    // Top Announcement Bar
    topNotice: "📢 2026 Driving Batches Now Enrolling! Modern 3D Simulator & Practical Dual-Control Fleet | Book Now!",
    hoursText: "Monday - Sunday: 7:00 AM - 7:00 PM",
    newBadge: "NEW 2026",
    
    // Header & Navigation
    brandTitle: "Dinesh Learners",
    brandSubtitle: "Dinesh Driving School • Jaffna (DMT: DS:385)",
    navHome: "Home",
    navZeroExp: "Beginner Training",
    navCourses: "Vehicles & Courses",
    navSimulator: "3D Simulator",
    navGallery: "Real Photos",
    navFees: "Fee Estimator",
    navQuiz: "Road Signs Quiz",
    navWhyUs: "Why Choose Us",
    navRealEstate: "Real Estate",
    navContact: "Contact",
    btnCall: "Call: 077 9227 102",
    btnEnroll: "Enroll Now",
    
    // Hero Section
    heroPill: "Jaffna's Leading Modern Driving Academy",
    heroTitlePrefix: "Master the Road & Get Your ",
    heroTitleHighlight: "Driving License",
    heroTitleSuffix: " with Confidence!",
    heroDesc: "Dinesh Learners (DMT DS:385) provides advanced computer 3D simulator training and practical dual-control vehicle lessons. 100% trial success guidance with certified instructors in Jaffna.",
    heroTagSim: "3D VR Simulator",
    heroTagDual: "Dual-Control Fleet",
    heroTagLady: "Lady Instructors Available",
    heroTagDays: "Open 7 Days (7am-7pm)",
    btnHeroTrial: "Book Free Simulator Trial",
    btnHeroWhatsapp: "Chat on WhatsApp",
    heroLocation: "YMCA Building, Kandy Road, Jaffna",
    heroLabBadge: "Real Lab Photo",
    heroLabRig: "Logitech G29 Virtual Cockpit Rig",
    heroLabFeatures: "Racing Bucket Seat • Force Feedback Wheel • 6-Speed Shifter",
    cardFleetTitle: "Dual-Control Safety Fleet",
    cardFleetSub: "Auto & Manual Cars • Certified Instructors",
    cardHighTech: "High-Tech",
    cardSimTitle: "3D Virtual Cockpit Simulator",
    cardPassTitle: "Trial Record",
    cardPassSub: "99.4% First-Time Pass",
    
    // Zero Driving Experience USP Section
    zeroExpBadge: "Zero Driving Experience? Learn Easily From Scratch!",
    zeroExpTitle: "Never Driven Before? No Fear – Learn With 100% Confidence!",
    zeroExpDesc: "Never touched a steering wheel before? Scared of stalling or accidents on busy roads? Learn risk-free in our authentic 3D virtual cockpit simulator and real theory classroom before ever hitting the road. We teach you patiently step-by-step from zero!",
    zeroExpP1Title: "Start From Absolute Scratch",
    zeroExpP1Desc: "No prior driving or vehicle knowledge required. We teach from the ground up.",
    zeroExpP2Title: "Zero Fear in 3D Simulator",
    zeroExpP2Desc: "No risk of accidents, scratches or stalling in traffic while mastering clutch and gears.",
    zeroExpP3Title: "Official Theory Classroom",
    zeroExpP3Desc: "Learn all road signs and mechanical basics in our fully equipped Jaffna classroom.",
    btnZeroExpTrial: "Join Free Introductory Session Today!",
    labTheoryLabel: "Real Theory Classroom",
    labSimLabel: "Real 3D Simulator Lab",
    
    // Stats Section
    statStudents: "Successful Students",
    statPassRate: "First-Time Pass Rate",
    statExperience: "Years Experience & Trust",
    statDmt: "Govt DMT License",
    
    // Gallery Section
    galleryPill: "Real Photos",
    galleryTitle: "Real Academy & Training Facilities Gallery",
    gallerySubtitle: "Authentic photographs of our 3D simulator lab, live coaching, real fleet, and YMCA Jaffna branch entrance!",
    g1Badge: "Live Training",
    g1Caption: "Live 3D Simulator Coaching in Session",
    g1Sub: "Personal instructor guidance for beginner students",
    g2Badge: "YMCA Branch",
    g2Caption: "Main Entrance at YMCA Jaffna (Kandy Road)",
    g2Sub: "Kandy Road, Opposite Old Park, YMCA Building",
    g3Badge: "Training Vehicle",
    g3Caption: "Dinesh Learners Branded Dual-Control Vehicle",
    g3Sub: "Official Dual-Pedal safety training fleet",
    g4Badge: "Fleet Lineup",
    g4Caption: "Training Motorbike, Scooter & Tuk-Tuk Fleet",
    g4Sub: "Modern vehicles for official DMT track practice",
    g5Badge: "Three-Wheeler",
    g5Caption: "Official Three-Wheeler (Tuk-Tuk) Training Vehicle",
    g5Sub: "Master city driving and commercial license tests",
    g6Badge: "Cockpit Rig",
    g6Caption: "Logitech G29 Force-Feedback Virtual Cockpit",
    g6Sub: "Realistic clutch, brake, 6-speed shifter & bucket seat",
    g7Badge: "Theory Classroom",
    g7Caption: "Theory Classroom with Real Road Signs Wall Chart",
    g7Sub: "Danger Warning & Regulatory Road Sign Boards",
    g8Badge: "DMT Reg: DS:385",
    g8Caption: "Official Government Approved Registration Banner",
    g8Sub: "Jaffna's Premier Govt Certified Driving Academy",
    g9Badge: "VR Training",
    g9Caption: "Virtual Reality VR Headset Simulator Session",
    g9Sub: "Founder N. Dinesh experiencing the 3D VR driving cockpit",
    g10Badge: "Opening Ceremony",
    g10Caption: "New Technology Driving School Opening Ceremony",
    g10Sub: "No. 107A, 1/1, Kandy Road, Jaffna (2-03-2026)",
    
    // Courses & Fleet Section
    coursePill: "Our Training Fleet",
    courseSectionTitle: "Our Training Categories & Fleet",
    courseSectionSubtitle: "Comprehensive licensing courses from motorbikes to heavy passenger buses.",
    tabAll: "All Courses",
    tabCar: "Car (Dual-Control)",
    tabBike: "Motorcycle",
    tabTuk: "Three Wheeler",
    tabBus: "Heavy Bus & Lorry",
    tabSim: "3D Simulator",
    
    // Course Cards
    c1Title: "Car Driving Course (Dual-Control)",
    c1Sub: "Manual & Automatic Transmission",
    c1Desc: "Modern dual-pedal safety cars. Full training on highway traffic, reversing, parallel parking, and official DMT trial track maneuvers.",
    c1f1: "Suzuki Alto & WagonR Dual-Control Fleet",
    c1f2: "Dedicated Lady Instructors for female students",
    c1f3: "Official DMT mock trial ground practice",
    
    c2Title: "High-Tech 3D Simulator Training",
    c2Sub: "Virtual Reality Cockpit Lessons",
    c2Desc: "Master clutch balancing, gear changes, night driving, rain weather and sudden road hazard perception with zero accident risk.",
    c2f1: "Eliminates fear and builds instant confidence",
    c2f2: "Realistic force-feedback steering, pedals & gear",
    c2f3: "Free trial demo session for all new students",
    
    c3Title: "Motorcycle & Scooter Training",
    c3Sub: "Class A / A1 Driving License",
    c3Desc: "Clutch control, balance, turning maneuvers, and complete mastery of the official DMT '8'-shaped test track.",
    c3f1: "Dedicated DMT '8' track trial ground practice",
    c3f2: "Both geared motorbikes and automatic scooters",
    c3f3: "Fast-track license approval assistance",
    
    c4Title: "Three-Wheeler (Tuk-Tuk)",
    c4Sub: "Class B1 Commercial Driving License",
    c4Desc: "Specialized training for navigating Jaffna city roads, tight corners, passenger safety, and commercial licensing.",
    c4f1: "Handlebar control & smooth gear shifting",
    c4f2: "Reverse parking and narrow road maneuvers",
    c4f3: "Commercial driver permit documentation guidance",
    
    c5Title: "Heavy Passenger Bus & Truck",
    c5Sub: "Class D / CE Commercial License",
    c5Desc: "Professional training for public transport and heavy vehicle operations in Sri Lanka and overseas job opportunities.",
    c5f1: "Pneumatic Air-Brake system training",
    c5f2: "Long-distance highway driving lessons",
    c5f3: "Middle-East and foreign employment guidance",
    
    c6Badge: "Best Value Combo",
    c6Title: "Complete Combo Package",
    c6Sub: "Car (Dual) + Motorbike + Theory & Medical Test",
    c6Desc: "Get both Car and Motorcycle licenses in one go. Free medical test support and unlimited simulator sessions included!",
    c6f1: "Car Manual/Auto + Motorcycle License",
    c6f2: "4 Free Intensive 3D Simulator Sessions",
    c6f3: "Complete DMT Medical Test Assistance",
    c6f4: "Easy 2-installment payment option",
    
    feeStartFrom: "Course Fee",
    btnRegisterCourse: "Enroll Now",
    btnBookCombo: "Book Combo Plan",
    
    // Badges inside course cards
    badgeClassB: "Class B (Light Vehicle)",
    badgeGear: "Auto / Manual",
    badgePopular: "Popular",
    badgeRealHardware: "Real Hardware Rig",
    badgeLogitech: "Logitech G29",
    badgeHighTech: "High Tech",
    badgeDemo: "Demo",
    badgeFreeTrial: "Free Trial",
    badgeClassA: "Class A / A1 (Motorcycle)",
    badgeGearedAuto: "Geared & Auto",
    badgeClassB1: "Class B1 (Three Wheeler)",
    badgeCommercial: "Commercial",
    badgeClassD: "Class D / CE (Heavy Vehicles)",
    badgeHeavyFleet: "Heavy Fleet",
    
    // Simulator Section
    simTitle: "Jaffna's Pioneer in 3D Driving Simulator Tech!",
    simDesc: "Learn clutch balancing, hazard perception, night & rain driving in a realistic risk-free 3D cockpit before hitting the real Jaffna roads.",
    simCockpitBadge: "Logitech G29 Force-Feedback Simulator Cockpit",
    simB1Title: "Zero Accident Risk",
    simB1Desc: "Learn steering, clutch and gear changes without anxiety.",
    simB2Title: "Multiple Weather Conditions",
    simB2Desc: "Experience rain, heavy fog, and night driving realistically.",
    simB3Title: "Computerized Feedback",
    simB3Desc: "Instant analytics on braking speed and reaction times.",
    simB4Title: "Free Demo Session",
    simB4Desc: "Included completely free with all full courses.",
    btnSimDemo: "Book Free Simulator Demo Session",
    simLabLive: "Live Simulator Lab",
    simLabLocation: "YMCA Building 1st Floor • Jaffna",
    simActiveStatus: "Active & Running",
    simWheelTag: "Force Feedback Wheel",
    simSuspensionTag: "Mechanical Suspension Board",
    
    // Fee Calculator
    calcPill: "Transparent Pricing",
    calcTitle: "Interactive Course Fee Estimator",
    calcSubtitle: "Select your desired vehicles and get an instant cost calculation with flexible installment options.",
    calcStep1: "1. Select Primary Vehicle",
    calcStep2: "2. Optional Add-ons",
    calcOptMedical: "DMT Medical Test Fee & Assistance",
    calcOptSim: "4x Intensive 3D Simulator Sessions",
    calcOptFast: "Fast-Track VIP Priority Batch",
    calcSelectedLabel: "Selected Course",
    calcTotalLabel: "Estimated Total Fee:",
    calcInstLabel: "Easy 2-Installment Plan:",
    calcInst1Label: "1st Installment (At Admission):",
    calcInst2Label: "2nd Installment (Before Trial):",
    btnBookThisPlan: "Enroll in This Package",
    calcNoHidden: "No hidden fees • Official DMT DS:385 Certified",
    
    // Road Signs Quiz
    quizPill: "DMT Written Exam Practice",
    quizTitle: "Sri Lanka DMT Road Signs Mock Quiz",
    quizSubtitle: "Test your traffic knowledge for the official DMT written exam with interactive questions.",
    quizRuleBadge: "Sri Lanka Highway Code",
    quizNextBtn: "Next Question",
    quizClassroomTitle: "Our Theory Classroom",
    quizClassroomSub: "Master all road signs and DMT regulations directly",
    
    // 4-Step Roadmap
    stepPill: "Step-by-Step Path",
    stepTitle: "Easy Steps to Get Your Driving License",
    stepSubtitle: "From enrollment to holding your official driving license, Dinesh Learners is by your side!",
    s1Title: "1. Admission & Medical Test",
    s1Desc: "Join easily with your National Identity Card copy. Complete your DMT medical examination with our guidance.",
    s2Title: "2. Written Exam & L-Permit",
    s2Desc: "Pass your DMT theory exam on the first attempt with our mock test papers and highway code classes.",
    s3Title: "3. Simulator & Practical Lessons",
    s3Desc: "Begin in the 3D virtual simulator and then progress to real Jaffna roads with dual-control safety vehicles.",
    s4Title: "4. Official DMT Trial & License!",
    s4Desc: "Practice on the official mock trial grounds and earn your government-issued driving license with confidence!",
    
    // Why Choose Us
    whyPill: "Our Strengths",
    whyTitle: "Why Choose Dinesh Learners?",
    whySubtitle: "Trusted expertise, modern tech, and complete student safety in Jaffna!",
    w1Title: "Modern 3D VR Simulator",
    w1Desc: "Jaffna's first computer virtual reality cockpit driving simulator for risk-free training.",
    w2Title: "Govt Certified Instructors",
    w2Desc: "Fully certified by the Department of Motor Traffic with 15+ years of teaching excellence.",
    w3Title: "Dedicated Lady Instructors",
    w3Desc: "Female instructors available for women and girl students to learn comfortably and patiently.",
    w4Title: "Open 7 Days (7:00 AM - 7:00 PM)",
    w4Desc: "Flexible time slots tailored for university students, employees, and busy professionals.",
    w5Title: "100% Dual-Control Safety Fleet",
    w5Desc: "Brand new dual-pedal vehicles ensure instructors can brake and assist at any second.",
    w6Title: "Prime Location (YMCA Jaffna)",
    w6Desc: "Conveniently located on Kandy Road opposite Old Park, minutes from bus and train stations.",
    
    // Testimonials
    revPill: "Student Reviews",
    reviewTitle: "What Our Successful Students Say",
    reviewSubtitle: "Real stories from Jaffna students who passed their driving license trials on their very first attempt.",
    r1Text: "\"Practicing on the 3D simulator first eliminated all my fear before driving on the main road. I passed my trial test on the first attempt! Huge thanks to Dinesh Sir!\"",
    r1Name: "Suresh Babu",
    r1Place: "Navaly, Jaffna • Car + Bike",
    r2Text: "\"Having a lady instructor made learning so comfortable and stress-free. Starting at 7:00 AM let me finish my classes before heading to campus.\"",
    r2Name: "Priyanka K.",
    r2Place: "Nallur, Jaffna • Car Auto",
    r3Text: "\"I took the heavy bus driving course. The air brake and reversing training were taught in detail. I got my commercial license and applied for overseas employment immediately.\"",
    r3Name: "Jegathees R.",
    r3Place: "Chavakachcheri • Heavy Bus Class D",
    
    // Contact Section
    contactPill: "Get in Touch",
    contactTitle: "Visit Our Academy or Get in Touch",
    contactSubtitle: "Our friendly team is always ready to help you achieve your driving dreams.",
    cPhoneLabel: "Phone Numbers (Call Us)",
    cWaLabel: "WhatsApp Direct Chat",
    cWaBtn: "Chat Now",
    cLocLabel: "Branch Address",
    addressText: "No. 107A, 1/1, Kandy Road, Jaffna. (Opposite Old Park, YMCA Building, 1st Floor)",
    cHoursLabel: "Operating Hours",
    cHoursSub: "Open 7 Days a Week",
    ownerText: "Proprietor: N. Dinesh",
    mapLocationText: "Kandy Road • Opposite Old Park • YMCA Jaffna (1st Floor)",
    callUsText: "Call: 021 4327 102 / 077 9227 102",
    footerQuickLinks: "Training Fleet",
    footerSupport: "Student Resources",
    footerContact: "Contact Info",
    footerRights: "© 2026 Dinesh Learners (DMT DS:385). All Rights Reserved.",
    footerLocation: "Jaffna • Sri Lanka",
    
    // Real Estate Section
    reBadge: "Govt. Approved Real Estate Agency • Jaffna",
    reBadgeShort: "Dinesh Real Estate (Buy & Sell)",
    reTitle: "Dinesh Real Estate",
    reSubtitle: "Buy & sell homes, prime lands, and commercial business properties with complete trust. Friendly full-time property agents under one roof!",
    reBannerTag: "Official Real Estate Banner",
    reCard1Title: "Buy & Sell Homes",
    reCard1Desc: "Find dream residential homes, luxury villas, and family houses in Jaffna, or sell your property swiftly at prime market valuation.",
    reCard2Title: "Prime Lands & Plots",
    reCard2Desc: "Housing plots, commercial roadside lands along Kandy Road, investment properties, and agricultural land with verified deeds.",
    reCard3Title: "Commercial & Business Properties",
    reCard3Desc: "Retail outlets, commercial buildings, shopping premises, and office spaces for sale, rent, or lease with end-to-end guidance.",
    reCard4Title: "Certified Legal Guidance",
    reCard4Desc: "Government registered agents, title deed verification, land survey guidance, and 100% transparent transactions.",
    reProprietorLabel: "Proprietor:",
    reProprietorName: "N. Dinesh",
    reEmailLabel: "Email:",
    reEmailValue: "nelsonrealestate@gmail.com",
    rePhoneLabel: "Phone Lines:",
    rePhoneValue: "021 4327 102 / 077 9227 102",
    reAddressLabel: "Office Address:",
    reAddressValue: "No. 107A, 1/1, Kandy Road, Jaffna. (Opposite Old Park, YMCA Building, 1st Floor)",
    reBtnWa: "Chat with Real Estate Desk",
    reBtnCall: "Call: 077 9227 102",
    reFooterBrand: "Dinesh Real Estate",
    reFooterDesc: "Government Approved Premier Real Estate Agency. Buy and sell homes, lands, and businesses with peace of mind.",

    // Modal
    modalTitle: "Student Admission & Course Booking",
    modalSub: "Fill in your details below and our academy team will get in touch immediately.",
    mNameLabel: "Full Name*",
    mPhoneLabel: "WhatsApp / Phone Number*",
    mCourseLabel: "Course Category*",
    mSlotLabel: "Preferred Time Slot",
    mSlotOpt1: "Morning (7:00 AM - 10:00 AM)",
    mSlotOpt2: "Mid-day (10:00 AM - 2:00 PM)",
    mSlotOpt3: "Evening (3:00 PM - 7:00 PM)",
    mSlotOpt4: "Weekend Only (Sat / Sun)",
    mNoteLabel: "Any Questions / Notes (Optional)",
    mSubmitBtn: "Confirm & Send via WhatsApp",
    mFootNote: "Visit us: No. 107A, 1/1, Kandy Road, Jaffna. (Opposite Old Park, YMCA Building, 1st Floor)"
  },
  
  si: {
    // Top Announcement Bar
    topNotice: "📢 2026 නව රියදුරු පුහුණු පාඨමාලා ආරම්භ විය! නවීන 3D සිමියුලේටර් සහ ප්‍රායෝගික පුහුණුව | අදම ලියාපදිංචි වන්න!",
    hoursText: "සඳුදා - ඉරිදා: පෙ.ව. 7:00 - ප.ව. 7:00",
    newBadge: "නව 2026",
    
    // Header & Navigation
    brandTitle: "දිනේෂ් රියදුරු පාසල",
    brandSubtitle: "දිනේෂ් ලර්නර්ස් • යාපනය (DMT: DS:385)",
    navHome: "මුල් පිටුව",
    navZeroExp: "ආරම්භක පුහුණුව",
    navCourses: "පුහුණු පාඨමාලා",
    navSimulator: "3D සිමියුලේටරය",
    navGallery: "සැබෑ ඡායාරූප",
    navFees: "ගාස්තු විස්තර",
    navQuiz: "මාර්ග සංඥා",
    navWhyUs: "අපගේ විශේෂතා",
    navRealEstate: "දේපළ වෙළඳාම",
    navContact: "සම්බන්ධ වන්න",
    btnCall: "අමතන්න: 077 9227 102",
    btnEnroll: "දැන්ම ලියාපදිංචි වන්න",
    
    // Hero Section
    heroPill: "යාපනයේ අංක 1 නවීන රියදුරු පුහුණු පාසල",
    heroTitlePrefix: "විශ්වාසයෙන් යුතුව ",
    heroTitleHighlight: "රියදුරු බලපත්‍රය",
    heroTitleSuffix: " ලබාගන්න!",
    heroDesc: "දිනේෂ් රියදුරු පාසල (DMT DS:385) – නවීන පරිගණක 3D සිමියුලේටර් සහ ද්විත්ව තිරිංග (Dual Control) මෝටර් රථ මගින් ආරක්ෂිත, වෘත්තීය රියදුරු පුහුණුව. 100% විභාග සමත්වීමේ මගපෙන්වීම!",
    heroTagSim: "3D VR සිමියුලේටරය",
    heroTagDual: "ද්විත්ව තිරිංග වාහන",
    heroTagLady: "කාන්තා උපදේශිකාවන්",
    heroTagDays: "දින 7 ම විවෘතයි (පෙ.ව. 7 - ප.ව. 7)",
    btnHeroTrial: "නොමිලේ සිමියුලේටර් අත්හදාබැලීමක්",
    btnHeroWhatsapp: "WhatsApp මගින් විමසන්න",
    heroLocation: "YMCA ගොඩනැගිල්ල, නුවර පාර, යාපනය",
    heroLabBadge: "සැබෑ විද්‍යාගාර ඡායාරූපය",
    heroLabRig: "Logitech G29 වර්චුවල් රේසිං සිමියුලේටරය",
    heroLabFeatures: "රේසිං ආසනය • Force Feedback ස්ටියරින් • 6-Speed ගියර්",
    cardFleetTitle: "ද්විත්ව පාලන ආරක්ෂිත වාහන",
    cardFleetSub: "Auto & Manual කාර් • සහතිකලත් උපදේශකවරුන්",
    cardHighTech: "නවීන තාක්ෂණය",
    cardSimTitle: "3D රියදුරු සිමියුලේටරය",
    cardPassTitle: "විභාග වාර්තාව",
    cardPassSub: "99.4% පළමු වර සමත්වීම",
    
    // Zero Driving Experience USP Section
    zeroExpBadge: "රිය පැදවීම නොදන්නා අයට මුල සිට විශේෂ පුහුණුව!",
    zeroExpTitle: "රිය පැදවීමට බියද? බිය නොවන්න - පහසුවෙන්ම මෙහිදී පුහුණු වන්න!",
    zeroExpDesc: "කවදාවත් ස්ටියරින් වීල් එකක් අල්ලා නැද්ද? ක්ලච්, ගියර් පාලනය නොදන්නේද? කෙලින්ම මහපාරට නොගොස් අපගේ සැබෑ 3D සිමියුලේටරය මගින් මුල සිටම බියකින් තොරව ඉගෙන ගන්න!",
    zeroExpP1Title: "කිසිදු පූර්ව දැනුමක් අවශ්‍ය නැත",
    zeroExpP1Desc: "මීට පෙර වාහනයක් පදවා නැති වුවද ආරම්භයේ සිට ඉවසීමෙන් කියාදේ.",
    zeroExpP2Title: "සිමියුලේටරයේ බියෙන් තොර පුහුණුව",
    zeroExpP2Desc: "අනතුරු අවදානමක් හෝ එන්ජිම නතරවීමේ බියක් මෙහිදී නැත.",
    zeroExpP3Title: "පන්ති කාමරයේ සැබෑ සංඥා පුහුණුව",
    zeroExpP3Desc: "සැබෑ මාර්ග සංඥා පුවරු මගින් ලිඛිත විභාගයට පූර්ණ සූදානම.",
    btnZeroExpTrial: "අදම නොමිලේ ආරම්භක පන්තියට එක්වන්න!",
    labTheoryLabel: "න්‍යායාත්මක පන්ති කාමරය",
    labSimLabel: "3D සිමියුලේටර් විද්‍යාගාරය",
    
    // Stats Section
    statStudents: "සමත් වූ සිසුන් ගණන",
    statPassRate: "පළමු වර සමත්වීමේ ප්‍රතිශතය",
    statExperience: "වසරක විශ්වාසනීය පළපුරුද්ද",
    statDmt: "රජයේ ලියාපදිංචි අංකය",
    
    // Gallery Section
    galleryPill: "සැබෑ ඡායාරූප",
    galleryTitle: "අපගේ සැබෑ පුහුණු පරිශ්‍රයේ ඡායාරූප",
    gallerySubtitle: "යාපනය YMCA හි පිහිටි අපගේ සැබෑ 3D සිමියුලේටර් විද්‍යාගාරය, පුහුණු වාහන සහ පන්ති කාමරය!",
    g1Badge: "සජීවී පුහුණුව",
    g1Caption: "සජීවී 3D සිමියුලේටර් පුහුණු සැසිය",
    g1Sub: "උපදේශක මගපෙන්වීම යටතේ සෘජු පුහුණුව",
    g2Badge: "YMCA ශාඛාව",
    g2Caption: "යාපනය YMCA ප්‍රධාන පිවිසුම",
    g2Sub: "නුවර පාර, පැරණි උද්‍යානය ඉදිරිපිට, YMCA ගොඩනැගිල්ල",
    g3Badge: "පුහුණු වාහනය",
    g3Caption: "දිනේෂ් ලර්නර්ස් ද්විත්ව පාලන පුහුණු රථය",
    g3Sub: "ද්විත්ව තිරිංග ආරක්ෂාව සහිත නිල වාහනය",
    g4Badge: "වාහන පෙළ",
    g4Caption: "පුහුණු යතුරුපැදි, ස්කූටර් සහ ත්‍රිරෝද රථ පෙළ",
    g4Sub: "DMT විභාග පිටිය සඳහා නවීන වාහන",
    g5Badge: "ත්‍රිරෝද රථ",
    g5Caption: "නිල ත්‍රිරෝද රථ (Tuk-Tuk) පුහුණු වාහනය",
    g5Sub: "නගර මාර්ගවල ආරක්ෂිත ධාවනය සහ වාණිජ බලපත්‍ර පුහුණුව",
    g6Badge: "සිමියුලේටර් පද්ධතිය",
    g6Caption: "Logitech G29 විර්චුවල් රේසිං සිමියුලේටරය",
    g6Sub: "සැබෑ ක්ලච්, බ්‍රේක්, ගියර් සහ රේසිං ආසනය",
    g7Badge: "න්‍යායාත්මක පන්තිය",
    g7Caption: "මාර්ග සංඥා සහිත සැබෑ පන්ති කාමරය",
    g7Sub: "අන්තරාය අනතුරු ඇඟවීම් සහ නියාමන මාර්ග සංඥා පුවරු",
    g8Badge: "රජයේ ලියාපදිංචි: DS:385",
    g8Caption: "රජයේ අනුමත නිල ලියාපදිංචි පුවරුව",
    g8Sub: "යාපනයේ ප්‍රමුඛතම රජයේ සහතිකලත් රියදුරු පාසල",
    g9Badge: "VR පුහුණුව",
    g9Caption: "අථත්‍ය යථාර්ථය (VR) සිමියුලේටර් අත්දැකීම",
    g9Sub: "ආයතන ප්‍රධානී එන්. දිනේෂ් 3D VR පද්ධතිය පරික්ෂා කරයි",
    g10Badge: "විවෘත කිරීමේ උත්සවය",
    g10Caption: "නවීන තාක්ෂණික රියදුරු පාසලේ සමාරම්භක ආරාධනය",
    g10Sub: "අංක 107A, 1/1, නුවර පාර, යාපනය (2-03-2026)",
    
    // Courses & Fleet Section
    coursePill: "පුහුණු වාහන පෙළ",
    courseSectionTitle: "අපගේ පුහුණු පාඨමාලා සහ වාහන",
    courseSectionSubtitle: "යතුරුපැදි සිට බර වාහන බස් සහ ලොරි දක්වා සියලුම කාණ්ඩ සඳහා පුහුණුව ලබාදේ.",
    tabAll: "සියල්ල",
    tabCar: "කාර් (Dual-Control)",
    tabBike: "යතුරුපැදි",
    tabTuk: "ත්‍රිරෝද රථ",
    tabBus: "බර වාහන (බස්/ලොරි)",
    tabSim: "3D සිමියුලේටරය",
    
    // Course Cards
    c1Title: "මෝටර් රථ රියදුරු පුහුණුව (Dual Control)",
    c1Sub: "Manual & Auto Transmission",
    c1Desc: "ද්විත්ව තිරිංග ආරක්ෂාව සහිත නවීන කාර්. මහා මාර්ගයේ ධාවනය, ආපසු ගැනීම, පාකිං සහ DMT ආදර්ශ පරීක්ෂණ පුහුණුව.",
    c1f1: "Suzuki Alto & WagonR ද්විත්ව තිරිංග රථ",
    c1f2: "කාන්තාවන් සඳහා කාන්තා උපදේශිකාවන්",
    c1f3: "DMT ආදර්ශ පිටියේ ප්‍රායෝගික පුහුණුව",
    
    c2Title: "නවීන 3D සිමියුලේටර් පුහුණුව",
    c2Sub: "Virtual Reality Cockpit Lessons",
    c2Desc: "මාර්ගයට යාමට පෙර ක්ලච් පාලනය, ගියර් මාරු කිරීම, රාත්‍රී සහ වැසි කාලයේ ධාවනය අනතුරු බියකින් තොරව ඉගෙන ගන්න.",
    c2f1: "බිය දුරුකර විශ්වාසය ගොඩනැගීම",
    c2f2: "සැබෑ ස්ටියරින් වීල් සහ පෙඩල් අත්දැකීම",
    c2f3: "නවක සිසුන් සඳහා නොමිලේ ආදර්ශ සැසියක්",
    
    c3Title: "යතුරුපැදි සහ ස්කූටර් පුහුණුව",
    c3Sub: "Class A / A1 Driving License",
    c3Desc: "ක්ලච් සමබරතාවය සහ DMT විභාගයේ '8' හැඩැති ධාවන පථය සඳහා විශේෂ පුහුණුව.",
    c3f1: "DMT '8' ආදර්ශ ධාවන පථ පුහුණුව",
    c3f2: "ගියර් සහ ඔටෝ ස්කූටර් වාහන",
    c3f3: "ඉක්මන් බලපත්‍ර ලබාගැනීමේ මගපෙන්වීම",
    
    c4Title: "ත්‍රිරෝද රථ පුහුණුව (Tuk-Tuk)",
    c4Sub: "Class B1 Commercial License",
    c4Desc: "යාපනය නගරයේ තදබදය සහිත මාර්ගවල ආරක්ෂිතව ධාවනය කිරීම සඳහා විශේෂ පුහුණුව.",
    c4f1: "හැඬල් පාලනය සහ ගියර් මාරු කිරීම",
    c4f2: "පටු මාර්ගවල හැරවීම් සහ පාකිං",
    c4f3: "ව්‍යාපාරික රියදුරු බලපත්‍ර සහාය",
    
    c5Title: "බර වාහන බස් සහ ලොරි පුහුණුව",
    c5Sub: "Class D / CE Commercial License",
    c5Desc: "දේශීය සහ විදේශීය රැකියා අවස්ථා සඳහා වෘත්තීය බර වාහන රියදුරු පුහුණුව.",
    c5f1: "එයාර් බ්‍රේක් (Air Brake) තාක්ෂණික පුහුණුව",
    c5f2: "දුරගමන් මහා මාර්ග ධාවන පුහුණුව",
    c5f3: "මැදපෙරදිග සහ විදේශ රැකියා සුදුසුකම්",
    
    c6Badge: "විශේෂ ඉතිරි කිරීමේ පැකේජය",
    c6Title: "සම්පූර්ණ කොම්බෝ පැකේජය",
    c6Sub: "Car (Dual) + Motorbike + Theory & Medical Test",
    c6Desc: "එක්වර කාර් සහ බයික් බලපත්‍ර දෙකම ලබාගන්න. නොමිලේ වෛද්‍ය පරීක්ෂණ සහාය සහ සිමියුලේටර් සැසි!",
    c6f1: "Car Manual/Auto + Motorbike License",
    c6f2: "නොමිලේ 3D සිමියුලේටර් සැසි 4ක්",
    c6f3: "DMT වෛද්‍ය පරීක්ෂණ මගපෙන්වීම",
    c6f4: "පහසු වාරික 2කින් ගෙවීමේ හැකියාව",
    
    feeStartFrom: "ගාස්තුව",
    btnRegisterCourse: "ලියාපදිංචි වන්න",
    btnBookCombo: "පැකේජය තෝරන්න",
    
    // Badges inside course cards
    badgeClassB: "Class B (සැහැල්ලු වාහන)",
    badgeGear: "Auto / Manual",
    badgePopular: "ජනප්‍රිය",
    badgeRealHardware: "සැබෑ සිමියුලේටරය",
    badgeLogitech: "Logitech G29",
    badgeHighTech: "නවීන තාක්ෂණය",
    badgeDemo: "ආදර්ශ",
    badgeFreeTrial: "නොමිලේ අත්හදාබැලීමක්",
    badgeClassA: "Class A / A1 (යතුරුපැදි)",
    badgeGearedAuto: "ගියර් සහ ඔටෝ",
    badgeClassB1: "Class B1 (ත්‍රිරෝද රථ)",
    badgeCommercial: "වාණිජ",
    badgeClassD: "Class D / CE (බර වාහන)",
    badgeHeavyFleet: "බර වාහන පෙළ",
    
    // Simulator Section
    simTitle: "යාපනයේ ප්‍රථම උසස් 3D රියදුරු සිමියුලේටර් පුහුණුව!",
    simDesc: "මහා මාර්ගයට පිවිසීමට පෙර අනතුරු බියකින් තොරව රාත්‍රී කාලය, වැසි කාලය සහ දුෂ්කර මාර්ග තත්ත්වයන් 3D සිමියුලේටරය මගින් පුහුණු වන්න.",
    simCockpitBadge: "Logitech G29 Force-Feedback සිමියුලේටරය",
    simB1Title: "අනතුරු අවදානමක් නැත",
    simB1Desc: "බියකින් තොරව ක්ලච්, ගියර් සහ හැරවීම් ඉගෙන ගත හැක.",
    simB2Title: "විවිධ කාලගුණ තත්ත්වයන්",
    simB2Desc: "වැසි, මීදුම සහ රාත්‍රී කාලය සැබෑ ලෙස අත්විඳින්න.",
    simB3Title: "පරිගණක විශ්ලේෂණය",
    simB3Desc: "වේගය සහ ප්‍රතිචාර දැක්වීමේ කාලය පරිගණකයෙන් පෙන්වයි.",
    simB4Title: "නොමිලේ ආදර්ශ සැසියක්",
    simB4Desc: "අපගේ සිසුන් සඳහා නොමිලේ පිරිනැමේ.",
    btnSimDemo: "නොමිලේ සිමියුලේටර් සැසියක් වෙන්කරගන්න",
    simLabLive: "ක්‍රියාකාරී සිමියුලේටර් විද්‍යාගාරය",
    simLabLocation: "YMCA ගොඩනැගිල්ල 1 වන මහල • යාපනය",
    simActiveStatus: "දැනට ක්‍රියාත්මකයි",
    simWheelTag: "Force Feedback ස්ටියරින් වීල්",
    simSuspensionTag: "යාන්ත්‍රික ඉගැන්වීම් පුවරුව",
    
    // Fee Calculator
    calcPill: "පාරදෘශ්‍ය ගාස්තු",
    calcTitle: "අන්තර්ක්‍රියාකාරී ගාස්තු ගණකය",
    calcSubtitle: "ඔබට අවශ්‍ය වාහන තෝරා ක්ෂණික ගාස්තු විස්තර සහ පහසු වාරික ක්‍රම ලබාගන්න.",
    calcStep1: "1. ප්‍රධාන වාහනය තෝරන්න",
    calcStep2: "2. අමතර සේවාවන්",
    calcOptMedical: "DMT වෛද්‍ය පරීක්ෂණ ගාස්තු සහ සහාය",
    calcOptSim: "අතිරේක 3D සිමියුලේටර් සැසි 4ක්",
    calcOptFast: "Fast-Track විශේෂ කඩිනම් පුහුණුව",
    calcSelectedLabel: "තෝරාගත් පාඨමාලාව",
    calcTotalLabel: "ඇස්තමේන්තුගත සම්පූර්ණ ගාස්තුව:",
    calcInstLabel: "පහසු වාරික 2ක ක්‍රමය:",
    calcInst1Label: "1 වන වාරිකය (ලියාපදිංචියේදී):",
    calcInst2Label: "2 වන වාරිකය (විභාගයට පෙර):",
    btnBookThisPlan: "මෙම පැකේජය වෙන්කරගන්න",
    calcNoHidden: "සැඟවුණු ගාස්තු නොමැත • DMT DS:385 සහතිකලත්",
    
    // Road Signs Quiz
    quizPill: "DMT ලිඛිත විභාග ආදර්ශ ප්‍රශ්න",
    quizTitle: "ශ්‍රී ලංකා DMT මාර්ග සංඥා ආදර්ශ ප්‍රශ්නාවලිය",
    quizSubtitle: "DMT ලිඛිත විභාගයට පහසුවෙන් සූදානම් වන්න!",
    quizRuleBadge: "ශ්‍රී ලංකා මාර්ග නීති",
    quizNextBtn: "මීළඟ ප්‍රශ්නය (Next Question)",
    quizClassroomTitle: "අපගේ න්‍යායාත්මක පන්ති කාමරය",
    quizClassroomSub: "සියලුම මාර්ග සංඥා සහ DMT නීති සෘජුවම ඉගෙන ගන්න",
    
    // 4-Step Roadmap
    stepPill: "පියවරෙන් පියවර මගපෙන්වීම",
    stepTitle: "රියදුරු බලපත්‍රය ලබාගැනීමේ පහසු පියවර",
    stepSubtitle: "ලියාපදිංචියේ සිට රියදුරු බලපත්‍රය අතට ලැබෙන තෙක් දිනේෂ් රියදුරු පාසල ඔබ ළඟින්ම සිටී!",
    s1Title: "1. ලියාපදිංචිය සහ වෛද්‍ය පරීක්ෂණය",
    s1Desc: "ජාතික හැඳුනුම්පත් පිටපතක් සමඟ පහසුවෙන් එක්වන්න. අපගේ මගපෙන්වීමෙන් DMT වෛද්‍ය සහතිකය ලබාගන්න.",
    s2Title: "2. ලිඛිත විභාගය සහ L-බලපත්‍රය",
    s2Desc: "ආදර්ශ ප්‍රශ්න පත්‍ර සහ දේශන මගින් ලිඛිත විභාගය පළමු වරම විශිෂ්ට ලෙස සමත් වන්න.",
    s3Title: "3. සිමියුලේටර් සහ ප්‍රායෝගික පුහුණුව",
    s3Desc: "3D සිමියුලේටරයෙන් ආරම්භ කර ද්විත්ව පාලන වාහන මගින් යාපනයේ ප්‍රධාන මාර්ගවල සැබෑ රියදුරු පුහුණුව ලබාගන්න.",
    s4Title: "4. DMT ප්‍රායෝගික විභාගය සහ බලපත්‍රය!",
    s4Desc: "ආදර්ශ ධාවන පිටියේ පුහුණුව ලබා විශ්වාසයෙන් යුතුව රියදුරු බලපත්‍රය ලබාගන්න!",
    
    // Why Choose Us
    whyPill: "අපගේ ශක්තිය",
    whyTitle: "ඇයි දිනේෂ් රියදුරු පාසල තෝරාගත යුත්තේ?",
    whySubtitle: "විශ්වාසනීය පළපුරුද්ද, නවීන පහසුකම් සහ පූර්ණ ශිෂ්‍ය ආරක්ෂාව!",
    w1Title: "නවීන 3D VR සිමියුලේටරය",
    w1Desc: "අනතුරු අවදානමකින් තොරව රිය පැදවීම පුහුණු වීමට යාපනයේ ප්‍රථම පරිගණක සිමියුලේටරය.",
    w2Title: "රජයේ සහතිකලත් උපදේශකවරුන්",
    w2Desc: "මෝටර් රථ ප්‍රවාහන දෙපාර්තමේන්තුවේ පූර්ණ අනුමැතිය සහ වසර 15ක පළපුරුද්ද.",
    w3Title: "කාන්තා උපදේශිකාවන් (Lady Instructors)",
    w3Desc: "කාන්තාවන්ට සහ දැරියන්ට නොබියව ඉගෙන ගැනීමට පළපුරුදු කාන්තා උපදේශිකාවන් සිටී.",
    w4Title: "දින 7 ම විවෘතයි (පෙ.ව. 7 - ප.ව. 7)",
    w4Desc: "විශ්වවිද්‍යාල සිසුන්ට, රැකියාවල නියුතු අයට ගැලපෙන නම්‍යශීලී වේලාවන්.",
    w5Title: "100% ද්විත්ව තිරිංග වාහන",
    w5Desc: "ද්විත්ව පෙඩල් පද්ධතිය සහිත නවීන කාර් මගින් උපරිම ආරක්ෂාව සහතික කෙරේ.",
    w6Title: "ප්‍රධාන ස්ථානය (YMCA Jaffna)",
    w6Desc: "යාපනය නුවර පාරේ පැරණි උද්‍යානය ඉදිරිපිට, බස් සහ දුම්රිය ස්ථානවලට ඉතා ආසන්නව පිහිටා ඇත.",
    
    // Testimonials
    revPill: "සිසුන්ගේ අදහස්",
    reviewTitle: "අපගේ සිසුන්ගේ අදහස්",
    reviewSubtitle: "පළමු වරම රියදුරු බලපත්‍රය ලබාගත් යාපනයේ සිසුන්ගේ අත්දැකීම්.",
    r1Text: "\"මුලින්ම සිමියුලේටරයේ පුහුණු වූ නිසා ප්‍රධාන පාරේ කාර් එක එලවද්දි කිසිම බයක් දැනුනෙ නෑ. පළමු වරම ට්‍රයල් එක පාස් වුණා! දිනේෂ් සර්ට බොහොම ස්තූතියි!\"",
    r1Name: "සුරේෂ් බාබු",
    r1Place: "නවාලි, යාපනය • Car + Bike",
    r2Text: "\"කාන්තා උපදේශිකාවක් සිටීම මට ලොකු පහසුවක් වුණා. උදේ 7ට පන්ති තිබුණ නිසා කැම්පස් යන්න කලින් පුහුණුව අවසන් කරගන්න පුළුවන් වුණා.\"",
    r2Name: "ප්‍රියංකා කේ.",
    r2Place: "නල්ලූර්, යාපනය • Car Auto",
    r3Text: "\"මම බර වාහන බස් ලයිසන් එක ගත්තා. එයාර් බ්‍රේක් සහ රිවර්ස් ගැන පැහැදිලිව කියා දුන්නා. විදේශ රැකියාවකට අයදුම් කිරීමට ඉක්මනින් ලයිසන් එක ලැබුණා.\"",
    r3Name: "ජෙගදීස් ආර්.",
    r3Place: "චාවකච්චේරි • Heavy Bus Class D",
    
    // Contact Section
    contactPill: "සම්බන්ධ වන්න",
    contactTitle: "අප වෙත පැමිණෙන්න හෝ අමතන්න",
    contactSubtitle: "ඔබගේ රියදුරු සිහිනය සැබෑ කරගැනීමට අපගේ කණ්ඩායම සැමවිටම සූදානම්.",
    cPhoneLabel: "දුරකථන අංක (Call Us)",
    cWaLabel: "WhatsApp සෘජු සංවාදය",
    cWaBtn: "Chat Now",
    cLocLabel: "ශාඛාවේ ලිපිනය",
    addressText: "අංක 107A, 1/1, නුවර පාර, යාපනය. (පැරණි උද්‍යානය ඉදිරිපිට, YMCA ගොඩනැගිල්ල, 1 වන මහල)",
    cHoursLabel: "විවෘත වේලාවන්",
    cHoursSub: "සතියේ දින 7 ම විවෘතයි",
    ownerText: "අයිතිකරු: එන්. දිනේෂ්",
    mapLocationText: "නුවර පාර • පැරණි උද්‍යානය ඉදිරිපිට • YMCA යාපනය (1 වන මහල)",
    callUsText: "අමතන්න: 021 4327 102 / 077 9227 102",
    footerQuickLinks: "පුහුණු පාඨමාලා",
    footerSupport: "ශිෂ්‍ය සහාය",
    footerContact: "සම්බන්ධ වීමට",
    footerRights: "© 2026 දිනේෂ් රියදුරු පාසල (DMT DS:385). සියලුම හිමිකම් ඇවිරිණි.",
    footerLocation: "යාපනය • ශ්‍රී ලංකාව",
    
    // Real Estate Section
    reBadge: "රජයේ අනුමත ආයතනය • යාපනය",
    reBadgeShort: "දිනේෂ් රියල් එස්ටේට් (Buy & Sell)",
    reTitle: "දිනේෂ් රියල් එස්ටේට්",
    reSubtitle: "යාපනයේ නිවාස, ඉඩම් සහ ව්‍යාපාරික ස්ථාන මිලදී ගැනීමට සහ විකිණීමට විශ්වාසවන්ත ප්‍රමුඛතම ආයතනය. එකම ස්ථානයකින් පූර්ණ කාලීන නියෝජිත සේවාව!",
    reBannerTag: "නිල දැන්වීම් පුවරුව",
    reCard1Title: "නිවාස මිලදී ගැනීම සහ විකිණීම",
    reCard1Desc: "යාපනයේ නවීන නිවාස, නේවාසික නිවාස සහ සුඛෝපභෝගී විලා හොඳම මිලට මිලදී ගැනීමට සහ විකිණීමට.",
    reCard2Title: "ඉඩම් සහ බಿම් කොටස්",
    reCard2Desc: "නේවාසික බිම් කොටස්, නුවර පාර ආශ්‍රිත වාණිජ ඉඩම් සහ ආයෝජන ඉඩම් නිරවුල් ඔප්පු සහිතව.",
    reCard3Title: "ව්‍යාපාරික දේපළ",
    reCard3Desc: "වෙළඳසැල්, වාණිජ ගොඩනැගිලි සහ කාර්යාල පරිශ්‍රයන් කුලියට හෝ මිලදී ගැනීමට සහාය.",
    reCard4Title: "නෛතික සහතික කිරීම්",
    reCard4Desc: "රජයේ අනුමත නියෝජිතයන් මගින් නිරවුල් ඔප්පු පරීක්ෂාව සහ විනිවිද පෙනෙන විශ්වාසනීය සේවාව.",
    reProprietorLabel: "අයිතිකරු:",
    reProprietorName: "එන්. දිනේෂ්",
    reEmailLabel: "විද්‍යුත් තැපෑල:",
    reEmailValue: "nelsonrealestate@gmail.com",
    rePhoneLabel: "දුරකථන අංක:",
    rePhoneValue: "021 4327 102 / 077 9227 102",
    reAddressLabel: "ලිපිනය:",
    reAddressValue: "අංක 107A, 1/1, නුවර පාර, යාපනය. (පැරණි උද්‍යානය ඉදිරිපිට, YMCA ගොඩනැගිල්ල, 1 වන මහල)",
    reBtnWa: "WhatsApp මගින් සම්බන්ධ වන්න",
    reBtnCall: "අමතන්න: 077 9227 102",
    reFooterBrand: "දිනේෂ් රියල් එස්ටේට්",
    reFooterDesc: "රජයේ අනුමත ප්‍රමුඛතම දේපළ වෙළඳාම් ආයතනය. නිවාස සහ ඉඩම් මිලදී ගැනීමට සහ විකිණීමට විශ්වාසයෙන් පියනගන්න.",

    // Modal
    modalTitle: "නව සිසුන් ලියාපදිංචි කිරීම",
    modalSub: "ඔබගේ තොරතුරු පහතින් ඇතුළත් කරන්න, අපගේ කණ්ඩායම ඔබ හා සම්බන්ධ වනු ඇත.",
    mNameLabel: "සම්පූර්ණ නම*",
    mPhoneLabel: "WhatsApp / දුරකථන අංකය*",
    mCourseLabel: "පාඨමාලාව*",
    mSlotLabel: "කැමති වේලාව",
    mSlotOpt1: "උදෑසන (පෙ.ව. 7:00 - පෙ.ව. 10:00)",
    mSlotOpt2: "දවල් (පෙ.ව. 10:00 - ප.ව. 2:00)",
    mSlotOpt3: "සවස (ප.ව. 3:00 - ප.ව. 7:00)",
    mSlotOpt4: "සති අන්තයේ පමණි",
    mNoteLabel: "අමතර සටහන් (විකල්ප)",
    mSubmitBtn: "තහවුරු කර WhatsApp මගින් එවන්න",
    mFootNote: "පැමිණෙන්න: අංක 107A, 1/1, නුවර පාර, යාපනය. (පැරණි උද්‍යානය ඉදිරිපිට, YMCA ගොඩනැගිල්ල, 1 වන මහල)"
  }
};

// Fee Calculator Base Prices
const basePrices = {
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

// Interactive Road Signs Quiz Data
const quizQuestions = [
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

let currentQuizIndex = 0;
let quizScore = 0;

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitcher();
  setupFeeCalculator();
  setupQuiz();
  setupFilterTabs();
  setupEnrollModal();
  setupMobileMenu();
  setupSmoothScrolling();
  applyTranslations(); // Set initial language state
});

// Trilingual Language Switcher
function setupLanguageSwitcher() {
  const langSelectButtons = document.querySelectorAll(".lang-select-btn");

  langSelectButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      if (selected && translations[selected]) {
        currentLang = selected;
        applyTranslations();
      }
    });
  });
}

function applyTranslations() {
  const t = translations[currentLang];
  if (!t) return;

  // 1. Update documentElement attributes and body classes
  document.documentElement.lang = currentLang;
  document.body.className = `lang-${currentLang} bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white`;

  // 2. Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // 3. Update active style on language buttons (desktop & mobile)
  document.querySelectorAll(".lang-select-btn").forEach(btn => {
    const btnLang = btn.getAttribute("data-lang");
    if (btnLang === currentLang) {
      btn.className = "lang-select-btn px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs shadow-md transition-all";
    } else {
      btn.className = "lang-select-btn px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-200 font-bold text-xs transition-all";
    }
  });

  // 4. Update document title
  if (currentLang === 'ta') {
    document.title = "தினேஷ் லேணர்ஸ் - யாழ்ப்பாணம் | Dinesh Driving School (DMT: DS:385)";
  } else if (currentLang === 'en') {
    document.title = "Dinesh Learners - Jaffna | Modern Driving Academy (DMT: DS:385)";
  } else if (currentLang === 'si') {
    document.title = "දිනේෂ් රියදුරු පාසල - යාපනය | Dinesh Learners (DMT: DS:385)";
  }

  // 5. Update Dropdown Options (Calculator & Modal)
  updateDropdownLanguage();

  // 6. Update dynamic Fee Calculator & Quiz
  updateFeeCalculation();
  renderQuizQuestion();
}

function updateDropdownLanguage() {
  // Update Fee Calculator Vehicle Select
  const calcSelect = document.getElementById("calcVehicle");
  if (calcSelect) {
    const prevVal = calcSelect.value;
    const optionsData = {
      car_manual: {
        ta: "🚗 கார் - Manual கியர் (Dual Control)",
        en: "🚗 Car - Manual Transmission (Dual Control)",
        si: "🚗 මෝටර් රථ - Manual Transmission (Dual Control)"
      },
      car_auto: {
        ta: "🚗 கார் - Automatic கியர் (Dual Control)",
        en: "🚗 Car - Automatic Transmission (Dual Control)",
        si: "🚗 මෝටර් රථ - Automatic Transmission (Dual Control)"
      },
      bike: {
        ta: "🏍️ மோட்டார் பைக் / ஸ்கூட்டர் (Class A/A1)",
        en: "🏍️ Motorcycle / Scooter (Class A/A1)",
        si: "🏍️ යතුරුපැදි / ස්කූටර් (Class A/A1)"
      },
      tuktuk: {
        ta: "🛺 முச்சக்கரவண்டி Tuk-Tuk (Class B1)",
        en: "🛺 Three-Wheeler Tuk-Tuk (Class B1)",
        si: "🛺 ත්‍රිරෝද රථ Tuk-Tuk (Class B1)"
      },
      bus: {
        ta: "🚌 கனரக வாகனம் - பஸ் & லொறி (Class D/CE)",
        en: "🚌 Heavy Vehicle - Bus & Lorry (Class D/CE)",
        si: "🚌 බර වාහන - බස් සහ ලොරි (Class D/CE)"
      }
    };

    Array.from(calcSelect.options).forEach(opt => {
      if (optionsData[opt.value]) {
        opt.textContent = optionsData[opt.value][currentLang] || optionsData[opt.value].en;
      }
    });
    calcSelect.value = prevVal;
  }
}

// Fee Calculator Logic
function setupFeeCalculator() {
  const vehicleSelect = document.getElementById("calcVehicle");
  const medicalCheck = document.getElementById("calcMedical");
  const simulatorCheck = document.getElementById("calcSimulator");
  const fastTrackCheck = document.getElementById("calcFastTrack");

  if (!vehicleSelect) return;

  [vehicleSelect, medicalCheck, simulatorCheck, fastTrackCheck].forEach(el => {
    if (el) el.addEventListener("change", updateFeeCalculation);
  });

  updateFeeCalculation();
}

function updateFeeCalculation() {
  const vehicleKey = document.getElementById("calcVehicle")?.value || 'car_manual';
  const includeMedical = document.getElementById("calcMedical")?.checked;
  const includeSimulator = document.getElementById("calcSimulator")?.checked;
  const fastTrack = document.getElementById("calcFastTrack")?.checked;

  const base = basePrices[vehicleKey] || basePrices.car_manual;
  let total = base.price;
  let lessonCount = base.lessons;

  if (includeMedical) total += 3500;
  if (includeSimulator) {
    total += 3000;
    lessonCount += 4;
  }
  if (fastTrack) total += 5000;

  const installment1 = Math.round(total * 0.5);
  const installment2 = total - installment1;

  const totalEl = document.getElementById("calcTotalPrice");
  const lessonsEl = document.getElementById("calcLessonCount");
  const inst1El = document.getElementById("calcInst1");
  const inst2El = document.getElementById("calcInst2");
  const vehicleNameEl = document.getElementById("calcVehicleName");

  const sessionLabel = currentLang === 'ta' ? 'பயிற்சி அமர்வுகள்' : (currentLang === 'si' ? 'පුහුණු සැසි' : 'Practical Sessions');
  let chosenName = base.name;
  if (currentLang === 'ta') chosenName = base.nameTa;
  else if (currentLang === 'si') chosenName = base.nameSi;

  if (totalEl) totalEl.textContent = `LKR ${total.toLocaleString()}`;
  if (lessonsEl) lessonsEl.textContent = `${lessonCount} ${sessionLabel}`;
  if (inst1El) inst1El.textContent = `LKR ${installment1.toLocaleString()}`;
  if (inst2El) inst2El.textContent = `LKR ${installment2.toLocaleString()}`;
  if (vehicleNameEl) vehicleNameEl.textContent = chosenName;
}

// Road Signs Interactive Quiz
function setupQuiz() {
  renderQuizQuestion();

  const nextBtn = document.getElementById("quizNextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentQuizIndex = (currentQuizIndex + 1) % quizQuestions.length;
      renderQuizQuestion();
    });
  }
}

function renderQuizQuestion() {
  const q = quizQuestions[currentQuizIndex];
  if (!q) return;

  const signContainer = document.getElementById("quizSignSvg");
  const questionTitle = document.getElementById("quizQuestionTitle");
  const optionsContainer = document.getElementById("quizOptionsContainer");
  const feedbackEl = document.getElementById("quizFeedback");
  const qNumEl = document.getElementById("quizQNum");
  const nextBtn = document.getElementById("quizNextBtn");

  if (signContainer) signContainer.innerHTML = q.signSvg;

  let title = q.titleEn;
  let options = q.optionsEn;
  let qWord = "Question";

  if (currentLang === 'ta') {
    title = q.titleTa;
    options = q.optionsTa;
    qWord = "வினா";
  } else if (currentLang === 'si') {
    title = q.titleSi;
    options = q.optionsSi;
    qWord = "ප්‍රශ්නය";
  }

  if (questionTitle) questionTitle.textContent = title;
  if (qNumEl) qNumEl.textContent = `${qWord} ${currentQuizIndex + 1} / ${quizQuestions.length}`;
  if (feedbackEl) {
    feedbackEl.className = "hidden p-3 rounded-xl text-sm font-medium mt-3";
    feedbackEl.innerHTML = "";
  }
  if (nextBtn) nextBtn.classList.add("hidden");

  if (optionsContainer) {
    optionsContainer.innerHTML = "";

    options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-red-500 hover:bg-red-50/50 transition-all font-medium text-slate-700 flex items-center justify-between group";
      btn.innerHTML = `
        <span class="flex items-center gap-3">
          <span class="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center text-xs font-bold transition-colors">
            ${String.fromCharCode(65 + idx)}
          </span>
          <span>${opt}</span>
        </span>
        <i class="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 text-red-500 transition-opacity"></i>
      `;

      btn.addEventListener("click", () => handleQuizAnswer(idx, q));
      optionsContainer.appendChild(btn);
    });
  }
}

function handleQuizAnswer(selectedIdx, question) {
  const optionsContainer = document.getElementById("quizOptionsContainer");
  const feedbackEl = document.getElementById("quizFeedback");
  const nextBtn = document.getElementById("quizNextBtn");
  const buttons = optionsContainer.querySelectorAll("button");

  buttons.forEach(b => b.disabled = true);

  let correctLabel = "Correct Answer!";
  let incorrectLabel = "Incorrect!";
  let expl = question.explanationEn;

  if (currentLang === 'ta') {
    correctLabel = "சரியான விடை!";
    incorrectLabel = "தவறான விடை!";
    expl = question.explanationTa;
  } else if (currentLang === 'si') {
    correctLabel = "නිවැරදි පිළිතුර!";
    incorrectLabel = "වැරදි පිළිතුර!";
    expl = question.explanationSi;
  }

  if (selectedIdx === question.answer) {
    quizScore++;
    buttons[selectedIdx].classList.add("bg-emerald-50", "border-emerald-500", "text-emerald-800");
    if (feedbackEl) {
      feedbackEl.className = "p-3 rounded-xl text-sm font-medium mt-3 bg-emerald-100 text-emerald-900 border border-emerald-300 block";
      feedbackEl.innerHTML = `✅ <strong>${correctLabel}</strong> ${expl}`;
    }
  } else {
    buttons[selectedIdx].classList.add("bg-rose-50", "border-rose-500", "text-rose-800");
    buttons[question.answer].classList.add("bg-emerald-50", "border-emerald-500", "text-emerald-800");
    if (feedbackEl) {
      feedbackEl.className = "p-3 rounded-xl text-sm font-medium mt-3 bg-rose-100 text-rose-900 border border-rose-300 block";
      feedbackEl.innerHTML = `❌ <strong>${incorrectLabel}</strong> ${expl}`;
    }
  }

  if (nextBtn) {
    nextBtn.classList.remove("hidden");
  }
}

// Filter Tabs
function setupFilterTabs() {
  const tabButtons = document.querySelectorAll(".course-filter-tab");
  const courseCards = document.querySelectorAll(".course-card");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => {
        b.classList.remove("bg-red-600", "text-white", "shadow-lg", "shadow-red-500/25");
        b.classList.add("bg-slate-100", "text-slate-600", "hover:bg-slate-200");
      });
      btn.classList.add("bg-red-600", "text-white", "shadow-lg", "shadow-red-500/25");
      btn.classList.remove("bg-slate-100", "text-slate-600", "hover:bg-slate-200");

      const filter = btn.getAttribute("data-filter");
      courseCards.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.classList.remove("hidden");
          card.classList.add("flex");
        } else {
          card.classList.add("hidden");
          card.classList.remove("flex");
        }
      });
    });
  });
}

// Enrollment Modal
function setupEnrollModal() {
  const modal = document.getElementById("enrollModal");
  const openButtons = document.querySelectorAll(".open-enroll-modal");
  const closeButtons = document.querySelectorAll(".close-enroll-modal");
  const enrollForm = document.getElementById("enrollForm");

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const courseName = btn.getAttribute("data-course");
      if (courseName && document.getElementById("modalCourseSelect")) {
        document.getElementById("modalCourseSelect").value = courseName;
      }
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.classList.add("overflow-hidden");
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    }
  });

  if (enrollForm) {
    enrollForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("modalName")?.value || "";
      const phone = document.getElementById("modalPhone")?.value || "";
      const course = document.getElementById("modalCourseSelect")?.value || "Car";
      const slot = document.getElementById("modalTimeSlot")?.value || "Morning";
      const note = document.getElementById("modalNote")?.value || "";

      let greeting = "*வணக்கம் Dinesh Learners!*";
      let pName = "பெயர்";
      let pPhone = "தொலைபேசி";
      let pCourse = "வாகனம்";
      let pTime = "நேரம்";
      let pNote = "குறிப்பு";
      let toastMsg = "முன்பதிவு பெறப்பட்டது! WhatsApp-க்கு இணைக்கப்படுகிறது...";

      if (currentLang === 'en') {
        greeting = "*Hello Dinesh Learners!*";
        pName = "Name";
        pPhone = "Phone";
        pCourse = "Course";
        pTime = "Preferred Slot";
        pNote = "Note";
        toastMsg = "Booking received! Connecting to WhatsApp...";
      } else if (currentLang === 'si') {
        greeting = "*ආයුබෝවන් Dinesh Learners!*";
        pName = "නම";
        pPhone = "දුරකථන අංකය";
        pCourse = "පාඨමාලාව";
        pTime = "වේලාව";
        pNote = "සටහන";
        toastMsg = "ලියාපදිංචිය තහවුරු විය! WhatsApp වෙත යොමු කෙරේ...";
      }

      const waMessage = `${greeting}%0A%0A👤 *${pName}:* ${encodeURIComponent(name)}%0A📞 *${pPhone}:* ${encodeURIComponent(phone)}%0A🚗 *${pCourse}:* ${encodeURIComponent(course)}%0A⏰ *${pTime}:* ${encodeURIComponent(slot)}%0A📝 *${pNote}:* ${encodeURIComponent(note)}%0A%0AThank you!`;

      showToast(toastMsg);

      setTimeout(() => {
        window.open(`https://wa.me/94779227102?text=${waMessage}`, "_blank");
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.classList.remove("overflow-hidden");
        enrollForm.reset();
      }, 1000);
    });
  }
}

// Mobile Menu Handler
function setupMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const menuDrawer = document.getElementById("mobileMenuDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !menuDrawer) return;

  menuBtn.addEventListener("click", () => {
    menuDrawer.classList.toggle("hidden");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => menuDrawer.classList.add("hidden"));
  });
}

// Smooth Scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Toast notification
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "fixed bottom-24 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl z-50 flex items-center gap-3 border border-slate-700 text-sm font-semibold transition-all transform duration-300 opacity-0 translate-y-4 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i><span>${message}</span>`;
  toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
  }, 3500);
}
