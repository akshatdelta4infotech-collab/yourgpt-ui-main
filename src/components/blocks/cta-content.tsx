import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, ChevronRight, ArrowRight } from "lucide-react";

type CtaContentProps = {
  variant?: "default" | "email" | "third" | "lending" | "hosting";
};

export function CtaContent({ variant = "default" }: CtaContentProps) {
  if (variant === "email") {
    return (
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-semibold">Start Building</h2>
          <p className="mt-4 text-muted-foreground">
            Libero sapiente aliquam quibusdam aspernatur.
          </p>
          <div className="relative mt-12 max-w-md mx-auto">
            <span className="absolute inset-y-0 left-4 flex items-center text-muted-foreground">
              <Mail className="w-5 h-5" />
            </span>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full h-14 border border-border rounded-2xl pl-12 pr-28 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="absolute top-1/2 right-4 -translate-y-1/2 h-9 px-4 text-sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "third") {
    return (
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-semibold">Start Building</h2>
          <p className="mt-4 text-muted-foreground">
            Libero sapiente aliquam quibusdam aspernatur.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "lending") {
    return (
      <section className="relative w-full mx-auto bg-transparent flex items-center justify-center overflow-hidden mt-10 min-h-[60vh]">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="h-full w-full bg-gray-900"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
            Your next lending <br className="hidden sm:block" /> product awaits
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            For those who want more from their lending products, there's{" "}
            <br className="hidden sm:block" />
            Canopy. Get started today and never look back.
          </p>
          <Button
            className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-8 py-3 rounded-full text-base transition-all duration-200 transform hover:scale-105"
            size="lg"
          >
            Start now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    );
  }

  if (variant === "hosting") {
    return (
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Decorative vertical lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

        {/* Geometric shapes for visual interest */}
        <div className="absolute top-12 left-12 w-20 h-20 border border-white/10 rounded-lg transform rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-12 right-12 w-16 h-16 border border-white/10 transform -rotate-12 hidden lg:block"></div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          {/* Top badge */}
          <div className="mb-8">
            <Button
              variant="secondary"
              className="bg-gray-800/80 hover:bg-gray-700/80 text-white border-gray-600/50 rounded-full px-6 py-2 text-sm backdrop-blur-sm"
            >
              Flexible Plans for You
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Main heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-6 max-w-4xl leading-tight">
            Deploy your website
            <br />
            in seconds, not hours
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            With our state of the art, cutting edge hosting services, you can
            deploy your website in seconds.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full text-base transition-all duration-200 min-w-[140px]"
              size="lg"
            >
              Start a project
            </Button>

            <Button
              variant="secondary"
              className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full text-base transition-all duration-200 min-w-[140px]"
              size="lg"
            >
              Book a call
            </Button>
          </div>
        </div>

        {/* Bottom decorative gradient */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-semibold">Start Building</h2>
        <p className="mt-4 text-muted-foreground">
          Libero sapiente aliquam quibusdam aspernatur.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Book Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
