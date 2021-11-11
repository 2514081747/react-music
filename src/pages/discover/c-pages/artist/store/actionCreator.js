import * as actionTypes from './constant'
import {getArtistList} from '../../../../../services/artist'

const ChangeArtistListAction = (res) => {
    return {
        type:actionTypes.CHANGE_ARTIST_LIST,
        artist_list:res.artists
    }
}

export const ChangeCurrentTypeAction = (currentType) => {
    return {
        type:actionTypes.CHANGE_CURRENT_TYPE,
        currentType
    }
}

export const ChangeCurrentAreaAction = (currentArea) => {
    return {
        type:actionTypes.CHANGE_CURRENT_ARES,
        currentArea
    }
}

export const getArtist = (area,type,intial) => {
    return dispatch => {
        getArtistList(area,type,intial).then(res => {
            console.log(res);
            dispatch(ChangeArtistListAction(res))
        })
    }
}



