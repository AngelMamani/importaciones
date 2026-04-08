import React from 'react';
import DashboardStats from '../components/DashboardStats';
import '../Dashboard.css';

const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="page-header animate-fade-in">
        <div className="brand-block">
          <h2>Panel Administrativo P&M</h2>
          <p>
            Gestión centralizada de stock, equipos y ventas para <strong>Maquinarias P&M</strong>.
          </p>
        </div>
      </div>

      <DashboardStats />

      <section className="dashboard-panels">
        <div className="panel-card main-panel">
          <div className="panel-card__header">
            <h3>Últimas Máquinas en Stock</h3>
            <button className="view-all-btn">Ver inventario completo</button>
          </div>
          <div className="table-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            <p>Los datos de inventario se cargarán pronto...</p>
          </div>
        </div>

        <div className="panel-card side-panel">
          <div className="panel-card__header">
            <h3>Actividad Reciente</h3>
          </div>
          <div className="activity-list">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-content">
                  <p>Nueva cotización: {i % 2 === 0 ? 'Torno Paralelo 1500mm' : 'Taladro Radial Mecot'}</p>
                  <p>Hace {i * 15} minutos • Por Administrador</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
