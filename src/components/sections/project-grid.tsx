import { FolderOpen } from "lucide-react"
import type { Project } from "@/types/project"
import { ProjectCard } from "@/components/sections/project-card"

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-12 text-center text-muted-foreground">
        <FolderOpen className="h-10 w-10" aria-hidden="true" />
        <p className="text-lg font-medium">Nuovi progetti in arrivo</p>
        <p className="text-sm">Stiamo preparando nuove iniziative. Torna a trovarci!</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
