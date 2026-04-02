"use client"

import { useEffect, useState } from "react"
import { Minus, Plus, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "font-size-level"
const MIN_LEVEL = -2
const MAX_LEVEL = 4
const STEP_PERCENT = 12.5

export function FontSizeControl() {
  const [level, setLevel] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = parseInt(stored, 10)
      if (!isNaN(parsed) && parsed >= MIN_LEVEL && parsed <= MAX_LEVEL) {
        setLevel(parsed)
        applyFontSize(parsed)
      }
    }
  }, [])

  function applyFontSize(newLevel: number) {
    const percent = 100 + newLevel * STEP_PERCENT
    document.documentElement.style.fontSize = `${percent}%`
  }

  function change(newLevel: number) {
    setLevel(newLevel)
    applyFontSize(newLevel)
    localStorage.setItem(STORAGE_KEY, String(newLevel))
  }

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Dimensione testo">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => change(Math.max(MIN_LEVEL, level - 1))}
        disabled={level <= MIN_LEVEL}
        aria-label="Riduci dimensione testo"
        className="h-9 w-9"
      >
        <Minus className="h-4 w-4" aria-hidden="true" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => change(0)}
        disabled={level === 0}
        aria-label="Ripristina dimensione testo"
        className="h-9 w-9"
      >
        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => change(Math.min(MAX_LEVEL, level + 1))}
        disabled={level >= MAX_LEVEL}
        aria-label="Aumenta dimensione testo"
        className="h-9 w-9"
      >
        <Plus className="h-4 w-4" aria-hidden="true" />
      </Button>
      <span className="sr-only" aria-live="polite">
        {level === 0
          ? "Dimensione testo predefinita"
          : `Dimensione testo ${100 + level * STEP_PERCENT}%`}
      </span>
    </div>
  )
}
