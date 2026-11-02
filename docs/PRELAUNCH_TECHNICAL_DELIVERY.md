# Genetikon teknik hazırlık — 2 Kasım 2026

Yetkili yayın kapsamı: yalnız `https://yurdakul.net.tr/genetikon/`.
`www.genetikon.com` yayını, DNS değişimi ve doktora/kullanıcıya ait içerik
kararları bu teslimin dışında. GitHub kaynak kodu ve host alt modül akışı kullanılır.

## Yapılanlar

- Önizlemedeki arşiv/kapanma bandı ve kök yönlendirme başlığındaki “site preview” kaldırıldı. Bu, merkezin yeniden açıldığına dair doğrulama değildir.
- Önizleme ile üretim URL/indeks ayarları ayrıldı. Önizleme noindex/nofollow kalır; üretimin indekslenmesi ayrıca build-time `GENETIKON_PUBLIC_RELEASE=1` gerektirir.
- Sayfa bazlı canonical, hreflang, OG adresi/locale/görsel ve Twitter meta üretildi; mevcut marka görseli kullanıldı. Manifest başlangıcı/kapsamı/icon adresi alt dizine uyarlandı.
- Dil bağlantıları aynı host ve aynı sayfada kalır; sondaki slash normalleştirilir. 55 belge korunur; yalnız gerçek çeviriler hreflang ve üretim sitemap'inde yer alır (28 URL).
- İngilizce fallback metinlerine İngilizce dil işaretleri verildi; eksik RU/KA/AZ metinleri çevrilmedi. İletişim meta açıklaması ve Bilgi Merkezi bölüm adları mevcut dil sözlüklerinden alındı.
- Organization/WebSite düğümleri ve departman referansları tutarlı hale getirildi. Doğrulanmamış MedicalClinic adres/hizmet/koordinat iddiaları makine verisinden çıkarıldı.
- Önizleme fotoğrafları için 330 WebP boyut/kalite dosyası üretilir; orijinaller korunur. Dekoratif başlık arka planlarının boş alt değerleri korundu.
- Çerez tercihini yeniden açma/geri çekme, depolama izni reddi ve dolu depolama davranışı düzeltildi. Formda mailto açıklaması, gizlilik bağlantısı ve zorunlu alan/onay doğrulaması var; backend teslimi eklenmedi.
- Mobilde geçersiz alan odağının sabit menü altında kaybolması bağımsız incelemede bulundu ve kaydırma payıyla düzeltildi.
- Next.js ve ESLint eş paketi 16.4.4'e güncellendi. Üretim bağımlılık denetimi: **0 açık**. Geliştirme/test bağımlılıklarında 19 bulgu var (17 orta, 2 kritik); Vitest/Tinypool ana sürüm geçişi ayrı iş. Statik önizlemede Node/Next sunucusu çalışmaz.

## Doğrulama

- Lint ve TypeScript/build başarılı.
- 7 birim testi başarılı (içerik sınırları, metadata ortam ayrımı, gerçek görsel varyantları).
- 12 önizleme tarayıcı testi başarılı: masaüstü/mobil, beş dilde aynı sayfayı koruma, tüm 55 belge, manifest, indeks sınırı, çerez durumları ve form odağı.
- 76 standalone tarayıcı testi başarılı; erişilebilirlik, mobil/masaüstü, sayfa/varlık yükleme, form ve metadata/sitemap kapsamını içerir.
- Hostun `verify-profile-preview.mjs` denetimi 59 üretilmiş HTML dosyasını doğruladı (55 içerik belgesi ve framework/kök yardımcı belgeler).
- Bağımsız görsel/etkileşim incelemesi: `PRELAUNCH_BROWSER_REVIEW.md`.

## Tamamlanmış sayılmayanlar

`PRELAUNCH_CONTENT_DECISIONS.md` başlangıçtaki 17 maddeyi tek tek doğrular.
RU/KA/AZ için 302'şer alan, ortak etiketler, tıbbi/marka terminolojisi, dokuz IVF
rehberi, akreditasyon belgeleri, işletme/iletişim/hukuk bilgileri ve gerçek revizyon
tarihi karar bekler. Form sunucusu için alıcı/teslim akışı seçilmelidir. Mevcut
tarihleri bugüne çekerek sahte inceleme tarihi oluşturulmadı. Doktor onayı olmadan
ana domainin yayına hazır olduğu söylenemez.
