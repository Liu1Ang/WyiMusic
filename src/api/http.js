import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Message } from 'element-ui'
// axios是第三方库，借助vue-axios插件移入 vue-axios 是将 axios 集成到 Vue.js 的小包装器
Vue.use(VueAxios, axios)
// 1、创建新的axios链接
const service = axios.create({
  // 公共接口
  baseURL: process.env.API,
  timeout: 5000
})

const BASEURL = process.env.NODE_ENV === 'production' ? '/music' : '/music'
console.log(BASEURL)
// 2、请求拦截器
service.interceptors.request.use(config => {
  // 发送前做的处理，数据转化，配置请求头，设置token
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  config.withCredentials = true
  /* const token = getCookie('name')
  if(token){
      config.params = {'token':token};
      config.headers.token = token;
  } */
  return config
}, error => {
  Promise.reject(error)
})

// 3.响应拦截器
service.interceptors.response.use(response => {
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  return response
}, error => {
  // /***** 接收到异常响应的处理开始 *****/
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '未授权，请重新登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        window.location.href = '/NotFound'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器端出错'
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    error.message('连接服务器失败')
  }

  Message.error(error.message)
  // /***** 处理结束 *****/
  // 如果不需要错误处理，以上的处理过程都可省略
  return Promise.resolve(error.response)
})
export default service

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(BASEURL + url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(BASEURL + url, JSON.stringify(data))
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function postBody (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(BASEURL + url, JSON.stringify(data), {
      headers: {
        //  头部信息
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
