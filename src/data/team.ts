export interface TeamMember {
  name: string
  role: string
  bio: string
  quote: string
  quoteAttribution: string
  image: string
  details: string[]
}

export const president: TeamMember = {
  name: "Katiuscia Girolametti",
  role: "Presidente Nazionale",
  bio: "Ogni giorno ho un obiettivo, quello di essere al fianco delle famiglie! Dono il mio tempo, la mia esperienza come mamma caregiver e il mio sostegno per abbattere le barriere culturali ancora oggi troppo invalidanti, attraverso la costruzione sempre più ampia della rete a partire da obiettivi concreti.",
  quote: "L'unica disabilità nella vita è il cattivo atteggiamento",
  quoteAttribution: "Scott Hamilton",
  image: "/images/team/katiuscia-girolametti.jpg",
  details: [
    "Genitore caregiver",
    "Scrittrice",
    "Operatore tecnico dei servizi di marketing nell'ambito turistico",
  ],
}
