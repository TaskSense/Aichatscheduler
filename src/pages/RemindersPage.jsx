import React, { useState } from 'react';
import { Bell, Plus, Trash2, Clock, User, CheckCircle, AlertCircle } from 'lucide-react';

const mockReminders = [
  { id: 1, task: 'Complete the backend', person: 'Rahul', deadline: 'Today, 6:00 PM', priority: 'High', sent: false },
  { id: 2, task: 'Prepare the PPT', person: 'Vaishnavi', deadline: 'Friday, 9:00 AM', priority: 'Medium', sent: true },
  { id: 3, task: 'Check the report', person: 'Priya', deadline: 'Tomorrow, 12:00 PM', priority: 'Medium', sent: false },
  { id: 4, task: 'Set up Supabase', person: 'Ankit', deadline: 'Wednesday, 3:00 PM', priority: 'High', sent: true },
];

export default function RemindersPage() {
  const [reminders, setReminders] = useState(mockReminders);
  const [showAdd, setShowAdd] = useState(false);
  const [newReminder, setNewReminder] = useState({ task: '', person: '', deadline: '', priority: 'Medium' });

  const deleteReminder = (id) => setReminders(reminders.filter(r => r.id !== id));

  const sendReminder = (id) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, sent: true } : r));
  };

  const addReminder = (e) => {
    e.preventDefault();
    setReminders([...reminders, { id: Date.now(), ...newReminder, sent: false }]);
    setNewReminder({ task: '', person: '', deadline: '', priority: 'Medium' });
    setShowAdd(false);
  };

  const pending = reminders.filter(r => !r.sent);
  const sent = reminders.filter(r => r.sent);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Reminders</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Send deadline reminders to your team members.</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> Add Reminder
        </button>
      </div>

      {/* Add Reminder Form */}
      {showAdd && (
        <div className="glass-panel animate-fade-in" style={{ padding: '1.75rem', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1.25rem' }}>New Reminder</h3>
          <form onSubmit={addReminder} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Task</label>
              <input className="input-field" placeholder="Task description" value={newReminder.task} onChange={e => setNewReminder({ ...newReminder, task: e.target.value })} required />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Person</label>
              <input className="input-field" placeholder="Team member name" value={newReminder.person} onChange={e => setNewReminder({ ...newReminder, person: e.target.value })} required />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Deadline</label>
              <input className="input-field" placeholder="e.g. Friday 5PM" value={newReminder.deadline} onChange={e => setNewReminder({ ...newReminder, deadline: e.target.value })} required />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Priority</label>
              <select className="input-field" value={newReminder.priority} onChange={e => setNewReminder({ ...newReminder, priority: e.target.value })}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.75rem' }}>
              <button type="submit" className="btn-primary" style={{ flex: 1 }}>Save</button>
              <button type="button" onClick={() => setShowAdd(false)} style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', color: 'var(--text-secondary)', borderRadius: '8px', padding: '0.75rem', cursor: 'pointer' }}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { label: 'Total Reminders', value: reminders.length, icon: <Bell size={20} />, color: 'var(--accent-primary)' },
          { label: 'Pending', value: pending.length, icon: <AlertCircle size={20} />, color: '#f59e0b' },
          { label: 'Sent', value: sent.length, icon: <CheckCircle size={20} />, color: '#10b981' },
        ].map((s, i) => (
          <div key={i} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: s.color, padding: '0.75rem', background: `${s.color}20`, borderRadius: '10px' }}>{s.icon}</div>
            <div>
              <p style={{ fontSize: '1.75rem', fontWeight: 700 }}>{s.value}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pending Reminders */}
      {pending.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem' }}>⏳ Pending ({pending.length})</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {pending.map(r => (
              <div key={r.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className={`badge ${r.priority.toLowerCase()}`}>{r.priority}</span>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{r.task}</p>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <span><User size={12} style={{ display: 'inline', marginRight: '3px' }} />{r.person}</span>
                      <span><Clock size={12} style={{ display: 'inline', marginRight: '3px' }} />{r.deadline}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button onClick={() => sendReminder(r.id)} className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                    <Bell size={14} /> Send
                  </button>
                  <button onClick={() => deleteReminder(r.id)} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5', borderRadius: '8px', padding: '0.5rem', cursor: 'pointer' }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sent Reminders */}
      {sent.length > 0 && (
        <div>
          <h3 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>✅ Sent ({sent.length})</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {sent.map(r => (
              <div key={r.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', opacity: 0.6 }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <span className={`badge ${r.priority.toLowerCase()}`}>{r.priority}</span>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{r.task}</p>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <span>👤 {r.person}</span>
                      <span>📅 {r.deadline}</span>
                    </div>
                  </div>
                </div>
                <span style={{ color: '#10b981', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} /> Reminder Sent
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
