"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  splitTitle?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
  splitTitle = false,
}: SectionHeadingProps) {
  const words = splitTitle ? title.split(" ") : [title];

  return (
    <div
      className={cn(
        "space-y-4",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className
      )}
    >
      <motion.h2
        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {splitTitle ? (
          <>
            <span className="text-foreground">{words[0]} </span>
            <span className="text-primary">{words.slice(1).join(" ")}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mx-auto max-w-[700px] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
