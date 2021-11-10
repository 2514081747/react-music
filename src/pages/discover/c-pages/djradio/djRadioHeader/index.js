import React, { memo, useEffect } from "react";
import { DjRadioHeaderWrapper,CategoryItemImage } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getDjRadioHeaderList } from "../store/actionCreator";

export default memo(function LJDjRadioHeader() {
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => ({
      djRadioHeaderList: state.djRadio.djRadioHeaderList,
    }),
    shallowEqual
  );
  console.log(state);
  useEffect(() => {
    dispatch(getDjRadioHeaderList());
  }, [dispatch]);
  return (
    <DjRadioHeaderWrapper>
      <div className='flex-item-img'>
        {state.djRadioHeaderList.map((item) => {
          return (
            <div className="item-img">
              <CategoryItemImage className='image' imgUrl={item.picWebUrl}></CategoryItemImage>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </DjRadioHeaderWrapper>
  );
});
