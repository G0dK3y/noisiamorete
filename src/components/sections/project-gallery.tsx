"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"

type MediaItem = { type: "image" | "video"; src: string }

interface ProjectGalleryProps {
  images: string[]
  videos?: string[]
  projectTitle: string
}

export function ProjectGallery({ images, videos = [], projectTitle }: ProjectGalleryProps) {
  const media: MediaItem[] = [
    ...images.map((src): MediaItem => ({ type: "image", src })),
    ...videos.map((src): MediaItem => ({ type: "video", src })),
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isOpen = openIndex !== null

  const close = useCallback(() => setOpenIndex(null), [])
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + media.length) % media.length)),
    [media.length]
  )
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % media.length)),
    [media.length]
  )

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowLeft") prev()
      else if (e.key === "ArrowRight") next()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKey)
    }
  }, [isOpen, close, prev, next])

  if (media.length === 0) return null

  const countLabel =
    videos.length > 0
      ? `${images.length} foto e ${videos.length} video`
      : `${images.length} foto`

  return (
    <section aria-label="Galleria foto e video">
      <h2 className="mb-4 text-2xl font-bold">Galleria</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        {countLabel} — clicca per ingrandire
      </p>

      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {media.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-md bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={`Apri ${item.type === "video" ? "video" : "foto"} ${i + 1} di ${media.length}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`${projectTitle} — foto ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  loading={i < 8 ? "eager" : "lazy"}
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    preload="metadata"
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors group-hover:bg-black/75">
                      <Play className="ml-0.5 h-5 w-5" />
                    </span>
                  </span>
                </>
              )}
            </button>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${media[openIndex].type === "video" ? "Video" : "Foto"} ${openIndex + 1} di ${media.length}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Chiudi galleria"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">
            {openIndex + 1} / {media.length}
          </span>

          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
                aria-label="Contenuto precedente"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
                aria-label="Contenuto successivo"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}

          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {media[openIndex].type === "image" ? (
              <Image
                key={media[openIndex].src}
                src={media[openIndex].src}
                alt={`${projectTitle} — foto ${openIndex + 1} di ${media.length}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            ) : (
              <video
                key={media[openIndex].src}
                src={media[openIndex].src}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}
