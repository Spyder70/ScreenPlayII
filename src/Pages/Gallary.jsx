import React, { useState, useEffect } from 'react';

const Gallary = () => {
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
                  <li className="active"><a href="Gallery">Gallery</a></li>
                  <li><a href="Contactus">Contact</a></li>
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
      <section className="normal-breadcrumb set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="normal__breadcrumb__text">
                <br></br>
                <br></br>
                <br></br>
                <h2>Our Gallary</h2>
                <p>Welcome to our ScreenPlay&nbsp;Gallary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog__item set-bg" data-setbg="img/blog/blog-1.jpg">
                    <a href="#"><img src="img/blog/blog-1.jpg" alt style={{ width: 700, height: 595 }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Yuri Kuma Arashi Viverra Tortor Pharetra</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item small__item set-bg" data-setbg="img/blog/blog-4.jpg">
                    <br></br>

                    <a href="#"><img src="img/blog/blog-4.jpg" alt style={{ width: '100%', height: 260, maxWidth: '500px', }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Bok no Hero Academia Season 4 – 18</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item small__item set-bg" data-setbg="img/blog/blog-5.jpg">
                    <br></br>
                    <a href="#"><img src="img/blog/blog-5.jpg" alt style={{ width: '100%', height: 260, maxWidth: '500px', top: 5 }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Fate/Stay Night: Untimated Blade World</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog__item set-bg" data-setbg="img/blog/blog-7.jpg">
                    <a href="#"><img src="img/blog/blog-7.jpg" alt style={{ width: 700, height: 570 }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Housekishou Richard shi no Nazo Kantei Season 08 - 20</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item small__item set-bg" data-setbg="img/blog/blog-10.jpg">
                    <a href="#"><img src="img/blog/blog-10.jpg" alt style={{ width: '100%', height: 280, maxWidth: '500px', }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Fate/Stay Night: Untimated Blade World</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item small__item set-bg" data-setbg="img/blog/blog-11.jpg">
                    <a href="#"><img src="img/blog/blog-11.jpg" alt style={{ width: '100%', height: 280, maxWidth: '500px', }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Building a Better LiA Drilling Down</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item small__item set-bg" data-setbg="img/blog/blog-2.jpg">
                    <a href="#"><img src="img/blog/blog-2.jpg" alt style={{ width: '100%', height: 280, maxWidth: '500px', }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Fate/Stay Night: Untimated Blade World</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item small__item set-bg" data-setbg="img/blog/blog-3.jpg">
                    <a href="#"><img src="img/blog/blog-3.jpg" alt style={{ width: '100%', height: 280, maxWidth: '500px', }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Building a Better LiA Drilling Down</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog__item set-bg" data-setbg="img/blog/blog-6.jpg">
                    <a href="#"><img src="img/blog/blog-6.jpg" alt style={{ width: 700, height: 600 }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Yuri Kuma Arashi Viverra Tortor Pharetra</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item small__item set-bg" data-setbg="img/blog/blog-8.jpg">
                    <br></br>
                    <a href="#"><img src="img/blog/blog-8.jpg" alt style={{ width: '100%', height: 280, maxWidth: '500px', }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Bok no Hero Academia Season 4 – 18</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item small__item set-bg" data-setbg="img/blog/blog-9.jpg">
                    <br></br>
                    <a href="#"><img src="img/blog/blog-9.jpg" alt style={{ width: '100%', height: 280, maxWidth: '500px', }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Fate/Stay Night: Untimated Blade World</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog__item set-bg" data-setbg="img/blog/blog-12.jpg">
                    <br></br>
                    <a href="#"><img src="img/blog/blog-12.jpg" alt style={{ width: 700, height: 600 }} /></a>
                    <div className="blog__item__text">
                      <p><span className="icon_calendar" /> 01 March 2020</p>
                      <h4><a href="#">Yuri Kuma Arashi Viverra Tortor Pharetra</a></h4>
                    </div>
                  </div>
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
                <a href="Hme"><img src="img/logo2.png" alt style={{ width: 100, height: 50 }} /></a>
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

export default Gallary