import React from 'react';
import { motion } from 'framer-motion';

const GateCard = ({ i, title, desc, color }) => {
  return (
    <div style={{ position: 'sticky', top: `${15 + i * 4}vh`, height: '80vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <motion.div 
        initial={{ scale: 0.9, y: 100, opacity: 0 }} whileInView={{ scale: 1, y: 0, opacity: 1 }} transition={{ duration: 0.6, type: 'spring' }} 
        viewport={{ margin: '-100px' }}
        style={{ width: '80vw', height: '50vh', background: '#0a0a0a', borderRadius: '40px', borderTop: `4px solid ${color}`, padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 -20px 60px rgba(0,0,0,0.9)' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-2px' }}>{title}</h2>
        <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', color: '#888', maxWidth: '1000px', lineHeight: 1.6 }}>{desc}</p>
        <div style={{ fontSize: '8rem', color: color, alignSelf: 'flex-end', lineHeight: 0.8, opacity: 0.3, fontWeight: 900 }}>0{i + 1}</div>
      </motion.div>
    </div>
  );
};

export default function GatePrepTimeline() {
  const steps = [
    { title: "Sem 1-2: Mathematics & Aptitude", desc: "Build an unbreakable foundation. Focus heavily on Engineering Mathematics, Discrete Math, and General Aptitude. These act as extreme score boosters.", color: "#8b5cf6" },
    { title: "Sem 3-4: Core Computer Science", desc: "Master the heavyweights: Data Structures, Algorithms, Theory of Computation (TOC), and Compiler Design. Do not skip the standard textbooks.", color: "#3b82f6" },
    { title: "Sem 5-6: Systems & Architecture", desc: "Dive deep into Operating Systems, Computer Networks, and DBMS. Start solving previous year questions (PYQs) topic-wise.", color: "#10b981" },
    { title: "Sem 7-8: Mock Tests & Revision", desc: "Stop reading new concepts. Take full-length mock tests every 3 days. Analyze mistakes obsessively. Optimize your 3-hour exam strategy.", color: "#f43f5e" }
  ];

  return (
    <section style={{ position: 'relative', marginTop: '150px', paddingBottom: '20vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '10vh' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, letterSpacing: '-2px', color: '#fff' }}>GATE <span style={{ color: '#8b5cf6' }}>STRATEGY</span></h1>
        <p style={{ fontSize: '1.5rem', color: '#888', marginTop: '20px' }}>The Ultimate 4-Year Stacked Blueprint to AIR 1.</p>
      </div>
      
      <div style={{ position: 'relative', paddingBottom: '30vh' }}>
        {steps.map((step, i) => (
          <div key={i} style={{ height: '80vh', position: 'relative' }}>
            <GateCard i={i} title={step.title} desc={step.desc} color={step.color} />
          </div>
        ))}
      </div>
    </section>
  );
}
