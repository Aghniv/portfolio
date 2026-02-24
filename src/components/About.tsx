"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCode, FiAward } from "react-icons/fi";

export default function About() {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JAVA", level: 90 },
    { name: "React", level: 92 },
    { name: "SpringBoot", level: 88 },
    { name: "MySQL", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 65 }
  ];

  const experiences = [
    {
      id: 1,
      role: "Web Developer",
      company: "Allotropes PVT.LTD.",
      period: "2025 - Present",
      description: "Contributed to the development of three responsive web applications using HTML, CSS, JavaScript, React, Express.js, and REST APIs to streamline customer inquiries and reduce manual follow-ups."
    }
  ];

  const achievements = [
    { icon: <FiCode />, text: "Smart Bengal Hackathon 2024 (4th position)" },
    { icon: <FiBriefcase />, text: "5+ months Experience" }
  ];

  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            About <span className="text-white/40 italic">Me</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
            Passionate developer with a strong background in creating impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-4xl font-bold text-white tracking-tight">My Journey</h3>
            <div className="glass p-10 rounded-[3rem] space-y-6">
              <p className="text-white/70 text-lg leading-relaxed font-medium">
                I'm a passionate full-stack developer with over 5 months of experience creating impactful digital solutions
                that meet business requirements and provide exceptional user experiences.
              </p>
              <p className="text-white/70 text-lg leading-relaxed font-medium">
                My approach combines technical expertise with creative problem-solving to deliver
                solutions that not only meet business requirements but also provide exceptional
                user experiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl border border-white/5"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <span className="text-emerald-400 text-2xl">{achievement.icon}</span>
                    <span className="text-white/80 font-bold text-sm">
                      {achievement.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white tracking-tight">Expertise</h3>
            <div className="glass p-10 rounded-[3rem] space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-white/90 font-bold">{skill.name}</span>
                    <span className="text-white/40 text-sm font-black">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-emerald-500 to-blue-500 h-full rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h3 className="text-4xl font-bold text-center text-white tracking-tight">Work Experience</h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent blur-2xl" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <h4 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h4>
                    <span className="text-lg text-white/60 font-medium">{exp.company}</span>
                  </div>
                  <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-white/80 font-bold text-sm">
                    {exp.period}
                  </div>
                </div>
                <p className="text-white/60 text-lg leading-relaxed font-medium relative z-10">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
