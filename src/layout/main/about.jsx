import React from 'react'
import about_me from '../../helpers/about'
function About() {
  return (
    <div id='About' className='about container'>
      <div className="about_me ">
        <h1 className='about_me-title'>About</h1>
        {about_me.map((item)=>(
          <div className="cards" key={item.id} >
            <h1 className="about_title"  >{item.title}</h1>
            <p className="about_subtitle"  >{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
