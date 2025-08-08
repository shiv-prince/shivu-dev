import { motion } from "framer-motion";

export default function CodeLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary z-[9999]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="text-white text-6xl font-bold select-none"
      >
        {"</>"}
      </motion.div>
    </div>
  );
}
