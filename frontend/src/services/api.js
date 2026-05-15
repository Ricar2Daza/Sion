// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  setUser(user) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }

  async request(endpoint, options = {}) {
    const token = this.getToken();
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
      });

      // Si el token expiró (401), cerrar sesión
      if (response.status === 401) {
        this.logout();
        throw new Error('Sesión expirada. Por favor, inicia sesión nuevamente.');
      }

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `Error ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  // Auth endpoints - AJUSTA SEGÚN TU BACKEND
  async login(email, password) {
    const data = await this.post('/auth/login', { email, password, tenantSlug: 'sion' });

    if (data.access_token) {
      this.setToken(data.access_token);
      if (data.refresh_token) {
        localStorage.setItem('refresh_token', data.refresh_token);
      }
      
      // Si el backend devuelve el usuario en el login
      if (data.user) {
        this.setUser(data.user);
        return { user: data.user, token: data.access_token };
      }
      
      // Si no, obtener el perfil después del login
      const user = await this.getProfile();
      this.setUser(user);
      return { user, token: data.access_token };
    }
    
    return data;
  }

  async register(userData) {
    const data = await this.post('/auth/register', userData);
    
    if (data.access_token) {
      this.setToken(data.access_token);
      if (data.user) {
        this.setUser(data.user);
      }
    }
    
    return data;
  }

  async getProfile() {
    return this.get('/auth/me');
  }

  logout() {
    this.setToken(null);
    this.setUser(null);
    localStorage.removeItem('refresh_token');
    // Redirigir al login
    window.location.href = '/login';
  }

  // Métodos específicos para tu negocio
  async getClients() {
    return this.get('/crm/clients');
  }

  async getServices() {
    return this.get('/services/pipeline');
  }

  async getEmployees() {
    return this.get('/rrhh/employees');
  }

  async getInventory() {
    return this.get('/inventory/stock');
  }

  async getFinancialData() {
    return this.get('/erp/finance');
  }

  async getAllies() {
    return this.get('/marketplace/allies');
  }
}

export default new ApiService();