import React, { useState } from 'react';
import { FiSearch, FiFilter, FiPlus, FiEdit2, FiImage, FiEye, FiTrash2, FiTag, FiLayers, FiBox } from 'react-icons/fi';
import type { Machine } from '../types';
import MachineryModal from '../components/MachineryModal';
import MachineDetailModal from '../components/MachineDetailModal';
import './MachineryList.css';

const INITIAL_DATA: Machine[] = [
  { id: 'MQ-001', name: 'Excavadora Cat 320', brand: 'Caterpillar', type: 'Excavadora', year: 2022, status: 'En Stock', price: 120000, stock: 2, imageUrl: 'https://images.unsplash.com/photo-1549247654-e69213dccee3?w=300&auto=format&fit=crop&q=60' },
  { id: 'MQ-002', name: 'Retroexcavadora 310L', brand: 'John Deere', type: 'Retroexcavadora', year: 2021, status: 'Importación', price: 85000, stock: 5 },
  { id: 'MQ-003', name: 'Cargador Frontal WA380', brand: 'Komatsu', type: 'Cargador', year: 2023, status: 'Reservado', price: 150000, stock: 0 },
];

export default function MachineryList() {
  const [machinery, setMachinery] = useState<Machine[]>(INITIAL_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMachine, setEditingMachine] = useState<Machine | null>(null);
  const [viewingMachine, setViewingMachine] = useState<Machine | null>(null);

  const handleOpenModal = (machine: Machine | null = null) => {
    setEditingMachine(machine);
    setIsModalOpen(true);
  };

  const handleSaveMachine = (savedMachine: Machine) => {
    setMachinery(prev => {
      const exists = prev.find(m => m.id === savedMachine.id);
      if (exists) {
        return prev.map(m => m.id === savedMachine.id ? savedMachine : m);
      }
      return [savedMachine, ...prev];
    });
  };

  const handleDeleteMachine = (id: string) => {
    if (window.confirm('🚨 ¿Estás seguro que deseas eliminar permanentemente esta máquina?\n\nEsta acción de administrador no se puede deshacer.')) {
      setMachinery(prev => prev.filter(m => m.id !== id));
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  return (
    <div className="machinery-container">
      <header className="page-header flex-header">
        <div>
          <h1>Maquinarias</h1>
          <p>Catálogo e inventario de equipos pesados</p>
        </div>
        <button className="btn-primary" onClick={() => handleOpenModal(null)}>
          <FiPlus size={24} strokeWidth={3} /> Nueva Máquina
        </button>
      </header>

      <div className="toolbar glass">
        <div className="search-bar">
          <FiSearch className="icon" />
          <input type="text" placeholder="Buscar por modelo, marca o ID..." />
        </div>
        <button className="btn-secondary">
          <FiFilter /> Filtros
        </button>
      </div>

      <div className="machine-grid">
        {machinery.map(item => (
          <div className="machine-card glass" key={item.id} onClick={() => setViewingMachine(item)}>
            <div className="machine-card-img-wrapper">
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.name} className="machine-card-img" />
              ) : (
                <div className="machine-card-img-placeholder"><FiImage size={40} /></div>
              )}
              <span className={`badge status-${item.status.toLowerCase().replace(' ', '')} floating-badge`}>
                {item.status}
              </span>
            </div>
            
            <div className="machine-card-content">
              <div className="machine-card-header">
                <h3 className="machine-name">{item.name}</h3>
                <span className="machine-brand">{item.brand} • {item.year}</span>
              </div>
              
              <div className="machine-card-price">
                {formatPrice(item.price)}
              </div>
              
              <div className="machine-card-details">
                <div className="machine-detail-row">
                  <div className="detail-left"><FiTag /> Código</div>
                  <div className="detail-right">{item.id}</div>
                </div>
                <div className="machine-detail-row">
                  <div className="detail-left"><FiLayers /> Segmento</div>
                  <div className="detail-right">{item.type}</div>
                </div>
                <div className="machine-detail-row" style={{ marginTop: '0.25rem', paddingTop: '0.5rem', borderTop: '1px dashed var(--glass-border)' }}>
                  <div className="detail-left"><FiBox /> Inventario</div>
                  <div className="detail-right">
                    <span className={`stock-badge ${item.stock > 0 ? "in-stock" : "out-of-stock"}`}>
                      {item.stock} {item.stock === 1 ? 'unidad' : 'unidades'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="machine-card-footer">
              <div className="fast-actions">
                <button className="btn-fast view" onClick={(e) => { e.stopPropagation(); setViewingMachine(item); }} title="Ver detalle completo">
                  <FiEye size={18} /> <span>Ver</span>
                </button>
                <button className="btn-fast edit" onClick={(e) => { e.stopPropagation(); handleOpenModal(item); }} title="Editar información">
                  <FiEdit2 size={18} /> <span>Editar</span>
                </button>
                <button className="btn-fast delete" onClick={(e) => { e.stopPropagation(); handleDeleteMachine(item.id); }} title="Eliminar registro">
                  <FiTrash2 size={18} /> <span>Borrar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MachineryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        machine={editingMachine}
        onSave={handleSaveMachine}
      />

      <MachineDetailModal 
        isOpen={!!viewingMachine}
        onClose={() => setViewingMachine(null)}
        machine={viewingMachine}
      />
    </div>
  );
}
