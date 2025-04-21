"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/lib/data";
import { SectionHeading } from "../ui/section-heading";

interface ContactSectionProps {
  data: ContactSection;
}

export default function ContactUs({ data }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const getLabel = (field: keyof typeof data.formFields): string => {
    const formField = data.formFields[field];
    return "label" in formField && typeof formField.label === "string"
      ? formField.label
      : "";
  };

  const getPlaceholder = (field: keyof typeof data.formFields) => {
    const formField = data.formFields[field];
    return "placeholder" in formField &&
      typeof formField.placeholder === "string"
      ? formField.placeholder
      : "";
  };
  const getSubmitText = () => data.formFields.submit.text;

  const getSuccessMessage = () => "Message envoyé avec succès!";

  // Intersection observer for animation triggers
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Form handling
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div ref={sectionRef} className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <SectionHeading
              title="Contactez Nous"
              subtitle={data.subtitle}
              className="mb-16"
              splitTitle={true}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full p-2 mb-4">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {getSuccessMessage()}
                    </h3>
                    <p className="text-gray-600">
                      {"Nous vous contacterons très prochainement."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {getLabel("name")}*
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={getPlaceholder("name")}
                          required
                          className="w-full"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {getLabel("email")}*
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={getPlaceholder("email")}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Phone Field */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {getLabel("phone")}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={getPlaceholder("phone")}
                          className="w-full"
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {getLabel("subject")}*
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={getPlaceholder("subject")}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {getLabel("message")}*
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={getPlaceholder("message")}
                        rows={6}
                        required
                        className="w-full"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-md transition-colors duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            {"Envoi en cours..."}
                          </span>
                        ) : (
                          getSubmitText()
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information and Map */}
            <motion.div variants={itemVariants}>
              {/* Contact Information */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {"Informations de contact"}
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        {"Adresse"}
                      </h4>
                      <p className="text-gray-600">
                        {data.address.street} <br />
                        {data.address.city}, {data.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        {"Téléphone"}
                      </h4>
                      <p className="text-gray-600">
                        <a
                          href={`tel:${data.phone}`}
                          className="hover:text-primary transition-colors duration-300"
                        >
                          {data.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a
                          href={`mailto:${data.email}`}
                          className="hover:text-primary transition-colors duration-300"
                        >
                          {data.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
