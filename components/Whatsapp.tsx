import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const WhatsAppBusinessButton = () => {
  // Replace this with your actual WhatsApp Business number (including country code, no + or spaces)
  const whatsappNumber = "221764871740";
  const defaultMessage =
    "Bonjour! Je suis intéressé par vos services. Pouvez-vous m'aider?";

  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* 
      <button
        onClick={handleWhatsAppRedirect}
        className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
        <span className="text-lg">Contactez-nous sur WhatsApp Business </span>
        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />

        {/* Ripple effect */}
      {/* <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div> */}
      {/* </button > */}

      <button
        onClick={handleWhatsAppRedirect}
        className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Contactez-nous sur WhatsApp
      </button>

      {/* Floating Action Button Style */}
      {/* <div className="pt-8">
          <p className="text-gray-600 mb-4">Floating action button style:</p>
          <button
            onClick={handleWhatsAppRedirect}
            className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center group"
          >
            <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
          </button>
        </div> */}
    </>
  );
};

export default WhatsAppBusinessButton;
