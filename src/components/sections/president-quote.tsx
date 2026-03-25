import { president } from "@/data/team"

export function PresidentQuote() {
  return (
    <figure className="mx-auto max-w-3xl">
      <blockquote className="border-l-4 border-primary pl-6 text-xl font-medium italic text-muted-foreground sm:text-2xl">
        <p>&ldquo;{president.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 pl-6">
        <p className="font-semibold">{president.name}</p>
        <p className="text-sm text-muted-foreground">{president.role}</p>
      </figcaption>
    </figure>
  )
}
