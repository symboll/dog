// export const getHotSingerListRequest = (count) => {
//   return axiosInstance.get(`/top/artists?offset=${count}`);
// }

// export const getSingerListRequest= (category, alpha, count) => {
//   return axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
// }

import axios from './index.js'

export const getHotSingerListRequest = (count) => {
  return axios.request({
    url: '/top/artists',
    params: {
      offset: count
    }
  })
}

export const getSingerListRequest = (category, alpha, count) => {
  return axios.request({
    url: '/artist/list',
    params: {
      cat: category,
      initial: alpha.toLowerCase(),
      offset: count
    }
  })
}