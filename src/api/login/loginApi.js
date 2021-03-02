import * as http from '@/api/http.js'
const loginApi = {
  // 二维码key生成接口
  loginKey (data, callback) {
    return http.get('/login/qr/key', data).then(callback).catch(function (error) {
      console.log(error)
    })
  },
  // 二维码生成接口
  loginCreate (data, callback) {
    return http.get('/login/qr/create', data).then(callback).catch(function (error) {
      console.log(error)
    })
  },
  // 二维码状态查询
  loginCheck (data, callback) {
    return http.get('/login/qr/check', data).then(callback).catch(function (error) {
      console.log(error)
    })
  },
  // 手机登录
  loginPhone (data, callback) {
    return http.postBody('/login/cellphone', data).then(callback).catch(function (error) {
      console.log(error)
    })
  },
  // 退出登录
  logout (data, callback) {
    return http.get('/logout', data).then(callback).catch(function (error) {
      console.log(error)
    })
  },
  // 手机注册
  loginPhoneInfo (data, callback) {
    return http.postBody('/register/cellphone', data).then(callback).catch(function (error) {
      console.log(error)
    })
  },
  // 检测手机号码是否已注册
  isPhoneInfo (data, callback) {
    return http.get('/cellphone/existence/check', data).then(callback).catch(function (error) {
      console.log(error)
    })
  },
  // 获取登录状态
  loginStatus (data, callback) {
    return http.get('/login/status', data).then(callback).catch(function (error) {
      console.log(error)
    })
  },
  // 发送验证码
  PhoneSent (data, callback) {
    return http.get('/captcha/sent', data).then(callback).catch(function (error) {
      console.log(error)
    })
  },
  // 获取用户详情
  userDetail (data, callback) {
    return http.get('/user/detail', data).then(callback).catch(function (error) {
      console.log(error)
    })
  }
}
export default loginApi
