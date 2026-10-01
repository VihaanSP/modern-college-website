import React from 'react';
import { motion } from 'framer-motion';
import AttendanceCalculator from './AttendanceCalculator';
import CGPACalculator from './CGPACalculator';
import AILabStatus from './AILabStatus';
import Timetable from './Timetable';
import Professors from './Professors';

export default function Dashboard({ setHovered }) {
  return (
    <section style={{ padding: '50px 5vw 150px 5vw', background: '#030303', position: 'relative', minHeight: '100vh' }}>
      
      <div style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 900, color: '#fff', lineHeight: 0.9, letterSpacing: '-3px' }}>
          STUDENT PORTAL
        </h2>
        <p style={{ color: '#888', fontSize: '1.5rem', maxWidth: '700px', margin: '30px auto 0 auto' }}>
          Welcome to your isolated command center. Track your metrics, attendance, and CGPA in real-time.
        </p>
      </div>

      <div 
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px', maxWidth: '1600px', margin: '0 auto' }}
      >
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ gridColumn: 'span 4' }}>
          <AttendanceCalculator />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ gridColumn: 'span 8' }}>
          <CGPACalculator />
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ gridColumn: 'span 6' }}>
          <AILabStatus />
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} style={{ gridColumn: 'span 6' }}>
          <Timetable />
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} style={{ gridColumn: 'span 12' }}>
          <Professors />
        </motion.div>
      </div>
    </section>
  );
}
