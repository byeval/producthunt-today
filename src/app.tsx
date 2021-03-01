import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { cloud, setStorageSync, getLaunchOptionsSync } from 'remax/wechat'
import Layout from '@/pages/components/layout'
import client from './create-apollo'
import AppProvider from './context'
import { SINGLE_PAGE_SCENE } from './constants'

import './app.css'

Promise.prototype['finally'] = function finallyPolyfill(callback) {
  const constructor: typeof Promise = this.constructor as typeof Promise

  return this.then(
    function (value) {
      return constructor.resolve(callback).then(function () {
        return value
      })
    },
    function (reason) {
      return constructor.resolve(callback).then(function () {
        throw reason
      })
    }
  )
}

const { scene } = getLaunchOptionsSync()

if (scene === SINGLE_PAGE_SCENE) {
  cloud
    .callFunction({
      name: 'login',
    })
    .then(({ result }: any) => {
      setStorageSync('openid', result.openid)
    })
    .catch(console.error)
}

const App: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Layout>{children}</Layout>
      </AppProvider>
    </ApolloProvider>
  )
}

export default App
