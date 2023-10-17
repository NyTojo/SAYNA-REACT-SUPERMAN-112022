import React from 'react';
import '../styles/footer.css';
import logo0 from '../assets/logos/icon_WB.png';
import logo1 from '../assets/logos/logo_1.png';
import logo2 from '../assets/logos/logo_2.png';
import logo3 from '../assets/logos/logo_3.png';
import logo4 from '../assets/logos/logo_4.1.png';
import logo5 from '../assets/logos/logo_5.png';
import logo6 from '../assets/logos/logo_6.png';


function Footer() {
  return (
    <footer className="mt-5 py-5">
      <div className="container text-center">
       
        <div className="text-footer">
          <img src={logo0} alt="" />
          <span className="textfooter">Ce projet respecte l’univers cinématographique des films Superman</span>
        </div>
        <div className="social-footer mt-3">
          <a href="#" className="social-item hoveryellow">
            <img width="4%" src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img width="4%" src={logo3} alt="" />
          </a>
          <a href="#" className="social-item">
            <img className="hoveryellow" src={logo4} alt="" />
          </a>
          <a href="#" className="social-item">
            <img className="hoveryellow" src={logo5} alt="" />
          </a>
          <a href="#" className="social-item">
            <img className="hoveryellow" src={logo6} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
