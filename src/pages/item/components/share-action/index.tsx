import React, { useContext } from 'react'
import ActionSheet, { ActionSheetProps } from 'cpn/action-sheet'
import { AppContext } from '@/context'

interface ShareActionProps {
  onCopy: () => void
}

export default function ShareAction({ onCopy, ...props }: Partial<ShareActionProps & ActionSheetProps>) {
  const { state: { lang } } = useContext(AppContext)
  const items = [{
    openType: 'share',
    title: lang.shareFriend,
    onClick: props.onCancel
  },
  // {
  //   title: lang.generateCard
  // },
  {
    title: lang.copyLink,
    onClick: onCopy
  }]

  return (
    <ActionSheet {...props} cancelText={lang.cancel} items={items} />
  )
}