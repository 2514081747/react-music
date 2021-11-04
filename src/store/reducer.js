// import { combineReducers } from "redux-immutable";
import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import {reducer as rankReducer} from '../pages/discover/c-pages/ranking/store/index'
// // import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store";
// import { reducer as songsReducer } from "../pages/discover/c-pages/songs/store";
// import { reducer as djradioReducer } from "../pages/discover/c-pages/djradio/store";
// import { reducer as albumReducer } from "../pages/discover/c-pages/album/store";
// import { reducer as artistReducer } from "../pages/discover/c-pages/artist/store";
// import { reducer as playerReducer } from "../pages/player/store";

export default combineReducers({
  recommend: recommendReducer,
  ranking: rankReducer,
  //   songs: songsReducer,
  //   djradio: djradioReducer,
  //   album: albumReducer,
  //   artist: artistReducer,
  //   player: playerReducer
});
