import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { TbCertificate } from 'react-icons/tb'
import { RiServiceFill } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    const [acttiveNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={acttiveNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={acttiveNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={acttiveNav === '#experience' ? 'active' : ''}><TbCertificate /></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={acttiveNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={acttiveNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

        </nav>
    )
}

export default Nav