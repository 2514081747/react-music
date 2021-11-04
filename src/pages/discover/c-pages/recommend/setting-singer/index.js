import React, { memo,useEffect } from 'react'
import {SettSingerWarpper} from './style'
import {Button} from 'antd'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import {getSettleSingers} from '../store/actionCreators'

export default memo(function LJSettingSinger() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSettleSingers())
    },[dispatch])

    const state = useSelector((state) => ({
        settleSings:state.recommend.settleSings
    }),shallowEqual)
    console.log(state.settleSings)
    return (
        <SettSingerWarpper>
            <div className='login sprite_02'>
                <div className='info'>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
                <Button type="primary" danger>用户登录</Button>
            </div>
            <div className='singer-top'>
                <div>入驻歌手</div>
                <div>查看全部 &gt;</div>
            </div>
            <div className='singerList'>
                {
                    state.settleSings.map(item => {
                        return(
                            <div className='singerItem'>
                                <img className='pic' src={item.img1v1Url}></img>
                                <div>
                                    <div className='alias'>{item.alias[0] ? item.alias[0] : item.name}</div>
                                    <div className='name'>{item.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className='btn'>申请成为网易云音乐人</button>

        </SettSingerWarpper>
    )
})
