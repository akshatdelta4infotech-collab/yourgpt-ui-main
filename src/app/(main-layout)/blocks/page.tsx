import CtaSections from "../components/CtaSections";
import Landingpageone from "../components/Landingpageone";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Pattern bar - full viewport width, fixed at top */}
      <div
        className="fixed top-12 left-0 w-screen h-7 z-[70]"
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
      ></div>

      {/* Content wrapper with proper spacing */}
      <div className="relative pt-6 overflow-x-hidden">
        {/* Vertical lines positioned outside content area */}
        <div className="fixed top-0 bottom-0 left-[17vw] w-px bg-foreground/10 z-20 hidden lg:block"></div>
        <div className="fixed top-0 bottom-0 right-[17vw] w-px bg-foreground/10 z-20 hidden lg:block"></div>

        {/* Content with max width and centering */}
        <div className="max-w-7xl mx-auto px-6 overflow-x-hidden">
          {/* Render your section components */}
          <CtaSections />
          <CtaSections variant="email" />
          <CtaSections />
          <CtaSections variant="cta" />
          <CtaSections variant="cta2" />
          <Landingpageone />

          {/* Footer Divider */}
          <div className="mt-16 mb-16">
            <hr className="border-t border-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
