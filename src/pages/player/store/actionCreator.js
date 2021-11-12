import * as actionTypes from './constant'
import {getSongDetail,getLyric} from '../../../services/player'
import {parseLyric} from '../../../utils/lrc-parse'

const ChangeSongDetailAction = (res) => {
    return {
        type:actionTypes.CHANGE_SONG_DETAIL,
        songDetail:res
    }
}

const ChangeSongLyric = (res) => {
    return {
        type:actionTypes.CHANGE_SONG_LYRIC,
        lyric:res
    }
}

export const getSongDetailfn = (id) => {
    return dispatch => {
        getSongDetail(id).then(res => {
            console.log(res)
            dispatch(ChangeSongDetailAction(res))
        })
    }
}

export const getSongLyric = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            console.log(res)
            const lyric = parseLyric(res.lrc.lyric)
            dispatch(ChangeSongLyric(lyric))
        })
    }
}