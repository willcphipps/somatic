import React from 'react'

const Links = () => {
    return (
       <div className="main">
            <div className="home">
                <h2 className="sm-heading">
            <a href="#">farm</a>  |  <a href="#">shop</a>  |  <a href="#">hemp</a>
            </h2>
            
            <div className="icons">
                <h1 className="lg-heading">
                    Somatic <span className="text-secondary">Hemp</span>
                </h1>
                <div className="icon-links">
                    <a className="social-link" href="https://twitter.com/willcphipps/">
                        <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                    </a>
                    <a className="social-link" href="https://www.facebook.com/will.phipps.372/">
                        <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                    </a>
                    <a className="social-link" href="https://www.linkedin.com/in/willcphipps/">
                        <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                    </a>
                    <a className="social-link" href="https://github.com/willcphipps/">
                        <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Links
