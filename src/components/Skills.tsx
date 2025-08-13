import { motion } from "framer-motion";

const skills = [
  { name: "Flutter", src: "./Flutter.svg" },
  { name: "Dart", src: "./Dart.svg" },
  { name: "Java", src: "./Java.svg" },
  { name: "Kotlin", src: "./Kotlin.svg" },
  { name: "Python", src: "./Python.svg" },
  { name: "SQL", src: "./sql.svg" },
  { name: "VS Code", src: "./vscode.svg" },
  { name: "Android Studio", src: "./androidstudio.svg" },
  { name: "Figma", src: "./Figma.svg" },
  { name: "Xcode", src: "./Xcode.svg" },
  { name: "React", src: "./React.svg" },
];

const Skills = () => {
  return (
    <div className="relative max-w-4xl overflow-hidden py-10 mt-10 mx-auto">
      <motion.div
        className="flex mx-auto gap-5 md:gap-10 w-max animate-marquee"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[100px]"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <p className="mt-2 text-sm text-black dark:text-white">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
