import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width/2);
    const middleY = clientY - (top + height/2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };
  
  const reset = () => setPosition({ x: 0, y: 0 });
  
  return (
    <motion.button 
      ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ padding: '30px 80px', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', border: 'none', borderRadius: '100px', color: '#fff', fontSize: '2rem', fontWeight: 900, outline: 'none', boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)' }}
    >
      {children}
    </motion.button>
  );
};

export default function InteractiveFooter() {
  return (
    <footer style={{ background: '#000', paddingTop: '150px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Infinite Marquee */}
      <div style={{ display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', borderTop: '1px solid #333', borderBottom: '1px solid #333', padding: '30px 0' }}>
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 15, ease: "linear", repeat: Infinity }} style={{ display: 'flex', gap: '50px' }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', letterSpacing: '4px' }}>
              ELEVATE ACADEMICS • ENGINEER THE FUTURE • THE ACADEMIC STANDARD • 
            </span>
          ))}
        </motion.div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '150px 5vw' }}>
        <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 900, marginBottom: '50px', textAlign: 'center', letterSpacing: '-3px' }}>READY TO START?</h2>
        <MagneticButton>APPLY NOW</MagneticButton>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px 5vw', color: '#666', borderTop: '1px solid #222', flexWrap: 'wrap', gap: '20px' }}>
        <div>© 2026 A Conceptual Redesign Portfolio Piece. Not affiliated with Parul University.</div>
        <div style={{ display: 'flex', gap: '30px', fontWeight: 'bold' }}>
          <motion.span whileHover={{ color: '#fff', y: -5 }}>Instagram</motion.span>
          <motion.span whileHover={{ color: '#fff', y: -5 }}>Twitter</motion.span>
          <motion.span whileHover={{ color: '#fff', y: -5 }}>LinkedIn</motion.span>
        </div>
      </div>
    </footer>
  );
}
