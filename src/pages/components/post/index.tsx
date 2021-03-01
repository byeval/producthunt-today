import React from 'react'
import cls from 'classnames/bind'
import { Image, navigateTo } from 'remax/wechat'
import { ThemedView, ThemedText } from 'cpn/base'
import Arrow from 'cpn/arrow'
import Vote from '@/pages/components/vote'
import { mirrorImage } from '@/fns'
import styles from './index.module.css'

const cx = cls.bind(styles)

interface PostItemProps {
  item: any
}

export default function PostItem({ item }: PostItemProps) {

  const handleNavigate = () => navigateTo({ url: `/pages/item/index?id=${item.id}` })

  return (
    <ThemedView onClick={handleNavigate} className={cx('item', 'post')} border="line1" borderPosition="bottom">
      <ThemedView className={cx('media')}>
        <Image className={cx('thumb')} mode="aspectFit" lazyLoad src={mirrorImage(item.thumbnail.url)} />
      </ThemedView>
      <ThemedView className={cx('body')}>
        <ThemedView className={cx('title')} color="text0" >{item.name}</ThemedView>
        <ThemedView className={cx('sub')} color="text2" >{item.tagline}</ThemedView>
      </ThemedView>
      <Vote className={cx('vote')} item={item}>
        {(isVoted: boolean) => (
          <ThemedView className={cx('action', { active: isVoted })}>
            <Arrow direction="up" color={isVoted ? 'brand' : 'text1'} />
            <ThemedText color={isVoted ? 'text0' : 'text1'}>{isVoted ? item.votesCount + 1 : item.votesCount}</ThemedText>
          </ThemedView>
        )}
      </Vote>
    </ThemedView>
  )
}



