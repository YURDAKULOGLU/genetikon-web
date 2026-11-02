# genetikon.com production

## Current preparation — 2 November 2026

Only the Yurdakul preview is authorized for this revision. See
`docs/PRELAUNCH_CONTENT_DECISIONS.md` for doctor, legal and translation decisions.
The obsolete archive banner is removed from the preview UI; this is not an
assertion that the former clinic has reopened. Current operating details remain
unapproved and the preview stays noindex/nofollow.

Search indexing now requires **build-time** `GENETIKON_PUBLIC_RELEASE=1` in a
non-preview build. The default standalone build also stays noindex. After the
content/domain release has been approved, use
`docker build --build-arg GENETIKON_PUBLIC_RELEASE=1 -t genetikon-web:release .`.
Setting only a runtime environment variable cannot change prerendered metadata.
The preview build remains blocked even if that release flag is set.

Only supplied translations enter hreflang and the public sitemap: EN/TR for
all eleven pages and all five languages for home/contact. English fallback
blocks have explicit English language attributes; missing translations have
not been generated. Metadata now uses each page URL, locale and the existing
brand image; schema links resolve to a minimal brand Organization/WebSite,
without adding unconfirmed clinic/location/service claims.

The contact form remains a clearly labelled mailto handoff with a privacy
link and required consent. No message-delivery backend or tracking service has
been added. Cookie choices can be reopened and withdrawn; denied/full browser
storage is handled. Content review dates are not advanced by technical deploys.

Static preview photographs now use real generated WebP size variants. Empty
alt text is retained for decorative backgrounds beside their text headings.
Verify the exported candidate using `npm run build:preview` and
`npx playwright test --config preview.playwright.config.ts`.

The older verification below is historical, not evidence for this revision.

Status on 2026-10-19: preparation only; the new site is not deployed on this domain.
Canonical source: https://github.com/YURDAKULOGLU/genetikon-web.

## Decisions and access still needed

- Confirm whether the launch represents a brand/information website or a newly
  operating centre. The owner previously confirmed that the former centre closed.
  Existing Batumi clinic copy, treatment availability, address, telephone,
  MedicalClinic structured data and contact details are historical, not verified
  current operational information. Resolve this before publishing the full site.
- Confirm the public contact inbox and the legal operator for the privacy/terms
  pages. The current contact form opens the visitor's email app; it does not
  deliver messages through a server or CRM.
- Access to the Alastyr DNS account and the selected deployment host is needed.
  No Genetikon-specific hosting credentials or provisioned Coolify application
  were found in the declared deployment context. No hosting purchase is implied.

## Observed domain configuration

Read-only DNS and HTTPS checks on 2026-10-19:

- Nameservers: ns1.alastyr.com through ns4.alastyr.com.
- Apex A: 5.2.85.186; www CNAME: genetikon.com.
- Mail: mx1.alastyr.com (priority 0), mx2.alastyr.com (priority 10).
- Both HTTPS names return HTTP 200 from an IIS/Plesk endpoint with an empty body
  element; this is not the new Next.js application.

Preserve all mail-related DNS records. Record a fresh DNS snapshot and the old
web target before switching only the web records. Keep the old target available
for rollback. Choose one canonical HTTPS hostname; the current source uses www.

## Deploy from this repository

The Dockerfile builds the existing standalone Next.js application and runs it
as an unprivileged user on port 3000. The health check reads /en. Public assets
and Next static assets are included by scripts/prepare-standalone.mjs.

```sh
npm ci
npm run deploy:quality-gate
docker build -t genetikon-web:release .
docker run --rm -p 127.0.0.1:3016:3000 genetikon-web:release
```

For Coolify or another Docker host, connect this native repository, use the
root Dockerfile and port 3000, and configure TLS for both domain names. Do not
set GENETIKON_PREVIEW=1: that output belongs to the noindex portfolio preview.
Bind deployment approval and rollback evidence to the reviewed source commit.
Only enable production auto-deployment after the initial content and domain
release is verified. Portfolio synchronization is a separate existing workflow.

Verify root locale routing, all five languages, images, contact behavior,
canonical/hreflang, robots/sitemap, HTTPS redirects and mail DNS after cutover.
Run a fresh independent browser review of the actual production candidate.

Official runtime reference:
https://nextjs.org/docs/app/api-reference/config/next-config-js/output

## Preparation verification, 2026-10-19

- Updated Next.js and its ESLint config from 16.2.10 to 16.3.8; refreshed
  compatible lockfile dependencies. Production dependency audit: zero findings.
- Development-only audit still reports eight findings in lint/test dependency
  chains. They are not part of the standalone runtime. No forced major upgrade
  or ESLint downgrade was applied; track their remediation separately.
- Full deploy quality gate passed: lint, types, three content tests, standalone
  build, 68 desktop/mobile browser tests and 26 explicit accessibility checks.
- Docker image built successfully and ran as uid 100 (non-root). Root locale
  redirect, all five locale homepages, robots, sitemap and logo returned HTTP 200.
- Portfolio preview export also built successfully with the updated dependencies.
- These checks establish technical preparation, not current clinic facts,
  medical/legal approval, a production release or DNS cutover.
