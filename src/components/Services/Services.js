import React from 'react';
import './Services.css';
const Services = () => {
    return (
        <section id='price' >
            <div className="container">
                <div className="service-top">
                    <h2 className="section-title">wash <span className="highlight">Service</span> packages</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deserunt. br <br /> Sunt voluptatem doloribus adipisci quaerat?</p>
                </div>

                <div className="service-wrapper">
                    <div className="service-item" data-aos='fade up' data-aos-duration='1500' >
                        <div className="service-card-top">
                            <h2 className="section-title">Express Washing</h2>
                            <h2 className="pricing section-title ">$25 <span>/hour</span> </h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i></span> Exterior washing  </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Vaccum cleaning </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Interir wet cleaning </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span>Window wiping </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Standard option </li>
                            </ul>
                            <button className="register-btn">Join Now</button>
                        </div>
                        
                    </div>

                    <div className="service-item service-item-02  " data-aos='fade up' data-aos-duration='1500' >
                        <div className="service-card-top">
                            <h2 className="section-title">Premium Service</h2>
                            <h2 className="pricing section-title ">$70 <span>/hour</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                            <li><span> <i class="ri-checkbox-blank-circle-fill"></i></span> Exterior washing  </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Vaccum cleaning </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Interir wet cleaning </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span>Window wiping </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Standard option </li>
                            </ul>
                            <button className="register-btn">Join Now</button>
                        </div>
                        
                    </div>

                    <div className="service-item" data-aos='fade up' data-aos-duration='1500'  >
                        <div className="service-card-top">
                            <h2 className="section-title">Standard Member</h2>
                            <h2 className="pricing section-title ">$100 <span>/hour</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                            <li><span> <i class="ri-checkbox-blank-circle-fill"></i></span> Exterior washing  </li>
                            <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Vaccum cleaning </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Interir wet cleaning </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span>Window wiping </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Standard option </li>
                            </ul>
                            <button className="register-btn">Join Now</button>
                        </div>
                        
                    </div>




                </div>
            </div>
        </section>
    );
};

export default Services;