import React, { memo } from 'react'
import LJMain from './pages/main';
import store from './store/index'
import { Provider } from "react-redux";

export default memo(function App() {
  return (
    <Provider store={store}>
      <LJMain></LJMain>
    </Provider>
  )
})
