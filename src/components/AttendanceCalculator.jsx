import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AttendanceCalculator = () => {
  const [total, setTotal] = useState(100);
  const [attended, setAttended] = useState(85);

  const calculateAffordableAbsences = () => {
    const x = Math.floor((attended - 0.75 * total) / 0.75);
    return x > 0 ? x : 0;
  };

  const percentage = total > 0 ? Math.round((attended/total)*100) : 0;
  const affordable = calculateAffordableAbsences();

  return (
    <div className="bento-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--accent-1)', filter: 'blur(60px)', opacity: 0.3, borderRadius: '50%' }} />
      
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '30px' }}>Attendance 🎯</h3>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', position: 'relative' }}>
        <div style={{ position: 'relative', width: '150px', height: '150px' }}>
          <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%', overflow: 'visible' }}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
            <motion.circle 
              key={percentage} initial={{ strokeDashoffset: 283 }} animate={{ strokeDashoffset: total > 0 ? 283 - (283 * (attended / total)) : 283 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }}
              cx="50" cy="50" r="45" fill="none" stroke="var(--accent-1)" strokeWidth="8" strokeDasharray="283" strokeLinecap="round" 
            />
          </svg>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2.5rem', fontWeight: '900' }}>
            {percentage}%
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '16px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '5px' }}>Total Held</div>
          <input type="number" value={total} onChange={e => setTotal(parseInt(e.target.value)||0)} style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }} />
        </div>
        <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '16px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '5px' }}>Attended</div>
          <input type="number" value={attended} onChange={e => setAttended(parseInt(e.target.value)||0)} style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }} />
        </div>
      </div>

      <div style={{ padding: '15px', background: affordable > 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)', color: affordable > 0 ? 'var(--accent-3)' : 'var(--accent-4)', borderRadius: '16px', fontWeight: 'bold', textAlign: 'center', marginTop: 'auto' }}>
        {affordable > 0 ? `Safe! You can bunk ${affordable} classes 🛌` : `Danger! Don't miss any classes 🚨`}
      </div>
    </div>
  );
};
export default AttendanceCalculator;
