import { motion } from "motion/react";


const About = () => {
  //const { ref, isVisible } = useScrollTrigger();
  //  const handleMailClick = () => {
  //   window.location.href = "mailto:shivuprince771@gmail.com?subject=Hello Shivu";
  // };

  return (
    <div
      id="about"
      className="max-w-[1200px] mx-auto px-4 h-auto my-auto flex-col items-center justify-center align-middle pt-5"
      
    >
      <motion.div
        //ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={ { opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-black text-3xl font-medium flex justify-start md:justify-center mb-6 z-10">
          About
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 40 , filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ once: false, amount: 0.3 }} // triggers only once when 30% visible
        className="text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-left sm:text-center text-[1.3rem] z-10"
      >
        I'm a{" "}
        <span className="font-semibold text-span">Flutter Developer</span>{" "}
        with a strong focus on{" "}
        <span className="font-semibold ">UI/UX design</span> and
        experience in building production-grade mobile applications. I
        specialize in crafting smooth, responsive, and user-centric experiences
        using Flutter for both Android and iOS platforms. I’ve successfully
        deployed apps to the{" "}
        <span className="font-medium ">Play Store</span> and{" "}
        <span className="font-medium ">App Store</span>.
      </motion.p>
       {/* <motion.button
                onClick={handleMailClick}
                 initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ once: false, amount: 0.3 }} // triggers only once when 30% visible
                className="bg-primary hover:bg-accent text-white font-semibold py-3 px-6 mx-auto flex justify-center mt-5 rounded-lg transition duration-300 mb-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Now
              </motion.button> */}

              
    </div>
  );
};

export default About;
