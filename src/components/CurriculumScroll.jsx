import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CurriculumScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end end"]
  });
  
  // Deterministic horizontal scroll math:
  // Card = 60vw (x4 = 240vw)
  // Gap = 10vw (x3 = 30vw)
  // PadLeft = 10vw
  // PadRight = 10vw
  // Total Width = 290vw
  // Viewport = 100vw
  // Translate = 290vw - 100vw = 190vw
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-190vw"]);

  const years = [
    { year: 'YEAR 01', title: 'THE ARCHITECTURE OF LOGIC', desc: 'Mastering C++, Advanced Python, Calculus, and Data Structures. Building the mathematical bedrock necessary for true Artificial Intelligence.', color: '#8b5cf6', image: '📐' },
    { year: 'YEAR 02', title: 'MACHINE LEARNING CORE', desc: 'Diving deep into Statistical Modeling, Supervised & Unsupervised Learning, SQL databases, and extensive Exploratory Data Analysis.', color: '#3b82f6', image: '🧠' },
    { year: 'YEAR 03', title: 'DEEP NETWORKS & BIG DATA', desc: 'Constructing Convolutional Neural Networks, Transformers, NLP pipelines, and orchestrating massive datasets with Hadoop & Spark.', color: '#10b981', image: '🕸️' },
    { year: 'YEAR 04', title: 'PRODUCTION & RESEARCH', desc: 'Fine-tuning Large Language Models, Reinforcement Learning, MLOps, and deploying your final Capstone Thesis to global servers.', color: '#f43f5e', image: '🚀' },
  ];

  return (
    <section ref={targetRef} style={{ position: 'relative', height: '400vh', background: '#050505' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Background Typography */}
        <div style={{ position: 'absolute', top: '20%', left: '5%', opacity: 0.03, pointerEvents: 'none' }}>
          <h2 style={{ fontSize: '30vw', fontWeight: 900, whiteSpace: 'nowrap', lineHeight: 0.8, fontFamily: 'Inter' }}>ROADMAP</h2>
        </div>

        <motion.div style={{ x, display: 'flex', gap: '10vw', paddingLeft: '10vw', paddingRight: '10vw', zIndex: 10 }}>
          {years.map((item, i) => (
            <div key={i} style={{ position: 'relative', width: '60vw', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
              
              {/* Aesthetic Math/Algo Background Watermarks */}
              <div style={{ position: 'absolute', top: '-10%', left: '-5%', fontSize: '15rem', fontWeight: 900, color: 'rgba(255,255,255,0.02)', pointerEvents: 'none', lineHeight: 0.8, userSelect: 'none' }}>
                {i === 0 ? 'O(N LOG N)' : i === 1 ? '∇F(X)' : i === 2 ? 'TENSOR' : 'O(1)'}
              </div>

              <div style={{ fontSize: '6rem', marginBottom: '40px', position: 'relative', zIndex: 10 }}>{item.image}</div>
              <div style={{ fontSize: '1.2rem', color: item.color, fontWeight: 900, letterSpacing: '4px', marginBottom: '20px' }}>{item.year}</div>
              <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '30px', letterSpacing: '-2px' }}>{item.title}</h3>
              <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: '#888', lineHeight: 1.6 }}>{item.desc}</p>
              
              {/* Progress Line */}
              <div style={{ marginTop: '60px', width: '100%', height: '2px', background: '#222', position: 'relative' }}>
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, ease: 'easeOut' }} viewport={{ margin: "-100px" }}
                  style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: item.color }} 
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default CurriculumScroll;
