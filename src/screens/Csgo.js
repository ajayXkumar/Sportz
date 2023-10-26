import React from 'react'
import "../styles/csgo.css";
import {Link} from 'react-router-dom'
const Csgo = () => {
  return (
    <div className="back-ground2">
      <div className="blurr3">
        <p></p>
      </div>
      <div className="hero-image3">
        <img src="/main-hero3.png" style={{ height: "700px" }} />
        <img src="/flash.png" className="flash3" style={{ height: "60px" }} />

      </div>

      <div className="main-text3">
        <p style={{fontSize:"50px", fontWeight:"bold"}}>Round Start </p>
        <p  style={{fontSize:"19px"}}>
        Let's move out!
        </p>
      </div>
      <div className="events3">
           <div className="cod3">
                  
           <Link to="/"> <img src="/card1.jpg" style={{width:"340px",borderRadius:'10px'}}/></Link>

           </div>
           <div className="cod3">
                 
           <Link to="/csgo"> <img src="/card2.jpg" style={{width:"340px",borderRadius:'10px'}}/></Link>

           </div>
           <div className="cod3">
          <Link to="/pubg"> <img src="/card3.jpg" style={{width:"340px",borderRadius:'10px'}}/></Link>
           
           </div>
    
      </div>
    </div>
    
  );
};

export default Csgo;
