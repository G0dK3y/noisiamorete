# Plan: Sito Web Rete Italiana Disabili -- Nuovo sito Next.js

> Generated: 2026-03-22T22:07:58Z | Branch: main | Commit: initial | Complexity: Complex
> Mode: Standard (complex with EARS) | Strategy: MVP incrementale (7 fasi)
> Subagents: code-architect | Reviewer: Skipped -- greenfield project, risks documented inline
> Target files: src/ (greenfield Next.js 16 + shadcn/ui + Vercel)

## Summary

- Total phases: 7
- Total tasks: 42
- New files: ~55
- Modified files: 0 (greenfield)
- Scope: Sito web completo per Rete Italiana Disabili -- migrazione da Altervista a Next.js 16 su Vercel con accessibilita WCAG 2.1 AA, dark/light mode, SSG, SEO, form contatti

### Decisions Table

| # | Decision | Choice | Rationale |
|---|----------|--------|-----------|
| 1 | Framework | Next.js 16 App Router | SSG ottimale, Vercel free tier, zero-config deploy |
| 2 | Design system | shadcn/ui + Tailwind + Geist | Accessibile, personalizzabile, moderno |
| 3 | Data layer | File TypeScript tipizzati in /src/data/ | Zero costi, type-safe, facile da migrare a CMS |
| 4 | Contact form | API route + nodemailer | Serverless, funziona su Vercel free tier |
| 5 | Immagini | Locali in /public/images/ + next/image | SSG compatibile, ottimizzazione automatica |
| 6 | Tema default | Dark mode | Design moderno, con toggle light mode |
| 7 | i18n | Predisposto (stringhe in data files, lang="it") | Pronto per aggiunta futura senza refactor |

---

## Phase 1: Fondazione Progetto (Sequential)

Setup iniziale del progetto Next.js, dipendenze, configurazione base.

