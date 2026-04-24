"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D assets/app initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b1220] text-[#00e5ff]"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="w-32 h-32 rounded-full border-t-2 border-b-2 border-l-0 border-r-0 border-[#00e5ff]/80"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute top-4 left-4 right-4 bottom-4 w-24 h-24 rounded-full border-l-2 border-r-2 border-t-0 border-b-0 border-[#14b8a6]/80"
        />
        <div className="mt-8 font-mono tracking-widest text-[#00e5ff] uppercase text-sm">
          System Initializing...
        </div>
        <motion.div
          className="w-48 h-1 mt-4 bg-gray-800 rounded overflow-hidden relative"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 bottom-0 bg-[#00e5ff]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
