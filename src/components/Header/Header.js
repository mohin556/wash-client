import React,{useEffect, useRef} from 'react';
import Logo1 from '../../image/clean.logo.PNG';
import Logo2 from '../../image/am1).jfif';
import 'remixicon/fonts/remixicon.css';
import './Header.css';
const Header = () => {
      const navs = [
              {
                path: '#home',
                display: 'Home'
              },

              {
                path: '#review',
                display: 'Review'
              },
              {
                path: '#classe',
                display: 'Classes'
              },
              {
                path: '#services',
                display: 'Services'
              },


      ]
      const headerRef = useRef(null);

      const navBar =()=>{
        if(document.body.scrollTop >80 || document.documentElement.scrollTop > 8){
          headerRef.current.classList.add('sticky-header')
      } else {
        headerRef.current.classList.remove('sticky-header')
      }
    }

    useEffect(()=>{
        window.addEventListener("scroll",navBar);
        return ()=> window.removeEventListener("scroll",navBar)
    },[])



    return (
        <div className='header' ref={headerRef}  >
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