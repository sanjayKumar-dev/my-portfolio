import React from 'react'
import './AboutMe.css'
import ExpandableSection from './expandable/Expandable'

function AboutMe() {
  return (
    <div className='my-expertise'>
      <div className='about-me'>
        <div className='expertise-wrap'>
          <div className='expertise-left'>
            <h2>What I Do</h2>
            <p>I specialize in crafting custom solutions that seamlessly blend innovation with functionality.</p>
          </div>
          <div className='expertise-right'>
            <ExpandableSection title="Project Development">
              <p>Proficient in end-to-end project development lifecycle, from requirements gathering to deployment. Skilled in designing, implementing, and maintaining scalable and responsive web applications using Java, Angular, React, and Node.js.</p>
            </ExpandableSection>
            <ExpandableSection title="UI/UX Design">
              <p>Proficient in creating intuitive and visually appealing user interfaces using HTML, CSS, and JavaScript frameworks like Angular and React. Experienced in responsive design principles to ensure optimal user experience across various devices and screen sizes.</p>
            </ExpandableSection>
            <ExpandableSection title="API Development">
              <p>Strong expertise in designing and implementing RESTful APIs for seamless communication between frontend and backend systems. Skilled in utilizing frameworks like Express.js for Node.js and Spring Boot for Java to develop robust and secure APIs.</p>
            </ExpandableSection>
            <ExpandableSection title="Database Management">
              <p>Experienced in database design, implementation, and optimization using SQL and NoSQL databases like MySQL, MongoDB, and PostgreSQL. Proficient in integrating databases with backend systems to ensure efficient data management and retrieval.</p>
            </ExpandableSection>
            <ExpandableSection title="Testing and Debugging">
              <p>Adept at writing unit tests and conducting thorough debugging to ensure the reliability and performance of web applications. Experienced in using testing frameworks like JUnit, Jest, and Jasmine to identify and fix issues at all stages of development.</p>
            </ExpandableSection>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutMe