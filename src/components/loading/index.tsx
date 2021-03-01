import React, { ReactNode } from 'react'
import cls from 'classnames/bind'
import { ThemedView } from 'cpn/base'
import style from './index.module.css'

const cx = cls.bind(style)

interface LoadingProps {
  children?: ReactNode
  title?: ReactNode
  className?: string
}

export default function Loading({ className, children, title }: LoadingProps) {
  return (
    <ThemedView
      className={cx('loading', className)}
      background="fill1"
      color="text1"
    >
      {title || children}
    </ThemedView>
  )
}
