import React from "react";
import "./footer.css";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li>
          <a href="#" />
          Home
        </li>
        <li>
          <a href="#about" />
          About
        </li>
        <li>
          <a href="#experience" />
          Experience
        </li>
        <li>
          <a href="#contact" />
          About
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://whatsapp.com">
          <RiWhatsappFill />
        </a>
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
