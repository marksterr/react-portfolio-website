import React from 'react'
import CV from '../../assets/cv.pdf'

// call to action component
const CTA = () => {
  return (
    <div className='cta'>
      {/* buttons for cv download and contact */}
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA