"use client";

import { motion } from "framer-motion";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <motion.div>{children}</motion.div>;
}
