import React from 'react'
import '../css/carte.css'
import {Modal, Button} from 'react-bootstrap'
import Boissons from '../javascript/boissons.js'

import img_menu_sandwich from '../images/fast-food-2132863_1280.jpg'
import img_menu_pizza from '../images/pizza-1344720_1920.jpg'

const url_opt_menu = "http://localhost:4242/carte/option_menu/1"
const url_sandwichs = "http://localhost:4242/carte/plats/1"

class Modal_Sandwichs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          sandwichs: null,
          loading: true,
          numModal: 1,
          optMenu: null
        }
    }

    async componentDidMount(){
        // à changer par rapport aux lien de la donnée
        fetch(url_opt_menu)
        .then(res => res.json())
        .then(data => {
            this.setState({optMenu: data})
        })

        fetch(url_sandwichs)
        .then(res => res.json())
        .then(data => {
            this.setState({sandwichs: data})
            this.setState({loading: false})
        })
        console.log(this.state.sandwichs)
    }
    AjoutNumModal(){
        if (this.state.numModal < 5){
            this.setState({numModal: this.state.numModal + 1})
        }
    }

    RetirerNumModal(){
        if (this.state.numModal > 1){
            this.setState({numModal: this.state.numModal - 1})
        }
    }

    choixMenu(){
        const lstOpt_menu = [
            <header className="titre_Modal">Choix du Menu</header>
        ]
        this.state.optMenu.forEach(element => {
            let nom_optMenu = element.libellé
            let optMenus = 
                <div className="w3-third">
                    <div className="w3-panel w3-margin w3-card-4 view_menu">
                        <div className="menu_click">
                            {/* modifier le nom des entité css */}
                            <header className="titre_menus">{nom_optMenu}</header>
                            <div className="w3-container">
                                <img className="img_menus" src={img_menu_pizza}/>
                            </div>
                            <footer className="titre_menus">{element.prix} €</footer>
                        </div>
                    </div>
                </div>;

            lstOpt_menu.push(optMenus)
        })

        lstOpt_menu.push(<span className="w3-red">aze</span>)
        return lstOpt_menu
    }

    choixSandwich(){
        let sandwich
        const lst = [
            <header className="titre_Modal">Choix du Sandwich</header>
        ]
        this.state.sandwichs.forEach(element => {
            let nom_sandwich = element.libellé
            sandwich = 
                <div id={"modal_sandwichs" + element.idPlat} className="w3-third">
                    <div className="w3-panel w3-margin w3-card-4 view_menu">
                        <div className="menu_click">
                            {/* modifier le nom des entité css */}
                            <header className="titre_menus">{nom_sandwich}</header>
                            <div className="w3-container">
                                <img className="img_menus" src={img_menu_sandwich}/>
                            </div>
                        </div>
                    </div>
                </div>;

            lst.push(sandwich)
        })
        return lst
    }

    choixBoisson(){
        return <Boissons/>
    }

    render(){
        let bodyModal = []
        if (this.state.loading === false){
            if (this.state.numModal === 1){
                bodyModal = this.choixMenu()
            }
            else if (this.state.numModal === 2){
                bodyModal = this.choixSandwich()
            }
            else if (this.state.numModal === 3){
                bodyModal = this.choixBoisson()
            }
            else{
                bodyModal = "page 4"
            }
        }
            

        return(
            <div>
                {/* affichage des sandwichs */}
                <div className="w3-container">
                    {bodyModal}
                </div>
                <footer className="w3-margin-top">
                    <Button className="w3-right" variant="primary" onClick={()=>this.AjoutNumModal()}>Suivant</Button>
                    <Button className="w3-right w3-margin-right" variant="primary" onClick={()=>this.RetirerNumModal()}>Précedent</Button>
                </footer>
            </div>
        )
    }
}

export default Modal_Sandwichs