import type { Metadata } from "next"
import { Scale } from "lucide-react"
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
              Nella vita di tutti i giorni, oltre ad essere genitore,{" "}
              {president.name} è una scrittrice e operatore tecnico dei servizi
              di marketing nell&apos;ambito turistico.
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

      <SectionWrapper title="Statuto dell'Associazione">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-primary" aria-hidden="true" />
            <p className="text-lg text-muted-foreground">
              Lo Statuto disciplina la vita associativa di{" "}
              <strong>Rete Italiana Disabili — APS</strong>, redatto ai sensi del
              D.Lgs. 117/2017 (Codice del Terzo Settore). C.F.{" "}
              <span className="font-mono">94083440589</span>.
            </p>
          </div>

          <nav aria-label="Indice dello statuto" className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-3 font-semibold">Indice degli articoli</h3>
            <ul className="grid gap-1 text-sm sm:grid-cols-2">
              <li><a href="#art-1" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 1 — Costituzione</a></li>
              <li><a href="#art-2" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 2 — Sede</a></li>
              <li><a href="#art-4" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 4 — Oggetto e finalità</a></li>
              <li><a href="#art-5" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 5 — Attività di interesse generale</a></li>
              <li><a href="#art-6" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 6 — Associati</a></li>
              <li><a href="#art-7" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 7 — Diritti e doveri</a></li>
              <li><a href="#art-8" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 8 — Perdita qualità di associato</a></li>
              <li><a href="#art-9" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 9 — Organi</a></li>
              <li><a href="#art-10" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 10 — Assemblea</a></li>
              <li><a href="#art-11" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 11 — Convocazione</a></li>
              <li><a href="#art-12" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 12 — Consiglio Direttivo</a></li>
              <li><a href="#art-14" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 14 — Attribuzioni C.D.</a></li>
              <li><a href="#art-15" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 15 — Il Presidente</a></li>
              <li><a href="#art-16" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 16 — Segretario Tesoriere</a></li>
              <li><a href="#art-19" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 19 — Risorse economiche</a></li>
              <li><a href="#art-21" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 21 — Scioglimento</a></li>
              <li><a href="#art-22" className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">Art. 22 — Disposizioni generali</a></li>
            </ul>
          </nav>

          <div className="space-y-4">
            <article id="art-1" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 1 — Costituzione</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                L&apos;Associazione è senza scopo di lucro, adotta la qualifica
                di <strong>APS</strong> (Associazione di Promozione Sociale) ed è
                disciplinata dal presente Statuto e dagli eventuali regolamenti
                approvati secondo le norme statutarie.
              </p>
            </article>

            <article id="art-2" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 2 — Sede</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Via Liberiana 17, 00185 Roma. Il Consiglio Direttivo può
                trasferire la sede o istituire ulteriori sedi operative senza
                modifica statutaria.
              </p>
            </article>

            <article id="art-4" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 4 — Oggetto e finalità</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                L&apos;Associazione è apartitica, aconfessionale e senza scopo
                di lucro. Si basa sui principi di democraticità, trasparenza,
                solidarietà e pluralismo. Ha come scopo principale la difesa e
                la tutela dei diritti dei più deboli, in particolare
                nell&apos;ambito della disabilità.
              </p>
            </article>

            <article id="art-5" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">
                Art. 5 — Attività di interesse generale
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Educazione e formazione:</strong> istruzione,
                  formazione professionale, attività culturali con finalità
                  educativa e contrasto della povertà educativa.
                </li>
                <li>
                  <strong>Cultura e tempo libero:</strong> attività culturali,
                  artistiche, ricreative, turistiche e sportive dilettantistiche.
                </li>
                <li>
                  <strong>Tutela della disabilità:</strong> assistenza e
                  consulenza tecnica e giuridica, supporto ad amministratori di
                  sostegno, progetti di vita e inserimento lavorativo.
                </li>
                <li>
                  <strong>Gestione crisi:</strong> assistenza in procedure di
                  esdebitazione e gestione della crisi da sovra-indebitamento.
                </li>
              </ul>
            </article>

            <article id="art-6" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 6 — Associati</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Possono aderire tutte le persone che condividano gli scopi
                associativi. L&apos;ammissione è deliberata dal Consiglio
                Direttivo su domanda scritta. La quota associativa annuale non è
                trasmissibile né ripetibile.
              </p>
            </article>

            <article id="art-7" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">
                Art. 7 — Diritti e doveri degli associati
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tutti gli associati hanno uguali diritti e obblighi. Gli
                associati in regola con la quota hanno diritto di voto e di
                elettorato attivo e passivo. L&apos;attività dei volontari è
                personale, spontanea e gratuita.
              </p>
            </article>

            <article id="art-8" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">
                Art. 8 — Perdita della qualità di associato
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                La qualità di associato si perde per decesso, dimissioni
                volontarie, decadenza per morosità (dopo sei mesi) o esclusione
                per gravi motivi o comportamenti lesivi dell&apos;immagine
                dell&apos;Associazione.
              </p>
            </article>

            <article id="art-9" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 9 — Organi dell&apos;Associazione</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Gli organi sono: Assemblea degli Associati, Consiglio Direttivo,
                Presidente, Segretario Tesoriere e l&apos;eventuale Organo di
                Controllo. Tutte le cariche hanno durata triennale.
              </p>
            </article>

            <article id="art-10" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">
                Art. 10 — Assemblea degli Associati
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                L&apos;Assemblea è il massimo organo deliberante. Ha il compito
                di approvare il bilancio, eleggere il Consiglio Direttivo,
                deliberare sulle modifiche statutarie e sullo scioglimento
                dell&apos;ente.
              </p>
            </article>

            <article id="art-11" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">
                Art. 11 — Convocazione e validità dell&apos;Assemblea
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  L&apos;Assemblea è convocata dal Presidente almeno una volta
                  l&apos;anno per l&apos;approvazione dei bilanci.
                </li>
                <li>
                  In seconda convocazione è validamente costituita qualunque sia
                  il numero degli intervenuti.
                </li>
                <li>
                  Le deliberazioni sono prese a maggioranza dei voti; per le
                  modifiche statutarie occorre il voto favorevole di almeno due
                  terzi degli intervenuti.
                </li>
              </ul>
            </article>

            <article id="art-12" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 12 — Consiglio Direttivo</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  È l&apos;organo esecutivo, composto da 3 a 9 membri eletti tra
                  gli associati.
                </li>
                <li>
                  Elegge al suo interno il Presidente e il Vice Presidente e
                  assegna gli incarichi di Segretario e Tesoriere.
                </li>
              </ul>
            </article>

            <article id="art-14" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">
                Art. 14 — Attribuzioni del Consiglio Direttivo
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Gestisce l&apos;amministrazione ordinaria e straordinaria,
                predispone il bilancio consuntivo e preventivo e decide
                sull&apos;ammissione o esclusione degli associati.
              </p>
            </article>

            <article id="art-15" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 15 — Il Presidente</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Rappresenta legalmente l&apos;Associazione, convoca e presiede
                l&apos;Assemblea e il Consiglio Direttivo e compie gli atti di
                ordinaria amministrazione.
              </p>
            </article>

            <article id="art-16" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">
                Art. 16 — Il Segretario Tesoriere
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cura la redazione dei verbali, la tenuta dei libri sociali (soci
                e volontari) e dei libri contabili per la predisposizione del
                bilancio.
              </p>
            </article>

            <article id="art-19" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 19 — Risorse economiche</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Le entrate derivano da quote associative, erogazioni liberali,
                donazioni, raccolte fondi e contributi pubblici. È vietata la
                distribuzione di utili o avanzi di gestione tra gli associati.
              </p>
            </article>

            <article id="art-21" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 21 — Scioglimento</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                In caso di scioglimento, il patrimonio residuo sarà devoluto ad
                altro ente del Terzo Settore, previo parere dell&apos;ufficio
                competente del RUNTS.
              </p>
            </article>

            <article id="art-22" className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold">Art. 22 — Disposizioni generali</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Per quanto non previsto, si applicano le norme del D.Lgs.
                117/2017 (Codice del Terzo Settore) e del Codice Civile.
              </p>
            </article>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
