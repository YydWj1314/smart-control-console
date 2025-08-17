import http from "./http";
/**
 * Encapusulate http request with axios instance
 *
 */

// define type
interface ApiResponse {
  code: number;
  message: string;
  data: any;
}

// Encapsulate Get request
function get(url: string, params?: any): Promise<ApiResponse> {
  // http.get('/users', { params: { page: 1, limit: 20 } });
  return http.get(url, { params });
}

// Encapsulate Post request
function post(url: string, data?: any): Promise<ApiResponse> {
  // http.post('/login', { username: 'test', password: '123456' });
  return http.post(url, data);
}

export { get, post };
