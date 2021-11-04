import * as actionTypes from "./constants";

import { 
  getRanKTop,
  getRankDetail
} from "../../../../../services/rank";

const changeRanKTopAction = (res) => ({
  type: actionTypes.CHANGE_RANK_LIST,
  topRanK: res.list
})
export const changeRanKIndexAction = (index) => ({
    type: actionTypes.CHANGE_RANK_INDEX,
    currentIndex:index 
  })

const changeRanKDetail = (res) => ({
    type: actionTypes.CHANGE_RANK_DETAIL,
    topRanKDetail: res
  })

export const getRanKTopList = () => {
    return dispatch => {
        getRanKTop().then(res => {
            // console.log(res)
            dispatch(changeRanKTopAction(res))
        })
    }
}

export const getRanKTopDetail = (id) => {
    return dispatch => {
        getRankDetail(id).then(res => {
            console.log(res)
            dispatch(changeRanKDetail(res))
        })
    }
}