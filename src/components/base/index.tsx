import React, { useContext, PropsWithChildren } from 'react'
import { View, Text, ViewProps, TextProps } from 'remax/wechat'
import { pickBy, identity, upperFirst } from 'lodash'
import { AppContext } from '@/context'

export interface ThemedViewProps extends ViewProps {
  color?: string 
  border?: string
  background?: string
  borderPosition?: 'top' | 'bottom' | 'left' | 'right'
}

export function ThemedView({ children, background, border, color, borderPosition, style = {}, ...partial }: PropsWithChildren<ThemedViewProps>) {
  const { state: { theme } } = useContext(AppContext)
  const borderKey = borderPosition ? `border${upperFirst(borderPosition.toLowerCase())}Color` : 'borderColor'
  const themedStyle: any = {
    backgroundColor: theme[`${background}`],
    [borderKey]: theme[`${border}`],
    color: theme[`${color}`],
    ...style
  }
  const trimedStyle = pickBy(themedStyle, identity)

  return <View style={trimedStyle} {...partial}>{children}</View>
}

export interface ThemedTextProps extends TextProps {
  color?: string
}

export function ThemedText({ children, color, style = {}, ...partial }: PropsWithChildren<ThemedTextProps>) {
  const { state: { theme } } = useContext(AppContext)
  const themedStyle = {
    color: theme[`${color}`],
    ...style
  }
  const trimedStyle = pickBy(themedStyle, identity)

  return <Text style={trimedStyle} {...partial}>{children}</Text>
}
