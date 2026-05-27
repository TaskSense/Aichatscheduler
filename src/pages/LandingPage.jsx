import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Zap, Users, FileText, Download, Bell, ArrowRight, MessageSquare, Target, Clock } from 'lucide-react';

const features = [
  { icon: <MessageSquare size={28} />, title: 'Paste Any Chat', desc: 'WhatsApp, Discord, Slack — paste raw group messages and let TaskSense do the rest.' },
  { icon: <Target size={28} />, title: 'Smart Extraction', desc: 'NLP engine identifies WHO, WHAT, WHEN and priority automatically from natural language.' },
  { icon: <FileText size={28} />, title: 'Instant Action Plans', desc: 'Converts messy discussions into clean, structured task boards in seconds.' },
  { icon: <Users size={28} />, title: 'Team Collaboration', desc: 'Login with your team, share action plans, and track progress together.' },
  { icon: <Clock size={28} />, title: 'Smart Reminders', desc: 'Never miss a deadline. Get email reminders before tasks are due.' },
  { icon: <Download size={28} />, title: 'Export Anywhere', desc: 'Download your action plan as a PDF or CSV for presentations and reporting.' },
];

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 4rem', borderBottom: '1px solid var(--surface-border)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(11,15,25,0.8)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', padding: '0.5rem', borderRadius: '8px' }}>
            <CheckSquare size={22} color="white" />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 700, background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TaskSense</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/login" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, padding: '0.5rem 1rem' }}>Login</Link>
          <Link to="/signup" className="btn-primary" style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', borderRadius: '8px', display: 'inline-flex' }}>Get Started Free</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '8rem 2rem 6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '10%', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }}></div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '2rem', fontSize: '0.875rem', color: '#c4b5fd' }}>
          <Zap size={14} /> NLP-Powered · No Training Needed · Free to Use
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem' }}>
          Stop Losing Action Items in <span style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Chaotic Chats</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
          Paste your WhatsApp group, Discord server, or meeting notes. TaskSense automatically extracts <strong style={{ color: 'var(--text-primary)' }}>who does what, by when</strong>, and at what priority.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <Link to="/signup" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1.1rem', padding: '0.9rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Start Extracting Tasks <ArrowRight size={20} />
          </Link>
          <Link to="/dashboard" style={{ textDecoration: 'none', fontSize: '1.1rem', padding: '0.9rem 2.5rem', borderRadius: '8px', border: '1px solid var(--surface-border)', color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(10px)' }}>
            View Demo
          </Link>
        </div>

        {/* Example card */}
        <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'left' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Example Input</p>
          <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '1rem', fontFamily: 'monospace', fontSize: '0.95rem', color: '#86efac', marginBottom: '1.5rem', lineHeight: 1.7 }}>
            "Vaishnavi prepare the PPT by Friday. Rahul complete the backend today. Priya check the report before submission. Backend is urgent."
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>⚡ Extracted in seconds</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[{ person: 'Vaishnavi', task: 'Prepare PPT', deadline: 'Friday', priority: 'Medium' }, { person: 'Rahul', task: 'Complete Backend', deadline: 'Today', priority: 'High' }, { person: 'Priya', task: 'Check Report', deadline: 'Before submission', priority: 'Medium' }].map((t, i) => (
              <div key={i} className="glass-card" style={{ padding: '1rem' }}>
                <span className={`badge ${t.priority.toLowerCase()}`} style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{t.priority}</span>
                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{t.task}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>👤 {t.person}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>📅 {t.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '6rem 4rem', background: 'rgba(0,0,0,0.2)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Everything Your Team Needs</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.1rem' }}>Built for students and teams who can't afford to lose track of tasks.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          {features.map((f, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Bring Order to Chaos?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Join teams who use TaskSense to never miss an action item again.</p>
        <Link to="/signup" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1.1rem', padding: '0.9rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Create Free Account <ArrowRight size={20} />
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--surface-border)', padding: '2rem 4rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        © 2024 TaskSense · NLP-Based Smart Action Item Extractor · Built for teams & students
      </footer>
    </div>
  );
}
