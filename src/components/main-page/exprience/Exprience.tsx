import React from 'react'
import './Exprience.css'
function Exprience() {
    return (
        <div className='exp'>
            <div className='experience'>
                <h1>My Experience</h1>
                <div className='experience-wrap'>
                    <div className='experience-info'>
                        <p className='single-text'>I have gained valuable insights and expertise in Product Developer. I have had the opportunity to work on a wide range of projects</p>
                        <div className='flex tool-wrap'>
                            <div>Angular</div>
                            <div>Java</div>
                            <div>Spring Boot</div>
                            <div>MongoDB</div>
                            <div>React JS</div>
                            <div>Node JS</div>
                            <div>Git</div>
                            <div>Rest API</div>
                        </div>
                    </div>

                    <div className='experience-data'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Aug 2022 - Present</td>
                                    <td>MERN Developer</td>
                                    <td>Freelancer</td>
                                </tr>
                                <tr>
                                    <td>Jun 2022 - July 2023</td>
                                    <td>Software Developer</td>
                                    <td>Capgemini</td>
                                </tr>
                                <tr>
                                    <td>Jan 2022 - May 2022</td>
                                    <td>Java Full Stack Internship</td>
                                    <td>Capgemini</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Exprience