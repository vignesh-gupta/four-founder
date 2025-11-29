import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
}

export function SectionHeader({ title, subtitle, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      {subtitle && (
        <p className="text-sm font-medium text-primary tracking-wider uppercase">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}