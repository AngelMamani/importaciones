import React from 'react';

const InventoryPage: React.FC = () => {
  return (
    <div className="inventory-page">
      <div className="page-header animate-fade-in">
        <div className="brand-block">
          <h2>Stock de Maquinaria</h2>
          <p>Gestión completa del inventario industrial y equipos en tránsito.</p>
        </div>
        <div className="header-actions">
          <button className="primary-btn">
            <span>+</span> Nueva Maquinaria
          </button>
        </div>
      </div>

      <div className="inventory-content animate-slide-up">
        {/* Placeholder for inventory table */}
        <div className="panel-card">
          <div className="table-placeholder" style={{ minHeight: '400px' }}>
            <p>Aquí se listará toda la maquinaria disponible...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
