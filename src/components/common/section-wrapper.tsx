interface SectionWrapperProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
  id?: string
}

let sectionCounter = 0

export function SectionWrapper({
  children,
  title,
  subtitle,
  className,
  id,
}: SectionWrapperProps) {
  const headingId = title ? id ?? `section-${++sectionCounter}` : undefined

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${className ?? ""}`}
      aria-labelledby={headingId ? `${headingId}-heading` : undefined}
    >
      <div className="mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="mb-10">
            {title && (
              <h2
                id={headingId ? `${headingId}-heading` : undefined}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
