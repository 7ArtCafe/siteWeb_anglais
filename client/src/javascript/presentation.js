import React from 'react'

import '../css/presentation.css'
import img_sandwich_cuisine from '../images/IMG-20210607-WA0004.jpg'
import img_convivial from '../images/IMG-20210607-WA0013.jpg'
import img_salle from '../images/IMG-20210322-WA0028.jpg'

function Presentation(){
    document.title = "About Us | 7ArtCafe"
    return(
        <div className="pres">
            <div className="pres-cont-titre">
                <h1 className="pres-titre">7 ART CAFE OR THE ART OF SATISFYING YOU</h1>
            </div>
            <div className="pres-body w3-container">

                <div className="cont-desc-img w3-container w3-round-xxlarge">

                    {/* Version mobile */}
                    <div className="w3-col w3-round-xxlarge w3-hide-large">
                        <img className="w3-col l11 w3-round-xxlarge" src={img_sandwich_cuisine}/>
                    </div>
                    {/* Fin mobile */}

                    <div className="desc-img w3-col l6 m12">
                        <p className="desc">For the first time in Paris, 7 Art Cafe has brought the concept where you can enjoy a variety of dishes each prepared by the expert chef to give you the best dining experience.</p>
                    </div>
                    <div className="w3-col l6 m12 w3-hide-medium w3-hide-small">
                        <img className="w3-col w3-circle" src={img_sandwich_cuisine}/>
                    </div>
                </div>

                <hr/>
                <p className="desc">Upholding our motto of healthy eats wealthy treats, 7 art cafe only serves fresh, hygienic, and highest quality food.</p>
                <hr/>
                <p className="desc">Our entire staff is committed to serving only the highest quality of food. With a wide variety of menu items, there's sure to be something for everyone could enjoy. This is our challenge!</p>
                <hr/>

                <div className="cont-desc-img w3-container w3-round-xxlarge">

                    {/* Version Mobile */}
                    <div className="w3-col w3-round-xxlarge w3-hide-large">
                        <img className="w3-col w3-round-xxlarge" src={img_convivial}/>
                    </div>
                    {/* Fin mobile */}

                    <div className="w3-col l6 m12 w3-hide-small w3-hide-medium">
                        <img className="w3-col w3-circle" src={img_convivial}/>
                    </div>
                    <div className="desc-img-2 w3-col l6 m12">
                        <p className="desc">We offer great food for a great value in a neighborhood restaurant tailored tothe community where our guests are truly valued, appreciated, and made tofeel at home.</p>
                    </div>
                </div>

                <hr/>
                <p className="desc">We provide you with a wide variety of dishes to choose from, each created with the perfection which you can enjoy with your family and friends in a peaceful environment.</p>
                <hr/>

                <div className="cont-desc-img w3-container w3-round-xxlarge">
                    
                    {/* Version mobile */}
                    <div className="w3-col w3-round-xxlarge w3-hide-large">
                        <img className="w3-col w3-round-xxlarge" src={img_salle}/>
                    </div>
                    {/* Fin mobile */}

                    <div className="desc-img-3 w3-col l6 m12">
                        <p className="desc">We are established to fill up the need of a place where quality comes with consistency in terms of both foods and services, and a place where you can meet, relax and have a great time together.</p>
                    </div>

                    <div className="w3-col l6 m12 w3-hide-medium w3-hide-small">
                        <img className="w3-col w3-circle" src={img_salle}/>
                    </div>
                    {/* <div className="w3-col l6 m12 w3-circle w3-dark-grey w3-hide-medium w3-hide-small">
                        <img className="w3-col l11 w3-circle" src={img_salle}/>
                    </div> */}
                </div>

                <hr/>
                <p className="desc">. We anticipated the needs of our guests with attentive touches o four committed services with best food and shows in the town creating lifelong memories.</p>
                <hr/>

            </div>
        </div>
    )
}

export default Presentation