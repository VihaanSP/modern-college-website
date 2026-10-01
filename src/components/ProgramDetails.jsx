import React from 'react';
import { motion } from 'framer-motion';
import { programsData } from '../data/programsData';

export default function ProgramDetails({ programId, onBack, setHovered }) {
  const program = programsData[programId];
  if (!program) return null;

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', background: '#030303', color: '#fff', padding: '100px 5vw', cursor: 'none' }} onMouseEnter={() => setHovered(true)}>
      
      {/* Massive Background Watermark */}
      <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, 0)', fontSize: '20vw', fontWeight: 900, color: 'rgba(255,255,255,0.02)', whiteSpace: 'nowrap', zIndex: 0, pointerEvents: 'none', userSelect: 'none' }}>
        {program.type.toUpperCase()}
      </div>

      <motion.button 
        whileHover={{ x: -10 }} 
        onClick={onBack}
        style={{ position: 'relative', zIndex: 20, background: 'transparent', border: 'none', color: '#8b5cf6', fontSize: '1.2rem', fontWeight: 900, cursor: 'none', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        ← BACK TO ROADMAP
      </motion.button>

      <div style={{ position: 'relative', zIndex: 10, marginBottom: '60px' }}>
        <div style={{ fontSize: '1rem', color: '#888', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '10px' }}>{program.type}</div>
        <h1 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-3px' }}>{program.name}</h1>
      </div>

      <div className="details-grid" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          <div style={{ background: '#0a0a0a', padding: '50px', borderRadius: '32px', border: '1px solid #222', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 20, right: 20, fontSize: '6rem', opacity: 0.1, color: '#8b5cf6', lineHeight: 1 }}>❝</div>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '20px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ display: 'inline-block', width: '15px', height: '15px', background: '#8b5cf6', borderRadius: '50%' }}></span>
              Mentor's Wisdom (10+ Yrs Exp)
            </h3>
            <p style={{ fontSize: '1.3rem', color: '#aaa', lineHeight: 1.8, fontStyle: 'italic' }}>
              "{program.mentorText}"
            </p>
          </div>

          <div>
            <a href={program.officialLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button whileHover={{ scale: 1.05 }} style={{ padding: '20px 40px', background: '#fff', color: '#000', border: 'none', borderRadius: '100px', fontSize: '1.2rem', fontWeight: 900, cursor: 'none' }}>
                VISIT OFFICIAL WEBSITE ↗
              </motion.button>
            </a>
          </div>
          
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          <div style={{ background: '#0a0a0a', padding: '40px', borderRadius: '32px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '20px', fontWeight: 900 }}>Eligibility Criteria</h3>
            <ul style={{ listStyle: 'none' }}>
              {program.eligibility.map((item, i) => (
                <li key={i} style={{ fontSize: '1.1rem', color: '#888', marginBottom: '15px', display: 'flex', gap: '15px' }}>
                  <span style={{ color: '#3b82f6' }}>▹</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: '#0a0a0a', padding: '40px', borderRadius: '32px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '20px', fontWeight: 900 }}>How to Apply (The Elite Way)</h3>
            <ul style={{ listStyle: 'none' }}>
              {program.applicationProTips.map((item, i) => (
                <li key={i} style={{ fontSize: '1.1rem', color: '#888', marginBottom: '15px', display: 'flex', gap: '15px' }}>
                  <span style={{ color: '#10b981' }}>▹</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
