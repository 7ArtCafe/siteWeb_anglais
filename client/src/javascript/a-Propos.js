import React from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Presentation from './presentation.js'
import Contact from './contact.js'
import '../css/a_propos.css'

class A_Propos extends React.Component{
    render(){
        return(
            <>
                <HashRouter>
                    <Switch>
                        <Route exact path="/a_propos/presentation">
                            <Presentation/>
                        </Route>
                        <Route exact path="/a_propos/contact">
                            <Contact/>
                        </Route>
                    </Switch>
                </HashRouter>
            </>
        )
    }
}
{/* <div className='corps_propos w3-container w3-center'>
    <form>
        <div className="block-nom">
            <label>
                <p>Votre nom :</p>
                <input className="block" type="text"/>
            </label>
        </div>
        <div className="block-mail">
            <label>
                <p>Votre email :</p>
                <input className="block" type="text"/>
            </label>
        </div>
        <div className="block-nom">
            <label>
                <p>Sujet :</p>
                <input className="block" type="text"/>
            </label>
        </div>
        <div>
            <label>
                <p>message :</p>
                <textarea id="message" className="block" rows="8"/>
            </label>
        </div>
        <input type="submit" value="Envoyer" />
    </form>
</div> */}
export default A_Propos