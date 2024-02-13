import React from 'react'
import './MainPage.css'
import Image from "next/image"
import image from '../../../public/codeImage.jpg'
import trendingLogo from '../../../public/trending.svg'
import Projects from './projects/Projects'
import Exprience from './exprience/Exprience'
import AboutMe from './about-me/AboutMe'

function MainPage() {
  return (
    <div id='main'>
      <div className='first-container'>
        <div className='container-left'>
          <div className='know-tags'>
            <div>Front End</div>
            <div>Backend</div>
            <div>Database</div>
          </div>
          <h1>Crafting unforgettable digital journeys</h1>
          <div className='work-btn'>
            <a href=""><div>Work with me</div></a>
          </div>
        </div>

        <div className='container-right'>
          <p className='text'>I’m a web developer & software engineer✌, transforming ideas into interactive experiences.</p>
          <div>
            <Image
              className='code-logo'
              src={image}
              alt="Code"
              priority
            />
          </div>
          <div className="hero-fact">
            <div className="fact-data">
              <div className="fact-text">14k</div>
              <div># Happy Clients</div>
              <div className="fact-tag">
                <Image
                  src={trendingLogo}
                  alt="Trending Logo"
                  priority
                  className='filter-trending'
                />
                <div>+92%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id='exprience'>
        <Exprience />
      </section>
      {/* <section id='my-work'>
        <Projects />
      </section> */}

      <section id='exprience'>
        <AboutMe />
      </section>

    </div>
  )
}

export default MainPage