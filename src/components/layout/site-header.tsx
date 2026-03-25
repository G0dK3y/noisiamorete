"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart } from "lucide-react"
import { siteConfig } from "@/config/site"
import { mainNav, ctaNav } from "@/data/navigation"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex min-h-11 items-center gap-2" aria-label="Torna alla homepage">
            <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="hidden text-lg font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <nav
          aria-label="Navigazione principale"
          className="hidden items-center gap-1 md:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {ctaNav.map((item) =>
            item.highlight ? (
              <Button key={item.href} asChild size="sm" className="hidden sm:inline-flex">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ) : (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            )
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
