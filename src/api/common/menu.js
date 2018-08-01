import request from '@/utils/request'

export function getMenuList() {
  return request({
    url: '/sys/user/ListMenuByUserName/admin',
    method: 'get'
  })
}