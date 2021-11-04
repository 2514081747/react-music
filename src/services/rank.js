import request from './axios'

export function getRanKTop() {
    return request({
      url: "/toplist"
    })
  }

// 获取榜单详情
export function getRankDetail(id) {
    return request({
      url: "/playlist/detail",
      params: {
        id
      }
    })
  }