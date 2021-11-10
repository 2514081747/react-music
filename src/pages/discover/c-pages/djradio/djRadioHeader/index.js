import React, { memo, useEffect ,useState} from "react";
import { DjRadioHeaderWrapper,CategoryItemImage } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getDjRadioHeaderList,getDjRadioRecommendList,getRadiosRankList } from "../store/actionCreator";
import classNames from "classnames";

export default memo(function LJDjRadioHeader() {
  const [currentId,setCurrentId] = useState(3)
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
  const imgClick = (id) => {
    // console.log(id)
    setCurrentId(id)
    dispatch(getRadiosRankList(id,1))
    dispatch(getDjRadioRecommendList(id))
  }
  return (
    <DjRadioHeaderWrapper>
      <div className='flex-item-img'>
        {state.djRadioHeaderList.map((item) => {
          return (
            <div className={classNames('item-img',{"active": currentId === item.id})} onClick={e => imgClick(item.id)}>
              <CategoryItemImage className='image' imgUrl={item.picWebUrl}></CategoryItemImage>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </DjRadioHeaderWrapper>
  );
});
