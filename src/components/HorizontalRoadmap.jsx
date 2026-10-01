import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalRoadmap = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const years = [
    { year: '01', title: 'FOUNDATIONS', desc: 'Core mathematics, C++, Python, and fundamental algorithms building the base of AI.' },
    { year: '02', title: 'MACHINE LEARNING', desc: 'Statistical modeling, supervised & unsupervised learning, and extensive data exploration.' },
    { year: '03', title: 'DEEP NETWORKS', desc: 'Computer vision, NLP, transformer architectures, and big data ecosystems.' },
    { year: '04', title: 'RESEARCH & PROD', desc: 'LLM fine-tuning, Reinforcement Learning, MLOps, and the final capstone thesis.' },
  ];

  return (
    <section ref={targetRef} style={{ position: 'relative', height: '400vh', background: '#000' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Background massive text */}
        <div style={{ position: 'absolute', top: '20%', left: '5%', opacity: 0.05, zIndex: 0, pointerEvents: 'none' }}>
          <h2 style={{ fontSize: '25vw', fontWeight: 900, whiteSpace: 'nowrap' }}>CURRICULUM</h2>
        </div>

        <motion.div style={{ x, display: 'flex', gap: '8vw', paddingLeft: '10vw', paddingRight: '50vw', zIndex: 10 }}>
          {years.map((item, i) => (
            <div key={i} style={{ minWidth: '400px', width: '35vw', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '8rem', fontWeight: 900, color: '#333', lineHeight: 1, marginBottom: '20px' }}>
                {item.year}
              </div>
              <h3 style={{ fontSize: '3.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
              <div style={{ marginTop: '50px', width: '100%', height: '2px', background: '#222' }}>
                <div style={{ width: '30%', height: '100%', background: 'var(--text-white)' }} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalRoadmap;
