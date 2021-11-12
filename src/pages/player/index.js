import React, { memo, useEffect } from "react";
import { MusicPlayWrapper } from "./style";
import LJPlayerControl from "./player-control/index";
import { useDispatch } from "react-redux";
import { getSongDetailfn } from "./store/actionCreator";

export default memo(function LJplayer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailfn(1891469546));
  }, [dispatch]);
  return (
    <div>
      <MusicPlayWrapper>
        <LJPlayerControl></LJPlayerControl>
      </MusicPlayWrapper>
    </div>
  );
});
