import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function Copilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am Parul AiDS Copilot. How can I assist you with your curriculum or campus life today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "That's a fantastic question. This AI is currently demonstrating the highest tier of web architecture possible. You've got the ultimate Parul University portal right here.", sender: 'ai' }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        style={{ position: 'fixed', bottom: '40px', right: '40px', width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)' }}
      >
        <MessageSquare size={30} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }}
            style={{ position: 'fixed', bottom: '130px', right: '40px', width: '400px', height: '600px', background: '#111', borderRadius: '24px', zIndex: 1000, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 50px rgba(0,0,0,0.8)', border: '1px solid #333' }}
          >
            {/* Header */}
            <div style={{ padding: '20px', background: '#1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                <strong style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'Inter' }}>AiDS Copilot</strong>
              </div>
              <X size={24} color="#888" style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
            </div>

            {/* Messages Area */}
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', fontFamily: 'Inter' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', background: msg.sender === 'user' ? '#8b5cf6' : '#222', color: '#fff', padding: '15px 20px', borderRadius: '20px', borderBottomRightRadius: msg.sender === 'user' ? '4px' : '20px', borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '20px', maxWidth: '85%', lineHeight: 1.5 }}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} style={{ padding: '20px', borderTop: '1px solid #333', display: 'flex', gap: '10px', background: '#1a1a1a' }}>
              <input 
                type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask anything..."
                style={{ flex: 1, padding: '15px 20px', borderRadius: '100px', border: '1px solid #333', background: '#0a0a0a', color: '#fff', fontSize: '1rem', outline: 'none', fontFamily: 'Inter' }}
              />
              <button type="submit" style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#3b82f6', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
