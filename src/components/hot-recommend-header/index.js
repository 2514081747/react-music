import React, { memo } from "react";
import { Wrapper,Inner } from "./style";
import PropTypes from "prop-types";

const LJHotRecommendHeader = memo(function(props) {
  const { title, recommendList } = props;
  return (
    <Wrapper className='sprite_02'>
      <Inner>
        <div className="title">{title}</div>
        {recommendList.map((item, index) => {
          return (
            <a className="list" key='index'>
              {item}
              <span className="line">|</span>
            </a>
          );
        })}
      </Inner>
      <div>
          更多
          <i className="icon sprite_02"></i>
      </div>
    </Wrapper>
  );
});

LJHotRecommendHeader.defaultProps = {
    recommendList:[]
}

LJHotRecommendHeader.prototype = {
    // title:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    recommendList:PropTypes.array
}

export default LJHotRecommendHeader

