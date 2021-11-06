import request from './axios'

export function getSongCategory() {
    return request({
      url: "/playlist/catlist"
    })
  }