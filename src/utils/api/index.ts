// utils/api.ts
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_ROUTES, ApiRoute } from './apiRoutes';

type ApiResponse<T> = Promise<AxiosResponse<T>>;

// new Axios
const apiClient = axios.create({
  baseURL: 'http://localhost:8090/',  // Gateway address
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (for adding tokens or other processing)
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
  
    // ensure config.headers exist，set Authorization
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  // Response interceptor
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error) => {
      console.error('API Error:', error);
      return Promise.reject(error);
    }
  );

// Dynamically encapsulate API requests
const apiRequest = <T>(
    serviceName: string,
    moduleName: string,
    route: ApiRoute,
    params: any = {},
    data: any = null
  ): Promise<T> => {
    // Replace dynamic path parameters
    const url = Object.keys(params).reduce(
      (acc, key) => acc.replace(`{${key}}`, encodeURIComponent(params[key])),
      route.endpoint
    );
  
    return apiClient({
      url: `/${serviceName}/${moduleName}${url}`,
      method: route.method,
      data,
      params: route.method === 'get' ? data : {},
    });
  };
  
  // service API calls
  export const apiService = {
    sceneryInfo: {
      fetchAll: () => apiRequest<any>('tourist', 'SceneryInfo', API_ROUTES.tourist.sceneryInfo.fetchAll),
      getById: (id: number) => apiRequest<any>('tourist', 'SceneryInfo', API_ROUTES.tourist.sceneryInfo.getById, { id }),
      create: (newSceneryInfo: any) => apiRequest<any>('tourist', 'SceneryInfo', API_ROUTES.tourist.sceneryInfo.create, {}, newSceneryInfo),
      update: (id: number, updatedSceneryInfo: any) => apiRequest<any>('tourist', 'SceneryInfo', API_ROUTES.tourist.sceneryInfo.update, { id }, updatedSceneryInfo),
      delete: (id: number) => apiRequest<any>('tourist', 'SceneryInfo', API_ROUTES.tourist.sceneryInfo.delete, { id }),
      search: (searchTerm: string) => apiRequest<any>('tourist', 'SceneryInfo', API_ROUTES.tourist.sceneryInfo.search, { searchTerm }),
    },
    touristInfo: {
        fetchAll: () => apiRequest<any>('tourist', 'touristInfo', API_ROUTES.tourist.touristInfo.fetchAll),
        getById: (id: number) => apiRequest<any>('tourist', 'touristInfo', API_ROUTES.tourist.touristInfo.getById, { id }),
        create: (newTouristInfo: any) => apiRequest<any>('tourist', 'touristInfo', API_ROUTES.tourist.touristInfo.create, {}, newTouristInfo),
        update: (id: number, updatedTouristInfo: any) => apiRequest<any>('tourist', 'touristInfo', API_ROUTES.tourist.touristInfo.update, { id }, updatedTouristInfo),
        delete: (id: number) => apiRequest<any>('tourist', 'touristInfo', API_ROUTES.tourist.touristInfo.delete, { id }),
      },
    touristOrderInfo: {
        fetchAll: () => apiRequest<any>('tourist', 'touristOrderInfo', API_ROUTES.tourist.touristOrderInfo.fetchAll),
        getById: (id: number) => apiRequest<any>('tourist', 'touristOrderInfo', API_ROUTES.tourist.touristOrderInfo.getById, { id }),
        create: (newOrder: any) => apiRequest<any>('tourist', 'touristOrderInfo', API_ROUTES.tourist.touristOrderInfo.create, {}, newOrder),
        update: (id: number, updatedOrder: any) => apiRequest<any>('tourist', 'touristOrderInfo', API_ROUTES.tourist.touristOrderInfo.update, { id }, updatedOrder),
        delete: (id: number) => apiRequest<any>('tourist', 'touristOrderInfo', API_ROUTES.tourist.touristOrderInfo.delete, { id }),
        search: (searchTerm: string) => apiRequest<any>('tourist', 'touristOrderInfo', API_ROUTES.tourist.touristOrderInfo.search, { searchTerm }),
      },
  };