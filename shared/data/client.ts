const API_BASE_URL = 'http://10.0.2.2:54321/functions/v1';

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  const config = {
    method: 'GET', // Default to GET method
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  };

  return fetch(`${API_BASE_URL}${endpoint}`, config);
};
