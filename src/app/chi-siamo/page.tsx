import type { Metadata } from "next"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { generatePageMetadata } from "@/lib/metadata"
import { president } from "@/data/team"

export const metadata: Metadata = generatePageMetadata({
  title: "Chi siamo",
  description:
    "Scopri chi siamo, la nostra storia e il nostro impegno per l'inclusione delle persone con disabilità in Italia.",
  path: "/chi-siamo",
})

const objectives = [
  "Promozione e sviluppo rapporti con il mondo delle disabilità",
  "Favorire l'inserimento e la collaborazione delle persone disabili nel mondo del lavoro in maniera produttiva e professionale",
  "Promuovere e sviluppare ricerche per la realizzazione di oggetti d'uso ad utenza ampliata, disabilità temporanea e permanente in collaborazione con centri specializzati",
  "Definire una nuova cultura dell'uguaglianza nella diversità con azioni indirizzate al mondo della scuola",
]

export default function ChiSiamoPage() {
  return (
    <>
      <PageHeader
        title="Chi siamo"
        description="Il nostro impegno nel sociale dal 2020"
        breadcrumbs={[{ label: "Chi siamo" }]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Il nostro impegno nel sociale</h2>
            <p className="text-lg text-muted-foreground italic">
              {president.bio}
            </p>
            <figure>
              <blockquote className="border-l-4 border-primary pl-4 text-lg font-medium italic">
                <p>&ldquo;{president.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-2 pl-4 text-sm text-muted-foreground">
                — {president.name}, {president.role}
              </figcaption>
            </figure>
            <p className="text-muted-foreground">
              Nella vita di tutti i giorni oltre ad essere genitore,{" "}
              {president.name} fa parte della Consulta Disabilità del Comune di
              Ciampino, è una scrittrice e operatore tecnico dei servizi di
              marketing nell'ambito turistico.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Operiamo su tutto il territorio Nazionale
            </h2>
            <p className="text-muted-foreground">
              Rete Italiana Disabili, fondata nel 2020 da un gruppo di persone
              ambiziose che hanno seguito con determinazione obiettivi mirati
              all'inclusione sociale delle persone con disabilità.
            </p>
            <ul className="space-y-3">
              {objectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