- [ ] 1.1 Creare progetto Next.js: `npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"`
- [ ] 1.2 Installare dipendenze: `next-themes`, `react-hook-form`, `zod`, `@hookform/resolvers`, `embla-carousel-react`, `lucide-react`, `nodemailer`, `@types/nodemailer`
- [ ] 1.3 Inizializzare shadcn/ui: `npx shadcn@latest init` (base: zinc, CSS variables, dark mode)
- [ ] 1.4 Configurare `tailwind.config.ts` con color tokens custom (primary blue #2563EB, accent orange #F97316, dark variants)
- [ ] 1.5 Configurare `next.config.ts` (images optimization, typed routes)
- [ ] 1.6 Creare `/src/config/site.ts` con tutti i metadati organizzazione (nome, CF, IBAN, email, social links, tagline)
- [ ] 1.7 Creare tipi TypeScript in `/src/types/`: `project.ts`, `sponsor.ts`, `testimonial.ts`
- [ ] 1.8 Creare `/src/lib/utils.ts` con utility `cn()` e `/src/lib/metadata.ts` con helper `generatePageMetadata()`

**Checkpoint:** `npm run dev` funziona, shadcn/ui inizializzato, TypeScript compila senza errori
**Simplify:** Run `/simplify` to review modified code

---

## Phase 2: Dati e Contenuti (Parallel)

Popolare tutti i file dati con i contenuti migrati dal vecchio sito. Questi task sono indipendenti.

- [ ] 2.1 Creare `/src/data/navigation.ts` con array link navigazione (Home, Chi siamo, Dicono di noi, La nostra missione, I Progetti, Contatti, Iscriviti, Dona, Zoo Safari Tour, Sponsor)
- [ ] 2.2 Creare `/src/data/team.ts` con bio presidente Katiuscia Girolametti e citazione
- [ ] 2.3 Creare `/src/data/services.ts` con servizi missione (consulenza legale, CAF, integrazione scolastica, terapisti, progetti lavorativi, progetti sportivi)
- [ ] 2.4 Creare `/src/data/stats.ts` con target contatori (2000 sostenitori, 50 progetti, 3000 ore volontariato)
- [ ] 2.5 Creare `/src/data/sponsors.ts` con 11 sponsor (Danny Kaye, Pompi, Grossi Immobiliare, Fulcro Bistrot, ONAV, Theatrike, City Wellness, L'atelier del movimento, Chi.pia, Manitas, Giungi)
- [ ] 2.6 Creare `/src/data/testimonials.ts` con testimonianze (Paolo, Giulia, Anna) e rassegna stampa
- [ ] 2.7 Creare `/src/data/projects.ts` con tutti i progetti (Zoo Safari Tour, Diversamente Divertente, Osteopatia e Autismo, Festival Sport Inclusivo, tirocinio Microsoft/Compass, convegni, webinar salute mentale, ecc.) -- slug, titolo, descrizione, immagini, tags, anno, featured flag
- [ ] 2.8 Scaricare e organizzare immagini dal vecchio sito in `/public/images/` (projects/, sponsors/, team/), convertire a WebP dove possibile

**Checkpoint:** Tutti i file dati importano correttamente, TypeScript compila, immagini presenti in /public/
**Simplify:** Run `/simplify` to review modified code

---

## Phase 3: Componenti Layout e UI (Sequential) <- depends on Phase 1

Costruire i componenti layout condivisi e i building blocks UI riutilizzabili.

### 3A: Componenti shadcn/ui (Parallel)

- [ ] 3.1 Generare componenti shadcn/ui: `npx shadcn@latest add button card badge sheet dialog carousel form input textarea separator toast`

### 3B: Layout Components (Sequential) <- depends on 3A

- [ ] 3.2 Creare `skip-link.tsx` -- primo elemento DOM, visibile solo al focus, target #main-content
- [ ] 3.3 Creare `theme-toggle.tsx` -- Client Component con `useTheme()`, icone sole/luna, aria-label dinamico in italiano
- [ ] 3.4 Creare `social-links.tsx` -- icone Facebook, Instagram, YouTube con aria-label, target="_blank" rel="noopener"
- [ ] 3.5 Creare `site-header.tsx` + `mobile-nav.tsx` -- navbar responsiva con logo, link navigazione, theme toggle, Sheet mobile
- [ ] 3.6 Creare `iban-display.tsx` -- Client Component, copia IBAN in clipboard, feedback "Copiato!" con aria-live
- [ ] 3.7 Creare `site-footer.tsx` -- brand, navigazione raggruppata, IBAN display, social links, CF, copyright

### 3C: Root Layout (Sequential) <- depends on 3B

- [ ] 3.8 Configurare `app/layout.tsx` -- ThemeProvider (defaultTheme="dark"), Geist font import, SkipLink, SiteHeader, main#main-content, SiteFooter, lang="it", meta viewport

**Checkpoint:** Layout completo visibile su `npm run dev`, dark/light toggle funzionante, skip link navigabile via Tab, mobile menu funzionante
**Simplify:** Run `/simplify` to review modified code

---

## Phase 4: Componenti Sezione (Parallel) <- depends on Phase 3

Costruire i componenti di sezione riutilizzabili. Tutti indipendenti.

- [ ] 4.1 Creare `hero-section.tsx` -- immagine background con gradient overlay, titolo, sottotitolo, CTA button
- [ ] 4.2 Creare `page-header.tsx` -- titolo pagina con breadcrumb accessibile
- [ ] 4.3 Creare `section-wrapper.tsx` -- wrapper consistente con padding e max-width
- [ ] 4.4 Creare `stats-counter.tsx` -- Client Component con IntersectionObserver, animazione count-up via requestAnimationFrame, rispetta prefers-reduced-motion
- [ ] 4.5 Creare `project-card.tsx` + `project-grid.tsx` -- card con immagine, titolo, tags, anno; griglia responsiva
- [ ] 4.6 Creare `sponsor-grid.tsx` -- griglia loghi con effetto grayscale->colore al hover
- [ ] 4.7 Creare `donation-cta.tsx` -- blocco IBAN + pulsante GoFundMe + messaggio motivazionale
- [ ] 4.8 Creare `testimonial-card.tsx` -- citazione con nome autore, card con bordo accent
- [ ] 4.9 Creare `service-card.tsx` -- card servizio con icona, titolo, descrizione
- [ ] 4.10 Creare `president-quote.tsx` -- blockquote con foto presidente, stile citazione
- [ ] 4.11 Creare `image-carousel.tsx` -- Client Component con embla-carousel, navigazione frecce/touch/keyboard, thumbnails, aria-roledescription="carousel"
- [ ] 4.12 Creare `pdf-download-button.tsx` -- pulsante download accessibile con icona documento
- [ ] 4.13 Creare `contact-form.tsx` -- Client Component con react-hook-form + Zod validation, label associate, errori inline con aria-describedby, stato invio con aria-live
- [ ] 4.14 Creare `/src/lib/contact-schema.ts` -- schema Zod per validazione form contatti

**Checkpoint:** Tutti i componenti renderizzano isolatamente senza errori TypeScript, componenti Client si idratano correttamente
**Simplify:** Run `/simplify` to review modified code

---

## Phase 5: Pagine (Sequential) <- depends on Phase 2, 3, 4

Assemblare tutte le pagine del sito usando i dati e i componenti costruiti.

### 5A: Pagine Statiche Principali (Parallel)

- [ ] 5.1 Creare `/` (Home) -- HeroSection con tagline, ProjectGrid (3 featured), PresidentQuote, StatsCounter, DonationCta
- [ ] 5.2 Creare `/chi-siamo` -- bio presidente con foto, citazione, missione, lista obiettivi nazionali (4 punti)
- [ ] 5.3 Creare `/missione` -- titolo "Siamo sempre di piu", griglia ServiceCard (6 servizi), galleria foto, StatsCounter, CTA "Entra nella Rete"
- [ ] 5.4 Creare `/dona` -- IBAN details, GoFundMe link, TestimonialCard x3 (Paolo, Giulia, Anna), 3 modi per aiutare (donare, socio, volontario)
- [ ] 5.5 Creare `/diventa-socio` -- testo motivazionale, PdfDownloadButton per modulo iscrizione
- [ ] 5.6 Creare `/sponsor` -- SponsorGrid con 11 loghi, intro text
- [ ] 5.7 Creare `/dicono-di-noi` -- griglia TestimonialCard con rassegna stampa

### 5B: Pagina Progetti (Sequential) <- depends on 5A

- [ ] 5.8 Creare `/progetti` -- ProjectGrid con tutti i progetti, filtro per anno/tag (opzionale)
- [ ] 5.9 Creare `/progetti/[slug]` -- pagina dettaglio con generateStaticParams, HeroSection, descrizione completa, ImageCarousel, PdfDownloadButton (condizionale)

### 5C: Contatti e API (Sequential) <- depends on 5A

- [ ] 5.10 Creare `/contatti` -- ContactForm, email, social links, mappa area operativa
- [ ] 5.11 Creare `/api/contact/route.ts` -- validazione Zod, invio email via nodemailer, rate limiting basico, gestione errori strutturata

**Checkpoint:** Tutte le pagine raggiungibili, navigazione funzionante, form contatti invia correttamente, pagine progetto generate staticamente
**Simplify:** Run `/simplify` to review modified code

---

## Phase 6: SEO, Performance e Accessibilita (Parallel) <- depends on Phase 5

### 6A: SEO (Parallel)

- [ ] 6.1 Aggiungere `export const metadata` a tutte le pagine statiche con titolo, descrizione, Open Graph
- [ ] 6.2 Aggiungere `generateMetadata` a `/progetti/[slug]` con dati dinamici del progetto
- [ ] 6.3 Creare `/src/app/sitemap.ts` -- tutte le rotte statiche + progetti dinamici
- [ ] 6.4 Creare `/src/app/robots.ts` -- allow all, link sitemap

### 6B: Performance (Parallel)

- [ ] 6.5 Ottimizzare immagini: dimensioni esplicite width/height su tutti i next/image, `priority` su hero above-the-fold
- [ ] 6.6 Verificare bundle size, eliminare import non necessari, verificare tree-shaking

### 6C: Accessibilita (Sequential)

- [ ] 6.7 Audit accessibilita completo: verificare skip link, focus management, ARIA landmarks, contrasto colori in entrambi i temi, navigazione keyboard carousel, screen reader labels in italiano
- [ ] 6.8 Verificare `prefers-reduced-motion` disabilita animazioni StatsCounter e transizioni

**Checkpoint:** Lighthouse scores > 90 su tutte le metriche, zero errori axe-core, sitemap.xml raggiungibile, OG preview corretta
**Simplify:** Run `/simplify` to review modified code

---

## Phase 7: Testing e Deploy (Sequential) <- depends on Phase 6

> Feature type: New UI component/page + Full user flow -> UI/Functional + Smoke + E2E

- [ ] 7.1 Smoke test: `npm run build` completa senza errori, tutte le pagine generate
- [ ] 7.2 Test navigazione: tutte le pagine raggiungibili, link interni funzionanti, nessun 404
- [ ] 7.3 Test form contatti: validazione client-side, invio API route, gestione errori
- [ ] 7.4 Test responsive: verificare layout su mobile (360px), tablet (768px), desktop (1280px)
- [ ] 7.5 Deploy su Vercel: connettere repo Git, configurare env vars (SMTP_*, CONTACT_TO, NEXT_PUBLIC_SITE_URL), primo deploy
- [ ] 7.6 Verificare deploy: Lighthouse su URL di produzione, OG image preview, sitemap accessibile

**Checkpoint:** Sito live su Vercel, tutte le pagine funzionanti, form contatti operativo, Lighthouse > 90

---

## Risk Assessment

| Risk | Severity | Status | Mitigation |
|------|----------|--------|------------|
| Rate limiting /api/contact (spam) | HIGH | Open | Aggiungere @upstash/ratelimit o honeypot field come prima misura |
| SMTP Gmail limite 500 email/giorno | LOW | Open | Sufficiente per nonprofit, migrare a Resend se volume cresce |
| 50+ progetti in file TS difficili da mantenere | MEDIUM | Open | Struttura type-safe predisposta per migrazione a CMS (Sanity/Payload) |
| Immagini mancanti al build time | MEDIUM | Open | Placeholder images di fallback, download immagini in Phase 2 |
| Accessibilita non verificabile solo con tool automatici | MEDIUM | Open | Audit manuale con screen reader in Phase 6C |

---

## Execution Notes

### Priority Order
1. **Phase 1** (1h) -- Fondazione: senza questa nulla funziona
2. **Phase 2** (2h) -- Dati: parallelizzabile, raccolta contenuti dal vecchio sito
3. **Phase 3** (2h) -- Layout: header, footer, tema, navigazione
4. **Phase 4** (3h) -- Componenti sezione: building blocks riutilizzabili
5. **Phase 5** (3h) -- Pagine: assemblaggio finale
6. **Phase 6** (1h) -- SEO e accessibilita: polish finale
7. **Phase 7** (1h) -- Test e deploy

### Recommended Pauses
- Dopo Phase 3: layout completo visibile -- momento ideale per review design con stakeholder
- Dopo Phase 5: sito completo funzionante -- review contenuti prima di SEO/deploy

### Key Design Constraints
- Accessibilita WCAG 2.1 AA e requisito non negoziabile data la missione dell'organizzazione
- Budget zero: nessun servizio a pagamento (Vercel free tier, Gmail SMTP)
- Contenuti in italiano, predisposti per i18n futura senza refactor strutturale
- Dark mode come default, light mode come opzione

---

## Final Checklist

- [ ] All pages render correctly in dark and light mode
- [ ] Skip link navigates to #main-content
- [ ] All images have descriptive alt text in Italian
- [ ] IBAN visible in footer on every page
- [ ] Contact form validates and submits correctly
- [ ] All project detail pages generated via generateStaticParams
- [ ] Sitemap.xml includes all static and dynamic routes
- [ ] Lighthouse Performance > 90, Accessibility > 95
- [ ] Run `/simplify` on all modified files
- [ ] Deploy to Vercel successful
- [ ] Custom domain configured (when available)
