import React from 'react';
import './Services.css';
const Services = () => {
    return (
        <section>
            <div className="container">
                <div className="service-top">
                    <h2 className="section-title">wash <span className="highlight">Service</span> price</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deserunt. br <br /> Sunt voluptatem doloribus adipisci quaerat?</p>
                </div>

                <div className="service-wrapper">
                    <div className="service-item">
                        <div className="service-card-top">
                            <h2 className="section-title">Regular Member</h2>
                            <h2 className="pricing section-title ">$50 <span>/month</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i></span>  Unlimited access to the service  </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Customer Support </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Personal service </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Standard option </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Standard option </li>
                            </ul>
                            <button className="register-btn">Join Now</button>
                        </div>
                        
                    </div>

                    <div className="service-item service-item-02 ">
                        <div className="service-card-top">
                            <h2 className="section-title">Premium Member</h2>
                            <h2 className="pricing section-title ">$70 <span>/month</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i></span>  Unlimited access to the service  </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Customer Support </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Personal service </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Standard option </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Standard option </li>
                            </ul>
                            <button className="register-btn">Join Now</button>
                        </div>
                        
                    </div>

                    <div className="service-item">
                        <div className="service-card-top">
                            <h2 className="section-title">Standard Member</h2>
                            <h2 className="pricing section-title ">$100 <span>/month</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i></span>  Unlimited access to the service  </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Customer Support </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Personal service </li>
                                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  </span> Standard option </li>
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