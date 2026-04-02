import type { Metadata } from "next"
import Link from "next/link"
import { Accessibility } from "lucide-react"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { generatePageMetadata } from "@/lib/metadata"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = generatePageMetadata({
  title: "Dichiarazione di accessibilità",
  description:
    "Dichiarazione di accessibilità del sito di Rete Italiana Disabili APS, conforme alle Linee Guida AgID e WCAG 2.1 livello AA.",
  path: "/accessibilita",
})

export default function AccessibilitaPage() {
  return (
    <>
      <PageHeader
        title="Dichiarazione di accessibilità"
        description="Il nostro impegno per un sito accessibile a tutti"
        breadcrumbs={[{ label: "Accessibilità" }]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="flex items-start gap-4">
            <Accessibility
              className="mt-1 h-8 w-8 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p className="text-lg text-muted-foreground">
              <strong>{siteConfig.name} APS</strong> si impegna a rendere il
              proprio sito web accessibile, in conformità alla Legge 4/2004
              (Legge Stanca), alle Linee Guida AgID
              sull&apos;accessibilità e alle{" "}
              <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>{" "}
              2.1 livello <strong>AA</strong>.
            </p>
          </div>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold">Stato di conformità</h2>
            <p className="text-muted-foreground">
              Il sito{" "}
              <strong>
                <Link href="/" className="underline hover:text-foreground">
                  {siteConfig.url}
                </Link>
              </strong>{" "}
              è <strong>parzialmente conforme</strong> ai requisiti previsti
              dalle WCAG 2.1 livello AA. Le non conformità e le eventuali
              deroghe sono elencate di seguito.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold">Misure adottate</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Navigazione da tastiera:</strong> tutte le
                  funzionalità sono utilizzabili senza mouse, con indicatori di
                  focus visibili.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Skip link:</strong> collegamento per saltare
                  direttamente al contenuto principale.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Struttura semantica:</strong> uso corretto di
                  intestazioni (h1–h3), landmark ARIA e ruoli semantici.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Testo alternativo:</strong> tutte le immagini
                  significative hanno attributi alt descrittivi.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Contrasto:</strong> i colori rispettano un rapporto di
                  contrasto minimo di 4.5:1 per il testo.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Riduzione del movimento:</strong> le animazioni vengono
                  disattivate quando l&apos;utente ha attivato{" "}
                  <code className="rounded bg-muted px-1 font-mono text-sm">
                    prefers-reduced-motion
                  </code>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Alto contrasto:</strong> supporto per{" "}
                  <code className="rounded bg-muted px-1 font-mono text-sm">
                    prefers-contrast: more
                  </code>{" "}
                  e Windows High Contrast (forced-colors).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Target touch:</strong> tutti gli elementi interattivi
                  hanno una dimensione minima di 44×44 pixel.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Moduli accessibili:</strong> i campi dei form hanno
                  etichette associate, messaggi di errore con{" "}
                  <code className="rounded bg-muted px-1 font-mono text-sm">
                    aria-describedby
                  </code>{" "}
                  e regioni live per gli annunci.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  <strong>Breadcrumb strutturati:</strong> navigazione con
                  Schema.org JSON-LD per tecnologie assistive e motori di
                  ricerca.
                </span>
              </li>
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold">Contenuti non accessibili</h2>
            <p className="text-muted-foreground">
              I documenti PDF (moduli di iscrizione e bilanci) potrebbero non
              essere completamente accessibili tramite screen reader. Stiamo
              lavorando per fornire versioni alternative in formato accessibile.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold">Tecnologie compatibili</h2>
            <p className="text-muted-foreground">
              Il sito è progettato per essere compatibile con le seguenti
              tecnologie assistive:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                Screen reader (NVDA, JAWS, VoiceOver, TalkBack)
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                Navigazione esclusivamente da tastiera
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                Software di ingrandimento schermo
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                Modalità alto contrasto del sistema operativo
              </li>
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold">Segnalazioni</h2>
            <p className="text-muted-foreground">
              Se riscontri problemi di accessibilità su questo sito, ti
              invitiamo a segnalarceli. Puoi contattarci tramite:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  Email:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="underline transition-colors hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>
                  Pagina{" "}
                  <Link
                    href="/contatti"
                    className="underline transition-colors hover:text-foreground"
                  >
                    Contatti
                  </Link>
                </span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Cercheremo di rispondere entro 5 giorni lavorativi.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold">Procedura di attuazione</h2>
            <p className="text-muted-foreground">
              In caso di risposta insoddisfacente, è possibile inviare una
              segnalazione al Difensore Civico per il Digitale, come previsto
              dall&apos;art. 3-quinquies della Legge 4/2004.
            </p>
          </article>

          <div className="rounded-lg border border-border bg-card p-5 text-sm text-muted-foreground">
            <p>
              <strong>Ultima revisione:</strong> Aprile 2025
            </p>
            <p className="mt-1">
              Questa dichiarazione è stata redatta in conformità alle Linee Guida
              sull&apos;accessibilità degli strumenti informatici emanate
              dall&apos;Agenzia per l&apos;Italia Digitale (AgID).
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
