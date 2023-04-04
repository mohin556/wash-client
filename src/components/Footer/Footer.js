import React from 'react';
import './Footer.css';
import image from '../../image/footer2.PNG';
const Footer = () => {
    return (
        <footer id='footer' className='footer' data-aos='fade up' data-aos-duration='1500' >
             <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-box">
                    <div className="logo">
                          <div className="logo-img"><img src={image} alt="" />   </div>
                          <h2>CarWash</h2>
                     </div>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Officia nemo temporibus rem.</p>
                    </div>
                    <div className="footer-box">
                        <h4 className="footer-title">Company</h4>

                        <ul className="footer-link">
                            <li><a href="#">Our programme</a></li>
                            <li><a href="#"> Our plane </a></li>
                            <li><a href="#"> Become a member </a></li>
                         
                        </ul>


                    </div>
                    <div className="footer-box">
                        <h4 className="footer-title">Quick Links</h4>

                        <ul className="footer-link">
                            <li><a href="#">About us</a></li>
                            <li><a href="#"> Contact us +072345 </a></li>
                            <li><a href="#"> Email: any@gmail.com </a></li>
                         
                        </ul>


                    </div>
                    <div className="footer-box">
                        <h4 className="footer-title">Follow Us</h4>

                        <ul className="footer-links">
                            <li><a href="#">Facebook</a>  <i class="ri-facebook-fill"></i>  </li>
                            <li><a href="#"> twitter </a>  <i class="ri-twitter-fill"></i> </li>
                            <li><a href="#"> instagram </a>  <i class="ri-instagram-fill"></i> </li>
                            <li><a href="#"> whats app </a>  <i class="ri-whatsapp-fill"></i> </li>
                        </ul>


                    </div>
                    

                </div>
             </div>
        </footer>
    );
};

export default Footer;