// AUTO-GENERATED from bilingual content workflow (wf_ae90fbdb-0c9).
// Kaynak: Data/content/departments.md + archive. Medical-compliance uyumlu.
// Elle düzenleme yerine içeriği Data/content'te güncelleyip yeniden üretin.

// en zorunlu (fallback); tr/ru/ka/az opsiyonel (kademeli çeviri).
// Çeviri yoksa lt() EN'e düşer — site 5 dilde çalışır, derin içerik çevrildikçe dolar.
export type LT = {
  en: string;
  tr?: string;
  ru?: string;
  ka?: string;
  az?: string;
};
export type ContentItem = { title: LT; body: LT };
export type ContentSection = { heading: LT; intro?: LT; items: ContentItem[] };
export type DepartmentContent = {
  slug: string;
  title: LT;
  intro: LT;
  sections: ContentSection[];
  disclaimer: "medical" | "stemCell";
};
export type PageContent = { slug: string; title: LT; intro: LT; sections: ContentSection[] };
export type LegalSection = { heading: LT; intro?: LT; items: ContentItem[] };

export const departmentsContent: Record<string, DepartmentContent> =
{
  "medical-genetics": {
    "slug": "medical-genetics",
    "title": {
      "en": "Medical Genetics Laboratory",
      "tr": "Tıbbi Genetik Laboratuvarı"
    },
    "intro": {
      "en": "Our Medical Genetics Laboratory provides diagnostic testing and genetic evaluation across the cytogenetic, molecular, and prenatal spectrum. Genetic assessment often begins with counseling: a review of family history and pedigree, followed, where indicated, by chromosome analysis, DNA sequencing, or enzyme-level measurement. With roughly 100,000 genetic conditions recognized to date, testing is used to clarify whether an individual is affected by, or is a carrier of, a specific condition. All services are delivered on an informational basis and are intended to support, not replace, the guidance of your treating physician.",
      "tr": "Tıbbi Genetik Laboratuvarımız; sitogenetik, moleküler ve prenatal alanları kapsayacak şekilde tanısal testler ve genetik değerlendirme sunar. Genetik değerlendirme çoğu zaman danışmanlıkla başlar: aile öyküsü ve soy ağacının (pedigree) incelenmesi ve gerektiğinde kromozom analizi, DNA dizileme veya enzim düzeyi ölçümü. Bugüne kadar yaklaşık 100.000 genetik durum tanımlanmıştır; testler, bir bireyin belirli bir durumdan etkilenip etkilenmediğini ya da taşıyıcı olup olmadığını netleştirmek için kullanılır. Tüm hizmetler bilgilendirme amacıyla sunulur ve tedavi eden hekiminizin yönlendirmesinin yerine geçmez; onu destekler."
    },
    "sections": [
      {
        "heading": {
          "en": "Diagnosis & Treatment",
          "tr": "Tanı ve Tedavi"
        },
        "intro": {
          "en": "The laboratory offers a connected set of diagnostic services, from initial genetic counseling through cytogenetic, molecular, and prenatal analysis. Each service is described below with what it is, who it is generally intended for, and the sample types or accuracy figures where these apply.",
          "tr": "Laboratuvar; ilk genetik danışmanlıktan sitogenetik, moleküler ve prenatal analize kadar birbiriyle bağlantılı bir tanısal hizmet dizisi sunar. Her hizmet aşağıda; ne olduğu, genel olarak kimlere yönelik olduğu ve geçerli olduğu yerlerde numune tipleri veya doğruluk oranlarıyla açıklanmıştır."
        },
        "items": [
          {
            "title": {
              "en": "Genetic Counseling",
              "tr": "Genetik Danışmanlık"
            },
            "body": {
              "en": "Genetic counseling is a structured evaluation that combines family history and a pedigree with the appropriate diagnostic pathway. It is intended for individuals and couples with a family history of a genetic condition, prior affected pregnancies, or other indications for assessment. The process helps clarify whether further chromosome analysis, DNA testing, or enzyme measurement is warranted.",
              "tr": "Genetik danışmanlık; aile öyküsü ve soy ağacını uygun tanısal süreçle bir araya getiren yapılandırılmış bir değerlendirmedir. Ailesinde genetik hastalık öyküsü bulunan, daha önce etkilenmiş gebelik yaşamış ya da değerlendirme için başka endikasyonu olan bireyler ve çiftler için uygundur. Bu süreç, ileri kromozom analizi, DNA testi veya enzim ölçümünün gerekli olup olmadığını netleştirmeye yardımcı olur."
            }
          },
          {
            "title": {
              "en": "Paternity Test / DNA",
              "tr": "Babalık Testi / DNA"
            },
            "body": {
              "en": "Paternity testing compares DNA markers between individuals to establish biological relationship, typically reaching an accuracy of around 99.99% when a relationship is confirmed. It is generally performed using a buccal (inner cheek) mucosa swab, which is non-invasive and suitable for both adults and children. A signed consent form is required before testing proceeds.",
              "tr": "Babalık testi, biyolojik ilişkiyi belirlemek için bireyler arasındaki DNA belirteçlerini (marker) karşılaştırır; ilişki doğrulandığında doğruluk oranı tipik olarak yaklaşık %99,99'a ulaşır. Test genellikle non-invaziv olan ve hem yetişkinler hem de çocuklar için uygun olan yanak içi (bukkal) mukoza sürüntüsü ile yapılır. Test öncesinde imzalı onam formu gereklidir."
            }
          },
          {
            "title": {
              "en": "Cytogenetics",
              "tr": "Sitogenetik"
            },
            "body": {
              "en": "Cytogenetics examines the full set of 46 chromosomes through karyotyping and banding techniques to detect numerical and structural changes. It is applied in both prenatal and postnatal settings and may be relevant in advanced maternal age, recurrent miscarriage (where 50-60% of cases have a chromosomal basis), translocations and deletions, trisomies 13, 16, 18 and 21, and Turner or Klinefelter mosaicism. Suitable samples include peripheral blood, amniotic fluid, fetal (cord) blood, chorionic villus samples, products of conception, and tissue or skin biopsy.",
              "tr": "Sitogenetik; sayısal ve yapısal değişiklikleri saptamak için karyotipleme ve bantlama teknikleriyle 46 kromozomun tamamını inceler. Hem prenatal hem postnatal ortamda uygulanır ve ileri anne yaşı, tekrarlayan düşükler (olguların %50-60'ında kromozomal kökenli), translokasyon ve delesyonlar, 13, 16, 18 ve 21 trizomileri ile Turner veya Klinefelter mozaisizmi durumlarında anlamlı olabilir. Uygun numuneler arasında periferik kan, amniyon sıvısı, fetal (kordon) kanı, koryon villus örneği, gebelik ürünleri ve doku veya deri biyopsisi yer alır."
            }
          },
          {
            "title": {
              "en": "Molecular Cytogenetics (FISH)",
              "tr": "Moleküler Sitogenetik (FISH)"
            },
            "body": {
              "en": "Fluorescence in situ hybridization (FISH) uses fluorescent probes targeted to specific chromosome regions, allowing detection of changes that may not be visible on a standard karyotype. It is used when a focused, region-specific analysis is indicated, for example to confirm a suspected microdeletion or rearrangement. Compatible samples include peripheral and fetal blood, amniotic fluid, chorionic villus samples, tissue, sperm, and blastomere.",
              "tr": "Floresan in situ hibridizasyon (FISH), belirli kromozom bölgelerine yönlendirilmiş floresan problar kullanarak standart karyotipte görülemeyebilecek değişikliklerin saptanmasına olanak tanır. Odaklı, bölgeye özgü bir analiz gerektiğinde -örneğin şüphelenilen bir mikrodelesyon veya yeniden düzenlenmeyi doğrulamak için- kullanılır. Uyumlu numuneler arasında periferik ve fetal kan, amniyon sıvısı, koryon villus örneği, doku, sperm ve blastomer bulunur."
            }
          },
          {
            "title": {
              "en": "Sperm FISH",
              "tr": "Sperm FISH"
            },
            "body": {
              "en": "Sperm FISH assesses chromosomes 13, 18, 21, X and Y directly in sperm cells to evaluate the ratio of balanced to unbalanced gametes. It is generally intended for men who carry a chromosomal translocation, where the balance of gametes can inform reproductive planning. Testing is performed on a semen sample.",
              "tr": "Sperm FISH; dengeli ve dengesiz gametlerin oranını değerlendirmek için sperm hücrelerinde doğrudan 13, 18, 21, X ve Y kromozomlarını inceler. Genellikle kromozomal translokasyon taşıyan erkekler için uygundur; gamet dengesi üreme planlamasına ışık tutabilir. Test bir semen örneği üzerinde yapılır."
            }
          },
          {
            "title": {
              "en": "Molecular Genetics",
              "tr": "Moleküler Genetik"
            },
            "body": {
              "en": "Molecular genetics focuses on single-gene (monogenic) disorders and can be performed in prenatal, postnatal, or preimplantation settings. It covers a range of conditions including Mediterranean anemia (thalassemia), sickle cell disease, Familial Mediterranean Fever (FMF), cystic fibrosis, Y-chromosome microdeletions, Fragile X, and galactosemia. It is used to confirm a diagnosis, clarify carrier status, or guide reproductive decisions in affected families.",
              "tr": "Moleküler genetik; tek gen (monogenik) hastalıklarına odaklanır ve prenatal, postnatal veya preimplantasyon aşamalarında yapılabilir. Akdeniz anemisi (talasemi), orak hücre hastalığı, Ailesel Akdeniz Ateşi (FMF), kistik fibrozis, Y-kromozomu mikrodelesyonları, Frajil X ve galaktozemi gibi çeşitli durumları kapsar. Tanıyı doğrulamak, taşıyıcılık durumunu netleştirmek ya da etkilenen ailelerde üreme kararlarına yön vermek için kullanılır."
            }
          },
          {
            "title": {
              "en": "Prenatal Diagnosis",
              "tr": "Prenatal Tanı"
            },
            "body": {
              "en": "Prenatal diagnosis combines non-invasive approaches (ultrasound, biochemical screening, and NIPT) with invasive procedures (amniocentesis, chorionic villus sampling, and cordocentesis) as clinically appropriate. It is generally indicated for maternal age 35 and above, an increased screening risk, a prior chromosomal anomaly, or when parents are known carriers of a single-gene disorder. The choice of method depends on gestational timing and the specific clinical question.",
              "tr": "Prenatal tanı; klinik olarak uygun olduğunda non-invaziv yaklaşımları (ultrason, biyokimyasal tarama ve NIPT) invaziv işlemlerle (amniyosentez, koryon villus örneklemesi ve kordosentez) birleştirir. Genellikle 35 yaş ve üzeri anne yaşı, artmış tarama riski, önceki bir kromozomal anomali ya da ebeveynlerin bilinen tek gen hastalığı taşıyıcısı olması durumunda endikedir. Yöntem seçimi, gebelik haftasına ve söz konusu klinik soruya bağlıdır."
            }
          },
          {
            "title": {
              "en": "Molecular Microbiology (PCR)",
              "tr": "Moleküler Mikrobiyoloji (PCR)"
            },
            "body": {
              "en": "Molecular microbiology uses PCR-based methods to identify pathogens, supporting early and targeted clinical management. It is applicable when a specific infectious agent needs to be detected or characterized quickly. Suitable samples include serum or plasma, tissue, body fluids such as cerebrospinal fluid (CSF), urine, and stool.",
              "tr": "Moleküler mikrobiyoloji; patojenleri saptamak için PCR temelli yöntemler kullanır ve erken, hedefe yönelik klinik yönetimi destekler. Belirli bir enfeksiyon etkeninin hızla saptanması veya tanımlanması gerektiğinde uygulanabilir. Uygun numuneler arasında serum veya plazma, doku, beyin omurilik sıvısı (BOS) gibi vücut sıvıları, idrar ve dışkı yer alır."
            }
          },
          {
            "title": {
              "en": "Circulating Fetal DNA / NIPT",
              "tr": "Dolaşan Fetal DNA / NIPT"
            },
            "body": {
              "en": "Non-invasive prenatal testing (NIPT) analyzes circulating fetal DNA in a maternal blood sample to screen for common fetal chromosomal anomalies without the miscarriage risk associated with invasive procedures. Reported detection rates are approximately 99% for Down syndrome (trisomy 21), around 98% for trisomy 18, and above 65% for trisomy 13. As a screening test, a result that indicates increased risk is generally confirmed with a diagnostic procedure.",
              "tr": "Non-invaziv prenatal test (NIPT); yaygın fetal kromozomal anomalileri, invaziv işlemlerle ilişkili düşük riski olmadan taramak için anne kanı örneğindeki dolaşan fetal DNA'yı analiz eder. Bildirilen saptama oranları Down sendromu (trizomi 21) için yaklaşık %99, trizomi 18 için yaklaşık %98 ve trizomi 13 için %65'in üzerindedir. Bir tarama testi olduğundan, artmış risk gösteren bir sonuç genellikle tanısal bir işlemle doğrulanır."
            }
          },
          {
            "title": {
              "en": "Preimplantation Genetic Testing (PGT)",
              "tr": "Preimplantasyon Genetik Test (PGT)"
            },
            "body": {
              "en": "PGT is a genetic analysis of embryos before transfer during an IVF cycle, which can help reduce the likelihood of miscarriage. It is generally considered in cases of recurrent miscarriage, maternal age 37 and above, or when parents are known carriers of a genetic condition. The analysis is carried out on a day-3 or day-5 embryo, depending on the treatment plan.",
              "tr": "PGT; bir tüp bebek (IVF) döngüsünde embriyoların transfer öncesinde genetik olarak analiz edilmesidir ve düşük olasılığını azaltmaya yardımcı olabilir. Genellikle tekrarlayan düşük, 37 yaş ve üzeri anne yaşı ya da ebeveynlerin bilinen bir genetik durum taşıyıcısı olması durumunda değerlendirilir. Analiz, tedavi planına bağlı olarak 3. veya 5. gün embriyosu üzerinde yapılır."
            }
          },
          {
            "title": {
              "en": "DNA Identification",
              "tr": "DNA Kimliklendirme"
            },
            "body": {
              "en": "DNA identification establishes an individual genetic profile and matches profiles for identity verification. In the context of assisted reproduction, it is also used to confirm that frozen parental reproductive cells have not been mixed, which is a regulatory requirement. Testing is performed on a suitable biological sample with appropriate consent and chain-of-custody handling.",
              "tr": "DNA kimliklendirme; bireysel bir genetik profil oluşturur ve kimlik doğrulama için profilleri eşleştirir. Yardımcı üreme kapsamında, dondurulmuş ebeveyn üreme hücrelerinin karışmadığını doğrulamak için de kullanılır; bu, mevzuata bağlı bir gerekliliktir. Test, uygun onam ve delil zinciri (chain-of-custody) prosedürleriyle uygun bir biyolojik numune üzerinde yapılır."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Screening & Diagnostic Tests",
          "tr": "Tarama ve Tanısal Testler"
        },
        "intro": {
          "en": "Alongside individual diagnostic services, the laboratory supports screening and carrier evaluation. Screening tests estimate the likelihood of a condition and help identify who may benefit from further diagnostic testing, while diagnostic tests aim to confirm or exclude a specific finding.",
          "tr": "Bireysel tanısal hizmetlerin yanı sıra laboratuvar; tarama ve taşıyıcılık değerlendirmesini de destekler. Tarama testleri bir durumun olasılığını tahmin ederek ileri tanısal testten kimin yararlanabileceğini belirlemeye yardımcı olurken, tanısal testler belirli bir bulguyu doğrulamayı veya dışlamayı amaçlar."
        },
        "items": [
          {
            "title": {
              "en": "Carrier Screening",
              "tr": "Taşıyıcı Taraması"
            },
            "body": {
              "en": "Carrier screening evaluates whether prospective or expectant parents carry a gene variant for an inherited condition, even when they show no symptoms themselves. It is often considered before or early in pregnancy, and is particularly relevant for conditions such as thalassemia, sickle cell disease, cystic fibrosis, and Familial Mediterranean Fever. Results are interpreted together with genetic counseling to inform reproductive planning.",
              "tr": "Taşıyıcı taraması; müstakbel veya bekleyen ebeveynlerin, kendilerinde belirti olmasa bile kalıtsal bir durumla ilişkili bir gen varyantı taşıyıp taşımadığını değerlendirir. Genellikle gebelik öncesinde veya erken döneminde değerlendirilir ve özellikle talasemi, orak hücre hastalığı, kistik fibrozis ve Ailesel Akdeniz Ateşi gibi durumlar için anlamlıdır. Sonuçlar, üreme planlamasına ışık tutmak için genetik danışmanlıkla birlikte yorumlanır."
            }
          },
          {
            "title": {
              "en": "Genetic Panels",
              "tr": "Genetik Paneller"
            },
            "body": {
              "en": "Genetic panels group related tests so that several conditions or gene targets can be assessed together from a single sample. Panel selection is guided by family history, clinical indication, and the specific question to be answered. This approach can streamline evaluation while keeping testing focused on medically relevant conditions.",
              "tr": "Genetik paneller; tek bir numuneden birden fazla durum veya gen hedefinin birlikte değerlendirilebilmesi için ilişkili testleri bir araya getirir. Panel seçimi; aile öyküsü, klinik endikasyon ve yanıtlanması gereken spesifik soru doğrultusunda belirlenir. Bu yaklaşım, testi tıbbi olarak anlamlı durumlara odaklı tutarken değerlendirmeyi kolaylaştırabilir."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Our Laboratory",
          "tr": "Laboratuvarımız"
        },
        "intro": {
          "en": "Our work is organized around validated protocols, established laboratory technology, and careful sample handling across the cytogenetic, molecular, and prenatal workflows.",
          "tr": "Çalışmalarımız; sitogenetik, moleküler ve prenatal iş akışlarında doğrulanmış protokoller, yerleşik laboratuvar teknolojisi ve titiz numune yönetimi etrafında düzenlenir."
        },
        "items": [
          {
            "title": {
              "en": "Validated Protocols",
              "tr": "Doğrulanmış Protokoller"
            },
            "body": {
              "en": "Testing follows standardized, validated protocols with defined quality-control steps at each stage of the workflow. This structure supports consistent, reproducible results and clear interpretation of findings. Every report is prepared on an informational basis and is intended to be reviewed together with your treating physician.",
              "tr": "Testler; iş akışının her aşamasında tanımlı kalite kontrol adımları içeren standartlaştırılmış, doğrulanmış protokolleri izler. Bu yapı; tutarlı, tekrarlanabilir sonuçları ve bulguların net yorumlanmasını destekler. Her rapor bilgilendirme amacıyla hazırlanır ve tedavi eden hekiminizle birlikte değerlendirilmek üzere sunulur."
            }
          },
          {
            "title": {
              "en": "Established Technology",
              "tr": "Yerleşik Teknoloji"
            },
            "body": {
              "en": "The laboratory combines cytogenetic techniques (karyotyping and banding), fluorescence in situ hybridization, and molecular methods including PCR and DNA analysis. Method selection is matched to the clinical question so that each case is examined with an appropriate level of resolution. Where a screening result requires confirmation, a corresponding diagnostic method is applied.",
              "tr": "Laboratuvar; sitogenetik teknikleri (karyotipleme ve bantlama), floresan in situ hibridizasyon ve PCR ile DNA analizi dahil moleküler yöntemleri bir araya getirir. Yöntem seçimi klinik soruyla eşleştirilir; böylece her olgu uygun çözünürlük düzeyinde incelenir. Bir tarama sonucunun doğrulanması gerektiğinde, buna karşılık gelen tanısal yöntem uygulanır."
            }
          },
          {
            "title": {
              "en": "Sample Integrity",
              "tr": "Numune Bütünlüğü"
            },
            "body": {
              "en": "A broad range of sample types is accepted, including peripheral and fetal blood, amniotic fluid, chorionic villus samples, tissue, and buccal swabs, each handled under defined collection and processing conditions. Consent and, where required, chain-of-custody procedures are maintained for identity-related testing. Careful sample handling helps protect the reliability of every result.",
              "tr": "Periferik ve fetal kan, amniyon sıvısı, koryon villus örneği, doku ve bukkal sürüntü dahil geniş bir numune yelpazesi kabul edilir; her biri tanımlı toplama ve işleme koşulları altında yönetilir. Kimlikle ilişkili testler için onam ve gerektiğinde delil zinciri (chain-of-custody) prosedürleri sürdürülür. Titiz numune yönetimi, her sonucun güvenilirliğini korumaya yardımcı olur."
            }
          }
        ]
      }
    ],
    "disclaimer": "medical"
  },
  "stem-cell-therapy": {
    "slug": "stem-cell-therapy",
    "title": {
      "en": "Stem Cell Therapy Laboratory",
      "tr": "Kök Hücre Tedavi Laboratuvarı"
    },
    "intro": {
      "en": "Genetikon's Stem Cell Therapy Laboratory works in the field of regenerative medicine, using protocol-based, laboratory-cultured cell preparations. Our work centers on autologous approaches, where cells are collected from the person, isolated and expanded in culture under defined conditions, and then reintroduced according to a structured protocol. Regenerative cell therapy is an active area of scientific research. Many of the applications described here are investigational, outcomes vary from person to person, and no result can be promised. This page is informational only and does not diagnose, treat, or cure any disease. Any decision about care should be made together with your treating physician.",
      "tr": "Genetikon Kök Hücre Tedavi Laboratuvarı, protokol temelli ve laboratuvarda kültüre edilen hücre preparatları kullanarak rejeneratif tıp alanında çalışır. Çalışmalarımızın merkezinde otolog yaklaşımlar yer alır: hücreler kişinin kendisinden alınır, tanımlı koşullarda kültürde izole edilip çoğaltılır ve yapılandırılmış bir protokole göre yeniden verilir. Rejeneratif hücre tedavisi bilimsel araştırmanın aktif bir alanıdır. Burada anlatılan uygulamaların çoğu araştırma aşamasındadır, sonuçlar kişiden kişiye değişir ve hiçbir sonuç vaat edilemez. Bu sayfa yalnızca bilgilendirme amaçlıdır; herhangi bir hastalığı teşhis, tedavi veya iyileştirme iddiası taşımaz. Bakımınıza ilişkin her karar, sizi izleyen hekiminizle birlikte verilmelidir."
    },
    "disclaimer": "stemCell",
    "sections": [
      {
        "heading": {
          "en": "Our Approach",
          "tr": "Yaklaşımımız"
        },
        "intro": {
          "en": "We follow a protocol-driven, laboratory-based method with an emphasis on autologous, culture-expanded cells and honest communication about what is known and what remains under investigation.",
          "tr": "Otolog ve kültürde çoğaltılmış hücrelere ağırlık veren, protokol odaklı ve laboratuvar temelli bir yöntem izleriz; nelerin bilindiği ve nelerin hâlâ araştırma aşamasında olduğu konusunda dürüst bir iletişim benimseriz."
        },
        "items": [
          {
            "title": {
              "en": "Protocol-based work",
              "tr": "Protokol temelli çalışma"
            },
            "body": {
              "en": "Each preparation is handled through a defined, documented laboratory protocol — from collection and isolation to culture, quality checks, and reintroduction. Standardized steps are intended to support consistency and traceability at every stage.",
              "tr": "Her preparat; toplama ve izolasyondan kültür, kalite kontrolleri ve yeniden verilmeye kadar tanımlı ve belgelenmiş bir laboratuvar protokolü üzerinden yürütülür. Standartlaştırılmış adımlar, her aşamada tutarlılık ve izlenebilirliği desteklemeyi amaçlar."
            }
          },
          {
            "title": {
              "en": "Autologous, culture-expanded cells",
              "tr": "Otolog, kültürde çoğaltılmış hücreler"
            },
            "body": {
              "en": "Our primary approach uses autologous cells — cells derived from the same person — which are isolated and expanded in culture before use. Working with a person's own cells is a design choice within the protocol and is central to how the laboratory operates.",
              "tr": "Birincil yaklaşımımız, aynı kişiden elde edilen otolog hücreleri kullanır; bu hücreler kullanılmadan önce kültürde izole edilip çoğaltılır. Kişinin kendi hücreleriyle çalışmak, protokol içinde bilinçli bir tercihtir ve laboratuvarın işleyişinin merkezinde yer alır."
            }
          },
          {
            "title": {
              "en": "Honest evidence language",
              "tr": "Dürüst kanıt dili"
            },
            "body": {
              "en": "Regenerative medicine is an evolving field. We describe applications in terms of what cells may support at a structural or functional level, we flag when an application is investigational, and we do not present outcomes as guaranteed. Results vary between individuals, and expectations should be discussed with a physician.",
              "tr": "Rejeneratif tıp gelişmekte olan bir alandır. Uygulamaları, hücrelerin yapısal veya işlevsel düzeyde neyi destekleyebileceği çerçevesinde tanımlarız; bir uygulamanın araştırma aşamasında olduğunu belirtir ve sonuçları garantili olarak sunmayız. Sonuçlar bireyden bireye değişir ve beklentiler bir hekimle görüşülmelidir."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Treatment laboratory framework",
          "tr": "Tedavi laboratuvarı çerçevesi"
        },
        "intro": {
          "en": "A treatment laboratory is one in which human tissue, cells or genetic material is modified with advanced technology and molecular methods for therapeutic, supportive or reparative purposes. By field of activity, treatment laboratories are classified into the following categories:",
          "tr": "Tedavi laboratuvarı; insan dokusu, hücresi veya genetik materyalin ileri teknoloji ve moleküler yöntemlerle modifiye edilerek tedavi, destekleyici veya onarıcı amaçlarla kullanıldığı laboratuvardır. Faaliyet alanına göre tedavi laboratuvarları aşağıdaki kategorilere ayrılır:"
        },
        "items": [
          {
            "title": {
              "en": "Gene therapy & gene-editing laboratories",
              "tr": "Gen tedavisi ve gen düzenleme laboratuvarları"
            },
            "body": {
              "en": "Work with the therapeutic modification of genetic material, including gene-editing methods.",
              "tr": "Gen düzenleme yöntemleri dâhil, genetik materyalin terapötik modifikasyonuyla çalışır."
            }
          },
          {
            "title": {
              "en": "Cellular therapy laboratories",
              "tr": "Hücresel tedavi laboratuvarları"
            },
            "body": {
              "en": "Prepare and process cell-based preparations for therapeutic, supportive or reparative use.",
              "tr": "Terapötik, destekleyici veya onarıcı kullanım için hücre temelli preparatları hazırlar ve işler."
            }
          },
          {
            "title": {
              "en": "RNA/DNA-based therapy laboratories",
              "tr": "RNA/DNA temelli tedavi laboratuvarları"
            },
            "body": {
              "en": "Focus on nucleic-acid-based approaches within molecular therapeutics.",
              "tr": "Moleküler terapötikte nükleik asit temelli yaklaşımlara odaklanır."
            }
          },
          {
            "title": {
              "en": "Proteomics laboratories",
              "tr": "Proteomik laboratuvarları"
            },
            "body": {
              "en": "Study proteins and protein-level processes relevant to diagnosis and therapy.",
              "tr": "Tanı ve tedaviyle ilgili proteinleri ve protein düzeyindeki süreçleri inceler."
            }
          },
          {
            "title": {
              "en": "Regenerative medicine laboratories",
              "tr": "Rejeneratif tıp laboratuvarları"
            },
            "body": {
              "en": "Work within regenerative-medicine research, supporting the body's own repair processes.",
              "tr": "Vücudun kendi onarım süreçlerini destekleyen rejeneratif tıp araştırmaları kapsamında çalışır."
            }
          },
          {
            "title": {
              "en": "Stem cell laboratories",
              "tr": "Kök hücre laboratuvarları"
            },
            "body": {
              "en": "Isolate, culture and process stem cells under defined, controlled conditions.",
              "tr": "Kök hücreleri tanımlı ve kontrollü koşullar altında izole eder, kültürler ve işler."
            }
          },
          {
            "title": {
              "en": "Monoclonal antibody & biologics laboratories",
              "tr": "Monoklonal antikor ve biyolojik ürün laboratuvarları"
            },
            "body": {
              "en": "Develop monoclonal antibodies and biological products.",
              "tr": "Monoklonal antikorlar ve biyolojik ürünler geliştirir."
            }
          },
          {
            "title": {
              "en": "Nano-medicine & exosome-based laboratories",
              "tr": "Nano-tıp ve ekzozom temelli laboratuvarlar"
            },
            "body": {
              "en": "Work with nano-medicine and exosome-based methods.",
              "tr": "Nano-tıp ve ekzozom temelli yöntemlerle çalışır."
            }
          },
          {
            "title": {
              "en": "Where our laboratory sits",
              "tr": "Laboratuvarımızın yeri"
            },
            "body": {
              "en": "Within this framework, the Stem Cell Therapy Laboratory works across the regenerative-medicine, stem cell and exosome/nano-medicine categories, under a single institutional standard.",
              "tr": "Bu çerçeve içinde Kök Hücre Tedavi Laboratuvarı; rejeneratif tıp, kök hücre ve ekzozom/nano-tıp kategorilerinde, tek bir kurumsal standart altında çalışır."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Application Areas",
          "tr": "Uygulama Alanları"
        },
        "intro": {
          "en": "The areas below are studied within regenerative medicine research. Their status differs from one condition to another, and for several the evidence remains limited or investigational. Nothing here should be read as a claim to treat or cure. Suitability, if any, is an individual matter to be assessed by your physician.",
          "tr": "Aşağıdaki alanlar rejeneratif tıp araştırmaları kapsamında incelenmektedir. Durumları hastalıktan hastalığa farklılık gösterir ve birçoğu için kanıtlar hâlâ sınırlı veya araştırma aşamasındadır. Buradaki hiçbir ifade, tedavi veya iyileştirme iddiası olarak okunmamalıdır. Varsa uygunluk, hekiminizin değerlendireceği bireysel bir konudur."
        },
        "items": [
          {
            "title": {
              "en": "Demyelinating & neuro-immune conditions",
              "tr": "Demiyelinizan ve nöro-immün durumlar"
            },
            "body": {
              "en": "Studied areas include Multiple Sclerosis (MS), Neuromyelitis Optica Spectrum Disorder (NMO / Devic's disease), MOG antibody disease (MOGAD), Neuro-Behçet, lupus (SLE) myelitis and neurological Lyme disease. Cell-based approaches for these conditions are investigational; the evidence differs by condition and is not settled. Nothing here is a treatment or cure — individual outcomes vary and suitability is assessed only by your physician.",
              "tr": "İncelenen alanlar arasında Multipl Skleroz (MS), Nöromiyelitis Optika Spektrum Bozukluğu (NMO / Devic hastalığı), MOG antikor hastalığı (MOGAD), Nöro-Behçet, lupus (SLE) miyeliti ve nörolojik Lyme hastalığı yer alır. Bu durumlarda hücre temelli yaklaşımlar araştırma aşamasındadır; kanıtlar duruma göre değişir ve kesinleşmemiştir. Buradaki hiçbir ifade tedavi veya iyileştirme değildir — sonuçlar kişiden kişiye değişir, uygunluk yalnızca hekiminiz tarafından değerlendirilir."
            }
          },
          {
            "title": {
              "en": "Neurodegenerative & motor-neuron conditions",
              "tr": "Nörodejeneratif ve motor-nöron durumları"
            },
            "body": {
              "en": "This group includes Amyotrophic Lateral Sclerosis (ALS), Parkinson's disease and Charcot-Marie-Tooth disease (peroneal muscular atrophy). These are areas of active scientific investigation; for most, cell-based approaches remain unproven and are considered investigational. No therapeutic benefit is implied, results vary, and any decision must be made with your treating physician.",
              "tr": "Bu grup Amiyotrofik Lateral Skleroz (ALS), Parkinson hastalığı ve Charcot-Marie-Tooth hastalığını (peroneal kas atrofisi) içerir. Bunlar aktif bilimsel araştırma alanlarıdır; çoğu için hücre temelli yaklaşımlar kanıtlanmamıştır ve araştırma niteliğinde kabul edilir. Herhangi bir tedavi yararı ima edilmez, sonuçlar değişir ve her karar tedaviyi yürüten hekiminizle verilmelidir."
            }
          },
          {
            "title": {
              "en": "Ataxias & movement disorders",
              "tr": "Ataksiler ve hareket bozuklukları"
            },
            "body": {
              "en": "Areas studied include Multisystem Atrophy (MSA), Friedreich's ataxia, cerebellar ataxia, generalized dystonia and Spinal Muscular Atrophy (SMA). For several of these the evidence is very limited and the research status is uncertain. Applications are investigational, are not offered as a cure, and individual outcomes vary — a physician's assessment is essential.",
              "tr": "İncelenen alanlar arasında Multisistem Atrofi (MSA), Friedreich ataksisi, serebellar ataksi, jeneralize distoni ve Spinal Musküler Atrofi (SMA) bulunur. Bunların birçoğu için kanıt oldukça sınırlıdır ve araştırma statüsü belirsizdir. Uygulamalar araştırma aşamasındadır, tedavi olarak sunulmaz ve bireysel sonuçlar değişir — hekim değerlendirmesi zorunludur."
            }
          },
          {
            "title": {
              "en": "Spinal cord & acquired brain injury",
              "tr": "Omurilik ve edinsel beyin hasarı"
            },
            "body": {
              "en": "Studied areas include spinal cord injury, transverse myelitis, Guillain-Barré syndrome sequelae, cerebral palsy, hypoxic and traumatic brain injury, and hemiplegia. Regenerative approaches here are researched with cell-based methods; the research status differs and may be uncertain. These are investigational, not presented as treatments, and outcomes vary individually. Consult your physician.",
              "tr": "İncelenen alanlar arasında omurilik yaralanması, transvers miyelit, Guillain-Barré sendromu sekelleri, serebral palsi, hipoksik ve travmatik beyin hasarı ile hemipleji yer alır. Buradaki rejeneratif yaklaşımlar hücre temelli yöntemlerle araştırılır; araştırma statüsü farklılık gösterir ve belirsiz olabilir. Bunlar araştırma aşamasındadır, tedavi olarak sunulmaz ve sonuçlar bireysel olarak değişir. Hekiminize danışın."
            }
          },
          {
            "title": {
              "en": "Peripheral & functional neurology",
              "tr": "Periferik ve fonksiyonel nöroloji"
            },
            "body": {
              "en": "Areas explored include peripheral nerve damage, polyneuropathy, neurogenic bladder, trigeminal neuralgia, anosmia/parosmia, isolated epilepsy and essential (senile) tremor. Cell-based approaches remain investigational and the evidence differs by condition. No benefit is promised, results vary from person to person, and suitability is determined only by your physician.",
              "tr": "İncelenen alanlar arasında periferik sinir hasarı, polinöropati, nörojenik mesane, trigeminal nevralji, anozmi/parozmi, izole epilepsi ve esansiyel (senil) tremor yer alır. Hücre temelli yaklaşımlar araştırma aşamasında kalır ve kanıtlar duruma göre değişir. Hiçbir yarar vaat edilmez, sonuçlar kişiden kişiye değişir ve uygunluk yalnızca hekiminiz tarafından belirlenir."
            }
          },
          {
            "title": {
              "en": "Ophthalmology & audiology",
              "tr": "Oftalmoloji ve odyoloji"
            },
            "body": {
              "en": "Studied areas include retinitis pigmentosa, macular degeneration, optic atrophy and optic neuritis, nerve-related vision loss, nerve-related hearing loss and tinnitus. These are areas of ongoing regenerative research; the status is uncertain and cell applications here are investigational. Individual outcomes vary and are not guaranteed — always consult your physician.",
              "tr": "İncelenen alanlar arasında retinitis pigmentoza, makula dejenerasyonu, optik atrofi ve optik nörit, sinir kaynaklı görme kaybı, sinir kaynaklı işitme kaybı ve tinnitus yer alır. Bunlar süregelen rejeneratif araştırma alanlarıdır; statü belirsizdir ve buradaki hücre uygulamaları araştırma aşamasındadır. Bireysel sonuçlar değişir ve garanti edilmez — daima hekiminize danışın."
            }
          },
          {
            "title": {
              "en": "Cognitive & neurodevelopmental areas",
              "tr": "Kognitif ve nörogelişimsel alanlar"
            },
            "body": {
              "en": "This group includes dementia, frontotemporal dementia, Alzheimer's disease, autism and Asperger syndrome. Evidence in these areas is particularly limited and the research status is uncertain; any application is investigational and results vary. No benefit is promised. These topics should be approached cautiously and only with physician guidance.",
              "tr": "Bu grup demans, frontotemporal demans, Alzheimer hastalığı, otizm ve Asperger sendromunu içerir. Bu alanlardaki kanıtlar özellikle sınırlıdır ve araştırma statüsü belirsizdir; herhangi bir uygulama araştırma aşamasındadır ve sonuçlar değişir. Hiçbir yarar vaat edilmez. Bu konulara temkinli ve yalnızca hekim rehberliğinde yaklaşılmalıdır."
            }
          },
          {
            "title": {
              "en": "Muscular dystrophies",
              "tr": "Kas distrofileri"
            },
            "body": {
              "en": "Areas studied include Duchenne muscular dystrophy (DMD), Limb-Girdle muscular dystrophies (LGMD) and sarcoglycanopathies. For these genetic muscle conditions the evidence is limited and the research status is uncertain; applications are investigational and are not presented as a cure. Outcomes vary individually and require a physician's assessment.",
              "tr": "İncelenen alanlar arasında Duchenne musküler distrofisi (DMD), Limb-Girdle musküler distrofileri (LGMD) ve sarkoglikanopatiler yer alır. Bu genetik kas durumları için kanıt sınırlıdır ve araştırma statüsü belirsizdir; uygulamalar araştırma aşamasındadır ve tedavi olarak sunulmaz. Sonuçlar bireysel olarak değişir ve hekim değerlendirmesi gerektirir."
            }
          },
          {
            "title": {
              "en": "Orthopedic, vascular & wound areas",
              "tr": "Ortopedik, vasküler ve yara alanları"
            },
            "body": {
              "en": "Studied areas include advanced osteoarthritis (grade III-IV), avascular/aseptic necrosis, temporomandibular joint osteoarthritis, diabetic foot, pressure (decubitus) ulcers and Buerger's disease. Regenerative approaches here are researched; the research status differs and may be uncertain. Applications are investigational, outcomes vary, and a physician's evaluation is required.",
              "tr": "İncelenen alanlar arasında ileri osteoartrit (evre III-IV), avasküler/aseptik nekroz, temporomandibular eklem osteoartriti, diyabetik ayak, bası (dekübit) yaraları ve Buerger hastalığı yer alır. Buradaki rejeneratif yaklaşımlar araştırılır; araştırma statüsü farklılık gösterir ve belirsiz olabilir. Uygulamalar araştırma aşamasındadır, sonuçlar değişir ve hekim değerlendirmesi gereklidir."
            }
          },
          {
            "title": {
              "en": "Autoimmune, rheumatic & allergic areas (exosome-based)",
              "tr": "Otoimmün, romatizmal ve alerjik alanlar (eksozom temelli)"
            },
            "body": {
              "en": "Using autologous exosome-based approaches, studied areas include rheumatoid arthritis, ankylosing spondylitis, psoriasis, fibromyalgia, Hashimoto's thyroiditis, Sjögren's syndrome, ulcerative colitis, early-grade gonarthrosis, migraine and allergic conditions (allergic asthma, eczema, urticaria). These applications are investigational; the evidence differs by condition and is not settled. No treatment or cure is claimed, results vary, and a physician's assessment is essential.",
              "tr": "Otolog eksozom temelli yaklaşımlarla incelenen alanlar arasında romatoid artrit, ankilozan spondilit, sedef (psoriazis), fibromiyalji, Hashimoto tiroiditi, Sjögren sendromu, ülseratif kolit, erken evre gonartroz, migren ve alerjik durumlar (alerjik astım, egzama, ürtiker) yer alır. Bu uygulamalar araştırma aşamasındadır; kanıtlar duruma göre değişir ve kesinleşmemiştir. Tedavi veya iyileştirme iddiasında bulunulmaz, sonuçlar değişir ve hekim değerlendirmesi zorunludur."
            }
          },
          {
            "title": {
              "en": "Aesthetic & topical applications (PES)",
              "tr": "Estetik ve topikal uygulamalar (PES)"
            },
            "body": {
              "en": "Alongside laboratory research, autologous exosome / PES-based aesthetic and topical applications are described — including skin, scar, hair and dermatological care and a range of topical care products. These are cosmetic and supportive in nature, are not medical treatments for disease, and individual results vary. A specialist should assess suitability.",
              "tr": "Laboratuvar araştırmalarının yanında, otolog eksozom / PES temelli estetik ve topikal uygulamalar tanımlanır — cilt, iz (skar), saç ve dermatolojik bakım ile bir dizi topikal bakım ürünü dâhil. Bunlar doğası gereği kozmetik ve destekleyicidir, hastalıklar için tıbbi tedavi değildir ve bireysel sonuçlar değişir. Uygunluğu bir uzman değerlendirmelidir."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Cell Products",
          "tr": "Hücre Ürünleri"
        },
        "intro": {
          "en": "The laboratory works with several cell types. The descriptions below are brief definitions of each cell category and do not imply a specific clinical outcome.",
          "tr": "Laboratuvar, çeşitli hücre tipleriyle çalışır. Aşağıdaki açıklamalar her hücre kategorisinin kısa tanımlarıdır ve belirli bir klinik sonucu ima etmez."
        },
        "items": [
          {
            "title": {
              "en": "Mesenchymal Stem Cells (MSC)",
              "tr": "Mezenkimal Kök Hücreler (MSC)"
            },
            "body": {
              "en": "Multipotent stromal cells that can be isolated from sources such as bone marrow and adipose (fat) tissue and expanded in culture. They are among the most widely studied cell types in regenerative research.",
              "tr": "Kemik iliği ve yağ (adipoz) dokusu gibi kaynaklardan izole edilip kültürde çoğaltılabilen multipotent stromal hücrelerdir. Rejeneratif araştırmalarda en çok incelenen hücre tipleri arasındadır."
            }
          },
          {
            "title": {
              "en": "Fetal Stem Cells",
              "tr": "Fetal Kök Hücreler"
            },
            "body": {
              "en": "Stem cells derived from fetal tissue sources. Their use is governed by strict ethical and regulatory frameworks and is described here only as a defined cell category.",
              "tr": "Fetal doku kaynaklarından elde edilen kök hücrelerdir. Kullanımları katı etik ve yasal çerçevelere tabidir ve burada yalnızca tanımlı bir hücre kategorisi olarak açıklanır."
            }
          },
          {
            "title": {
              "en": "Embryonic Stem Cells",
              "tr": "Embriyonik Kök Hücreler"
            },
            "body": {
              "en": "Pluripotent cells derived from early-stage embryonic sources, capable of differentiating into many cell types. Their study and use are subject to specific ethical and legal regulation.",
              "tr": "Erken evre embriyonik kaynaklardan elde edilen, birçok hücre tipine farklılaşabilen pluripotent hücrelerdir. İncelenmeleri ve kullanımları özel etik ve yasal düzenlemelere tabidir."
            }
          },
          {
            "title": {
              "en": "Fibroblasts",
              "tr": "Fibroblastlar"
            },
            "body": {
              "en": "Connective-tissue cells commonly obtained from skin, associated with the production of structural proteins such as collagen. They can be isolated and expanded in culture.",
              "tr": "Genellikle deriden elde edilen, kolajen gibi yapısal proteinlerin üretimiyle ilişkilendirilen bağ dokusu hücreleridir. İzole edilip kültürde çoğaltılabilirler."
            }
          },
          {
            "title": {
              "en": "Chondrocytes",
              "tr": "Kondrositler"
            },
            "body": {
              "en": "The resident cells of cartilage tissue, responsible for maintaining the cartilage matrix. They can be isolated and cultured for use in cartilage-related regenerative research.",
              "tr": "Kıkırdak dokusunun yerleşik hücreleri olup kıkırdak matriksinin korunmasından sorumludur. Kıkırdakla ilişkili rejeneratif araştırmalarda kullanılmak üzere izole edilip kültüre edilebilirler."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Application Methods",
          "tr": "Uygulama Yöntemleri"
        },
        "intro": {
          "en": "Depending on the protocol, cell preparations may be introduced through different routes. The route is selected within the protocol under medical supervision.",
          "tr": "Protokole bağlı olarak, hücre preparatları farklı yollarla verilebilir. Yol, tıbbi gözetim altında protokol içinde belirlenir."
        },
        "items": [
          {
            "title": {
              "en": "Intravenous (IV)",
              "tr": "İntravenöz (IV)"
            },
            "body": {
              "en": "Administration into a vein, allowing systemic distribution through the bloodstream.",
              "tr": "Bir damara uygulama olup kan dolaşımı yoluyla sistemik dağılıma olanak tanır."
            }
          },
          {
            "title": {
              "en": "Intramuscular (IM)",
              "tr": "İntramüsküler (IM)"
            },
            "body": {
              "en": "Administration into muscle tissue.",
              "tr": "Kas dokusuna uygulama."
            }
          },
          {
            "title": {
              "en": "Intra-articular",
              "tr": "Eklem içi (İntra-artiküler)"
            },
            "body": {
              "en": "Administration directly into a joint space, used in joint-related applications.",
              "tr": "Doğrudan eklem boşluğuna uygulama olup ekleme ilişkin uygulamalarda kullanılır."
            }
          },
          {
            "title": {
              "en": "Lumbar puncture",
              "tr": "Lomber ponksiyon"
            },
            "body": {
              "en": "Administration into the cerebrospinal fluid via the lumbar region, performed by qualified medical personnel under appropriate conditions.",
              "tr": "Lomber bölgeden beyin-omurilik sıvısına uygulama olup uygun koşullarda yetkili tıbbi personel tarafından gerçekleştirilir."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Treatment Process",
          "tr": "Tedavi Süreci"
        },
        "intro": {
          "en": "When a protocol proceeds, it typically follows the stages below. Timeframes are approximate and may differ by individual and by protocol.",
          "tr": "Bir protokol yürütüldüğünde genellikle aşağıdaki aşamaları izler. Süreler yaklaşıktır ve kişiye ve protokole göre değişebilir."
        },
        "items": [
          {
            "title": {
              "en": "a. Examination and material collection",
              "tr": "a. Muayene ve materyal toplama"
            },
            "body": {
              "en": "An initial examination is followed by collection of biological material — for example bone marrow, adipose (fat) tissue, or approximately 50 cc of blood.",
              "tr": "İlk muayenenin ardından biyolojik materyal toplanır; örneğin kemik iliği, yağ (adipoz) dokusu veya yaklaşık 50 cc kan."
            }
          },
          {
            "title": {
              "en": "b. Isolation and culture start",
              "tr": "b. İzolasyon ve kültür başlangıcı"
            },
            "body": {
              "en": "Cells are isolated and culture is started. Proliferation is checked within about 2 days; if the cells proliferate, culture continues.",
              "tr": "Hücreler izole edilir ve kültür başlatılır. Çoğalma yaklaşık 2 gün içinde kontrol edilir; hücreler çoğalırsa kültüre devam edilir."
            }
          },
          {
            "title": {
              "en": "c. Expansion and transfer rounds",
              "tr": "c. Çoğaltma ve nakil turları"
            },
            "body": {
              "en": "Reaching a sufficient cell count takes roughly 4 weeks. This is followed by 3 rounds of 10-day intravenous and subcutaneous transfers, with approximately 3-month intervals between rounds.",
              "tr": "Yeterli hücre sayısına ulaşmak yaklaşık 4 hafta sürer. Bunu, turlar arasında yaklaşık 3 ay ara ile 3 kez 10 günlük intravenöz ve cilt altı nakiller izler."
            }
          },
          {
            "title": {
              "en": "d. Follow-up",
              "tr": "d. Takip"
            },
            "body": {
              "en": "The overall follow-up period is approximately 7 months. Because responses differ between individuals, follow-up details are set on a case-by-case basis with the treating physician.",
              "tr": "Genel takip süresi yaklaşık 7 aydır. Yanıtlar bireyden bireye değiştiği için takip ayrıntıları, sizi izleyen hekimle her vaka özelinde belirlenir."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Scientific Basis",
          "tr": "Bilimsel Altyapı"
        },
        "intro": {
          "en": "Our laboratory practice is grounded in the peer-reviewed regenerative-medicine literature. The references below indicate the scientific foundation the work draws on; they describe an area of active research rather than promising any specific outcome.",
          "tr": "Laboratuvar uygulamamız, hakemli rejeneratif tıp literatürüne dayanır. Aşağıdaki kaynaklar, çalışmanın dayandığı bilimsel temeli gösterir; belirli bir sonuç vaat etmekten ziyade aktif bir araştırma alanını tanımlar."
        },
        "items": [
          {
            "title": {
              "en": "Protocol reference works",
              "tr": "Protokol referans kaynakları"
            },
            "body": {
              "en": "Our protocols draw on established reference volumes in the field: (1) Stromal Cells — Structure, Function, and Therapeutic Implications (ed. Valarmathi); (2) Stem Cells and Neurodegenerative Diseases (ed. Lescaudron); (3) Adult Stem Cells, Biology and Methods of Analysis (ed. Phinney).",
              "tr": "Protokollerimiz alandaki yerleşik referans kaynaklarına dayanır: (1) Stromal Cells — Structure, Function, and Therapeutic Implications (Ed. Valarmathi); (2) Stem Cells and Neurodegenerative Diseases (Ed. Lescaudron); (3) Adult Stem Cells, Biology and Methods of Analysis (Ed. Phinney)."
            }
          },
          {
            "title": {
              "en": "CD34+ and iPSC literature",
              "tr": "CD34+ ve iPSC literatürü"
            },
            "body": {
              "en": "The laboratory's methodological focus reflects the published literature on ex vivo cultured expansion of CD34+ peripheral blood progenitor cells (PBPC), expanded induced autologous CD34+ cells, patient-derived induced pluripotent stem cells (iPSCs), and induced cultured autologous stem cell approaches. These describe active research directions in regenerative medicine.",
              "tr": "Laboratuvarın metodolojik odağı; CD34+ periferik kan öncül hücrelerinin (PBPC) ex vivo kültürde çoğaltılması, çoğaltılmış indüklenmiş otolog CD34+ hücreler, hastadan türetilen indüklenmiş pluripotent kök hücreler (iPSC) ve indüklenmiş kültüre edilmiş otolog kök hücre yaklaşımları üzerine yayımlanmış literatürü yansıtır. Bunlar, rejeneratif tıpta aktif araştırma yönlerini tanımlar."
            }
          }
        ]
      }
    ]
  },
  "ivf-center": {
    "slug": "ivf-center",
    "title": {
      "en": "IVF Center",
      "tr": "Tüp Bebek Merkezi"
    },
    "intro": {
      "en": "The IVF Center provides assisted reproductive care for individuals and couples, including patients traveling from abroad. Care is organized around established laboratory and clinical methods, with each pathway matched to the medical situation after evaluation. This page is informational and is not a substitute for medical advice; treatment options, suitability, and expected outcomes are determined only after consultation with a physician. Where regulated procedures such as donation and surrogacy are described, they reflect the framework applicable at our Batumi, Georgia location.",
      "tr": "Tüp Bebek Merkezi, yurt dışından gelen hastalar dahil olmak üzere bireyler ve çiftler için yardımcı üreme hizmetleri sunar. Bakım, yerleşik laboratuvar ve klinik yöntemler etrafında düzenlenir; her yol, değerlendirme sonrasında tıbbi duruma göre belirlenir. Bu sayfa bilgilendirme amaçlıdır ve tıbbi tavsiyenin yerini tutmaz; tedavi seçenekleri, uygunluk ve beklenen sonuçlar yalnızca bir hekimle görüşmenin ardından belirlenir. Donasyon ve taşıyıcı annelik gibi düzenlemeye tabi işlemlerin anlatıldığı yerlerde, bunlar Batumi, Gürcistan konumumuzda geçerli olan yasal çerçeveyi yansıtır."
    },
    "sections": [
      {
        "heading": {
          "en": "Treatments",
          "tr": "Tedaviler"
        },
        "intro": {
          "en": "The following treatments and laboratory procedures are available. Which of them applies to a given case is decided after clinical evaluation.",
          "tr": "Aşağıdaki tedaviler ve laboratuvar işlemleri mevcuttur. Bunlardan hangisinin belirli bir duruma uygun olduğu klinik değerlendirme sonrasında belirlenir."
        },
        "items": [
          {
            "title": {
              "en": "IVF (In Vitro Fertilization)",
              "tr": "Tüp Bebek (İn Vitro Fertilizasyon)"
            },
            "body": {
              "en": "Eggs and sperm are brought together in the laboratory, and a resulting embryo is transferred to the uterus. It is used across a range of fertility situations after individual assessment.",
              "tr": "Yumurta ve sperm laboratuvarda bir araya getirilir ve oluşan embriyo rahme transfer edilir. Bireysel değerlendirme sonrasında çeşitli doğurganlık durumlarında kullanılır."
            }
          },
          {
            "title": {
              "en": "ICSI (Intracytoplasmic Sperm Injection)",
              "tr": "ICSI (İntrasitoplazmik Sperm Enjeksiyonu)"
            },
            "body": {
              "en": "A single selected sperm is injected directly into an egg. It is often considered where sperm parameters or prior fertilization results indicate it may be appropriate.",
              "tr": "Seçilmiş tek bir sperm doğrudan yumurtanın içine enjekte edilir. Sperm parametreleri veya önceki döllenme sonuçları uygun olabileceğini gösterdiğinde sıklıkla değerlendirilir."
            }
          },
          {
            "title": {
              "en": "Sperm Donation",
              "tr": "Sperm Donasyonu"
            },
            "body": {
              "en": "Screened donor sperm may be used when clinically indicated. Donor programs follow the regulatory framework applicable at the Batumi, Georgia location; eligibility is discussed during consultation.",
              "tr": "Klinik olarak gerekli görüldüğünde taranmış donör spermi kullanılabilir. Donör programları Batumi, Gürcistan konumunda geçerli olan yasal çerçeveye uyar; uygunluk görüşme sırasında ele alınır."
            }
          },
          {
            "title": {
              "en": "Egg Donation",
              "tr": "Yumurta Donasyonu"
            },
            "body": {
              "en": "Screened donor eggs may be used in an IVF cycle when clinically indicated. Matching and eligibility are reviewed on an individual basis within the applicable framework.",
              "tr": "Klinik olarak gerekli görüldüğünde bir tüp bebek döngüsünde taranmış donör yumurtaları kullanılabilir. Eşleştirme ve uygunluk, geçerli çerçeve içinde bireysel olarak değerlendirilir."
            }
          },
          {
            "title": {
              "en": "Embryo Donation",
              "tr": "Embriyo Donasyonu"
            },
            "body": {
              "en": "A donated embryo may be transferred when this is the appropriate path. As with other donation options, it is handled within the regulatory framework applicable at our location.",
              "tr": "Uygun yol olduğunda bağışlanan bir embriyo transfer edilebilir. Diğer donasyon seçeneklerinde olduğu gibi, konumumuzda geçerli olan yasal çerçeve içinde yürütülür."
            }
          },
          {
            "title": {
              "en": "Surrogacy",
              "tr": "Taşıyıcı Annelik"
            },
            "body": {
              "en": "Surrogacy is offered within the legal framework applicable at the Batumi, Georgia location. The process, documentation, and applicable law are explained during consultation; see the Information Center for an overview.",
              "tr": "Taşıyıcı annelik, Batumi, Gürcistan konumunda geçerli olan yasal çerçeve içinde sunulur. Süreç, belgeler ve geçerli hukuk görüşme sırasında açıklanır; genel bakış için Bilgi Merkezi bölümüne bakınız."
            }
          },
          {
            "title": {
              "en": "PGD (Preimplantation Genetic Diagnosis)",
              "tr": "PGT/PGD (Preimplantasyon Genetik Tanı)"
            },
            "body": {
              "en": "Embryos created through IVF may be examined genetically before transfer. It is considered in situations such as known carrier status; suitability is determined clinically.",
              "tr": "Tüp bebek yöntemiyle oluşturulan embriyolar, transfer öncesinde genetik olarak incelenebilir. Bilinen taşıyıcılık durumu gibi hallerde değerlendirilir; uygunluk klinik olarak belirlenir."
            }
          },
          {
            "title": {
              "en": "Freezing (Cryopreservation)",
              "tr": "Dondurma (Kriyoprezervasyon)"
            },
            "body": {
              "en": "Eggs, sperm, or embryos may be frozen and stored for later use. Frozen reproductive cells are handled with identity-verification safeguards required by regulation.",
              "tr": "Yumurta, sperm veya embriyolar daha sonra kullanılmak üzere dondurulup saklanabilir. Dondurulmuş üreme hücreleri, mevzuatın gerektirdiği kimlik doğrulama güvenceleriyle işlem görür."
            }
          },
          {
            "title": {
              "en": "Embryo & Blastocyst Culture",
              "tr": "Embriyo ve Blastokist Kültürü"
            },
            "body": {
              "en": "Embryos are cultured in the laboratory over several days; in some cases culture continues to the blastocyst stage. The culture plan is chosen to fit the individual cycle.",
              "tr": "Embriyolar laboratuvarda birkaç gün boyunca kültüre edilir; bazı durumlarda kültür blastokist aşamasına kadar sürdürülür. Kültür planı bireysel döngüye göre seçilir."
            }
          },
          {
            "title": {
              "en": "Surgical Sperm Retrieval",
              "tr": "Cerrahi Sperm Elde Etme"
            },
            "body": {
              "en": "When sperm is not available in the ejaculate, it may be obtained through a surgical procedure for use in ICSI. The approach is determined after urological assessment.",
              "tr": "Menide sperm bulunmadığında, ICSI'de kullanılmak üzere cerrahi bir işlemle elde edilebilir. Yöntem, ürolojik değerlendirme sonrasında belirlenir."
            }
          },
          {
            "title": {
              "en": "Laparoscopy & Hysteroscopy",
              "tr": "Laparoskopi ve Histeroskopi"
            },
            "body": {
              "en": "These minimally invasive procedures allow the uterus and surrounding structures to be examined or treated when a fertility evaluation indicates it may be helpful.",
              "tr": "Bu minimal invaziv işlemler, doğurganlık değerlendirmesi yararlı olabileceğini gösterdiğinde rahmin ve çevresindeki yapıların incelenmesine veya tedavi edilmesine olanak tanır."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Information Center",
          "tr": "Bilgi Merkezi"
        },
        "intro": {
          "en": "These guides explain the practical and legal steps involved in treatment. They are provided for orientation; the details that apply to your situation are confirmed during consultation.",
          "tr": "Bu rehberler, tedavinin içerdiği pratik ve yasal adımları açıklar. Yönlendirme amacıyla sunulur; durumunuza uygulanan ayrıntılar görüşme sırasında teyit edilir."
        },
        "items": [
          {
            "title": {
              "en": "Surrogacy Law",
              "tr": "Taşıyıcı Annelik Hukuku"
            },
            "body": {
              "en": "An overview of the legal framework governing surrogacy at the Batumi, Georgia location, including who may participate and how parentage is established. This is general information, not legal advice.",
              "tr": "Batumi, Gürcistan konumunda taşıyıcı anneliği düzenleyen yasal çerçevenin, kimlerin katılabileceği ve ebeveynliğin nasıl kurulduğu dahil genel bir özeti. Bu, hukuki tavsiye değil genel bilgidir."
            }
          },
          {
            "title": {
              "en": "IVF & Surrogacy Process",
              "tr": "Tüp Bebek ve Taşıyıcı Annelik Süreci"
            },
            "body": {
              "en": "A step-by-step outline of a combined IVF and surrogacy pathway, from initial evaluation through embryo transfer and follow-up.",
              "tr": "İlk değerlendirmeden embriyo transferine ve takibe kadar birleşik bir tüp bebek ve taşıyıcı annelik yolunun adım adım özeti."
            }
          },
          {
            "title": {
              "en": "Donation & Surrogacy Process",
              "tr": "Donasyon ve Taşıyıcı Annelik Süreci"
            },
            "body": {
              "en": "How donor gametes or embryos are combined with a surrogacy pathway, including the sequence of clinical and administrative steps.",
              "tr": "Donör gametlerinin veya embriyolarının bir taşıyıcı annelik yoluyla nasıl birleştirildiği; klinik ve idari adımların sırası dahil."
            }
          },
          {
            "title": {
              "en": "Egg Donation Process",
              "tr": "Yumurta Donasyonu Süreci"
            },
            "body": {
              "en": "The stages of an egg donation cycle, including donor screening, synchronization, and transfer, presented for general understanding.",
              "tr": "Donör taraması, senkronizasyon ve transfer dahil bir yumurta donasyonu döngüsünün aşamaları, genel anlayış için sunulmuştur."
            }
          },
          {
            "title": {
              "en": "IVF-ICSI Process",
              "tr": "Tüp Bebek-ICSI Süreci"
            },
            "body": {
              "en": "A walkthrough of a standard IVF or ICSI cycle, from ovarian stimulation and egg collection to fertilization, culture, and transfer.",
              "tr": "Yumurtalık uyarımı ve yumurta toplamadan döllenme, kültür ve transfere kadar standart bir tüp bebek veya ICSI döngüsünün adım adım anlatımı."
            }
          },
          {
            "title": {
              "en": "Visa Information",
              "tr": "Vize Bilgisi"
            },
            "body": {
              "en": "Practical orientation for international patients on entry and stay arrangements relevant to a treatment visit. Requirements depend on your country of residence and should be verified with the relevant authorities.",
              "tr": "Uluslararası hastalar için tedavi ziyaretiyle ilgili giriş ve konaklama düzenlemelerine yönelik pratik yönlendirme. Gereklilikler ikamet ettiğiniz ülkeye bağlıdır ve ilgili makamlarla doğrulanmalıdır."
            }
          },
          {
            "title": {
              "en": "Treatment Protocols",
              "tr": "Tedavi Protokolleri"
            },
            "body": {
              "en": "An explanation of the common stimulation and treatment protocols used in IVF and how the choice among them is individualized to each patient.",
              "tr": "Tüp bebekte kullanılan yaygın uyarım ve tedavi protokollerinin açıklaması ve bunlar arasındaki seçimin her hastaya göre nasıl bireyselleştirildiği."
            }
          },
          {
            "title": {
              "en": "Medications",
              "tr": "İlaçlar"
            },
            "body": {
              "en": "General information about the categories of medication used during a cycle and their role. Dosing and specific medications are prescribed only by your physician.",
              "tr": "Bir döngü sırasında kullanılan ilaç kategorileri ve rolleri hakkında genel bilgi. Dozaj ve belirli ilaçlar yalnızca hekiminiz tarafından reçete edilir."
            }
          },
          {
            "title": {
              "en": "OPU-ICSI-ET",
              "tr": "OPU-ICSI-ET"
            },
            "body": {
              "en": "An overview of the three core laboratory-and-clinical stages: oocyte pick-up (OPU), intracytoplasmic sperm injection (ICSI), and embryo transfer (ET).",
              "tr": "Üç temel laboratuvar ve klinik aşamanın genel bakışı: yumurta toplama (OPU), intrasitoplazmik sperm enjeksiyonu (ICSI) ve embriyo transferi (ET)."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "For International Patients",
          "tr": "Uluslararası Hastalar İçin"
        },
        "intro": {
          "en": "For patients traveling from abroad, care can be organized as coordinated packages that combine the relevant treatments and logistical support. Package contents are tailored to the medical situation, and specific details are shared on request. Outcome expectations are discussed as age-related ranges during consultation rather than as a single figure.",
          "tr": "Yurt dışından gelen hastalar için bakım, ilgili tedavileri ve lojistik desteği birleştiren koordineli paketler halinde düzenlenebilir. Paket içerikleri tıbbi duruma göre uyarlanır ve belirli ayrıntılar talep üzerine paylaşılır. Sonuç beklentileri, tek bir rakam yerine görüşme sırasında yaşa bağlı aralıklar olarak ele alınır."
        },
        "items": [
          {
            "title": {
              "en": "Surrogacy Package",
              "tr": "Taşıyıcı Annelik Paketi"
            },
            "body": {
              "en": "A coordinated pathway combining IVF with a surrogacy arrangement under the applicable legal framework. Scope and details are provided on request.",
              "tr": "Geçerli yasal çerçeve kapsamında tüp bebek ile bir taşıyıcı annelik düzenlemesini birleştiren koordineli bir yol. Kapsam ve ayrıntılar talep üzerine sunulur."
            }
          },
          {
            "title": {
              "en": "Surrogacy + Egg Donation Package",
              "tr": "Taşıyıcı Annelik + Yumurta Donasyonu Paketi"
            },
            "body": {
              "en": "Combines egg donation with a surrogacy pathway for cases where both are indicated. Details are provided on request.",
              "tr": "Her ikisinin de gerekli olduğu durumlar için yumurta donasyonunu bir taşıyıcı annelik yoluyla birleştirir. Ayrıntılar talep üzerine sunulur."
            }
          },
          {
            "title": {
              "en": "IVF with Egg / Sperm Donation Package",
              "tr": "Yumurta / Sperm Donasyonlu Tüp Bebek Paketi"
            },
            "body": {
              "en": "An IVF cycle using donor eggs or donor sperm, according to clinical need. Details are provided on request.",
              "tr": "Klinik ihtiyaca göre donör yumurtaları veya donör spermi kullanan bir tüp bebek döngüsü. Ayrıntılar talep üzerine sunulur."
            }
          },
          {
            "title": {
              "en": "IVF for HIV-Positive Parents (with Sperm Washing)",
              "tr": "HIV-Pozitif Ebeveynler İçin Tüp Bebek (Sperm Yıkama ile)"
            },
            "body": {
              "en": "For couples where a parent is HIV-positive, a sperm washing technique may be used as part of the IVF process to reduce transmission risk. Suitability is assessed individually; details are provided on request.",
              "tr": "Bir ebeveynin HIV-pozitif olduğu çiftler için, bulaşma riskini azaltmak amacıyla tüp bebek sürecinin bir parçası olarak sperm yıkama tekniği kullanılabilir. Uygunluk bireysel olarak değerlendirilir; ayrıntılar talep üzerine sunulur."
            }
          },
          {
            "title": {
              "en": "Frozen-Embryo Surrogacy Package",
              "tr": "Dondurulmuş Embriyo Taşıyıcı Annelik Paketi"
            },
            "body": {
              "en": "A surrogacy pathway using previously frozen embryos. Details are provided on request.",
              "tr": "Daha önce dondurulmuş embriyoları kullanan bir taşıyıcı annelik yolu. Ayrıntılar talep üzerine sunulur."
            }
          },
          {
            "title": {
              "en": "About Success Information",
              "tr": "Başarı Bilgisi Hakkında"
            },
            "body": {
              "en": "Success in assisted reproduction depends on many factors, and outcomes vary between individuals. Rather than a single headline figure, expectations are discussed as age-related ranges, with fresh and frozen cycles considered separately, during consultation. Pricing is not published; package details and cost are shared on request.",
              "tr": "Yardımcı üremede başarı birçok faktöre bağlıdır ve sonuçlar bireyler arasında değişir. Tek bir başlık rakamı yerine, beklentiler görüşme sırasında yaşa bağlı aralıklar olarak, taze ve dondurulmuş döngüler ayrı ayrı ele alınarak değerlendirilir. Fiyat yayınlanmaz; paket ayrıntıları ve tutar talep üzerine paylaşılır."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Donors",
          "tr": "Donörler"
        },
        "intro": {
          "en": "The center maintains a program of screened, registered donors and welcomes those who wish to help others build a family. Participation follows the regulatory framework applicable at our location.",
          "tr": "Merkez, taranmış ve kayıtlı donörlerden oluşan bir program yürütür ve başkalarının aile kurmasına yardımcı olmak isteyenleri memnuniyetle karşılar. Katılım, konumumuzda geçerli olan yasal çerçeveye uyar."
        },
        "items": [
          {
            "title": {
              "en": "Registered Donors",
              "tr": "Kayıtlı Donörler"
            },
            "body": {
              "en": "Egg and sperm donors are screened and registered before joining the program. Matching to recipients is carried out clinically and within the applicable framework.",
              "tr": "Yumurta ve sperm donörleri, programa katılmadan önce taranır ve kaydedilir. Alıcılarla eşleştirme klinik olarak ve geçerli çerçeve içinde yürütülür."
            }
          },
          {
            "title": {
              "en": "Become a Sperm / Egg Donor",
              "tr": "Sperm / Yumurta Donörü Olun"
            },
            "body": {
              "en": "Information for those considering becoming a donor, including the screening steps involved. Enquiries can be made through the contact form.",
              "tr": "Donör olmayı düşünenler için, içerdiği tarama adımları dahil bilgiler. Başvurular iletişim formu aracılığıyla yapılabilir."
            }
          },
          {
            "title": {
              "en": "Become a Surrogate",
              "tr": "Taşıyıcı Anne Olun"
            },
            "body": {
              "en": "Information for those considering becoming a surrogate, including eligibility and the process, within the applicable legal framework. Enquiries can be made through the contact form.",
              "tr": "Taşıyıcı anne olmayı düşünenler için, geçerli yasal çerçeve içinde uygunluk ve süreç dahil bilgiler. Başvurular iletişim formu aracılığıyla yapılabilir."
            }
          }
        ]
      }
    ],
    "disclaimer": "medical"
  }
};

export const pagesContent: Record<string, PageContent> =
{
  "about": {
    "slug": "about",
    "title": {
      "en": "About Genetikon",
      "tr": "Kurumsal"
    },
    "intro": {
      "en": "Genetikon Genetics Center is a medical genetics center in Batumi, Georgia. Under one roof it brings together three complementary laboratories — a Medical Genetics Laboratory, a Stem Cell Therapy Laboratory, and an IVF Center — so that diagnostic genetics, regenerative medicine, and reproductive care can be coordinated within a single, continuous clinical environment. The center presents itself as an institution, through the work of its laboratories rather than around individual names. What follows describes who we are and how the center works.",
      "tr": "Genetikon Genetics Center, Gürcistan’ın Batum kentinde yer alan bir tıbbi genetik merkezidir. Tek bir merkez çatısı altında birbirini tamamlayan üç laboratuvarı bir araya getirir: Tıbbi Genetik Laboratuvarı, Kök Hücre Tedavi Laboratuvarı ve Tüp Bebek (IVF) Merkezi. Böylece tanısal genetik, rejeneratif tıp ve üreme sağlığı, kesintisiz ve bütünlüklü tek bir klinik ortam içinde koordine edilebilir. Merkez; belirli kişiler üzerinden değil, kurum kimliği ve laboratuvarlarının yaptığı işler üzerinden kendini tanıtır. Aşağıda, kim olduğumuzu ve merkezin nasıl işlediğini anlatıyoruz."
    },
    "sections": [
      {
        "heading": {
          "en": "Who We Are",
          "tr": "Kim Olduğumuz"
        },
        "intro": {
          "en": "One center, three laboratories, a shared clinical standard.",
          "tr": "Tek merkez, üç laboratuvar, ortak bir klinik standart."
        },
        "items": [
          {
            "title": {
              "en": "A single, integrated center",
              "tr": "Tek ve bütünleşik bir merkez"
            },
            "body": {
              "en": "Genetikon Genetics Center operates as one institution in Batumi, Georgia. Housing three laboratories together means that when a genetic finding, a reproductive question, and a regenerative-medicine consideration overlap, they can be discussed within the same setting rather than across separate facilities. This integration is a matter of clinical continuity and record consistency — information moves with the patient's care, within the boundaries of medical confidentiality.",
              "tr": "Genetikon Genetics Center, Batum’da tek bir kurum olarak faaliyet gösterir. Üç laboratuvarı bir arada barındırmak, bir genetik bulgu, bir üreme sorusu ve bir rejeneratif tıp değerlendirmesi kesiştiğinde bunların ayrı tesisler arasında değil, aynı ortam içinde ele alınabilmesi anlamına gelir. Bu bütünleşme; klinik sürekliliğin ve kayıt tutarlılığının bir gereğidir. Bilgi, tıbbi gizlilik sınırları içinde hastanın bakımıyla birlikte hareket eder."
            }
          },
          {
            "title": {
              "en": "Three complementary disciplines",
              "tr": "Birbirini tamamlayan üç disiplin"
            },
            "body": {
              "en": "The Medical Genetics Laboratory focuses on diagnostic and screening analysis — from genetic counseling and cytogenetics to molecular and prenatal testing. The Stem Cell Therapy Laboratory works in the field of regenerative medicine with cultured, largely autologous cell approaches that remain under active scientific investigation. The IVF Center provides reproductive and fertility care. Each laboratory maintains its own clinical rigor while sharing the same institutional standard.",
              "tr": "Tıbbi Genetik Laboratuvarı; genetik danışmadan sitogenetiğe, moleküler ve prenatal testlere kadar uzanan tanısal ve tarama analizlerine odaklanır. Kök Hücre Tedavi Laboratuvarı; halen aktif bilimsel araştırma altında olan, kültürlenmiş ve büyük ölçüde otolog hücre yaklaşımlarıyla rejeneratif tıp alanında çalışır. Tüp Bebek (IVF) Merkezi ise üreme sağlığı ve doğurganlık bakımı sunar. Her laboratuvar, aynı kurumsal standardı paylaşırken kendi klinik titizliğini korur."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Quality & Technology",
          "tr": "Kalite ve Teknoloji"
        },
        "intro": {
          "en": "The techniques our laboratories use, and how work is run and documented.",
          "tr": "Laboratuvarlarımızın kullandığı teknikler ile çalışmanın nasıl yürütüldüğü ve belgelendiği."
        },
        "items": [
          {
            "title": {
              "en": "Laboratory techniques",
              "tr": "Laboratuvar teknikleri"
            },
            "body": {
              "en": "Our laboratories apply established diagnostic and analytical techniques — including karyotyping, fluorescence in situ hybridization (FISH), polymerase chain reaction (PCR)-based molecular analysis, and non-invasive prenatal testing (NIPT). Each technique is used within its recognized clinical indications, with results interpreted in context rather than in isolation.",
              "tr": "Laboratuvarlarımız; karyotipleme, floresan in situ hibridizasyon (FISH), polimeraz zincir reaksiyonu (PCR) tabanlı moleküler analiz ve invaziv olmayan prenatal test (NIPT) gibi yerleşik tanısal ve analitik teknikleri uygular. Her teknik, tanınan klinik endikasyonları çerçevesinde kullanılır ve sonuçlar tek başına değil, bağlamı içinde yorumlanır."
            }
          },
          {
            "title": {
              "en": "Controlled processes and traceability",
              "tr": "Kontrollü süreçler ve izlenebilirlik"
            },
            "body": {
              "en": "Sample handling, laboratory workflow, and reporting follow defined, repeatable procedures. In regenerative-medicine work, cell processes such as isolation and culture are monitored under controlled conditions, with proliferation checked before a process continues. Traceability of samples and records is treated as a core requirement of responsible laboratory practice.",
              "tr": "Numune işleme, laboratuvar iş akışı ve raporlama; tanımlı ve tekrarlanabilir prosedürleri izler. Rejeneratif tıp çalışmalarında, hücre izolasyonu ve kültür gibi süreçler kontrollü koşullar altında izlenir ve bir sürecin sürdürülmesinden önce hücre çoğalması kontrol edilir. Numune ve kayıtların izlenebilirliği, sorumlu laboratuvar uygulamasının temel bir gereği olarak kabul edilir."
            }
          },
          {
            "title": {
              "en": "Accreditation and certification",
              "tr": "Akreditasyon ve sertifikasyon"
            },
            "body": {
              "en": "We hold quality standards and certifications appropriate to a medical genetics and laboratory center. The specific accreditations and certificate details for each laboratory will be listed and documented on this page. Any accreditation shown corresponds to a valid, verifiable certificate; we do not display decorative or unverifiable marks.",
              "tr": "Bir tıbbi genetik ve laboratuvar merkezine uygun kalite standartlarına ve sertifikalara sahibiz. Her laboratuvara ait belirli akreditasyonlar ve sertifika ayrıntıları bu sayfada listelenip belgelenecektir. Gösterilen her akreditasyon, geçerli ve doğrulanabilir bir sertifikaya karşılık gelir; dekoratif veya doğrulanamaz işaretler göstermeyiz."
            }
          }
        ]
      }
    ]
  },
  "international-patients": {
    "slug": "international-patients",
    "title": {
      "en": "International Patients",
      "tr": "Uluslararası Hastalar"
    },
    "intro": {
      "en": "Genetikon Genetics Center is based in Batumi, on Georgia's Black Sea coast, and welcomes patients travelling from abroad. Batumi is reachable by direct and connecting flights from many cities, and our multilingual coordination team helps you plan each stage of your visit. This section explains how to reach us, where you may stay, the support available during your visit, and what a typical journey looks like from home to Batumi and back. Programmes are arranged individually; details and any package are shared on request, as the scope varies by the medical protocol your treating physician recommends. This page is informational and is not a substitute for medical advice — please consult a physician about your specific situation.",
      "tr": "Genetikon Genetik Merkezi, Gürcistan'ın Karadeniz kıyısındaki Batum'da yer alır ve yurt dışından gelen hastaları ağırlar. Batum'a birçok şehirden doğrudan veya aktarmalı uçuşlarla ulaşılabilir; çok dilli koordinasyon ekibimiz ziyaretinizin her aşamasını planlamanıza yardımcı olur. Bu bölüm; bize nasıl ulaşacağınızı, nerede konaklayabileceğinizi, ziyaretiniz boyunca sunulan desteği ve evden Batum'a ve tekrar eve uzanan tipik bir sürecin adımlarını açıklar. Programlar kişiye özel düzenlenir; ayrıntılar ve varsa paket bilgisi talep üzerine paylaşılır, çünkü kapsam tedavi eden hekiminizin önerdiği tıbbi protokole göre değişir. Bu sayfa bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez — kendi durumunuz için lütfen bir hekime danışın."
    },
    "sections": [
      {
        "heading": {
          "en": "Getting to Batumi",
          "tr": "Batum'a Ulaşım"
        },
        "intro": {
          "en": "Batumi is served by Batumi International Airport (BUS), with seasonal direct flights and year-round connections through regional hubs. If a direct route is not available from your city, our coordination team can outline connecting options so you can compare routes yourself. On arrival, we arrange a private transfer between the airport and your accommodation; airport pickup times are matched to your flight and confirmed with you in advance.",
          "tr": "Batum'a Batum Uluslararası Havalimanı (BUS) hizmet verir; mevsimsel doğrudan uçuşlar ve bölgesel aktarma merkezleri üzerinden yıl boyu bağlantılar bulunur. Şehrinizden doğrudan bir uçuş yoksa, koordinasyon ekibimiz aktarmalı seçenekleri özetleyerek rotaları kendinizin karşılaştırmasına yardımcı olur. Varışta havalimanı ile konaklamanız arasında özel transfer düzenlenir; havalimanı karşılama saatleri uçuşunuza göre ayarlanır ve önceden sizinle teyit edilir."
        },
        "items": [
          {
            "title": {
              "en": "Airport",
              "tr": "Havalimanı"
            },
            "body": {
              "en": "Batumi International Airport (BUS) is close to the city centre. Neighbouring airports in the wider region can serve as alternatives when they suit your route better; our team can help you weigh the options.",
              "tr": "Batum Uluslararası Havalimanı (BUS) şehir merkezine yakındır. Rotanıza daha uygun olduğunda, geniş bölgedeki komşu havalimanları alternatif olabilir; ekibimiz seçenekleri değerlendirmenize yardımcı olur."
            }
          },
          {
            "title": {
              "en": "Flights",
              "tr": "Uçuşlar"
            },
            "body": {
              "en": "Direct and connecting flights reach Batumi from many cities, with availability changing by season. We share route options for you to book, and coordinate the timing of your arrival around your appointment schedule.",
              "tr": "Batum'a birçok şehirden doğrudan ve aktarmalı uçuşlar ulaşır; uçuş bulunabilirliği mevsime göre değişir. Rezervasyonu sizin yapmanız için rota seçeneklerini paylaşır ve varış zamanınızı randevu takviminize göre koordine ederiz."
            }
          },
          {
            "title": {
              "en": "Airport transfer",
              "tr": "Havalimanı Transferi"
            },
            "body": {
              "en": "A private transfer between the airport and your accommodation is arranged for arrival and departure. Pickup is timed to your flight, and the driver and vehicle details are confirmed with you beforehand.",
              "tr": "Havalimanı ile konaklamanız arasında geliş ve gidiş için özel transfer düzenlenir. Karşılama uçuşunuza göre zamanlanır; sürücü ve araç bilgileri önceden sizinle teyit edilir."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Your Stay",
          "tr": "Konaklamanız"
        },
        "intro": {
          "en": "We help you organise accommodation for the length of your visit, choosing from options near the centre and within convenient reach of your appointments. Because treatment timelines differ, the number of nights and the type of stay are planned around the protocol your physician sets. Accommodation is booked in your name; we coordinate the logistics and share the details for you to review and confirm.",
          "tr": "Ziyaretiniz süresince konaklamanızı; merkeze yakın ve randevularınıza kolay ulaşılabilir seçenekler arasından düzenlemenize yardımcı oluruz. Tedavi süreleri farklılık gösterdiğinden, konaklama gece sayısı ve türü hekiminizin belirlediği protokole göre planlanır. Konaklama sizin adınıza yapılır; lojistiği koordine eder ve gözden geçirip onaylamanız için ayrıntıları paylaşırız."
        },
        "items": [
          {
            "title": {
              "en": "Accommodation coordination",
              "tr": "Konaklama Koordinasyonu"
            },
            "body": {
              "en": "We suggest suitable options and coordinate the booking logistics so your stay is close to the centre and your appointments. Length of stay is matched to your treatment schedule.",
              "tr": "Uygun seçenekleri önerir ve rezervasyon lojistiğini koordine ederiz; böylece konaklamanız merkeze ve randevularınıza yakın olur. Konaklama süresi tedavi takviminize göre ayarlanır."
            }
          },
          {
            "title": {
              "en": "Companions",
              "tr": "Refakatçiler"
            },
            "body": {
              "en": "If you travel with a partner or companion, we take this into account when planning your stay and transfers. Let us know your group when you enquire so arrangements fit your needs.",
              "tr": "Eşiniz veya bir refakatçiyle seyahat ediyorsanız, konaklama ve transfer planlamasında bunu dikkate alırız. Düzenlemelerin ihtiyaçlarınıza uyması için başvururken grubunuzu bize bildirin."
            }
          },
          {
            "title": {
              "en": "Around the city",
              "tr": "Şehirde"
            },
            "body": {
              "en": "Batumi is a compact coastal city, and most accommodation options keep the centre and the clinic within easy reach. Our team can note practical points such as distances and typical travel times.",
              "tr": "Batum, derli toplu bir sahil şehridir ve konaklama seçeneklerinin çoğu merkez ile kliniği kolay ulaşılır mesafede tutar. Ekibimiz mesafeler ve tipik ulaşım süreleri gibi pratik noktaları paylaşabilir."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Support During Your Visit",
          "tr": "Ziyaretiniz Boyunca Destek"
        },
        "intro": {
          "en": "A multilingual coordinator accompanies your visit from your first enquiry through to your return home. Interpreter support is available for appointments so that information is communicated clearly in a language you understand. The team helps with scheduling, questions about logistics, and keeping the different stages of your visit connected. Clinical decisions always rest with your treating physician; the coordination team supports the practical side of your journey.",
          "tr": "Çok dilli bir koordinatör; ilk başvurunuzdan eve dönüşünüze kadar ziyaretinize eşlik eder. Randevularda, bilgilerin anladığınız bir dilde açıkça aktarılabilmesi için tercüman desteği sunulur. Ekip; randevu planlaması, lojistikle ilgili sorular ve ziyaretinizin farklı aşamalarını birbirine bağlı tutma konularında yardımcı olur. Klinik kararlar her zaman tedavi eden hekiminize aittir; koordinasyon ekibi sürecinizin pratik tarafını destekler."
        },
        "items": [
          {
            "title": {
              "en": "Multilingual coordinator",
              "tr": "Çok Dilli Koordinatör"
            },
            "body": {
              "en": "A single point of contact helps you plan appointments, travel, and accommodation, and answers practical questions before and during your visit.",
              "tr": "Tek bir irtibat noktası; randevu, seyahat ve konaklama planlamanıza yardımcı olur ve ziyaretinizden önce ve sırasında pratik sorularınızı yanıtlar."
            }
          },
          {
            "title": {
              "en": "Interpreter support",
              "tr": "Tercüman Desteği"
            },
            "body": {
              "en": "Interpreter support can be arranged for consultations so that medical information is conveyed clearly. This helps you follow explanations and ask questions in your own language.",
              "tr": "Tıbbi bilgilerin açıkça aktarılabilmesi için konsültasyonlarda tercüman desteği düzenlenebilir. Bu, açıklamaları takip etmenize ve kendi dilinizde soru sormanıza yardımcı olur."
            }
          },
          {
            "title": {
              "en": "Coordination throughout",
              "tr": "Baştan Sona Koordinasyon"
            },
            "body": {
              "en": "From the first enquiry to your departure, the team keeps the stages of your visit connected — scheduling, transfers, and follow-up steps agreed with your physician.",
              "tr": "İlk başvurudan ayrılışınıza kadar ekip, ziyaretinizin aşamalarını birbirine bağlı tutar — randevu planlaması, transferler ve hekiminizle mutabık kalınan takip adımları."
            }
          }
        ]
      },
      {
        "heading": {
          "en": "Your Journey, Step by Step",
          "tr": "Adım Adım Süreciniz"
        },
        "intro": {
          "en": "The path from home to Batumi and back follows clear stages. The exact timing and number of visits depend on the medical protocol your physician recommends, and some treatments involve follow-up over several months. The outline below shows how a typical journey is structured; your own plan is confirmed with you in advance, and any package details are shared on request.",
          "tr": "Evden Batum'a ve tekrar eve uzanan yol, belirgin aşamalar izler. Kesin zamanlama ve ziyaret sayısı, hekiminizin önerdiği tıbbi protokole bağlıdır; bazı tedaviler birkaç aya yayılan takip içerir. Aşağıdaki özet, tipik bir sürecin nasıl yapılandırıldığını gösterir; kendi planınız önceden sizinle teyit edilir ve varsa paket ayrıntıları talep üzerine paylaşılır."
        },
        "items": [
          {
            "title": {
              "en": "1. Enquiry from home",
              "tr": "1. Evden Başvuru"
            },
            "body": {
              "en": "You contact us with your request. A coordinator gathers the practical details needed to plan and, where relevant, arranges an initial online consultation with the clinical team. No health information is required through the enquiry form.",
              "tr": "Talebinizle bize ulaşırsınız. Bir koordinatör planlama için gereken pratik ayrıntıları toplar ve uygun olduğunda klinik ekiple ilk çevrim içi görüşmeyi düzenler. Başvuru formu üzerinden sağlık bilgisi istenmez."
            }
          },
          {
            "title": {
              "en": "2. Planning your visit",
              "tr": "2. Ziyaretin Planlanması"
            },
            "body": {
              "en": "Together we set a schedule and outline flights, transfer, and accommodation. Programme scope and any package are shared on request; details vary by protocol, so the plan is tailored to what your physician recommends.",
              "tr": "Birlikte bir program belirler; uçuş, transfer ve konaklamayı ana hatlarıyla çıkarırız. Program kapsamı ve varsa paket talep üzerine paylaşılır; ayrıntılar protokole göre değiştiğinden plan, hekiminizin önerdiğine göre kişiselleştirilir."
            }
          },
          {
            "title": {
              "en": "3. Arrival in Batumi",
              "tr": "3. Batum'a Varış"
            },
            "body": {
              "en": "You are met on arrival and taken to your accommodation by private transfer. The coordinator confirms your appointment times and is available for questions throughout your stay.",
              "tr": "Varışta karşılanır ve özel transferle konaklamanıza götürülürsünüz. Koordinatör randevu saatlerinizi teyit eder ve konaklamanız boyunca sorularınız için ulaşılabilir olur."
            }
          },
          {
            "title": {
              "en": "4. Consultation & treatment",
              "tr": "4. Konsültasyon ve Tedavi"
            },
            "body": {
              "en": "The clinical team carries out consultation and the agreed treatment steps, with interpreter support as needed. The stages and their timing follow the protocol set by your treating physician.",
              "tr": "Klinik ekip, gerektiğinde tercüman desteğiyle konsültasyonu ve mutabık kalınan tedavi adımlarını yürütür. Aşamalar ve zamanlaması, tedavi eden hekiminizin belirlediği protokolü izler."
            }
          },
          {
            "title": {
              "en": "5. Return home & follow-up",
              "tr": "5. Eve Dönüş ve Takip"
            },
            "body": {
              "en": "A private transfer returns you to the airport for your journey home. Where the protocol involves follow-up or further visits over the following months, the coordinator helps you plan them in advance.",
              "tr": "Özel transfer, eve dönüş yolculuğunuz için sizi havalimanına götürür. Protokol, sonraki aylarda takip veya ek ziyaretler içeriyorsa koordinatör bunları önceden planlamanıza yardımcı olur."
            }
          }
        ]
      }
    ]
  },
  "information": {
    "slug": "information",
    "title": {
      "en": "Information Center",
      "tr": "Bilgi Merkezi"
    },
    "intro": {
      "en": "The Information Center is a resource hub that explains what each of our three laboratories does, in plain language. It is intended to help you understand testing, procedures and processes before you speak with a physician — not to replace that conversation. Content is informational, references evidence and regulatory status where relevant, and outcomes vary from patient to patient. Choose a department below to read further.",
      "tr": "Bilgi Merkezi; üç laboratuvarımızın her birinin ne yaptığını sade ve anlaşılır bir dille anlatan bir kaynak merkezidir. Amacı, bir hekimle görüşmeden önce testleri, işlemleri ve süreçleri anlamanıza yardımcı olmaktır — bu görüşmenin yerini almaz. İçerik bilgilendiricidir; ilgili yerlerde kanıt ve düzenleyici duruma değinir ve sonuçlar hastadan hastaya değişir. Devamını okumak için aşağıdan bir bölüm seçin."
    },
    "sections": [
      {
        "heading": {
          "en": "By Department",
          "tr": "Bölüme Göre"
        },
        "intro": {
          "en": "Three specialized laboratories, one center. Each section links through to the department for detailed, informational reading.",
          "tr": "Tek merkezde üç uzman laboratuvar. Her başlık, ayrıntılı ve bilgilendirici okuma için ilgili bölüme yönlendirir."
        },
        "items": [
          {
            "title": {
              "en": "Medical Genetics",
              "tr": "Tıbbi Genetik"
            },
            "body": {
              "en": "Understand genetic counseling, screening and diagnostic testing, prenatal diagnosis, NIPT and PGT — what each test is, who it is for, and what it can and cannot tell you. Read in the Medical Genetics Laboratory.",
              "tr": "Genetik danışma, tarama ve tanı testleri, prenatal tanı, NIPT ve PGT hakkında bilgi edinin — her testin ne olduğunu, kimler için uygun olduğunu ve neyi söyleyip söyleyemeyeceğini öğrenin. Tıbbi Genetik Laboratuvarı bölümünde okuyun."
            }
          },
          {
            "title": {
              "en": "Stem Cell Therapy",
              "tr": "Kök Hücre Tedavisi"
            },
            "body": {
              "en": "Learn how protocol-based, autologous cultured stem cell processes work, described in structure and function terms. Evidence and regulatory status vary by indication and some applications are under investigation; results are not guaranteed. Read in the Stem Cell Therapy Laboratory.",
              "tr": "Protokol temelli, otolog kültür kök hücre süreçlerinin nasıl işlediğini yapı ve işlev diliyle öğrenin. Kanıt ve düzenleyici durum endikasyona göre değişir; bazı uygulamalar araştırma aşamasındadır ve sonuçlar garanti edilmez. Kök Hücre Tedavi Laboratuvarı bölümünde okuyun."
            }
          },
          {
            "title": {
              "en": "IVF",
              "tr": "Tüp Bebek"
            },
            "body": {
              "en": "Read about IVF/ICSI, donation, surrogacy and PGD, with process guides for international patients. Success information is presented by age band and separated by fresh/frozen and first/repeat cycles — never as a single headline figure. Read in the IVF Center.",
              "tr": "IVF/ICSI, donasyon, taşıyıcı annelik ve PGD hakkında, uluslararası hastalar için süreç rehberleriyle bilgi edinin. Başarı bilgisi yaş bandına göre sunulur ve taze/dondurulmuş ile ilk/tekrar döngü olarak ayrılır — tek bir başlık rakamı olarak değil. Tüp Bebek Merkezi bölümünde okuyun."
            }
          }
        ]
      }
    ]
  }
};

export const legalContent: Record<string, LegalSection> =
{
  "privacy": {
    "heading": {
      "en": "Privacy Notice",
      "tr": "Aydınlatma Metni (KVKK / GDPR)"
    },
    "intro": {
      "en": "This Privacy Notice explains how Genetikon Genetics Center processes personal data, including special-category health data, under the Turkish Personal Data Protection Law No. 6698 (KVKK) and the EU General Data Protection Regulation (GDPR) where applicable. Last updated: July 6, 2026. Data subjects should read this notice together with the Cookie Policy and Terms of Use.",
      "tr": "Bu Aydınlatma Metni, Genetikon Genetics Center'ın özel nitelikli sağlık verileri dahil kişisel verileri, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve uygulanabildiği ölçüde AB Genel Veri Koruma Tüzüğü (GDPR) kapsamında nasıl işlediğini açıklar. Son güncelleme: 6 Temmuz 2026. İlgili kişiler bu metni Çerez Politikası ve Kullanım Koşulları ile birlikte okumalıdır."
    },
    "items": [
      {
        "title": {
          "en": "1. Data Controller",
          "tr": "1. Veri Sorumlusu"
        },
        "body": {
          "en": "The data controller is Genetikon Genetics Center, located at 165 Vakhtang Gorgasali St, Batumi 6004, Georgia (the primary establishment). For data subjects in Turkiye and for KVKK-scoped processing, the affiliated Turkish entity Genetikon AR-GE Danismanlik Sag. Hizm. Tarim Hay. San. ve Tic. Ltd. Sti. (Selcuklu / Konya, Turkiye) acts as controller/joint controller as applicable. Contact for privacy matters: batumi@genetikon.com (Batumi) or bilgi@genetikon.com (Turkiye). Requests about controller allocation, VERBIS registration status, or representative details can be sent to the same privacy contacts.",
          "tr": "Veri sorumlusu, 165 Vakhtang Gorgasali Cad., Batumi 6004, Gürcistan adresinde bulunan Genetikon Genetics Center'dir (birincil yerleşim). Türkiye'deki ilgili kişiler ve KVKK kapsamındaki işlemeler bakımından, bağlı Türk tüzel kişiliği Genetikon AR-GE Danışmanlık Sağ. Hizm. Tarım Hay. San. ve Tic. Ltd. Şti. (Selçuklu / Konya, Türkiye) duruma göre veri sorumlusu / ortak veri sorumlusu sıfatıyla hareket eder. Gizlilik konuları için iletişim: batumi@genetikon.com (Batumi) veya bilgi@genetikon.com (Türkiye). Veri sorumlusu dağılımı, VERBİS kayıt durumu veya temsilci bilgilerine ilişkin talepler aynı gizlilik iletişim adreslerine iletilebilir."
        }
      },
      {
        "title": {
          "en": "2. Categories of Data and Purposes of Processing",
          "tr": "2. İşlenen Veri Kategorileri ve İşleme Amaçları"
        },
        "body": {
          "en": "We process: (a) identity and contact data (name, e-mail, phone, country) submitted via contact or appointment forms, to respond to your enquiry and coordinate an appointment; (b) communication content you choose to send us; (c) technical data (IP address, device/browser data) strictly necessary to operate and secure the website; and (d) analytics/marketing data only where you have given consent (see Cookie Policy). Our forms are designed to request the minimum data necessary. Please do not enter health information, diagnoses, or test results in free-text message fields; any clinical assessment takes place through the appropriate medical channel, not the website form.",
          "tr": "İşlediklerimiz: (a) iletişim veya randevu formları aracılığıyla iletilen kimlik ve iletişim verileri (ad, e-posta, telefon, ülke) — talebinize yanıt vermek ve randevu koordinasyonu için; (b) bize göndermeyi seçtiğiniz iletişim içeriğiniz; (c) web sitesini işletmek ve güvenliğini sağlamak için kesinlikle gerekli teknik veriler (IP adresi, cihaz/tarayıcı verisi); ve (d) yalnızca rıza vermeniz halinde analitik/pazarlama verileri (bkz. Çerez Politikası). Formlarımız gerekli asgari veriyi isteyecek şekilde tasarlanmıştır. Lütfen serbest metin mesaj alanlarına sağlık bilgisi, tanı veya test sonucu yazmayın; her türlü klinik değerlendirme web sitesi formu üzerinden değil, uygun tıbbi kanal aracılığıyla yapılır."
        }
      },
      {
        "title": {
          "en": "3. Legal Basis for Processing",
          "tr": "3. İşlemenin Hukuki Sebebi"
        },
        "body": {
          "en": "We rely on the following legal grounds: performance of, or steps prior to, a service relationship you request (responding to an enquiry / arranging an appointment); our legitimate interest in operating a secure website (technical/essential processing); compliance with a legal obligation (record-keeping and regulatory duties); and your explicit consent for any non-essential cookies, analytics, and marketing communications, which you may withdraw at any time. Under KVKK, these grounds correspond to Art. 5; under GDPR, to Art. 6(1)(b), (c), (f) and Art. 6(1)(a). Consent, where used, is freely given and never a precondition for receiving a service.",
          "tr": "Şu hukuki sebeplere dayanıyoruz: talep ettiğiniz bir hizmet ilişkisinin kurulması veya öncesindeki adımlar (talebe yanıt verme / randevu ayarlama); güvenli bir web sitesi işletmemize ilişkin meşru menfaatimiz (teknik/zorunlu işleme); bir hukuki yükümlülüğün yerine getirilmesi (kayıt tutma ve mevzuat gereklilikleri); ve zorunlu olmayan çerezler, analitik ve pazarlama iletişimleri için her zaman geri alabileceğiniz açık rızanız. KVKK bakımından bu sebepler m.5'e; GDPR bakımından m.6(1)(b), (c), (f) ve m.6(1)(a)'ya karşılık gelir. Kullanıldığı yerde rıza, özgür iradeyle verilir ve hiçbir zaman bir hizmet almanın ön koşulu değildir."
        }
      },
      {
        "title": {
          "en": "4. Special-Category (Health) Data — Additional Safeguards",
          "tr": "4. Özel Nitelikli (Sağlık) Veriler — Ek Güvenceler"
        },
        "body": {
          "en": "Health data is special-category personal data under KVKK Art. 6 and GDPR Art. 9 and receives heightened protection. This website is not intended to collect health data: appointment and contact forms request only administrative details. Where health data is genuinely necessary for a clinical service, it is processed only on the basis of your explicit consent or another lawful exception, is transmitted over encrypted (HTTPS) channels, is accessible only to authorised personnel bound by confidentiality, and is subject to strict access controls and a defined retention-and-destruction schedule. We apply appropriate technical and organisational measures determined in line with the Personal Data Protection Board's guidance on special-category data.",
          "tr": "Sağlık verisi, KVKK m.6 ve GDPR m.9 uyarınca özel nitelikli kişisel veridir ve yüksek koruma altındadır. Bu web sitesi sağlık verisi toplamak amacı taşımaz: randevu ve iletişim formları yalnızca idari bilgileri ister. Sağlık verisinin bir klinik hizmet için gerçekten gerekli olduğu hallerde, yalnızca açık rızanıza veya başka bir hukuka uygunluk istisnasına dayanılarak işlenir; şifreli (HTTPS) kanallar üzerinden iletilir; yalnızca gizlilikle yükümlü yetkili personelin erişimine açıktır; sıkı erişim kontrollerine ve tanımlı bir saklama-ve-imha takvimine tabidir. Kişisel Verileri Koruma Kurulu'nun özel nitelikli verilere ilişkin rehberliğiyle uyumlu, uygun teknik ve idari tedbirleri uygularız."
        }
      },
      {
        "title": {
          "en": "5. Retention and Destruction",
          "tr": "5. Saklama ve İmha"
        },
        "body": {
          "en": "We retain personal data only for as long as necessary for the purpose for which it was collected and for the periods required by applicable law (for example, statutory record-keeping and any medical-record retention obligations). Enquiry and contact-form data that does not lead to a service relationship is kept for a limited period and then deleted or anonymised. When a retention period ends, data is destroyed, deleted, or anonymised in accordance with our personal-data retention-and-destruction policy. Retention periods vary by record category and applicable law; questions can be sent to the privacy contacts above.",
          "tr": "Kişisel verileri yalnızca toplanma amacı için gerekli olduğu sürece ve ilgili mevzuatın gerektirdiği süreler boyunca (örneğin kanuni kayıt tutma ve varsa tıbbi kayıt saklama yükümlülükleri) saklarız. Bir hizmet ilişkisine dönüşmeyen talep ve iletişim formu verileri sınırlı bir süre tutulur, ardından silinir veya anonimleştirilir. Saklama süresi sona erdiğinde veriler, kişisel veri saklama-ve-imha politikamıza uygun olarak imha edilir, silinir veya anonim hale getirilir. Saklama süreleri kayıt kategorisine ve uygulanabilir hukuka göre değişir; sorular yukarıdaki gizlilik iletişim adreslerine iletilebilir."
        }
      },
      {
        "title": {
          "en": "6. Data Subject Rights",
          "tr": "6. İlgili Kişinin (Veri Sahibinin) Hakları"
        },
        "body": {
          "en": "Under KVKK Art. 11 and, where applicable, GDPR Arts. 15-22, you have the right to: learn whether your data is processed and request information about it; know the purpose of processing; know the third parties to whom data is disclosed; request correction of inaccurate data; request erasure or destruction; object to results arising solely from automated analysis; withdraw consent; and claim compensation for damage caused by unlawful processing. GDPR-scoped subjects additionally have the rights to data portability and to lodge a complaint with a supervisory authority. To exercise these rights, contact batumi@genetikon.com or bilgi@genetikon.com; we respond within the periods required by law. You may also complain to the Turkish Personal Data Protection Authority (KVKK Kurumu) or your competent EU supervisory authority.",
          "tr": "KVKK m.11 ve uygulanabildiği ölçüde GDPR m.15-22 uyarınca şu haklara sahipsiniz: verinizin işlenip işlenmediğini öğrenme ve buna ilişkin bilgi talep etme; işleme amacını öğrenme; verinin aktarıldığı üçüncü kişileri bilme; yanlış verinin düzeltilmesini isteme; silinmesini veya yok edilmesini isteme; yalnızca otomatik analiz sonucu ortaya çıkan sonuca itiraz etme; rızayı geri alma; ve hukuka aykırı işlemeden doğan zararın giderilmesini talep etme. GDPR kapsamındaki kişiler ayrıca veri taşınabilirliği ve bir denetim makamına şikayette bulunma haklarına sahiptir. Bu hakları kullanmak için batumi@genetikon.com veya bilgi@genetikon.com ile iletişime geçin; kanunda öngörülen süreler içinde yanıt veririz. Ayrıca Kişisel Verileri Koruma Kurumu'na (KVKK Kurumu) veya yetkili AB denetim makamınıza şikayette bulunabilirsiniz."
        }
      }
    ]
  },
  "cookie-policy": {
    "heading": {
      "en": "Cookie Policy",
      "tr": "Çerez Politikası"
    },
    "intro": {
      "en": "This Cookie Policy explains how genetikon.com uses cookies and similar technologies. By default only strictly necessary cookies are active; analytics and marketing cookies are set only after you give consent. Last updated: July 6, 2026.",
      "tr": "Bu Çerez Politikası, genetikon.com'un çerezleri ve benzeri teknolojileri nasıl kullandığını açıklar. Varsayılan olarak yalnızca zorunlu çerezler etkindir; analitik ve pazarlama çerezleri yalnızca rıza vermeniz halinde yerleştirilir. Son güncelleme: 6 Temmuz 2026."
    },
    "items": [
      {
        "title": {
          "en": "1. What Cookies Are",
          "tr": "1. Çerez Nedir"
        },
        "body": {
          "en": "Cookies are small text files placed on your device when you visit a website. They allow the site to remember your actions and preferences. We also use this term to cover similar technologies such as local storage and pixels. Cookies are described by who sets them (first-party, set by genetikon.com; or third-party, set by an external provider) and by how long they last (session cookies, deleted when you close the browser; or persistent cookies, which remain for a defined period).",
          "tr": "Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza yerleştirilen küçük metin dosyalarıdır. Sitenin eylemlerinizi ve tercihlerinizi hatırlamasını sağlarlar. Bu terimi, yerel depolama ve pikseller gibi benzer teknolojileri de kapsayacak şekilde kullanıyoruz. Çerezler, kimin yerleştirdiğine (birinci taraf, genetikon.com tarafından; veya üçüncü taraf, harici bir sağlayıcı tarafından) ve ne kadar sürdüğüne (oturum çerezleri, tarayıcıyı kapatınca silinir; veya kalıcı çerezler, tanımlı bir süre boyunca kalır) göre tanımlanır."
        }
      },
      {
        "title": {
          "en": "2. Strictly Necessary Cookies (Always Active)",
          "tr": "2. Zorunlu Çerezler (Her Zaman Etkin)"
        },
        "body": {
          "en": "These first-party cookies are essential for the website to function: they enable core navigation, security, load balancing, and storing your cookie-consent choice itself. Because they are strictly necessary to deliver the service you requested, they do not require consent and cannot be switched off through the consent banner. They do not track you for advertising and are not shared for marketing purposes.",
          "tr": "Bu birinci taraf çerezleri web sitesinin çalışması için zorunludur: temel gezinme, güvenlik, yük dengeleme ve çerez-rıza tercihinizin kendisinin saklanmasını sağlarlar. Talep ettiğiniz hizmeti sunmak için kesinlikle gerekli olduklarından rıza gerektirmezler ve rıza bannerı üzerinden kapatılamazlar. Sizi reklam amacıyla takip etmezler ve pazarlama amacıyla paylaşılmazlar."
        }
      },
      {
        "title": {
          "en": "3. Analytics Cookies (Opt-In)",
          "tr": "3. Analitik Çerezler (Rızaya Bağlı / Opt-In)"
        },
        "body": {
          "en": "Analytics cookies help us understand how visitors use the site (for example, which pages are viewed) so we can improve it. These may include first-party and third-party cookies (for example, from an analytics provider). They are disabled by default and are set only if you actively accept the 'Analytics' category in the consent banner. If you do not consent, no analytics cookie is placed. You can change or withdraw your choice at any time via the cookie-settings link in the footer.",
          "tr": "Analitik çerezler, siteyi geliştirebilmemiz için ziyaretçilerin siteyi nasıl kullandığını (örneğin hangi sayfaların görüntülendiğini) anlamamıza yardımcı olur. Bunlar birinci taraf ve üçüncü taraf çerezleri (örneğin bir analitik sağlayıcıdan) içerebilir. Varsayılan olarak kapalıdırlar ve yalnızca rıza bannerında 'Analitik' kategorisini aktif olarak kabul etmeniz halinde yerleştirilir. Rıza vermezseniz hiçbir analitik çerez yerleştirilmez. Tercihinizi altbilgideki çerez-ayarları bağlantısı aracılığıyla her zaman değiştirebilir veya geri alabilirsiniz."
        }
      },
      {
        "title": {
          "en": "4. Marketing Cookies (Opt-In)",
          "tr": "4. Pazarlama Çerezleri (Rızaya Bağlı / Opt-In)"
        },
        "body": {
          "en": "Marketing cookies are used to measure the effectiveness of campaigns and, potentially, to show relevant content. These are typically third-party cookies set by advertising or social-media providers. They are disabled by default and are set only if you actively accept the 'Marketing' category. Note that, in line with applicable medical-advertising rules, the site does not run price, discount, or testimonial-based promotions; marketing cookies, if any, are used only for permitted, informational purposes. You may refuse or withdraw consent at any time without any effect on the service you receive.",
          "tr": "Pazarlama çerezleri, kampanyaların etkinliğini ölçmek ve olasılıkla ilgili içerik göstermek için kullanılır. Bunlar tipik olarak reklam veya sosyal medya sağlayıcıları tarafından yerleştirilen üçüncü taraf çerezleridir. Varsayılan olarak kapalıdırlar ve yalnızca 'Pazarlama' kategorisini aktif olarak kabul etmeniz halinde yerleştirilir. Uygulanabilir tıbbi tanıtım kuralları gereği sitenin fiyat, indirim veya hasta yorumuna dayalı tanıtım yapmadığını belirtiriz; varsa pazarlama çerezleri yalnızca izin verilen, bilgilendirici amaçlarla kullanılır. Rızayı her zaman, aldığınız hizmete hiçbir etkisi olmadan reddedebilir veya geri alabilirsiniz."
        }
      },
      {
        "title": {
          "en": "5. Managing Your Preferences",
          "tr": "5. Tercihlerinizi Yönetme"
        },
        "body": {
          "en": "On your first visit, a consent banner lets you accept only necessary cookies, or accept optional categories. You can also block or delete cookies through your browser settings, though disabling strictly necessary cookies may affect how the site works. Withdrawing consent does not affect the lawfulness of processing carried out before withdrawal.",
          "tr": "İlk ziyaretinizde bir rıza bannerı yalnızca zorunlu çerezleri kabul etmenize veya isteğe bağlı kategorileri kabul etmenize olanak tanır. Çerezleri tarayıcı ayarlarınızdan da engelleyebilir veya silebilirsiniz; ancak zorunlu çerezleri devre dışı bırakmak sitenin çalışmasını etkileyebilir. Rızanın geri alınması, geri almadan önce yapılan işlemenin hukuka uygunluğunu etkilemez."
        }
      }
    ]
  },
  "terms": {
    "heading": {
      "en": "Terms of Use",
      "tr": "Kullanım Koşulları"
    },
    "intro": {
      "en": "These Terms of Use govern your access to and use of genetikon.com. By using the website you accept these Terms. Last updated: July 6, 2026. If you do not agree, please do not use the site.",
      "tr": "Bu Kullanım Koşulları, genetikon.com'a erişiminizi ve siteyi kullanımınızı düzenler. Siteyi kullanarak bu Koşulları kabul etmiş olursunuz. Son güncelleme: 6 Temmuz 2026. Kabul etmiyorsanız lütfen siteyi kullanmayın."
    },
    "items": [
      {
        "title": {
          "en": "1. Informational Purpose Only — Not Medical Advice",
          "tr": "1. Yalnızca Bilgilendirme Amacı — Tıbbi Tavsiye Değildir"
        },
        "body": {
          "en": "The content on this website is provided for general informational purposes only. It describes the fields in which Genetikon Genetics Center works and is not medical advice, diagnosis, or treatment, and does not create a doctor-patient relationship. No content on this site should be relied upon as a substitute for consultation with a qualified healthcare professional. Outcomes vary between individuals; nothing here guarantees any particular result. Always seek the advice of your physician regarding any medical condition, and never disregard or delay professional medical advice because of something you read on this site. In an emergency, contact your local emergency services immediately.",
          "tr": "Bu web sitesindeki içerik yalnızca genel bilgilendirme amacıyla sunulmaktadır. Genetikon Genetics Center'ın çalıştığı alanları tanıtır; tıbbi tavsiye, tanı veya tedavi değildir ve bir hekim-hasta ilişkisi oluşturmaz. Bu sitedeki hiçbir içerik, nitelikli bir sağlık profesyoneline danışmanın yerine geçecek şekilde kullanılmamalıdır. Sonuçlar kişiden kişiye değişir; buradaki hiçbir ifade belirli bir sonucu garanti etmez. Herhangi bir tıbbi durumla ilgili olarak daima hekiminize danışın ve bu sitede okuduğunuz bir şey nedeniyle profesyonel tıbbi tavsiyeyi asla göz ardı etmeyin veya ertelemeyin. Acil bir durumda derhal yerel acil servislerinizle iletişime geçin."
        }
      },
      {
        "title": {
          "en": "2. Accuracy of Information",
          "tr": "2. Bilgilerin Doğruluğu"
        },
        "body": {
          "en": "We aim to keep the information on this website accurate and up to date, but we make no warranty, express or implied, that all content is complete, current, or error-free. Medical and scientific knowledge evolves, and content may be updated or removed without notice. Availability of specific services is subject to clinical assessment and applicable law in the relevant jurisdiction.",
          "tr": "Bu web sitesindeki bilgileri doğru ve güncel tutmayı amaçlarız; ancak tüm içeriğin eksiksiz, güncel veya hatasız olduğuna dair açık ya da örtük hiçbir garanti vermeyiz. Tıbbi ve bilimsel bilgi zaman içinde değişir; içerik bildirimde bulunulmaksızın güncellenebilir veya kaldırılabilir. Belirli hizmetlerin mevcudiyeti, klinik değerlendirmeye ve ilgili yargı çevresindeki mevzuata bağlıdır."
        }
      },
      {
        "title": {
          "en": "3. Limitation of Liability",
          "tr": "3. Sorumluluğun Sınırlandırılması"
        },
        "body": {
          "en": "To the fullest extent permitted by applicable law, Genetikon Genetics Center and its affiliated entities are not liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of, or inability to use, this website or reliance on its content, including from any third-party links. Third-party websites linked from this site are outside our control and we do not endorse or assume responsibility for their content. This clause does not exclude any liability that cannot be excluded under applicable law.",
          "tr": "Uygulanabilir hukukun izin verdiği azami ölçüde, Genetikon Genetics Center ve bağlı kuruluşları; bu web sitesini kullanmanızdan veya kullanamamanızdan ya da içeriğine güvenmenizden doğan hiçbir doğrudan, dolaylı, arızi veya sonuç niteliğindeki kayıp ya da zarardan (üçüncü taraf bağlantılarından kaynaklananlar dahil) sorumlu değildir. Bu siteden bağlantı verilen üçüncü taraf web siteleri kontrolümüz dışındadır; içeriklerini onaylamayız ve sorumluluk üstlenmeyiz. Bu hüküm, uygulanabilir hukuk uyarınca hariç tutulamayacak hiçbir sorumluluğu hariç tutmaz."
        }
      },
      {
        "title": {
          "en": "4. Intellectual Property",
          "tr": "4. Fikri Mülkiyet"
        },
        "body": {
          "en": "All content on this website — including text, graphics, logos, the Genetikon name and brand marks, and layout — is owned by or licensed to Genetikon Genetics Center and is protected by intellectual-property laws. You may view and print content for personal, non-commercial use only. You may not copy, reproduce, republish, distribute, or create derivative works from any part of the site without our prior written permission. All rights not expressly granted are reserved.",
          "tr": "Bu web sitesindeki tüm içerik — metin, grafikler, logolar, Genetikon adı ve marka işaretleri ile sayfa düzeni dahil — Genetikon Genetics Center'a aittir veya lisanslıdır ve fikri mülkiyet hukukuyla korunmaktadır. İçeriği yalnızca kişisel ve ticari olmayan kullanım için görüntüleyebilir ve yazdırabilirsiniz. Önceden yazılı iznimiz olmadan sitenin herhangi bir bölümünü kopyalayamaz, çoğaltamaz, yeniden yayımlayamaz, dağıtamaz veya türev eserler oluşturamazsınız. Açıkça verilmeyen tüm haklar saklıdır."
        }
      },
      {
        "title": {
          "en": "5. Governing Law and Contact",
          "tr": "5. Uygulanacak Hukuk ve İletişim"
        },
        "body": {
          "en": "Genetikon Genetics Center is established at 165 Vakhtang Gorgasali St, Batumi 6004, Georgia. These Terms are interpreted in line with the laws applicable to the Batumi, Georgia establishment, without limiting any mandatory rights you may have under the law of your country of residence. We may update these Terms from time to time; the current version, with its 'last updated' date, always applies. For questions about these Terms or the website, contact batumi@genetikon.com.",
          "tr": "Genetikon Genetics Center, 165 Vakhtang Gorgasali Cad., Batumi 6004, Gürcistan adresinde kuruludur. Bu Koşullar, ikamet ettiğiniz ülke hukukundan kaynaklanan zorunlu haklarınızı sınırlamaksızın, Batumi, Gürcistan yerleşimi için uygulanabilir hukukla uyumlu yorumlanır. Bu Koşulları zaman zaman güncelleyebiliriz; 'son güncelleme' tarihini taşıyan güncel sürüm her zaman geçerlidir. Bu Koşullar veya web sitesi hakkındaki sorularınız için batumi@genetikon.com ile iletişime geçin."
        }
      }
    ]
  }
};
