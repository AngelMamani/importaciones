import React from 'react';
import '../Dashboard.css';

const DashboardStats: React.FC = () => {
  const stats = [
    { label: 'Maquinaria en Stock', value: '38', icon: '🏗️', change: '+2', color: 'var(--primary)' },
    { label: 'Pedidos en Tránsito', value: '14', icon: '🚢', change: 'En camino', color: 'var(--accent)' },
    { label: 'Cotizaciones del Mes', value: '256', icon: '📋', change: '+15%', color: 'var(--secondary)' },
    { label: 'Clientes Industriales', value: '112', icon: '🏭', change: '+5', color: '#8b5cf6' },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-card" style={{ animationDelay: `${idx * 0.1}s` }}>
          <span className="stat-card__icon">{stat.icon}</span>
          <h3 className="stat-card__title">{stat.label}</h3>
          <p className="stat-card__value">{stat.value}</p>
          <p className="stat-card__detail">
            <span>{stat.change}</span>
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 400, marginLeft: '4px' }}>este mes</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
