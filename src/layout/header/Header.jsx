import React, { useState } from 'react'
import '../../style/header.css'
import site_logo from'../../assets/logo/sitr.svg'
import header_img from'../../assets/img/header.jpg'
import header_imae from '../../assets/logo/developer.svg'

function Header() {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  
  return (
    <div id='Header' className='header'>
      <div className='container header-container'>
     
        <div className={color ? 'header-top header-top-bg' : 'header-top'} >
            <div className="header-logo"><img src={site_logo} alt="img" /></div>
            <div className="header-nav">
                <a href="#Header">Home</a>
                <a href="#About">About</a>
                <a href="#Websites">Websites</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
        <div className="header-bottom">
            <div className="header-writing">
              <div className="header-title">Hi,i'm Alibek</div>
              <div className="header-subtitle">Nice to meet you
              </div>
            </div>
              <img className="header-bottom-image" src={header_imae} alt="img" />
        </div>
        <div className="header-image"><img src={header_img} alt="header img black white" /></div>
      </div>
    </div>
  )
}

export default Header

