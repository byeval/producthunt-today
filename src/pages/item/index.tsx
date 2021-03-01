import React, {
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react'
import cls from 'classnames/bind'
import { useQuery, usePageInstance } from 'remax'
import { usePageEvent } from 'remax/macro'
import {
  Image,
  Swiper,
  SwiperItem,
  previewImage,
  RichText,
  setClipboardData,
  getSystemInfoSync,
  showShareMenu,
  getLaunchOptionsSync,
} from 'remax/wechat'
import { useGetPostQuery, GetPostQuery } from 'api/graphql'
import { ThemedText, ThemedView } from 'cpn/base'
import NavBar from 'cpn/navbar'
import Icon from 'cpn/icon'
import Arrow from 'cpn/arrow'
import Vote from '@/pages/components/vote'
import { mirrorImage } from '@/fns'
import { SINGLE_PAGE_SCENE } from '@/constants'
import { AppContext } from '@/context'
import ShareAction from './components/share-action'
import Skeleton from './components/skeleton'
import styles from './index.module.css'

const cx = cls.bind(styles)

export default function Product() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const { state } = useContext(AppContext)
  const { theme, lang } = state
  const { scene } = getLaunchOptionsSync()
  const page = usePageInstance()
  const { windowWidth, pixelRatio } = getSystemInfoSync()
  const imageHeight = parseInt(`${(380 / 635) * windowWidth}`)
  const ossStrategy = `image/resize,w_${windowWidth * pixelRatio},h_${
    imageHeight * pixelRatio
  }`
  const mirrorOptions = {
    'x-oss-process': ossStrategy,
  }
  const isSinglePage = scene === SINGLE_PAGE_SCENE

  const handleChange = (evt: any) => {
    setCurrent(evt.detail.current)
  }

  const query = useQuery()
  const {
    loading,
    error,
    data: { post = {} as any } = {} as GetPostQuery,
  } = useGetPostQuery({ variables: query })

  const urls =
    post.media
      ?.filter((item: any) => item.type === 'image')
      .map((item: any) => mirrorImage(item.url, mirrorOptions)) || []
  const handlePreview = useCallback(() => {
    previewImage({ urls, current: urls[current] })
  }, [current, urls])

  const handleCopy = () => {
    setClipboardData({ data: post.url })
    setVisible(false)
  }

  useEffect(() => {
    if (!isSinglePage) {
      showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline'],
      })
    }
  }, [])

  usePageEvent('onShareAppMessage', () => {
    return {
      title: `${post.name}-${post.tagline}`,
      path: `/pages/item/index?id=${query.id}`,
      imageUrl: urls[current],
    }
  })

  // TODO: wait for usePageEvent support.
  page.onShareTimeline = () => {
    return {
      title: `${post.name}-${post.tagline}`,
      query: { id: query.id },
      imageUrl: mirrorImage(post.thumbnail.url),
    }
  }

  const comment = post?.comments?.edges[0]?.node

  const nodes = useMemo(() => {
    if (!comment) return []

    // TODO: parse to nodes
    return comment.body.replace(/\n/g, '<br />')
  }, [comment])

  if (loading) return <Skeleton />
  if (error) return error

  const maker = post.makers[0]
  const isMakerComment = post.makers
    .map((user: any) => user.id)
    .includes(comment?.userId || '')
  const pages = getCurrentPages()

  return (
    <ThemedView className={cx('detail')} background="fill2">
      <NavBar showBack={pages.length > 1} showHome={pages.length === 1} />
      <ThemedView className={cx('media')}>
        <Swiper
          onChange={handleChange}
          className={cx('swiper')}
          style={{ height: `${imageHeight}PX` }}
        >
          {urls.map((url: string) => (
            <SwiperItem key={url}>
              <ThemedView
                onClick={handlePreview}
                className={cx('item')}
                style={{ backgroundImage: `url(${url})` }}
              />
            </SwiperItem>
          ))}
        </Swiper>
        <ThemedView className={cx('count')} color="text1" background="fill2">
          {current + 1}/{urls.length}
        </ThemedView>
      </ThemedView>
      <ThemedView className={cx('body')}>
        <ThemedView className={cx('content')}>
          <ThemedView className={cx('title')} color="text0">
            {post.name}
          </ThemedView>
          <ThemedView className={cx('tagline')} color="text1">
            {post.tagline}
          </ThemedView>
          <ThemedView className={cx('desc')} color="text1">
            {post.description}
          </ThemedView>
        </ThemedView>
        {maker && (
          <ThemedView className={cx('maker')} background="fill5">
            <ThemedView>
              <ThemedView className={cx('medal')} color="green">
                Maker
              </ThemedView>
              <ThemedView className={cx('name')} color="text0">
                {maker.name}
              </ThemedView>
            </ThemedView>
            <Image
              className={cx('avatar')}
              src={mirrorImage(maker.profileImage || '')}
            />
          </ThemedView>
        )}
        {isMakerComment && (
          <ThemedView className={cx('comment')} color="text1">
            <RichText className={cx('text')} nodes={nodes} />
          </ThemedView>
        )}
      </ThemedView>
      {!isSinglePage && (
        <ThemedView className={cx('footer')} background="fill2">
          <Vote className={cx('vote')} item={post}>
            {(isVoted) => {
              return (
                <ThemedView
                  className={cx('btn')}
                  background={isVoted ? 'fill3' : 'fill4'}
                  color={isVoted ? 'text1' : 'text0'}
                >
                  <Arrow
                    className={cx('arrow')}
                    direction="up"
                    style={{
                      borderBottomColor: isVoted
                        ? theme.background0
                        : theme.fontColor1,
                    }}
                  />
                  <ThemedText>
                    {isVoted ? lang.upvoted : lang.upvote}{' '}
                    {isVoted ? post.votesCount + 1 : post.votesCount}
                  </ThemedText>
                </ThemedView>
              )
            }}
          </Vote>
          <ThemedView
            className={cx('share')}
            background="fill4"
            color="text0"
            onClick={() => setVisible(true)}
          >
            <Icon className={cx('icon')} type="share" />
            <ThemedText>{lang.share}</ThemedText>
          </ThemedView>
        </ThemedView>
      )}
      <ShareAction
        onCopy={handleCopy}
        onCancel={() => setVisible(false)}
        visible={visible}
      />
    </ThemedView>
  )
}
