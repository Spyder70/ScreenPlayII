import React, { useState, useEffect } from 'react';

const RAS4 = () => {
    const [comments, setComments] = useState([]);
    const [userPhotoBase64, setUserPhoto] = useState(localStorage.getItem('userPhotoBase64') || null);
    const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Your Name');

    useEffect(() => {
        // Load comments from local storage specific to this page
        const storedComments = JSON.parse(localStorage.getItem('commentsRAS4')) || [];
        setComments(storedComments);
    }, []); // This effect runs only once when the component mounts

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        const newComment = {
            author: userName,
            timestamp: new Date().toLocaleString(),
            content: comment,
            photo: userPhotoBase64,
        };
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        event.target.reset();

        // Save comments to local storage specific to this page
        localStorage.setItem('commentsRAS4', JSON.stringify(updatedComments));
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
            {/* Header End */}
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./index.html"><i className="fa fa-home" /> Home</a>
                                <span>Reviews and rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Anime Section Begin */}
            <section className="anime-details spad">
                <div className="container">
                    <div className="anime__details__content">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="anime__details__pic set-bg" data-setbg="img/recent/recent-4.jpg">
                                    <a href="#"><img src="img/recent/recent-4.jpg" alt style={{ width: 1000, height: 440 }} /></a>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="anime__details__text">
                                    <div className="anime__details__title">
                                        <h3>Fate/Zero 2nd Season</h3>
                                        <span>フェイト/ゼロ 2ndシーズン</span>
                                    </div>
                                    <div className="anime__details__rating">

                                    </div>
                                    <p>Fate/Zero 2nd Season is a thrilling and captivating anime series that serves as the second part of the "Fate/Zero" franchise. Set in the same universe as the renowned "Fate/stay night" series, this season continues the intense battle royale known as the Holy Grail War in this merciless competition, seven powerful magicians, known as Masters, summon legendary heroes from history and myths, the Servants, to fight on their behalf. The ultimate prize is the Holy Grail, a mystical artifact with the power to grant any wish. However, only one Master-Servant pair can emerge victorious, leading to brutal confrontations and complex strategies.</p>
                                    <div className="anime__details__widget">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Type:</span> TV Series</li>
                                                    <li><span>Studios:</span> Lerche</li>
                                                    <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                                                    <li><span>Status:</span> Airing</li>
                                                    <li><span>Genre:</span> Action, Adventure, Fantasy, Magic</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Scores:</span> 7.31 / 1,515</li>
                                                    <li><span>Rating:</span> 8.5 / 161 times</li>
                                                    <li><span>Duration:</span> 24 min/ep</li>
                                                    <li><span>Quality:</span> HD</li>
                                                    <li><span>Views:</span> 131,541</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="anime__details__review">
                                <div className="section-title">
                                    <h5>Reviews</h5>
                                </div>

                            </div>
                            <div>
                            {comments.map((comment, index) => (
                                    <div className="anime__review__item" key={index}>
                                        <div className="anime__review__item__pic">
                                            <img src={comment.photo} alt="User Photo" />
                                        </div>
                                        <div className="anime__review__item__text">
                                            <h6>
                                                {comment.author} - <span>{comment.timestamp}</span>
                                            </h6>
                                            <p>{comment.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="anime__details__form">
                                <div className="section-title">
                                    <h5>Your Comment</h5>
                                </div>
                                <form onSubmit={handleFormSubmit}>
                                    <textarea name="comment" placeholder="Your Comment" defaultValue={''} required />
                                    <button type="submit">
                                        <i className="fa fa-location-arrow" /> Post Review
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="anime__details__sidebar">
                                <div className="section-title">
                                    <h5>you might like...</h5>
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
            </section>
            {/* Anime Section End */}
            {/* Footer Section Begin */}
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
                                    <li><a href="Gallary">Gallery</a></li>
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

export default RAS4