import React, { useContext, useCallback, ReactNode } from 'react'
import { ThemedView } from 'cpn/base'
import { productService, voteService } from 'service'
import { AppContext } from '@/context'

interface VoteProps {
  item: any
  children: (isVoted: boolean) => ReactNode
  [key: string]: any
}

export default function Vote({ children, item, ...partial }: VoteProps) {
  const { state, dispatch } = useContext(AppContext)
  const { voted = [] } = state
  const isVoted = voted.includes(item.id)

  const handleVote = useCallback(async (evt: any) => {
    evt.stopPropagation()

    try {
      if (isVoted) {
        await voteService.unvoteProduct(item.id)
      } else {
        await voteService.voteProduct(item.id)
      }

      const type = isVoted ? 'unvote' : 'vote'

      dispatch({ type, payload: item.id })
      
      try {
        await productService.addProduct(item)
      } catch(err) {
        console.log(err)
      }
  
    } catch (err) {
      console.log(err)
    }
  }, [isVoted])

  return (
    <ThemedView {...partial} onClick={handleVote}>
      {children(isVoted)}
    </ThemedView>
  )
}