import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BrainCircuit, Database, Code, Cpu, Network, Rocket } from 'lucide-react';

const RevealText = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

const Landing = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div style={{ color: 'var(--text-main)', paddingBottom: '100px' }}>
      
      {/* Hero Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', padding: '20px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: 'spring' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
            <BrainCircuit size={48} color="#8b5cf6" />
            <h2 style={{ fontSize: '2rem', color: '#8b5cf6', letterSpacing: '2px', textTransform: 'uppercase' }}>B.Tech CSE</h2>
          </div>
          <h1 style={{ fontSize: '6vw', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', background: 'linear-gradient(135deg, #f8fafc, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Artificial Intelligence <br/> & Data Science
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 50px' }}>
            Parul University's elite department building the next generation of AI engineers, researchers, and data scientists. Step into the future.
          </p>
          <Link to="/dashboard" style={{
            padding: '18px 50px', background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
            color: 'white', textDecoration: 'none', borderRadius: '40px', fontWeight: 'bold', fontSize: '1.2rem',
            boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)', display: 'inline-flex', alignItems: 'center', gap: '10px'
          }}>
            <Rocket /> Access AI Portal
          </Link>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '50px', color: 'var(--text-muted)', letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}
        >
          Scroll to explore
          <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #8b5cf6, transparent)', margin: '10px auto 0' }} />
        </motion.div>
      </div>

      {/* Department Vision */}
      <div style={{ padding: '100px 5vw', background: 'rgba(255,255,255,0.02)' }}>
        <RevealText>
          <h2 style={{ fontSize: '3.5vw', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>Shaping the Age of AI</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
            <motion.div whileHover={{ y: -10, scale: 1.02 }} className="glass" style={{ flex: '1 1 300px', padding: '40px', textAlign: 'center' }}>
              <Cpu size={40} color="#3b82f6" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>High-Performance Computing</h3>
              <p style={{ color: 'var(--text-muted)' }}>Access to NVIDIA DGX clusters and cloud GPUs for training massive Deep Learning models.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10, scale: 1.02 }} className="glass" style={{ flex: '1 1 300px', padding: '40px', textAlign: 'center' }}>
              <Database size={40} color="#8b5cf6" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Big Data Ecosystems</h3>
              <p style={{ color: 'var(--text-muted)' }}>Master Hadoop, Spark, and real-time data pipelines managing terabytes of information.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10, scale: 1.02 }} className="glass" style={{ flex: '1 1 300px', padding: '40px', textAlign: 'center' }}>
              <Network size={40} color="#10b981" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Neural Architectures</h3>
              <p style={{ color: 'var(--text-muted)' }}>From CNNs to Transformers, build the architectures powering ChatGPT and Midjourney.</p>
            </motion.div>
          </div>
        </RevealText>
      </div>

      {/* 4-Year Roadmap Timeline */}
      <div style={{ padding: '150px 5vw', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3.5vw', fontWeight: 900, marginBottom: '80px', textAlign: 'center' }}>The 4-Year Mastery Roadmap</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '50px', top: '0', bottom: '0', width: '4px', background: 'linear-gradient(to bottom, #8b5cf6, #3b82f6)' }}></div>

          {[
            { year: 'First Year', title: 'Foundations of Compute', desc: 'C++, Python, Advanced Calculus, Linear Algebra, and Data Structures.', icon: <Code /> },
            { year: 'Second Year', title: 'Machine Learning Core', desc: 'Statistical Modeling, Supervised/Unsupervised Learning, SQL, and EDA.', icon: <BrainCircuit /> },
            { year: 'Third Year', title: 'Deep Learning & NLP', desc: 'Neural Networks, Computer Vision, Transformers, and Big Data Analytics.', icon: <Network /> },
            { year: 'Fourth Year', title: 'AI Production & Research', desc: 'MLOps, LLM Fine-tuning, Reinforcement Learning, and Final Capstone.', icon: <Rocket /> }
          ].map((item, i) => (
            <RevealText key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginLeft: '30px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#050505', border: '4px solid #8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, transform: 'translateX(-4px)' }}>
                  {item.icon}
                </div>
                <motion.div whileHover={{ x: 10 }} className="glass" style={{ flex: 1, padding: '40px', borderLeft: '4px solid #8b5cf6' }}>
                  <div style={{ color: '#8b5cf6', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>{item.year}</div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{item.desc}</p>
                </motion.div>
              </div>
            </RevealText>
          ))}
        </div>
      </div>

      {/* Massive Interactive Project Showcase */}
      <div style={{ padding: '100px 0', overflow: 'hidden', background: 'rgba(139, 92, 246, 0.05)' }}>
        <h2 style={{ fontSize: '3.5vw', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Student AI Projects</h2>
        <div style={{ display: 'flex', gap: '30px', padding: '0 5vw', overflowX: 'auto', paddingBottom: '40px', scrollSnapType: 'x mandatory' }}>
          {[
            { name: 'Autonomous Nav-Bot', tech: 'ROS, OpenCV, PyTorch', img: '🤖', desc: 'A self-navigating drone using real-time object detection.' },
            { name: 'Parul-LLM', tech: 'Llama 3 Fine-tune, LangChain', img: '🧠', desc: 'A custom student-assistant LLM fine-tuned on university docs.' },
            { name: 'Fake News Detector', tech: 'NLP, BERT, FastAPI', img: '📰', desc: 'Real-time text analysis engine for fact-checking news feeds.' },
            { name: 'Medical Scan AI', tech: 'ResNet50, TensorFlow', img: '🏥', desc: 'CNN model detecting anomalies in X-Ray imagery with 98% acc.' },
            { name: 'Algorithmic Trader', tech: 'LSTM, Pandas, Scikit-learn', img: '📈', desc: 'Time-series forecasting model for predictive stock trading.' },
          ].map((proj, i) => (
            <motion.div whileHover={{ y: -10, scale: 1.05 }} key={i} className="glass" style={{ minWidth: '350px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer', scrollSnapAlign: 'center' }}>
              <div style={{ fontSize: '5rem', marginBottom: '20px' }}>{proj.img}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{proj.name}</h3>
              <p style={{ color: '#3b82f6', fontWeight: 'bold', marginBottom: '15px' }}>{proj.tech}</p>
              <p style={{ color: 'var(--text-muted)' }}>{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Landing;
