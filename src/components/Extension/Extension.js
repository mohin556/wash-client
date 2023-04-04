import React from 'react';
import './Extension.css';

import ex1 from '../../image/carEx1.jpg';
import ex2 from '../../image/caeEx3.png';
import ex3 from '../../image/carex2.PNG';
const Extension = () => {
    return (
      <section>
        <div className="container extension-container ">
            <div className="extension-top">
               <h2 className='section-title' > Benefits of <span className='highlight' > Washing </span> </h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Assumenda porro nihil recusandae suscipit, minus unde!</p>
            </div>


            <div className="extension-wrapper">
                <div className="extension-item">
                     <span className="extension-icon">
                        <img src={ex3} alt="" />
                     </span>

                     <div className="extension-content">
                        <h4>Healthy wash</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, reiciendis.</p>
                     </div>
                </div>

                <div className="extension-item">
                     <span className="extension-icon">
                        <img src={ex1} alt="" />
                     </span>

                     <div className="extension-content">
                        <h4>Healthy wash</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, reiciendis.</p>
                     </div>
                </div>

                <div className="extension-item">
                     <span className="extension-icon">
                        <img src={ex2} alt="" />
                     </span>

                     <div className="extension-content">
                        <h4>Healthy wash</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, reiciendis.</p>
                     </div>
                </div>
            </div>
        </div>
      </section>
    );
};

export default Extension;