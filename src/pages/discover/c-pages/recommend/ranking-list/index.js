import React, { memo,useEffect } from 'react'
import {RankWrapper} from './style'
import LJHotRecommendHeader from '../../../../../components/hot-recommend-header/index'
import LJRank from '../../../../../components/rank-list/index'
import {shallowEqual, useDispatch,useSelector} from 'react-redux'
import {getTopData} from '../store/actionCreators'

export default memo(function LJRankList() {
    const  dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopData(0))
        dispatch(getTopData(2))
        dispatch(getTopData(3))
    },[dispatch])

    const state = useSelector((state) => ({
        topUpList:state.recommend.topUpList,
        topNewList:state.recommend.topNewList,
        topOriginList:state.recommend.topOriginList
    }),shallowEqual)
    return (
        <RankWrapper>
            <LJHotRecommendHeader title='榜单'></LJHotRecommendHeader>
            <div className='tops'>
                <LJRank list={state.topUpList}></LJRank>
                <LJRank list={state.topNewList}></LJRank>
                <LJRank list={state.topOriginList}></LJRank>
            </div>
           
        </RankWrapper>
    )
})
