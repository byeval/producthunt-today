import React, { useState, useEffect, useRef } from 'react'
import cls from 'classnames/bind'
import { usePageEvent } from 'remax/macro'
import { Image, createSelectorQuery } from 'remax/wechat'
import { ThemedView } from 'cpn/base'
import NavBar from 'cpn/navbar'
import logo from '@/assets/slogan-orange.png'
import wave from '@/assets/wave.jpg';
import styles from './index.module.css'

const cx = cls.bind(styles)

export default function Header() {
  const posRef = useRef<any>({})
  const [bg, setBg] = useState('')

  useEffect(() => {
    createSelectorQuery().select('.header').boundingClientRect((rect) => posRef.current.header = rect.height).exec()
    createSelectorQuery().select('.header-nav').boundingClientRect((rect) => posRef.current.nav = rect.height).exec()
  }, [])

  usePageEvent('onPageScroll', (evt) => {
    const diff = evt.scrollTop - (posRef.current.header - posRef.current.nav)
    if (diff > 0) {
      setBg('fill0')
    } else {
      setBg('')
    }
  })

  return (
    <ThemedView className={cx('header')}>
      <NavBar className={cx('header-nav')} fixed background={bg}>
        <ThemedView className={cx('brand')}>
          <Image className={cx('logo')} src={logo} />
        </ThemedView>
      </NavBar>
      <ThemedView className={cx('banner')}>
        <Image className={cx('art')} src={wave} />
      </ThemedView>
    </ThemedView>
  )
}
