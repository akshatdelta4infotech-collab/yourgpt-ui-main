import CtaSections from "../components/CtaSections";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* Pattern bar only once */}
      <div
        className="w-full h-6 absolute left-0 right-0 mb-5"
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

      {/* 🔹 Vertical lines across whole page */}
      <div className="absolute top-0 bottom-0 h-[3300px] left-1/6 w-px bg-foreground/10"></div>
      <div className="absolute top-0 bottom-0 h-[3300px] right-1/6 w-px bg-foreground/10"></div>

      {/* Render your section component */}
      <CtaSections />
      <CtaSections variant="email" />
      <CtaSections />
      <CtaSections variant="cta" />
      <CtaSections variant="cta2" />

      {/* 🔹 Footer Divider */}
      <div className="mt-16 mb-16">
        <hr className="border-t border-border" />
      </div>
    </div>
  );
}
