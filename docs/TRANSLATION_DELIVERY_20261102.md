# Genetikon çeviri ve dil geçişi — 2 Kasım 2026

Kapsam: owner çevirileri bu tur açıkça teknik ekibe verdi. Yalnız Yurdakul önizlemesi yayımlanır; ana domain yayını ve klinik/hukuki/marka kararları doktor yanıtını bekler.

## Değişiklik

- Azerice, Rusça ve Gürcücede dokuz derin sayfanın 302 alanı/dil tamamlandı (906 alan). Başlık, açıklama, gövde ve hukuki içerik aynı kaynaktan yerelleştirilir.
- Header/footer açıklaması, dil/navigasyon erişilebilirlik etiketleri, çerez ayarları ve formun e-posta konu/alan etiketleri yerelleştirildi. Mevcut marka adı değiştirilmedi.
- Departman JSON-LD dil ve breadcrumb adı doğru dilde; hreflang tüm beş dili kapsar. Açık üretim onayıyla üretilecek sitemap 55 URL içerir. Önizleme noindex/nofollow ve boş sitemap kalır.
- Dil seçimi artık aynı belge içinde, aynı sayfayı ve /genetikon/ dizinini koruyarak çalışır. Tam belge yeniden yüklemesi kaldırıldı. Next 16.4.4 statik export üzerinde çapraz dil prefetch yanlış/stale rota üretebildiğinden dil bağlantılarında prefetch kapalı tutulur.

## İçerik sınırı

Tıbbi oranlar, süreçler, marka adı, iletişim adresleri ve tartışmalı PGT/PGD/PES gibi kısaltmalar kaynakla aynı kalır. Sayı biçimleri değer korunarak yerelleştirildi. Üç dilde manuel kaynak karşılaştırması yapıldı; Azerice için ek bağımsız 88 alan kontrolü yapıldı. Bu çalışma tıbbi doğrulama veya ana dili konuşan klinik/hukuk uzmanı onayı değildir.

Doktor sorularının güncel listesi `PRELAUNCH_CONTENT_DECISIONS.md` başındadır. Kaynakta bulunan tartışmalı iddialar çeviride onaylanmış kabul edilmedi. Klinik karar geldiğinde tüm dillere aynı kaynak kararı uygulanmalıdır.

## Doğrulama

- Lint başarılı; preview build ve TypeScript başarılı.
- 17 birim testi: tüm 302×3 anahtar, ortak UI anahtar eşliği, kaynak sayıları, kısaltmalar, e-postalar ve marka koruması.
- 72 preview tarayıcı testi: 55 belge, 27 yeni dil/derin sayfa birleşiminin gerçek gövde ve meta kontrolü, İngilizce paragraf/fallback yokluğu, 320px düzeni, masaüstü/mobil dil geçişinde belge korunması, çerez ve form.
- 76 standalone tarayıcı testi başarılı. İlk koşuda Gürcüce masaüstü header 21px taşma bulundu; marka açıklaması satıra bölünerek düzeltildi ve tüm 76 test yeniden geçti. Header/dil değişimi için ayrıca 8 preview kontrolü yeniden geçti.
- Bağımsız tarayıcı sonucu `TRANSLATION_BROWSER_REVIEW_20261102.md` içindedir.

## Yayın

Bu kaynak kayıt yayın için hazırlanan değişikliği tanımlar; tek başına canlı yayın kanıtı değildir. Kaynak/host commit ve canlı doğrulama kanıtı Ajans `Isletmeler/Genetikon/Projects/prelaunch_20261102.md` kaydına eklenir.
