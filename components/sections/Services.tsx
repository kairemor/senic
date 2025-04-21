import React from "react";
import { SectionHeading } from "../ui/section-heading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ServiceSection } from "@/lib/data";

function Services({ data }: { data: ServiceSection }) {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nos Services"
          subtitle={data.subtitle}
          className="mb-16"
          splitTitle={true}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service, index) => {
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
  );
}

export default Services;
