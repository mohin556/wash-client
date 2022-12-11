import React from 'react';
import image1 from '../../image/car.PNG'
import car from '../../image/clean.logo.PNG';
import './Heading.css';
const Heading = () => {
    return (
       <section>
          <div className="container">
            <div className="hero-wrapper">
               <div className="hero-content">
                  <h2 className='section-title'>Exercise is the key to a  <span className="highlight">Healthy</span> Lifestyle</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum iure suscipit, dicta quos sit officia fugit deserunt incidunt.</p>
              
                  <div className="hero-btns">
                     <button className='register-btn' >Get Started</button>
                      <button className='watch-btn' >
                        <span> <i class="ri-play-fill"> Watch Video </i> </span>
                        </button>
                   </div>
               </div>

              <div className="hero-img">
                  <div className="hero-img-wraper">

                     <div className="box-01">
                        <div className="box-02">
                            <div className="box-03">
                                <div className="box-img">
                                   <img src={image1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heart-rate">
                         <h5>Heart rate</h5>
                         <span>
                         <i class="ri-heart-pulse-fill"></i>
                         </span>
                         <h6>2576 BPM</h6>
                    </div>

                    <div className="gym-location">
                        <span> <i class="ri-map-pin-fill"></i> </span>
                        <h5>Find a gym <br /> Loaction near?</h5>
                    </div>

                    <div className="car-icon">
                        <img src={car} alt="" />
                    </div>

                 </div>

              </div>


            </div>
          </div>





       </section>
    );
};

export default Heading;