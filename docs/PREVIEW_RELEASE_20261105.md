# Genetikon mevcut önizleme yayını — 5 Kasım 2026

Hedef yalnız https://yurdakul.net.tr/genetikon/. Ownerın yerel taslak yerine mevcut yayının düzeltilmesi talebiyle hazırlanmıştır. Ana domain/DNS/izin değişimi yok.

Kaynak eşleşmesi: YURDAKULOGLU/genetikon-web → host YURDAKULOGLU/yurdakul-net-tr → satellites/genetikon → /genetikon/; host wrangler rotası yurdakul.net.tr. Mevcut otomatik senkronizasyon kaynak main revizyonlarını doğrulayarak pinler.

İçerik: marka/e-posta tercihi, akreditasyon vaadinin kaldırılması, PGT/PES/tremor terminolojisi beş dilde. Doğrulanmayan NIPT/akrabalık yüzdeleri ve genetik durum sayısı kaldırıldı. Tekrarlayan düşük yüzdesinin yanlış kapsamı kaldırıldı. Mevcut hücre protokolü hekimin anlatımı olarak açıkça sınırlandı; 45 seans veya kanıtlanmış tedavi iddiası eklenmedi. Klinik uyarılar ve noindex korundu. Ayrıntı: CLIENT_RECONCILIATION_20261105.md.

Ön doğrulama: lint, TypeScript içeren yerel preview build, 17 birim testi ve 72 masaüstü/mobil Playwright testi geçti. 55 yerel içerik belgesi noindex ve dil/terim/e-posta kontrolünden geçti. Browser critic bulguları ve canlı kaynak receipt ayrı doğrulanacaktır.

Bağımsız critic 25 yerel rota ve dört genişlikte dil/protokol etkileşimini inceledi; yeni içerik değişikliklerinde blocker bulmadı. Mevcut Gürcüce gizlilik başlığının mobil taşması `overflow-wrap:anywhere` ile düzeltildi ve 320px regresyon rotası eklendi. Önceden bulunan faal kurum anlatımları/tarihsel adresin güncelliği açık konu olarak kaldı. Daha önce kaldırılması açıkça istenen kapanma bandı yeniden eklenmedi. Bu nedenle bu önizleme güncellemesi güncel faaliyet, klinik uygunluk veya ana domaine yayın hazır olma onayı değildir.

Bu dosyanın commit'e girmesi tek başına yayın kanıtı değildir. Kaynak/host revizyonları ve canlı geri okuma sonucu Ajans `Isletmeler/Genetikon/Projects/preview_release_20261105.md` kaydına yazılır.
