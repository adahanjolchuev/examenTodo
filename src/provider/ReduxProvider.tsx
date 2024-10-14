import { store } from '@/redux/store'
import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'


interface IReduxProvider {
    children: ReactNode
}

const ReduxProvider: FC<IReduxProvider> = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxProvider
