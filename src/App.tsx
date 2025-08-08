import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Exp from "./components/Exp";
import RevealLoader from "./components/Loader";
import Skills from "./components/Skills";
import HeroNew from "./components/HeroNew";
import { motion , cancelFrame, frame } from "motion/react";
import ReactLenis from 'lenis/react'
import type { LenisRef } from 'lenis/react';


// 🔹 Loader Component Inline (you can extract it to its own file)


const App = () => {
  const [loading, setLoading] = useState(true);
   const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])


  useEffect(() => {
    // Simulate asset loading or splash timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);
  // const lenis = useLenis((lenis) => {
  //   // called every scroll
  //   // console.log(lenis)
  // })
  return loading ? (
    <RevealLoader onComplete={() => setLoading(false)} />
  ) : (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} >
      <div className="scroll-smooth overscroll-none">
        {/* ⬇️ Nav */}
        <div className="fixed left-0 right-0 bottom-8 mx-auto max-w-[1200px] z-50 flex justify-center items-center">
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
        </div>
        <HeroNew />
        <div id="about">
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div id="experience">
          <Exp />
        </div>
      </div>
</ReactLenis>
    </>
  );
};

export default App;
