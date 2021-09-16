import React from 'react'
import '../css/carte.css'
import img_boissons from '../images/fast-food-2132863_1280.jpg'
const url_boissons = "http://localhost:4242/carte/boissons"

class Boissons extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          boissons: null,
          loading: true
        }
    }

    async componentDidMount(){
        // à changer par rapport aux lien de la donnée
        fetch(url_boissons)
        .then(res => res.json())
        .then(data => {
            this.setState({boissons: data})
            this.setState({loading: false})
        })
    }

    render(){
        const lst = []
        if (this.state.loading === false){
            this.state.boissons.forEach(element => {
                let nom_boisson = element.libellé
                let boisson = 
                    <div className="w3-third">
                        <div className="w3-panel w3-margin view_menu">
                            <div className="menu_click">
                                {/* modifier le nom des entité css */}
                                <header className="titre_menus">{nom_boisson}</header>
                                {/* <div className="w3-container w3-third">
                                    <img className="img_menus" src={img_menu_sandwich}/>
                                </div> */}
                                <footer className="prix">{element.prix} €</footer>
                            </div>
                        </div>
                    </div>;

                lst.push(boisson)
            });
        }

        return(
            <div>
                {/* affichage des boissons */}
                {lst}
            </div>
        )
    }
}

export default Boissons