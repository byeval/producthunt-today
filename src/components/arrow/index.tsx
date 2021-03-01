import React from 'react'
import cls from 'classnames/bind'
import { ThemedView, ViewProps } from 'cpn/base'
import style from './index.module.css'

const cx = cls.bind(style)

interface ArrowProps {
  className?: string
  direction: 'up' | 'down' | 'left' | 'right'
  color?: string
}

const directionPostionMap: {
  [key: string]: 'bottom' | 'top' | 'right' | 'left'
} = {
  up: 'bottom',
  down: 'top',
  left: 'right',
  right: 'left'
}

export default function Arrow({ className, direction, color, ...partial }: ArrowProps & ViewProps) {
  return <ThemedView className={cx('arrow', className, direction)} border={color} borderPosition={directionPostionMap[direction]} {...partial}></ThemedView>
}

Arrow.defaultProps = {
  direction: 'up'
}