import React, { useEffect, useRef, useState } from 'react';

import profileImage from '../images/profile.png';

const About = () => {
    const heroContentRef = useRef();
    const [hasEntered, setHasEntered] = useState(false);

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
        <div className="about">
            <div className="about-content" ref={heroContentRef}>
                <h1 className="about-h1">About Me</h1>
                <img className="profile" src={profileImage} alt="Alex" draggable="false"/>
                <p className="about-p">
                    Hi! My name's Alex and I love creating things. In college I started out as a music major, until one day I decided to take a course in Java. 
                    Almost instantly I saw my love of creating music turn into a love of creating applications that other people could use. Fast-forward to today, I now specialize in Java and C# full-stack development.
                    I have had the privilege of working with a <a href="https://www.genesis10.com">consultant company</a> and I currently work at a <a href="https://www.valleyqueen.com/">major cheese company</a>.
                </p>
                <br/>
                <p className='about-p'>
                    While I'm not coding, you can find me at the gym, watching youtube, or on my switch playing roguelikes.
                </p>
            </div>
        </div>
    )
}

export default About