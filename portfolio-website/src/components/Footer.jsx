const Footer = () => {
    return (
        <div className="footer container-fluid">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://github.com/ItsJustAlexC" className="git-logo fa-brands fa-github"></a>
                    <a href="https://www.linkedin.com/in/alexcampbelldev/" className="linkedin-logo fa-brands fa-linkedin-in"></a>
                </div>
                <p>&copy;{new Date().getFullYear()} | Alex Campbell</p>
            </div>
        </div>
    )
}

export default Footer;