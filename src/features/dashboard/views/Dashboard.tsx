import { FiTrendingUp, FiBox, FiUsers } from 'react-icons/fi';
import './Dashboard.css';

export default function Dashboard() {
  const stats = [
    { title: 'Inventario (Máquinas)', value: '14', icon: <FiBox />, colorClass: 'icon-neon-green' },
    { title: 'Valor Estimado', value: '$850,000', icon: <FiTrendingUp />, colorClass: 'icon-neon-yellow' },
    { title: 'Catálogos Compartidos (WhatsApp)', value: '32', icon: <FiUsers />, colorClass: 'icon-neon-cyan' }
  ];

  return (
    <div className="dashboard-container">
      <header className="page-header">
        <div>
          <h1>Panel Principal</h1>
          <p>Tu centro de control y visualización de inventario</p>
        </div>
      </header>
      
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <p className="value">{stat.value}</p>
            </div>
            <div className={`stat-icon-wrapper ${stat.colorClass}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="recent-activity">
          <h2>Últimos Movimientos</h2>
          <div className="activity-list">
            <p>
              <span className="activity-pulse-green"></span>
              Enviado por WhatsApp: <strong>Excavadora Cat 320</strong> a un cliente nuevo.
            </p>
            <p>
              <span className="activity-pulse-blue"></span>
              Nueva maquinaria añadida: <strong>Camión Volquete Volvo FMX</strong>.
            </p>
            <p>
              <span className="activity-pulse-white"></span>
              Catálogo general actualizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
