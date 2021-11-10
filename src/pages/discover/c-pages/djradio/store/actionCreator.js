import * as actionTypes from './constant'
import {getDjRadioCatelist,getDjRadioRecommend,getDjRadios} from '../../../../../services/dj-radio'


const ChangeDjRadioHeaderList = (res) => {
    return {
        type:actionTypes.CHANGE_DJRADIO_HEADER_LIST,
        djRadioHeaderList:res.categories
    }
}

const ChangeDjRadioRecommend = (res) => {
    return {
        type:actionTypes.CHANGE_DJRADIO_RECOMMEND_LIST,
        djRadioRecommendList:res.djRadios
    }
}

const ChangeDjRadioRaningAction = (res) => {
    return {
        type:actionTypes.CHANGE_DJRADIO_RAKING_LIST,
        djRadioRankList:res.djRadios
    }
}

export const getDjRadioHeaderList = () => {
    return dispatch => {
        getDjRadioCatelist().then(res => {
            console.log(res)
            dispatch(ChangeDjRadioHeaderList(res))
        })
    }
}

export const getDjRadioRecommendList = (type) => {
    return dispatch => {
        getDjRadioRecommend(type).then(res => {
            console.log(res)
            dispatch(ChangeDjRadioRecommend(res))
        })
    }
}

export const getRadiosRankList = (currentId, offset) => {
    return dispatch => {
      getDjRadios(currentId, 30, offset).then(res => {
          console.log(res)
        dispatch(ChangeDjRadioRaningAction(res));
      })
    }
  }