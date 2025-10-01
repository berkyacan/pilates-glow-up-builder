import { FormData } from "@/types/form";

interface DayPlan {
  day: number;
  focus: string;
  duration: string;
  warmup: string[];
  exercises: Array<{
    name: string;
    reps: string;
    description: string;
  }>;
  cooldown: string[];
}

export const generatePilatesPlan = (data: FormData): {
  days: DayPlan[];
  nutritionTip: string;
  groceryList: string[];
} => {
  const weightGoal = parseFloat(data.goalWeight) < parseFloat(data.currentWeight) ? "loss" : "gain";
  
  const days: DayPlan[] = [
    {
      day: 1,
      focus: "Core Temeli",
      duration: "25 dakika",
      warmup: ["Kedi-İnek gerinimleri (2 dk)", "Pelvik eğimler (2 dk)", "Hafif omurga bükülmeleri (2 dk)"],
      exercises: [
        {
          name: "Yüzlük",
          reps: "10 nefes",
          description: "Sırt üstü yatın, baş ve bacakları kaldırın, nefes alırken kolları pompalayın"
        },
        {
          name: "Tek Bacak Germe",
          reps: "Her yana 10",
          description: "Dizleri göğse çekerken karşı bacağı uzatın"
        },
        {
          name: "Plank Tutma",
          reps: "30 saniye 3 set",
          description: "Core kaslarınızı sıkarak dirsek plank pozisyonunda tutun"
        },
        {
          name: "Köprü",
          reps: "15 tekrar",
          description: "Kalçaları sıkarak 2 saniye tutarak kaldırın"
        }
      ],
      cooldown: ["Çocuk pozu (2 dk)", "Omurga bükülmeleri (her yana 1 dk)", "Derin nefes (2 dk)"]
    },
    {
      day: 2,
      focus: "Esneklik & Akış",
      duration: "30 dakika",
      warmup: ["Boyun hareketleri (1 dk)", "Omuz çemberleri (2 dk)", "Yan eğilmeler (2 dk)"],
      exercises: [
        {
          name: "Top Gibi Yuvarlanma",
          reps: "12 tekrar",
          description: "Kuyruk sokumunuzda dengede durarak geriye yuvarlanın ve geri gelin"
        },
        {
          name: "Omurga İleriye Germe",
          reps: "10 tekrar",
          description: "Dik oturun ve omurga boyunca hareket ederek öne uzanın"
        },
        {
          name: "Testere",
          reps: "Her yana 8",
          description: "Gövdeyi döndürün ve karşı ayağa uzanın"
        },
        {
          name: "Deniz Kızı Germe",
          reps: "Her yana 6",
          description: "Kol başın üstünde uzanırken yan eğilme"
        },
        {
          name: "Kuğu Dalışı Hazırlık",
          reps: "10 tekrar",
          description: "Yüz üstü yatın, sırt kaslarını kullanarak göğsü kaldırın"
        }
      ],
      cooldown: ["4 figürü germe (her yana 2 dk)", "Oturarak öne eğilme (3 dk)"]
    },
    {
      day: 3,
      focus: "Duruş & Hizalama",
      duration: "35 dakika",
      warmup: ["Duvara yaslanarak kayma (2 dk)", "Kol çemberleri (2 dk)", "Kalça çemberleri (2 dk)"],
      exercises: [
        {
          name: "Omuz Köprüsü",
          reps: "12 tekrar",
          description: "Omurgayı yukarı ve aşağı, her seferinde bir omur hareket ettirerek"
        },
        {
          name: "Göğüs Kaldırma ve Dönüş",
          reps: "Her yana 10",
          description: "Mekik çekerken her yana dönün"
        },
        {
          name: "Yan Plank",
          reps: "Her yana 30 sn, 2 set",
          description: "Dirsek üzerinde yan plank, ayaklar üst üste"
        },
        {
          name: "Yüzme",
          reps: "20 sayım",
          description: "Yüz üstü yatın, karşı kol ve bacağı kaldırarak değiştirin"
        },
        {
          name: "Bacak Çekme Ön",
          reps: "8 tekrar",
          description: "Plank pozisyonundan, hizalamayı koruyarak her seferinde bir bacak kaldırın"
        }
      ],
      cooldown: ["Kedi-inek (2 dk)", "İğneyi geçir (her yana 2 dk)", "Savasana (3 dk)"]
    },
    {
      day: 4,
      focus: "Aktif Toparlanma",
      duration: "20 dakika",
      warmup: ["Yerde hafif yürüme (2 dk)", "Kol sallamaları (2 dk)", "Bacak sallamaları (2 dk)"],
      exercises: [
        {
          name: "Pelvik Kıvrım",
          reps: "15 yavaş tekrar",
          description: "Eklemleşmeye odaklanarak hafif köprü"
        },
        {
          name: "Bacak Çemberleri",
          reps: "Her yön 8, iki bacak",
          description: "Sırt üstü yatın, uzatılmış bacakla çemberler çizin"
        },
        {
          name: "Oturarak Dönüş",
          reps: "Her yana 10",
          description: "Dik oturun ve gövdeyi merkezden döndürün"
        },
        {
          name: "Değiştirilmiş Yan Tekmeler",
          reps: "Her bacak 12",
          description: "Yan yatın, kontrollü öne ve arkaya bacak sallamaları"
        }
      ],
      cooldown: ["Kalça fleksör germe (her yana 2 dk)", "Hamstring germe (her yana 2 dk)", "Rahatlama (3 dk)"]
    },
    {
      day: 5,
      focus: "Güç & Kontrol",
      duration: "40 dakika",
      warmup: ["Dinamik esneme (3 dk)", "Kol ve bacak uzatma (2 dk)", "Gövde dönüşleri (2 dk)"],
      exercises: [
        {
          name: "Çift Bacak Germe",
          reps: "12 tekrar",
          description: "Kıvrılın, kol ve bacakları uzatın, sonra geri çekin"
        },
        {
          name: "Çapraz",
          reps: "16 toplam (her yana 8)",
          description: "Dönüşlü bisiklet mekikleri"
        },
        {
          name: "Teaser Hazırlık",
          reps: "8 tekrar",
          description: "Bacaklar kaldırılmış V pozisyonuna yuvarlanın"
        },
        {
          name: "Yan Bacak Serisi",
          reps: "Her yana: 10 kaldırma, çember, tekme",
          description: "Yan yatın, çeşitli bacak hareketleri yapın"
        },
        {
          name: "Şınav-Pike",
          reps: "10 tekrar",
          description: "Şınav sonra kalçaları aşağı bakan köpek pozisyonuna kaldırın"
        }
      ],
      cooldown: ["Güvercin pozu (her yana 3 dk)", "Oturarak omurga bükülmesi (her yana 2 dk)", "Derin nefes (3 dk)"]
    },
    {
      day: 6,
      focus: "Denge & Stabilite",
      duration: "35 dakika",
      warmup: ["Denge egzersizleri (3 dk)", "Ayak bileği çemberleri (2 dk)", "Ayak parmağı vuruşları (2 dk)"],
      exercises: [
        {
          name: "Ayakta Bacak Kaldırma Serisi",
          reps: "Her yön 10, iki bacak",
          description: "Tek bacak üzerinde durun, diğerini tüm yönlere hareket ettirin"
        },
        {
          name: "Ağaç Dengesi",
          reps: "Her yana 1 dk, 2 set",
          description: "Tek bacak üzerinde durun, diğer ayak iç uyluğa"
        },
        {
          name: "Tek Bacak Köprüsü",
          reps: "Her bacak 12",
          description: "Bir bacak uzatılmış köprü"
        },
        {
          name: "Kuş Köpeği",
          reps: "Her yana 10",
          description: "El ve dizler üzerinde, karşı kol ve bacağı uzatın"
        },
        {
          name: "Ayakta Aşağı Yuvarlanma",
          reps: "8 tekrar",
          description: "Yere dokunmak için omurga boyunca aşağı yuvarlanın, geri yuvarlanın"
        }
      ],
      cooldown: ["Ayakta öne eğilme (3 dk)", "Kuadriseps germe (her yana 2 dk)", "Meditasyon (3 dk)"]
    },
    {
      day: 7,
      focus: "Tüm Vücut Entegrasyonu",
      duration: "40 dakika",
      warmup: ["Güneş selamı akışı (5 dk)", "Dinamik esneme (3 dk)"],
      exercises: [
        {
          name: "Beşli Seri",
          reps: "Tek bacak, çift bacak, makas, alt kaldırma, çapraz - her biri 10",
          description: "Klasik Pilates karın serisi"
        },
        {
          name: "Tam Teaser",
          reps: "6 tekrar",
          description: "Tam V pozisyonuna yuvarlanın, kollar öne uzanır"
        },
        {
          name: "Plank-Aşağı Köpek Akışı",
          reps: "12 tekrar",
          description: "Plank ve aşağı bakan köpek arasında akış"
        },
        {
          name: "Bacak Kaldırmalı Yan Plank",
          reps: "Her yana 8",
          description: "Yan plank tutun ve üst bacağı kaldırın"
        },
        {
          name: "Fok",
          reps: "10 tekrar",
          description: "Bacaklar elmas şeklinde top gibi yuvarlanın, ayakları çırpın"
        }
      ],
      cooldown: ["Tam vücut germe dizisi (5 dk)", "Destekli köprü (3 dk)", "Son rahatlama (5 dk)"]
    }
  ];

  const nutritionTips: Record<string, string> = {
    "Dengeli": `Dengeli beslenme programınız bu Pilates planını mükemmel tamamlıyor. Tam tahıllar, yağsız proteinler, renkli sebzeler ve sağlıklı yağlara odaklanın. Bol su için ve egzersizlerinizi desteklemek için düzenli öğünler tüketin. Bu ${weightGoal === "loss" ? "sağlıklı kilo kaybını" : "kas gelişimini"} destekler.`,
    "Vejetaryen": `Vejetaryen diyetiniz Pilates'in beden-zihin felsefesiyle güzelce uyumlu. Baklagiller, tofu, tempeh ve kinoa ile yeterli protein alımını sağlayın. Ispanak gibi demir açısından zengin besinler dahil edin ve C vitamini ile emilimi artırın. Bu besinler kas iyileşmesini ve günlük pratiğiniz için enerjiyi destekler.`,
    "Vegan": `Bitki bazlı yaklaşımınız hem Pilates pratiğinizi hem de genel sağlığınızı destekler. Tam proteinlere (kinoa, soya, kenevir tohumu) öncelik verin, B12 desteği alın ve keten tohumu veya alglerden omega-3 alın. Bu besinler kas onarımını geliştirir ve 7 günlük yolculuğunuz boyunca enerjiyi korur.`,
    "Keto": `Düşük karbonhidratlı, yüksek yağlı diyetiniz Pilates pratiğinizi etkili şekilde destekleyebilir. Özellikle kas fonksiyonu için önemli olan elektrolit dengesini (sodyum, potasyum, magnezyum) sağlayın. Avokado, kuruyemiş ve zeytinyağı gibi kaliteli yağlar dahil edin. Egzersizler sırasında esnekliği desteklemek ve kramp önlemek için bol su için.`,
    "Akdeniz": `Akdeniz diyeti Pilates uygulayıcıları için ideal! Anti-inflamatuar besinler, balıktan omega-3'ler ve bol sebze ile zengin, kas iyileşmesini ve eklem sağlığını destekler. Zeytinyağı ve kuruyemişler egzersizleriniz için sürekli enerji sağlarken esneklik ve gücü artırır.`,
    "Yüksek Protein": `Yüksek protein odaklı yaklaşımınız bu Pilates planının güç geliştirme yönlerini mükemmel destekler. Protein alımını optimum kas onarımı ve büyümesi için gün boyunca yayın. Yağsız etler, balık, yumurta ve Yunan yoğurdu dahil edin. Artırılmış protein ${weightGoal === "loss" ? "kas koruyarak yağ kaybını" : "kas gelişimini ve güç kazanımlarını"} destekler.`,
    "Diğer": `Beslenme yaklaşımınız ne olursa olsun, Pilates pratiğinizi desteklemek için dengeli beslenme aldığınızdan emin olun. Kas iyileşmesi için yeterli protein, enerji için kompleks karbonhidratlar ve hormon dengesi için sağlıklı yağlara odaklanın. Dönüşüm yolculuğunuzu desteklemek için bol su için ve vücudunuzun açlık sinyallerini dinleyin.`
  };

  const groceryLists: Record<string, string[]> = {
    "Dengeli": [
      "Tavuk göğsü veya balık",
      "Esmer pirinç ve kinoa",
      "Tatlı patates",
      "Karışık sebzeler (brokoli, ıspanak, biber)",
      "Yumurta",
      "Yunan yoğurdu",
      "Çilek ve muz",
      "Badem ve ceviz",
      "Zeytinyağı",
      "Avokado"
    ],
    "Vejetaryen": [
      "Tofu ve tempeh",
      "Mercimek ve nohut",
      "Kinoa ve tam buğday makarna",
      "Karışık yeşil yapraklılar",
      "Yumurta ve Yunan yoğurdu",
      "Çilek ve narenciye",
      "Kuruyemiş ve tohumlar",
      "Besin mayası",
      "Zeytinyağı",
      "Tatlı patates"
    ],
    "Vegan": [
      "Tofu, tempeh ve edamame",
      "Kuru fasulye ve mercimek",
      "Kinoa ve yulaf",
      "Yeşil yapraklılar ve haşhaşlı sebzeler",
      "Çilek ve muz",
      "Chia tohumu ve keten tohumu",
      "Badem ezmesi",
      "Bitki sütü (zenginleştirilmiş)",
      "Besin mayası",
      "B12 takviyesi"
    ],
    "Keto": [
      "Tavuk, balık ve dana eti",
      "Yumurta (bol)",
      "Peynir ve tam yağlı süt ürünleri",
      "Avokado",
      "Yeşil yapraklılar (ıspanak, lahana)",
      "Brokoli ve karnabahar",
      "Zeytinyağı ve hindistan cevizi yağı",
      "Kuruyemiş (makadamya, pekan)",
      "Elektrolit takviyeleri",
      "Çilek (sınırlı)"
    ],
    "Akdeniz": [
      "Somon ve sardalya",
      "Zeytinyağı (sızma)",
      "Tam buğday ekmek",
      "Nohut ve mercimek",
      "Domates ve salatalık",
      "Yeşil yapraklılar",
      "Beyaz peynir",
      "Zeytin",
      "Kuruyemiş ve tohumlar",
      "Taze otlar (fesleğen, kekik)"
    ],
    "Yüksek Protein": [
      "Tavuk göğsü ve hindi",
      "Somon ve ton balığı",
      "Yumurta ve yumurta beyazları",
      "Yunan yoğurdu ve lor peyniri",
      "Protein tozu",
      "Yağsız dana eti",
      "Kinoa",
      "Edamame",
      "Karışık sebzeler",
      "Çilek"
    ],
    "Diğer": [
      "Yağsız proteinler (tercihinize göre)",
      "Tam tahıllar",
      "Çeşitli sebzeler",
      "Taze meyveler",
      "Sağlıklı yağlar (kuruyemiş, zeytinyağı)",
      "Yunan yoğurdu veya alternatifi",
      "Yumurta veya ikamesi",
      "Baklagiller",
      "Baharat ve otlar",
      "Bol su"
    ]
  };

  return {
    days,
    nutritionTip: nutritionTips[data.dietPreference] || nutritionTips["Diğer"],
    groceryList: groceryLists[data.dietPreference] || groceryLists["Diğer"]
  };
};
