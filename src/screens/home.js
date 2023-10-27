import React from "react";
import "../styles/home.css";
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="back-ground">
      <div className="blurr">
        <p></p>
      </div>
      <div className="hero-image">
        <img src="/main-hero.png" style={{ height: "700px" }} />
        <img src="/flash.png" className="flash" style={{ height: "60px" }} />

      </div>

      <div className="main-text">
        <p style={{fontSize:"50px", fontWeight:"bold",lineHeight:"3rem"}}>Unlease The Beast</p>
        <p  style={{fontSize:"19px"}}>
          Elevate your gaming experience. Find and host esports events with
          ease. Your one-stop platform for esports excitement.
        </p>
      </div>
      <div className="events" >
           <div className="cod"> 
           <Link to="/"> <img src="/card1.jpg" style={{width:"340px",borderRadius:'10px'}}/></Link>

           </div>
           <div className="cod">
                 
           <Link to="/csgo"> <img src="/card2.jpg" style={{width:"340px",borderRadius:'10px'}}/></Link>

           </div>
           <div className="cod">
          <Link to="/pubg"> <img src="/card3.jpg" style={{width:"340px",borderRadius:'10px'}}/></Link>
           
           </div>
      </div>
    </div>
  );
};

export default Home;
