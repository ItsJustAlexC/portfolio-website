import React, { useEffect, useRef, useState } from 'react';

import profileImage from '../images/profile.png';

const About = () => {
    const heroContentRef = useRef();
    const [hasEntered, setHasEntered] = useState(false);
    const viewportHeight = window.innerHeight;

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0.4) {
                    entry.target.classList.add('fade-up');
                    setHasEntered(true);
                }
            });
        }, {threshold : 0.4});

        observer.observe(heroContentRef.current);

        // Clean up on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div id='about' className="about container-fluid">
            <div className="about-content" style={{height: viewportHeight}} ref={heroContentRef}>
                <h1 className="about-h1 ">About Me</h1>
                <img className="profile" src={profileImage} alt="Alex" draggable="false"/>
                <p className="about-p">
                    Hi! My name's Alex and I love creating things. I started off as a music major in college, and ended up as a software developer by graduation. 
                    Currently, I work at <a href='https://www.valleyqueen.com/'>Valley Queen</a>, as a C# Software Developer and AWS Cloud Engineer. 
                    I have previously worked at <a href='https://www.genesis10.com'>Genesis Corp.</a> as a Software Developer Consultant working in Java full-stack development.
                </p>
                <br/>
                <p className='about-p'>
                    While I'm not coding, you can find me at the gym, watching youtube, or cooking some of the best tasting food!
                </p>
            </div>
        </div>
    )
}

export default About