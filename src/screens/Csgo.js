import React from "react";
import "../styles/csgo.css";
import { useState, useEffect } from "react";
import data from "../data";
import { Link } from "react-router-dom";
const Csgo = () => {
  const [csgo, setcsgo] = useState([]);
  const [fire, setfire] = useState("notfire");
  const[gunfire ,setgunfir]=useState("gun-element")

  const handlefire = () => {
    setfire("fire");
    setgunfir('gun-element-fire')
    playGunshotSound(); 
    setTimeout(() => {
      setfire("notfire");
      setgunfir('gun-element')
    }, 15);
  };
  useEffect(() => {
    let filteredData = data.filter((item) => item.game === "csgo");
    setcsgo(filteredData);
  }, [data]);

const playGunshotSound = () => {
  const gunshotSound = new Audio('/sniper_sound.mp3');
  gunshotSound.play();
};

  return (
    <div className="mm">
      <div className="blurr3">
        <p></p>
      </div>
      <div className="hero-images">
        <img src="/main-hero3.png" style={{ height: "700px" }} />
        <img src="/flash.png" className="flashs" style={{ height: "60px" }} />
      </div>
      <div className={gunfire}>
        <img src="/flash.png" className={fire} style={{ height: "60px" }} />
        <img onClick={handlefire} className="sniper" src="/snniper2.png" width="550px"></img>
      </div>
      <div className="main-texts">
        <p style={{ fontWeight: "bold" }}>Our guns shall Bring us victory!</p>
      </div>
      <div className="eventss">
        {csgo.map((item) => (
          <div className="cods" key={item.id}>
            <p>{item.title}</p>
            <p>{item.org}</p>
            <p>Prize - {item.prize}</p>
            <p>Last Date - {item.lastDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Csgo;
