import profileImage from '../images/profile.png';

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <h1 className="about-h1">About Me</h1>
                <img className="profile" src={profileImage} alt="Alex"/>
                <p className="about-p">
                Hi! My name's Alex and I love creating things. In college I started out as a music major, until one day I decided to take a course in Java. 
                            Almost instantly I saw my love of creating music turn into a love of creating applications that other people could use. Fast-forward to today, I now specialize in Java full-stack development.
                            I have had the privilege of working with a <a className=""href="https://www.genesis10.com">consultant company</a> and I currently work at a <a className=""href="https://www.valleyqueen.com/">major cheese company</a>.
                </p>
            </div>
        </div>
    )
}

export default About