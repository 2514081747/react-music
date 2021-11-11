import * as actionTypes from "./constant";
import {
  getSongCategory,
  getSongCategoryList,
} from "../../../../../services/song";

const ChangeSongCategoryAction = (res) => {
  return {
    type: actionTypes.CHANGE_SONG_CATEGORY,
    songCategory: res,
  };
};

const ChangeSongCategoryListAction = (res) => {
  return {
    type: actionTypes.CHANGE_SONG_CATEGORY_LIST,
    songCategoryList: res,
  };
};

export const ChangeSongCategoryNameAction = (name) => {
  return {
    type: actionTypes.CHANGE_SONG_CARTEGORY_NAME,
    songCategoryName: name,
  };
};

export const getSongCategorye = () => {
  return (dispatch) => {
    getSongCategory().then((res) => {
      dispatch(ChangeSongCategoryAction(res));
    });
    // dispatch(Cha)
  };
};

export const getSongCategoryListByName = (cat,offset,limit) => {
  return (dispatch) => {
    getSongCategoryList(cat,offset,limit).then((res) => {
      console.log(res)
      dispatch(ChangeSongCategoryListAction(res));
    });
    // dispatch(Cha)
  };
};
