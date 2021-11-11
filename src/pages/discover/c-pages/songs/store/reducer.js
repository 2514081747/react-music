import * as actionTypes from "./constant";

const defaultState = {
  songCategory: {},
  songCategoryList: [],
  songCategoryName: "",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_CATEGORY:
      return { ...state, songCategory: action.songCategory };
    case actionTypes.CHANGE_SONG_CATEGORY_LIST:
      return { ...state, songCategoryList: action.songCategoryList };
    case actionTypes.CHANGE_SONG_CARTEGORY_NAME:
      return { ...state, songCategoryName: action.songCategoryName };
    default:
      return state;
  }
};

export default reducer;
