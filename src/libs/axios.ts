// import axios from 'axios';

// export const instance = axios.create({
//   baseURL: URL_API,
// });

// instance.interceptors.request.use(
//   (config: any) => {
//     if (config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//       config.headers.Accept = 'application/json';
//       if (config.data instanceof FormData) {
//         delete config.headers['Content-Type'];
//       } else {
//         config.headers['Content-Type'] = 'application/json';
//       }
//       return config;
//     }
//   },
//   error => Promise.reject(error),
// );

// instance.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );
