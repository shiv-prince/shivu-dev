import { motion } from "motion/react";
import { MdLocationPin } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import GridPathWithMotion from "./GridPathWithMotion";
import DarkMode from "./DarkMode";

const HeroNew = () => {
  return (
    <>
    <GridPathWithMotion/>

     <motion.div
      initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
     className="h-auro bg-hero-pattern py-10 bg-cover bg-center flex flex-col items-center justify-center mtext-center z-10 ">
    <div className="flex items-center justify-center ">
      <motion.img 
      initial={{ opacity: 0.5, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      whileHover={{ scale: 1 , rotate: -10}}
      transition={{ duration: 0.5  , ease: "easeInOut" }}
      className="w-20 h-20 mr-3 rounded-2xl shadow-lg z-10" src="./shivu_dev.jpg" alt="homeimg"/>
      <h1 className="text-7xl md:text-7xl font-normal text-gray-900 font-display text-shadow-lg z-10 dark:text-gray-200">SHIVU</h1>

    </div >
     <p className="flex items-center justify-center text-xl text-gray-600 mt-4 z-10 dark:text-gray-50">Creative Fullstack Developer</p>
     <div className="flex justify-center gap-6 text-2xl text-gray-600 mt-5 z-10 dark:text-gray-50">
          <motion.a
            href="https://github.com/shiv-prince"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition dark:hover:text-white"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub className="h-8 w-8 md:h-6 md:w-6"/>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivu-bo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition dark:hover:text-white"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="h-8 w-8 md:h-6 md:w-6" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_shivu_prince_/profilecard/?igsh=M2ZubjNqNDVlc2Q3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition dark:hover:text-white"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram className="h-8 w-8 md:h-6 md:w-6"  />
          </motion.a>
          <motion.a
           className="hover:text-black transition dark:hover:text-white"
            whileHover={{ scale: 1.2 }}
  href="./Shivu-resume.pdf"
  download
  
>
  <FaDownload className="h-8 w-8 md:h-6 md:w-6"/>
</motion.a>
          {/* <motion.a
            href="mailto:yourmail@example.com"
            className="hover:text-red-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope />
          </motion.a> */}
        </div>
         <motion.div
          className="text-black  bg-white/10 backdrop-blur-[0.5px] border border-white/90 shadow-2xl w-fit flex items-center justify-center mx-auto rounded-4xl px-4 py-1 mt-5 z-10 relative dark:text-amber-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <MdLocationPin className="mr-2 "/>
          <h1>Bengaluru, Karnataka</h1>
        </motion.div>
      
   </motion.div>
   </>
  )
}

export default HeroNew