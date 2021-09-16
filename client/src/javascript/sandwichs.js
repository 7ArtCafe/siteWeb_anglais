import React from 'react'

import '../css/carte.css'
import img_sandwich from '../images/sandwich.png'
import img_steack from '../images/steack-text-L.png'
import img_pain_maison from '../images/painMaison.png'

class Sandwichs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          sandwichs: null,
          loading: true
        }
    }

    render(){
        document.title = "Our Sandwiches | 7ArtCafe"

        return(
            <div>
                <div className="img-border">
                    <div className="affichage-carte w3-container w3-round">

                        <div className="header-carte w3-container">
                            <h1 className="titre-carte w3-animate-right w3-hide-large">The 7 Art</h1>
                            <p className="description-carte w3-right w3-text-white w3-hide-large">the emblematic sandwich</p>
                            <img className="w3-animate-top img-titre-carte w3-round-xlarge w3-col l5" src={img_sandwich}/>

                            <div className="w3-container w3-col l6">
                                {/* Changer la police d'écriture */}
                                <h1 className="titre-carte w3-animate-right w3-hide-small w3-hide-medium">The 7 Art</h1>
                                <p className="description-carte w3-right w3-text-white w3-hide-small w3-hide-medium">the emblematic sandwich</p>

                                <div className="w3-container">

                                    <div className="w3-container w3-col l6 s9">
                                        <img className="img-petite-viande w3-round-xlarge w3-hide-small w3-hide-medium w3-col l12" src={img_steack}/>
                                        {/* <p className="description-petite-img">Marinade maison</p> */}
                                    </div>

                                    <div className="w3-container w3-col l6 s9">
                                        <img className="img-petite-viande w3-round-xlarge w3-hide-small w3-hide-medium w3-col l12" src={img_pain_maison}/>
                                        {/* <p className="description-petite-img">Marinade maison</p> */}
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Description */}
                        <div className="w3-container">
                            <div className="description-carte">
                                <p>
                                    Savory bread and an equally delicious tortilla, both <span className="text-important"> homemade. </span>
                                    Each ingredient that makes up our sandwiches has been carefully chosen. So these are <span className="text-important">7 sandwiches</span> that we offer
                                </p>
                                <p>
                                    <span className="text-important">The 7 art : The flagship sandwich, </span>Composed of pure beef steak, cheddar cheese, a house sauce as well as raw vegetables.
                                </p>
                                <p>
                                    <span className="text-important">The Tenders : </span>Composed of a breaded chicken fillet, cheddar cheese, mayonnaise and raw vegetables.
                                </p>
                                <p>
                                    <span className="text-important">The Royal : </span>Composed of minced steak, smoked sausages, a double cheddar cheese, a house sauce and raw vegetables.
                                </p>
                                <p>
                                    <span className="text-important">The Super : </span>Composed of minced steak, a double cheddar cheese, a house sauce and raw vegetables.
                                </p>
                                <p>
                                    <span className="text-important">Oriental : </span>Composed of tuna, egg, onions, peppers, olives, harissa and raw vegetables.
                                </p>
                                <p>
                                    <span className="text-important">The Salmon : </span>Composed of smoked salmon, lemon, dill, a white sauce and raw vegetables.
                                </p>
                                <p>
                                    <span className="text-important">The Chicken : </span>Made with pieces of chicken, cheddar cheese, mayonnaise and raw vegetables.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Sandwichs