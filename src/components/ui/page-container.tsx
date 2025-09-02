import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Whether to show the decorative grid lines
   * @default true
   */
  showGridLines?: boolean;
  /**
   * Whether to show the pattern bar at the top
   * @default true
   */
  showPatternBar?: boolean;
}

export function PageContainer({
  children,
  className,
  showGridLines = false,
  showPatternBar = true,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground overflow-x-hidden relative",
        className
      )}
    >
      {/* Pattern bar - full width */}
      {showPatternBar && (
        <div
          className="w-full h-6"
          style={{
            backgroundImage: `repeating-linear-gradient(
              135deg, 
              color-mix(in srgb, var(--foreground) 5%, transparent) 0px,
              color-mix(in srgb, var(--foreground) 5%, transparent) 1px,
              transparent 1px,
              transparent 6px
            )`,
            backgroundColor: "var(--background)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
