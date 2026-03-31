import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import * as LucideIcons from 'lucide-react';
import emailjs from '@emailjs/browser';

/* Animation presets */
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadGen = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send('service_8ziulu2', 'YOUR_TEMPLATE_ID',
      { user_email: email, message: 'New lead from Porquipine Digitals.' }, 'YOUR_PUBLIC_KEY'
    )
    .then(() => { alert(`Connection established: ${email}`); setEmail(''); })
    .catch((err) => { alert('Connection error. Please verify EmailJS config.'); console.error(err); })
    .finally(() => setIsSubmitting(false));
  };

  const portfolio = [
    { title: "Web Architecture", category: "Development", image: "/images/web-dev.png" },
    { title: "Growth Engine", category: "Marketing", image: "/images/marketing.png" },
    { title: "Brand Identity", category: "Branding", image: "/images/branding.png" }
  ];

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">

      {/* ════════════════════════════════════════════════════════════
          HERO — Immersive, atmospheric, generous spacing
      ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient bloom orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-yellow-500/[0.04] blur-[120px] pointer-events-none animate-[drift_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-yellow-400/[0.03] blur-[100px] pointer-events-none animate-[drift_25s_ease-in-out_infinite_reverse]" />

        <div className="container mx-auto px-8 relative z-10 text-center flex flex-col items-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm mb-12"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-[glow-pulse_3s_ease-in-out_infinite]" />
            <span className="text-white/40 text-[10px] font-medium tracking-[0.3em] uppercase">Systems Online • Global</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.04em] mb-8 leading-[0.95]"
          >
            <span className="text-white/90">Architecting</span>
            <br />
            <span className="text-yellow-500 bloom-glow-strong">Digital Dominance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/30 text-lg md:text-xl max-w-xl mb-16 leading-relaxed font-light"
          >
            End-to-end brand building, digital operations, and global market leadership — from concept to dominance.
          </motion.p>

          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(234,179,8,0.15)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500/90 font-medium text-sm tracking-[0.15em] uppercase cursor-pointer backdrop-blur-sm hover:bg-yellow-500/15 hover:border-yellow-500/40 transition-all duration-500 flex items-center gap-3"
          >
            Explore Solutions <LucideIcons.ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SERVICES — Glassmorphism cards, staggered reveal
      ════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-40 relative">
        <div className="container mx-auto px-8 relative z-10 max-w-6xl">
          <motion.div className="mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={fadeUp} className="text-yellow-500/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">Service Modules</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-black text-white/90 tracking-[-0.03em] max-w-xl">
              Strategic<br />Implementation
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {servicesData.map((service, index) => {
              const Icon = LucideIcons[service.iconName];
              return (
                <motion.div key={service.id} variants={fadeUp} custom={index}>
                  <Link to={`/service/${service.id}`} className="group block cursor-pointer">
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.3 } }}
                      className="glass-card rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-500"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/[0.06] border border-yellow-500/10 flex items-center justify-center mb-8 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-500">
                          {Icon && <Icon className="w-5 h-5 text-yellow-500/70 group-hover:text-yellow-500 transition-colors duration-300" strokeWidth={1.5} />}
                        </div>
                        <h4 className="text-lg font-bold mb-3 text-white/80 group-hover:text-yellow-500/90 transition-colors duration-300 tracking-tight">{service.title}</h4>
                        <p className="text-white/25 text-sm leading-relaxed font-light">{service.shortDesc}</p>
                      </div>
                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.04]">
                        <span className="text-yellow-500/40 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore</span>
                        <LucideIcons.ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-yellow-500/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PORTFOLIO — Atmospheric, bloom-lit cards
      ════════════════════════════════════════════════════════════ */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-8 relative z-10 max-w-6xl">
          <motion.div className="text-center mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={fadeUp} className="text-yellow-500/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">Portfolio</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-black text-white/90 tracking-[-0.03em]">
              Selected Works
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-[1.5s] group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 border border-white/[0.04] rounded-2xl group-hover:border-yellow-500/20 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 bg-yellow-500/60 rounded-full" />
                    <span className="text-yellow-500/50 text-[10px] uppercase tracking-[0.3em]">{item.category}</span>
                  </div>
                  <h4 className="text-white/80 text-2xl font-bold tracking-tight group-hover:text-white transition-colors duration-300">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CONTACT — Minimal, atmospheric lead capture
      ════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-40 relative">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-yellow-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-8 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

            <div className="text-center mb-12">
              <p className="text-yellow-500/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">Connection</p>
              <h2 className="text-3xl md:text-4xl font-black text-white/90 tracking-tight mb-4">Initialize Partnership</h2>
              <p className="text-white/25 font-light text-sm max-w-md mx-auto">Establish a direct link with our global consulting network.</p>
            </div>

            <form onSubmit={handleLeadGen} className="max-w-md mx-auto flex flex-col gap-5">
              <div>
                <label htmlFor="emailInput" className="block text-[10px] text-yellow-500/50 mb-2 uppercase tracking-[0.3em] font-medium">Email Address</label>
                <input
                  type="email" id="emailInput" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 text-white/80 text-sm focus:outline-none focus:border-yellow-500/30 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-white/15"
                  placeholder="you@enterprise.com"
                />
              </div>
              <motion.button
                disabled={isSubmitting}
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(234,179,8,0.12)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500/90 font-bold uppercase tracking-[0.2em] text-xs py-4 rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-40 hover:bg-yellow-500/15 hover:border-yellow-500/40 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Connecting...' : 'Establish Connection'} <LucideIcons.Terminal className="w-4 h-4" />
              </motion.button>
              <p className="text-white/10 text-[9px] uppercase text-center tracking-[0.2em]">Automated lead telemetry active</p>
            </form>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
