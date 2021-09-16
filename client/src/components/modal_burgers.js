import React from 'react'
import '../css/carte.css'
import img_menu_burger from '../images/hamburger-1238246_1920.jpg'
const url_burger = "http://localhost:4242/carte/plats/burger"

class Modal_Burgers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          Burgers: null,
          loading: true
        }
    }

    async componentDidMount(){
        // à changer par rapport aux lien de la donnée
        fetch(url_burger)
        .then(res => res.json())
        .then(data => {
            this.setState({Burgers: data})
            this.setState({loading: false})
        })
    }

    render(){
        const lst = []
        if (this.state.loading === false){
            this.state.Burgers.forEach(element => {
                let burger_href = "./" + element.libellé
                let nom_burger = element.libellé
                let burger = 
                    <div className="w3-third">
                        <div className="w3-panel w3-margin w3-card-4 view_menu">
                            <div className="menu_click">
                                {/* modifier le nom des entité css */}
                                <header className="titre_menus">{nom_burger}</header>
                                <div className="w3-container">
                                    <img className="img_menus" src={img_menu_burger}/>
                                </div>
                                <footer className="titre_menus">{element.prix} €</footer>
                            </div>
                        </div>
                    </div>;

                lst.push(burger)
            });
        }

        return(
            <div>
                {/* affichage des Burgers */}
                {lst}
            </div>
        )
    }
}

export default Modal_Burgers