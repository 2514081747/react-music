import * as actionTypes from "./constant";

const defaultState = {
  djRadioHeaderList: [],
  djRadioRecommendList: [],
  djRadioRankList:[]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DJRADIO_HEADER_LIST:
      return { ...state, djRadioHeaderList: action.djRadioHeaderList };
    case actionTypes.CHANGE_DJRADIO_RECOMMEND_LIST:
      return { ...state, djRadioRecommendList: action.djRadioRecommendList };
    case actionTypes.CHANGE_DJRADIO_RAKING_LIST:
      return { ...state, djRadioRankList: action.djRadioRankList };
    default:
      return state;
  }
};

export { reducer };
