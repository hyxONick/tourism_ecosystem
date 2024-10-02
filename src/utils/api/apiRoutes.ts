// apiRoutes.ts

export interface ApiRoute {
    method: 'get' | 'post'; // 这里只支持 GET 和 POST 方法
    endpoint: string;
  }
  
  export const API_ROUTES = {
    user: {
    //   getUsers: { method: 'get', endpoint: '/users' } as ApiRoute,
    //   createUser: { method: 'post', endpoint: '/users' } as ApiRoute,
    },
    tourist: {
        sceneryInfo: {
            fetchAll: { method: 'get', endpoint: '/fetch' } as ApiRoute,
            getById: { method: 'get', endpoint: '/getSceneryInfo/{id}' } as ApiRoute,
            create: { method: 'post', endpoint: '/create' } as ApiRoute,
            update: { method: 'post', endpoint: '/update/{id}' } as ApiRoute,
            delete: { method: 'post', endpoint: '/delete/{id}' } as ApiRoute,
            search: { method: 'get', endpoint: '/search' } as ApiRoute,
          },
          touristInfo: {
            fetchAll: { method: 'get', endpoint: '/fetch' } as ApiRoute,
            getById: { method: 'get', endpoint: '/getTouristInfo/{id}' } as ApiRoute,
            create: { method: 'post', endpoint: '/create' } as ApiRoute,
            update: { method: 'post', endpoint: '/update/{id}' } as ApiRoute,
            delete: { method: 'post', endpoint: '/delete/{id}' } as ApiRoute,
          },
          touristOrderInfo: {
            fetchAll: { method: 'get', endpoint: '/fetch' } as ApiRoute,
            getById: { method: 'get', endpoint: '/getTouristOrderInfo/{id}' } as ApiRoute,
            create: { method: 'post', endpoint: '/create' } as ApiRoute,
            update: { method: 'post', endpoint: '/update/{id}' } as ApiRoute,
            delete: { method: 'post', endpoint: '/delete/{id}' } as ApiRoute,
            search: { method: 'get', endpoint: '/search' } as ApiRoute,
          }        
    },
    weather: {
        weatherInfo:  { method: 'get', endpoint: '/{cityName}' } as ApiRoute,
    }
  };
  