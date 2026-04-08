import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AdminLayout.css';
import logoImg from '../assets/logo2.png';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Panel General', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    )},
    { id: 'inventory', label: 'Stock Maquinaria', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
    )},
    { id: 'sales', label: 'Cotizaciones', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    )},
    { id: 'customers', label: 'Clientes', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    )},
  ];

  return (
    <div className={`admin-shell ${isSidebarOpen ? 'mobile-menu-open' : ''}`}>
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'admin-sidebar--open' : ''}`}>
        <div className="brand-card">
          <img className="brand-card__logo" src={logoImg} alt="P&M Logo" />
          <div className="brand-block">
            <p className="brand-block__label">MÁQUINAS</p>
            <h1>P&M S.A.C.</h1>
            <span>Importaciones Directas</span>
          </div>
        </div>

        <p className="menu-title">Navegación principal</p>

        <nav aria-label="Navegación principal">
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink 
                  to={item.id === 'dashboard' ? '/' : `/${item.id}`} 
                  className={({ isActive }) => `menu-list__item ${isActive ? 'menu-list__item--active' : ''}`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <span className="menu-list__icon">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <header className="page-header animate-fade-in">
          <div className="header-left">
            <button className="hamburger-btn" onClick={() => setIsSidebarOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="header-search">
              <input type="text" placeholder="Buscar maquinaria, pedidos..." />
            </div>
          </div>
          <div className="header-actions">
            <button className="icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
          </div>
        </header>
        <div className="content-inner animate-slide-up">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
