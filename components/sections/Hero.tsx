import { HeroSection } from "@/lib/data";
import React from "react";
import { Button } from "../ui/button";

function Hero({ data }: { data: HeroSection }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2560&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {data.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-xl text-gray-300 [animation-delay:200ms]">
          {data.subheading}
        </p>
        <div className="mt-10 animate-fade-up [animation-delay:400ms]">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {data.cta}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-16 w-8 rounded-full border-2 border-white p-2">
          <div className="h-3 w-full rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
