import React, { useEffect, useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import ModalTest from '../components/modal.js'
import Modal_Burgers from '../components/modal_burgers.js'
import img_menu_burger from '../images/hamburger-1238246_1920.jpg'
import img_menu_sandwich from '../images/fast-food-2132863_1280.jpg'
import img_menu_pizza from '../images/pizza-1344720_1920.jpg'
import '../css/Modal.css'
const url_menus = "http://localhost:4242/carte"
const url_sandwichs = "http://localhost:4242/carte/plats/sandwich"


class Test extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
          modalShow: false,
          loading: true
        }
    }

    handleModal(){
        this.setState({modalShow: !this.state.modalShow})
        if (this.state.modalShow === true){
            document.getElementById('id01').style.display='block'
        }
        else{
            document.getElementById('id01').style.display='none'
        }
        console.log(this.state.modalShow);
    }
    
    render(){
        
        return(
            <>
                <div>
                    {/* affichage des menus */}
                    <div class="w3-container">
                        <h2>W3.CSS Modal</h2>
                        <button onclick={()=>this.handleModal()} class="w3-button w3-black">Open Modal</button>

                        <div id="id01" class="w3-modal">
                            <div class="w3-modal-content">
                            <div class="w3-container">
                                <span onclick={()=>this.handleModal()} class="w3-button w3-display-topright">&times;</span>
                                <p>Some text. Some text. Some text.</p>
                                <p>Some text. Some text. Some text.</p>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
            
        )
    }
}

export default Test