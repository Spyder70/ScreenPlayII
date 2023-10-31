import React from 'react'
import '../Pages/ForgotPassword.css'


const ForgotPassword = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header__logo">
                                <a href="ForgotPassword">
                                    <img src="img/logo2.png" alt="ScreenPlay" style={{ width: 100, height: 50, position: 'absolute', top: 8, left: 3 }} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header__nav">
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="header__right">
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}
            {/* Normal Breadcrumb Begin */}
            <section className="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="normal__breadcrumb__text">
                                <h2>Reset your password ⚙️</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Normal Breadcrumb End */}
            {/* Login Section Begin */}

            <div className="email-form">
                <div className="email-input">
                    <i className="fa fa-envelope"></i>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <button className="send-button">Send</button>
            </div>



            <section className="login spad">

            </section>
            {/* Login Section End */}
            {/* Footer Section Begin */}
            <footer className="footer">
                <div className="page-up">
                    <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up" /></a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer__logo">
                                <a href="./index.html"><img src="img/logo2.png" alt style={{ width: 100, height: 50 }} /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer__nav">
                                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://miraic.com/" target="_blank">Miraic Inc</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                            </div>
                        </div>
                        <div className="col-lg-3">

                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}
            {/* Search model Begin */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch"><i className="icon_close" /></div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* Search model end */}
            {/* Js Plugins */}
        </div>
    )
}

export default ForgotPassword