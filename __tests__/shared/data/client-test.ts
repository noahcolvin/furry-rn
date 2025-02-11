import { apiClient } from '../../../shared/data/client';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock;

describe('apiClient', () => {
  const API_BASE_URL = 'http://10.0.2.2:54321/functions/v1';

  it('should call fetch with the correct URL and default GET method', async () => {
    const endpoint = '/test-endpoint';
    await apiClient(endpoint);

    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}${endpoint}?undefined`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('should call fetch with the correct URL and provided searchParams', async () => {
    const endpoint = '/test-endpoint';
    const searchParams = new URLSearchParams({ key: 'value' });
    await apiClient(endpoint, searchParams);

    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}${endpoint}?key=value`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('should call fetch with the correct URL and provided options', async () => {
    const endpoint = '/test-endpoint';
    const options = { method: 'POST', body: JSON.stringify({ data: 'test' }) };
    await apiClient(endpoint, undefined, options);

    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}${endpoint}?undefined`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: 'test' }),
    });
  });

  it('should merge provided headers with default headers', async () => {
    const endpoint = '/test-endpoint';
    const options = { headers: { Authorization: 'Bearer token' } };
    await apiClient(endpoint, undefined, options);

    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}${endpoint}?undefined`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
      },
    });
  });
});