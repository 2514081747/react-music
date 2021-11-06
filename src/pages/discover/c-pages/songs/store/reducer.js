import * as actionTypes from './constant'

const defaultState = {
    songCategory:{}
}

const reducer = (state = defaultState,action) => {
    switch (action.type){
        case actionTypes.CHANGE_SONG_CATEGORY:
            return {...state,songCategory:action.songCategory}
        default:
            return state
    }
}

export default reducer