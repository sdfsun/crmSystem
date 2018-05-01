import axios from 'axios'
import config from '../config'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers['Authorization'] = config.headers.Authorization

function setAuthorization (token) {
  axios.defaults.headers['Authorization'] = token
}

/**
 * 获取用户信息
*/
async function getUserData (options = {}) {
  let result = await axios.get(`${config.apiUrl}/user`, options)
  return result.data
}

/**
 * 获取收货地址
*/
async function getAddressList (options = {}) {
  let result = await axios.get(`${config.apiUrl}/address`, options)
  return result.data
}

/**
 * 添加收货地址
*/
async function addAddress (data, options = {}) {
  let result = await axios.post(`${config.apiUrl}/address`, data, options)
  return result
}

/**
 * 删除收货地址
*/
async function delAddress (data, options = {}) {
  let result = await axios.delete(`${config.apiUrl}/address/${data.id}`, options)
  return result.data
}

/**
 * 修改收货地址
*/
async function editAddress (data, options = {}) {
  let result = await axios.put(`${config.apiUrl}/address/${data.id}`, data, options)
  return result
}

export default {
  getUserData,
  getAddressList,
  setAuthorization,
  addAddress,
  delAddress,
  editAddress
}
