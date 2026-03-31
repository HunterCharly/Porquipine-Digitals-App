import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import * as LucideIcons from 'lucide-react';
import emailjs from '@emailjs/browser';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadGen = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send(
      'service_8ziulu2',
      'YOUR_TEMPLATE_ID',
      { user_email: email, message: 'New lead from Porquipine Digitals platform.' },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => { alert(`Connection established: ${email}`); setEmail(''); })
    .catch((error) => { alert('Connection error. Please verify EmailJS config.'); console.error(error); })
    .finally(() => { setIsSubmitting(false); });
  };

  const portfolio = [
    { title: "Web Architecture & UX", category: "Web Development", image: "/images/web-dev.png" },
    { title: "Growth & Campaigns", category: "Digital Marketing", image: "/images/marketing.png" },
    { title: "Corporate Identity", category: "Brand Building", image: "/images/branding.png" }
  ];

  return (
    <motion.div className="flex flex-col" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-yellow-500/20">
        {/* Rotating tech rings */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[70vw] h-[70vw] max-w-3xl max-h-[48rem] rounded-full border border-yellow-500/40 animate-[spin_80s_linear_infinite]"></div>
          <div className="absolute w-[50vw] h-[50vw] max-w-xl max-h-[32rem] rounded-full border border-dashed border-yellow-500/30 animate-[spin_50s_linear_infinite_reverse]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 mb-10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-yellow-500 text-xs font-medium tracking-[0.2em] uppercase">Global Operations Active</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 uppercase leading-[0.9]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500">Architecting</span>
            <br />
            <span className="text-yellow-500" style={{ textShadow: '0 0 40px rgba(234,179,8,0.3)' }}>Digital Dominance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-14 leading-relaxed text-balance"
          >
            An end-to-end algorithmic approach to brand building, operations, and global digital presence.
          </motion.p>

          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(234,179,8,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-10 py-4 bg-yellow-500 text-black font-bold uppercase tracking-widest text-sm cursor-pointer overflow-hidden inline-flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">Initialize Core <LucideIcons.ArrowRight className="w-4 h-4" /></span>
          </motion.a>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.h2 variants={fadeUp} className="text-sm text-yellow-500 font-medium tracking-[0.3em] uppercase mb-4">Service Modules</motion.h2>
              <motion.h3 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Strategic Implementation</motion.h3>
            </motion.div>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp} custom={2}
              className="text-neutral-400 text-sm max-w-md lg:justify-self-end"
            >
              Our comprehensive execution modules are engineered to scale your digital presence globally with minimal friction and maximum ROI.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {servicesData.map((service, index) => {
              const Icon = LucideIcons[service.iconName];
              return (
                <motion.div key={service.id} variants={fadeUp} custom={index}>
                  <Link to={`/service/${service.id}`} className="group block relative overflow-hidden cursor-pointer">
                    <motion.div
                      whileHover={{ scale: 1.02, borderColor: 'rgba(234,179,8,0.5)' }}
                      transition={{ duration: 0.25 }}
                      className="relative bg-black h-full p-8 md:p-10 border border-neutral-800 flex flex-col justify-between"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <div>
                        <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-all duration-250">
                          {Icon && <Icon className="w-6 h-6 text-yellow-500" strokeWidth={1.5} />}
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight group-hover:text-yellow-500 transition-colors duration-200">{service.title}</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-8">{service.shortDesc}</p>
                      </div>
                      <div className="flex items-center justify-between mt-auto border-t border-neutral-900 pt-6">
                        <span className="text-yellow-500 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">Access Module</span>
                        <LucideIcons.ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-yellow-500 ml-auto transition-colors duration-200" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ PORTFOLIO ═══════════════════ */}
      <section className="py-32 bg-black border-y border-yellow-500/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-yellow-500/5 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="text-center mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeUp} className="text-sm text-yellow-500 font-medium tracking-[0.3em] uppercase mb-4">Global Deployments</motion.h2>
            <motion.h3 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">System Architecture Visualized</motion.h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden aspect-[3/4] bg-neutral-900 border border-neutral-800 cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-yellow-500 text-xs font-medium uppercase tracking-widest">{item.category}</span>
                  </div>
                  <h4 className="text-white text-3xl font-black uppercase tracking-tight">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT / LEAD GEN ═══════════════════ */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-neutral-900 border border-yellow-500/20 p-10 md:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm text-yellow-500 font-medium tracking-[0.3em] uppercase mb-4">Secure Network</h2>
                <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-6">Initialize Partnership Protocol</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">Enter your secure communication terminal address to establish a direct link with our global consulting matrix.</p>
                <div className="flex gap-6 items-center border-t border-neutral-800 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">24/7</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Node Uptime</div>
                  </div>
                  <div className="w-px h-10 bg-neutral-800"></div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">100%</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Data Security</div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleLeadGen} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="emailInput" className="block text-xs font-medium text-yellow-500 mb-2 uppercase tracking-widest">Target Email Vector</label>
                  <input
                    type="email"
                    id="emailInput"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black border border-neutral-700 px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-200 placeholder:text-neutral-700"
                    placeholder="sysadmin@enterprise.com"
                  />
                </div>
                <motion.button
                  disabled={isSubmitting}
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(234,179,8,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-500 text-black font-black uppercase tracking-[0.2em] py-5 transition-colors duration-200 flex justify-center items-center gap-2 disabled:opacity-50 border-none cursor-pointer"
                >
                  {isSubmitting ? 'Establishing Connection...' : 'Establish Connection'} <LucideIcons.Terminal className="w-5 h-5"/>
                </motion.button>
                <p className="text-neutral-600 text-[10px] uppercase text-center mt-1 tracking-wider">By submitting you agree to our automated lead tracking telemetry.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
