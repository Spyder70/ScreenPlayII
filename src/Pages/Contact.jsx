import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    emailjs.send('service_f4cgizi', 'template_xkxc9nh', userData, 'LdHGIrj4HgKHpxgM7')
      .then((response) => {
        console.log('Email sent successfully:', response.text);
        toast('Email sent successfully. We will contact you soon!');
        setUserData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast('Failed to send email. Please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const [showDropdown, setShowDropdown] = useState(true);

  const handleMenuToggle = () => {
    setShowDropdown(!showDropdown);
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && window.innerHeight >= 1900) {
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div>
       <header className="header">
    <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="Home">
                <img src="img/logo2.png" alt="ScreenPlay" style={{ width: 100, height: 50 }} />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li><a href="Home">Homepage</a></li>
                  <li><a href="Gallery">Gallery</a></li>
                  <li className="active"><a href="Contactus">Contact</a></li>
                  <a href="Search" className="sar"><span className="icon_search" /></a>
                  <a href="Profile"  className="pro"><span className="icon_profile" /></a>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <div className={`menu-button${showDropdown ? ' active' : ''}`} onClick={handleMenuToggle}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><a href="Home">Home</a></li>
                  <li><a href="Gallery">Gallery</a></li>
                  <li><a href="Contactus">Contacts Us</a></li>
                  <li><a href="Search" className="search-switch"><span className="icon_search" /></a></li>
                  <li><a href="Profile"><span className="icon_profile"/></a></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      </header>
      <section className="blog-details spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
            </div>
            <div className="col-lg-12">
            </div>
            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__details__form">
                  <h4>Leave A Commnet</h4>
                  {/* Your existing code */}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={userData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={userData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={userData.message}
                          onChange={handleChange}
                        />
                        <button type="submit" className="site-btn">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="page-up">
          <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up" /></a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__logo">
                <a href="Home"><img src="img/logo2.png" alt style={{ width: 100, height: 50 }} /></a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <ul>
                  <li className="active"><a href="Home">Homepage</a></li>
                  <li><a href="Gallery">Gallery</a></li>
                  <li><a href="Contactus">Contacts</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved |<i className="fa fa-heart" aria-hidden="true" /> by <a href="https://miraic.com/" target="_blank">Miraic Inc</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch"><i className="icon_close" /></div>
          <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact