import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';

const deletePopUp = (props) => {

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
           Delete Record
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            Do you want to delete the record permanently?
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            <Button variant="warning" onClick={() => props.deleteClick()}>Delete</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default deletePopUp;