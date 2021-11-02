import * as actionTypes from './constants';

const defaultState = {
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
//   topUpList: {},
//   topNewList: {},
//   topOriginList: {},

//   settleSings: [],
}
 const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return {...state , topBanners:action.banners};
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return {...state,hotRecommends:action.recommends};
    case actionTypes.CHANGE_NEW_ALBUM:
      return {...state,newAlbum:action.newAlbum}
    // case actionTypes.CHANGE_UP_LIST:
    //   return state.set("topUpList", action.topUpList);
    // case actionTypes.CHANGE_NEW_LIST:
    //   return state.set("topNewList", action.topNewList);
    // case actionTypes.CHANGE_ORIGIN_LIST:
    //   return state.set("topOriginList", action.topOriginList);
    // case actionTypes.CHANGE_SETTLE_SONGER:
    //   return state.set("settleSings", action.settleSings)
    default:
      return state;
  }
}

export default reducer