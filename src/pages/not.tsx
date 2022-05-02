import React from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        This page doesn't exist.
      </motion.h2>
    </>
  );
}
