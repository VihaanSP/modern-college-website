import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([
    { id: 1, sgpa: '9.2', credits: '24' },
    { id: 2, sgpa: '8.8', credits: '22' }
  ]);

  const addSemester = () => setSemesters([...semesters, { id: semesters.length + 1, sgpa: '', credits: '' }]);

  const updateSemester = (index, field, value) => {
    const newSems = [...semesters];
    newSems[index][field] = value;
    setSemesters(newSems);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    semesters.forEach(s => {
      const credits = parseFloat(s.credits) || 0;
      const sgpa = parseFloat(s.sgpa) || 0;
      totalCredits += credits;
      totalPoints += sgpa * credits;
    });
    return totalCredits === 0 ? '0.00' : (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="bento-card" style={{ height: '100%', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 400px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '30px' }}>CGPA Engine 🚀</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <AnimatePresence>
            {semesters.map((sem, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                key={sem.id} style={{ display: 'flex', gap: '15px', background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '16px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontWeight: 'bold', width: '40px' }}>S{sem.id}</div>
                <input 
                  type="number" placeholder="SGPA" value={sem.sgpa} onChange={(e) => updateSemester(idx, 'sgpa', e.target.value)}
                  style={{ background: 'transparent', border: 'none', color: 'white', flex: 1, fontSize: '1.2rem', fontWeight: 'bold' }}
                />
                <input 
                  type="number" placeholder="Credits" value={sem.credits} onChange={(e) => updateSemester(idx, 'credits', e.target.value)}
                  style={{ background: 'transparent', border: 'none', color: 'white', flex: 1, fontSize: '1.2rem', fontWeight: 'bold' }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} onClick={addSemester}
          style={{ width: '100%', padding: '20px', marginTop: '15px', background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none', borderRadius: '16px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
        >
          + Add Semester
        </motion.button>
      </div>

      <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))', borderRadius: '24px', position: 'relative', overflow: 'hidden', minHeight: '250px' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '250px', height: '250px', background: 'var(--accent-2)', filter: 'blur(70px)', opacity: 0.5, borderRadius: '50%' }} />
        <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '10px', zIndex: 1, fontWeight: 'bold' }}>Overall CGPA</div>
        <motion.div 
          key={calculateCGPA()} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', bounce: 0.6 }}
          style={{ fontSize: 'clamp(5rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 1, zIndex: 1, color: '#fff' }}
        >
          {calculateCGPA()}
        </motion.div>
      </div>
    </div>
  );
};
export default CGPACalculator;
