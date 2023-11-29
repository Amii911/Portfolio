import React from "react"
import './About.css'
import headshot from '../../Assets/Aminat_Adebayo_Headshot.JPG'
import resume from '../../Assets/Aminat_Resume.pdf'


function About(){

    return(
        <div className="about">
            <div className="about-container">
                <div className="about-headshot">
                    <img src={headshot} alt="Headshot" className="circle-image" />
                </div>
                <div className="about-blurb">
                    <h2>Full Stack Software Engineer</h2>
                    <h3>New York, NY </h3>
                    <p>Hello! I'm Aminat - I build things and enjoy creating user friendly applications.</p>
                    <p>I am a Software Engineer with a passion for solving problems. In my quest for problems to solve I took the leap September 2022 and transitioned from being a paralegal to start my tech journey. Whether it's full stack applications or diverse creative projects, my background in logistics, organization, and customer service enables me to craft well-rounded solutions that consider every aspect of the development process. In my free time, I hang out with friends and family, try new foods, play tennis, yoga, attend meet ups, and help host Tech Gather NYC!</p>  
                    <br/><br/><br/>
                    <a href={resume} download className="resume">Download My Resume</a><br/><br/><br/>
                </div>
            </div>
        </div>

  
    )
}

export default About