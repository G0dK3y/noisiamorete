import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  subject: z.string().min(3, "L'oggetto è obbligatorio"),
  message: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri"),
})

export type ContactFormData = z.infer<typeof contactSchema>
