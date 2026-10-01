import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  { id: 'mitacs', name: 'MITACS Globalink', country: 'Canada', flag: '🇨🇦', span: 7, color: '#ff3b30', desc: 'Fully funded 12-week research internship at top Canadian universities. Work on bleeding-edge AI projects with global experts.' },
  { id: 'daad', name: 'DAAD WISE', country: 'Germany', flag: '🇩🇪', span: 5, color: '#fbbc05', desc: 'Conduct research at premier German institutes. Experience the forefront of European ML innovation and engineering.' },
  { id: 'eth', name: 'ETH Zurich', country: 'Switzerland', flag: '🇨🇭', span: 4, color: '#3b82f6', desc: 'Join the ranks of Einstein. Spend your summer researching at one of the world\'s most prestigious technical universities.' },
  { id: 'cern', name: 'CERN Openlab', country: 'Switzerland', flag: '🇨🇭', span: 8, color: '#10b981', desc: 'Process data from the Large Hadron Collider. Push the absolute limits of distributed computing and quantum ML.' },
  { id: 'caltech', name: 'Caltech SURF', country: 'USA', flag: '🇺🇸', span: 6, color: '#8b5cf6', desc: 'Summer Undergraduate Research Fellowship. Work directly with pioneers in deep learning, robotics, and aerospace in California.' },
  { id: 'epfl', name: 'EPFL Excellence', country: 'Switzerland', flag: '🇨🇭', span: 6, color: '#ec4899', desc: 'An elite, highly competitive fellowship for the top 1% of engineering students to conduct research in Lausanne.' }
];

export default function GlobalResearch({ setHovered, onExplore }) {
  return (
    <section style={{ padding: '150px 5vw', background: '#030303', color: '#fff' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      
      <div style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1 }}>GLOBAL <br/> RESEARCH.</h2>
        <p style={{ fontSize: '1.5rem', color: '#888', marginTop: '30px', maxWidth: '800px', margin: '30px auto 0 auto', lineHeight: 1.6 }}>
          Don't just stay local. The world's most elite universities and laboratories are looking for brilliant AI engineers. 
          Target these fully-funded summer research programs.
        </p>
      </div>

      <div className="global-research-grid">
        {programs.map((prog, i) => (
          <motion.div 
            key={i}
            className="global-research-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 0.98, borderColor: prog.color, boxShadow: `0 20px 40px ${prog.color}20` }}
            style={{ 
              gridColumn: `span ${prog.span}`, 
              background: '#0a0a0a', 
              borderRadius: '32px', 
              border: '1px solid rgba(255,255,255,0.05)', 
              padding: '50px', 
              position: 'relative', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'none'
            }}
          >
            {/* Background Glow Effect */}
            <motion.div 
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.4, scale: 1.5 }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute', top: '-50px', right: '-50px', width: '300px', height: '300px', background: prog.color, filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none' }} 
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 10 }}>
              <div style={{ fontSize: '5rem', filter: 'grayscale(0.2)' }}>{prog.flag}</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', color: prog.color }}>{prog.country}</div>
            </div>

            <div style={{ zIndex: 10 }}>
              <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 900, letterSpacing: '-2px', marginBottom: '15px', lineHeight: 1 }}>{prog.name}</h3>
              <p style={{ fontSize: '1.2rem', color: '#888', lineHeight: 1.5, maxWidth: '600px' }}>{prog.desc}</p>
              
              <motion.button 
                onClick={() => onExplore(prog.id)}
                whileHover={{ scale: 1.05, backgroundColor: prog.color, color: '#000' }}
                style={{ position: 'relative', zIndex: 20, marginTop: '30px', padding: '15px 30px', background: 'transparent', border: `2px solid ${prog.color}`, color: prog.color, borderRadius: '100px', fontSize: '1rem', fontWeight: 900, cursor: 'none' }}
              >
                READ MENTOR ROADMAP →
              </motion.button>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
