const Contact = () => {
    const viewportHeight = window.innerHeight * .75;
    return (
        <div id="contact" className="contact container-fluid">
            <div className="contact-content" style={{height: viewportHeight}}>
                <i className="contact-img fa-regular fa-paper-plane "></i>
                <h1 className="contact-h1">Get in touch!</h1>
                <p>I am currently not looking for new opportunities. But you may still email me just to say hi! :)</p>
                <a className="contact-anchor text-decoration-none text-black" href="mailto:alexcampbell1124@gmail.com">Email Me</a>
            </div>
        </div>
    )
}

export default Contact