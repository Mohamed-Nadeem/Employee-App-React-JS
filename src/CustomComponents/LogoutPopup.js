import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';

const logoutPopUp = (props) => {

       // method to log out
      const logOut = (e) => {
        sessionStorage.removeItem("LoggedIn");
        e.preventDefault();
        window.location.href = "/login";
    }

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
           Logout
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            Do you want to logout?
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            <Button variant="warning" onClick={(e) => logOut(e)}>Logout</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default logoutPopUp;