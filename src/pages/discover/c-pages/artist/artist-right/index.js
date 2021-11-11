import React, { memo,useState,useEffect } from "react";
import { ArtistRightWrapper } from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { artistCategories } from "../../../../../services/local-data";
import { singerAlphas } from "../../../../../utils/handle-data";
import classNames from "classnames";
import {getArtist} from '../store/actionCreator'

export default memo(function LJArtistRightCpn() {
  const [currentIndex,setCurrentIndex] = useState(1)
  const [currentAlpha,setCurrentAlpha] = useState()
  const state = useSelector(
    (state) => ({
      artist_list: state.artist.artist_list,
      currentType: state.artist.currentType,
      currentArea: state.artist.currentArea,
    }),
    shallowEqual
  );
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getArtist(state.currentArea,state.currentType,currentAlpha))
  },[state.currentType,state.currentAreacurrentAlpha])
  console.log(state);
  const aClick = (index,item) => {
      setCurrentIndex(index)
      setCurrentAlpha(item)
      dispatch(getArtist(state.currentArea,state.currentType,currentAlpha))
  }

  // const artistArr = artistCategories.filter((item) => {
  //   return item.area === state.currentArea;
  // });
  // const a = artistArr[0].artists;
  // console.log(artistArr, a);
  // const y = a.filter((item) => {
  //   return item.type === state.currentType;
  // });
  // console.log(y);
  // const n = y[0].name;
  // console.log(n);
  return (
    <ArtistRightWrapper>
      <div className="title">热门新碟</div>
      <a className="more">更多&gt;</a>
      {/* 字母表 */}
      <div className={classNames('alpha',{isShow:state.currentArea === -1})}>
        {
           singerAlphas.map((item,index) => {
             if(item == '-1'){
               return (
                 <a>推荐</a>
               )
             }else if(item == '0'){
                return (
                  <a>其他</a>
                )
             }else{
               return (
                 <a onClick={e => aClick(index,item)} className={classNames({active:currentIndex === index})}>{item}</a>
               )
             }
           })
        }
      </div>
      <div className="all">
        {state.artist_list.map((item, index) => {
          if (index < 10) {
            return (
              <div className="item">
                <img className="img10" src={item.picUrl}></img>
                <div className="name">
                  {item.name} <UserOutlined className="icon" />
                </div>
              </div>
            );
          } else {
            return (
              <div className="before10">
                <div className="name">
                  {item.name} <UserOutlined className="icon" />
                </div>
              </div>
            );
          }
        })}
      </div>
    </ArtistRightWrapper>
  );
});
