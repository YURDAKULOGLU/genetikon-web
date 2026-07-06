import type { LT } from "@/lib/content/site-content";

/**
 * Ana sayfa SSS'i — hem görünür accordion hem FAQPage JSON-LD kaynağı.
 * Answer-engine'lerin (ChatGPT/Perplexity/Google AI) en kolay çektiği format
 * soru-cevaptır. İçerik kurum-odaklı, dürüst; isim/fiyat/testimonial YOK,
 * kök hücre için zorunlu "araştırma aşaması / garanti yok" çerçevesi korunur.
 */
export type FaqItem = { q: LT; a: LT };

export const faqItems: FaqItem[] = [
  {
    q: {
      en: "What is Genetikon Genetics Center?",
      tr: "Genetikon Genetics Center nedir?",
    },
    a: {
      en: "Genetikon Genetics Center is a medical institution in Batumi, Georgia that brings three specialized laboratories under one center: a Medical Genetics Laboratory, a Stem Cell Therapy Laboratory, and an IVF Center. It is presented as an institution rather than around individual names.",
      tr: "Genetikon Genetics Center, Batum/Gürcistan'da üç uzman laboratuvarı tek merkez altında toplayan bir tıbbi kurumdur: Tıbbi Genetik Laboratuvarı, Kök Hücre Tedavi Laboratuvarı ve Tüp Bebek (IVF) Merkezi. Belirli kişiler değil, kurum ve laboratuvarlarının yaptığı işler ön plandadır.",
    },
  },
  {
    q: {
      en: "Do you support international patients, and in which languages?",
      tr: "Uluslararası hastalara hizmet veriyor musunuz, hangi dillerde?",
    },
    a: {
      en: "Yes. The center is oriented to international patients and communicates in English and Turkish (Georgian-ready). Batumi is reachable by direct and connecting flights, and a coordination team helps you plan travel, accommodation and the stages of your visit.",
      tr: "Evet. Merkez uluslararası hastalara yöneliktir; İngilizce ve Türkçe (Gürcüce altyapı-hazır) iletişim kurar. Batum'a doğrudan ve aktarmalı uçuşlarla ulaşılır; koordinasyon ekibi seyahat, konaklama ve ziyaretinizin aşamalarını planlamanıza yardımcı olur.",
    },
  },
  {
    q: {
      en: "Which genetic tests does the Medical Genetics Laboratory offer?",
      tr: "Tıbbi Genetik Laboratuvarı hangi genetik testleri sunar?",
    },
    a: {
      en: "The Medical Genetics Laboratory focuses on diagnostic and screening analysis — including genetic counseling, karyotyping, fluorescence in situ hybridization (FISH), PCR-based molecular analysis, non-invasive prenatal testing (NIPT), prenatal diagnosis and preimplantation genetic testing (PGT). Each technique is used within its recognized clinical indications.",
      tr: "Tıbbi Genetik Laboratuvarı; genetik danışma, karyotipleme, floresan in situ hibridizasyon (FISH), PCR tabanlı moleküler analiz, invaziv olmayan prenatal test (NIPT), prenatal tanı ve preimplantasyon genetik test (PGT) dâhil tanısal ve tarama analizlerine odaklanır. Her teknik, tanınan klinik endikasyonları çerçevesinde kullanılır.",
    },
  },
  {
    q: {
      en: "Is stem cell therapy proven, and are results guaranteed?",
      tr: "Kök hücre tedavisi kanıtlanmış mıdır, sonuçlar garanti midir?",
    },
    a: {
      en: "No results are guaranteed. In regenerative medicine, several applications remain under active scientific investigation and should be understood as investigational. Individual results vary. This information is educational and does not diagnose, treat, or cure any condition — every decision should be made with your treating physician.",
      tr: "Hiçbir sonuç garanti edilmez. Rejeneratif tıpta bazı uygulamalar hâlâ aktif bilimsel araştırma altındadır ve araştırma niteliğinde kabul edilmelidir. Sonuçlar kişiden kişiye değişir. Bu bilgi eğitim amaçlıdır; herhangi bir hastalığı teşhis, tedavi veya iyileştirme iddiası taşımaz — her karar sizi izleyen hekiminizle birlikte verilmelidir.",
    },
  },
  {
    q: {
      en: "What fertility services does the IVF Center provide?",
      tr: "Tüp Bebek Merkezi hangi hizmetleri sunar?",
    },
    a: {
      en: "The IVF Center provides reproductive and fertility care including IVF/ICSI, egg and sperm donation, surrogacy, and preimplantation genetic diagnosis (PGD), offered under Georgian law with realistic, informational guidance. Outcomes depend on many factors, including age; they are discussed as ranges rather than a single success figure.",
      tr: "Tüp Bebek Merkezi; IVF/ICSI, yumurta ve sperm donasyonu, taşıyıcı annelik ve preimplantasyon genetik tanı (PGD) dâhil üreme sağlığı ve doğurganlık bakımı sunar; Gürcistan yasaları çerçevesinde, gerçekçi ve bilgilendirici bir tonla. Sonuçlar yaş dâhil birçok etmene bağlıdır ve tek bir başarı rakamı yerine aralıklar hâlinde konuşulur.",
    },
  },
  {
    q: {
      en: "How do I get information or contact the center?",
      tr: "Nasıl bilgi alır veya merkezle iletişime geçerim?",
    },
    a: {
      en: "You can request information through the contact page, or by phone and WhatsApp. Share what you are looking for and the coordination team will respond with the relevant information. Please do not include sensitive health details in a first message.",
      tr: "İletişim sayfasından ya da telefon ve WhatsApp üzerinden bilgi talep edebilirsiniz. Ne aradığınızı iletin; koordinasyon ekibi ilgili bilgiyle geri döner. İlk mesajda hassas sağlık bilgilerinizi paylaşmamanızı rica ederiz.",
    },
  },
];
