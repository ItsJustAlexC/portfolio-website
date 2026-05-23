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

        return () => observer.disconnect();
    }, []);

    return (
        <div id='about' className="about">
            <div className="about-content container-fluid" ref={heroContentRef}>
                <h1 className="about-h1 ">About Me</h1>
                <img className="profile" src={profileImage} alt="Alex" draggable="false"/>
                <p className="about-p">
                    Hi! My name's Alex and I love creating things. I started off as a music major in college, and ended up as a software developer by graduation. 
                    Currently, I work at <a className='text-decoration-none' href='https://www.valleyqueen.com/'>Valley Queen</a>, as a C# Software and Data platform Engineer. 
                    I have previously worked at <a className='text-decoration-none' href='https://www.genesis10.com'>Genesis Corp.</a> as a Software Developer Consultant working in Java full-stack development.
                </p>
                <br/>
                <p className='about-p'>
                    While I'm not coding, you can find me watching youtube, cooking some of the best tasting food, or reading a good book to keep my skills sharp. Currently I'm reading Designing Data-Intensive Applications by Martin Kleppmann.
                </p>
            </div>
        </div>
    )
}

export default About