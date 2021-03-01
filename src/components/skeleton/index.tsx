import React, { forwardRef, Ref } from 'react'
import { View } from 'remax/wechat'
import cls from 'classnames/bind'
import style from './index.module.css'

const cx = cls.bind(style)

interface SkeletonProps {
  className?: string
  width?: number
  height?: number
  backgroundColor?: string
  highlightColor?: string
  color?: string
  duration?: number
  count?: number
  round?: boolean
  style?: {[key:string]: any}
}

const Skeleton = forwardRef(
  (
    {
      className,
      width,
      height,
      backgroundColor,
      highlightColor,
      color,
      duration,
      round,
      style,
    }: SkeletonProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const skeletonStyle = {
      width,
      height,
      backgroundColor,
      color,
      backgroundImage: `linear-gradient(
      90deg,
      ${backgroundColor},
      ${highlightColor},
      ${backgroundColor},
      ...style
    )`,
      animationDuration: `${duration}s`,
    }

    return <View ref={ref} className={cx('skeleton', { round, className })} style={skeletonStyle} />
  }
)

Skeleton.defaultProps = {
  backgroundColor: '#eee',
  highlightColor: '#f5f5f5',
  duration: 1.2,
}

export default Skeleton