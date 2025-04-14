import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-2xl bg-[#4CAF50] text-white font-semibold shadow-md transition duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};