import * as actionTypes from "./constant";

const defaultState = {
  hotAlbum: [],
  allAlbum: [],
  totalCount: "",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUM_LIST:
      return { ...state, hotAlbum: action.hotAlbum };
    case actionTypes.CHANGE_ALL_ALBUM_LIST:
      return { ...state, allAlbum: action.allAlbum };
    case actionTypes.CHANGE_TOTAL_ALBUM:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
};

export { reducer };
