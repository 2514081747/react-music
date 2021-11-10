import * as actionTypes from './constant'
import {getDjRadioCatelist,getDjRadioRecommend} from '../../../../../services/dj-radio'


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