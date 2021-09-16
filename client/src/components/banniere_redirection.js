import React from 'react'

import '../css/banniere.css'
import img_uber_eat from '../images/uber-eats-logo.png'
import img_just_eat from '../images/Just-Eat-logo.png'
import img_delivroo from '../images/deliveroo-logo-0.png'

class Bannière extends React.Component{
    render(){
        return(
            <>
                <div className="w3-col l12">
                    <div className="corps-ban w3-container">
                        <div className="w3-twothird">
                            <h1 className="titre-ban">LITTLE HUNGRY ?</h1>
                        </div>
                        <div className="w3-third">
                                <div className="corps-link-ban w3-center w3-round-large w3-col">
                                    {/* Delivroo */}
                                    <div className="w3-third w3-col s4">
                                        <a hreflang="fr" href="https://deliveroo.fr/fr/menu/paris/villejuif-centre-ville/7-art-cafe" target="_blank" rel="external">
                                            <img className="img-redirection w3-round-large" src={img_delivroo}/>
                                        </a>
                                    </div>
                                    {/* Uber eat */}
                                    <div className="w3-third w3-col s4">
                                        <a hreflang="fr" href="https://www.ubereats.com/fr/paris/food-delivery/7-art-cafe/QZb-Ep7vROa9Eqa97lLCyA" target="_blank" rel="external">
                                            <img className="img-redirection w3-round-large" src={img_uber_eat}/>
                                        </a>
                                    </div>
                                    {/* Just eat */}
                                    <div className="w3-third w3-col s4">
                                        <a hreflang="fr" href="https://www.just-eat.fr/menu/7-art-cafe" target="_blank" rel="external">
                                            <img className="img-redirection w3-round-large" src={img_just_eat}/>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Bannière