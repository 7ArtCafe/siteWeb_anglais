import React from 'react'
import NavBar from '../components/NavBar.js'
// import css
import '../css/App.css'

import Carte from './carte.js'
import Acceuil from './accueil.js'
import Shows from './shows.js'
import A_Propos from './a-Propos.js'
import Footer from '../components/footer.js'

import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <NavBar/>
      <Switch>
        <Route path='/carte'>
          <div id="carte">
            <Carte/>
          </div>
        </Route>

        <Route exact path='/shows'>
          <div id="show">
            <Shows/>
          </div>
        </Route>

        <Route path='/a_propos'>
          <div id="a_propos">
            <A_Propos/>
          </div>
        </Route>

        <Route path='/'>
          <div id="home">
            <Acceuil/>
          </div>
        </Route>
      </Switch>
      {/* affiche du footer */}
      <Footer/>
    </HashRouter>
  );
}

export default App
