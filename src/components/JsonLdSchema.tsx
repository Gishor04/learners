import React from "react";

export default function JsonLdSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["DrivingSchool", "LocalBusiness", "EducationalOrganization"],
        "@id": "https://dineshlearners.lk/#business",
        "name": "Dinesh Learners & Driving School",
        "alternateName": [
          "தினேஷ் லேணர்ஸ்",
          "டினேஸ் லேணர்ஸ்",
          "Dinesh Learners",
          "Dinesh Learners Jaffna",
          "Dinesh Driving School Jaffna",
          "දිනේෂ් රියදුරු පාසල",
          "දිනේෂ් ලර්නර්ස්"
        ],
        "url": "https://dineshlearners.lk",
        "telephone": ["+94775189963", "+94214327102"],
        "priceRange": "LKR 12000 - 45000",
        "image": "https://dineshlearners.lk/assets/banner.jpg",
        "logo": "https://dineshlearners.lk/assets/branch-entrance.jpg",
        "description": "Jaffna's leading DMT registered driving school (DS:385). Features modern 3D VR Simulator, dual-control car fleet (Auto & Manual), motorcycle, three-wheeler, and heavy vehicle training with dedicated lady instructors.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 107A, 1/1, Kandy Road, Opposite Old Park, YMCA Building, 1st Floor",
          "addressLocality": "Jaffna",
          "addressRegion": "Northern Province",
          "postalCode": "40000",
          "addressCountry": "LK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 9.6644,
          "longitude": 80.0210
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "07:00",
            "closes": "19:00"
          }
        ],
        "sameAs": [
          "https://www.tiktok.com/@dinesh.niro?_r=1&_t=ZS-9B7EPz39NCr",
          "https://youtube.com/@ngcsmartstove6985?si=BDX_E-pg2wXvarU6",
          "https://wa.me/94775189963"
        ],
        "founder": {
          "@type": "Person",
          "name": "K. Dinesh (க. தினேஷ்)",
          "jobTitle": "Proprietor & Principal Instructor"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "385",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          { "@type": "City", "name": "Jaffna" },
          { "@type": "City", "name": "Nallur" },
          { "@type": "City", "name": "Chavakachcheri" },
          { "@type": "City", "name": "Point Pedro" },
          { "@type": "City", "name": "Kilinochchi" },
          { "@type": "AdministrativeArea", "name": "Northern Province, Sri Lanka" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Driving License Courses & Training Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Car Driving Lessons (Dual-Control Auto & Manual)",
                "description": "Safe training in Suzuki Alto & WagonR dual-control vehicles with optional lady instructors."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Motorcycle & Scooter Riding Lessons (Class A / A1)",
                "description": "DMT official figure 8 track training and practical road skills."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Three-Wheeler / Tuk-Tuk Training (Class B1)",
                "description": "Commercial passenger and private three-wheeler driving license training."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Heavy Vehicle Training (Bus & Lorry Class D/CE)",
                "description": "Ashok Leyland pneumatic air-brake heavy vehicle commercial training."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3D Virtual Cockpit Driving Simulator Practice",
                "description": "Fear-free steering, clutch balance, gear-shifting, and hazard perception practice."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dineshlearners.lk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "யாழ்ப்பாணத்தில் சிறந்த சாரதிப் பயிற்சி நிலையம் எது? (Which is the best driving school in Jaffna?)",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "யாழ்ப்பாணத்தில் DMT அரச பதிவு DS:385 கொண்ட தினேஷ் லேணர்ஸ் (Dinesh Learners) முன்னணி நிறுவனமாகும். நவீன 3D விர்ச்சுவல் சிமுலேட்டர், இரட்டை பிரேக் வாகனங்கள், பெண் பயிற்றுநர்கள் மற்றும் 99.4% முதல் முறை தேர்ச்சி வீதம் கொண்ட புகழ்பெற்ற நிலையமாகும்."
            }
          },
          {
            "@type": "Question",
            "name": "தினேஷ் லேணர்ஸ் எங்கு அமைந்துள்ளது? (Where is Dinesh Learners located?)",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "தினேஷ் லேணர்ஸ் யாழ்ப்பாணம் கண்டி வீதியில், பழைய பூங்காவிற்கு எதிரே, YMCA கட்டடத்தின் 1ம் மாடியில் அமைந்துள்ளது (No. 107A 1/1, Kandy Road, Jaffna). தொலைபேசி: 077 518 9963 / 021 4327 102."
            }
          },
          {
            "@type": "Question",
            "name": "டிரைவிங் அனுபவம் இல்லாத ஆரம்பநிலையாளர்கள் இங்கு பழகலாமா? (Can beginners learn driving?)",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "நிச்சயமாக! ஸ்டீயரிங் தொடாதவர்கள் கூட விபத்து பயமின்றி பழகுவதற்கு நவீன 3D சிமுலேட்டர் ஆய்வகம் மற்றும் பிரத்தியேக இரட்டை பிரேக் பயிற்சி வாகனங்கள் உள்ளன. எமது பொறுமைமிக்க பயிற்றுநர்கள் ஆரம்பத்திலிருந்து கற்பிப்பர்."
            }
          },
          {
            "@type": "Question",
            "name": "பெண்களுக்கான பிரத்தியேக பெண் பயிற்றுநர்கள் (Lady Instructors) உள்ளனரா?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ஆம்! பெண் மாணவிகள் அச்சமின்றியும் பாதுகாப்பாகவும் கார் மற்றும் ஸ்கூட்டர் ஓட்டப் பழகுவதற்கு பிரத்தியேக அரச சான்றிதழ் பெற்ற பெண் ஆசிரியைகள் (Lady Instructors) பயிற்சி அளிக்கின்றனர்."
            }
          },
          {
            "@type": "Question",
            "name": "மருத்துவச் சான்றிதழ் (Medical Certificate) மற்றும் கச்சேரி முன்பதிவு உதவி கிடைக்கிறதா?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ஆம்! DMT மருத்துவப் பரிசோதனை மற்றும் கச்சேரி முன்பதிவு நடைமுறைகள் அனைத்தும் மாணவர்களுக்கு முற்றிலும் இலவசமாக ஒழுங்குபடுத்தித் தரப்படும்."
            }
          },
          {
            "@type": "Question",
            "name": "கட்டணத்தை தவணை முறையில் செலுத்தலாமா? (Are easy installment plans available?)",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ஆம்! மாணவர்களின் வசதிக்காக இரண்டு அல்லது மூன்று எளிய தவணைகளில் கட்டணம் செலுத்தும் வசதி உண்டு."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dineshlearners.lk/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dineshlearners.lk/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Courses",
            "item": "https://dineshlearners.lk/#courses"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "3D Simulator",
            "item": "https://dineshlearners.lk/#simulator"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Fee Calculator",
            "item": "https://dineshlearners.lk/#calculator"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "FAQ",
            "item": "https://dineshlearners.lk/#faq"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Contact",
            "item": "https://dineshlearners.lk/#contact"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://dineshlearners.lk/#website",
        "url": "https://dineshlearners.lk",
        "name": "Dinesh Learners Jaffna",
        "alternateName": ["தினேஷ் லேணர்ஸ்", "Dinesh Driving School"],
        "inLanguage": ["ta-LK", "en-US", "si-LK"]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
