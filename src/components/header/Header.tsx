'use client'
import React, { useState } from 'react'
import logo from '../../../public/sanjay.svg'
import Image from "next/image"
import './Header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleManu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='header'>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <a href="/">
                        <Image
                            src={logo}
                            alt="Sanjay Kumar"
                            width={40}
                            height={45}
                            priority
                        />
                    </a>
                    <div className='ms-3 logo-name justify-between items-center'>
                        <div>SANJAY KUMAR</div>
                        <span className='pt-2'>Frontend Developer</span>
                    </div>
                </div>
                <div className='nav flex'>
                    <a href="/my-work">My Work</a>
                    <a href="/about-me">About Me</a>
                    <a href="/blogs">Blogs</a>
                    <a href="/exprience">Experience</a>
                </div>
                <div className='contact'>
                    <a href="/contact" className='flex justify-center items-center'>
                        <div className='dot me-3'></div>
                        <div className='contact-text'>Contact Me</div>
                    </a>
                    <div className='action' onClick={handleManu}>
                        <div className={`${isMenuOpen ? 'top-line-open' : 'top-line'} mb-[6px]`}></div>
                        <div className={isMenuOpen? 'middle-line-open' : 'middle-line'}></div>
                        <div className={`${ isMenuOpen ? 'bottom-line-open' : 'bottom-line'} mt-[6px]`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header