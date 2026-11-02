# Genetikon çeviri / UX bağımsız tarayıcı delta incelemesi

Tarih: 2026-11-02. Hedef: `http://127.0.0.1:3017/genetikon/`. Araç: yeni Playwright Chromium oturumları; gerçek çalışan statik preview. Üretici kaynakları okunmadı veya değiştirilmedi. Bu incelemede yalnız bu rapor yazıldı; ekran görüntüleri tarayıcıdan alınarak görsel olarak incelendi, diske yeni görsel kaydedilmedi.

## Sonuç

İncelenen tarayıcı UX kapsamı içinde açık önemli bulgu yok. Bu sonuç tıbbi doğruluk, işletmenin faal olduğu, hukuki metinler, anadil düzeyinde çeviri kalitesi veya yayın yetkisi hakkında onay değildir. Doktor/owner kararları bekleyen tıbbi ifadeler regresyon olarak değerlendirilmedi.

## Bağımsız kontrol kapsamı

- AZ, RU ve KA için **93 rota × viewport ziyareti**: her dilde 1366 × 844 boyutta 10 derin rota; 820, 390 ve 320 × 844 boyutlarında ilk 7 rota. Rotalar: `departments/medical-genetics/`, `departments/stem-cell-therapy/`, `departments/ivf-center/`, `about/`, `information/`, `international-patients/`, `contact/`, `privacy/`, `cookie-policy/`, `terms/`.
- Her ziyarette sayfa sonuna kadar 700 px aralıklı scroll durakları; görünen başlık/paragrafların opacity durumu, yatay belge taşması, header bağlantıları/ana başlıkların ekran dışına çıkması, yüklenmiş görseller ve çalışma zamanı istisnaları kontrol edildi. 93 ziyarette HTTP 200; taşma, görünmez kalmış içerik, bozuk görsel ve pageerror bulunmadı. Görsel değerlendirme özellikle RU 320 px kök hücre, KA 390 px genetik, AZ 820 px IVF ve son build KA 1280 px About ekranlarında yapıldı. Her durağın ayrı görsel insan incelemesi yapıldığı iddia edilmez.
- 30 AZ/RU/KA derin rota gövdesi, başlığı, HTML dili ve meta açıklaması tarayıcı DOM'undan alındı. İlgili dilde gövdeler ve metalar mevcut. Uzun İngilizce pasaj taramasında kaynak yayın adı ve şirketin tescilli adı dışında beklenmedik İngilizce gövde saptanmadı; bu tarama çevirinin anlam doğruluğunu veya doğallığını kanıtlamaz.
- **Aynı document içinde beş dil:** EN About sayfasından AZ → RU → KA → TR → EN geçişleri yapıldı. Tarayıcıya konan document işareti her geçişte korundu. Her dilde header üzerinden Contact'a, ardından About'a geçildi; URL ve HTML `lang` seçilen dili izledi. Medical Genetics rotası ayrıca beş dilde sırayla değiştirildi; rota korunurken H1, gövde, title ve meta seçilen dile güncellendi. `/genetikon/` prefix'i ve tek son slash korundu.
- **Form/sticky focus:** Contact üzerinde beş dil × dört boyutta boş form gönderimi denendi. Zorunlu isim alanı odak aldı ve header altında görünür kaldı. Header düzeltmesini içeren son build ayrıca AZ/RU/KA × 1280/320 px boyutlarında tekrar denendi. 1280 px'te header alt sınırı 105.31 px, odaklanan alan üstü 224.14 px; KA 320 px'te header alt sınırı 250 px, alan üstü 447.75 px. Son altı kontrolde console error, pageerror veya başarısız HTTP yanıtı görülmedi. Harici e-posta gönderilmedi.
- **1280 px KA son build:** Header ve document ölçülen genişlikleri 1280 px; açıklama ve menü satırlara yerleşiyor, dil seçenekleri görünür. Önceden bildirilen üretici bulgusu bağımsız olarak yeniden üretilmedi; son hali bağımsız ölçüm ve ekran incelemesiyle değerlendirildi.
- **Reduced motion:** AZ/RU/KA kök hücre derin sayfasında 320 px ve `prefers-reduced-motion: reduce` ile ana içerikte opacity nedeniyle gizli başlık/paragraf ve çalışan tarayıcı animasyonu yok; yatay taşma yok. Olağan scroll geçişlerinde boş mesafe tuzağı veya hiç görünmeyen içerik gözlenmedi.

## Sınırlar

Bu, önceki genel tarayıcı incelemesine ek çeviri/UX delta kontrolüdür. Chromium dışındaki motorlar, fiziksel cihazlar, gerçek e-posta/telefon/WhatsApp teslimatı, ekran okuyucu oturumu, tarayıcı zoom'u ve tüm metinlerin dilbilimsel doğruluğu değerlendirilmedi. Hukuk rotalarının tablet/mobil varyantları bu delta turunda yeniden dolaşılmadı. Preview başlığı/meta açıklamasının hedef dilde olduğu doğrulandı; meta açıklamalarındaki mevcut karakter sınırına bağlı kelime kesilmeleri bu çeviri değişikliğine özgü yeni bir UX regresyonu olarak sınıflandırılmadı. Bu rapor yayın izni vermez.
