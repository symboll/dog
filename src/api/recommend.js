import axios from './index.js'

export const getBannerRequest = () => {
  return axios.request({
    url: '/banner'
  })
}

export const getRecommendListRequest = () => {
  return axios.request({
    url: '/personalized'
  })
}