"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiJavascript, SiReact, SiSpringboot, SiMysql, SiAmazonwebservices, SiDocker, SiHtml5, SiCss3, SiNodedotjs } from "react-icons/si";

export default function Hero() {
  const skills = [
    { name: "Js/Typescript", icon: <SiJavascript /> },
    { name: "React/Nextjs", icon: <SiReact /> },
    { name: "NodeJs", icon: <SiNodedotjs /> },
    { name: "SpringBoot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Aws/GCP", icon: <SiAmazonwebservices /> },
    { name: "Docker", icon: <SiDocker /> },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-white">
                Hi, I'm <br />
                <span className="text-white/90">Aghniv Paul</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-xl leading-relaxed font-medium">
                Full Stack Developer with a passion for building robust architecture and
                beautiful, performant web experiences that deliver excellence.
              </p>
            </motion.div>

            {/* Skills Tags - Styled as dark pills like the image */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#1e2d33] border border-white/5 rounded-2xl text-white/90 shadow-lg hover:bg-[#253940] transition-colors cursor-default group"
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <span className="text-emerald-400 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-bold tracking-wide">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-5"
              variants={itemVariants}
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white text-black font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="px-10 py-4 glass border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image with Mesh Background Effect */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Glowing background behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-600/20 via-blue-500/20 to-pink-500/10 blur-[100px] rounded-full z-0 animate-pulse" />

            <div className="relative z-10 w-full max-w-[300px] lg:max-w-[450px] aspect-[4/5]">
              <motion.div
                className="w-full h-full rounded-[3rem] md:rounded-[4rem] lg:rounded-[5rem] overflow-hidden border-4 border-white/10 shadow-3xl"
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/pdp.jpeg"
                  alt="Aghniv Paul"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>


              <motion.div
                className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-500/10 blur-3xl z-[-1]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
