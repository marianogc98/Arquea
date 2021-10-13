import React from "react";
import './style.css';
import { animateScroll as scroll } from "react-scroll";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {AiOutlinePhone} from "react-icons/ai";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <section class="footer">
      <div class="social">
        <a href="https://www.instagram.com/_arquea/" target="_blank">
          <FaInstagram/>
        </a>
        <a href="https://www.youtube.com/watch?v=Nxwtyk4-DcQ" target="_blank">
          <FaYoutube/>
        </a>
      </div>

      <ul class="list">
        <li>
          <a ><FiMail/> Arqueareciclaje@gmail.com</a>
        </li>
        <li>
          <a ><AiOutlinePhone/> 351759-8433</a>
        </li>
      </ul>
      <p class="copyright"><a id="nectium" href="https://www.nectium.com.ar" target="_blank">Nectium</a> @ 2021</p>
    </section>
  );
};
export default Footer;
