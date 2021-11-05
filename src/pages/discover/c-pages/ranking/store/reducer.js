import * as actionTypes from './constants'
const defaultState = {
    topRanK:[],
    currentIndex:'',
    topRanKDetail:{}
}

const reducer =  (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.CHANGE_RANK_LIST:
            return {...state,topRanK:action.topRanK}
        case actionTypes.CHANGE_RANK_INDEX:
            return {...state,currentIndex:action.currentIndex} 
        case actionTypes.CHANGE_RANK_DETAIL:
            return {...state,topRanKDetail:action.topRanKDetail}   
        default:
            return state
        
    }
}


export default reducer