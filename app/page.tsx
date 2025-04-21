"use client";

import { heroSection, servicesSection, aboutSection } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
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
            {heroSection.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-xl text-gray-300 [animation-delay:200ms]">
            {heroSection.subheading}
          </p>
          <div className="mt-10 animate-fade-up [animation-delay:400ms]">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {heroSection.cta}
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

      {/* Services Section */}
      <section
        id="services"
        className="relative bg-background py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle={servicesSection.subtitle}
            className="mb-16"
            splitTitle={true}
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesSection.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
                >
                  <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center">
                    {/* Diamond shape background */}
                    <div className="absolute inset-0 rotate-45 transform bg-primary/10" />
                    <Icon className="relative h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="group-hover:translate-x-2 transition-transform duration-300 text-primary"
                  >
                    En savoir plus →
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[600px]"
            >
              <img
                src={aboutSection.image}
                alt="Industrial infrastructure"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <SectionHeading
                title={aboutSection.title}
                align="left"
                splitTitle={true}
                className="mb-6"
              />
              
              <p className="mb-6 text-lg text-muted-foreground">
                {aboutSection.description}
              </p>
              <p className="mb-8 text-muted-foreground">
                {aboutSection.longDescription}
              </p>

              {/* Stats */}
              <div className="mb-8 grid grid-cols-3 gap-4">
                {aboutSection.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-fit bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {aboutSection.cta}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}