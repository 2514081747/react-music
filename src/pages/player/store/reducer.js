import * as actionTypes from "./constant";

const defaultState = {
  songDetail: {},
  lyric: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_DETAIL:
      return { ...state, songDetail: action.songDetail };
    case actionTypes.CHANGE_SONG_LYRIC:
      return { ...state, lyric: action.lyric };
    default:
      return state;
  }
};

export { reducer };
