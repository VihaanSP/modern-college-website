import React from 'react';
import { motion } from 'framer-motion';

const Professors = () => {
  const profs = [
    { name: 'Dr. A. Sharma', subject: 'Deep Learning', rating: '4.9/5', emoji: '🧠' },
    { name: 'Prof. R. Gupta', subject: 'NLP', rating: '4.8/5', emoji: '🗣️' },
    { name: 'Dr. M. Desai', subject: 'Big Data', rating: '4.5/5', emoji: '📊' },
    { name: 'Prof. S. Verma', subject: 'Math for AI', rating: '4.7/5', emoji: '📐' },
  ];

  return (
    <div className="bento-card">
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '30px' }}>Faculty Directory 👨‍🏫</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {profs.map((prof, i) => (
          <motion.div whileHover={{ y: -10, scale: 1.02 }} key={i} style={{ background: 'rgba(0,0,0,0.3)', padding: '30px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>{prof.emoji}</div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '5px', color: 'var(--text-main)' }}>{prof.name}</h4>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>{prof.subject}</div>
            <div style={{ display: 'inline-block', background: 'rgba(255, 215, 0, 0.1)', color: '#ffd700', padding: '5px 12px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 'bold' }}>
              ⭐ {prof.rating}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Professors;
