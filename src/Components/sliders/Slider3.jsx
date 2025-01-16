import React from 'react'
import './Slider.css'
import desktopImage from '../../assets/ai_desktop.webp'
const Slider3 = () => {
  return (
    <div className='slide-3 slide'>
        <div className="slide-3-content">
            <div className="slide-title">
            Optimised for your device
            </div>
            <div className="slide-text">
            Chrome is built to work with your device across platforms. That means a smooth experience on whatever you’re working with.
            </div>
        </div>
        <img className='slide-3-image' src={desktopImage} alt="" />
      
    </div>
  )
}

export default Slider3