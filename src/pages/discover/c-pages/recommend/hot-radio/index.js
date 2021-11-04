import React, { memo } from 'react'
import {HotRadioWrapper} from './style'
import {hotRadios} from '../../../../../services/local-data'

export default memo(function LJHotRadio() {
    return (
        <HotRadioWrapper>
            <div className='title'>热门主播</div>
            {
                hotRadios.map(item => {
                    return(
                        <div className='hotRadioItem'>
                            <img className='hotImg' src={item.picUrl}></img>
                            <div>
                                <div className='name'>{item.name}</div>
                                <div className='postion'>{item.position}</div>
                            </div>
                        </div>
                    )
                })
            }
        </HotRadioWrapper>
    )
})
