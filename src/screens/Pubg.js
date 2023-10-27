import React, { useEffect, useState } from 'react';
import "../styles/pubg.css";
import { Link } from 'react-router-dom';
import data from "../data";

const Pubg = () => {
     const [pubg, setPubg] = useState([]);
     const [fire, setfire] = useState("notfire");
     const[gunfire ,setgunfir]=useState("gun-element")
     const handlefire = () => {
        setfire("fire");
        setgunfir('gun-element-fire')
        playGunshotSound(); 
        setTimeout(() => {
            setgunfir('gun-element')
          setfire("notfire");
        }, 15);
      };
    
    const playGunshotSound = () => {
      const gunshotSound = new Audio('/sniper_sound.mp3');
      gunshotSound.play();
    };

     useEffect(() => {   
         let filteredData = data.filter((item) => item.game === 'pubg');
         setPubg(filteredData);
     }, [data]);

    return (
        <div className="back-ground2">
            <div className="blurr2">
                <p></p>
            </div>
            <div className="hero-image2">
                <img src="/main-hero2.png" style={{ height: "700px" }} />
                <img src="/flash.png" className="flash2" style={{ height: "60px" }} />
            </div>
            <img src="/point.png" className="point" style={{ height: "1000px" }} />
            <div className={gunfire}>
           <img src="/flash.png" className={fire} style={{ height: "60px" }} />
             <img onClick={handlefire} src="/snniper2.png" width="550px"></img>
      </div>
            <div className="main-text2">
                <p style={{ fontWeight: "bold" }}>Winner Winner Chicken Dinner</p>
            </div>
            <div className="events2">
                {pubg.map((item) => (
                    <div className="cod2" key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.org}</p>
                        <p style={{color:"rgb(255, 153, 0)", fontWeight:"bold"}}>Prize - {item.prize}</p>
                        <p>Last Date - {item.lastDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pubg;
