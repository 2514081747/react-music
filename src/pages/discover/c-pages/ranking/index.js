import React, { memo } from 'react'
import {
    RankWarpper,
    RankLeft,
    RankRight
} from './style'

export default memo(function LJranking() {
    return (
        <RankWarpper className='wrap-v2'>
            <RankLeft>
                aaaaaa
            </RankLeft>
            <RankRight>
                aaaa
            </RankRight>
        </RankWarpper>
    )
})
