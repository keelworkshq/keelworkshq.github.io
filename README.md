# keelworkshq.github.io

Marketing site for Keelworks (Cloud, Infrastructure, DevOps, Talent), hosted free on GitHub Pages while the business is pre-revenue. Plain static HTML/CSS, no build step, no framework, on purpose, there's no reason to add build tooling for a handful of static pages.

Lives under its own account (`keelworkshq`), separate from any other GitHub account, so this stays fully independent.

## Structure

```
index.html              homepage
services/index.html     services overview
services/cloudops/      CloudOps & DevOps service + pricing
services/managed-it/    Managed IT Infrastructure service + pricing
services/recruitment/   Cloud & DevOps Recruitment service
about/                  about page
contact/                contact page
assets/style.css        shared styles
```

## Known placeholder, needs a real value

`contact/index.html` has a placeholder email (`hello@keelworks.in`) since no domain or professional email exists yet. Update this once Stage 1 of the business plan (professional email setup) is done.

## Deploy

Pushing to `main` is the deploy, GitHub Pages serves directly from this branch. No CI, no build.
