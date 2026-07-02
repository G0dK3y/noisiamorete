import { SocialLinks } from "@/components/common/social-links"
import { cn } from "@/lib/utils"

export function SocialCallout({
  className,
  headingClassName,
}: {
  className?: string
  headingClassName?: string
}) {
  return (
    <div className={className}>
      <p className={cn("mb-2 text-sm font-semibold", headingClassName)}>
        I nostri social
      </p>
      <SocialLinks />
    </div>
  )
}
