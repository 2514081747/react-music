import React, { memo } from 'react'
import {LJArtistWrapper,LJArtistLeft,LJArtistRight} from './style'
import LJArtistLeftCpn from '../artist/artist-left/index'
import LJArtistRightCpn from '../artist/artist-right/index'

export default memo(function LJartist() {
    return (
        <LJArtistWrapper className='wrap-v2'>
            <LJArtistLeft>
                <LJArtistLeftCpn></LJArtistLeftCpn>
            </LJArtistLeft>
            <LJArtistRight>
                <LJArtistRightCpn></LJArtistRightCpn>
            </LJArtistRight>
        </LJArtistWrapper>
    )
})
