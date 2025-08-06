import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_SLICES = 5;

const RevealLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 3000); // Match with animation time

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex">
      {[...Array(NUM_SLICES)].map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 h-full"
          style={{ backgroundColor: "var(--color-primary)" }} // Change to your brand color
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default RevealLoader;
