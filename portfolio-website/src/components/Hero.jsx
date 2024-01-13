const Hero = () => {
    const viewportHeight = window.innerHeight;

    const handleAnchorClick = (event) => {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href');

        if(targetId) {
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                targetElement.scrollIntoView({behavior : 'smooth'})
            }
        }
    }

    return (
        <div className="hero hero-bg-img container-fluid">
            <div className="hero-content" style={{height: viewportHeight}}>
                <h1 className="hero-h1 fade-down">Hi! I'm Alex</h1>
                <h2 className="hero-h2 fade-up">Full-Stack Developer </h2>
                <span className="hero-span hover">
                    <a href="#about" onClick={handleAnchorClick}>
                        <i className="fa-solid fa-chevron-down hero-arrow"/>
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Hero;