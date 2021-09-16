import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

import '../css/NavBar.css'
import logo from '../images/7_art_noir-1.png'
import img_fr from '../images/drapeau-fr.png'
import img_en from '../images/drapeau-en.png'

class NavBar extends React.Component{
  
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  render(){
    return(
      <header className="w3-top">
        <nav class="navBar">
          <div className="navBar-text-gauche w3-half w3-hide-small">

            <Link to="/carte/produits">
              <p class="w3-button w3-hover-none w3-hover-text-orange-7art w3--small">Our Menus</p>
            </Link>

            <Link to="/shows">
              <p class="w3-button w3-hover-none w3-hover-text-orange-7art w3--small">Entertainment</p>
            </Link>


            <Link to="/">
              <div class="w3-bar-item w3-button w3-hover-none w3--medium w3--large w3-display-middle">
                <img className="logo" src={logo}/>
              </div>
            </Link>

          </div>

        <span className="navBar-text-droite w3-half w3-hide-small">

          <div className="w3-col l6 m6">

            <Link to="/a_propos/presentation" className="w3-hide-medium">
              <button class="w3-button w3-hover-none w3-hover-text-orange-7art">About Us</button>
            </Link>

            <Link to="/a_propos/contact" className="w3-hide-medium">
              <button class="w3-button w3-hover-none w3-hover-text-orange-7art">Contact</button>
            </Link>

          </div>

          <div class="w3-dropdown-hover w3-col m2 w3-hide-small w3-hide-large">
            <p class="w3-button w3-hover-none w3-hover-text-orange-7art w3--small">About</p>
              <div class="w3-dropdown-content w3-bar-block w3-card-4">
                <Link to="/a_propos/presentation">
                  <button class="w3-bar-item w3-white w3-button">Us</button>
                </Link>
                <Link to="/a_propos/contact">
                  <button class="w3-bar-item w3-white w3-button">Contact</button>
                </Link>
              </div>
            </div>
          
            <p className="numero w3-right">01.77.85.51.18</p>
            <a href="http://en.7artcafe.fr">
              <img className="img-drapeau-en w3-right" src={img_en}/>
            </a>
            <a href="http://fr.7artcafe.fr">
              <img className="img-drapeau-fr w3-right" src={img_fr}/>
            </a>

        </span>
    
        </nav>
        <Link to="/">              
          <p class="w3-bar-item w3-button w3-hover-none w3-display-middle">
            <img className="logo" src={logo}/>
          </p>
        </Link>

        {/* Version mobile de la NavBar */}
        <div className="w3-hide-medium w3-hide-large">
          <Menu right id={ "sidebar" }
            pageWrapId={ "page-wrap" }
            outerContainerId={ "outer-container" }
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <Link to="/" onClick={() => this.closeMenu()} >
              <p className="menu-item">Home</p>
            </Link>
            <Link to="/shows" onClick={() => this.closeMenu()}>
              <p className="menu-item">Entertainment</p>
            </Link>
            <Link to="/carte/produits" onClick={() => this.closeMenu()}>
              <p className="menu-item">Our Products</p>
            </Link>
            <Link to="/a_propos/presentation" onClick={() => this.closeMenu()}>
              <p className="menu-item">About us</p>
            </Link>
            <Link to="/a_propos/contact" onClick={() => this.closeMenu()}>
              <p className="menu-item">Contact</p>
            </Link>
            <div className="w3-left">
              <a href="http://en.7artcafe.fr" onClick={() => this.closeMenu()}>
                  <img className="img-drapeau-en w3-left" src={img_en}/>
              </a>
              <a href="http://fr.7artcafe.fr" onClick={() => this.closeMenu()}>
                  <img className="img-drapeau-fr w3-right" src={img_fr}/>
              </a>
            </div>
            <p className="numero w3-text-white">01.77.85.51.18</p>
          </Menu>
        </div>
      </header>
    )
  }
}
  

export default NavBar