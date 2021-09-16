import React from 'react'

import '../css/carte.css'

import Slider from '../components/slider_produit'
import img_burger from '../images/burger7Art.png'
import img_milk_shake from '../images/11.png'
import img_tex_mex from '../images/tex-mex.png'

class Produits extends React.Component {
    render(){
        document.title = "Our Products | 7ArtCafe"
        return(
            <div>
                <div className="img-border w3-container">
                    <div className="affichage-carte w3-container w3-round">
                        <h1 className="titre-carte w3-hide-large w3-hide-medium w3-col l12">Our Products</h1>
                        <div className="header-carte">
                            <div className="img-titre-carte">
                                <Slider/>
                            </div>
                        </div>
                        
                        <h1 className="titre-carte w3-hide-small w3-col l12">Our Products</h1>

                        <div className="header-carte w3-container  w3-col">
                            <img className="img-contenue-carte w3-hide-large w3-hide-medium w3-left w3-col s6" src={img_burger}/>
                            <p className="description-produit w3-col l8 m7 s12">A delicious brioche bread, tender and juicy meat.
                                Our burgers are made in the best conditions so that no one is indifferent.
                            </p>
                            <img className="img-contenue-carte w3-hide-small w3-col l2 m3" src={img_burger}/>
                        </div>


                        <div className="header-carte w3-container w3-col l12">
                        <hr/>
                            <img className="img-contenue-carte w3-hide-large w3-hide-medium w3-left w3-col s4" src={img_milk_shake}/>
                            <p className="description-produit w3-col l8 m8">A fresh, rich in flavor and generous milkshake. So test our three flavors (Vanilla, Strawberry and Chocolate)
                            </p>
                            <img className="img-contenu-carte w3-hide-small w3-col l1 m3" src={img_milk_shake}/>
                        </div>

                        <div className="header-carte w3-container w3-col l12">
                        <hr/>
                            <img className="img-contenue-carte w3-hide-large w3-hide-medium w3-left w3-col s6" src={img_tex_mex}/>
                            <p className="description-produit w3-col l8 m7">Firm and tasty chicken, golden and crispy breadcrumbs.
                                Our Tex-Mex are irresistibly tasty
                            </p>
                            <img className="img-contenue-carte w3-hide-small w3-col l2 m3" src={img_tex_mex}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Produits