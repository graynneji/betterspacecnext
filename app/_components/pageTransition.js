"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <div style={{ overflow: "hidden" }}>
      {" "}
      {/* Prevents layout shifts */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ width: "100%", marginTop: "60px" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
