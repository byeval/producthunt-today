import React, { useEffect, useState, useContext } from 'react'
import cls from 'classnames/bind'
import { cloud, OpenData, hideShareMenu } from 'remax/wechat'
import { usePageEvent } from 'remax/macro'
import { ThemedView } from 'cpn/base'
import Loading from 'cpn/loading'
import NavBar from 'cpn/navbar'
import Post from '@/pages/components/post'
import { AppContext } from '@/context'
import style from './index.module.css'

const cx = cls.bind(style)

const pageSize = 20

export default function Me() {
  const {
    state: { lang = {} },
  } = useContext(AppContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageNo, setPageNo] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const getVotes = (page: number) => {
    cloud
      .callFunction({
        name: 'votes',
        data: {
          pageNo: page,
          pageSize,
        },
      })
      .then(({ result }: any) => {
        const items = products.concat(result)
        setHasMore(result.length !== 0)
        setProducts(items)
        setPageNo(page)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    hideShareMenu()
    setLoading(true)
    getVotes(1)
  }, [])

  usePageEvent('onReachBottom', () => {
    if (!hasMore || loading) return
    setLoading(true)
    getVotes(pageNo + 1)
  })

  return (
    <ThemedView className={cx('me')}>
      <NavBar showBack fixed />
      <ThemedView className={cx('header')}>
        <ThemedView className={cx('bg')} />
        <ThemedView className={cx('avatar')}>
          <OpenData type="userAvatarUrl" />
        </ThemedView>
        <ThemedView className={cx('name')} color="text0">
          <OpenData type="userNickName" />
        </ThemedView>
      </ThemedView>
      <ThemedView className={cx('content')} background="fill0">
        {products.map((item) => (
          <Post item={item} key={item._id} />
        ))}
      </ThemedView>
      {loading && <Loading title={lang.loading} />}
      {!hasMore && !loading && (
        <ThemedView className={cx('thatsall')} background="fill1" color="text1">
          <ThemedView>{lang.forNow}</ThemedView>
        </ThemedView>
      )}
    </ThemedView>
  )
}
