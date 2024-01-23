const Experience = () => {
    const viewportHeight = window.innerHeight;
    
    return (
        <div id="experience" className="experience container-fluid">
            <div className="experience-content" style={{height: viewportHeight}}>
                <h1 className="experience-h1">Experience</h1>
                <p className="experience-p">I've been a software developer for 5 years now, with 3 years of professional experience.</p>
            </div>
        </div>
    )
}

export default Experience;