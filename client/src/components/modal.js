import React, { useEffect, useState } from 'react'
import '../css/carte.css'
import img_menu_sandwich from '../images/fast-food-2132863_1280.jpg'
import {Modal, Button} from 'react-bootstrap'
const url_sandwichs = "http://localhost:4242/carte/plats/sandwich"

function ModalTest(test){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (test === "open"){
        setShow(true)
    }
    else{
        setShow(false)
    }
  
    return(
        <>
            {/* Modal Sandwichs */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalTest