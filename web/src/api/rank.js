import axios from './index.js'


export const getRankListRequest = () => {
  return axios.request({
    url: '/toplist/detail'
  })
}