import React from 'react'
import Github from '../images/github.svg';
import Linkedin from '../images/linkedin.svg';
import Facebook from '../images/facebook.svg';

function Footer() {
  return (
    <footer className='d-flex justify-content-evenly'>
    <a href='https://github.com/deand925'><img src={Github}></img></a>
    <a href='https://www.linkedin.com/in/dean-dunivan-616b2042/'><img src={Linkedin}></img></a>
    <a href='https://www.facebook.com/dean.dunivan.5'><img src={Facebook}></img></a>
</footer>
  )
}

export default Footer