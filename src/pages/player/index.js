import React, { memo } from 'react'
import { MusicPlayWrapper } from './style'
import LJPlayerControl from './player-control/index'

export default memo(function LJplayer() {
    return (
        <div>
            <MusicPlayWrapper>
                <LJPlayerControl></LJPlayerControl>
            </MusicPlayWrapper>
        </div>
    )
})
