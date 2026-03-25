export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: "consulenza-legale",
    title: "Consulenza legale",
    description:
      "Supporto legale specializzato per tutelare i diritti delle persone con disabilità e delle loro famiglie.",
    icon: "Scale",
  },
  {
    id: "caf",
    title: "CAF selezionati",
    description:
      "Assistenza fiscale e previdenziale tramite centri di assistenza fiscale qualificati e attenti alle esigenze specifiche.",
    icon: "FileText",
  },
  {
    id: "integrazione-scolastica",
    title: "Integrazione scolastica",
    description:
      "Personale di integrazione scolastico per garantire il diritto allo studio e all'inclusione educativa.",
    icon: "GraduationCap",
  },
  {
    id: "terapisti",
    title: "Terapisti medici formati",
    description:
      "Professionisti sanitari specializzati per percorsi terapeutici personalizzati e di qualità.",
    icon: "HeartPulse",
  },
  {
    id: "progetti-lavorativi",
    title: "Progetti lavorativi",
    description:
      "Inserimento e collaborazione delle persone disabili nel mondo del lavoro in maniera produttiva e professionale.",
    icon: "Briefcase",
  },
  {
    id: "progetti-sportivi",
    title: "Progetti sportivi",
    description:
      "Attività sportive inclusive per promuovere il benessere fisico, la socializzazione e l'integrazione attraverso lo sport.",
    icon: "Trophy",
  },
]
