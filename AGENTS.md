# Genetikon website

This repository is the canonical source. Make source changes here, not in an
Ajans mirror or in the generated yurdakul.net.tr portfolio copy.
The former Genetikon centre is closed; name rights are retained by the owner.
Do not present old addresses/services as newly confirmed operating details.
Do not publish staff/personal identity or link to Dr. Yurdakul's personal site.

`npm run build` retains the standalone runtime.
`npm run build:preview` creates a noindex static export at `.next-preview`
for `/genetikon/` on yurdakul.net.tr. It uses explicit locale routes, not the
standalone server's geography/cookie language negotiation.
The host consumes the repo as a submodule. Commit/push reviewed source changes
here; never hand-edit generated HTML in the host.
