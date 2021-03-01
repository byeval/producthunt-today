import { Reducer } from 'react'
import { getSystemInfoSync } from 'remax/wechat'
import { themes, langs } from '../constants'

export interface ActionShape {
  type: string
  payload: any
}

export interface StateShape {
  loading: boolean
  voted: any[]
  theme: { [key: string]: string }
  lang: { [key: string]: string | string[] }
  systemInfo: WechatMiniprogram.GetSystemInfoSyncResult
}

const systemInfo = getSystemInfoSync()

export const initialState = {
  loading: true,
  theme: themes.dark,
  lang: langs[systemInfo.languag] || langs.en,
  voted: [],
  systemInfo,
}

const reducer: Reducer<StateShape, ActionShape> = (
  state: StateShape,
  { type, payload }: ActionShape
) => {
  const voted = state.voted.slice()
  switch (type) {
    case 'init_voted':
      return { ...state, voted: payload }
    case 'vote':
      voted.push(payload)
      return { ...state, voted }
    case 'unvote':
      voted.splice(voted.indexOf(payload), 1)
      return { ...state, voted }
    default:
      return state
  }
}

export default reducer
