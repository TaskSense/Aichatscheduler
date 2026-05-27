import React, { useState } from 'react';
import { User, Mail, Users, Bell, Shield, Palette, Save, CheckCircle } from 'lucide-react';

export default function SettingsPage() {
  const [profile, setProfile] = useState({ name: 'Vaishnavi', email: 'vaishnavi@team.com', teamName: 'Dev Team' });
  const [notifications, setNotifications] = useState({ emailReminders: true, taskAssigned: true, planCreated: false, weeklyDigest: true });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const SectionHeader = ({ icon, title, desc }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--surface-border)' }}>
      <div style={{ color: 'var(--accent-primary)', background: 'rgba(139,92,246,0.1)', padding: '0.6rem', borderRadius: '10px' }}>{icon}</div>
      <div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{desc}</p>
      </div>
    </div>
  );

  const Toggle = ({ checked, onChange, label, desc }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div>
        <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{label}</p>
        {desc && <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.2rem' }}>{desc}</p>}
      </div>
      <div onClick={onChange} style={{ width: '48px', height: '26px', borderRadius: '999px', background: checked ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)', cursor: 'pointer', position: 'relative', transition: 'all 0.3s', flexShrink: 0 }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'white', position: 'absolute', top: '3px', left: checked ? '25px' : '3px', transition: 'all 0.3s', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}></div>
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Settings</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your account, team, and notification preferences.</p>
        </div>
        {saved && (
          <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '8px', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <CheckCircle size={16} /> Settings saved!
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
        {/* Profile */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <SectionHeader icon={<User size={20} />} title="Profile" desc="Update your personal information" />
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
                <input id="settings-name" className="input-field" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Team Name</label>
                <div style={{ position: 'relative' }}>
                  <Users size={14} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input id="settings-team" className="input-field" value={profile.teamName} onChange={e => setProfile({ ...profile, teamName: e.target.value })} style={{ paddingLeft: '2.5rem' }} />
                </div>
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={14} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input id="settings-email" className="input-field" type="email" value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} style={{ paddingLeft: '2.5rem' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <SectionHeader icon={<Bell size={20} />} title="Notifications" desc="Control how and when TaskSense notifies you" />
          <Toggle label="Email Reminders" desc="Receive email alerts before task deadlines" checked={notifications.emailReminders} onChange={() => setNotifications({ ...notifications, emailReminders: !notifications.emailReminders })} />
          <Toggle label="Task Assigned" desc="Get notified when a new task is assigned to your team" checked={notifications.taskAssigned} onChange={() => setNotifications({ ...notifications, taskAssigned: !notifications.taskAssigned })} />
          <Toggle label="Plan Created" desc="Alert when a new action plan is generated" checked={notifications.planCreated} onChange={() => setNotifications({ ...notifications, planCreated: !notifications.planCreated })} />
          <Toggle label="Weekly Digest" desc="Get a weekly summary of all pending tasks" checked={notifications.weeklyDigest} onChange={() => setNotifications({ ...notifications, weeklyDigest: !notifications.weeklyDigest })} />
        </div>

        {/* About NLP */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <SectionHeader icon={<Shield size={20} />} title="NLP Engine Info" desc="How TaskSense extracts your action items" />
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { label: 'Deadline Detection', value: 'Regex patterns (today, tomorrow, Monday, by Friday...)' },
              { label: 'Priority Detection', value: 'Keyword matching (urgent, ASAP, important, critical)' },
              { label: 'Task Extraction', value: 'Action verbs (prepare, complete, submit, check, do, send)' },
              { label: 'Person Detection', value: 'Capitalized name + named entity recognition (spaCy)' },
              { label: 'Summarization', value: 'Sentence ranking by keyword density' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--accent-primary)' }}>{item.label}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'right' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleSave} id="save-settings-btn" className="btn-primary" style={{ padding: '1rem', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Save size={18} /> Save Settings
        </button>
      </div>
    </div>
  );
}
