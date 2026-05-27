import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckSquare, Mail, Lock, Eye, EyeOff, User, Users, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', teamName: '', email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '10%', right: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '480px', padding: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', justifyContent: 'center' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', padding: '0.5rem', borderRadius: '8px' }}>
            <CheckSquare size={22} color="white" />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TaskSense</span>
        </div>

        <h1 style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '0.5rem' }}>Create your account</h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.95rem' }}>Start extracting action items for your team — free forever</p>

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Your Name</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input id="signup-name" name="name" type="text" className="input-field" placeholder="Vaishnavi" value={form.name} onChange={handleChange} style={{ paddingLeft: '2.75rem' }} required />
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Team Name</label>
              <div style={{ position: 'relative' }}>
                <Users size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input id="signup-team" name="teamName" type="text" className="input-field" placeholder="Dev Team" value={form.teamName} onChange={handleChange} style={{ paddingLeft: '2.75rem' }} required />
              </div>
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input id="signup-email" name="email" type="email" className="input-field" placeholder="you@team.com" value={form.email} onChange={handleChange} style={{ paddingLeft: '2.75rem' }} required />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input id="signup-password" name="password" type={showPwd ? 'text' : 'password'} className="input-field" placeholder="Min 8 characters" value={form.password} onChange={handleChange} style={{ paddingLeft: '2.75rem', paddingRight: '3rem' }} required minLength={8} />
              <button type="button" onClick={() => setShowPwd(!showPwd)} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button id="signup-btn" type="submit" className="btn-primary" disabled={loading} style={{ padding: '0.9rem', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            {loading ? 'Creating account...' : <><span>Create Free Account</span><ArrowRight size={18} /></>}
          </button>
        </form>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '1rem' }}>
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>

        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '1.5rem', fontSize: '0.9rem' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>Sign in →</Link>
        </p>

        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--surface-border)', textAlign: 'center' }}>
          <Link to="/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>← Back to home</Link>
        </div>
      </div>
    </div>
  );
}
