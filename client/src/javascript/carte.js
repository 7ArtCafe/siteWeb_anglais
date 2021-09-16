import React from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import '../css/carte.css'

import Produits from './produits.js'
import Test from './test.js'
import Sandwichs from './sandwichs.js'
import Burgers from './burgers.js'
import Pizzas from './pizzas.js'
import Desserts from './desserts.js'
import Bannière from '../components/banniere_redirection.js'


function Carte(){
    return(
        <HashRouter>
            <div>
                {/* navbar de la carte */}
                <div className="w3-bar header-bar">
                    <Link to="/carte/produits" class="nav-carte w3-button w3-hover-none w3-hover-text-orange-7art w3-text-white">Our Products</Link>
                    <Link to="/carte/sandwichs" class="nav-carte w3-button w3-hover-none w3-hover-text-orange-7art w3-text-white">Sandwiches</Link>
                    <Link to="/carte/burgers" class="nav-carte w3-button w3-hover-none w3-hover-text-orange-7art w3-text-white">Burgers</Link>
                    <Link to="/carte/pizzas" class="nav-carte w3-button w3-hover-none w3-hover-text-orange-7art w3-text-white">Pizzas</Link>
                    {/* <Link to="/carte/desserts" class="w3-button w3-hover-none w3-text-white w3-hide-small">Dessert</Link> */}
                </div>
            </div>
            <Switch>
                {/* affichage des menus */}
                <Route path="/carte/produits">
                    <Produits/>
                </Route>
                <Route path="/carte/sandwichs">
                    <Sandwichs/>
                </Route>
                <Route path="/carte/burgers">
                    <Burgers/>
                </Route>
                <Route path="/carte/pizzas">
                    <Pizzas/>
                </Route>
            </Switch>
            {/* affichage de la bannière vers delivroo */}
            <Bannière/>
        </HashRouter>
    )
}

export default Carte