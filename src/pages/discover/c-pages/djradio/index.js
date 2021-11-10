import React, { memo } from "react";
import { DjRadioWrapper } from "./style";
import LJDjRadioHeader from "./djRadioHeader/index";
import LJDJRadioContent from './djRadioContent/index'

export default memo(function LJdjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <LJDjRadioHeader></LJDjRadioHeader>
      <LJDJRadioContent></LJDJRadioContent>
    </DjRadioWrapper>
  );
});
