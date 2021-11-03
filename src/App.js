import React, { memo } from 'react'
import LJMain from './pages/main';
import store from './store/index'
import { Provider } from "react-redux";
import LJplayer from './pages/player/index'

export default memo(function App() {
  return (
    <Provider store={store}>
      <LJMain></LJMain>
      <LJplayer></LJplayer>
    </Provider>
  )
})
