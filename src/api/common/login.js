import request from '@/utils/request'

export function login(username, password) {
  const data = {
    loginName:username,
    password:password,
    rememberMe:false
  }
  return request({
    url: '/sys/user/authenticate',
    method: 'post',
    data
  })
}
export function getCurrentUser() {
  return request({
    url: '/sys/user/getCurrentUser',
    method: 'get'
  })
}
