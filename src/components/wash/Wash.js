import React from 'react';
import img from '../../image/GYMWOMEN.jpg'
import './Wash.css';
const Wash = () => {
    return (
      <section>
        <div className="container">
            <div className="star-wapper">
                <div className="star-img">
                    <img src={img} alt="" />
                </div>

                <div className="star-content">
                   <h2 className='section-title' >
                    Ready to make <span className="highlight">change</span>?
                   </h2>
                   
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis minus dolorem velit animi cupiditate sint cum sed praesentium debitis saepe. Odit aspernatur perferendis non hic ullam ex consequuntur quasi repudiandae?</p>
                    <buttton className="register-btn">Get Started</buttton> 

                     </div>
            </div>
        </div>
      </section>
    );
};

export default Wash;