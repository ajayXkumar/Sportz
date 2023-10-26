import React from 'react'
import "../styles/pubg.css";
import {Link} from 'react-router-dom'
const Pubg = () => {
  return (
    <div className="back-ground2">
      <div className="blurr2">
        <p></p>
      </div>
      <div className="hero-image2">
        <img src="/main-hero2.png" style={{ height: "700px" }} />
        <img src="/flash.png" className="flash2" style={{ height: "60px" }} />

      </div>

      <div className="main-text2">
        <p style={{fontSize:"50px", fontWeight:"bold"}}>Winner Winner Chicken Dinner</p>
      </div>
      <div className="events2">
           <div className="cod2">
                  
           <Link to="/"> <img src="/card1.jpg" style={{width:"340px",borderRadius:'10px'}}/></Link>

           </div>
           <div className="cod2">
                 
           <Link to="/csgo"> <img src="/card2.jpg" style={{width:"340px",borderRadius:'10px'}}/></Link>

           </div>
           <div className="cod2">
          <Link to="/pubg"> <img src="/card3.jpg" style={{width:"340px",borderRadius:'10px'}}/></Link>
           
           </div>
    
      </div>
    </div>
  );
};

export default Pubg;
