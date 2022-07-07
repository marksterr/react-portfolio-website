import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

// component for portfolio header page
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mark Dawes</h1>
        <h5 className="text-light">Aspiring Fullstack Developer</h5>
        {/* call to action component for cv download and contact */}
        <CTA />

        {/* personal picture */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header