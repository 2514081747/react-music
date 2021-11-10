import React, { memo } from 'react'
import {SongSheetWrapper} from './style'
import LJSongHeader from '../songs/song-header/index'
import LJSongList from '../songs/song-list/index'

export default memo(function LJsongs() {
    return (
        <SongSheetWrapper className='wrap-v2'>
           <LJSongHeader></LJSongHeader>
           <LJSongList></LJSongList>
        </SongSheetWrapper>
    )
})
