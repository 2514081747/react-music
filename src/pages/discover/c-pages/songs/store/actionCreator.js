import * as actionTypes from "./constant";
import {getSongCategory} from '../../../../../services/song'

const ChangeSongCategoryAction = (res) => {
  return {
    type: actionTypes.CHANGE_SONG_CATEGORY,
    songCategory: res,
  };
};


export const getSongCategorye = () => {
    return dispatch => {
        getSongCategory().then(res => {
            dispatch(ChangeSongCategoryAction(res))
        })
        // dispatch(Cha)
    }
}
