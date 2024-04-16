"use client";

import { motion } from "framer-motion";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial state: fully transparent
      animate={{ opacity: 1 }} // Animation state: fully opaque
      transition={{ duration: 0.5 }} // Transition duration
    >
      {children}
    </motion.div>
  );
}
