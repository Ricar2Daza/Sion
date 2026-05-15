import { useState, useEffect, useMemo } from 'react';
import api from '../services/api';

export const useApi = (endpoint, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const depsKey = useMemo(() => JSON.stringify(dependencies), [dependencies]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await api.get(endpoint);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, depsKey]);

  return { data, loading, error };
};