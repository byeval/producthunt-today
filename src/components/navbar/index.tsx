import React, { ReactNode } from 'react'
import cls from 'classnames/bind'
import { getSystemInfoSync, getMenuButtonBoundingClientRect, navigateBack, navigateTo } from 'remax/wechat'
import { ThemedView } from 'cpn/base';
import Icon from 'cpn/icon'
import style from './index.module.css';

const cx = cls.bind(style)

interface NavBarProps {
  showBack?: boolean
  showHome?: boolean
  children?: ReactNode
  fixed?: boolean
  background?: string
  className?: string
}

export default function NavBar({ showBack, showHome, children, fixed, background, className }: NavBarProps) {
  const rect = getMenuButtonBoundingClientRect()
  const { statusBarHeight, system } = getSystemInfoSync()
  const isiOS = system.indexOf('iOS') > -1
  const paddingY = isiOS ? 6 : 8
  const marginTop = rect.top - statusBarHeight - paddingY
  const navHeight = rect.height + paddingY * 2
  const goHome = () => navigateTo({ url: '/pages/feeds/index' })

  return (
    <ThemedView background={background} className={cx('navbar', className, { fixed })}>
      <ThemedView className={cx('status')} style={{ height: `${statusBarHeight}PX` }} />
      <ThemedView className={cx('nav')} style={{ marginTop, height: `${navHeight}PX` }}>
        {(showBack || showHome) &&
          <ThemedView className={cx('icons')} border="line7" style={{ top: `${rect.top}PX` }}>
            {showBack && <Icon onClick={navigateBack} className={cx('icon', 'back')} type='arrow-left' />}
            {showHome && showBack && <ThemedView background="fill7" className={cx('sep')} />}
            {showHome && <Icon onClick={goHome} className={cx('icon')} type="home" />}
          </ThemedView>
        }
        <ThemedView>{children}</ThemedView>
      </ThemedView>
    </ThemedView>
  )
}