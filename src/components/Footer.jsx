const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-content container-fluid">
                <div className="footer-links">
                    <a href="https://github.com/ItsJustAlexC" className="git-logo fa-brands fa-github"> </a>
                    <a href="https://www.linkedin.com/in/alexcampbelldev/" className="linkedin-logo fa-brands fa-linkedin-in"> </a>
                </div>
                <p>{currentYear} | Alex Campbell</p>
            </div>
        </div>
    )
}

export default Footer;