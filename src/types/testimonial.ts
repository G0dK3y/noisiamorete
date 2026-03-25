export interface Testimonial {
  id: string
  quote: string
  author: string
  role?: string
  source?: string
  sourceUrl?: string
  type: "press" | "member" | "donor"
}
