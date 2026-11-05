# Genetikon — yayın öncesi içerik kararları

## 5 Kasım 2026 — güncel durum

Sonraki owner kararı mevcut **yurdakul.net.tr/genetikon/** yayınının düzeltilmesine izin verdi. Önceki “yalnız yerel/yayın yok” sınırı bu hedef için kalktı; ana domain ve başka hedefler kapsam dışı. Kaynaksız klinik yüzdeler/sayım kaldırıldı; hekimin protokol anlatımı bağımsız doğrulama olmadığı açıkça belirtilerek sınırlandı. Karar ve kapsam ayrımı aşağıdaki bağlantılı notun başındadır. Dağıtım sonucu `PREVIEW_RELEASE_20261105.md` ile ayrıca doğrulanmalıdır.

13 müşteri yanıtı alındı ve [yerel uzlaştırma kaydına](CLIENT_RECONCILIATION_20261105.md) işlendi. Marka/e-posta tercihleri ve güvenli terminoloji düzeltmeleri yerel taslakta hazır; tıbbi sayılar, protokol, endikasyonlar ve hukuki kimlik için kanıt açıkları sürüyor. **Bu tur önizleme dahil yayın, push veya deploy yok.** Aşağıdaki 2 Kasım metni tarihsel başlangıç durumudur; “cevap bekleniyor” ve o tura ait yayın hedefi ifadeleri yeni kaydın yerine geçmez.

İnceleme: 2 Kasım 2026. Bu kayıt kaynak kodu incelemesidir; teknik değişikliklerin canlıya çıktığı veya doktorun içerikleri onayladığı anlamına gelmez. İlk teknik turda tıbbi metin, sayı, marka adı ve çeviri değiştirilmedi. Aşağıdaki başlangıç bulgularını 2 Kasım sonraki kapsam güncellemesiyle birlikte okuyun. Bu tur yayın hedefi yalnız Yurdakul önizlemesidir.

## 2 Kasım kapsam güncellemesi — çeviri yetkisi

Owner, sonraki mesajında AZ/RU/KA çevirilerini teknik ekibe verdi. Dokuz alt sayfanın 302 alan/dil çevirisi ve ortak arayüz etiketleri hazırlanıyor; aşağıdaki “Kullanıcıya ait çeviri işi” bölümü başlangıç bulgusudur. Son teslim/kanıt `TRANSLATION_DELIVERY_20261102.md` kaydında tutulur. Çeviri, doktorun tıbbi veya hukuki onayı değildir.

Owner tarafından doktor cevabı beklendiği yeniden belirtilen konular:

1. Her dilde marka adı ve Türkçe unvan.
2. PGT / PGD ve açılımı.
3. NIPT T21 %99, T18 %98, T13 >%65 oranları ve kaynakları.
4. Tekrarlayan düşüklerde %50–60, yaklaşık 100.000 genetik durum ve babalık testi %99,99 iddiaları.
5. 50 cc kan, üç kez 10 günlük IV/cilt altı uygulama, üç ay ara ve yedi ay takip protokolü; yayımlanması ve Gürcistan mevzuatı.
6. MS, ALS, otizm, Alzheimer ve demans dahil uygulama alanlarının kapsamı/kanıtı.
7. Esansiyel/senil tremor ifadesi ve PES açılımı.
8. Fetal/embriyonik hücrelerin merkezde gerçekten kullanılıp kullanılmadığı.
9. Akreditasyon/sertifika belgeleri ve placeholder vaadi.
10. Konya tüzel kişiliği ve bilgi@genetikon.com veri sorumlusu bilgileri.

Bu konularda karar verilmedi; mevcut rakam, kısaltma, iletişim ve klinik iddia çevirilerde değiştirilmez. Eski kapanma bandı teknik turda kaldırıldı; bu işlem güncel faaliyet teyidi sayılmaz.

## Yayını etkileyen kararlar

| Karar | Kanıt / kaynak | Kimden ne bekleniyor? |
| --- | --- | --- |
| Bugünkü işletme durumu | `AGENTS.md` eski merkezin kapandığını söylüyor. `messages/*:home.heroSubtitle`, `src/lib/content/faq.ts:faqItems[0..1]`, `site-content.ts:pagesContent.about` ve departmanlar işletmeyi faal anlatıyor. | Doktor: yeni site marka/bilgilendirme sitesi mi, bugün çalışan yeni merkez mi? Hangi hizmetler gerçekten veriliyor? Eski adres ve faaliyet iddiaları onaylanmadan üretim yayını açılmamalı. |
| Resmî marka ve unvan | `src/site.config.ts:name,brandLine`; `pagesContent.international-patients.intro.tr`; ortak header/footer | Doktor: kamuya açık tek marka/unvan biçimi; kullanıcı: buna uygun dil varyantları. Teknik ekip marka kararı vermedi. |
| Güncel adres/telefon/e-posta | `src/site.config.ts:contact`; `src/app/[locale]/contact/page.tsx`; `legalContent.privacy.items[0].body`; `legalContent.terms.items[4].body` | Doktor: Batumi adresi, telefon, WhatsApp, `batumi@genetikon.com` güncel mi? Konum koordinatları kaynakta yaklaşık olarak işaretlenmiş; teyit gerekli. |
| Gizlilikteki tüzel kişilik | `src/lib/content/site-content.ts:legalContent.privacy.items[0].body` ve `items[5].body` | Doktor/işletme yetkilisi: Konya tüzel kişiliği, veri sorumlusu/ortak veri sorumlusu rolü ve `bilgi@genetikon.com` halen doğru mu? Diğer sayfalarda bulunmaması tek başına yanlışlık kanıtı değildir. |
| Akreditasyon | `site-content.ts:pagesContent.about.sections[1].items[2].body` | Doktor: mevcut sertifika/akreditasyonların belge, kapsam ve geçerlilik bilgileri. Şu an hem sahip olunduğu iddiası hem ileride belgeleneceği vaadi var; belge olmadan doğrulanmış sayılamaz. |
| Tıbbi sayılar ve iddialar | Örnekler: `departmentsContent.medical-genetics.intro` yaklaşık 100.000 durum; `sections[0].items[1].body` %99,99; diğer test/yaş/süre/oran metinleri | Doktor: rakamlar, endikasyonlar, başarı/kanıt düzeyleri ve kaynaklarının tamamı. Bu rapor klinik doğrulama yapmaz; mevcut sayıları değiştirmez. |
| IVF rehberleri | `departmentsContent.ivf-center.sections[1]`; `sections[0].items[5].body` Bilgi Merkezi atfı | Doktor: yayımlanacak rehber metni veya bu vaadin kaldırılması kararı. Kullanıcı: çeviriler. Aşağıdaki dokuz kart için bağımsız rehber içeriği/rota yok. |
| Form teslimi | `src/components/contact-form.tsx`, `messages/*:form.mailtoNote` | İşletme: onaylı alıcı ve gerçek sunucu teslimi isteniyor mu? Şu an e-posta uygulaması açılır; sunucudan gönderim, CRM kaydı veya teslim garantisi yok. Mevcut mailto açıklaması zaten var. |
| İçerik ve hukuk revizyon tarihi | `legalContent.{privacy,cookie-policy,terms}.intro`, footer | Doktor/yetkili: son gerçek içerik/hukuk inceleme tarihi. Yazılımın bugün derlenmesi hukuki metnin bugün incelendiği anlamına gelmez; tarih otomatik güncellenmemeli. |

IVF için eksik rehberler: Taşıyıcı Annelik Hukuku; Tüp Bebek ve Taşıyıcı Annelik Süreci; Donasyon ve Taşıyıcı Annelik Süreci; Yumurta Donasyonu Süreci; Tüp Bebek-ICSI Süreci; Vize Bilgisi; Tedavi Protokolleri; İlaçlar; OPU-ICSI-ET. Kartlar şu an kısa özet paragraflarıdır, bağlantı değillerdir. Yeni klinik/hukuki rehber uydurulmadı.

## Kullanıcıya ait çeviri işi

`src/lib/content/localize.ts:lt()` bulunmayan dili İngilizceye düşürüyor. `src/lib/content/site-content.ts` içinde aşağıdaki dokuz bölümün **302 metin alanının tamamı** EN/TR içeriyor; RU, KA ve AZ'nin her birinde 302 alan eksik (toplam 906 dil-alan çevirisi). Başlık/meta da bu kaynaktan üretildiği için İngilizceye düşüyor.

| İçerik anahtarı | Her eksik dilde alan sayısı |
| --- | ---: |
| `departmentsContent.medical-genetics` | 40 |
| `departmentsContent.stem-cell-therapy` | 92 |
| `departmentsContent.ivf-center` | 68 |
| `pagesContent.about` | 16 |
| `pagesContent.international-patients` | 38 |
| `pagesContent.information` | 10 |
| `legalContent.privacy` | 14 |
| `legalContent.cookie-policy` | 12 |
| `legalContent.terms` | 12 |

Ek çeviri/karar alanları:

- `src/components/site-header.tsx`: hardcoded `Genetics Center · Stem Cell Therapy Laboratory`; bunun marka satırı mı çevrilecek açıklama mı olduğuna doktor karar vermeli.
- `messages/tr.json:home.heroKicker`: İngilizce `Genetics Center — Stem Cell Therapy Laboratory`.
- `src/components/site-footer.tsx`: marka adı ve `siteConfig.brandLine`. Footer gizlilik/çerez/koşullar/editör/son güncelleme etiketleri **zaten** mesaj dosyalarında yerelleştirilmiş; footerın tümü çevrilmemiş değil.
- `src/app/[locale]/information/page.tsx`: üç kart adı İngilizce sabitlenmişti; mevcut `messages/*:departments.*.name` metinlerini tekrar kullanmak yeni çeviri üretmek değildir.
- `src/app/[locale]/contact/page.tsx:generateMetadata`: RU/KA/AZ açıklaması İngilizce koşula düşüyordu; formun çevrilmiş olması bu meta açığını kapatmıyor.
- `src/lib/content/faq.ts`: altı soru/cevabın tamamı beş dilde mevcut; ana sayfanın SSS bölümünde eksik çeviri fallback'i saptanmadı. Ancak kaynak yorumunda KA/AZ metinleri AI ilk taslak diye işaretli; tıbbi dil kontrolü ve kullanıcı onayı ayrı açık iştir.
- Erişilebilirlik etiketleri (ör. `Language`, `Primary`, `Primary mobile`, `Legal`, `Cookie consent`) kod içinde İngilizce; ilgili yerelleştirme anahtarları kullanıcıdan istenmeli veya var olan uygun metinlerle bağlanmalı.
- Yeni çerez tercihlerini yeniden açma kontrolü `Cookie settings` teknik İngilizce etiketiyle eklendi; diğer dil karşılıkları kullanıcı çevirisine bırakıldı.
- `messages/tr.json:home.trust.lang` iki dil söylüyor; İngilizce metin beş dil söylüyor. Site arayüzünün dil sayısı ile gerçek hasta iletişim hizmetinin dil sayısı aynı şey değildir. Hizmet kapsamını doktor, ifadeyi kullanıcı netleştirmeli.

## Türkçe terim ve üslup kararları

Tıbbi terimleri teknik ekip düzeltmedi. Tek sözlük kararı alındığında bütün dil kaynaklarına ve meta/schema üretimine aynı karar uygulanmalı.

| Konu | Kaynak örneği |
| --- | --- |
| Batum / Batumi | `messages/tr.json`, `pagesContent.international-patients`, `departmentsContent.ivf-center`, hukuk metinleri |
| ekzozom / eksozom | `departmentsContent.stem-cell-therapy.sections[1]` ile `sections[2].items[9..10]` |
| PGT / PGD ve açılımı | `departmentsContent.ivf-center.sections[0].items[6].title`, genetik bölümü ve ana sayfa departman özeti |
| Genetikon Genetics Center / Genetikon Genetik Merkezi | `siteConfig.name`, `pagesContent.international-patients.intro.tr` |
| “otolog kültür kök hücre süreçleri” | `pagesContent.information.sections[0].items[1].body.tr` |
| “tek gen (monogenik) hastalıklarına” | `departmentsContent.medical-genetics.sections[0].items[5].body.tr` |
| “Babalık Testi / DNA” | `departmentsContent.medical-genetics.sections[0].items[1].title.tr` |
| “esansiyel (senil) tremor” | `departmentsContent.stem-cell-therapy.sections[2].items[4].body` |
| Açılmayan PES kısaltması | `departmentsContent.stem-cell-therapy.sections[2].items[10].title/body` |

## Bildirilen 17 maddenin kaynak doğrulaması

Bu tablo başlangıç kaynak bulgularıdır; teknik çalışma sonunda test ve yayın kanıtı ayrıca kaydedilmelidir.

| # | Doğrulama ve sınır |
| --- | --- |
| 1 | `src/app/[locale]/layout.tsx` İngilizce arşiv uyarısını **yalnız preview koşulunda** gösteriyordu. Üretimde aynı bloğun gösterilmesi kaynakta yok; eski merkezin kapalı olması ise repo bilgisidir, aksi teyit edilmedi. |
| 2 | Preview noindex, robots kapalı ve sitemap boş kasıtlı. Üretim build'i farklıydı; bunu preview ile karıştırıp Yurdakul'u indekslemeye açmak yanlış olur. |
| 3 | Meta ve schema prod tabanına bağlıydı. `locale-switcher.tsx` kaynakta mutlak prod adresi içermiyor; `next-intl` router kullanıyor. Dışarı çıkma iddiası gerçek üretilmiş build/tarayıcı ile ayrıca test edilmeli. |
| 4 | Dokuz derin sayfanın RU/KA/AZ metinleri eksik; 302 alan/dil. İngilizce gövdeyi yerelleştirilmiş html lang altında sunmak gerçek bir dil eşleşmesi sorunu. |
| 5 | Header ve bazı marka/hero/kart metinleri sabit İngilizce. Footerın diğer UI etiketleri çevrilmiş. |
| 6 | Dokuz IVF rehber kartı düz div; rota/hedef yok. İçerik eksikliği yalnız URL ekleyerek çözülemez. |
| 7 | Layout OG kökü kullanıyor; alt sayfalar yalnız title/description/alternates değiştiriyordu. OG görsel/locale yoktu. |
| 8 | `OrganizationJsonLd` fonksiyonu kaynakta mevcut, **preview'da render edilmiyordu**; dolayısıyla preview departmanındaki `#organization` referansı boşa düşüyordu. Üretimde hiç node yok iddiası doğru değil. MedicalClinic'in faaliyet iddiaları ayrıca doktor kararı. |
| 9 | Footer ve legal intro tarihleri sabit. Gerçek revizyon tarihi olmadan bugünün tarihi yazılmamalı. |
| 10 | Üç paylaşılan bileşende boş alt var: hero-parallax, page-header, department-page. Başlık arkasındaki dekoratif fotoğrafta boş alt geçerli olabilir; her boş alt otomatik hata değildir. Preview loader width bilgisini yok sayarak bütün srcSet boylarını aynı dosyaya döndürüyordu. |
| 11 | Manifest kökten start_url/icon kullanıyordu; alt dizin için hatalı. |
| 12 | Form mailto; açıklaması UI'da mevcut. Backend olmadığını doğruladık. Gönderildi iddiası yapan mevcut success mesajı yok. |
| 13 | `scripts/build-preview.mjs` kök redirect title'ını `Genetikon site preview` üretiyordu. |
| 14 | Akreditasyon iddiası ve ileride belgeleme vaadi aynı kartta; gerçek belge/karar gerekli. |
| 15 | Belirtilen TR terim tutarsızlıkları kaynakta mevcut; marka/tıbbi/çeviri kararları ayrıldı. |
| 16 | Ek e-posta ve Konya tüzel kişiliği privacy metninde gerçekten var. Güncellik ve hukuki rol kaynakla doğrulanmış değil. |
| 17 | Cookie banner client hydration sonrası localStorage durumuna göre açılıyor. Kodda gerçek analytics entegrasyonu yok. Kabul/red, yeniden açma, storage engeli ve dil değişimi davranışı tarayıcı testi gerektirir. |

## Ek teknik ve içerik kontrolleri

- Consent mevcut sürümde yalnız localStorage'a yazıyordu; ziyaretçinin ayarı geri açma yolu görünmüyordu. Analytics henüz kurulmuş değil; banner görmek gerçek opt-in uygulamasının kanıtı değildir.
- Standalone `/` locale negotiation ve static preview `/genetikon/` yönlendirmesi ayrı test edilmelidir.
- `src/site.config.ts` coğrafi koordinatları yaklaşık diye not ediyor. Üretim JSON-LD'sinde kesin konummuş gibi sunulması doktor teyidine bağlıdır.
- `legalContent.privacy` sağlık verisinin korunması, uluslararası aktarımlar, veri sorumlusu rolü ve hukuki yükümlülükleri anlatıyor. Backend'siz mevcut akışın bu iddialarla eşleşmesi yetkili hukuk/işletme incelemesi gerektirir; teknik düzeltmeler onay yerine geçmez.
- `sitemap.ts` eski üretim rota listesinde üç hukuki sayfa yoktu; sitemap kapsamı ve fallback diller ayrıca ele alınmalı.
- Mevcut component seti (PageHeader, ContentSections, DepartmentPage, LegalPage, LocaleSwitcher, CookieConsent, ContactForm) bu teknik onarımlar için yeterlidir. Yeni tasarım sistemi veya dış component yüklemesi gerekmiyor.

## Yayın zinciri (salt okunur doğrulama)

Asıl kaynak `YURDAKULOGLU/genetikon-web`. Host `YURDAKULOGLU/yurdakul-net-tr`, alt modül `satellites/genetikon`. `.github/workflows/sync-profile-repositories.yml` manuel tetikleme veya saatte 7/22/37/52 dakikalarında kaynak commitlerini okur. `scripts/build-profiles.mjs` kaynak içinde npm ci + build:preview çalıştırır ve `verifyPreview` doğrular; iki profil de geçmeden host pinleri ilerlemez. Üretilen `public/genetikon` elle düzenlenmemeli. Commit/pipeline başarısı ile canlı source receipt ayrı doğrulanmalı.
