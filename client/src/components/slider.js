import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
//css
import 'react-slideshow-image/dist/styles.css'
import '../css/slider.css'
//ressources
import video_produit from '../images/video_fond_frais.mp4'
import video_show from '../images/vid-sunday-show.mp4'


const properties = {
    indicators: true,
    pauseOnHover: false,
    arrows: false,
    duration: 8200,
    transitionDuration: 500,
    // canSwipe: true,
    // prevArrow: <div className="x" style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,

}

const Slider = () => {
  const [autoplay, setAutoplay] = useState(true);
  const style = {
    textAlign: "center",
    background: "",
    padding: "50px 0 50px 0",
    fontSize: "30px"
  }

  return (
      <div className="w3-col s12">

        <Slide autoplay={autoplay} {...properties}>
          <div style={style}>
            <Link to="/carte/produits">
              <video className="img_slider w3-round-large w3-col s12" autoplay="autoplay" muted="muted" loop="loop">
                <source src={video_produit} type="video/mp4"/>
              </video> 
            </Link>
          </div>

          <div style={style}>
            <Link to="/shows">
              <video className="img_slider w3-round-large w3-col s12" autoplay="autoplay" muted="muted" loop="loop">
                <source src={video_show} type="video/mp4"/>
              </video> 
            </Link>
          </div>

        </Slide>
      </div>
  );
};

export default Slider;