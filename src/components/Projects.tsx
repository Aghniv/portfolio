"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "RAG-Sales CRM",
      description: "AI-powered Sales CRM and organization admin portal I built as a full-stack project with features such as JWT authentication, role-based administration, semantic search, and AI-powered workflows.",
      image: "/images/ragdash.png",
      tech: ["Spring Boot", "React", "MySQL", "Docker","RAG"],
      github: "https://github.com/Aghniv/ragcrm",
      live: "https://ragcrm.vercel.app/login"
    },
    {
      id: 2,
      title: "Hotel Management System",
      description: "A full-stack hotel management system with user authentication, room management, and automated gmail notifications.",
      image: "/images/pr1.png",
      tech: ["Spring Boot", "React", "MySQL", "Docker"],
      github: "https://github.com",
      live: "https://nexus-ui-zeta.vercel.app/home"
    },
    

  ];

  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
             <span className="text-white/40 italic">Works</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
            A showcase of my recent explorations in full-stack development and system architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass rounded-[3.5rem] overflow-hidden border-white/5 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="flex space-x-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <FiGithub size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <FiExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-black text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-white/60 text-lg font-medium leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 border border-white/5 text-white/80 text-xs font-black uppercase tracking-widest rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-10 py-5 glass border border-white/10 text-white font-black rounded-3xl hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={24} />
            <span className="text-lg">View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
