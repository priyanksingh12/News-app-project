import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          
          <div className="footer-col">
            <ul>
              <li><h2>NewsToday</h2></li>
              <li><p>123 News Street, New Delhi, India</p></li>
              <li><p>Contact: +91 98765 43210</p></li>
              <div className="socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} />
                </a>
              </div>
            </ul>
          </div>

          
          <div className="footer-col">
            <h3>Hot Topics</h3>
            <ul>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Bolly Buzz</a></li>
              <li><a href="#">World News</a></li>
              <li><a href="#">Olympics</a></li>
            </ul>
          </div>

          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>

        
          <div className="footer-col">
            <h3>Subscribe</h3>
            <p>Enter your Gmail to get updates:</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Your Gmail" />
              <button>Submit</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2025 NewsToday. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
