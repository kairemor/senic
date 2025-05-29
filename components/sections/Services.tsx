import React from "react";
import { SectionHeading } from "../ui/section-heading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ServiceSection } from "@/lib/data";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { CheckCircle, ChevronsUpDown } from "lucide-react";

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
                {/* <Button
                  variant="link"
                  className="group-hover:translate-x-2 transition-transform duration-300 text-primary"
                >
                  En savoir plus →
                </Button> */}
                <CollapsibleDemo items={service.items} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CollapsibleDemo({
  items = [
    { title: "Repository 1", description: "Description of repository 1" },
    { title: "Repository 2", description: "Description of repository 2" },
    { title: "Repository 3", description: "Description of repository 3" },
  ],
}) {
  // State to control the collapsible open/close state
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[300px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-2 px-2 ml-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <Button
              variant="link"
              className="group-hover:translate-x-2 transition-transform duration-300 text-primary"
            >
              En savoir plus →
            </Button>
          </Button>
        </CollapsibleTrigger>
      </div>
      {/* <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @radix-ui/primitives
      </div> */}
      <CollapsibleContent className="space-y-1">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start space-x-1 p-1 rounded-lg hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
              </div>
              <div className="min-w-0">
                <span className="font-medium text-gray-800 text-sm">
                  {item.title}
                </span>
                <span className="text-gray-500 text-sm ml-2">
                  — {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default Services;
