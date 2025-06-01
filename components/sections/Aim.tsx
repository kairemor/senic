import React from "react";
import { SectionHeading } from "../ui/section-heading";
import { AimSection } from "@/lib/data";
import { Award, CheckCircle, Leaf, Shield, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const icons = [Shield, Zap, Target, Award, Leaf];

function Aims({ data }: { data: AimSection }) {
  return (
    <section id="aims" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nos OBjectifs"
          subtitle={data.description}
          className="mb-16"
          splitTitle={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {data.aims.map((aim, index) => {
            const IconComponent = icons[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {aim}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Objectif clé</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Aims;
