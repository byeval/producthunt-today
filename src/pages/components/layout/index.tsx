import React, { PropsWithChildren, useEffect, useContext } from 'react'
import { getLaunchOptionsSync } from 'remax/wechat'
import { ThemedView } from 'cpn/base'
import { voteService } from '@/services'
import { AppContext } from '@/context'
import { SINGLE_PAGE_SCENE } from '@/constants'

export default function Layout({ children }: PropsWithChildren<any>) {
  const { dispatch } = useContext(AppContext)

  const { scene } = getLaunchOptionsSync()

  useEffect(() => {
    if (scene !== SINGLE_PAGE_SCENE) {
      voteService.myVotes().then((data) => {
        const voted = data.map(({ productId }: any) => productId)
        dispatch({
          type: 'init_voted',
          payload: voted,
        })
      })
    }
  }, [])

  return <ThemedView>{children}</ThemedView>
}
