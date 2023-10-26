import React from 'react'
import "../styles/csgo.css";
import {Link} from 'react-router-dom'
const Csgo = () => {
  return (
    <div className='mm'>
      <div className="blurr3">
        <p></p>
      </div>
      <div className="hero-images">
        <img src="/main-hero3.png" style={{ height: "700px" }} />
        <img src="/flash.png" className="flashs" style={{ height: "60px" }} />

      </div>

      <div className="main-texts">
        <p style={{fontSize:"50px", fontWeight:"bold"}}>Round Start </p>
        <p  style={{fontSize:"19px"}}>
        Let's move out!
        </p>
      </div>
      <div className="eventss">
           <div className="cods">
          
               <p>Last Squad Standing</p>
               <p>by - Robotics Club</p>
               <p>Prize-4000/-</p>
               <p>last date-31/10/23</p>
       

           </div>
           <div className="cods">
                 
               <p>Reloaded Rivalry</p>
               <p>Kalakar club</p>
               <p>Prize-4000/-</p>
               <p>last date-03/11/23</p>

           </div>
           <div className="cods">

               <p>Armory Assault</p>
               <p>by - Zeal society</p>
               <p>Prize-5000/-</p>
               <p>last date-11/11/23</p>

           
           </div>
    
      </div>
    </div>
    
  );
};

export default Csgo;
