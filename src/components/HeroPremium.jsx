import React from 'react';
import { motion } from 'framer-motion';

export default function HeroPremium({ mousePosition }) {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#050505' }}>
      
      {/* Dynamic Background Glow following mouse */}
      <motion.div 
        animate={{ x: mousePosition.x - 400, y: mousePosition.y - 400 }} 
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }}
      />
      
      <div style={{ zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
          <motion.div initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.1 }}>
            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ff3b30', letterSpacing: '10px', textTransform: 'uppercase' }}>
              A CONCEPTUAL REDESIGN
            </div>
          </motion.div>
        </div>
        
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 initial={{ y: 300 }} animate={{ y: 0 }} transition={{ duration: 1.2, type: 'spring', bounce: 0.4, delay: 0.2 }} style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', fontWeight: 900, lineHeight: 0.85, color: '#fff', letterSpacing: '-0.06em', textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            THE ACADEMIC<br/>STANDARD.
          </motion.h1>
        </div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} style={{ color: '#888', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', maxWidth: '800px', marginTop: '40px', fontWeight: 500, lineHeight: 1.6 }}>
          A premium conceptual redesign visualizing what a university portal looks like when engineered with uncompromising focus on academics, research, and global opportunities. Built for the modern engineering student.
        </motion.p>
      </div>

      {/* Floating Geometry / Grid */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: '50px 50px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', zIndex: 0, pointerEvents: 'none' }} />

      {/* Aesthetic Tech Words Background */}
      <div style={{ position: 'absolute', top: '15%', left: '-10%', transform: 'rotate(-3deg)', whiteSpace: 'nowrap', zIndex: 0, opacity: 0.02, pointerEvents: 'none' }}>
        <motion.div animate={{ x: ['-20%', '0%'] }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ fontSize: '12rem', fontWeight: 900, color: '#fff', letterSpacing: '10px' }}>
          ALGORITHMS • CODEFORCES • DYNAMIC PROGRAMMING • ALGORITHMS • CODEFORCES • DYNAMIC PROGRAMMING • 
        </motion.div>
      </div>

      <div style={{ position: 'absolute', top: '65%', right: '-10%', transform: 'rotate(3deg)', whiteSpace: 'nowrap', zIndex: 0, opacity: 0.02, pointerEvents: 'none' }}>
        <motion.div animate={{ x: ['0%', '-20%'] }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} style={{ fontSize: '10rem', fontWeight: 900, color: '#fff', letterSpacing: '10px' }}>
          DISCRETE MATHEMATICS • GRAPH THEORY • ICPC • DISCRETE MATHEMATICS • GRAPH THEORY • ICPC • 
        </motion.div>
      </div>

    </div>
  );
}
