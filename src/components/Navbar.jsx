import { useEffect, useState } from "react";

const Navbar = () => {
    const [navbarBackground, setNavbarBackground] = useState('');
    let isTransparent = true;
    //sets the background color of the navbar based on the scroll position
    useEffect(() => {
        const handleScroll = () => {

            const show = window.scrollY > 50;
            

            if (show && isTransparent) {
                setNavbarBackground('black');
                isTransparent = false;

            } else if (!show && !isTransparent){
                setNavbarBackground('transparent');
                isTransparent = true;
            }
        };

        document.addEventListener('scroll', handleScroll);

    }, []);

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
    }
    
    return(
        <nav id='navbar' className={`navbar container-fluid position-fixed ${navbarBackground}`}>
            <div className="navbar-content d-flex justify-content-between align-items-center">
                <div className="navbar-title">
                    <p className="navbar-brand text-white my-0 mx-5">MY PORTFOLIO</p>
                </div>
                <div className="navbar-links">
                    <ul className="nav">
                        <li className={`nav-item`}><a className="nav-link text-white" href='#about' onClick={handleAnchorClick}>ABOUT</a></li>
                        <li className={`nav-item`}><a className="nav-link text-white" href='#experience' onClick={handleAnchorClick}>EXPERIENCE</a></li>
                        <li className={`nav-item`}><a className="nav-link text-white" href='#resume' onClick={handleAnchorClick}>RESUME</a></li>
                        <li className={`nav-item`}><a className="nav-link text-white" href='#projects' onClick={handleAnchorClick}>PROJECTS</a></li>
                        <li className={`nav-item`}><a className="nav-link text-white" href='#contact' onClick={handleAnchorClick}>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;