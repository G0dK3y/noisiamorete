# Report — Social nel sito (footer, condivisione, "I nostri social")

**Data:** 2026-07-02
**Progetto:** Rete Italiana Disabili (`noisiamorete`)
**Ambito:** Link social e condivisione sul sito

---

## Richiesta

Aggiungere i social sul sito:
1. Nel **footer**.
2. **All'interno dei progetti**, con possibilità di condivisione sui social.
3. Poi (secondo giro): un trafiletto **"I nostri social"** con i link, più visibile, nel footer e in ogni evento.

Account forniti:
- Facebook: `https://www.facebook.com/people/Rete-Italiana-Disabili-ets/61579720119544/`
- Instagram (nazionale): `https://www.instagram.com/reteitalianadisabili/`
- Instagram (Sicilia): `https://www.instagram.com/reteitalianadisabili_sicilia/`

---

## Analisi iniziale — cosa esisteva già

Buona parte dell'infrastruttura era **già presente** e non è stato necessario ricostruirla:

| Funzionalità | Stato pre-esistente |
|---|---|
| Social nel footer (`SocialLinks`) | ✅ Facebook, Instagram, YouTube |
| Social nella pagina Contatti | ✅ Presente |
| Condivisione nei progetti (`ShareButtons`) | ✅ Facebook, WhatsApp, copia link — su ogni pagina `/progetti/[slug]` |

**Veri scarti individuati:**
- Instagram **Sicilia** non presente da nessuna parte → da aggiungere.
- URL Facebook in formato diverso da quello fornito → da aggiornare.
- Instagram nazionale già corretto.

---

## Decisioni di design (confermate dall'utente)

1. Instagram Sicilia aggiunto **nel footer e in Contatti**, con etichetta "Sicilia" per distinguerlo dall'Instagram nazionale (due icone Instagram altrimenti identiche).
2. URL Facebook **aggiornato** a quello fornito.
3. Condivisione nei progetti **lasciata invariata** (Facebook, WhatsApp, copia link).
4. Trafiletto "I nostri social" (titolo + icone) nel footer e **in ogni card evento**.

---

## Modifiche implementate

### 1. Dati / configurazione
- `src/config/site.ts`
  - `facebook` aggiornato a `.../people/Rete-Italiana-Disabili-ets/61579720119544/`
  - aggiunto `instagramSicilia: https://www.instagram.com/reteitalianadisabili_sicilia/`

### 2. Componenti
- `src/components/common/social-links.tsx`
  - aggiunta voce **Instagram Sicilia** con etichetta testuale "Sicilia"
  - mantenuta accessibilità (area di tocco 44px, `aria-label` "Instagram Sicilia"); aggiunto `flex-wrap`
- `src/components/common/social-callout.tsx` — **nuovo** componente riutilizzabile: titolo "I nostri social" + `SocialLinks`
- `src/components/layout/site-footer.tsx` — usa `SocialCallout` (icone ora titolate; visibile su tutte le pagine)
- `src/components/sections/upcoming-events.tsx` — `SocialCallout` in fondo a ogni card evento, sotto i CTA, con separatore

### File toccati
```
M  src/config/site.ts
M  src/components/common/social-links.tsx
A  src/components/common/social-callout.tsx
M  src/components/layout/site-footer.tsx
M  src/components/sections/upcoming-events.tsx
```

---

## Verifiche

- `npx tsc --noEmit` → **exit 0**
- `npx eslint` sui file toccati → **exit 0**
- HTML renderizzato dal dev server (`localhost:3000`): "I nostri social" presente nel footer e in ogni card evento; link Instagram Sicilia presenti in footer, card e Contatti; URL Facebook aggiornato.
  - (I conteggi grezzi via `grep` risultano raddoppiati perché Next.js App Router include anche il payload RSC nell'HTML — coerenti con footer + 3 card evento.)

---

## Stato pubblicazione

- Commit feature `a68ef90` **già pushato** su `origin/main` (`ceba639..a68ef90`).
- Se il repo è collegato a deploy automatico (Vercel/GitHub), il deploy in produzione è partito con quel push.

---

## In sospeso

- Server dev ancora attivo in background su `localhost:3000` (da fermare a fine controlli).
- Cartelle/asset non tracciati (`a tutto campo inclusivo/`, `eventi giugno/`, `eventi luglio/`, `sponsor-contact.png`) — non toccati; da decidere se aggiungere a git o ignorare.
- Pagina Contatti: `SocialLinks` lasciato "nudo" (ha già il suo `<h3>Social</h3>`); il trafiletto "I nostri social" arriva comunque dal footer.
