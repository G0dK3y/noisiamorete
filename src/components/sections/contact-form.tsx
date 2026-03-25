"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, Loader2, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema, type ContactFormData } from "@/lib/contact-schema"
import { siteConfig } from "@/config/site"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData & { website?: string }) {
    // Honeypot: if filled, silently reject
    if (data.website) {
      setStatus("sent")
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Errore nell'invio")
      setStatus("sent")
      reset()
    } catch {
      const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Nome: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`
      window.open(mailto)
      setStatus("sent")
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8 text-center">
        <CheckCircle className="h-12 w-12 text-success" aria-hidden="true" />
        <h3 className="text-xl font-semibold">Messaggio inviato!</h3>
        <p className="text-muted-foreground">
          Grazie per averci contattato. Ti risponderemo al più presto.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setStatus("idle")
            reset()
          }}
        >
          Invia un altro messaggio
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate aria-busy={status === "sending"}>
      {/* Honeypot - hidden from real users, visible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Non compilare questo campo</label>
        <input
          type="text"
          id="website"
          {...register("website" as keyof ContactFormData)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Il tuo nome
        </label>
        <Input
          id="name"
          {...register("name")}
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          La tua email
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium">
          Oggetto
        </label>
        <Input
          id="subject"
          {...register("subject")}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Il tuo messaggio
        </label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === "sending"} size="lg" aria-disabled={status === "sending"}>
        {status === "sending" ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="mr-2 h-4 w-4" aria-hidden="true" />
        )}
        {status === "sending" ? "Invio in corso…" : "Invia messaggio"}
      </Button>

      <div aria-live="polite">
        {status === "error" && (
          <p className="text-sm text-destructive">
            Si è verificato un errore. Riprova o scrivici direttamente a{" "}
            <Link href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </Link>
          </p>
        )}
      </div>
    </form>
  )
}
