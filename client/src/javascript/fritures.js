import React from 'react'

import '../css/carte.css'
import img_menu_frite from '../images/10820734.jpg'
import img_test from '../images/7artGrandBlanc.jpg'

const url_fritures = "http://localhost:4242/carte/fritures"

class Fritures extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          fritures: null,
          loading: true
        }
    }

    async componentDidMount(){
        // à changer par rapport aux lien de la donnée
        fetch(url_fritures)
        .then(res => res.json())
        .then(data => {
            this.setState({fritures: data})
            this.setState({loading: false})
        })
    }

    render(){
        const lst = []
        if (this.state.loading === false){
            this.state.fritures.forEach(element => {
                let friture_href = "./" + element.libellé
                let nom_friture = element.libellé
                let description_friture = element.description
                let friture = 
                    <div className="w3-right">
                        <div className="w3-panel w3-margin view_menu">
                                {/* modifier le nom des entité css */}
                                <header className="titre_menus">{nom_friture}</header>
                                <div className="description">
                                    {description_friture}
                                </div>
                        </div>
                    </div>;


                lst.push(friture)
            });
        }

        return(
            <div>
                 <div className="img-border">
                    <div className="affichage-carte w3-container w3-round">
                        <div className="header-carte">
                            <img className="img-titre-carte" src={img_test}/>
                            <span className="titre-carte">Les Tex-Mex</span>
                        </div>
                        <div className="w3-twothird w3-right">
                            {/* affichage des Fritures */}
                            {lst}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fritures