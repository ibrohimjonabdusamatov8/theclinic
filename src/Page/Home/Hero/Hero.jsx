import React from "react";
import "./Hero.css";
import kal from "./img/62038392898a7f224a603a22_Photography_MFC_JonathanHero.png.png";
import heroborder from "./img/div_after_border.png";
function Hero() {
  return (
    <section className="hero">
      <div className="container wrapper">
        <div className="left">
          <h2 className="title">
            Sizning <br /> salomatligingiz <br />
            <span>
              biz uchun muhim <img src={heroborder} alt="" />
            </span>
          </h2>
          <div className="xizmatlar__button">
          <button className="xizmat">
            <li>Xizmatlar</li>
          </button>
          </div>
        </div>
        <div className="hero__kal__img">
        <img className="kal" src={kal} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
