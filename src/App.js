import React, { memo } from "react";
import LJMain from "./pages/main";
import store from "./store/index";
import { Provider } from "react-redux";
import LJplayer from "./pages/player/index";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";

export default memo(function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <LJMain></LJMain>
        <LJplayer></LJplayer>
      </ConfigProvider>
    </Provider>
  );
});
