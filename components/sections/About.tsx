import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { AboutSection } from "@/lib/data";

function About({ data }: { data: AboutSection }) {
  return (
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
              src={data.image}
              alt="Industrial infrastructure"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          {/* Right side - Content */}
          <div
            // initial={{ opacity: 0, x: 50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <SectionHeading
              title={data.title}
              align="left"
              splitTitle={true}
              className="mb-6"
            />

            <p className="mb-6 text-lg text-muted-foreground">
              {data.description}
            </p>
            <p className="mb-8 text-muted-foreground">{data.longDescription}</p>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-3 gap-4">
              {data.stats.map((stat, index) => (
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

            {/* <Button
              size="lg"
              className="w-fit bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {data.cta}
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
