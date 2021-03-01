import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

class Response {
  body: any
  constructor(body: any) {
    this.body = body
  }

  text() {
    return Promise.resolve(this.body)
  }
}

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: process.env.REMAX_APP_API_ENDPOINT,
  cache,
  clientState: { defaults: {}, resolvers: {} },
  fetch: (url: string, options: any) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method: options.method,
        data: options.body,
        success(res) {
          resolve(new Response(JSON.stringify(res.data)) as any)
        },
        fail(error) {
          reject(error)
        },
      })
    })
  },
})

cache.writeData({ data: {} })

export default client
