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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-neutral-300 selection:bg-yellow-500 selection:text-black flex flex-col relative" style={{ fontFamily: "'Exo 2', sans-serif" }}>
        {/* Global Tech Grid Background */}
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#eab30808_1px,transparent_1px),linear-gradient(to_bottom,#eab30808_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_800px_at_50%_50%,#00000000_20%,#000000_100%)] pointer-events-none"></div>

        {/* Global Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-yellow-500/10">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 border border-yellow-500/30 rounded-lg overflow-hidden flex items-center justify-center bg-black group-hover:border-yellow-500 transition-colors duration-200">
                <img src="/images/logo.png" alt="Porquipine Digitals Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-widest text-white uppercase group-hover:text-yellow-500 transition-colors duration-200" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Porquipine <span className="text-yellow-500">Digitals</span>
              </span>
            </Link>
            <nav className="hidden md:flex gap-8 items-center">
              <Link to="/" className="text-sm font-medium text-neutral-400 hover:text-yellow-500 transition-colors duration-200 uppercase tracking-widest cursor-pointer" style={{ fontFamily: "'Exo 2', sans-serif" }}>Platform</Link>
              <a href="/#services" className="text-sm font-medium text-neutral-400 hover:text-yellow-500 transition-colors duration-200 uppercase tracking-widest cursor-pointer" style={{ fontFamily: "'Exo 2', sans-serif" }}>Solutions</a>
              <a href="/#contact" className="px-6 py-2 border border-yellow-500 text-yellow-500 font-bold uppercase text-xs tracking-widest hover:bg-yellow-500 hover:text-black transition-all duration-200 cursor-pointer" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Initialize Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Animated Router View */}
        <main className="flex-1 relative z-10 pt-20">
          <AnimatedRoutes />
        </main>

        {/* Global Footer */}
        <footer className="relative z-10 border-t border-yellow-500/10 bg-black py-12">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="w-8 h-8 opacity-50 grayscale" />
              <p className="text-neutral-600 text-xs tracking-widest" style={{ fontFamily: "'Exo 2', sans-serif" }}>© {new Date().getFullYear()} PORQUIPINE DIGITALS. GLOBAL PROTOCOL.</p>
            </div>
            <div className="flex gap-6 text-xs text-neutral-600" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              <span className="cursor-pointer hover:text-yellow-500 transition-colors duration-200">TERMS</span>
              <span className="cursor-pointer hover:text-yellow-500 transition-colors duration-200">PRIVACY</span>
              <span className="cursor-pointer hover:text-yellow-500 transition-colors duration-200">SYSTEM STATUS: <span className="text-yellow-500">ONLINE</span></span>
            </div>
          </div>
        </footer>

        <Analytics />
      </div>
    </Router>
  );
}
