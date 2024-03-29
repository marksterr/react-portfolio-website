import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

// component for social media links
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* react icons used */}
      {/* <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a> */}
      <a href="https://github.com/marksterr" target="_blank"><FaGithub/></a>
      {/* <a href="https://dribbble.com" target="_blank"><FiDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials