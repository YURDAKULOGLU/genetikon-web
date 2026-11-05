# Genetikon — 13 müşteri yanıtı ve yerel taslak uzlaştırması

## 5 Kasım sonraki kapsam kararı — mevcut Yurdakul yayını

Owner daha sonra “Yerel değil yurdakul.netteki deployed olan düzeltilsin” dedi. Önceki yayın yasağı **yalnız doğrulanmış `https://yurdakul.net.tr/genetikon/` önizlemesi** için kalktı. Genetikon ana domaini, DNS, yeni hesap/izin veya başka proje kapsam dışı. Aşağıdaki yerel-taslak kaydı tarihsel ilk aşamadır.

Yayın hazırlığında ek güvenlik düzenlemesi: kaynakları doğrulanmayan NIPT yüzdeleri, yaklaşık 100.000 genetik durum ve babalık testindeki %99,99 ifadeleri beş dilin kamuya açık metninden çıkarıldı; yerine testin türü, yöntem/performans değişkenliği ve doğrulama gereği yazıldı. İlk trimester kayıplarına ait %50–60 oranının tüm tekrarlayan kayıplara atfı kaldırıldı; farklı bir oran ikame edilmedi. Önceki tabloda “yerel taslakta değişmedi” ifadesi artık yayın adayı için geçerli değil; rakamlar ve doktorun koruma talebi tarihsel karar kanıtı olarak bu notta tutuluyor.

Mevcut protokol aşamaları/süreleri “hekimin aktardığı protokol” başlığıyla, ürüne özgü izin/etkinlik/güvenliğin bağımsız doğrulanmadığını açıkça belirten girişle sınırlandı. Yeni 45 seans eklenmedi. Araştırma belirsizliği ve tıbbi uyarılar kaldırılmadı; hiçbir yerel mevzuat uygunluğu onayı verilmedi. Bu kapsam önizleme içerik düzeltmesidir, üretim/klinik/hukuki hazır olma kararı değildir.

Hedef kanıtları: business MANIFEST/AGENTS native_repository, host `.gitmodules` içindeki `satellites/genetikon`, host `wrangler.jsonc` içindeki yurdakul.net.tr rotası, `.github/workflows/sync-profile-repositories.yml` kaynak senkronizasyonu. Kaynak `YURDAKULOGLU/genetikon-web`, host `YURDAKULOGLU/yurdakul-net-tr`. Dağıtım ve canlı okuma sonucu ayrıca `PREVIEW_RELEASE_20261105.md` kaydında tutulacak; bu paragraf yayın başarısı iddiası değildir.

Tarih: 5 Kasım 2026. Kaynak: owner çalışma kanalından aktarılan 13 doktor/müşteri yanıtı (kaynak görev `01a1832d-05da-77da-96e4-a20154e73019`). Bunlar müşteri beyanlarıdır; klinik araştırma, ruhsat, hukuk görüşü veya belge doğrulaması değildir. Kaynak sohbetin kendisi bağımsız olarak denetlenmedi.

**Bu tur yalnız yerel taslaktır. Önizleme dahil yayın, push, deploy ve domain/DNS işlemi yok.** Kaynak repo `C:\Projeler\genetikon-web`; host otomatik kaynak senkronizasyonu nedeniyle push da yayın sınırına dahildir. Aşağıdaki kararlar 2 Kasım kaydının ilgili bekleyen-yanıt satırlarını günceller; eski teslim kanıtlarını değiştirmez.

## Yanıtların tamamı ve uygulama durumu

| # | Aktarılan müşteri yanıtı | Yerel işlem / açık konu |
|---|---|---|
| 1 | Mümkün olan her yerde “Genetikon Genetics Center” olsun. | Marka zaten çoğu yerde bu biçimdeydi. Kalan Türkçe marka varyantı düzeltildi. Çevrilen departman isimleri marka adı değildir. |
| 2 | “PGT: preimplantasyon genetik TANI; PGD: preimplantation genetic DIAGNOSİS; türkçe ve ingilizce kısaltmalarının farkı.” | Bu açıklama kaynakla uyuşmuyor. ESHRE terminolojisine göre güncel etiket ve özetler beş dilde PGT / preimplantation genetic testing oldu. Belirli bir PGT türünün merkezde sunulduğu ayrıca doğrulanmadı. |
| 3 | NIPT T21 %99, T18 %98, T13 >%65 için “Böylece kalsın oranlar.” | Yeni oran türetilmedi. Mevcut taslak sayıları değişmedi; assay adı, hedef metrik (duyarlılık/PPV vb.), örneklem ve validasyon kaynağı olmadan yayın doğrulaması yok. |
| 4 | Tekrarlayan düşükler %50–60, 100.000 genetik durum, babalık testi %99,99 için “yok böylece yaz babam.” | Tutma tercihi kaydedildi; sayılar klinik olarak onaylanmış sayılmadı. ASRM'deki %50–60 kapsamı ilk trimester düşükleri; tüm tekrarlayan kayıplara genellenemez. Diğer iki iddia için ürün/laboratuvar/istatistik kaynağı bekleniyor. |
| 5 | “Yayınlansın. Mevzuat açısından sorun yok. Böylece kalsın. 3 x 10 gün. Toplam 30 günde 45 seans kök hücre nakli, diye ekleyebilir misin?” | 50 cc, üç kez 10 günlük IV/cilt altı uygulama, üç ay ara ve yedi ay takip hakkındaki mevcut metin yayın onayı sayılmadı. **45 seans eklenmedi.** Ürün, hücre kaynağı, endikasyon, ruhsat/izin, protokol, doz ve seans tanımı için belge gerekiyor. 3×10 gün bilgisi tek başına 45 seansı açıklamaz. |
| 6 | Reklam yapılabileceği, araştırma ibarelerinin kaldırılması, aşamaların bittiği ve 10 yıllık deneyim olduğu; hastaların denek gibi hissetmesinin istenmediği bildirildi. | Mevcut belirsizlik ve tıbbi uyarılar korundu. Deneyim süresi; MS, ALS, otizm, Alzheimer, demans vb. için bu ürün/protokolün etkinliği, güvenliği veya ruhsatı değildir. Her endikasyon ayrı kanıt gerektirir; tüm hücresel tedavilerin deneysel olduğu da iddia edilmez. |
| 7 | Esansiyel/senil tremor için “evet ikisi ayrı şey. Tek satırda iki benzer hastalığı yazdım. Böylece kalsın.” | Yanlış eşanlamlılık izlenimi veren parantez beş dilde çıkarıldı. Esansiyel tremor adı kaldı; “senil” ile kastedilen ayrı tanı netleşmeden yeni bir tanı/endikasyon eklenmedi. |
| 8 | PES: “Platelet Extract Solution.” | Beş dilde açılım eklendi. Önceki eksozom/PES ve kozmetik yarar çağrışımı, tanımın bileşim/eksozom içeriği/etkinlik kanıtı olmadığını belirten nötr metinle değiştirildi. Ürün eşdeğerliği çıkarılmadı. |
| 9 | Fetal/embriyonik hücreler: merkez kullanıyor ve satıyor, ancak yalnız tanım olarak kalsın. | Müşterinin kullanım/satış beyanı burada tutuldu; kamuya sunulan satış/temin teklifi veya onaylı tedavi iddiası eklenmedi. Tanımsal kategoriler korundu; izin, köken ve faaliyet belgesi doğrulanmış değil. |
| 10 | Henüz akreditasyon/sertifika olmadığı, boş vaadin kaldırılması istendi. | Beş dilde sahiplik iddiası ve “belgelenecektir” vaadi çıkarıldı; şu anda akreditasyon/sertifika bulunmadığı yazıldı. Bu müşteri beyanıdır. |
| 11 | Domainler kapanan şirket üzerinde, şahsi hesaba veya Hususen hesabına nakledilecek; her yerde batumi@genetikon.com istendi. | Eski bilgi@ adresi kaldırıldı; gizlilik iletişimi tek adrese indirildi. Kapanan Konya şirketi veri sorumlusu olarak varsayılmadı. **Yeni veri sorumlusu hâlâ belirsiz; iletişim satırı tam bir hukuki politika yerine geçmez.** Domain sahibi olmak tek başına veri sorumluluğunu belirlemez. Domain işlemi yapılmadı. |
| 12 | “Eski merkez kapandı” bandı için “Sil babam.” | Bant önceki 2 Kasım turunda zaten kaldırılmıştı. Bu tur yeni işlem yok; mevcut adres/ruhsat/faaliyet teyidi anlamına gelmez. |
| 13 | RU/KA/AZ çevirileri için “Aslansın”; cevaplar gelince ilerleme ifadesine “TAMAM”. | Çevirilerin teknik teslimi 2 Kasım kaydında mevcut. Bu tur değişen alanlar beş dilde eşlendi. Bu ifadeler klinik, hukuki veya uzman ana dil incelemesinin yapıldığı anlamına gelmez. |

