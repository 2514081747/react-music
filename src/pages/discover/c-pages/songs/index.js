import React, { memo } from 'react'
import {SongSheetWrapper} from './style'
import LJSongHeader from '../songs/song-header/index'

export default memo(function LJsongs() {
    return (
        <SongSheetWrapper className='wrap-v2'>
           <LJSongHeader></LJSongHeader> 
        </SongSheetWrapper>
    )
})
