import React, { useState } from 'react'
import cls from 'classnames/bind'
import { Button } from 'remax/wechat'
import { ThemedView, ThemedText } from 'cpn/base'
import Icon from 'cpn/icon'
import style from './index.module.css'

const cx = cls.bind(style)

interface ActionProps {
  title: string
  icon?: string
  openType?: string
  onClick?: () => void
}

export interface ActionSheetProps {
  visible?: boolean
  items: ActionProps[]
  renderItem?: (item: ActionProps) => void
  showCancel?: boolean
  cancelText?: string
  showMask?: boolean
  className?: string
  onCancel?: () => void
}

export default function ActionSheet({
  visible,
  items,
  renderItem,
  showCancel,
  cancelText,
  onCancel,
  showMask,
  className,
}: ActionSheetProps) {

  const handleClose = () => {
    onCancel && onCancel()
  }

  const itemRender = (item: ActionProps) => {
    if (renderItem) {
      return renderItem(item)
    }
    return (
      <ThemedView key={item.title} className={cx('action')} onClick={item.onClick} background="fill3" border="line2">
        {item.icon && <Icon type={item.icon} />}
        {item.openType === 'share' ? <Button openType="share" className={cx('btn')}><ThemedText color="text0">{item.title}</ThemedText></Button> : <ThemedText>{item.title}</ThemedText>}
      </ThemedView>
    )
  }

  return (
    <>
      {visible && showMask && <ThemedView onClick={handleClose} className={cx('mask')} />}
      <ThemedView className={cx(className, 'actions', { visible })} background="fill3" color="text0">
        {items.map(itemRender)}
        {showCancel && <ThemedView key="cancel" onClick={handleClose} className={cx('action', 'cancel')} background="fill3">{cancelText}</ThemedView>}
      </ThemedView>
    </>
  )
}

ActionSheet.defaultProps = {
  showMask: true,
  visible: false,
  showCancel: true,
  cancelText: 'Cancel',
}