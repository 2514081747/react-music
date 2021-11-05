import React, { memo } from 'react'
import {RankSongListWrapper,RankSongHeader,RankSongList} from './style'
import {useSelector,shallowEqual} from 'react-redux'
import moment from 'moment'

export default memo(function LJRankSongList() {
    const state = useSelector((state) => ({
        topRanKDetail: state.ranking.topRanKDetail,
    }),shallowEqual)
    const {tracks = []} = state.topRanKDetail 
    console.log(state)
    console.log(tracks)
    const getAllSinger = (info) => {
        console.log(info)
        return info.reduce((prev,item) => {
            return prev  + '   ' +  item.name
        },'')
    }
    return (
        <RankSongListWrapper>
            <RankSongHeader>
                <div>
                    <span className='song-list'>歌曲列表</span>
                    <span className='length'>{tracks.length}首歌</span>
                </div>
                <div className='right'>
                    <span className='play'>播放:</span>
                    <span className='count'>{state.topRanKDetail.playCount}</span>
                    <span>次</span>
                </div>
            </RankSongHeader>
            <RankSongList>
                <table className='tablecell'>
                    <th className='rank thead'></th>
                    <th className='title thead'>标题</th>
                    <th className='time thead'>时长</th>
                    <th className='singer thead'>歌手</th>
                    {
                        tracks.map((item,index) => {
                            return(
                                <tr className='tritem'>
                                    <td className='index'>
                                        <span>{index + 1}</span>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{moment(item.dt).format('mm:ss')}</td>
                                    <td className='singertd'>{getAllSinger(item.ar)}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </RankSongList>
        </RankSongListWrapper>
    )
})
