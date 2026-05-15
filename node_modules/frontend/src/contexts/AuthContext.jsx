// src/contexts/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const API_URL = 'http://localhost:3000/api';

const ROLES = {
  ceo: { name: 'CEO', label: 'Director General', color: '#0E3B24' },
  admin: { name: 'Administrador', label: 'Administrador', color: '#1A5C3A' },
  comercial: { name: 'Comercial', label: 'Asesor Comercial', color: '#78C043' },
  tecnico: { name: 'Técnico', label: 'Técnico de Campo', color: '#E67E22' },
  rrhh: { name: 'RRHH', label: 'Recursos Humanos', color: '#3498DB' },
  bodega: { name: 'Bodega', label: 'Jefe de Bodega', color: '#9B59B6' },
  cliente: { name: 'Cliente', label: 'Cliente', color: '#27AE60' },
};

function readStoredUser() {
  try {
    const savedUser = localStorage.getItem('sion_user');
    const token = localStorage.getItem('sion_token');
    if (!savedUser || !token) return null;
    const parsedUser = JSON.parse(savedUser);
    return {
      ...parsedUser,
      roleInfo: ROLES[parsedUser.role],
    };
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error al iniciar sesión');
      }

      const data = await response.json();
      const userData = {
        ...data.user,
        roleInfo: ROLES[data.user.role],
      };

      localStorage.setItem('sion_token', data.access_token);
      localStorage.setItem('sion_user', JSON.stringify(data.user));
      setUser(userData);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('sion_token');
    localStorage.removeItem('sion_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, ROLES }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};