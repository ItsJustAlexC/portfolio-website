import valleyqueen from '../images/valley-queen.png';
import genesis from '../images/genesis10.png';
import javescript from '../images/skills/JavaScript.png';
import typescript from '../images/skills/TypeScript.png';
import react from '../images/skills/React-Dark.png';
import bootstrap from '../images/skills/Bootstrap.png';
import html from '../images/skills/HTML.png';
import java from '../images/skills/Java-Dark.png';
import spring from '../images/skills/Spring-Dark.png';
import express from '../images/skills/ExpressJS-Dark.png';
import node from '../images/skills/NodeJS-Dark.png';
import python from '../images/skills/Python-Dark.png';
import mysql from '../images/skills/MySQL-Dark.png';
import mongodb from '../images/skills/MongoDB.png';
import aws from '../images/skills/AWS-Dark.png';
import github from '../images/skills/Github-Dark.png';
import jenkins from '../images/skills/Jenkins-Dark.png';

const Experience = () => {
    const viewportHeight = window.innerHeight;

    return (
        <div id="experience" className="experience">
            <div className="experience-content container-fluid" style={{height: viewportHeight}}>
                <h1 className="experience-h1">Experience</h1>
                <p className="experience-p">I've been a software developer for 5 years now, with 3 years of professional experience.</p>
                <div className="experience-skills-work">
                    <div className="experience-skills">
                        <p>SOME TECHNOLOGIES I'VE WORKED WITH:</p>
                        <div className='experience-skills-images'>
                            <img className="skill-image" src={javescript} alt="JavaScript" draggable="false"/>
                            <img className="skill-image" src={typescript} alt="Typescript" draggable="false"/>
                            <img className="skill-image" src={react} alt="React" draggable="false"/>
                            <img className="skill-image" src={bootstrap} alt="Bootstrap" draggable="false"/>
                            <img className="skill-image" src={html} alt="Html" draggable="false"/>
                            <img className="skill-image" src={java} alt="Java" draggable="false"/>
                            <img className="skill-image" src={spring} alt="Springboot" draggable="false"/>
                            <img className="skill-image" src={express} alt="Express" draggable="false"/>
                            <img className="skill-image" src={node} alt="NodeJS" draggable="false"/>
                            <img className="skill-image" src={python} alt="Python" draggable="false"/>
                            <img className="skill-image" src={mysql} alt="MySQL" draggable="false"/>
                            <img className="skill-image" src={mongodb} alt="MongoDB" draggable="false"/>
                            <img className="skill-image" src={aws} alt="AWS" draggable="false"/>
                            <img className="skill-image" src={github} alt="Github" draggable="false"/>
                            <img className="skill-image" src={jenkins} alt="Jenkins" draggable="false"/>
                        </div>
                    </div>
                    <div className="experience-work">
                        <p>WHERE I'VE WORKED:</p>
                        <div className='experience-work-images'>
                            <img className="valley-queen" src={valleyqueen} alt="Valley Queen" draggable="false"/>
                            <img className="genesis" src={genesis} alt="Genesis" draggable="false"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;