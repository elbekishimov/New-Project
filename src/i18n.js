import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  uz: {
    translation: {
      // Navbar
      "nav": {
        "home": "Bosh sahifa",
        "about": "Biz haqimizda",
        "services": "Xizmatlar",
        "products": "Mahsulotlar",
        "blog": "Blog",
        "contact": "Aloqa",
        "reviews": "Sharhlar",
        "cart": "Savat",
        "signIn": "Kirish",
        "signUp": "Ro'yxatdan o'tish",
        "dashboard": "Boshqaruv paneli"
      },

      // Home
      "home": {
        "hero": {
          "badge": "2026-yilgi eng yaxshi RCM xizmati",
          "title1": "Advancing Healthcare",
          "title2": "Through Innovation",
          "description": "Biz 1985-yildan beri tibbiy billing va moliya sohasida dunyo miqyosidagi aniqlikni taqdim etamiz. Tibbiyot muassasangiz daromadini professional darajaga ko'taramiz.",
          "jci": "Akkreditatsiyalangan Organ",
          "iso": "Sertifikatlangan",
          "startBtn": "Ishni Boshlash",
          "aboutBtn": "Biz haqimizda",
          "successRate": "Muvaffaqiyat darajasi",
          "systemOnline": "Tizim Onlayn"
        },
        "practic": {
          "badge": "Ishonchli Hamkorlik",
          "title": "Mijozlarimiz va Tajribamiz haqida",
          "description": "Tibbiy billing sohasida ishonchli vakil sifatida biz turli xil sog'liqni saqlash tashkilotlariga xizmat ko'rsatamiz. Bizning obro'yimiz moliyaviy shaffoflik va uzluksiz operatsiyalar kafolatidir.",
          "appointmentBtn": "Uchrashuv belgilash",
          "specialtiesBtn": "Mutaxassisliklarni ko'rish",
          "services": {
            "title": "Tibbiy Billing Yo'nalishlari",
            "subtitle": "Biz har bir tibbiy amaliyot uchun maxsus tayyorlangan billing yechimlarini taqdim etamiz.",
            "medicalCoding": "TIBBIY KODLASH VA BILLING",
            "medicalCodingDesc": "Aniq tibbiy billing va kodlash to'lovlarni o'z vaqtida qabul qilishda muhim rol o'ynaydi. Hatto kichik xatolar ham to'lov kechikishiga sabab bo'lishi mumkin.",
            "accountsReceivable": "Hisoblarni Boshqarish",
            "accountsReceivableDesc": "Vcare Medical Billing'da biz sizning amaliyotingizdagi debitorlik qarzlarini faol ravishda boshqaramiz va to'lovlar oqimini ta'minlaymiz.",
            "credentialing": "Kredentsiallash va Shartnomalar",
            "credentialingDesc": "Tibbiy muassasa tashkil etish shartnomalar tuzishga bog'liq. Biz sug'urta kompaniyalari bilan eng yaxshi tariflar bo'yicha muzokaralar olib boramiz.",
            "outOfNetwork": "Tarmoqdan Tashqari Muzokaralar",
            "outOfNetworkDesc": "Biz Multiplan, Zelis va Viant kabi yirik provayderlar bilan tarmoqdan tashqari da'volarni professional darajada hal qilamiz.",
            "insuranceVerification": "Sug'urtani Tekshirish",
            "insuranceVerificationDesc": "Bemorlarga xizmat ko'rsatishdan oldin ularning sug'urta qoplamasi va imtiyozlarini aniq tekshirish orqali to'lov kafolatini ta'minlaymiz.",
            "fullRCM": "To'liq RCM Xizmatlari",
            "fullRCMDesc": "Vcare bemor kelganidan boshlab to'lov qabul qilinguncha bo'lgan barcha jarayonlarni boshqaradi va xodimlaringizni o'qitadi."
          },
          "whoWeServe": {
            "title": "Kimlarga Xizmat Ko'rsatamiz?",
            "hospitals": "Kasalxonalar",
            "privateClinics": "Xususiy Klinikalar",
            "emergency": "Tez Tibbiy Yordam",
            "ambulatory": "Ambulatoriya Markazlari",
            "laboratories": "Laboratoriyalar",
            "dentistry": "Stomatologiyalar",
            "nursingHomes": "Qariyalar Uylari",
            "urgentCare": "Favqulodda Yordam"
          },
          "stats": {
            "accuracy": "Aniqlik Darajasi",
            "experience": "Yillik Tajriba",
            "claimSubmission": "Da'vo Yuborish",
            "payments": "Tasdiqlangan To'lovlar"
          }
        }
      },

      // About
      "about": {
        "badge": "Biz Haqimizda",
        "title1": "Tibbiyot muassasangiz",
        "title2": "moliyasini ishonchli qo'llarga topshiring",
        "description": "Biz tibbiyot muassasalari uchun professional Revenue Cycle Management (RCM) va Medical Billing xizmatlarini taqdim etamiz. Daromadingizni oshirish va jarayonlarni avtomatlashtirish – bizning asosiy vazifamiz.",
        "contactBtn": "Biz bilan bog'lanish",
        "servicesBtn": "Xizmatlarimiz",
        "stats": {
          "claimRate": "Claim (Talabnoma) qabul qilinishi",
          "experience": "Yillik tajriba",
          "partners": "Hamkor klinikalar",
          "support": "Mijozlarni qo'llab-quvvatlash"
        },
        "mission": {
          "title": "Bizning Missiyamiz",
          "description": "Tibbiyot xodimlari o'zlarining eng muhim vazifasi — bemorlarni davolashga diqqatlarini qaratishlari kerak. Biz esa qog'ozbozlik, sug'urta kompaniyalari bilan ishlash va to'lovlarni undirish kabi murakkab moliyaviy jarayonlarni o'z zimmamizga olamiz. Bizning maqsadimiz — sizning moliyaviy barqarorligingizni ta'minlash."
        },
        "whyUs": {
          "title": "Nima uchun aynan biz?",
          "subtitle": "Biz bilan ishlash orqali siz nafaqat vaqtni, balki asablaringizni va pullaringizni ham tejsaysiz.",
          "accuracy": {
            "title": "Yuqori Aniqlik",
            "desc": "Sug'urta kompaniyalariga yuboriladigan xujjatlardagi xatoliklarni 99% gacha kamaytiramiz, bu esa to'lovlarni rad etilishining oldini oladi."
          },
          "privacy": {
            "title": "To'liq Maxfiylik (HIPAA)",
            "desc": "Bemorlaringizning shaxsiy va tibbiy ma'lumotlari HIPAA qoidalariga asosan eng yuqori darajada himoya qilinadi."
          },
          "speed": {
            "title": "Tezkor To'lovlar",
            "desc": "Hisob-kitob jarayonlarini tezlashtirish orqali klinikangizga pul tushumlarini rekord darajada qisqa muddatlarda ta'minlaymiz."
          }
        },
        "cta": {
          "title": "Klinikangiz daromadini biz bilan birga oshiring!",
          "description": "Bepul konsultatsiya oling va moliyaviy muammolaringizga professional yechim toping. Bizning mutaxassislarimiz sizga yordam berishga tayyor.",
          "button": "Bepul Konsultatsiya Olish"
        }
      },

      "aboutMore": {
        "title": "Biz haqimizda ko'proq",
        "subtitle": "Batafsil ma'lumot",
        "description1": "Bizning kompaniyamiz sog'liqni saqlash provayderlari uchun professional Revenue Cycle Management xizmatlarini taqdim etadi. Biz klinikalar va shifoxonalarga billing jarayonlarini samarali boshqarishda yordam beramiz.",
        "description2": "Bizning tajribali jamoamiz zamonaviy texnologiyalar va xavfsiz tizimlar bilan ishlaydi.",
        "description3": "Billing jarayonlarini yaxshilash va xatoliklarni kamaytirish orqali biz tibbiy tashkilotlarga daromadni oshirishga yordam beramiz.",
        "mission": {
          "title": "Bizning Missiyamiz",
          "desc": "Tibbiy billing jarayonlarini soddalashtirish va shifokorlarga bemorlarga e'tibor qaratishga yordam berish."
        },
        "experience": {
          "title": "Tajribamiz",
          "desc": "Bizning jamoamiz tibbiy billing, sug'urta tekshiruvi va da'volarni boshqarishda kuchli bilimga ega."
        },
        "goal": {
          "title": "Maqsadimiz",
          "desc": "Har bir mijoz uchun samarali, aniq va ishonchli RCM xizmatlarini taqdim etish."
        }
      },

      // Services
      "services": {
        "hero": {
          "title": "Zamonaviy Tibbiyot Uchun To'liq Tsiklli RCM Yechimlari",
          "quote": "Biz shunchaki billing bilan shug'ullanmaymiz, biz sizning tibbiy biznesingizning moliyaviy barqarorligini ta'minlaymiz.",
          "claimRate": "Toza Da'volar Ko'rsatkichi",
          "hipaa": "HIPAA Talablariga To'liq Mos"
        },
        "process": {
          "title": "Bizning Ish Tizimimiz",
          "subtitle": "Muvaffaqiyatga eltuvchi 4 bosqichli strategiyamiz",
          "step1": {
            "title": "Ma'lumot To'plash",
            "desc": "Bemor va ko'rsatilgan xizmatlar haqidagi ma'lumotlarni xavfsiz qabul qilamiz."
          },
          "step2": {
            "title": "Audit va Kodlash",
            "desc": "Mutaxassislarimiz har bir kodni xatolikka qarshi sinchiklab tekshiradi."
          },
          "step3": {
            "title": "Da'vo Yuborish",
            "desc": "Tayyorlangan claimlar 24 soat ichida sug'urta kompaniyalariga uzatiladi."
          },
          "step4": {
            "title": "To'lov Nazorati",
            "desc": "Mablag'lar sizning hisobingizga tushguniga qadar jarayonni kuzatamiz."
          }
        },
        "mainServices": {
          "billing": {
            "title": "Tibbiy Billing va Professional Kodlash",
            "desc": "Bizning professional koderlarimiz har bir tashxisni aniq kodlaydi. Bu orqali rad etilishlar (denials) sonini sezilarli darajada kamaytiramiz. Biz bilan har bir cent o'z vaqtida qaytadi.",
            "features": {
              "icd10": "ICD-10 Audit",
              "cpt": "CPT Kodlash",
              "denials": "Rad etilgan Da'volar Boshqaruvi",
              "report": "Haftalik Moliyaviy Hisobot"
            }
          },
          "verification": {
            "title": "Muvofiqlikni Oldindan Tekshirish",
            "desc": "Sug'urta qoplamasini oldindan tekshirish — moliyaviy barqarorlik garovidir. Bemor klinikaga kelishidan oldin biz barcha moliyaviy masalalarni aniqlashtirib qo'yamiz.",
            "quote": "Vcare bilan ishlaganda, kutilmagan to'lov rad etilishlari va bemorlar bilan yuzaga keladigan moliyaviy tushunmovchiliklardan butunlay qutulasiz."
          }
        },
        "faq": {
          "title": "Ko'p Beriladigan Savollar",
          "q1": {
            "question": "Xizmat haqi qanday hisoblanadi?",
            "answer": "Biz yig'ilgan umumiy mablag'ning kichik foiziga yoki har bir yuborilgan da'vo (claim) uchun belgilangan narxda ishlaymiz. Tanlov sizda!"
          },
          "q2": {
            "question": "Ma'lumotlar xavfsizligi qanday?",
            "answer": "Barcha ma'lumotlar HIPAA talablari asosida 256-bitli shifrlangan serverlarda saqlanadi. Xavfsizlik biz uchun birinchi o'rinda."
          },
          "q3": {
            "question": "Hisobotlar qay tartibda beriladi?",
            "answer": "Siz haftalik va oylik batafsil moliyaviy tahlillarni olasiz. Shuningdek, istalgan vaqtda portalingiz orqali holatni kuzatishingiz mumkin."
          }
        },
        "cta": {
          "title": "Klinikangiz Daromadini Oshirishga Tayyormisiz?",
          "desc": "Moliya tizimingizni mutaxassislarga topshiring va bor e'tiboringizni bemorlarga qarating. Bugun bepul audit so'rang!",
          "button": "Hoziroq Bog'lanish"
        }
      },

      "serviceDetails": {
        "notFound": "Ma'lumot topilmadi",
        "price": "Xizmat narxi",
        "features": "Xizmat tarkibi",
        "process": "Ish jarayoni",
        "testimonial": "Mijozlar fikri",
        "projects": "Bajarilgan loyihalar",
        "orderBtn": "Buyurtma berish"
      },

      // Products
      "products": {
        "title": "Mahsulotlar",
        "loading": "Yuklanmoqda...",
        "empty": "Mahsulotlar topilmadi",
        "details": {
          "notFound": "Mahsulot topilmadi",
          "back": "Orqaga qaytish",
          "premium": "Premium Sifat",
          "inStock": "Omborda mavjud",
          "category": "Kategoriya",
          "delivery": "Yetkazib berish",
          "warranty": "Kafolat",
          "freeDelivery": "Bepul (24 soat ichida)",
          "officialWarranty": "oy rasmiy",
          "addToCart": "Savatchaga qo'shish",
          "addToWishlist": "Sevimlilarga qo'shish",
          "alreadyInCart": "Bu mahsulot savatchada allaqachon mavjud",
          "addedToCart": "Mahsulot muvaffaqiyatli qo'shildi!"
        },
        "item": {
          "sale": "SOTUV",
          "details": "Batafsil ko'rish"
        }
      },

      // Cart
      "cart": {
        "title": "Savat",
        "empty": "Savat bo'sh",
        "remove": "O'chirish",
        "total": "Jami",
        "checkout": "Buyurtma berish"
      },

      // Blog
      "blog": {
        "hero": {
          "badge": "Kompaniyamiz Haqida",
          "title1": "Biz Haqimizda Bilishga",
          "title2": "Qiziqasizmi?",
          "description": "Bemor tashrifidan boshlab to'lov qabul qilinguncha, bizning professional RCM jamoamiz sizning o'sishingizga yordam beradi. Biz daromad aylanishini boshqarishdagi (RCM) muammolarni aniqlash va hal qilishga ixtisoslashganmiz.",
          "callBtn": "Bizga Qo'ng'iroq Qiling",
          "messageBtn": "Xabar Qoldiring",
          "clientSatisfaction": "Mijozlar Mamnuniyati"
        },
        "features": {
          "title": "Nima uchun shifokorlar Vcare Billingga Ishonishadi?",
          "subtitle1": "Vcare Medical Billing jamoasi yuqori darajadagi tibbiy billing va kodlash xizmatlarini taqdim etishga sodiqdir.",
          "subtitle2": "Mijozlar bilan mustahkam aloqa o'rnatish biz uchun juda muhim. Bizning bilimli mutaxassislarimiz har bir so'rovingizga tezkor javob berib, sizga alohida e'tibor qaratadi.",
          "certifiedCoders": {
            "title": "Sertifikatlangan Koderlar",
            "desc": "Bizning AAPC sertifikatiga ega koderlarimiz va malakali billing mutaxassislarimiz aniq xizmat ko'rsatadi. Biz jamoangizga daromadni oshirish sirlarini o'rgatamiz."
          },
          "experience": {
            "title": "Katta Tajriba",
            "desc": "15 yillik tajribamiz bilan biz sug'urta kompaniyalari va mijozlar o'rtasida mustahkam aloqa o'rnatamiz va xizmat sifatini kafolatlaymiz."
          },
          "personalApproach": {
            "title": "Shaxsiy Yondashuv",
            "desc": "Biz har bir mijozning ehtiyojlaridan kelib chiqib, murakkab billing jarayonlarini soddalashtiramiz va to'lovlarni o'z vaqtida undiramiz."
          },
          "constantUpdate": {
            "title": "Doimiy Yangilanish",
            "desc": "Biz sohadagi barcha yangi qonun va qoidalardan doimo xabardormiz. Xizmatlarimizni mijozlarimizning noyob talablariga moslashtiramiz."
          }
        },
        "highlight": {
          "title": "Tibbiy Billingda Yuksak Aniqlik",
          "desc": "25 yildan ortiq tajribaga ega bo'lgan billing va kodlash mutaxassislarimiz bilan moliyaviy muvaffaqiyatga erishing. Kichik xatolar ham to'lov rad etilishiga va kechikishlarga sabab bo'lishi mumkin.",
          "points": {
            "accurate": "Aniq Da'volar (Claims)",
            "fast": "Tezkor To'lov Undirish",
            "minimal": "Minimal Rad Javoblari"
          }
        },
        "cta": {
          "title": "Daromadingizni Oshirishga Tayyormisiz?",
          "desc": "Bizni o'z jamoangizning bir qismi deb tasavvur qiling. Bizning maqsadimiz — vaqtingizni tejash, daromadni ko'paytirish va sizga bemorlar parvarishiga e'tibor qaratish imkonini berishdir.",
          "button": "Bugun Biz Bilan Bog'laning"
        }
      },

      // Call Us
      "callUs": {
        "hero": {
          "badge": "Secure Billing Solutions",
          "title": "Billing bo'yicha Mutaxassis maslahati",
          "desc": "Bizning sertifikatlangan mutaxassislarimiz yordamga tayyor. Daromad aylanishini optimallashtirish bo'yicha hoziroq bepul maslahat oling."
        },
        "cards": {
          "hours": {
            "title": "Ish vaqti",
            "desc": "Dushanba – Juma",
            "detail": "09:00 – 18:00"
          },
          "direct": {
            "title": "To'g'ridan-to'g'ri aloqa",
            "desc": "Mutaxassis bilan bog'lanish"
          },
          "office": {
            "title": "Ofis manzili",
            "desc": "Bosh ofisimiz"
          }
        },
        "whyCall": {
          "title": "Nega aynan bizga qo'ng'iroq qilishingiz kerak?",
          "points": {
            "revenue": "Kichik xatolarni tuzatish orqali daromadni 20% gacha oshirish",
            "insurance": "Sug'urta kompaniyalari bilan muammolarni hal qilish",
            "experts": "AAPC sertifikatiga ega mutaxassislar bilan ishlash"
          },
          "appointment": {
            "title": "Uchrashuv belgilash",
            "desc": "Video chat orqali batafsil tahlil",
            "message": "Agar telefon orqali gaplashishga vaqtingiz bo'lmasa, bizga xabar qoldiring. Mutaxassislarimiz sizga qulay vaqtda qayta bog'lanishadi.",
            "button": "Xabar qoldirish"
          }
        },
        "footer": {
          "title": "Moliyaviy muvaffaqiyat bir qo'ng'iroq masofasida",
          "desc": "To'lovlarning kechikishiga yo'l qo'ymang. Biz bilan billing tizimingizni aniq va tezkor qiling.",
          "button": "Hoziroq bog'laning"
        }
      },

      // Leave Message
      "leaveMessage": {
        "title": "Xabar qoldiring",
        "subtitle": "Sizga qanday yordam bera olamiz? Quyidagi formani to'ldiring.",
        "form": {
          "name": "To'liq ism-familiya",
          "email": "Elektron pochta",
          "phone": "Telefon raqami",
          "message": "Xabaringizni bu yerda batafsil yozing...",
          "submit": "Xabarni yuborish",
          "success": "Xabaringiz qabul qilindi. Tez orada bog'lanamiz!",
          "error": "Xatolik yuz berdi. Qayta urinib ko'ring.",
          "secure": "Secure & Encrypted Communication"
        }
      },

      // Contact Us
      "contactUs": {
        "hero": {
          "title": "Biz bilan bog'laning",
          "desc": "Savollaringiz bormi? Bizning jamoamiz billing jarayonlarini optimallashtirishda sizga yordam berishga tayyor."
        },
        "info": {
          "title": "Ma'lumotlarimiz",
          "address": {
            "title": "Manzil"
          },
          "phone": {
            "title": "Telefon"
          },
          "email": {
            "title": "Email"
          },
          "hours": {
            "title": "Ish vaqti",
            "weekdays": "Dushanba – Juma: 09:00 – 18:00",
            "weekend": "Shanba – Yakshanba: Dam olish kuni"
          }
        },
        "social": "Bizni kuzatib boring:",
        "form": {
          "title": "Xabar yuboring",
          "name": "To'liq ism",
          "email": "Email",
          "subject": "Mavzu",
          "message": "Xabar",
          "submit": "Yuborish",
          "placeholders": {
            "name": "Jonibek Toshpo'latov",
            "email": "vcare@example.com",
            "subject": "Billing maslahati"
          }
        }
      },

      // Contact
      "contact": {
        "hero": {
          "badge": "Biz bilan bog'laning",
          "title": "Sizga Yordam Berishga Tayyormiz",
          "desc": "Billing jarayonlarini avtomatlashtirish yoki daromadlarni oshirish bo'yicha savollaringiz bormi? Mutaxassislarimiz 24 soat ichida sizga javob berishadi.",
          "chat": "Live Chat",
          "support": "Global Support"
        },
        "info": {
          "title": "Aloqa Ma'lumotlari",
          "desc": "Biz bilan bog'lanishning bir necha oson yo'llari mavjud."
        },
        "form": {
          "title": "Xabar Yo'llang",
          "name": "To'liq ismingiz",
          "email": "Email manzilingiz",
          "subject": "Mavzu",
          "message": "Xabar matni",
          "options": {
            "service": "Xizmatlar haqida savol",
            "pricing": "Narxlar tahlili",
            "support": "Texnik yordam",
            "partnership": "Hamkorlik"
          },
          "submit": "Yuborish"
        }
      },

      // Reviews
      "reviews": {
        "badge": "Mijozlarimiz fikri",
        "title": "Bizga bo'lgan Ishonch",
        "subtitle": "Dunyo bo'ylab yuzlab tibbiy markazlar o'z moliya tizimini bizga ishonishgan. Ularning tajribasi bilan tanishing.",
        "form": {
          "title": "Fikringizni qoldiring",
          "subtitle": "Sizning fikringiz biz uchun juda muhim.",
          "name": "To'liq ism",
          "job": "Lavozimingiz",
          "rating": "Reyting (1-5)",
          "message": "Mulohaza",
          "submit": "Yuborish"
        }
      },

      // Schedule Appointment
      "schedule": {
        "badge": "Maslahat Oling",
        "title": "Mutaxassis bilan uchrashuv belgilang",
        "desc": "Kerakli sana va xizmat turini tanlash orqali tashrifingizni oson bron qiling. Bizning billing mutaxassislarimiz qisqa vaqt ichida siz bilan bog'lanishadi.",
        "features": {
          "professionals": "Professional Billing Mutaxassislari",
          "systems": "Zamonaviy RCM Tizimlari",
          "online": "24/7 Onlayn Navbat"
        },
        "form": {
          "name": "To'liq ismingiz",
          "phone": "Telefon raqamingiz",
          "date": "Sana",
          "service": "Xizmat turini tanlang",
          "select": "Xizmatni tanlang",
          "options": {
            "coding": "Tibbiy Kodlash",
            "audit": "Audit va Konsalting",
            "rcm": "To'liq RCM Boshqaruvi"
          },
          "submit": "Uchrashuvni Tasdiqlash"
        }
      },

      // Sign In
      "signIn": {
        "title": "Vcare Portal",
        "subtitle": "Boshqaruv paneliga xavfsiz kirish",
        "email": "Email Manzil",
        "password": "Parol",
        "forgot": "Unutdingizmi?",
        "submit": "Tizimga kirish",
        "noAccount": "Akkountingiz yo'qmi?",
        "signUp": "Ro'yxatdan o'ting",
        "secure": "256-bit SSL Secure",
        "hipaa": "HIPAA Compliant",
        "errors": {
          "notFound": "Akkount topilmadi. Iltimos, ro'yxatdan o'ting!",
          "invalid": "Email yoki parol noto'g'ri!",
          "welcome": "Xush kelibsiz! Tizimga kirildi."
        }
      },

      // Sign Up
      "signUp": {
        "title": "Yangi hisob yaratish",
        "subtitle": "Professional billing xizmatlaridan foydalanishni boshlang",
        "fullName": "To'liq ism-familiya",
        "email": "Elektron pochta",
        "password": "Parol",
        "confirm": "Tasdiqlash",
        "submit": "Hisob yaratish",
        "hasAccount": "Profilingiz bormi?",
        "signIn": "Kirish",
        "encrypted": "End-to-end Encrypted",
        "hipaa": "HIPAA Compliant",
        "errors": {
          "passwordMismatch": "Parollar bir-biriga mos kelmadi!",
          "success": "Ma'lumotlar botga yuborildi va saqlandi!",
          "error": "Xatolik yuz berdi. Qayta urinib ko'ring."
        }
      },

      // Dashboard
      "dashboard": {
        "title": "Boshqaruv paneli",
        "stats": {
          "products": "Mahsulotlar",
          "orders": "Buyurtmalar",
          "users": "Foydalanuvchilar",
          "revenue": "Daromad"
        },
        "quickActions": "Tezkor amallar",
        "recentActivity": "Yaqindagi faollik",
        "actions": {
          "addProduct": "Mahsulot qo'shish",
          "viewOrders": "Buyurtmalarni ko'rish",
          "manageUsers": "Foydalanuvchilarni boshqarish",
          "settings": "Sozlamalar"
        }
      },

      // Footer
      "footer": {
        "desc": "Biz 1985-yildan beri tibbiy muassasalar uchun moliya va billing jarayonlarini shaffof va samarali boshqarib kelmoqdamiz. Sizning muvaffaqiyatingiz — bizning ustuvorligimiz.",
        "usefulLinks": "Foydali Havolalar",
        "ourServices": "Xizmatlarimiz",
        "subscribe": "Obuna Bo'ling",
        "rights": "Barcha huquqlar himoyalangan.",
        "privacy": "Maxfiylik siyosati",
        "terms": "Foydalanish shartlari",
        "secure": "SSL SECURE",
        "links": {
          "home": "Bosh sahifa",
          "services": "Xizmatlar",
          "products": "Mahsulotlar",
          "reviews": "Sharhlar",
          "contact": "Aloqa"
        },
        "services": {
          "rcm": "Revenue Cycle Management",
          "coding": "Medical Coding",
          "accounts": "Accounts Receivable",
          "statements": "Patient Statements",
          "credentialing": "Credentialing Services"
        }
      },

      // NotFound
      "notFound": {
        "title": "Sahifa topilmadi",
        "desc": "Siz qidirayotgan sahifa o'chirilgan, nomi o'zgartirilgan yoki vaqtincha mavjud emas.",
        "button": "Bosh sahifaga qaytish"
      },

      // Common
      "common": {
        "loading": "Yuklanmoqda...",
        "error": "Xatolik yuz berdi",
        "back": "Orqaga",
        "send": "Yuborish",
        "save": "Saqlash",
        "cancel": "Bekor qilish",
        "search": "Qidirish",
        "filter": "Filter",
        "sort": "Saralash",
        "readMore": "Batafsil o'qish",
        "learnMore": "Batafsil ma'lumot"
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "products": "Products",
        "blog": "Blog",
        "contact": "Contact",
        "reviews": "Reviews",
        "cart": "Cart",
        "signIn": "Sign In",
        "signUp": "Sign Up",
        "dashboard": "Dashboard"
      },
      "home": {
        "hero": {
          "badge": "Best RCM Service 2026",
          "title1": "Advancing Healthcare",
          "title2": "Through Innovation",
          "description": "Since 1985, we have been providing world-class accuracy in medical billing and finance. We will elevate your healthcare facility's revenue to a professional level.",
          "jci": "Accredited Authority",
          "iso": "Certified",
          "startBtn": "Get Started",
          "aboutBtn": "About Us",
          "successRate": "Success Rate",
          "systemOnline": "System Online"
        },
        "practic": {
          "badge": "Trusted Partnership",
          "title": "About Our Clients and Experience",
          "description": "As a trusted representative in the medical billing field, we serve various healthcare organizations. Our reputation is a guarantee of financial transparency and seamless operations.",
          "appointmentBtn": "Schedule Appointment",
          "specialtiesBtn": "View Specialties",
          "services": {
            "title": "Medical Billing Specialties",
            "subtitle": "We provide customized billing solutions for every medical practice.",
            "medicalCoding": "MEDICAL CODING & BILLING",
            "medicalCodingDesc": "Accurate medical billing and coding play a crucial role in receiving payments on time. Even small errors can cause payment delays.",
            "accountsReceivable": "Accounts Receivable Management",
            "accountsReceivableDesc": "At Vcare Medical Billing, we actively manage your practice's accounts receivable and ensure cash flow.",
            "credentialing": "Credentialing & Contracts",
            "credentialingDesc": "Establishing a medical facility depends on contracts. We negotiate with insurance companies for the best rates.",
            "outOfNetwork": "Out-of-Network Negotiations",
            "outOfNetworkDesc": "We professionally handle out-of-network claims with major providers like Multiplan, Zelis, and Viant.",
            "insuranceVerification": "Insurance Verification",
            "insuranceVerificationDesc": "We ensure payment guarantee by accurately verifying patients' insurance coverage and benefits before service.",
            "fullRCM": "Full RCM Services",
            "fullRCMDesc": "Vcare manages all processes from patient arrival to payment receipt and trains your staff."
          },
          "whoWeServe": {
            "title": "Who We Serve?",
            "hospitals": "Hospitals",
            "privateClinics": "Private Clinics",
            "emergency": "Emergency Care",
            "ambulatory": "Ambulatory Centers",
            "laboratories": "Laboratories",
            "dentistry": "Dentistry",
            "nursingHomes": "Nursing Homes",
            "urgentCare": "Urgent Care"
          },
          "stats": {
            "accuracy": "Accuracy Rate",
            "experience": "Years Experience",
            "claimSubmission": "Claim Submission",
            "payments": "Approved Payments"
          }
        }
      },
      "about": {
        "badge": "About Us",
        "title1": "Entrust your healthcare facility's",
        "title2": "finances to reliable hands",
        "description": "We provide professional Revenue Cycle Management (RCM) and Medical Billing services for healthcare facilities. Increasing your revenue and automating processes is our main task.",
        "contactBtn": "Contact Us",
        "servicesBtn": "Our Services",
        "stats": {
          "claimRate": "Claim Acceptance Rate",
          "experience": "Years of Experience",
          "partners": "Partner Clinics",
          "support": "Customer Support"
        },
        "mission": {
          "title": "Our Mission",
          "description": "Healthcare professionals should focus on their most important task — treating patients. We take on complex financial processes like paperwork, dealing with insurance companies, and collecting payments. Our goal is to ensure your financial stability."
        },
        "whyUs": {
          "title": "Why Choose Us?",
          "subtitle": "By working with us, you save not only time but also your nerves and money.",
          "accuracy": {
            "title": "High Accuracy",
            "desc": "We reduce errors in documents sent to insurance companies by up to 99%, preventing payment denials."
          },
          "privacy": {
            "title": "Complete Privacy (HIPAA)",
            "desc": "Your patients' personal and medical information is protected at the highest level according to HIPAA regulations."
          },
          "speed": {
            "title": "Fast Payments",
            "desc": "By accelerating billing processes, we ensure record-breaking short payment receipts for your clinic."
          }
        },
        "cta": {
          "title": "Increase Your Clinic's Revenue With Us!",
          "description": "Get a free consultation and find a professional solution to your financial problems. Our experts are ready to help you.",
          "button": "Get Free Consultation"
        }
      },
      "aboutMore": {
        "title": "Learn More",
        "subtitle": "About Us",
        "description1": "Our company provides professional Revenue Cycle Management services for healthcare providers. We help clinics and hospitals manage their billing processes more efficiently and reduce administrative workload.",
        "description2": "Our experienced team works with modern technologies and secure systems to ensure that every claim is processed correctly.",
        "description3": "By improving billing workflows and reducing claim errors, we help medical organizations increase revenue and receive payments faster.",
        "mission": {
          "title": "Our Mission",
          "desc": "Our mission is to simplify medical billing processes and help healthcare providers focus more on patient care."
        },
        "experience": {
          "title": "Our Experience",
          "desc": "Our team has strong knowledge in medical billing, insurance verification, and claims management."
        },
        "goal": {
          "title": "Our Goal",
          "desc": "We aim to provide efficient, accurate, and reliable Revenue Cycle Management services for every client."
        }
      },
      "services": {
        "hero": {
          "title": "Full-Cycle RCM Solutions for Modern Healthcare",
          "quote": "We don't just do billing, we ensure the financial stability of your medical business.",
          "claimRate": "Clean Claims Rate",
          "hipaa": "Fully HIPAA Compliant"
        },
        "process": {
          "title": "How We Work",
          "subtitle": "Our 4-step strategy for success",
          "step1": {
            "title": "Data Collection",
            "desc": "We securely receive information about patients and services provided."
          },
          "step2": {
            "title": "Audit & Coding",
            "desc": "Our experts carefully check each code for errors."
          },
          "step3": {
            "title": "Claim Submission",
            "desc": "Prepared claims are submitted to insurance companies within 24 hours."
          },
          "step4": {
            "title": "Payment Monitoring",
            "desc": "We track the process until funds are received in your account."
          }
        },
        "mainServices": {
          "billing": {
            "title": "Medical Billing & Professional Coding",
            "desc": "Our professional coders accurately code each diagnosis. This significantly reduces the number of denials. With us, every cent returns on time.",
            "features": {
              "icd10": "ICD-10 Audit",
              "cpt": "CPT Coding",
              "denials": "Denied Claims Management",
              "report": "Weekly Financial Report"
            }
          },
          "verification": {
            "title": "Prior Compliance Verification",
            "desc": "Prior insurance verification is the key to financial stability. We clarify all financial matters before the patient arrives at the clinic.",
            "quote": "When working with Vcare, you completely avoid unexpected payment denials and financial misunderstandings with patients."
          }
        },
        "faq": {
          "title": "Frequently Asked Questions",
          "q1": {
            "question": "How is the service fee calculated?",
            "answer": "We work on a small percentage of the total collected amount or a fixed price for each claim submitted. The choice is yours!"
          },
          "q2": {
            "question": "How is data security?",
            "answer": "All data is stored on 256-bit encrypted servers according to HIPAA requirements. Security is our top priority."
          },
          "q3": {
            "question": "How are reports provided?",
            "answer": "You receive weekly and monthly detailed financial analyses. You can also monitor the status anytime through your portal."
          }
        },
        "cta": {
          "title": "Ready to Increase Your Clinic's Revenue?",
          "desc": "Entrust your financial system to experts and focus all your attention on patients. Request a free audit today!",
          "button": "Contact Now"
        }
      },
      "serviceDetails": {
        "notFound": "Information not found",
        "price": "Service Price",
        "features": "Service Features",
        "process": "Work Process",
        "testimonial": "Client Testimonial",
        "projects": "Completed Projects",
        "orderBtn": "Order Now"
      },
      "products": {
        "title": "Products",
        "loading": "Loading...",
        "empty": "No products found",
        "details": {
          "notFound": "Product not found",
          "back": "Go back",
          "premium": "Premium Quality",
          "inStock": "In Stock",
          "category": "Category",
          "delivery": "Delivery",
          "warranty": "Warranty",
          "freeDelivery": "Free (within 24 hours)",
          "officialWarranty": "months official",
          "addToCart": "Add to Cart",
          "addToWishlist": "Add to Wishlist",
          "alreadyInCart": "This product is already in the cart",
          "addedToCart": "Product successfully added!"
        },
        "item": {
          "sale": "SALE",
          "details": "View Details"
        }
      },
      "cart": {
        "title": "Cart",
        "empty": "Cart is empty",
        "remove": "Remove",
        "total": "Total",
        "checkout": "Checkout"
      },
      "blog": {
        "hero": {
          "badge": "About Our Company",
          "title1": "Want to Know",
          "title2": "About Us?",
          "description": "From patient visit to payment receipt, our professional RCM team helps you grow. We specialize in identifying and solving problems in revenue cycle management (RCM).",
          "callBtn": "Call Us",
          "messageBtn": "Leave a Message",
          "clientSatisfaction": "Client Satisfaction"
        },
        "features": {
          "title": "Why Doctors Trust Vcare Billing?",
          "subtitle1": "The Vcare Medical Billing team is committed to providing high-quality medical billing and coding services.",
          "subtitle2": "Building strong relationships with clients is very important to us. Our knowledgeable experts respond quickly to your every query and give you individual attention.",
          "certifiedCoders": {
            "title": "Certified Coders",
            "desc": "Our AAPC-certified coders and skilled billing professionals provide accurate service. We teach your team the secrets to increasing revenue."
          },
          "experience": {
            "title": "Extensive Experience",
            "desc": "With 15 years of experience, we build strong relationships between insurance companies and clients and guarantee service quality."
          },
          "personalApproach": {
            "title": "Personal Approach",
            "desc": "Based on each client's needs, we simplify complex billing processes and collect payments on time."
          },
          "constantUpdate": {
            "title": "Constant Updates",
            "desc": "We are always aware of all new laws and regulations in the field. We tailor our services to our clients' unique requirements."
          }
        },
        "highlight": {
          "title": "High Precision in Medical Billing",
          "desc": "Achieve financial success with our billing and coding experts with over 25 years of experience. Even small errors can lead to payment denials and delays.",
          "points": {
            "accurate": "Accurate Claims",
            "fast": "Fast Payment Collection",
            "minimal": "Minimal Denials"
          }
        },
        "cta": {
          "title": "Ready to Increase Your Revenue?",
          "desc": "Imagine us as part of your team. Our goal is to save you time, increase revenue, and allow you to focus on patient care.",
          "button": "Contact Us Today"
        }
      },
      "callUs": {
        "hero": {
          "badge": "Secure Billing Solutions",
          "title": "Expert Billing Consultation",
          "desc": "Our certified experts are ready to help. Get a free consultation on optimizing your revenue cycle today."
        },
        "cards": {
          "hours": {
            "title": "Working Hours",
            "desc": "Monday – Friday",
            "detail": "09:00 – 18:00"
          },
          "direct": {
            "title": "Direct Contact",
            "desc": "Connect with an expert"
          },
          "office": {
            "title": "Office Address",
            "desc": "Main Office"
          }
        },
        "whyCall": {
          "title": "Why should you call us?",
          "points": {
            "revenue": "Increase revenue by up to 20% by correcting small errors",
            "insurance": "Resolve issues with insurance companies",
            "experts": "Work with AAPC certified experts"
          },
          "appointment": {
            "title": "Schedule an Appointment",
            "desc": "Detailed analysis via video chat",
            "message": "If you don't have time to talk on the phone, leave us a message. Our experts will get back to you at a convenient time.",
            "button": "Leave a Message"
          }
        },
        "footer": {
          "title": "Financial success is just one call away",
          "desc": "Don't let payments be delayed. Make your billing system accurate and fast with us.",
          "button": "Contact Now"
        }
      },
      "leaveMessage": {
        "title": "Leave a Message",
        "subtitle": "How can we help you? Fill out the form below.",
        "form": {
          "name": "Full name",
          "email": "Email",
          "phone": "Phone number",
          "message": "Write your message in detail here...",
          "submit": "Send Message",
          "success": "Your message has been received. We will contact you soon!",
          "error": "An error occurred. Please try again.",
          "secure": "Secure & Encrypted Communication"
        }
      },
      "contactUs": {
        "hero": {
          "title": "Contact Us",
          "desc": "Have questions? Our team is ready to help you optimize billing processes."
        },
        "info": {
          "title": "Our Information",
          "address": {
            "title": "Address"
          },
          "phone": {
            "title": "Phone"
          },
          "email": {
            "title": "Email"
          },
          "hours": {
            "title": "Working Hours",
            "weekdays": "Monday – Friday: 09:00 – 18:00",
            "weekend": "Saturday – Sunday: Closed"
          }
        },
        "social": "Follow us:",
        "form": {
          "title": "Send a Message",
          "name": "Full name",
          "email": "Email",
          "subject": "Subject",
          "message": "Message",
          "submit": "Send",
          "placeholders": {
            "name": "John Doe",
            "email": "vcare@example.com",
            "subject": "Billing consultation"
          }
        }
      },
      "contact": {
        "hero": {
          "badge": "Contact Us",
          "title": "We're Ready to Help You",
          "desc": "Have questions about automating billing processes or increasing revenue? Our experts will respond within 24 hours.",
          "chat": "Live Chat",
          "support": "Global Support"
        },
        "info": {
          "title": "Contact Information",
          "desc": "There are several easy ways to contact us."
        },
        "form": {
          "title": "Send a Message",
          "name": "Your full name",
          "email": "Your email",
          "subject": "Subject",
          "message": "Message",
          "options": {
            "service": "Question about services",
            "pricing": "Pricing analysis",
            "support": "Technical support",
            "partnership": "Partnership"
          },
          "submit": "Send"
        }
      },
      "reviews": {
        "badge": "Client Feedback",
        "title": "Trust in Us",
        "subtitle": "Hundreds of medical centers worldwide have entrusted their financial systems to us. Get to know their experience.",
        "form": {
          "title": "Leave Your Feedback",
          "subtitle": "Your opinion is very important to us.",
          "name": "Full name",
          "job": "Your position",
          "rating": "Rating (1-5)",
          "message": "Feedback",
          "submit": "Submit"
        }
      },
      "schedule": {
        "badge": "Get Consultation",
        "title": "Schedule an Appointment with an Expert",
        "desc": "Easily book your visit by choosing the desired date and service type. Our billing experts will contact you shortly.",
        "features": {
          "professionals": "Professional Billing Experts",
          "systems": "Modern RCM Systems",
          "online": "24/7 Online Queue"
        },
        "form": {
          "name": "Your full name",
          "phone": "Your phone number",
          "date": "Date",
          "service": "Select service type",
          "select": "Select a service",
          "options": {
            "coding": "Medical Coding",
            "audit": "Audit & Consulting",
            "rcm": "Full RCM Management"
          },
          "submit": "Confirm Appointment"
        }
      },
      "signIn": {
        "title": "Vcare Portal",
        "subtitle": "Secure access to dashboard",
        "email": "Email Address",
        "password": "Password",
        "forgot": "Forgot?",
        "submit": "Sign In",
        "noAccount": "Don't have an account?",
        "signUp": "Sign Up",
        "secure": "256-bit SSL Secure",
        "hipaa": "HIPAA Compliant",
        "errors": {
          "notFound": "Account not found. Please sign up!",
          "invalid": "Incorrect email or password!",
          "welcome": "Welcome! You have signed in."
        }
      },
      "signUp": {
        "title": "Create New Account",
        "subtitle": "Start using professional billing services",
        "fullName": "Full name",
        "email": "Email",
        "password": "Password",
        "confirm": "Confirm Password",
        "submit": "Create Account",
        "hasAccount": "Already have a profile?",
        "signIn": "Sign In",
        "encrypted": "End-to-end Encrypted",
        "hipaa": "HIPAA Compliant",
        "errors": {
          "passwordMismatch": "Passwords do not match!",
          "success": "Information sent to bot and saved!",
          "error": "An error occurred. Please try again."
        }
      },
      "dashboard": {
        "title": "Dashboard",
        "stats": {
          "products": "Products",
          "orders": "Orders",
          "users": "Users",
          "revenue": "Revenue"
        },
        "quickActions": "Quick Actions",
        "recentActivity": "Recent Activity",
        "actions": {
          "addProduct": "Add Product",
          "viewOrders": "View Orders",
          "manageUsers": "Manage Users",
          "settings": "Settings"
        }
      },
      "footer": {
        "desc": "Since 1985, we have been transparently and efficiently managing financial and billing processes for medical institutions. Your success is our priority.",
        "usefulLinks": "Useful Links",
        "ourServices": "Our Services",
        "subscribe": "Subscribe",
        "rights": "All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use",
        "secure": "SSL SECURE",
        "links": {
          "home": "Home",
          "services": "Services",
          "products": "Products",
          "reviews": "Reviews",
          "contact": "Contact"
        },
        "services": {
          "rcm": "Revenue Cycle Management",
          "coding": "Medical Coding",
          "accounts": "Accounts Receivable",
          "statements": "Patient Statements",
          "credentialing": "Credentialing Services"
        }
      },
      "notFound": {
        "title": "Page Not Found",
        "desc": "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
        "button": "Go Home"
      },
      "common": {
        "loading": "Loading...",
        "error": "An error occurred",
        "back": "Back",
        "send": "Send",
        "save": "Save",
        "cancel": "Cancel",
        "search": "Search",
        "filter": "Filter",
        "sort": "Sort",
        "readMore": "Read more",
        "learnMore": "Learn more"
      }
    }
  },
  ru: {
    translation: {
      "nav": {
        "home": "Главная",
        "about": "О нас",
        "services": "Услуги",
        "products": "Продукты",
        "blog": "Блог",
        "contact": "Контакты",
        "reviews": "Отзывы",
        "cart": "Корзина",
        "signIn": "Вход",
        "signUp": "Регистрация",
        "dashboard": "Панель управления"
      },
      "home": {
        "hero": {
          "badge": "Лучшая RCM услуга 2026 года",
          "title1": "Развитие здравоохранения",
          "title2": "через инновации",
          "description": "С 1985 года мы предоставляем медицинский биллинг и финансовые услуги с точностью мирового уровня. Поднимем доход вашего медицинского учреждения на профессиональный уровень.",
          "jci": "Аккредитованный орган",
          "iso": "Сертифицировано",
          "startBtn": "Начать",
          "aboutBtn": "О нас",
          "successRate": "Уровень успеха",
          "systemOnline": "Система онлайн"
        },
        "practic": {
          "badge": "Надежное партнерство",
          "title": "О наших клиентах и опыте",
          "description": "Как надежный представитель в сфере медицинского биллинга, мы обслуживаем различные организации здравоохранения. Наша репутация — гарантия финансовой прозрачности и бесперебойной работы.",
          "appointmentBtn": "Назначить встречу",
          "specialtiesBtn": "Смотреть специализации",
          "services": {
            "title": "Направления медицинского биллинга",
            "subtitle": "Мы предоставляем индивидуальные решения для каждой медицинской практики.",
            "medicalCoding": "МЕДИЦИНСКОЕ КОДИРОВАНИЕ И БИЛЛИНГ",
            "medicalCodingDesc": "Точный медицинский биллинг и кодирование играют важную роль в своевременном получении платежей. Даже небольшие ошибки могут привести к задержкам платежей.",
            "accountsReceivable": "Управление дебиторской задолженностью",
            "accountsReceivableDesc": "В Vcare Medical Billing мы активно управляем дебиторской задолженностью вашей практики и обеспечиваем денежный поток.",
            "credentialing": "Кредитование и контракты",
            "credentialingDesc": "Создание медицинского учреждения зависит от контрактов. Мы ведем переговоры со страховыми компаниями о лучших тарифах.",
            "outOfNetwork": "Внешние переговоры",
            "outOfNetworkDesc": "Мы профессионально решаем внешние претензии с крупными провайдерами, такими как Multiplan, Zelis и Viant.",
            "insuranceVerification": "Проверка страховки",
            "insuranceVerificationDesc": "Мы гарантируем оплату, точно проверяя страховое покрытие и льготы пациентов до оказания услуги.",
            "fullRCM": "Полные услуги RCM",
            "fullRCMDesc": "Vcare управляет всеми процессами от прибытия пациента до получения оплаты и обучает ваш персонал."
          },
          "whoWeServe": {
            "title": "Кому мы оказываем услуги?",
            "hospitals": "Больницы",
            "privateClinics": "Частные клиники",
            "emergency": "Скорая помощь",
            "ambulatory": "Амбулаторные центры",
            "laboratories": "Лаборатории",
            "dentistry": "Стоматологии",
            "nursingHomes": "Дома престарелых",
            "urgentCare": "Неотложная помощь"
          },
          "stats": {
            "accuracy": "Точность",
            "experience": "Лет опыта",
            "claimSubmission": "Подача претензий",
            "payments": "Подтвержденные платежи"
          }
        }
      },
      "about": {
        "badge": "О нас",
        "title1": "Доверьте финансы",
        "title2": "своего медучреждения надежным рукам",
        "description": "Мы предоставляем профессиональные услуги по управлению циклом доходов (RCM) и медицинскому биллингу для медицинских учреждений. Увеличение вашего дохода и автоматизация процессов — наша главная задача.",
        "contactBtn": "Свяжитесь с нами",
        "servicesBtn": "Наши услуги",
        "stats": {
          "claimRate": "Принятие претензий",
          "experience": "Лет опыта",
          "partners": "Клиники-партнеры",
          "support": "Поддержка клиентов"
        },
        "mission": {
          "title": "Наша миссия",
          "description": "Медицинские работники должны сосредоточиться на своей самой важной задаче — лечении пациентов. Мы берем на себя сложные финансовые процессы, такие как бумажная работа, работа со страховыми компаниями и сбор платежей. Наша цель — обеспечить вашу финансовую стабильность."
        },
        "whyUs": {
          "title": "Почему именно мы?",
          "subtitle": "Работая с нами, вы экономите не только время, но и нервы и деньги.",
          "accuracy": {
            "title": "Высокая точность",
            "desc": "Мы уменьшаем количество ошибок в документах, отправляемых в страховые компании, до 99%, предотвращая отказ в оплате."
          },
          "privacy": {
            "title": "Полная конфиденциальность (HIPAA)",
            "desc": "Личная и медицинская информация ваших пациентов защищена на самом высоком уровне в соответствии с правилами HIPAA."
          },
          "speed": {
            "title": "Быстрые платежи",
            "desc": "Ускоряя процессы выставления счетов, мы обеспечиваем поступление денег в вашу клинику в рекордно короткие сроки."
          }
        },
        "cta": {
          "title": "Увеличьте доход своей клиники вместе с нами!",
          "description": "Получите бесплатную консультацию и найдите профессиональное решение своих финансовых проблем. Наши эксперты готовы вам помочь.",
          "button": "Получить бесплатную консультацию"
        }
      },
      "aboutMore": {
        "title": "Узнать больше",
        "subtitle": "О нас",
        "description1": "Наша компания предоставляет профессиональные услуги по управлению циклом доходов для поставщиков медицинских услуг. Мы помогаем клиникам и больницам более эффективно управлять процессами биллинга и снижать административную нагрузку.",
        "description2": "Наша опытная команда работает с современными технологиями и безопасными системами.",
        "description3": "Улучшая рабочие процессы биллинга и уменьшая количество ошибок в претензиях, мы помогаем медицинским организациям увеличивать доход и быстрее получать платежи.",
        "mission": {
          "title": "Наша миссия",
          "desc": "Упростить процессы медицинского биллинга и помочь врачам больше сосредоточиться на уходе за пациентами."
        },
        "experience": {
          "title": "Наш опыт",
          "desc": "Наша команда обладает глубокими знаниями в области медицинского биллинга, проверки страховки и управления претензиями."
        },
        "goal": {
          "title": "Наша цель",
          "desc": "Предоставлять эффективные, точные и надежные услуги RCM каждому клиенту."
        }
      },
      "services": {
        "hero": {
          "title": "Полноцикловые RCM решения для современной медицины",
          "quote": "Мы не просто занимаемся биллингом, мы обеспечиваем финансовую стабильность вашего медицинского бизнеса.",
          "claimRate": "Показатель чистых претензий",
          "hipaa": "Полное соответствие HIPAA"
        },
        "process": {
          "title": "Как мы работаем",
          "subtitle": "Наша 4-этапная стратегия успеха",
          "step1": {
            "title": "Сбор данных",
            "desc": "Мы безопасно получаем информацию о пациентах и предоставленных услугах."
          },
          "step2": {
            "title": "Аудит и кодирование",
            "desc": "Наши эксперты тщательно проверяют каждый код на наличие ошибок."
          },
          "step3": {
            "title": "Подача претензий",
            "desc": "Подготовленные претензии отправляются в страховые компании в течение 24 часов."
          },
          "step4": {
            "title": "Мониторинг платежей",
            "desc": "Мы отслеживаем процесс до поступления средств на ваш счет."
          }
        },
        "mainServices": {
          "billing": {
            "title": "Медицинский биллинг и профессиональное кодирование",
            "desc": "Наши профессиональные кодировщики точно кодируют каждый диагноз. Это значительно сокращает количество отказов. С нами каждый цент возвращается вовремя.",
            "features": {
              "icd10": "Аудит ICD-10",
              "cpt": "Кодирование CPT",
              "denials": "Управление отклоненными претензиями",
              "report": "Еженедельный финансовый отчет"
            }
          },
          "verification": {
            "title": "Предварительная проверка соответствия",
            "desc": "Предварительная проверка страховки — ключ к финансовой стабильности. Мы выясняем все финансовые вопросы до прихода пациента в клинику.",
            "quote": "Работая с Vcare, вы полностью избегаете неожиданных отказов в оплате и финансовых недоразумений с пациентами."
          }
        },
        "faq": {
          "title": "Часто задаваемые вопросы",
          "q1": {
            "question": "Как рассчитывается стоимость услуги?",
            "answer": "Мы работаем за небольшой процент от общей собранной суммы или по фиксированной цене за каждую поданную претензию. Выбор за вами!"
          },
          "q2": {
            "question": "Как обеспечивается безопасность данных?",
            "answer": "Все данные хранятся на 256-битных зашифрованных серверах в соответствии с требованиями HIPAA. Безопасность для нас на первом месте."
          },
          "q3": {
            "question": "Как предоставляются отчеты?",
            "answer": "Вы получаете еженедельные и ежемесячные подробные финансовые анализы. Вы также можете в любое время следить за состоянием через свой портал."
          }
        },
        "cta": {
          "title": "Готовы увеличить доход своей клиники?",
          "desc": "Доверьте свою финансовую систему экспертам и сосредоточьте все внимание на пациентах. Запросите бесплатный аудит сегодня!",
          "button": "Связаться сейчас"
        }
      },
      "serviceDetails": {
        "notFound": "Информация не найдена",
        "price": "Стоимость услуги",
        "features": "Состав услуги",
        "process": "Процесс работы",
        "testimonial": "Отзыв клиента",
        "projects": "Выполненные проекты",
        "orderBtn": "Заказать"
      },
      "products": {
        "title": "Продукты",
        "loading": "Загрузка...",
        "empty": "Продукты не найдены",
        "details": {
          "notFound": "Продукт не найден",
          "back": "Назад",
          "premium": "Премиум качество",
          "inStock": "В наличии",
          "category": "Категория",
          "delivery": "Доставка",
          "warranty": "Гарантия",
          "freeDelivery": "Бесплатно (в течение 24 часов)",
          "officialWarranty": "месяцев официальная",
          "addToCart": "В корзину",
          "addToWishlist": "В избранное",
          "alreadyInCart": "Уже в корзине",
          "addedToCart": "Товар добавлен!"
        },
        "item": {
          "sale": "СКИДКА",
          "details": "Подробнее"
        }
      },
      "cart": {
        "title": "Корзина",
        "empty": "Корзина пуста",
        "remove": "Удалить",
        "total": "Итого",
        "checkout": "Оформить заказ"
      },
      "blog": {
        "hero": {
          "badge": "О нашей компании",
          "title1": "Хотите узнать",
          "title2": "о нас?",
          "description": "От визита пациента до получения оплаты наша профессиональная команда RCM помогает вам расти. Мы специализируемся на выявлении и решении проблем в управлении циклом доходов (RCM).",
          "callBtn": "Позвоните нам",
          "messageBtn": "Оставьте сообщение",
          "clientSatisfaction": "Удовлетворенность клиентов"
        },
        "features": {
          "title": "Почему врачи доверяют Vcare Billing?",
          "subtitle1": "Команда Vcare Medical Billing стремится предоставлять высококачественные услуги медицинского биллинга и кодирования.",
          "subtitle2": "Построение прочных отношений с клиентами для нас очень важно. Наши знающие эксперты быстро отвечают на каждый ваш запрос и уделяют вам индивидуальное внимание.",
          "certifiedCoders": {
            "title": "Сертифицированные кодировщики",
            "desc": "Наши кодировщики с сертификацией AAPC и квалифицированные специалисты по биллингу предоставляют точные услуги. Мы обучаем вашу команду секретам увеличения дохода."
          },
          "experience": {
            "title": "Большой опыт",
            "desc": "Имея 15-летний опыт, мы устанавливаем прочные отношения между страховыми компаниями и клиентами и гарантируем качество услуг."
          },
          "personalApproach": {
            "title": "Индивидуальный подход",
            "desc": "Исходя из потребностей каждого клиента, мы упрощаем сложные процессы биллинга и своевременно собираем платежи."
          },
          "constantUpdate": {
            "title": "Постоянное обновление",
            "desc": "Мы всегда в курсе всех новых законов и правил в этой области. Мы адаптируем наши услуги к уникальным требованиям наших клиентов."
          }
        },
        "highlight": {
          "title": "Высокая точность в медицинском биллинге",
          "desc": "Достигните финансового успеха с нашими экспертами по биллингу и кодированию, имеющими более 25-летний опыт. Даже небольшие ошибки могут привести к отказу в оплате и задержкам.",
          "points": {
            "accurate": "Точные претензии",
            "fast": "Быстрый сбор платежей",
            "minimal": "Минимум отказов"
          }
        },
        "cta": {
          "title": "Готовы увеличить свой доход?",
          "desc": "Представьте нас частью своей команды. Наша цель — сэкономить ваше время, увеличить доход и позволить вам сосредоточиться на уходе за пациентами.",
          "button": "Свяжитесь с нами сегодня"
        }
      },
      "callUs": {
        "hero": {
          "badge": "Безопасные решения для биллинга",
          "title": "Консультация эксперта по биллингу",
          "desc": "Наши сертифицированные эксперты готовы помочь. Получите бесплатную консультацию по оптимизации цикла доходов сегодня."
        },
        "cards": {
          "hours": {
            "title": "Часы работы",
            "desc": "Понедельник – Пятница",
            "detail": "09:00 – 18:00"
          },
          "direct": {
            "title": "Прямая связь",
            "desc": "Свяжитесь с экспертом"
          },
          "office": {
            "title": "Адрес офиса",
            "desc": "Главный офис"
          }
        },
        "whyCall": {
          "title": "Почему вам стоит позвонить нам?",
          "points": {
            "revenue": "Увеличение дохода до 20% за счет исправления мелких ошибок",
            "insurance": "Решение проблем со страховыми компаниями",
            "experts": "Работа с экспертами, сертифицированными AAPC"
          },
          "appointment": {
            "title": "Назначить встречу",
            "desc": "Детальный анализ через видеочат",
            "message": "Если у вас нет времени говорить по телефону, оставьте нам сообщение. Наши эксперты свяжутся с вами в удобное время.",
            "button": "Оставить сообщение"
          }
        },
        "footer": {
          "title": "Финансовый успех всего в одном звонке",
          "desc": "Не допускайте задержек платежей. Сделайте свою систему биллинга точной и быстрой с нами.",
          "button": "Свяжитесь сейчас"
        }
      },
      "leaveMessage": {
        "title": "Оставьте сообщение",
        "subtitle": "Чем мы можем вам помочь? Заполните форму ниже.",
        "form": {
          "name": "Полное имя",
          "email": "Электронная почта",
          "phone": "Номер телефона",
          "message": "Напишите здесь свое сообщение подробно...",
          "submit": "Отправить сообщение",
          "success": "Ваше сообщение получено. Мы скоро свяжемся с вами!",
          "error": "Произошла ошибка. Пожалуйста, попробуйте снова.",
          "secure": "Безопасная и зашифрованная связь"
        }
      },
      "contactUs": {
        "hero": {
          "title": "Свяжитесь с нами",
          "desc": "Есть вопросы? Наша команда готова помочь вам оптимизировать процессы биллинга."
        },
        "info": {
          "title": "Наша информация",
          "address": {
            "title": "Адрес"
          },
          "phone": {
            "title": "Телефон"
          },
          "email": {
            "title": "Электронная почта"
          },
          "hours": {
            "title": "Часы работы",
            "weekdays": "Понедельник – Пятница: 09:00 – 18:00",
            "weekend": "Суббота – Воскресенье: Выходной"
          }
        },
        "social": "Следите за нами:",
        "form": {
          "title": "Отправить сообщение",
          "name": "Полное имя",
          "email": "Электронная почта",
          "subject": "Тема",
          "message": "Сообщение",
          "submit": "Отправить",
          "placeholders": {
            "name": "Иван Петров",
            "email": "vcare@example.com",
            "subject": "Консультация по биллингу"
          }
        }
      },
      "contact": {
        "hero": {
          "badge": "Свяжитесь с нами",
          "title": "Мы готовы вам помочь",
          "desc": "Есть вопросы по автоматизации процессов биллинга или увеличению дохода? Наши эксперты ответят в течение 24 часов.",
          "chat": "Живой чат",
          "support": "Глобальная поддержка"
        },
        "info": {
          "title": "Контактная информация",
          "desc": "Есть несколько простых способов связаться с нами."
        },
        "form": {
          "title": "Отправить сообщение",
          "name": "Ваше полное имя",
          "email": "Ваш email",
          "subject": "Тема",
          "message": "Текст сообщения",
          "options": {
            "service": "Вопрос об услугах",
            "pricing": "Анализ цен",
            "support": "Техническая поддержка",
            "partnership": "Сотрудничество"
          },
          "submit": "Отправить"
        }
      },
      "reviews": {
        "badge": "Отзывы клиентов",
        "title": "Доверие к нам",
        "subtitle": "Сотни медицинских центров по всему миру доверили нам свои финансовые системы. Познакомьтесь с их опытом.",
        "form": {
          "title": "Оставьте свой отзыв",
          "subtitle": "Ваше мнение очень важно для нас.",
          "name": "Полное имя",
          "job": "Ваша должность",
          "rating": "Рейтинг (1-5)",
          "message": "Отзыв",
          "submit": "Отправить"
        }
      },
      "schedule": {
        "badge": "Получить консультацию",
        "title": "Назначьте встречу с экспертом",
        "desc": "Легко забронируйте визит, выбрав желаемую дату и тип услуги. Наши эксперты по биллингу свяжутся с вами в ближайшее время.",
        "features": {
          "professionals": "Профессиональные эксперты по биллингу",
          "systems": "Современные системы RCM",
          "online": "24/7 Онлайн-очередь"
        },
        "form": {
          "name": "Ваше полное имя",
          "phone": "Ваш номер телефона",
          "date": "Дата",
          "service": "Выберите тип услуги",
          "select": "Выберите услугу",
          "options": {
            "coding": "Медицинское кодирование",
            "audit": "Аудит и консалтинг",
            "rcm": "Полное управление RCM"
          },
          "submit": "Подтвердить встречу"
        }
      },
      "signIn": {
        "title": "Портал Vcare",
        "subtitle": "Безопасный доступ к панели управления",
        "email": "Адрес электронной почты",
        "password": "Пароль",
        "forgot": "Забыли?",
        "submit": "Войти",
        "noAccount": "Нет аккаунта?",
        "signUp": "Зарегистрироваться",
        "secure": "256-битный SSL Secure",
        "hipaa": "Соответствие HIPAA",
        "errors": {
          "notFound": "Аккаунт не найден. Пожалуйста, зарегистрируйтесь!",
          "invalid": "Неверный email или пароль!",
          "welcome": "Добро пожаловать! Вы вошли в систему."
        }
      },
      "signUp": {
        "title": "Создать новый аккаунт",
        "subtitle": "Начните пользоваться профессиональными услугами биллинга",
        "fullName": "Полное имя",
        "email": "Электронная почта",
        "password": "Пароль",
        "confirm": "Подтверждение",
        "submit": "Создать аккаунт",
        "hasAccount": "Уже есть профиль?",
        "signIn": "Войти",
        "encrypted": "Сквозное шифрование",
        "hipaa": "Соответствие HIPAA",
        "errors": {
          "passwordMismatch": "Пароли не совпадают!",
          "success": "Информация отправлена боту и сохранена!",
          "error": "Произошла ошибка. Пожалуйста, попробуйте снова."
        }
      },
      "dashboard": {
        "title": "Панель управления",
        "stats": {
          "products": "Продукты",
          "orders": "Заказы",
          "users": "Пользователи",
          "revenue": "Доход"
        },
        "quickActions": "Быстрые действия",
        "recentActivity": "Недавняя активность",
        "actions": {
          "addProduct": "Добавить продукт",
          "viewOrders": "Посмотреть заказы",
          "manageUsers": "Управление пользователями",
          "settings": "Настройки"
        }
      },
      "footer": {
        "desc": "С 1985 года мы прозрачно и эффективно управляем финансовыми процессами и биллингом для медицинских учреждений. Ваш успех — наш приоритет.",
        "usefulLinks": "Полезные ссылки",
        "ourServices": "Наши услуги",
        "subscribe": "Подписаться",
        "rights": "Все права защищены.",
        "privacy": "Политика конфиденциальности",
        "terms": "Условия использования",
        "secure": "SSL SECURE",
        "links": {
          "home": "Главная",
          "services": "Услуги",
          "products": "Продукты",
          "reviews": "Отзывы",
          "contact": "Контакты"
        },
        "services": {
          "rcm": "Управление циклом доходов",
          "coding": "Медицинское кодирование",
          "accounts": "Дебиторская задолженность",
          "statements": "Счета пациентов",
          "credentialing": "Кредитование"
        }
      },
      "notFound": {
        "title": "Страница не найдена",
        "desc": "Страница, которую вы ищете, возможно, была удалена, переименована или временно недоступна.",
        "button": "На главную"
      },
      "common": {
        "loading": "Загрузка...",
        "error": "Произошла ошибка",
        "back": "Назад",
        "send": "Отправить",
        "save": "Сохранить",
        "cancel": "Отмена",
        "search": "Поиск",
        "filter": "Фильтр",
        "sort": "Сортировка",
        "readMore": "Читать далее",
        "learnMore": "Узнать больше"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;