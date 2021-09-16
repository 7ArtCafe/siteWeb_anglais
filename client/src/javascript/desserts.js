import React from 'react'

import '../css/carte.css'
import img_menu_dessert from '../images/10021897.jpg'
import img_test from '../images/7artGrandBlanc.jpg'

const url_dessert = "http://localhost:4242/carte/desserts"

class Dessert extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          desserts: null,
          loading: true
        }
    }

    async componentDidMount(){
        // à changer par rapport aux lien de la donnée
        fetch(url_dessert)
        .then(res => res.json())
        .then(data => {
            this.setState({desserts: data})
            this.setState({loading: false})
        })
    }

    render(){
        const lst = []
        if (this.state.loading === false){
            this.state.desserts.forEach(element => {
                let dessert_href = "./" + element.libellé
                let nom_dessert = element.libellé
                let description_desssert = element.description
                let dessert = 
                    <div className="w3-right">
                        <div className="w3-panel w3-margin view_menu">
                                {/* modifier le nom des entité css */}
                                <header className="titre_menus">{nom_dessert}</header>
                                <div className="description">
                                    {description_desssert}
                                </div>
                        </div>
                    </div>;


                lst.push(dessert)
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
                            {/* affichage des Desserts */}
                            {lst}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dessert