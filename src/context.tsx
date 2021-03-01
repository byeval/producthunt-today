import React, { createContext, PropsWithChildren, useReducer, Dispatch } from 'react'

import reducer, { StateShape, ActionShape, initialState } from './state'

interface ContextShape {
  state: StateShape
  dispatch: Dispatch<ActionShape>
}

export const AppContext = createContext<ContextShape>({ state: initialState, dispatch: () => { } })

export default function AppProvider({ children }: PropsWithChildren<any>) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}