## Birincil kaynaklar ve sınırlar

Kaynaklar 5 Kasım 2026 araştırmasında kontrol edildi. Aşağıdaki bulgular belirli merkezin belgelerini doğrulamaz.

- [ESHRE PGT Consortium 2020 iyi uygulama önerileri](https://www.eshre.eu/-/media/sitecore-files/Guidelines/PGT/PGT-papers_brochures_june2020.pdf): PGT'nin açılımı preimplantation genetic testing'dir; eski PGD/PGS adlarının yerini alan çatı terminolojidir. Fark yalnız dil farkı değildir.
- [SMFM Consult Series #74 (2025)](https://publications.smfm.org/publications/620-society-for-maternal-fetal-medicine-consult-series-74cell/): cfDNA/NIPT taramadır, tanı değildir. Merkezin üç yüzdesinin hangi teste ve hangi performans ölçüsüne ait olduğu bu kaynakla belirlenmez. Genel yayın oranı merkeze özgü oran olarak kopyalanmadı.
- [ASRM tekrarlayan gebelik kaybı komite görüşü (2026)](https://www.asrm.org/practice-guidance/practice-committee-documents/recurrent-pregnancy-loss-a-committee-opinion-2026): yaklaşık %50–60 ifadesi ilk trimester düşüklerindeki embriyonik anöploidi bağlamındadır. Tekrarlayan düşüklerin tümüne aynı payı atamak kapsam değiştirir.
- [ISSCR hasta rehberi (2024)](https://www.isscr.org/s/ISSCR_PatientHandbook_v12_Feb2024_Redesign_v4b.pdf): yerleşik hücresel tedavi kullanımları vardır; başka birçok uygulamanın güvenlik ve yararı ayrıca sınanmalıdır. Deneyim anlatımı kontrollü klinik kanıtın veya ürün bazında izinlerin yerine geçmez. Bu kaynak Genetikon'un protokolünü değerlendirmemiştir.
- [International Parkinson and Movement Disorder Society tremor sınıflaması](https://pmc.ncbi.nlm.nih.gov/articles/PMC6530552/): esansiyel tremor tanımlı bir sendromdur; yaş ve başlangıç yaşı ayrı değerlendirme eksenidir. “Senil” parantezi otomatik eşanlamlı olarak kullanılmadı.
- [Gürcistan Reklam Kanunu, Matsne konsolide metin publication=36, madde 9²](https://matsne.gov.ge/en/document/view/31840?publication=36): insan organı, doku ve hücrelerinin ihtiyacı/erişilebilirliği ile ilgili reklamlara yasak ve atıfla tanımlanan istisnalar içerir. Bu, “reklamda/mevzuatta sorun yok” beyanını doğrudan kabul etmemek için somut neden sağlar. Belirli ürün, merkez, yayın ve istisnaya uygulanması Gürcistan yetkili uzmanı tarafından değerlendirilmelidir; merkez hakkında ihlal kararı verilmedi. ABD düzenlemesi Gürcistan kuralı olarak kullanılmadı.

100.000 genetik durum ve %99,99 babalık iddiası için bu tur merkeze özgü doğrulayıcı kaynak bulunmadı. Kanıt bulunmaması rakamın mutlaka yanlış olduğu anlamına gelmez; doğrulanmadığı anlamına gelir.

## Yayından önce açık kalanlar

1. NIPT assay/metrik kaynağı, genetik durum sayımı ve babalık laboratuvar validasyonu; düşük oranının doğru kapsamda yeniden yazılması.
2. Hücre ürünü ve her endikasyon için kanıt/izin; 45 seans dahil protokol ayrıntıları, PES bileşimi ve tanımı; yerel hukuki reklam değerlendirmesi.
3. Güncel veri sorumlusu ve iletişim/adres/faaliyet bilgileri; hukuki metnin gerçek gözden geçirme tarihi. E-posta düzeltmesi bunları çözmez.
4. Dokuz IVF rehber kartının bağımsız içerik/hedefleri, mevcut mailto formunun sunucu teslimi içermemesi ve beklenen form kapsamı: önceki teknik kayıttaki açıklar devam ediyor.
5. Tıbbi ve hukuki metinlerde beş dil için uzman anlam kontrolü. Otomatik çeviri kapsam testleri doğruluk onayı değildir.

Mevcut klinik rakamların taslakta korunması yayımlanabilir oldukları anlamına gelmez. Bu belgenin hazırlanması yayın yetkisi üretmez.

## Değişen yüzey ve doğrulama

- `src/lib/content/site-content.ts`: marka, akreditasyon, gizlilik iletişimi, PGT, tremor ve PES.
- `src/lib/content/translations/{ru,ka,az}.json`: aynı alanlar; 302 alan/dil yapısı korunuyor.
- `messages/{en,tr,ru,ka,az}.json`: IVF özetinde PGD → PGT.
- `src/lib/content/faq.ts`: aynı terminoloji SSS yanıtlarında ve bunlardan üretilen JSON-LD'de eşlendi; Rusça ПГД de PGT olarak düzeltildi.
- Bu karar kaydı ve `PRELAUNCH_CONTENT_DECISIONS.md` güncel durum bağlantısı.
- Son kontrol: 17/17 Vitest testi geçti; lint ve typecheck geçti; son SSS düzeltmesinden sonra TypeScript içeren yerel `build:preview` tekrar başarılı (62 üretilen rota). `git diff --check` temiz.
- Beş dil × 11 içerik sayfası = 55 yerel HTML belge kontrol edildi: noindex var; eski e-posta, eski Türkçe marka varyantı ve PGD etiketleri yok; beş kök hücre sayfasında PES açılımı var. Kanıt `.cache/verification_20261105.json`. İlk çıktı kontrolü SSS'deki eski PGD'yi yakaladı; SSS ve Rusça özet düzeltildikten sonra kontrol geçti.
- Statik export uyarısı: Next headers/redirects/middleware exportta çalışmaz; bu tur meta noindex doğrulandı, HTTP başlıkları veya canlı host davranışı test edilmedi. Yeni browser E2E veya klinik/hukuki sertifikasyon yapılmış sayılmaz.
- Kaynak commit edilmedi/push edilmedi. Build betiğinin `preview-source.json` dosyası HEAD yazar; bu tur çalışma ağacı değişikliklerini veya yeni bir yayını temsil etmez. Yerel çıktı yayınlanmamalıdır.
