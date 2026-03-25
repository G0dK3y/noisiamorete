"use client"

import { useEffect, useRef, useState } from "react"
import { stats } from "@/data/stats"

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)

          if (prefersReducedMotion) {
            setCount(target)
            return
          }

          const startTime = performance.now()
          function animate(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, started])

  return { count, ref }
}

function StatItem({
  value,
  label,
  description,
}: {
  value: number
  label: string
  description: string
}) {
  const { count, ref } = useCountUp(value)

  return (
    <div ref={ref} className="text-center" aria-label={`${label}: ${value.toLocaleString("it-IT")}`}>
      <p className="font-mono text-4xl font-bold text-primary sm:text-5xl" aria-hidden="true">
        {count.toLocaleString("it-IT")}
      </p>
      <p className="mt-2 text-lg font-semibold">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export function StatsCounter() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <StatItem
          key={stat.id}
          value={stat.value}
          label={stat.label}
          description={stat.description}
        />
      ))}
    </div>
  )
}
