interface SectionWrapperProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
  id?: string
}

export function SectionWrapper({
  children,
  title,
  subtitle,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="mb-10">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
