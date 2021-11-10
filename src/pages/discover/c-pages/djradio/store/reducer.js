import * as actionTypes from "./constant";

const defaultState = {
  djRadioHeaderList: [],
  djRadioRecommendList: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DJRADIO_HEADER_LIST:
      return { ...state, djRadioHeaderList: action.djRadioHeaderList };
    case actionTypes.CHANGE_DJRADIO_RECOMMEND_LIST:
      return { ...state, djRadioRecommendList: action.djRadioRecommendList };
    default:
      return state;
  }
};

export { reducer };
