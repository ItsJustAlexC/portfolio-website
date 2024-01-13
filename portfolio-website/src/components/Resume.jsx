const Resume = () => {
    const viewportHeight = window.innerHeight * .50;
    
    return (
        <div id="resume" className="resume container-fluid resume-bg-img">
            <div className="resume-content" style={{height: viewportHeight}}>
                <h1 className="resume-h1 text-white">Check out my Resume!</h1>
                <a className="resume-anchor text-decoration-none text-white">Grab a copy</a>
            </div>
        </div>
    )
}

export default Resume;