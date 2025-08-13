import { motion } from "motion/react";
import AppCard from "./AppCard";

const Exp = () => {
  return (
    <div className="max-w-[1200px]mx-auto px-4 my-auto flex-col items-center justify-center mt-8 pt-5 ">
      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h1 className="text-black text-3xl font-medium flex justify-start md:justify-center mb-6 gap-2 dark:text-white">
  <span>Projects</span>
</h1>
      </motion.div>

      {/* Cards Wrapper */}
      <div className="flex flex-col items-center justify-center space-y-5">
        {[...cards].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 * index }}
            viewport={{ once: false }}
          >
            <AppCard {...card} />
          </motion.div>
        ))}

       
      </div>
    </div>
  );
};

// Extracted card data for cleaner map usage
const cards = [
  {
    appName: "Xelend",
    appIcon:
      "./Xeleneicon.webp",
    description:
      "Xelend is a full-stack extension plugin designed for financial institutions, including Microfinance, NBFCs, and Banks.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.stayright.xlend&pcampaignid=web_share",
    playStoreImage:
      "https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png",
    phoneMockupImage: "./xelend.png",
  },
  {
    appName: "AceMitra",
    appIcon:
      "./acemitraicon.webp",
    description:
      "AceMitra is a comprehensive platform designed to empower micro-entrepreneurs and small businesses.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.stayright.acemitra&pcampaignid=web_share",
    playStoreImage:
      "https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png",
    phoneMockupImage: "./acemitra.png",
  },
  {
    appName: "Acehours",
    appIcon: "./acehours.webp",
    description:
      "Acehours, the ultimate solution for SMBs, empowers you to discover the perfect products and solutions to tackle your unique business challenges.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.stayright.acehours&pcampaignid=web_share",
    playStoreImage:
      "https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png",
    phoneMockupImage: "./acehours.png",
  },
  // {
  //   appName: "Greenverz",
  //   appIcon: "./greenverz.png",
  //   description:
  //     "Greenverz is a platform that connects users with eco-friendly products and services.",
  //   playStoreLink: "",
  //   playStoreImage:
  //     "https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png",
  //   phoneMockupImage: "./mockupgreen.png",
  // },
];

export default Exp;
