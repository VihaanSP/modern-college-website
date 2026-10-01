import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const programs = [
  { id: 'gsoc', name: 'Google Summer of Code', short: 'GSoC', desc: 'Spend your summer writing code for global open-source organizations. Earn a massive stipend and build a world-class resume.', color: '#fbbc05', bg: '#0a0a0a', num: '01' },
  { id: 'lfx', name: 'LFX Mentorship', short: 'LFX', desc: 'The Linux Foundation. Work directly on the kernel, Kubernetes, and massive cloud-native projects with elite industry mentors.', color: '#3b82f6', bg: '#0a0a0a', num: '02' },
  { id: 'icpc', name: 'ICPC World Finals', short: 'ICPC', desc: 'The Olympics of programming. Compete globally in algorithmic problem-solving to catch the eye of elite HFT firms.', color: '#f43f5e', bg: '#0a0a0a', num: '03' },
  { id: 'cp', name: 'Competitive Programming', short: 'CP', desc: 'Achieve Candidate Master on Codeforces or Guardian on LeetCode. Bypass standard recruitment processes.', color: '#a855f7', bg: '#0a0a0a', num: '04' },
  { id: 'mlh', name: 'MLH Hackathons', short: 'MLH', desc: 'Compete globally. Build incredible projects in 24 hours. Win bounties, swags, and network with the brightest minds on earth.', color: '#ec4899', bg: '#0a0a0a', num: '05' },
  { id: 'bounty', name: 'Bug Bounty', short: 'BOUNTY', desc: 'Hack the planet. Find vulnerabilities in top tech companies like Apple, Google, and Meta. Get paid thousands of dollars legally.', color: '#10b981', bg: '#0a0a0a', num: '06' }
];

export default function OpenSourceCulture({ setHovered, onExplore }) {
  const [active, setActive] = useState('gsoc');

  return (
    <section style={{ padding: '150px 5vw', background: '#030303', color: '#fff' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1 }}>BEYOND <br/> THE CLASSROOM.</h2>
        <p style={{ fontSize: '1.5rem', color: '#888', marginTop: '20px' }}>Don't just pass exams. Build the internet. Hack the planet.</p>
      </div>

      <div style={{ display: 'flex', gap: '20px', height: '600px', width: '100%', maxWidth: '1600px', margin: '0 auto' }}>
        {programs.map((prog) => {
          const isActive = active === prog.id;
          return (
            <motion.div 
              key={prog.id}
              onMouseEnter={() => setActive(prog.id)}
              animate={{ flex: isActive ? 6 : 1, backgroundColor: isActive ? prog.color : prog.bg }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              style={{ borderRadius: '32px', position: 'relative', overflow: 'hidden', display: 'flex', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              
              {/* Highly Aesthetic Collapsed State */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '50px 0' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: '#333' }}>{prog.num}</div>
                    <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: 'clamp(2rem, 3vw, 4rem)', fontWeight: 900, letterSpacing: '10px', color: '#fff', opacity: 0.4 }}>
                      {prog.short}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active Expanded State */}
              <AnimatePresence>
                {isActive && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ delay: 0.15 }} style={{ color: '#000', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', width: '100%' }}>
                    
                    {/* Massive Background Number */}
                    <div style={{ fontSize: '15rem', fontWeight: 900, position: 'absolute', top: '-20px', right: '40px', opacity: 0.15, lineHeight: 0.8, letterSpacing: '-10px' }}>
                      {prog.num}
                    </div>

                    <h3 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-2px', marginBottom: '20px', lineHeight: 1 }}>{prog.name}</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 600, maxWidth: '600px', lineHeight: 1.5, opacity: 0.9 }}>{prog.desc}</p>
                    
                    <motion.button onClick={() => onExplore(prog.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ position: 'relative', zIndex: 20, marginTop: '40px', padding: '20px 50px', background: '#000', color: '#fff', border: 'none', borderRadius: '100px', fontSize: '1.2rem', fontWeight: 900, alignSelf: 'flex-start', cursor: 'none' }}>
                      READ MENTOR ROADMAP →
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
