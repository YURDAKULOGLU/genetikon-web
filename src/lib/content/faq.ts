import type { LT } from "@/lib/content/site-content";

/**
 * Ana sayfa SSS'i — hem görünür accordion hem FAQPage JSON-LD kaynağı.
 * Answer-engine'lerin (ChatGPT/Perplexity/Google AI) en kolay çektiği format
 * soru-cevaptır. İçerik kurum-odaklı, dürüst; isim/fiyat/testimonial YOK,
 * kök hücre için zorunlu "araştırma aşaması / garanti yok" çerçevesi korunur.
 *
 * 5 dilli: en/tr/ru/ka/az. ka/az tıbbi çeviriler AI ilk-taslak — yayından önce
 * native tıbbi review önerilir (doğruluk + compliance).
 */
export type FaqItem = { q: LT; a: LT };

export const faqItems: FaqItem[] = [
  {
    q: {
      en: "What is Genetikon Genetics Center?",
      tr: "Genetikon Genetics Center nedir?",
      ru: "Что такое Genetikon Genetics Center?",
      ka: "რა არის Genetikon Genetics Center?",
      az: "Genetikon Genetics Center nədir?",
    },
    a: {
      en: "Genetikon Genetics Center is a medical institution in Batumi, Georgia that brings three specialized laboratories under one center: a Medical Genetics Laboratory, a Stem Cell Therapy Laboratory, and an IVF Center. It is presented as an institution rather than around individual names.",
      tr: "Genetikon Genetics Center, Batum/Gürcistan'da üç uzman laboratuvarı tek merkez altında toplayan bir tıbbi kurumdur: Tıbbi Genetik Laboratuvarı, Kök Hücre Tedavi Laboratuvarı ve Tüp Bebek (IVF) Merkezi. Belirli kişiler değil, kurum ve laboratuvarlarının yaptığı işler ön plandadır.",
      ru: "Genetikon Genetics Center — это медицинское учреждение в Батуми, Грузия, объединяющее три специализированные лаборатории в одном центре: лабораторию медицинской генетики, лабораторию клеточной терапии и центр ЭКО. Центр представлен как учреждение, а не вокруг отдельных имён.",
      ka: "Genetikon Genetics Center არის სამედიცინო დაწესებულება ბათუმში, საქართველო, რომელიც სამ სპეციალიზებულ ლაბორატორიას აერთიანებს ერთ ცენტრში: სამედიცინო გენეტიკის ლაბორატორია, უჯრედული თერაპიის ლაბორატორია და IVF ცენტრი. იგი წარმოდგენილია როგორც დაწესებულება და არა ცალკეული სახელების გარშემო.",
      az: "Genetikon Genetics Center Batumidə (Gürcüstan) üç ixtisaslaşmış laboratoriyanı bir mərkəz altında birləşdirən tibbi qurumdur: Tibbi Genetika Laboratoriyası, Hüceyrə Terapiyası Laboratoriyası və IVF Mərkəzi. O, ayrı-ayrı adlar ətrafında deyil, qurum kimi təqdim olunur.",
    },
  },
  {
    q: {
      en: "Do you support international patients, and in which languages?",
      tr: "Uluslararası hastalara hizmet veriyor musunuz, hangi dillerde?",
      ru: "Принимаете ли вы иностранных пациентов и на каких языках общаетесь?",
      ka: "ემსახურებით თუ არა უცხოელ პაციენტებს და რომელ ენებზე?",
      az: "Xarici pasiyentlərə xidmət göstərirsiniz və hansı dillərdə?",
    },
    a: {
      en: "Yes. The center is oriented to international patients and communicates in English, Turkish, Russian, Georgian and Azerbaijani. Batumi is reachable by direct and connecting flights, and a coordination team helps you plan travel, accommodation and the stages of your visit.",
      tr: "Evet. Merkez uluslararası hastalara yöneliktir; İngilizce, Türkçe, Rusça, Gürcüce ve Azerice iletişim kurar. Batum'a doğrudan ve aktarmalı uçuşlarla ulaşılır; koordinasyon ekibi seyahat, konaklama ve ziyaretinizin aşamalarını planlamanıza yardımcı olur.",
      ru: "Да. Центр ориентирован на иностранных пациентов и общается на английском, турецком, русском, грузинском и азербайджанском языках. До Батуми можно добраться прямыми и стыковочными рейсами, а команда координации помогает спланировать поездку, проживание и этапы визита.",
      ka: "დიახ. ცენტრი ორიენტირებულია უცხოელ პაციენტებზე და კომუნიკაციას აწარმოებს ინგლისურ, თურქულ, რუსულ, ქართულ და აზერბაიჯანულ ენებზე. ბათუმამდე მისვლა შესაძლებელია პირდაპირი და გადაჯდომითი რეისებით, ხოლო კოორდინაციის გუნდი დაგეხმარებათ მოგზაურობის, საცხოვრებლისა და ვიზიტის ეტაპების დაგეგმვაში.",
      az: "Bəli. Mərkəz xarici pasiyentlərə yönəlib və ingilis, türk, rus, gürcü və Azərbaycan dillərində ünsiyyət qurur. Batumiyə birbaşa və aktarmalı reyslərlə çatmaq olar; koordinasiya komandası səyahət, yerləşmə və ziyarətinizin mərhələlərini planlaşdırmağa kömək edir.",
    },
  },
  {
    q: {
      en: "Which genetic tests does the Medical Genetics Laboratory offer?",
      tr: "Tıbbi Genetik Laboratuvarı hangi genetik testleri sunar?",
      ru: "Какие генетические тесты предлагает лаборатория медицинской генетики?",
      ka: "რომელ გენეტიკურ კვლევებს გთავაზობთ სამედიცინო გენეტიკის ლაბორატორია?",
      az: "Tibbi Genetika Laboratoriyası hansı genetik testləri təklif edir?",
    },
    a: {
      en: "The Medical Genetics Laboratory focuses on diagnostic and screening analysis — including genetic counseling, karyotyping, fluorescence in situ hybridization (FISH), PCR-based molecular analysis, non-invasive prenatal testing (NIPT), prenatal diagnosis and preimplantation genetic testing (PGT). Each technique is used within its recognized clinical indications.",
      tr: "Tıbbi Genetik Laboratuvarı; genetik danışma, karyotipleme, floresan in situ hibridizasyon (FISH), PCR tabanlı moleküler analiz, invaziv olmayan prenatal test (NIPT), prenatal tanı ve preimplantasyon genetik test (PGT) dâhil tanısal ve tarama analizlerine odaklanır. Her teknik, tanınan klinik endikasyonları çerçevesinde kullanılır.",
      ru: "Лаборатория медицинской генетики сосредоточена на диагностическом и скрининговом анализе — включая генетическое консультирование, кариотипирование, флуоресцентную гибридизацию in situ (FISH), молекулярный анализ на основе ПЦР, неинвазивный пренатальный тест (НИПТ), пренатальную диагностику и преимплантационное генетическое тестирование (ПГТ). Каждый метод применяется в рамках признанных клинических показаний.",
      ka: "სამედიცინო გენეტიკის ლაბორატორია ფოკუსირებულია დიაგნოსტიკურ და სკრინინგულ ანალიზზე — მათ შორის გენეტიკური კონსულტაცია, კარიოტიპირება, ფლუორესცენტული in situ ჰიბრიდიზაცია (FISH), PCR-ზე დაფუძნებული მოლეკულური ანალიზი, არაინვაზიური პრენატალური ტესტი (NIPT), პრენატალური დიაგნოსტიკა და პრეიმპლანტაციური გენეტიკური ტესტირება (PGT). თითოეული მეთოდი გამოიყენება მისი აღიარებული კლინიკური ჩვენებების ფარგლებში.",
      az: "Tibbi Genetika Laboratoriyası diaqnostik və skrininq analizinə fokuslanır — genetik məsləhət, kariotipləmə, flüoresan in situ hibridləşmə (FISH), PCR əsaslı molekulyar analiz, invaziv olmayan prenatal test (NIPT), prenatal diaqnostika və preimplantasiya genetik testi (PGT) daxil olmaqla. Hər üsul öz tanınmış klinik göstərişləri çərçivəsində istifadə olunur.",
    },
  },
  {
    q: {
      en: "Is stem cell therapy proven, and are results guaranteed?",
      tr: "Kök hücre tedavisi kanıtlanmış mıdır, sonuçlar garanti midir?",
      ru: "Доказана ли клеточная терапия и гарантированы ли результаты?",
      ka: "დადასტურებულია თუ არა უჯრედული თერაპია და გარანტირებულია თუ არა შედეგები?",
      az: "Hüceyrə terapiyası sübut olunubmu və nəticələr zəmanətlidirmi?",
    },
    a: {
      en: "No results are guaranteed. In regenerative medicine, several applications remain under active scientific investigation and should be understood as investigational. Individual results vary. This information is educational and does not diagnose, treat, or cure any condition — every decision should be made with your treating physician.",
      tr: "Hiçbir sonuç garanti edilmez. Rejeneratif tıpta bazı uygulamalar hâlâ aktif bilimsel araştırma altındadır ve araştırma niteliğinde kabul edilmelidir. Sonuçlar kişiden kişiye değişir. Bu bilgi eğitim amaçlıdır; herhangi bir hastalığı teşhis, tedavi veya iyileştirme iddiası taşımaz — her karar sizi izleyen hekiminizle birlikte verilmelidir.",
      ru: "Никакие результаты не гарантируются. В регенеративной медицине ряд применений остаётся предметом активных научных исследований и должен пониматься как исследовательский. Индивидуальные результаты различаются. Эта информация носит образовательный характер и не диагностирует, не лечит и не излечивает какое-либо состояние — каждое решение следует принимать вместе с вашим лечащим врачом.",
      ka: "შედეგები არ არის გარანტირებული. რეგენერაციულ მედიცინაში რამდენიმე გამოყენება რჩება აქტიური სამეცნიერო კვლევის ქვეშ და უნდა გავიგოთ როგორც კვლევითი. ინდივიდუალური შედეგები განსხვავდება. ეს ინფორმაცია საგანმანათლებლოა და არ სვამს დიაგნოზს, არ მკურნალობს და არ კურნავს რომელიმე მდგომარეობას — ყოველი გადაწყვეტილება უნდა მიიღოთ თქვენს მკურნალ ექიმთან ერთად.",
      az: "Heç bir nəticə zəmanətli deyil. Regenerativ tibbdə bir sıra tətbiqlər hələ də aktiv elmi tədqiqat altındadır və tədqiqat mərhələsində kimi başa düşülməlidir. Fərdi nəticələr dəyişir. Bu məlumat maarifləndirici xarakterlidir və heç bir vəziyyəti diaqnoz etmir, müalicə etmir və sağaltmır — hər qərar müalicə edən həkiminizlə birlikdə verilməlidir.",
    },
  },
  {
    q: {
      en: "What fertility services does the IVF Center provide?",
      tr: "Tüp Bebek Merkezi hangi hizmetleri sunar?",
      ru: "Какие услуги предоставляет центр ЭКО?",
      ka: "რა სერვისებს გთავაზობთ IVF ცენტრი?",
      az: "IVF Mərkəzi hansı xidmətləri təqdim edir?",
    },
    a: {
      en: "The IVF Center provides reproductive and fertility care including IVF/ICSI, egg and sperm donation, surrogacy, and preimplantation genetic diagnosis (PGD), offered under Georgian law with realistic, informational guidance. Outcomes depend on many factors, including age; they are discussed as ranges rather than a single success figure.",
      tr: "Tüp Bebek Merkezi; IVF/ICSI, yumurta ve sperm donasyonu, taşıyıcı annelik ve preimplantasyon genetik tanı (PGD) dâhil üreme sağlığı ve doğurganlık bakımı sunar; Gürcistan yasaları çerçevesinde, gerçekçi ve bilgilendirici bir tonla. Sonuçlar yaş dâhil birçok etmene bağlıdır ve tek bir başarı rakamı yerine aralıklar hâlinde konuşulur.",
      ru: "Центр ЭКО предоставляет репродуктивную помощь, включая ЭКО/ИКСИ, донорство яйцеклеток и спермы, суррогатное материнство и преимплантационную генетическую диагностику (ПГД), в соответствии с законодательством Грузии и с реалистичным, информационным сопровождением. Результаты зависят от многих факторов, включая возраст; они обсуждаются как диапазоны, а не как одна цифра успеха.",
      ka: "IVF ცენტრი უზრუნველყოფს რეპროდუქციულ მზრუნველობას, მათ შორის IVF/ICSI, კვერცხუჯრედისა და სპერმის დონაცია, სუროგაცია და პრეიმპლანტაციური გენეტიკური დიაგნოსტიკა (PGD), საქართველოს კანონმდებლობის შესაბამისად, რეალისტური, საინფორმაციო ხელმძღვანელობით. შედეგები დამოკიდებულია ბევრ ფაქტორზე, მათ შორის ასაკზე; ისინი განიხილება როგორც დიაპაზონები და არა ერთი წარმატების მაჩვენებელი.",
      az: "IVF Mərkəzi reproduktiv qayğı təqdim edir — IVF/ICSI, yumurta və sperma donorluğu, surroqatlıq və preimplantasiya genetik diaqnostikası (PGD) daxil olmaqla, Gürcüstan qanunvericiliyi çərçivəsində, real və məlumatlandırıcı yönləndirmə ilə. Nəticələr yaş daxil bir çox amildən asılıdır; onlar tək uğur rəqəmi kimi deyil, aralıqlar kimi müzakirə olunur.",
    },
  },
  {
    q: {
      en: "How do I get information or contact the center?",
      tr: "Nasıl bilgi alır veya merkezle iletişime geçerim?",
      ru: "Как получить информацию или связаться с центром?",
      ka: "როგორ მივიღო ინფორმაცია ან დავუკავშირდე ცენტრს?",
      az: "Necə məlumat ala və ya mərkəzlə əlaqə saxlaya bilərəm?",
    },
    a: {
      en: "You can request information through the contact page, or by phone and WhatsApp. Share what you are looking for and the coordination team will respond with the relevant information. Please do not include sensitive health details in a first message.",
      tr: "İletişim sayfasından ya da telefon ve WhatsApp üzerinden bilgi talep edebilirsiniz. Ne aradığınızı iletin; koordinasyon ekibi ilgili bilgiyle geri döner. İlk mesajda hassas sağlık bilgilerinizi paylaşmamanızı rica ederiz.",
      ru: "Вы можете запросить информацию через страницу контактов, а также по телефону и WhatsApp. Опишите, что вас интересует, и команда координации ответит с нужной информацией. Пожалуйста, не указывайте чувствительные медицинские данные в первом сообщении.",
      ka: "ინფორმაციის მოთხოვნა შეგიძლიათ საკონტაქტო გვერდიდან, ან ტელეფონითა და WhatsApp-ით. მოგვწერეთ, რას ეძებთ, და კოორდინაციის გუნდი შესაბამისი ინფორმაციით გიპასუხებთ. გთხოვთ, პირველ შეტყობინებაში არ მიუთითოთ მგრძნობიარე სამედიცინო მონაცემები.",
      az: "Məlumatı əlaqə səhifəsi vasitəsilə, həmçinin telefon və WhatsApp ilə istəyə bilərsiniz. Nə axtardığınızı yazın, koordinasiya komandası müvafiq məlumatla cavab verəcək. Zəhmət olmasa, ilk mesajda həssas sağlamlıq məlumatlarını qeyd etməyin.",
    },
  },
];
