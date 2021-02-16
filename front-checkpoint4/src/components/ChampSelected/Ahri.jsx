import champ2 from "../ChampionsData/champion/Ahri";
import "./Slider.css";
import "./Champs.css";
import { useState } from "react";
import img1 from "../../Assets/img/champion/splash/Ahri_0.jpg";
import img2 from "../../Assets/img/champion/splash/Ahri_1.jpg";
import img3 from "../../Assets/img/champion/splash/Ahri_2.jpg";
import img4 from "../../Assets/img/champion/splash/Ahri_3.jpg";
import img5 from "../../Assets/img/champion/splash/Ahri_4.jpg";
import img6 from "../../Assets/img/champion/splash/Ahri_5.jpg";
import img7 from "../../Assets/img/champion/splash/Ahri_6.jpg";
import img8 from "../../Assets/img/champion/splash/Ahri_7.jpg";
import img9 from "../../Assets/img/champion/splash/Ahri_14.jpg";
import img10 from "../../Assets/img/champion/splash/Ahri_15.jpg";
import img11 from "../../Assets/img/champion/splash/Ahri_16.jpg";
import img12 from "../../Assets/img/champion/splash/Ahri_17.jpg";
import passive from "../../Assets/imgDetail/passive/Ahri_SoulEater2.png";
import spell1 from "../../Assets/imgDetail/spell/AhriOrbofDeception.png";
import spell2 from "../../Assets/imgDetail/spell/AhriFoxFire.png";
import spell3 from "../../Assets/imgDetail/spell/AhriSeduce.png";
import ulti from "../../Assets/imgDetail/spell/AhriTumble.png";

function Ahri() {
  const ahri = champ2.data;

  const renderAhri = (
    <div>
      {Object.entries(ahri).map(([key, value]) => {
        return (
          <div className="champion-infos">
            <p className="champion-text">{value.lore}</p>
            <div className="tags">
              <p className="partype">Type : {value.partype}</p>
              <p className="champion-tags">
                {value.tags[0]} , {value.tags[1]}
              </p>
            </div>
            <div className="tips">
              <p className="champion-allytips"><span className="gold">Conseils :</span> {value.allytips}</p>
              <p className="champion-enemytips">
               <span className="gold"> Conseils (si vous jouez contre) : </span>{value.enemytips}
              </p>
            </div>
            <div className="champion-spells">
              <div className="spell-div">
                <img className="spell-img" src={passive} />
                <p className="spell-name">
                  Pouvoir passif : <br/>{value.passive["name"]}
                </p>

                <p className="spell-description">
                  {" "}
                  {value.passive["description"]}
                </p>
              </div>
              <div className="spell-div">
                <img className="spell-img" src={spell1} />
                <p className="spell-name">
                  Sort 1 : <br/>{value.spells[0]["name"]}
                </p>

                <p className="spell-description">
                  {value.spells[0]["description"]}
                </p>
              </div>
              <div className="spell-div">
                <img className="spell-img" src={spell2} />
                <p className="spell-name">
                  Sort 2 : <br/>{value.spells[1]["name"]}
                </p>

                <p className="spell-description">
                  {value.spells[1]["description"]}
                </p>
              </div>
              <div className="spell-div">
                <img className="spell-img" src={spell3} />
                <p className="spell-name">
                  Sort 3 : <br/>{value.spells[2]["name"]}
                </p>

                <p className="spell-description">
                  {value.spells[2]["description"]}
                </p>
              </div>
              <div className="spell-div">
                <img className="spell-img" src={ulti} />
                <p className="spell-name">
                  Sort Ultime : <br/>{value.spells[3]["name"]}
                </p>

                <p className="spell-description">
                  {value.spells[3]["description"]}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
  let imgStyle = {
    width: 100 + "%",
    heigth: "auto",
  };
  let sliderArray = [
    <img src={img1} style={imgStyle} />,
    <img src={img2} style={imgStyle} />,
    <img src={img3} style={imgStyle} />,
    <img src={img4} style={imgStyle} />,
    <img src={img5} style={imgStyle} />,
    <img src={img6} style={imgStyle} />,
    <img src={img7} style={imgStyle} />,
    <img src={img8} style={imgStyle} />,
    <img src={img9} style={imgStyle} />,
    <img src={img10} style={imgStyle} />,
    <img src={img11} style={imgStyle} />,
    <img src={img12} style={imgStyle} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
  };
  const Slider = (
    <div className="slider">
      {sliderArray.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );

  return (
    <div>
      <h1 className="champ-main-title">Ahri</h1>
      <div className="slider-container">{Slider}</div>
      <div>{renderAhri}</div>
    </div>
  );
}
export default Ahri;
