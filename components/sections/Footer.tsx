import { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContactSection, FooterSection, siteConfig } from "@/lib/data";

interface FooterProps {
  data: FooterSection;
  contact: ContactSection;
  links: { href: string; name: string }[];
}

export default function Footer({ data, links, contact }: FooterProps) {
  const [email, setEmail] = useState("");

  // Social media icon mapping
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  interface FormEvent {
    preventDefault: () => void;
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteConfig.shortName}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {data.companyDescription}
            </p>
            <div className="flex space-x-3">
              {data.socialMedia.map((social, index) => {
                const SocialIcon =
                  socialIcons[social.icon as keyof typeof socialIcons] ||
                  Facebook;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{data.quickLinks}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">{data.newsletter.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={data.newsletter.placeholder}
                  className="bg-gray-800 text-white border-gray-700 focus:border-primary rounded-r-none"
                  required
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 rounded-l-none"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Contact Information */}
            <h3 className="text-xl font-bold mt-8 mb-4">{data.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  {contact.address.street}
                  {contact.address.city},{contact.address.country}
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 my-8" />

        {/* Bottom Section - Copyright */}
        <div className="text-center text-gray-500 text-sm">
          {/* {data.copyright} */}
          &copy;2025 <a href="https://kairemor.com">Mor Kaire</a>. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
