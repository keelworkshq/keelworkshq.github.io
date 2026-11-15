# keelworkstech.com

Marketing site for Keelworks (Cloud, Infrastructure, DevOps, Talent), hosted free on GitHub Pages while the business is pre-revenue. Plain static HTML/CSS, no build step, no framework, on purpose, there's no reason to add build tooling for a handful of static pages.

Lives under its own account (`keelworkshq`), separate from any other GitHub account, so this stays fully independent.

Served on the custom domain `keelworkstech.com` (registered at Cloudflare, DNS on Cloudflare in DNS only mode, pointing at GitHub Pages). The `CNAME` file at the repo root tells Pages which domain to serve; don't delete it. `keelworkshq.github.io` redirects to the custom domain automatically.

## Structure

```
index.html              homepage
services/index.html     services overview
services/cloudops/      CloudOps & DevOps service + pricing
services/managed-it/    Managed IT Infrastructure service + pricing
services/recruitment/   Cloud & DevOps Recruitment service
about/                  about page
contact/                contact page
nepal-digital-impact/   Keelworks Nepal initiative page (EN/Nepali toggle)
assets/style.css        shared styles
favicon.svg             favicon source (edit this, then regenerate the rest)
favicon.ico             multi-res fallback (16/32/48px), generated from favicon.svg
assets/favicon-32x32.png, assets/apple-touch-icon.png   generated from favicon.svg
assets/og-image.png     1200x630 link preview image (og:image / twitter:image on every page)
```

## Contact email

`naveen@keelworkstech.com`, hosted on Zoho Mail (free plan). Used in `contact/index.html` for the visible address, the Email Keelworks button and the enquiry form. DNS for mail (MX, SPF, DKIM selector `zmail`, DMARC) lives in Cloudflare alongside the website records.

## Deploy

Pushing to `main` is the deploy, GitHub Pages serves directly from this branch. No CI, no build.
