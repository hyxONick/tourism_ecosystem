// apiRoutes.ts

export interface ApiRoute {
    method: 'get' | 'post'; // 这里只支持 GET 和 POST 方法
    endpoint: string;
  }
  
  export const API_ROUTES = {
    user: {
      user: {
        register: { method: 'post', endpoint: '/register' } as ApiRoute,
        login: { method: 'post', endpoint: '/login' } as ApiRoute,
        rewards: { method: 'post', endpoint: '/rewards/{id}' } as ApiRoute,
        validateToken: { method: 'get', endpoint: '/{id}/validate-token' } as ApiRoute,
    //   createUser: { method: 'post', endpoint: '/users' } as ApiRoute,
      }
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
    },
    accommodation: {
      booking: {
        book: { method: 'post', endpoint: '/book' } as ApiRoute,
        getById: { method: 'get', endpoint: '/getbooking/{id}' } as ApiRoute,
        delete: { method: 'post', endpoint: '/delete/{id}' } as ApiRoute,
      },
      roomInfo: {
        fetchAll: { method: 'get', endpoint: '/fetch' } as ApiRoute,
        getById: { method: 'get', endpoint: '/getroominfo/{id}' } as ApiRoute,
        create: { method: 'post', endpoint: '/create' } as ApiRoute,
        update: { method: 'post', endpoint: '/update/{id}' } as ApiRoute,
        delete: { method: 'post', endpoint: '/delete/{id}' } as ApiRoute,
      }
  },
  outdoor: {
    equipmentRental: {
      fetchAll: { method: 'get', endpoint: '/fetch' } as ApiRoute,
      getRenterById: { method: 'get', endpoint: '/renter/{id}' } as ApiRoute,
      getById: { method: 'get', endpoint: '/getEquipmentRental/{id}' } as ApiRoute,
      create: { method: 'post', endpoint: '/create' } as ApiRoute,
      update: { method: 'post', endpoint: '/update/{id}' } as ApiRoute,
      delete: { method: 'post', endpoint: '/delete/{id}' } as ApiRoute,
    },
    productInfo: {
      fetchAll: { method: 'get', endpoint: '/fetch' } as ApiRoute,
      getById: { method: 'get', endpoint: '/getProductInfo/{id}' } as ApiRoute,
      create: { method: 'post', endpoint: '/create' } as ApiRoute,
      update: { method: 'post', endpoint: '/update/{id}' } as ApiRoute,
      delete: { method: 'post', endpoint: '/delete/{id}' } as ApiRoute,
    },
    productOrderInfo: {
      fetchAll: { method: 'get', endpoint: '/fetch' } as ApiRoute,
      getBuyerById: { method: 'get', endpoint: '/buyer/{id}' } as ApiRoute,
      getById: { method: 'get', endpoint: '/getProductOrderInfo/{id}' } as ApiRoute,
      create: { method: 'post', endpoint: '/create' } as ApiRoute,
      update: { method: 'post', endpoint: '/update/{id}' } as ApiRoute,
      delete: { method: 'post', endpoint: '/delete/{id}' } as ApiRoute,
    }
  }
};
  