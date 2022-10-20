import { useState } from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';

function NavBarComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/"> Chad's Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button>Cart Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>

            </Modal>
        </>
    );
};

export default NavBarComponent;