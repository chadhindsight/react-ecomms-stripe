import { useState, useContext } from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from '../CartContext'

function NavBarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // A var that keeps track of how many items are in a user's cart
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/"> Chad's Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button>Cart {productsCount}Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>

            </Modal>
        </>
    );
};

export default NavBarComponent;