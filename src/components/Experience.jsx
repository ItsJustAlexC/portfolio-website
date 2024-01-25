const Experience = () => {
    const viewportHeight = window.innerHeight;
    
    return (
        <div id="experience" className="experience">
            <div className="experience-content container-fluid" style={{height: viewportHeight}}>
                <h1 className="experience-h1">Experience</h1>
                <p className="experience-p">I've been a software developer for 5 years now, with 3 years of professional experience.</p>
            </div>
        </div>
    )
}

export default Experience;