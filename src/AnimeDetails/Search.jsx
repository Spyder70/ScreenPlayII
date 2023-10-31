import React, { useState, useEffect } from 'react';
import '../Menu.css'

const Search = () => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      const searchQuery = encodeURIComponent(searchText);
      const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
      window.location.href = googleSearchUrl;
    };
  
    const handleInputChange = (event) => {
      setSearchText(event.target.value);
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
      <div className="page-container" style={{ marginTop: '-130px' }}>
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  </div>
  </div>
  )
}

export default Search