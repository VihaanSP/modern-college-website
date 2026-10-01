import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import HeroPremium from './components/HeroPremium';
import Dashboard from './components/Dashboard';
import CurriculumScroll from './components/CurriculumScroll';
import GatePrepTimeline from './components/GatePrepTimeline';
import OpenSourceCulture from './components/OpenSourceCulture';
import GlobalResearch from './components/GlobalResearch';
import ProgramDetails from './components/ProgramDetails';
import Copilot from './components/Copilot';
import InteractiveFooter from './components/InteractiveFooter';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [view, setView] = useState('home'); // 'home' | 'portal' | 'details'
  const [selectedProgram, setSelectedProgram] = useState(null);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const handleExplore = (id) => {
    setSelectedProgram(id);
    setView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const updateMouse = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <div ref={containerRef} style={{ background: '#030303', minHeight: '100vh' }}>
      
      {/* Top Scroll Progress Bar */}
      <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: '#fff', transformOrigin: '0%', scaleX: scrollYProgress, zIndex: 100000 }} />

      {/* HIGH-READABILITY LIQUID CURSOR */}
      <motion.div 
        animate={{ x: mousePosition.x - 30, y: mousePosition.y - 30, scale: hovered ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        style={{ 
          position: 'fixed', top: 0, left: 0, width: '60px', height: '60px', 
          background: hovered ? 'rgba(255, 255, 255, 1)' : 'transparent', 
          border: hovered ? 'none' : '1.5px solid rgba(255, 255, 255, 0.6)',
          boxShadow: hovered ? '0 0 30px rgba(255,255,255,0.5)' : '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9999,
          mixBlendMode: 'difference'
        }} 
      />
      <motion.div 
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4, scale: hovered ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.1 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '8px', height: '8px', background: '#fff', borderRadius: '50%', pointerEvents: 'none', zIndex: 10000, mixBlendMode: 'difference' }} 
      />

      {/* Navbar (Bifurcation Control) */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '30px 5vw', display: 'flex', justifyContent: 'space-between', zIndex: 1000, mixBlendMode: 'difference' }}>
        <div onClick={() => setView('home')} style={{ fontWeight: 900, fontSize: '1.5rem', color: 'white', letterSpacing: '1px', cursor: 'none' }}>PU • CONCEPT</div>
        <div style={{ display: 'flex', gap: '40px', fontWeight: 700, color: 'white', alignItems: 'center' }}>
          <span onClick={() => setView('home')} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>Culture</span>
          <span onClick={() => setView(view === 'portal' ? 'home' : 'portal')} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: view === 'portal' ? '#333' : '#fff', color: view === 'portal' ? '#fff' : '#000', padding: '10px 25px', borderRadius: '100px' }}>
            {view === 'portal' ? 'Exit Portal' : 'Enter Portal'}
          </span>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            {/* HERO SECTION REDESIGNED */}
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <HeroPremium mousePosition={mousePosition} />
            </div>

            {/* CURRICULUM HORIZONTAL SCROLL */}
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <CurriculumScroll />
            </div>

            {/* NEW: OPEN SOURCE CULTURE ACCORDION (Moved above GATE) */}
            <OpenSourceCulture setHovered={setHovered} onExplore={handleExplore} />

            {/* GATE PREPARATION STACKED CARDS (Moved to bottom) */}
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <GatePrepTimeline />
            </div>

            {/* NEW: GLOBAL RESEARCH INTERNSHIPS */}
            <GlobalResearch setHovered={setHovered} onExplore={handleExplore} />

            {/* INTERACTIVE FOOTER */}
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <InteractiveFooter />
            </div>
          </motion.div>
        ) : view === 'details' && selectedProgram ? (
          <motion.div key="details" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}>
            <ProgramDetails programId={selectedProgram} onBack={() => { setView('home'); setSelectedProgram(null); window.scrollTo({ top: 0 }); }} setHovered={setHovered} />
          </motion.div>
        ) : (
          <motion.div key="portal" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }} style={{ paddingTop: '150px' }}>
            {/* ISOLATED STUDENT PORTAL */}
            <Dashboard setHovered={setHovered} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI ASSISTANT CHAT UI (Always available) */}
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <Copilot />
      </div>

    </div>
  );
};
export default App;
