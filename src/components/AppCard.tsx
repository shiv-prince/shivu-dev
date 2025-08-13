import React, { useState } from "react";
import { motion } from "motion/react";

type AppCardProps = {
  appName: string;
  appIcon: string;
  description: string;
  playStoreLink?: string;
  playStoreImage: string;
  phoneMockupImage: string;
};

const AppCard: React.FC<AppCardProps> = ({
  appName,
  appIcon,
  description,
  playStoreLink,
  playStoreImage,
  phoneMockupImage,
}) => {
  const [showToast, setShowToast] = useState(false);

  const handlePlayStoreClick = () => {
    if (!playStoreLink) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      window.open(playStoreLink, "_blank");
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto bg-[#fafafa] rounded-3xl px-10 flex flex-col md:flex-row items-center justify-between shadow-md mb-1 pt-5 md:pt-0 dark:bg-[#404040] dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left section */}
      <div className="md:w-1/2 text-center md:text-left space-y-2">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <img src={appIcon} alt={`${appName} Icon`} className="w-12 h-12 rounded-lg" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{appName}</h2>
        </div>

        <p className="text-gray-500 text-base dark:text-gray-300">{description}</p>

        <div className="flex gap-4 justify-center md:justify-start mt-4">
          <motion.img
            src={playStoreImage}
            alt="Play Store"
            className="h-12 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlayStoreClick}
          />
        </div>
      </div>

      {/* Right section */}
      <motion.div
        className="md:w-1/2 overflow-hidden h-40 md:h-80 md:mt-0 flex justify-center items-baseline"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileHover={{ scale: 1.0 }}
        viewport={{ once: true }}
      >
        <img
          src={phoneMockupImage}
          alt="Phone Screenshot"
          className="w-[10rem] md:w-[14rem] md:translate-y-[10%]"
        />
      </motion.div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 md:left-1/2 md:-translate-x-1/2 bg-[#0d065f] text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Coming Soon on Play Store 🚀
        </div>
      )}
    </motion.div>
  );
};

export default AppCard;
