import React, { memo } from 'react'
import LJTopBanner from './top-banner/index'
import LJHotRecommend from './hot-recommend/index'
import LJNewAlbum from './new-album/index'
import LJRankList from './ranking-list/index'
import {
    Content,
    RecommendLeft,
    RecommendRight
} from './style'

export default memo(function LJrecommend() {
    return (
        <div>
            <LJTopBanner></LJTopBanner>
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <LJHotRecommend></LJHotRecommend>
                    <LJNewAlbum></LJNewAlbum>
                    <LJRankList></LJRankList>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </div>
    )
})
