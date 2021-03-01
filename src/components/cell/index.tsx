import React, { ReactNode } from 'react'
import cls from 'classnames/bind'
import { Image } from 'remax/wechat'
import { ThemedView } from 'cpn/base'
import styles from './index.module.css'

const cx = cls.bind(styles)

type Align = 'top' | 'middle' | 'bottom'

interface CellProps {
  className?: string
  thumb?: string
  title?: ReactNode
  subTitle?: ReactNode
  extra?: ReactNode
  arrow?: string
  align?: Align
  wrap?: boolean
  onClick?: () => void
}

export default function Cell({
  thumb,
  title,
  subTitle,
  extra,
  align,
  className
}: CellProps) {
  return (
    <ThemedView className={cx('cell', align, className)}>
      {thumb && <Image className={cx('thumb')} src={thumb} />}
      <ThemedView className={cx('body')}>
        <ThemedView className={cx('title')}>{title}</ThemedView>
        {subTitle && <ThemedView className={cx('sub')}>{subTitle}</ThemedView>}
      </ThemedView>
      <ThemedView className={cx('extra')}>{extra}</ThemedView>
    </ThemedView>
  )
}

Cell.defaultProps = {
  align: 'middle'
}
