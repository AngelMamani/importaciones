# Análisis del Proyecto: Importaciones

Este documento proporciona una visión detallada de la estructura, arquitectura y sistema de diseño del proyecto de gestión de importaciones.

## 🚀 Stack Tecnológico

El proyecto está construido sobre cimientos modernos y eficientes:
- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: Vanilla CSS con un sistema robusto de variables CSS y diseño adaptativo.
- **Linting**: ESLint con reglas recomendadas para React y TypeScript.

## 🏗️ Arquitectura del Proyecto (Screaming Architecture)

El proyecto sigue una estructura basada en **características (features)**, lo que facilita la escalabilidad y el mantenimiento:

```text
src/
├── components/     # Componentes compartidos y globales
├── features/       # Módulos principales del negocio
│   ├── auth/       # Identidad y acceso
│   ├── customers/  # Gestión de clientes
│   ├── dashboard/  # Análisis y estadísticas globales
│   ├── inventory/  # Control de Stock y Maquinaria
│   └── sales/      # Gestión de ventas y cotizaciones
├── hooks/          # Hooks personalizados reutilizables
├── layouts/        # Plantillas de diseño (Sidebar, Navbar, etc.)
├── providers/      # Context Providers (Auth, Theme, etc.)
├── types/          # Definiciones de TypeScript globales
├── utils/          # Funciones de utilidad
├── App.tsx         # Punto de entrada de la aplicación
└── index.css       # Sistema de diseño global
```

## 🎨 Sistema de Diseño

Se ha implementado un sistema de diseño de alta calidad enfocado en la experiencia del usuario (UX) y estética premium:

- **Tipografía**: Uso de `Outfit` para encabezados y `Inter` para cuerpo de texto (Google Fonts).
- **Modo Oscuro**: Soporte nativo mediante `prefers-color-scheme` y variables CSS dinámicas.
- **Estética**:
    - **Glassmorphism**: Utilidades para efectos de desenfoque y transparencia.
    - **Sombras por Capas**: Profundidad visual mejorada.
    - **Paleta de Colores**: Basada en tonos Zinc e Indigo para un look profesional y moderno.

## 📊 Estado Actual: Dashboard

El componente `DashboardStats.tsx` ya muestra indicadores clave para el negocio:
- **Stock de Maquinaria**
- **Pedidos Mensuales**
- **Cotizaciones Activas**
- **Nuevos Clientes**

## 🛠️ Próximos Pasos Recomendados

1. **Implementar Rutas**: Configurar `react-router-dom` si aún no se ha hecho para navegar entre características.
2. **Conexión a Datos**: Establecer la lógica de fetching (ej. React Query o Hooks nativos) para reemplazar los datos estáticos en el dashboard.
3. **Módulo de Inventario**: Desarrollar la vista detallada de maquinaria aprovechando el sistema de diseño ya establecido.
