"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useKonamiListener } from "@/lib/cheats";

export default function KonamiListener() {
  const [toast, setToast] = useState<null | { msg: string; color: string }>(
    null,
  );

  useKonamiListener((enabled) => {
    setToast({
      msg: enabled ? "◆ CHEATS ENABLED" : "◆ CHEATS DISABLED",
      color: enabled ? "var(--color-neon-yellow)" : "var(--color-neon-magenta)",
    });
    window.setTimeout(() => setToast(null), 2500);
  });

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border bg-[var(--color-crt)]/90 px-5 py-2.5 text-[10px] tracking-[0.35em] shadow-[0_0_30px_rgba(250,204,21,0.25)] backdrop-blur"
          style={{
            fontFamily: "var(--font-accent)",
            color: toast.color,
            borderColor: toast.color,
          }}
        >
          {toast.msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
