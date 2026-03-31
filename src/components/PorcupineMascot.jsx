import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
 * PorcupineMascot — A floating geometric porcupine companion
 * 
 * Inspired by the wireframe/node logo. The porcupine:
 * - Floats on the bottom-right of the screen
 * - Gently bobs with an idle animation
 * - Shoots golden thorn particles when the user scrolls
 * - Quills bristle and glow when hovering over the mascot
 * - Clicking opens a quick-nav radial menu
 */

/* Thorn particle component */
function Thorn({ x, y, angle, delay }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      animate={{
        opacity: 0,
        scale: 0.3,
        x: Math.cos(angle) * 120,
        y: Math.sin(angle) * 120,
      }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="w-1 rounded-full bg-yellow-500"
        style={{
          height: `${8 + Math.random() * 12}px`,
          transform: `rotate(${(angle * 180) / Math.PI}deg)`,
          boxShadow: '0 0 6px rgba(234,179,8,0.6)',
        }}
      />
    </motion.div>
  );
}

/* SVG Geometric Porcupine — inspired by the wireframe logo */
function PorcupineSVG({ isExcited, isHovered }) {
  return (
    <svg
      viewBox="0 0 200 160"
      className="w-full h-full"
      style={{ filter: isHovered ? 'drop-shadow(0 0 15px rgba(234,179,8,0.5))' : 'drop-shadow(0 0 8px rgba(234,179,8,0.2))' }}
    >
      {/* Body — geometric wireframe */}
      <g stroke="rgba(234,179,8,0.8)" strokeWidth="1.5" fill="none">
        {/* Main body polygon */}
        <polygon points="80,110 100,100 120,105 135,110 130,125 110,130 85,128" fill="rgba(234,179,8,0.05)" />
        {/* Head */}
        <polygon points="135,110 155,100 160,108 155,118 145,120 135,115" fill="rgba(234,179,8,0.05)" />
        {/* Eye */}
        <circle cx="150" cy="108" r="2.5" fill="rgba(234,179,8,1)" className={isExcited ? 'animate-ping' : ''} />
        {/* Snout */}
        <line x1="160" y1="108" x2="170" y2="106" strokeWidth="2" stroke="rgba(234,179,8,0.9)" />
        {/* Legs */}
        <line x1="95" y1="128" x2="90" y2="145" strokeWidth="2" />
        <line x1="105" y1="130" x2="100" y2="148" strokeWidth="2" />
        <line x1="120" y1="128" x2="118" y2="146" strokeWidth="2" />
        <line x1="130" y1="125" x2="130" y2="144" strokeWidth="2" />
        {/* Feet */}
        <circle cx="90" cy="146" r="2" fill="rgba(234,179,8,0.6)" />
        <circle cx="100" cy="149" r="2" fill="rgba(234,179,8,0.6)" />
        <circle cx="118" cy="147" r="2" fill="rgba(234,179,8,0.6)" />
        <circle cx="130" cy="145" r="2" fill="rgba(234,179,8,0.6)" />
        {/* Ear */}
        <polygon points="140,100 145,90 150,98" fill="rgba(234,179,8,0.15)" />
      </g>

      {/* Quills — the signature spikes */}
      <g stroke="rgba(234,179,8,0.9)" strokeWidth="1.5" strokeLinecap="round">
        {/* Main quill array — radiating from the back */}
        <motion.line x1="80" y1="110" x2="50" y2="75"
          animate={{ x2: isExcited ? 42 : 50, y2: isExcited ? 68 : 75 }}
          transition={{ duration: 0.3 }}
        />
        <motion.line x1="85" y1="105" x2="55" y2="60"
          animate={{ x2: isExcited ? 45 : 55, y2: isExcited ? 50 : 60 }}
          transition={{ duration: 0.3, delay: 0.02 }}
        />
        <motion.line x1="90" y1="100" x2="65" y2="48"
          animate={{ x2: isExcited ? 55 : 65, y2: isExcited ? 38 : 48 }}
          transition={{ duration: 0.3, delay: 0.04 }}
        />
        <motion.line x1="95" y1="98" x2="75" y2="40"
          animate={{ x2: isExcited ? 68 : 75, y2: isExcited ? 28 : 40 }}
          transition={{ duration: 0.3, delay: 0.06 }}
        />
        <motion.line x1="100" y1="97" x2="88" y2="38"
          animate={{ x2: isExcited ? 82 : 88, y2: isExcited ? 25 : 38 }}
          transition={{ duration: 0.3, delay: 0.08 }}
        />
        <motion.line x1="108" y1="96" x2="100" y2="40"
          animate={{ x2: isExcited ? 96 : 100, y2: isExcited ? 28 : 40 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
        <motion.line x1="115" y1="98" x2="112" y2="45"
          animate={{ x2: isExcited ? 110 : 112, y2: isExcited ? 32 : 45 }}
          transition={{ duration: 0.3, delay: 0.12 }}
        />
        <motion.line x1="122" y1="100" x2="125" y2="52"
          animate={{ x2: isExcited ? 126 : 125, y2: isExcited ? 40 : 52 }}
          transition={{ duration: 0.3, delay: 0.14 }}
        />
        <motion.line x1="128" y1="103" x2="135" y2="60"
          animate={{ x2: isExcited ? 138 : 135, y2: isExcited ? 50 : 60 }}
          transition={{ duration: 0.3, delay: 0.16 }}
        />
        {/* Side quills */}
        <motion.line x1="75" y1="115" x2="45" y2="95"
          animate={{ x2: isExcited ? 38 : 45 }}
          transition={{ duration: 0.3 }}
        />
        <motion.line x1="78" y1="120" x2="48" y2="110"
          animate={{ x2: isExcited ? 40 : 48 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        />
      </g>

      {/* Node dots on the body — geometric wireframe style */}
      <g fill="rgba(234,179,8,0.7)">
        <circle cx="80" cy="110" r="2.5" />
        <circle cx="100" cy="100" r="2" />
        <circle cx="120" cy="105" r="2" />
        <circle cx="90" cy="100" r="1.5" />
        <circle cx="110" cy="98" r="1.5" />
        <circle cx="95" cy="108" r="1.5" />
        <circle cx="115" cy="112" r="1.5" />
      </g>

      {/* Internal wireframe connections */}
      <g stroke="rgba(234,179,8,0.15)" strokeWidth="0.8">
        <line x1="80" y1="110" x2="100" y2="100" />
        <line x1="100" y1="100" x2="120" y2="105" />
        <line x1="80" y1="110" x2="95" y2="108" />
        <line x1="95" y1="108" x2="115" y2="112" />
        <line x1="100" y1="100" x2="110" y2="98" />
        <line x1="90" y1="100" x2="110" y2="98" />
      </g>

      {/* Tail */}
      <motion.path
        d="M 75 118 Q 55 125, 45 115 Q 38 108, 42 100"
        stroke="rgba(234,179,8,0.6)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={{ d: isExcited
          ? "M 75 118 Q 50 130, 38 118 Q 30 108, 35 95"
          : "M 75 118 Q 55 125, 45 115 Q 38 108, 42 100"
        }}
        transition={{ duration: 0.4 }}
      />
    </svg>
  );
}

export default function PorcupineMascot() {
  const [thorns, setThorns] = useState([]);
  const [isExcited, setIsExcited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const lastScrollRef = useRef(0);
  const thornIdRef = useRef(0);

  /* Shoot thorns on scroll */
  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    const delta = Math.abs(currentScroll - lastScrollRef.current);

    setScrollY(currentScroll);

    if (delta > 60) {
      setIsExcited(true);
      setTimeout(() => setIsExcited(false), 600);

      /* Spawn 3-5 thorn particles */
      const count = 3 + Math.floor(Math.random() * 3);
      const newThorns = [];
      for (let i = 0; i < count; i++) {
        thornIdRef.current += 1;
        newThorns.push({
          id: thornIdRef.current,
          x: 30 + Math.random() * 40,
          y: 20 + Math.random() * 30,
          angle: -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.8,
          delay: i * 0.05,
        });
      }
      setThorns((prev) => [...prev, ...newThorns]);

      /* Clean up old thorns */
      setTimeout(() => {
        setThorns((prev) => prev.filter((t) => !newThorns.find((n) => n.id === t.id)));
      }, 1200);

      lastScrollRef.current = currentScroll;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { label: 'Top', href: '#', icon: '↑' },
    { label: 'Services', href: '#services', icon: '◆' },
    { label: 'Contact', href: '#contact', icon: '✦' },
  ];

  /* Gentle floating Y based on scroll */
  const floatOffset = Math.sin(scrollY * 0.005) * 8;

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden md:block">
      {/* Thorn particles */}
      <AnimatePresence>
        {thorns.map((thorn) => (
          <Thorn key={thorn.id} {...thorn} />
        ))}
      </AnimatePresence>

      {/* Quick-nav radial menu */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-24 right-0 flex flex-col gap-2 items-end"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setShowNav(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-yellow-500/20 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 cursor-pointer group"
              >
                <span className="text-white/60 text-xs font-medium uppercase tracking-[0.15em] group-hover:text-yellow-500 transition-colors">{item.label}</span>
                <span className="text-yellow-500/60 text-sm">{item.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Porcupine */}
      <motion.div
        animate={{ y: floatOffset }}
        transition={{ duration: 0.3 }}
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowNav((prev) => !prev)}
      >
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isExcited
              ? '0 0 40px rgba(234,179,8,0.3), 0 0 80px rgba(234,179,8,0.1)'
              : isHovered
                ? '0 0 25px rgba(234,179,8,0.15)'
                : '0 0 10px rgba(234,179,8,0.05)',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Mascot container */}
        <motion.div
          className="w-24 h-24 relative"
          animate={{
            rotate: isExcited ? [0, -3, 3, -2, 0] : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <PorcupineSVG isExcited={isExcited} isHovered={isHovered} />
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && !showNav && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full top-1/2 -translate-y-1/2 mr-4 whitespace-nowrap px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-yellow-500/20 text-yellow-500/70 text-[10px] uppercase tracking-[0.2em] font-medium"
            >
              Navigate ✦
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
