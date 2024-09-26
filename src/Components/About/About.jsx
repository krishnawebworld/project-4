import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tommorrow leaders todays</h2>
            <p>Embarking on a new journey of self-improvement begins with a mirror. Not the one hanging on your wall, but the one we hold up to our inner selves. This section is about pausing, pondering, and planning. Let’s dive in
            Embarking on a new journey of self-improvement begins with a mirror. Not the one hanging on your wall, but the one we hold up to our inner selves. This section is about pausing, pondering, and planning. Let’s dive in
            </p>
            <p>Looking ahead, we expect innovative organizations to keep outpacing their peers. Our 2023 McKinsey Global Survey reveals a striking connection between organizations’ innovation capabilities and their abilities to </p>
                 <p>wheather Yet we are courageous, and we would rather leave the body and go home to the Lord. Therefore, we aspire to please him, whether we are at home or away. before the judgment seat of Christ, so that each one may receive recompense, according to what he did in the body, whether good or evil.</p>
        </div>
      
    </div>
  )
}

export default About
