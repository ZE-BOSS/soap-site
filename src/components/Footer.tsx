import React from "react";
import {
  Info,
  HelpCircle,
  FlaskConical,
  Truck
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-gray-900 text-white border-gray-300 text-[#1a1a1a] px-4 py-4 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-base font-medium">
          <a href="#about" className="flex items-center gap-2 hover:text-[#08785b] transition-colors">
            <Info size={18} /> About Us
          </a>
          <a href="#faq" className="flex items-center gap-2 hover:text-[#08785b] transition-colors">
            <HelpCircle size={18} /> FAQ
          </a>
          <a href="#ingredients" className="flex items-center gap-2 hover:text-[#08785b] transition-colors">
            <FlaskConical size={18} /> Ingredients
          </a>
          <a href="#shipping-policy" className="flex items-center gap-2 hover:text-[#08785b] transition-colors">
            <Truck size={18} /> Shipping Policy
          </a>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#aad4c4]" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-100">
          © 2025 <span className="font-semibold">Wenwaw</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
