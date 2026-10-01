import React from 'react';
import { motion } from 'framer-motion';

const Holidays = () => {
  return (
    <motion.div whileHover={{ y: -5 }} className="glass" style={{ padding: '30px', transition: 'all 0.3s ease' }}>
      <h3 style={{ marginBottom: '25px', color: '#f8fafc' }}>Holiday Radar 🌴</h3>
      <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '12px' }}>
        <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '10px' }}>
          Diwali Break Approaching!
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>
          You have <strong>5 consecutive holidays</strong> coming up next week.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
          <span>Oct 30 - Nov 3</span>
          <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>5 Days Off</span>
        </div>
      </div>
    </motion.div>
  );
};
export default Holidays;
