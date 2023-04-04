import React from 'react';
import './Modern.css';
import wash from '../../image/washinggg.PNG'
const Modern = () => {
    return (
     <section>
        <div className="container">
            <div className="modern">
                <div className="modern-left">
                 
                   <h1>Professional washing <br /> and cleaning your car</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet  excepturi enim quam perferendis libero perspiciatis minima.</p>
                 <br />
                 <h3>Call for book : +8804526 </h3>
                 <br />
                 <button className="register-btn">Read More</button>
                 
                    </div>
                <div className="modern-right">
                <img src={wash} alt="" />
                </div>
            </div>
        </div>
     </section>
    );
};

export default Modern;