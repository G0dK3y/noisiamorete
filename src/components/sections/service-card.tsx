import {
  Scale,
  FileText,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Trophy,
} from "lucide-react"
import type { Service } from "@/data/services"

const iconMap: Record<string, React.ElementType> = {
  Scale,
  FileText,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Trophy,
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? HeartPulse

  return (
    <div className="flex gap-4 rounded-lg border border-border p-5 transition-colors hover:bg-card">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold">{service.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
      </div>
    </div>
  )
}
