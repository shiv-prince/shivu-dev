import { motion } from "motion/react";
import { useElementInView } from "../hooks/useScrollTrigger";
import Particles from "./Particles";

const Hero = () => {
  const { ref, isVisible } = useElementInView();

  return (
    <div className="max-w-6xl mx-auto px-4 h-auto my-auto pt-5 md:pt-10">
      <motion.div
        ref={ref}
        className="relative w-full h-auto pb-5 sm:pb-16 scroll-smooth rounded-2xl align-middle bg-primary overflow-hidden"
        initial={{ opacity: 0, y: 0 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* ⬇️ Particle Animation Inside Card */}
        <div className="absolute inset-0 z-0 h-screen w-full">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={500}
            particleSpread={5}
            speed={0.15}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={true}
          />
        </div>

       
        {/* <div className="fixed left-0 right-0 bottom-8 mx-auto max-w-[1200px] z-50 flex justify-center items-center">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex gap-4 text-black md:text-gray-700 bg-white/10 backdrop-blur-[3px] border border-white/90 shadow-2xl rounded-2xl px-5 py-4 hover:bg-white/40 hover:backdrop-blur-lg transition duration-300"
          >
            <motion.a whileHover={{ color: "#000" }} href="#">Home</motion.a>
            <motion.a whileHover={{ color: "#000" }} href="#about">About</motion.a>
            <motion.a whileHover={{ color: "#000" }} href="#experience">Projects</motion.a>
            <motion.a whileHover={{ color: "#000" }} href="#contact">Contact</motion.a>
          </motion.nav>
        </div> */}

        <div className="sm:h-[50px] h-5"></div>

        <motion.img
          className="mx-auto my-auto w-[90vh] object-contain align-middle z-10 relative"
          src="/hero.png"
          alt="Hero"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />

        <motion.div
          className="text-white  bg-white/30 backdrop-blur-[10px] border border-white/90 shadow-2xl w-fit flex items-center justify-center mx-auto rounded-4xl px-4 py-1 mt-2.5 z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1>Bengaluru, Karnataka</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
