import React from 'react';
import { motion } from 'framer-motion';

const Timetable = () => {
  const classes = [
    { time: '09:00 AM', title: 'Computer Networks', room: 'Room 301', color: 'var(--accent-1)' },
    { time: '11:30 AM', title: 'Machine Learning', room: 'AI Lab', color: 'var(--accent-2)' },
    { time: '02:00 PM', title: 'Software Engg', room: 'Room 204', color: 'var(--accent-3)' },
  ];

  return (
    <div className="bento-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '30px' }}>Schedule 📅</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flex: 1 }}>
        {classes.map((cls, i) => (
          <motion.div whileHover={{ scale: 1.02, x: 10 }} key={i} style={{ display: 'flex', gap: '20px', background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '16px', borderLeft: `6px solid ${cls.color}` }}>
            <div style={{ fontWeight: 'bold', color: 'var(--text-muted)', minWidth: '80px', paddingTop: '5px' }}>{cls.time}</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '5px' }}>{cls.title}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{cls.room}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Timetable;
