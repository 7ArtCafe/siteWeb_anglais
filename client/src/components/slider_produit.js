import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
//css
import 'react-slideshow-image/dist/styles.css'
import '../css/slider.css'
//ressources
import video_présentation from '../images/vid-produits.mp4'
import video_dessertEtTexMex from '../images/vid-desert-texmex.mp4'


const properties = {
    indicators: true,
    pauseOnHover: false,
    duration: 15000,
    arrows: false,
    transitionDuration: 200,
    // canSwipe: true,
    // prevArrow: <div className="x" style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,

}

const Slider_Prod = () => {
  const [autoplay, setAutoplay] = useState(true);
  const style = {
    textAlign: "center",
    background: "",
    padding: "50px 0 50px 0",
    fontSize: "30px",
  }

  return (
    <div className="w3-col l12 s12">
        <Slide autoplay={autoplay} {...properties}>

          <div style={style}>
              <video className="img_slider w3-round-large" autoplay="autoplay" muted="muted" loop="loop">
                <source src={video_présentation} type="video/mp4"/>
              </video> 
          </div>

          <div style={style}>
              <video className="img_slider w3-round-large" autoplay="autoplay" muted="muted" loop="loop">
                <source src={video_dessertEtTexMex} type="video/mp4"/>
              </video> 
          </div>
          
        </Slide>
      </div>
  );
};

export default Slider_Prod;