import React, { memo } from 'react'
import {SettSingerWarpper} from './style'
import {Button} from 'antd'

export default memo(function LJSettingSinger() {
    return (
        <SettSingerWarpper>
            <div className='login'>
                <div className='info'>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
                <Button type="primary" danger>用户登录</Button>
            </div>
        </SettSingerWarpper>
    )
})
