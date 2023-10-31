import React from 'react'

import Home from './Pages/Home';
import Gallary from './Pages/Gallary';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'

import A1 from './AnimeDetails/A1';
import A2 from './AnimeDetails/A2';
import A3 from './AnimeDetails/A3';
import A4 from './AnimeDetails/A4';
import A5 from './AnimeDetails/A5';
import A6 from './AnimeDetails/A6';

import PSA1 from './AnimeDetails/PSA1';
import PSA2 from './AnimeDetails/PSA2';
import PSA3 from './AnimeDetails/PSA3';
import PSA4 from './AnimeDetails/PSA4';
import PSA5 from './AnimeDetails/PSA5';
import PSA6 from './AnimeDetails/PSA6';

import RAS1 from './AnimeDetails/RAS1';
import RAS2 from './AnimeDetails/RAS2';
import RAS3 from './AnimeDetails/RAS3';
import RAS5 from './AnimeDetails/RAS5';
import RAS6 from './AnimeDetails/RAS6';
import RAS4 from './AnimeDetails/RAS4';
import Search from './AnimeDetails/Search';
import Profile from './AnimeDetails/Profile';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './Pages/ForgotPassword';
import Profileinfo from './AnimeDetails/Profileinfo';


const App = () => {

  
 
  return (
    <div>
      <Main>
        <Routes>
          <Route exact path='Home' element={<Home />} />
          <Route exact path='Gallery' element={<Gallary />} />
          <Route exact path='Contactus' element={<Contact />} />
          <Route exact path='/' element={<Login />} />
       
          
          <Route exact path='Boruto' element={<A1 />} />
          <Route exact path='Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien' element={<A2 />} />
          <Route exact path='Shingeki no Kyojin Season 3 Part 2' element={<A3 />} />
          <Route exact path='Fullmetal Alchemist: Brotherhood' element={<A4 />} />
          <Route exact path='Shiratorizawa Gakuen Koukou' element={<A5 />} />
          <Route exact path='Code Geass: Hangyaku no Lelouch R2' element={<A6 />} />
        
          <Route exact path='Sen to Chihiro no Kamikakushi' element={<PSA1 />} />
          <Route exact path='Kizumonogatari III: Reiket su-hen' element={<PSA2 />} />
          <Route exact path='Shirogane Tamashii hen Kouhan sen' element={<PSA3 />} />
          <Route exact path='Rurouni Kenshin: Meiji Kenkaku Romantan' element={<PSA4 />} />
          <Route exact path='Mushishi Zoku Shou 2nd Season' element={<PSA5 />} />
          <Route exact path='Monogatari Series: Second Season' element={<PSA6 />} />

          
          <Route exact path='Great Teacher Onizuka' element={<RAS1 />} />
          <Route exact path='Fate stay night Movie: Heavens Feel II Lost' element={<RAS2 />} />
          <Route exact path='Mushishi Zoku Shou: Suzu no Shizuku' element={<RAS3 />} />
          <Route exact path='Fate Zero 2nd Season' element={<RAS4 />} />
          <Route exact path='Kizumonogatari II: Nekket su-hen' element={<RAS5 />} />
          <Route exact path='The Seven Deadly Sins:Wrath of the Gods' element={<RAS6 />} />
          
          <Route exact path='Search' element={<Search />} />
          <Route exact path='Profile' element={<Profile />} />
          <Route exact path='ForgotPassword' element={<ForgotPassword />} />
          <Route exact path='Profileinfo' element={<Profileinfo />} />
          
        </Routes>
      </Main>
      <ToastContainer />
     
    </div>
  )
}

export default App