import React from 'react'
import logo from '../../../public/sanjay.svg'
import Image from "next/image"
import './Header.css'

function Header() {
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
                <div >
                    <a href="/contact" className='flex justify-center items-center'>
                        <div className='dot me-3'></div>
                        <div className='contact-text'>Contact Me</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header