"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ImageOff } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types/project"

export function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg">
      <Link href={`/progetti/${project.slug}`} aria-label={`${project.title} — ${project.shortDescription}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {imgError ? (
            <div className="flex h-full items-center justify-center">
              <ImageOff className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
            </div>
          ) : (
            <Image
              src={project.coverImage}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <div className="p-4">
          <div className="mb-2 flex flex-wrap gap-1" aria-hidden="true">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="font-semibold leading-snug group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {project.shortDescription}
          </p>
          {project.location && (
            <p className="mt-2 text-xs text-muted-foreground">
              {project.location} &middot; {project.year}
            </p>
          )}
        </div>
      </Link>
    </article>
  )
}
