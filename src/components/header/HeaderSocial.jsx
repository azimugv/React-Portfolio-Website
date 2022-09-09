import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiFiverr } from 'react-icons/si'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com' target="_blank"><BsLinkedin /></a>
            <a href='https://github.com' target="_blank"><BsGithub /></a>
            <a href='https://fiverr.com' target="_blank"><SiFiverr /></a>
        </div>
    )
}

export default HeaderSocial