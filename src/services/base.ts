import { cloud, getStorageSync } from 'remax/wechat'

export default class BaseService {
  collection: any

  constructor(name: string, options: any = {}) {
    cloud.init({
      env: process.env.REMAX_APP_DATABASE,
    })

    const db = cloud.database(options)
    this.collection = db.collection(name)
  }

  get openid() {
    return getStorageSync('openid')
  }
}
