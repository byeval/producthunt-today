import React from 'react'
import cls from 'classnames/bind'
import { ThemedView } from 'cpn/base'
import Skeleton from 'cpn/skeleton'
import style from './index.module.css'

const cx = cls.bind(style)

export default function FeedsSkeleton() {
  return (
    <ThemedView className={cx('loading')} background="fill0">
      <Skeleton />
    </ThemedView>
  )
}