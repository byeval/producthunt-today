import React, { useState, useContext } from 'react'
import { startOfToday, startOfYesterday, endOfYesterday, endOfToday } from 'date-fns'
import cls from 'classnames/bind'
import { uniqBy } from 'lodash'
import { usePageEvent } from 'remax/macro'
import { stopPullDownRefresh, OpenData, Navigator } from 'remax/wechat'
import { ThemedView } from 'cpn/base'
import Loading from 'cpn/loading'
import NavBar from 'cpn/navbar'
import Post from '@/pages/components/post'
import { AppContext } from '@/context'
import { useGetPostsQuery, GetPostsQuery } from 'api/graphql'
import Skeleton from './components/skeleton'
import styles from './index.module.css'

const cx = cls.bind(styles)

// TODO: find out the babel bug.
function uniqEdges(edges: any[]) {
  return uniqBy(edges, 'node.id')
}

function getDuration() {
  const now = new Date()
  const hour = now.getHours()

  if (hour < 15) {
    return {
      postedBefore: endOfYesterday(),
      postedAfter: startOfYesterday()
    }
  }

  return {
    postedBefore: endOfToday(),
    postedAfter: startOfToday()
  }
}

export default function Feeds() {
  const { state: { lang = {}, systemInfo } } = useContext(AppContext)
  const [fetching, setFetching] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const { postedAfter, postedBefore } = getDuration()

  const variables = {
    after: null,
    featured: true,
    postedAfter,
    postedBefore
  }

  const {
    loading,
    error,
    data = {} as GetPostsQuery,
    refetch,
    fetchMore
  } = useGetPostsQuery({ variables })

  usePageEvent('onReachBottom', () => {
    if (!hasMore) return

    setFetching(true)

    fetchMore({
      variables: {
        ...variables,
        after: data.posts.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.posts.pageInfo.hasNextPage) {
          setHasMore(false)
          return data
        }

        setFetching(false)

        const newEdges = fetchMoreResult?.posts?.edges
        const pageInfo = fetchMoreResult?.posts?.pageInfo

        return newEdges.length
          ? {
            posts: {
              __typename: previousResult.posts.__typename,
              edges: uniqEdges([...previousResult.posts.edges, ...newEdges]),
              pageInfo
            }
          }
          : previousResult
      }
    }).finally(() => {
      setFetching(false)
    })
  })

  usePageEvent('onPullDownRefresh', () => {
    refetch(variables).finally(() => {
      stopPullDownRefresh()
    })
  })

  usePageEvent('onShareAppMessage', () => {
    return {
      title: 'ProductHunt Today 网罗全球新鲜产品',
      path: '/pages/feeds/index',
      imageUrl: `https://${process.env.REMAX_APP_FILECDN}/logo/producthunt5.png`
    }
  })

  if (loading) return <Skeleton />
  if (error) return error

  function getDateString() {
    if (!lang) return

    const d = new Date()
    const day = d.getDay()
    const date = d.getDate()
    const month = d.getMonth()

    if (systemInfo.language.includes('zh')) {
      return `${month}月${date}日 ${lang.day[day]}`
    }

    return `${lang.day[day]} ${date} ${lang.month[month]}`
  }

  return (
    <ThemedView className={cx('feeds')} background="fill0">
      <NavBar />
      <ThemedView className={cx('header')} >
        <ThemedView className={cx('today')}>
          <ThemedView className={cx('date')} color="text1">{getDateString()}</ThemedView>
          <ThemedView className={cx('title')} color="text0">Today</ThemedView>
        </ThemedView>
        <Navigator url="/pages/me/index">
          <ThemedView className={cx('avatar')}>
            <OpenData type="userAvatarUrl" />
          </ThemedView>
        </Navigator>
      </ThemedView>
      <ThemedView className={cx('container')}>
        {data.posts.edges.map((item) => <Post item={item.node} key={item.node.id} />)}
        {fetching && <Loading title={lang.loading} />}
        {!fetching && !hasMore && (
          <ThemedView className={cx('thatsall')} background="fill1" color="text1">
            <ThemedView>{lang.forNow}</ThemedView>
            <ThemedView>{lang.later}</ThemedView>
          </ThemedView>
        )}
      </ThemedView>
    </ThemedView>
  )
}
