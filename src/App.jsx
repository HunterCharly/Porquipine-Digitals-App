import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

/* Atmospheric floating particles component */
function Particles() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0
              ? 'rgba(234, 179, 8, 0.6)'
              : i % 3 === 1
                ? 'rgba(250, 204, 21, 0.4)'
                : 'rgba(255, 255, 255, 0.2)',
            animation: `float-particle ${8 + Math.random() * 12}s ease-in-out ${Math.random() * 5}s infinite`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-neutral-300 selection:bg-yellow-500 selection:text-black flex flex-col relative">
        {/* Soft gradient ambient background — inspired by robin-thomas.me */}
        <div className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(234,179,8,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(234,179,8,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 20% 60%, rgba(250,204,21,0.03) 0%, transparent 50%)'
          }}
        />

        {/* Floating particles */}
        <Particles />

        {/* Minimal floating header — robin-thomas style fixed corners */}
        <header className="fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-8 py-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-black/50 backdrop-blur-xl border border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors duration-300"
              >
                <img src="/images/logo.png" alt="Porquipine Digitals" className="w-7 h-7 object-contain bloom-glow" />
              </motion.div>
              <span className="text-lg font-semibold tracking-[0.15em] text-white/80 uppercase group-hover:text-yellow-500 transition-colors duration-300" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '14px' }}>
                Porquipine <span className="text-yellow-500/80">Digitals</span>
              </span>
            </Link>
            <nav className="hidden md:flex gap-8 items-center">
              <Link to="/" className="text-[11px] font-medium text-white/40 hover:text-yellow-500 transition-colors duration-300 uppercase tracking-[0.2em] cursor-pointer">Platform</Link>
              <a href="/#services" className="text-[11px] font-medium text-white/40 hover:text-yellow-500 transition-colors duration-300 uppercase tracking-[0.2em] cursor-pointer">Solutions</a>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(234,179,8,0.2)' }}
                className="px-5 py-2 border border-yellow-500/30 text-yellow-500/80 font-semibold uppercase text-[10px] tracking-[0.2em] hover:bg-yellow-500/10 hover:border-yellow-500/60 transition-all duration-300 cursor-pointer rounded-full backdrop-blur-sm"
              >
                Initialize Contact
              </motion.a>
            </nav>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 relative z-10 pt-20">
          <AnimatedRoutes />
        </main>

        {/* Minimal footer — robin-thomas corner style */}
        <footer className="relative z-10 py-10">
          <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase">© {new Date().getFullYear()} Porquipine Digitals • Global Protocol</p>
            <div className="flex gap-6 text-[10px] text-white/20 tracking-[0.2em] uppercase">
              <span className="cursor-pointer hover:text-yellow-500/60 transition-colors duration-300">Terms</span>
              <span className="cursor-pointer hover:text-yellow-500/60 transition-colors duration-300">Privacy</span>
              <span>Status: <span className="text-yellow-500/60">Online</span></span>
            </div>
          </div>
        </footer>

        <Analytics />
      </div>
    </Router>
  );
}
