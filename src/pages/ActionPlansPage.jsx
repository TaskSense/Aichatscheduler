import React, { useState } from 'react';
import { Calendar, User, Trash2, CheckCircle, Clock, FileText, Download, Eye } from 'lucide-react';

const mockPlans = [
  {
    id: 1, title: 'Sprint Planning - May 26', date: '2024-05-26', summary: 'Sprint kickoff meeting. Backend, frontend and testing tasks assigned.',
    tasks: [
      { person: 'Vaishnavi', task: 'Prepare the PPT', deadline: 'Friday', priority: 'Medium', done: true },
      { person: 'Rahul', task: 'Complete the backend', deadline: 'Today', priority: 'High', done: false },
      { person: 'Priya', task: 'Check the report', deadline: 'Before submission', priority: 'Medium', done: true },
    ]
  },
  {
    id: 2, title: 'Project Review - May 24', date: '2024-05-24', summary: 'Reviewed project milestones. Database and deployment tasks identified.',
    tasks: [
      { person: 'Ankit', task: 'Set up Supabase database', deadline: 'Wednesday', priority: 'High', done: true },
      { person: 'Sneha', task: 'Deploy frontend on Vercel', deadline: 'Thursday', priority: 'Medium', done: false },
    ]
  },
  {
    id: 3, title: 'Client Demo Prep - May 22', date: '2024-05-22', summary: 'Prepared for client demo. UI fixes and slide deck updates assigned.',
    tasks: [
      { person: 'Vaishnavi', task: 'Fix UI bugs', deadline: 'Monday', priority: 'High', done: true },
      { person: 'Rahul', task: 'Update slide deck', deadline: 'Monday', priority: 'Low', done: true },
    ]
  }
];

export default function ActionPlansPage() {
  const [plans, setPlans] = useState(mockPlans);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleTask = (planId, taskIdx) => {
    setPlans(plans.map(p => p.id === planId
      ? { ...p, tasks: p.tasks.map((t, i) => i === taskIdx ? { ...t, done: !t.done } : t) }
      : p
    ));
  };

  const exportCSV = (plan) => {
    const csv = ['Person,Task,Deadline,Priority,Status',
      ...plan.tasks.map(t => `${t.person},${t.task},${t.deadline},${t.priority},${t.done ? 'Done' : 'Pending'}`)
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${plan.title}.csv`; a.click();
  };

  const allDone = (plan) => plan.tasks.every(t => t.done);

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Action Plans</h2>
        <p style={{ color: 'var(--text-secondary)' }}>View and manage all your previously extracted action plans.</p>
      </div>

      {selectedPlan ? (
        <div className="animate-fade-in">
          <button onClick={() => setSelectedPlan(null)} style={{ background: 'none', border: '1px solid var(--surface-border)', color: 'var(--text-secondary)', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ← Back to all plans
          </button>

          <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem' }}>{selectedPlan.title}</h3>
              <button onClick={() => exportCSV(selectedPlan)} className="btn-primary" style={{ fontSize: '0.875rem' }}>
                <Download size={16} /> Export CSV
              </button>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>📝 {selectedPlan.summary}</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>📅 {selectedPlan.date}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {selectedPlan.tasks.map((task, i) => (
              <div key={i} className="glass-card" style={{ opacity: task.done ? 0.7 : 1, transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className={`badge ${task.priority.toLowerCase()}`}>{task.priority}</span>
                  <button onClick={() => toggleTask(selectedPlan.id, i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: task.done ? '#10b981' : 'var(--text-secondary)' }}>
                    <CheckCircle size={20} />
                  </button>
                </div>
                <p style={{ fontWeight: 600, marginBottom: '0.75rem', textDecoration: task.done ? 'line-through' : 'none' }}>{task.task}</p>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span>👤 {task.person}</span>
                  <span>📅 {task.deadline}</span>
                  <span style={{ color: task.done ? '#10b981' : '#f59e0b' }}>{task.done ? '✅ Completed' : '⏳ Pending'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {plans.map(plan => (
            <div key={plan.id} className="glass-card animate-fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem' }}>{plan.title}</h3>
                  <span className="badge" style={{ background: allDone(plan) ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)', color: allDone(plan) ? '#6ee7b7' : '#fcd34d', border: `1px solid ${allDone(plan) ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.3)'}` }}>
                    {allDone(plan) ? 'All Done ✓' : `${plan.tasks.filter(t => t.done).length}/${plan.tasks.length} Done`}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{plan.summary}</p>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <span><Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />{plan.date}</span>
                  <span><User size={12} style={{ display: 'inline', marginRight: '4px' }} />{plan.tasks.length} tasks</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={() => exportCSV(plan)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', color: 'var(--text-secondary)', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <Download size={14} /> CSV
                </button>
                <button onClick={() => setSelectedPlan(plan)} className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Eye size={14} /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
