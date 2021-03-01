import React from 'react'
import { ThemedText } from 'cpn/base'
import './index.css'

interface IconProps {
  type: string
  className?: string
  onClick?: () => void
}

export default function Icon({
  type,
  className,
  ...partial
}: IconProps) {
  return <ThemedText {...partial} className={`${className} iconfont icon-${type}`} />
}