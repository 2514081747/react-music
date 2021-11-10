import * as actionTypes from "./constant";
import { getHotAlbumList,getTopAlbums } from "../../../../../services/album";

const ChangeHotAlbumListAction = (res) => {
    return {
        type:actionTypes.CHANGE_HOT_ALBUM_LIST,
        hotAlbum:res.albums
    }
}

const ChangeAllAlbumListAction = (res) => {
    return {
        type:actionTypes.CHANGE_ALL_ALBUM_LIST,
        allAlbum:res.albums
    }
}

const ChangeAlbumTotalAction = (total) => {
    return {
        type:actionTypes.CHANGE_TOTAL_ALBUM,
        totalCount:total
    }
}


export const getHotAlbum = () => {
    return dispatch => {
        getHotAlbumList().then(res => {
            dispatch(ChangeHotAlbumListAction(res))
        })
    }
}

export const getAllAlbum = (page) => {
    return dispatch => {
        getTopAlbums(30,(page-1)*30).then(res => {
            console.log(res)
            dispatch(ChangeAllAlbumListAction(res))
            dispatch(ChangeAlbumTotalAction(res.total))
        })
    }
}