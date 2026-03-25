export interface Project {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  coverImage: string
  gallery: string[]
  tags: string[]
  location?: string
  year: number
  pdfBrochure?: string
  featured: boolean
  partners?: string[]
}
