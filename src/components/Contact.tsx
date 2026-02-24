"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "paulaghniv@gmail.com",
      href: "mailto:paulaghniv@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+91 7365074117",
      href: "tel:+917365074117",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Kolkata, India",
      href: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Ready to <span className="text-white/40 italic">Collaborate?</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              className="glass p-10 rounded-[3rem] group border-white/5 hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white text-3xl mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {info.icon}
              </div>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-2">{info.label}</h3>
              <p className="text-xl md:text-2xl font-bold text-white break-all">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Big Social Call to Action */}
        <motion.div
          className="glass p-12 rounded-[4rem] text-center border-white/5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black text-white mb-10">Find me on social media</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SocialLink href="https://github.com/Aghniv" icon={<FiGithub />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/aghniv-paul-96b870246/" icon={<FiLinkedin />} label="LinkedIn" />
            
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent blur-[120px] z-0 pointer-events-none" />
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all duration-300"
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-bold">{label}</span>
    </motion.a>
  );
}
