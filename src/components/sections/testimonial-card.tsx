import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/types/testimonial"

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-6">
        <Quote className="mb-3 h-6 w-6 text-primary/50" aria-hidden="true" />
        <figure className="flex flex-1 flex-col">
          <blockquote className="flex-1 text-muted-foreground italic">
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-4 border-t border-border pt-4">
            <p className="font-semibold">{testimonial.author}</p>
            {testimonial.role && (
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            )}
          </figcaption>
        </figure>
      </CardContent>
    </Card>
  )
}
