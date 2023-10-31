import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  
  const handleLogin = async (e) => {


  };

  return (
  <div>
   <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="header__logo">
            <a href="Login">
              <img src="img/logo2.png" alt="ScreenPlay" style={{width: 100, height: 50, position: 'absolute', top: 8, left: 3}} />
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
  <img
  src="img/loginbg.jpg"
  alt=""
  style={{
    width: '1800px', // Adjust the width as needed
    height: '305px', // Adjust the height as needed
    position: 'fixed',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}
/>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="normal__breadcrumb__text">
            <h2 style={{ color: '#FFFFFF' }}>ScreenPlay</h2>
            <p style={{ color: '#FFFFFF' }}>Welcome to the official ScreenPlay.</p>
            <br></br>
            <div className="login__register">
            <a href="Profile" className="primary-btn">Let's Go</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Normal Breadcrumb End */}
  {/* Login Section Begin */}
  <section className="login spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div>
         
            <form onSubmit={(e) => {
                  e.preventDefault(); // Prevent the default form submission
                  
                }}>
              <div className="input__item">
              
               
              </div>
              <div className="input__item">
             
              
              </div>
             
            </form>
        
          </div>
        </div>
       
      </div>
    </div>
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
            <a href="./index.html"><img src="img/logo2.png" alt style={{width: 100, height: 50}} /></a>
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

export default Login