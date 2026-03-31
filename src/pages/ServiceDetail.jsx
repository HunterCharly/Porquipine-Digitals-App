import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import * as LucideIcons from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }
  })
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <Navigate to="/" />;

  const Icon = LucideIcons[service.iconName];

  return (
    <motion.div className="min-h-screen" variants={pageTransition} initial="initial" animate="animate" exit="exit">

      {/* ═══════════ Service Hero ═══════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt="" className="w-full h-full object-cover opacity-[0.02]" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-8 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-[0.3em] hover:text-yellow-500/70 transition-colors duration-300 mb-16 cursor-pointer">
              <LucideIcons.ArrowLeft className="w-3.5 h-3.5" /> Back to Platform
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 rounded-2xl bg-yellow-500/[0.06] border border-yellow-500/10 flex items-center justify-center shrink-0 bloom-glow"
            >
              {Icon && <Icon className="w-8 h-8 text-yellow-500/70" strokeWidth={1} />}
            </motion.div>
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white/90 tracking-[-0.04em] mb-8 leading-[1.05]"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/30 text-lg leading-relaxed max-w-2xl font-light"
              >
                {service.fullDesc}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ Content ═══════════ */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Features */}
            <div className="md:col-span-2 space-y-12">
              <motion.h3
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="text-yellow-500/60 text-[10px] tracking-[0.4em] uppercase mb-6 flex items-center gap-3 font-medium"
              >
                <LucideIcons.Cpu className="w-3.5 h-3.5" /> Core Modules
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    custom={idx}
                    whileHover={{ y: -2, borderColor: 'rgba(234,179,8,0.15)' }}
                    transition={{ duration: 0.25 }}
                    className="glass-card rounded-xl p-5 flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full bg-yellow-500/[0.08] flex items-center justify-center shrink-0">
                      <span className="text-yellow-500/70 text-[10px] font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed font-medium">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="glass-card rounded-xl p-6 border-l-2 border-l-yellow-500/30"
              >
                <p className="text-white/25 text-sm italic font-light leading-relaxed">
                  "Implementing {service.title} through Porquipine Digitals ensures hyper-scalable, compliant, and dominant market positioning globally."
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8">
                <div className="text-[10px] text-white/25 uppercase tracking-[0.3em] mb-2 font-bold">{service.statLabel}</div>
                <div className="text-4xl font-black text-yellow-500/80 tracking-tighter bloom-glow">{service.stat}</div>
              </motion.div>

              <motion.div
                variants={fadeUp} custom={1}
                whileHover={{ y: -3 }}
                className="rounded-2xl p-8 bg-yellow-500/10 border border-yellow-500/15 cursor-pointer"
              >
                <h4 className="text-white/90 font-black uppercase text-lg mb-3 tracking-tight">Deploy Now</h4>
                <p className="text-white/30 text-xs mb-6 font-light">Initialize {service.title} with our global team.</p>
                <a href="/#contact" className="block text-center bg-black/40 backdrop-blur-sm text-yellow-500/80 font-bold uppercase tracking-[0.15em] text-[10px] py-3.5 rounded-xl hover:bg-black/60 transition-colors duration-300 cursor-pointer border border-white/[0.04]">
                  Contact Systems
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════ Visual ═══════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-[35vh] w-full bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 flex items-center container mx-auto px-8">
          <h2 className="text-white/[0.04] text-5xl md:text-7xl font-black uppercase tracking-tighter">System Active.</h2>
        </div>
      </motion.section>

    </motion.div>
  );
}
