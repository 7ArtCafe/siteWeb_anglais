import React from 'react'
import {Link} from "react-router-dom";

import '../css/footer.css'

import logo from '../images/7_art_noir-1.png'
import logo_facebook from '../images/iconfinder_Facebook_571114.png'
import logo_insta from '../images/iconfinder_1_Instagram_colored_svg_1_5296765.svg'
import logo_snap from '../images/iconfinder_1_Snapchat_colored_svg_5296508.svg'
import logo_youtube from '../images/iconfinder_1_Youtube_colored_svg_5296521.svg'

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="footer w3-container w3-hide-small w3-black w3-col l12">
                    <div className="w3-third">
                        <img className="w3-padding w3-col l5 s5" src={logo}/>
                    </div>

                    <div className="w3-third">
                        <div className="w3-container w3-quarter">
                            <a href="https://instagram.com/7artcafe?igshid=1mjeq0wm3ybgb" target="_blank">
                                <img className="lien-logo w3-col l8 m12" src={logo_insta}/>
                            </a>
                        </div>

                        <div className="w3-container w3-quarter">
                            <a href="https://www.facebook.com/7ArtCafe-109951994206865" target="_blank">
                                <img className="lien-logo w3-col l8 m12" src={logo_facebook}/>
                            </a>
                        </div>
                        
                        <div className="w3-container w3-quarter w3-center">
                            <img className="lien-logo w3-col l8 m12" src={logo_snap}/>
                            <p className="text-snap">ARTCAFE7</p>
                        </div>

                        <div className="w3-container w3-quarter">
                            <a href="https://www.youtube.com/channel/UCvQ5Y4bSOav-kJCJS24x5VQ/featured" target="_blank">
                                <img className="lien-logo w3-col l8 m12" src={logo_youtube}/>
                            </a>
                        </div>
                    </div>

                    <div className="w3-third w3-right">
                        <p className="copy-text">Copyright © 2021 - 7ArtCafe - All rights reserved</p>
                    </div>
                </div>

                {/* version mobile */}
                <div className="footer w3-container w3-hide-medium w3-hide-large w3-black w3-col l12">
                    <div className="content-logo w3-container w3-display-container">
                        <img className="w3-padding w3-display-middle w3-col l5 s5" src={logo}/>
                    </div>

                    <div className="res_sociaux w3-container">
                        <div className="w3-container w3-col s3">
                            <a href="https://instagram.com/7artcafe?igshid=1mjeq0wm3ybgb" target="_blank">
                                <img className="lien-logo w3-col s11" src={logo_insta}/>
                            </a>
                        </div>

                        <div className="w3-container w3-col s3">
                            <a href="https://www.facebook.com/7ArtCafe-109951994206865" target="_blank">
                                <img className="lien-logo w3-col s11" src={logo_facebook}/>
                            </a>
                        </div>
                        
                        <div className="w3-container w3-col s3">
                            <img className="lien-logo w3-col s11" src={logo_snap}/>
                            <p className="text-snap">ARTCAFE7</p>
                        </div>

                        <div className="w3-container w3-col s3">
                            <a href="https://www.youtube.com/channel/UCvQ5Y4bSOav-kJCJS24x5VQ/featured" target="_blank">
                                <img className="lien-logo w3-col s11" src={logo_youtube}/>
                            </a>
                        </div>
                    </div>

                    <div className="w3-container">
                        <p className="copy-text">Copyright © 2021 - 7ArtCafe - All rights reserved</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer