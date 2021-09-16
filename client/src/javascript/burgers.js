import React from 'react'

import '../css/carte.css'
// import img_burger from '../images/burger.png'
// import img_burger from '../images/iStock-1203988866-L.jpg'
import img_pain_haut from '../images/pain_haut-L.png'
import img_tomate from '../images/Tomate-L.png'
import img_fromage from '../images/Fromage-L.png'
import img_steack from '../images/steack-L.png'
import img_pain_bas from '../images/pain_bas-L.png'
import img_salade from '../images/salade-L.png'

import img_tenders from '../images/Crispy_Chicken_Strips_-_FotoosVanRobin.jpg'
import img_test from '../images/7artGrandBlanc.jpg'

const url_burger = "http://localhost:4242/carte/plats/2"

class Burgers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          Burgers: null,
          loading: true
        }
    }

    render(){
        document.title = "Our Burgers | 7ArtCafe"

        return(
            <>
                <div className="img-border">
                    <div className="affichage-carte w3-container w3-round">
                        <div className="header-carte w3-container">
                            {/* <div className="w3-red w3-half">s</div> */}
                            <div className="w3-col l12">
                                <div className="w3-display-container w3-col l12 w3-animate-top">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_pain_haut}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">100% homemade burger bread</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-right">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_fromage}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Premium cheese</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-left">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_steack}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Homemade seasoned butcher meat</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-right">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_tomate}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Fresh tomato</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-left">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_salade}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Crunchy salad</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-bottom">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_pain_bas}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">100% homemade burger bread</p>
                                </div>
                            </div>
                            {/* <div className="titre-carte w3-container w3-animate-right w3-col l6">7'Burger</div> */}
                        
                        </div>
                        {/* Description */}
                        <div className="w3-container">
                            <div className="description-carte">
                                <p>
                                    <span className="text-important">The 7'Burger: </span>Composed of beef, cheddar, red onions, pickles, a house sauce and raw vegetables.
                                </p>
                                <p>
                                    <span className="text-important">The 7'Chicken : </span>Composed of tenders, cheddar cheese, mayonnaise and raw vegetables.
                                </p>
                                <p>
                                    <span className="text-important">The 7'Fish : </span>Composed of hake fillet, lemons, pickles, fish sauce and raw vegetables.
                                </p>
                            </div>
                        </div>
                        {/* Image des viandes */}
                        {/* <div className="w3-container">
                            <div className="w3-container w3-col l3 s5">
                                <img className="img-petite-viande w3-round-xlarge w3-col l12" src={img_test}/>
                                <p className="description-petite-img">Du poissons de qualité</p>
                            </div>
                            <div className="w3-container w3-col l3 s5">
                                <img className="img-petite-viande w3-round-xlarge w3-col l12" src={img_test}/>
                                <p className="description-petite-img">Une viande bouchère fraiches</p>
                            </div>
                            <div className="w3-container w3-col l3 s5">
                                <img className="img-petite-viande w3-round-xlarge w3-col l12" src={img_tenders}/>
                                <p className="description-petite-img">Du poulet de qualité (proposition d'image)</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}

export default Burgers