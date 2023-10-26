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
          
          <p>Last Squad Standing</p>
          <p>by - Robotics Club</p>
          <p>Prize-4000/-</p>
          <p>last date-31/10/23</p>
  

      </div>
      <div className="cod2">
            
          <p>Reloaded Rivalry</p>
          <p>by-Kalakar club</p>
          <p>Prize-4000/-</p>
          <p>last date-03/11/23</p>

      </div>
      <div className="cod2">

          <p>Armory Assault</p>
          <p>by - Zeal society</p>
          <p>Prize-5000/-</p>
          <p>last date-11/11/23</p>

      
      </div>
    
      </div>
    </div>
  );
};

export default Pubg;
