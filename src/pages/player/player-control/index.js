import React, { memo } from "react";
import {
  PlayerControlWrapper,
  PlayerControlCenter,
  PlayerControlLeft,
  PlayerControlRight,
} from "./style";
import {
  CaretRightOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";

export default memo(function LJPlayerControl() {
  return (
    <PlayerControlWrapper className="wrap-v2">
      <PlayerControlLeft className='btn'>
        <StepBackwardOutlined />
        <CaretRightOutlined />
        <StepForwardOutlined />
      </PlayerControlLeft>

      <PlayerControlCenter></PlayerControlCenter>
      <PlayerControlRight></PlayerControlRight>
    </PlayerControlWrapper>
  );
});
