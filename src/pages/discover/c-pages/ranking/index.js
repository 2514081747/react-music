import React, { memo,useEffect } from 'react'
import {
    RankWarpper,
    RankLeft,
    RankRight
} from './style'
import JLRankLeft from '../ranking/rank-left/index'
import LJRankHeader from '../ranking/ranking-header/index'
import LJRankSongList from '../ranking/ranking-list/index'
import {useDispatch} from 'react-redux'
import {getRanKTopList} from './store/actionCreacor'


export default memo(function LJranking() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRanKTopList())
    },[dispatch])
    return (
        <RankWarpper className='wrap-v2'>
            <RankLeft>
                <JLRankLeft></JLRankLeft>
            </RankLeft>
            <RankRight>
                <LJRankHeader></LJRankHeader>
                <LJRankSongList></LJRankSongList>
            </RankRight>
        </RankWarpper>
    )
})
