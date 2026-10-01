import React from 'react';
import { motion } from 'framer-motion';

const Assignments = () => {
  const tasks = [
    { title: 'Fine-tune GPT-2 Model', subject: 'Natural Language Processing', due: 'Tomorrow, 11:59 PM', color: '#ef4444' },
    { title: 'K-Means Clustering Script', subject: 'Machine Learning', due: 'Friday, 5:00 PM', color: '#f59e0b' },
    { title: 'Linear Algebra Quiz', subject: 'Math for AI', due: 'Next Monday', color: '#10b981' },
  ];

  return (
    <motion.div whileHover={{ y: -5 }} className="glass" style={{ padding: '30px', transition: 'all 0.3s ease' }}>
      <h3 style={{ marginBottom: '25px', color: '#f8fafc' }}>Deadlines & Tasks</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {tasks.map((task, i) => (
          <div key={i} style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: `4px solid ${task.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{task.title}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{task.subject}</div>
              </div>
              <div style={{ background: `rgba(${task.color === '#ef4444' ? '239,68,68' : task.color === '#f59e0b' ? '245,158,11' : '16,185,129'}, 0.1)`, color: task.color, padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', whiteSpace: 'nowrap', marginLeft: '10px' }}>
                {task.due}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Assignments;
