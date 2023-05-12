import React from 'react';
import {AiFillInstagram} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";

export default function Nav() {
  return (
    <div className='header'>
        <img src="img/cassk110.png" alt="" />
        <div className="social">
          <a href="https://www.instagram.com/cask110baku" className="icons"  rel="noreferrer" target="_blank">
          <AiFillInstagram />

          </a>
          <a href="https://www.tiktok.com/@cask110baku" className="icons"  rel="noreferrer" target="_blank">
          <FaTiktok />

          </a>
        </div>
    </div>
  )
}
