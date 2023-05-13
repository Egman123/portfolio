import React from 'react';
import './home.css';
import Me from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Eghishe Manukyan</h1>
        <span className="home__education">
          Front-End developer
        </span>
        <div className="home__number">+37477508758</div>
        <div className="home__gmail">manukyaneghishe@gmail.com</div>
        <HeaderSocials />

        {/* <a href="#contact" className='btn'>Hire Me</a> */}

        <ScrollDown />
      </div>

    
    </section>
  )
}

export default Home