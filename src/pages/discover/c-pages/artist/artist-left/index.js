import React, { memo, useState,useEffect } from "react";
import { ArtistLeftWrapper } from "./style";
import { artistCategories } from "../../../../../services/local-data";
import classNames from "classnames";
import {useDispatch} from 'react-redux'
import { getArtist,ChangeCurrentTypeAction,ChangeCurrentAreaAction } from "../store/actionCreator";

export default memo(function LJArtistLeftCpn() {
  const [currentName, setCurrentName] = useState("推荐歌手");
  const [currentArea,setCurrentArea] = useState(-1) 
  const [curretnType,setCurrentType] = useState(1)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArtist(currentArea,curretnType))
    dispatch(ChangeCurrentTypeAction(curretnType))
    dispatch(ChangeCurrentAreaAction(currentArea))
  },[dispatch,curretnType,currentArea])

  const divClick = (name, area, type) => {
    setCurrentName(name);
    console.log(area,type)
    setCurrentArea(area)
    setCurrentType(type)
  };
  return (
    <ArtistLeftWrapper>
      <div>
        {artistCategories.map((item) => {
          return (
            <div className="all-category">
              <div className="title">{item.title}</div>
              <div>
                {item.artists.map((iten) => {
                  return (
                    <div
                      className="all-name"
                      onClick={(e) => divClick(iten.name, item.area, iten.type)}
                    >
                      <span className="point"></span>
                      <a
                        className={classNames("name", {
                          active: currentName === iten.name,
                        })}
                      >
                        {iten.name}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </ArtistLeftWrapper>
  );
});
