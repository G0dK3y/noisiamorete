export interface Stat {
  id: string
  value: number
  label: string
  description: string
}

export const stats: Stat[] = [
  {
    id: "sostenitori",
    value: 2000,
    label: "Sostenitori",
    description:
      "Persone che ogni anno decidono di donare per realizzare i nostri progetti",
  },
  {
    id: "progetti",
    value: 50,
    label: "Progetti dal 2020",
    description:
      "Sensibilizzare ed educare alla diversità dal più piccolo essere umano al più grande",
  },
  {
    id: "ore-volontariato",
    value: 3000,
    label: "Ore di volontariato",
    description: "Tra consulenti, collaboratori e sostenitori",
  },
]
