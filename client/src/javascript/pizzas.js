import React from 'react'

import '../css/carte.css'
import img_pizza from '../images/pizza_7Art.png'
import img_test from '../images/7artGrandBlanc.jpg'

const url_pizzas = "http://localhost:4242/carte/plats/3"

class Pizzas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          pizzas: null,
          loading: true
        }
    }

    render(){
        document.title = "Our Pizzas | 7ArtCafe"

        return(
            <div>
                <div className="img-border">
                    <div className="affichage-carte w3-container w3-round">
                        <div className="header-carte w3-container">
                            {/* <div className="w3-red w3-half">s</div> */}
                            <div className="w3-container w3-col l6">
                                {/* Changer la police d'écriture */}
                                <h1 className="titre-carte w3-animate-right">The Pizz'Arts</h1>
                                <p className="description-carte w3-text-white">Pizzas made with a fresh dough and tasty mozzarella</p>
                            </div>
                            <img className="w3-animate-top img-titre-carte imgtourne w3-round-xlarge w3-col l5" src={img_pizza}/>
                            {/* <img className="img-titre-carte w3-half w3-red" src={img_test}/>
                            <span className="titre-carte">Les Pizzas</span> */}
                        </div>
                        {/* Description */}
                        <div className="w3-container">
                            <div className="description-carte">
                                <p>
                                    <span className="text-important">The 7 Art Cafe : </span>Composed of tomato sauce, mozzarella, mushrooms, tuna and olives.
                                </p>
                                <p>





                                    <span className="text-important">The Calzone : </span>Composed of tomato sauce, mozzarella, egg and turkey roulade.
                                </p>
                                <p>
                                    <span className="text-important">The Buffalo : </span>Composed of tomato sauce, mozzarella, ground beef, peppers, onions and BBQ sauce.
                                </p>
                                <p>
                                    <span className="text-important">the 4 Cheeses : </span>Composed of fresh cream, mozzarella, goat cheese, Emmental and Gorgonzola.
                                </p>
                                <p>
                                    <span className="text-important">La Montagnarde : </span>Composed of fresh cream, mozzarella, smoked bacon, tere apple, reblonchon and onions.
                                </p>
                                <p>
                                    <span className="text-important">The Salmone : </span>Composed of fresh, mozzarella, salmon, mushrooms, tomatoes, lemons and dill.
                                </p>
                                <p>
                                    <span className="text-important">The Mexic'Art : </span>Composed of tomato sauce, mozzarella, ground beef, chili puree, merguez and peppers.
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
                                <img className="img-petite-viande w3-round-xlarge w3-col l12" src={img_test}/>
                            </div>
                            <div className="w3-container w3-col l3 s5">
                                <img className="img-petite-viande w3-round-xlarge w3-col l12" src={img_test}/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pizzas