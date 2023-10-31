import React, { useState, useEffect } from 'react';
import '../Menu.css'
import Search from '../AnimeDetails/Search'



const Home = () => {
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
                  <li className="active"><a href="Home">Homepage</a></li>
                  <li><a href="Gallery">Gallery</a></li>
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
      <section className="hero">
        <div className="container">
          <img src='img/hero/hero-2.jpg' alt style={{ width: 1500, height: 500 }} />
        </div>
      </section>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="trending__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Trending Now</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">

                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/trending/trend-1.jpg">
                        <a href='Boruto'><img src="img/trending/trend-1.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Boruto">Boruto: Naruto next generations</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/trending/trend-2.jpg">
                        <a href="Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien"><img src="img/trending/trend-2.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien">Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/trending/trend-3.jpg">
                        <a href="Shingeki no Kyojin Season 3 Part 2"><img src="img/trending/trend-3.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Shingeki no Kyojin Season 3 Part 2">Shingeki no Kyojin Season 3 Part 2</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/trending/trend-4.jpg">
                        <a href="Fullmetal Alchemist: Brotherhood"><img src="img/trending/trend-4.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Fullmetal Alchemist: Brotherhood">Fullmetal Alchemist: Brotherhood</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/trending/trend-5.jpg">
                        <a href="Shiratorizawa Gakuen Koukou"><img src="img/trending/trend-5.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Shiratorizawa Gakuen Koukou">Shiratorizawa Gakuen Koukou</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/trending/trend-6.jpg">
                        <a href="Code Geass: Hangyaku no Lelouch R2"><img src="img/trending/trend-6.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Code Geass: Hangyaku no Lelouch R2">Code Geass: Hangyaku no Lelouch R2</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popular__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Popular Shows</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/popular/popular-1.jpg">
                        <a href="Sen to Chihiro no Kamikakushi"><img src="img/popular/popular-1.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Sen to Chihiro no Kamikakushi">Sen to Chihiro no Kamikakushi</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/popular/popular-2.jpg">
                        <a href="Kizumonogatari III: Reiket su-hen"><img src="img/popular/popular-2.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Kizumonogatari III: Reiket su-hen">Kizumonogatari III: Reiket su-hen</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/popular/popular-3.jpg">
                        <a href="Shirogane Tamashii hen Kouhan sen"><img src="img/popular/popular-3.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Shirogane Tamashii hen Kouhan sen">Shirogane Tamashii hen Kouhan sen</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/popular/popular-4.jpg">
                        <a href="Rurouni Kenshin: Meiji Kenkaku Romantan"><img src="img/popular/popular-4.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Rurouni Kenshin: Meiji Kenkaku Romantan">Rurouni Kenshin: Meiji Kenkaku Romantan</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/popular/popular-5.jpg">
                        <a href="Mushishi Zoku Shou 2nd Season"><img src="img/popular/popular-5.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Mushishi Zoku Shou 2nd Season">Mushishi Zoku Shou 2nd Season</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/popular/popular-6.jpg">
                        <a href="Monogatari Series: Second Season"><img src="img/popular/popular-6.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Monogatari Series: Second Season">Mushishi Zoku Shou Second Season</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Recently Added Shows</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="btn__all">
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/recent/recent-1.jpg">
                        <a href="Great Teacher Onizuka"><img src="img/recent/recent-1.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Great Teacher Onizuka">Great Teacher Onizuka</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/recent/recent-2.jpg">
                        <a href="Fate stay night Movie: Heavens Feel II Lost"><img src="img/recent/recent-2.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Fate stay night Movie: Heavens Feel II Lost">Fate/stay night Movie: Heaven's Feel - II. Lost</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/recent/recent-3.jpg">
                        <a href="Mushishi Zoku Shou: Suzu no Shizuku"><img src="img/recent/recent-3.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Mushishi Zoku Shou: Suzu no Shizuku">Mushishi Zoku Shou: Suzu no Shizuku</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/recent/recent-4.jpg">
                        <a href="Fate Zero 2nd Season"><img src="img/recent/recent-4.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Fate Zero 2nd Season">Fate/Zero 2nd Season</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/recent/recent-5.jpg">
                        <a href="Kizumonogatari II: Nekket su-hen"><img src="img/recent/recent-5.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="Kizumonogatari II: Nekket su-hen">Kizumonogatari II: Nekket su-hen</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="img/recent/recent-6.jpg">
                        <a href="The Seven Deadly Sins:Wrath of the Gods"><img src="img/recent/recent-6.jpg" alt style={{ width: 500, height: 300 }} /></a>
                      </div>
                      <div className="product__item__text">
                        <h5><a href="The Seven Deadly Sins:Wrath of the Gods">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="product__sidebar">
                <div className="product__sidebar__view">
                  <div className="section-title">
                    <h5>Top Views</h5>
                  </div>
                  <ul className="filter__controls">
                    <li className="active" data-filter="*">Day</li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                    <li data-filter=".years">Years</li>
                  </ul>
                  <div className="filter__gallery">
                    <div className="product__sidebar__view__item set-bg mix day years" data-setbg="img/sidebar/tv-1.jpg">
                      <a href="Boruto"><img src="img/sidebar/tv-1.jpg" alt style={{ width: '100%', height: 'auto', maxWidth: '500px', }} /></a>
                      <h5><a href="Boruto">Boruto: Naruto next generations</a></h5>
                    </div>
                    <div className="product__sidebar__view__item set-bg mix month week" data-setbg="img/sidebar/tv-2.jpg">
                      <a href="Shingeki no Kyojin Season 3 Part 2"><img src="img/sidebar/tv-2.jpg" alt style={{ width: '100%', height: 'auto', maxWidth: '500px', }} /></a>
                      <h5><a href="Shingeki no Kyojin Season 3 Part 2">Shingeki no Kyojin Season 3 Part 2</a></h5>
                    </div>
                    <div className="product__sidebar__view__item set-bg mix week years" data-setbg="img/sidebar/tv-3.jpg">
                      <a href="Code Geass: Hangyaku no Lelouch R2"><img src="img/sidebar/tv-3.jpg" alt style={{ width: '100%', height: 'auto', maxWidth: '500px', }} /></a>
                      <h5><a href="Code Geass: Hangyaku no Lelouch R2">Code Geass: Hangyaku no Lelouch R2</a></h5>
                    </div>
                    <div className="product__sidebar__view__item set-bg mix years month" data-setbg="img/sidebar/tv-4.jpg">
                      <a href="Kizumonogatari III: Reiket su-hen"><img src="img/sidebar/tv-4.jpg" alt style={{ width: '100%', height: 'auto', maxWidth: '500px', }} /></a>
                      <h5><a href="Kizumonogatari III: Reiket su-hen">Kizumonogatari III: Reiket su-hen</a></h5>
                    </div>
                    <div className="product__sidebar__view__item set-bg mix day" data-setbg="img/sidebar/tv-5.jpg">
                      <a href="Shirogane Tamashii hen Kouhan sen"><img src="img/sidebar/tv-5.jpg" alt style={{ width: '100%', height: 'auto', maxWidth: '500px', }} /></a>
                      <h5><a href="Shirogane Tamashii hen Kouhan sen">Shirogane Tamashii hen Kouhan sen</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>
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
                  <li><a href="Contactus">Contacts Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://miraic.com/" target="_blank">Miraic Inc</a>
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

export default Home