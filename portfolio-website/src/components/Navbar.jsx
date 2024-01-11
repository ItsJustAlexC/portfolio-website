import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [navbarBackground, setNavbarBackground] = useState('');
    
    let isTransparent = true;

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


    return(
        <nav id='navbar' className={`navbar position-fixed ${navbarBackground}`}>
            <div className="container-fluid">
                <div className="navbar-content d-flex justify-content-between align-items-center">
                    <div className="navbar-title">
                        <p className="navbar-brand text-white my-0 mx-5">ALEX CAMPBELL</p>
                    </div>
                    <div className="navbar-links">
                        <ul className="nav">
                            <li className="nav-item"><a className="nav-link text-white" href='#about'>ABOUT</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href='#experience'>EXPERIENCE</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href='#projects'>PROJECTS</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href='#contact'>CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;