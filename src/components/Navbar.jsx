import { useEffect, useState } from "react";

const Navbar = () => {
    const [navbarBackground, setNavbarBackground] = useState('');
    const [isTransparent, setIsTransparent] = useState(true);
    const [navbarOpen, setNavbarOpen] = useState(false);

    //sets the background color of the navbar based on the scroll position
    useEffect(() => {
        const handleScroll = () => {

            const show = window.scrollY > 50;
            
            if (show && isTransparent) {
                setNavbarBackground('black');
                setIsTransparent(false);

            } else if (!show && !isTransparent){
                setNavbarBackground('transparent');
                setIsTransparent(true);
            }
        };
        
        document.addEventListener('scroll', handleScroll);
        
        return () => document.removeEventListener('scroll', handleScroll);

    }, [isTransparent]);

    //prevents the anchor link from adding a reference to the URL when clicked
    const handleAnchorClick = (event) => {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href');

        if(targetId) {
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                targetElement.scrollIntoView({behavior : 'smooth'})
            }
        }
        if(navbarOpen) {
            document.querySelector('.navbar-toggler').click();
        }
    }

    const handleMenuClick = () => {
        setNavbarOpen(!navbarOpen);
    }
    
    return(
        <nav id='navbar' className={`navbar navbar-expand-md position-fixed ${navbarBackground}`}>
            <div className="navbar-content d-flex justify-content-between align-items-center container-fluid">
                <div className="navbar-title navbar-brand">
                    <p className="text-white my-0 mx-3">MY PORTFOLIO</p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenuClick}>
                    <span className="fa-solid fa-bars text-light fs-2 my-3"></span>
                </button>
                <div id="navbarSupportedContent" className={`navbar-links collapse navbar-collapse justify-content-end`}>
                    <ul className="navbar-nav text-end">
                        <li className="nav-item"><a className="nav-link text-white" href='#about' onClick={handleAnchorClick}>ABOUT</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href='#experience' onClick={handleAnchorClick}>EXPERIENCE</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href='#resume' onClick={handleAnchorClick}>RESUME</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href='#projects' onClick={handleAnchorClick}>PROJECTS</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href='#contact' onClick={handleAnchorClick}>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;