import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import * as LucideIcons from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" />;
  }

  const Icon = LucideIcons[service.iconName];

  return (
    <motion.div className="min-h-screen bg-black" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ═══════════ Detail Hero ═══════════ */}
      <section className="relative pt-32 pb-20 border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-[0.03] filter grayscale" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-yellow-500 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors duration-200 mb-12 cursor-pointer">
              <LucideIcons.ArrowLeft className="w-4 h-4" /> Terminate & Return
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-20 h-20 bg-neutral-900 border border-yellow-500/30 flex items-center justify-center shrink-0"
            >
              {Icon && <Icon className="w-10 h-10 text-yellow-500" strokeWidth={1} />}
            </motion.div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xl text-neutral-400 leading-relaxed max-w-3xl"
              >
                {service.fullDesc}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ Content Grid ═══════════ */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Features */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <motion.h3
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-yellow-500 text-sm font-medium tracking-[0.3em] uppercase mb-8 flex items-center gap-3"
                >
                  <LucideIcons.Cpu className="w-4 h-4" /> Core Technical Modules
                </motion.h3>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeUp}
                      custom={idx}
                      whileHover={{ scale: 1.02, borderColor: 'rgba(234,179,8,0.4)' }}
                      transition={{ duration: 0.2 }}
                      className="bg-neutral-900 border border-neutral-800 p-6 flex items-start gap-4 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                        <span className="text-yellow-500 text-xs font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-white text-sm uppercase leading-relaxed font-medium">{feature}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-neutral-900 border-l-2 border-yellow-500"
              >
                <p className="text-neutral-400 text-sm italic">"Implementing {service.title} through Porquipine Digitals architecture ensures a hyper-scalable, compliant, and dominant market positioning globally." — System Matrix</p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="bg-neutral-900 border border-yellow-500/20 p-8">
                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2 font-bold">{service.statLabel}</div>
                <div className="text-5xl font-black text-yellow-500 uppercase tracking-tighter">{service.stat}</div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={1}
                whileHover={{ scale: 1.02 }}
                className="bg-yellow-500 p-8 cursor-pointer"
              >
                <h4 className="text-black font-black uppercase text-xl mb-4">Deploy Module Now</h4>
                <p className="text-black/80 text-xs mb-6 font-medium">Initialize the {service.title} protocol with our dedicated global engineering team.</p>
                <a href="/#contact" className="block text-center bg-black text-yellow-500 font-bold uppercase tracking-widest text-xs py-4 hover:bg-neutral-900 transition-colors duration-200 cursor-pointer">
                  Contact Systems
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════ Visual Banner ═══════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-[40vh] w-full bg-cover bg-center border-t border-neutral-900 relative"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center container mx-auto px-6">
          <h2 className="text-white/10 text-6xl md:text-8xl font-black uppercase tracking-tighter">System 100% Active.</h2>
        </div>
      </motion.section>

    </motion.div>
  );
}
