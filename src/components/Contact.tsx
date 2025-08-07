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
    <motion.div
      className="flex items-center justify-center pb-30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <motion.div
        className="max-w-3xl mx-auto bg-[#fafafa] rounded-3xl px-10 flex flex-col items-center justify-between shadow-md mb-1 py-10"
        initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h2>
        <p className="text-gray-600 mb-8">
          Whether you have a question, a project idea, or just want to say hello — my inbox is always open!
        </p>

        <motion.button
          onClick={handleMailClick}
          className="bg-primary hover:bg-accent text-white font-medium py-2 px-10 rounded-full transition duration-300 mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Email
        </motion.button>

        <div className="flex justify-center gap-6 text-2xl text-gray-600">
          <motion.a
            href="https://github.com/shiv-prince"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub className="h-8 w-8 md:h-6 md:w-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivu-bo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="h-8 w-8 md:h-6 md:w-6" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_shivu_prince_/profilecard/?igsh=M2ZubjNqNDVlc2Q3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram className="h-8 w-8 md:h-6 md:w-6"  />
          </motion.a>
          <motion.a
           className="hover:text-black transition"
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
      </motion.div>
    </motion.div>
  );
};

export default Contact;
