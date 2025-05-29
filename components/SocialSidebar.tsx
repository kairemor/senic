"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  MessageCircleMore,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SocialSidebar() {
  const socialLinks = [
    {
      icon: MessageCircleMore,
      label: "Connect on Whatsapp",
      url: "https://wa.me/221764871740",
      color: "#18ff62",
    },
    {
      icon: Facebook,
      label: "Connect on Facebook",
      url: "#",
      color: "#1877f2",
    },
    { icon: Twitter, label: "Connect on Twitter", url: "#", color: "#1da1f2" },
    {
      icon: Linkedin,
      label: "Connect on LinkedIn",
      url: "#",
      color: "#0077b5",
    },
    { icon: Share2, label: "Share", url: "#", color: "#ff4500" },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-30 hidden md:block"
    >
      <div className="flex flex-col space-y-1 bg-white/10 backdrop-blur-sm rounded-r-lg shadow-md overflow-hidden">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <a
              key={index}
              href={social.url}
              aria-label={social.label}
              className="p-3 text-white hover:bg-white/20 transition-colors duration-300 relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{social.label}</span>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
