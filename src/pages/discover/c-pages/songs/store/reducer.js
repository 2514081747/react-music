import * as actionTypes from "./constant";

const defaultState = {
  songCategory: {},
  songCategoryList: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_CATEGORY:
      return { ...state, songCategory: action.songCategory };
    case actionTypes.CHANGE_SONG_CATEGORY_LIST:
      return { ...state, songCategoryList: action.songCategoryList };
    default:
      return state;
  }
};

export default reducer;
