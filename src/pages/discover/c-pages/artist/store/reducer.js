import * as actionTypes from "./constant";
const defaultState = {
  artist_list: [],
  currentType: "",
  currentArea:''
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST_LIST:
      return { ...state, artist_list: action.artist_list };
    case actionTypes.CHANGE_CURRENT_TYPE:
      return { ...state, currentType: action.currentType };
    case actionTypes.CHANGE_CURRENT_ARES:
      return { ...state, currentArea: action.currentArea };
    default:
      return state;
  }
};

export { reducer };
