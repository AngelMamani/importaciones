import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import InventoryPage from './features/inventory/pages/InventoryPage';
import './App.css';

function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          {/* Fallback routes could go here */}
          <Route path="*" element={<DashboardPage />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
}

export default App;
