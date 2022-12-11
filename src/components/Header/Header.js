import React from 'react';
import Logo1 from '../../image/clean.logo.PNG';
import Logo2 from '../../image/Capture.PNG';
import 'remixicon/fonts/remixicon.css';
import './Header.css';
const Header = () => {
      const navs = [
              {
                path: '#',
                display: 'Home'
              },

              {
                path: '#',
                display: 'Schedule'
              },
              {
                path: '#',
                display: 'Classes'
              },
              {
                path: '#',
                display: 'Pricing'
              },


      ]


    return (
        <div className='header'>
            <div className="container">
                 <div className="nav-bar">
                     <div className="logo">
                          <div className="logo-img"><img src={Logo2} alt="" />   </div>
                          <h2>CarWash</h2>
                     </div>

                     <div className="navigation">
                        <ul className='menu'>
                             {
                                navs.map(items =>(
                                  <li className='nav-item'>
                                        <a href={items.path}> {items.display} </a>
                                
                                    </li>
                                )
                                    
                                )
                             }
                        </ul>
                     </div>
                     <div className="nav-right">
                       <button className='register-btn'>Register</button>
                       <span className='mobile-menu' > <i class="ri-menu-line"></i>  </span>
                     </div>


                 </div>





            </div>


        </div>
    );
};

export default Header;