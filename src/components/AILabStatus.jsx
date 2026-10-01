import React from 'react';
import { motion } from 'framer-motion';

const AILabStatus = () => {
  return (
    <div className="bento-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '30px' }}>DGX Servers 💻</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 'bold' }}>
            <span>Node Alpha (RTX 4090x4)</span>
            <span style={{ color: 'var(--accent-4)' }}>95%</span>
          </div>
          <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden' }}>
            <motion.div initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ duration: 1.5, type: 'spring' }} style={{ height: '100%', background: 'var(--accent-4)', borderRadius: '100px' }} />
          </div>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 'bold' }}>
            <span>Node Beta (A100x2)</span>
            <span style={{ color: 'var(--accent-3)' }}>40%</span>
          </div>
          <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden' }}>
            <motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ duration: 1.5, type: 'spring' }} style={{ height: '100%', background: 'var(--accent-3)', borderRadius: '100px' }} />
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(0,0,0,0.3))', padding: '20px', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
        <div style={{ fontSize: '3rem' }}>☁️</div>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-2)', lineHeight: 1 }}>45</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>Cloud Credits Left</div>
        </div>
      </div>
    </div>
  );
};
export default AILabStatus;
