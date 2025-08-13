import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram ,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
const Contact = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:shivuprince771@gmail.com?subject=Hello Shivu";
  };

  return (
    <>
     
<motion.div
      className="flex items-center justify-center z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      
      <motion.div
        className="w-full mx-auto bg-[#fafafa] mt-8 px-10 flex flex-col items-center justify-between shadow-md mb-1 py-10 pb-30 z-10 dark:bg-[#404040] dark:text-white"
        initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >

        <h2 className="text-3xl font-bold text-gray-800 mb-4 z-10 dark:text-gray-200">Let's Connect</h2>
        <p className="text-gray-600 text-lg mb-4 text-center dark:text-gray-300">
          Your next idea deserves to be real,<br className="block md:hidden" /> let's make it happen.
        </p>
        <motion.button
          onClick={handleMailClick}
          className="bg-primary dark:bg-darkmode hover:bg-accent text-white font-medium py-3 px-10 rounded-full transition duration-300 mb-6 z-10 dark:hover:bg-gray-200 dark:hover:text-gray-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Email
        </motion.button>

        <div className="flex justify-center gap-6 text-2xl text-gray-600 z-10 dark:text-gray-50">
          <motion.a
            href="https://github.com/shiv-prince"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition dark:hover:text-white"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub className="h-8 w-8 md:h-6 md:w-6" />
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
      <div className="text-gray-500 text-sm mt-6 flex items-center space-x-2 z-10 justify-center dark:text-gray-300">
       <span className="font-medium text-gray-800 dark:text-gray-200">Designed by Me </span> <motion.span
       whileHover={{ scale: 1.2 }}
       >👀</motion.span> <span> | </span> <div className="flex mx-auto justify-center dark:text-gray-300">© 2025 All rights reserved.</div></div>  
       
      </motion.div>
      
     </motion.div>
     
    </>
    
  );
};

export default Contact;
