import React from 'react'
import './Projects.css'
import project1 from '../../../../public/Project1.png'
import project2 from '../../../../public/Project2.png'
import project3 from '../../../../public/Project3.png'
import project4 from '../../../../public/Project4.png'
import Image from 'next/image'

function Projects() {
    return (
        <div className='projects'>
            <h1 className=''>My Projects</h1>
            <div className="flex flex-wrap project-container ">
                <div className="flex-auto">
                    <div>
                        <Image src={project1} alt='project1' />
                        <div className='flex justify-between mt-2'>
                            <div>Hotel Mangement System</div>
                            <div>2022</div>
                        </div>
                        <div className='flex'>
                            <p>SaaS</p>
                            <p>Angular</p>
                            <p>Spring Boot</p>
                            <p>MongoDB</p>
                            <p>Microservice</p>
                            <p>Java Mail</p>
                        </div>
                    </div>
                </div>
                <div className="flex-auto">
                    <div>
                        <Image src={project2} alt='project1' />
                        <div className='flex justify-between mt-2'>
                            <div>Excel to Database</div>
                            <div>2023</div>
                        </div>
                        <div className='flex'>
                            <p>SaaS</p>
                            <p>React</p>
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className="flex-auto">
                    <div>
                        <Image src={project3} alt='project1' />
                        <div className='flex justify-between mt-2'>
                            <div>Email Sender</div>
                            <div>2024</div>
                        </div>
                        <div className='flex'>
                            <p>SaaS</p>
                            <p>React</p>
                            <p>NodeJS</p>
                            <p>Node Mailer</p>
                        </div>
                    </div>
                </div>
                <div className="flex-auto">
                    <div>
                        <Image src={project4} alt='project1' />
                        <div className='flex justify-between'>
                            <div>Drum Kit</div>
                            <div>2021</div>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>Website</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects