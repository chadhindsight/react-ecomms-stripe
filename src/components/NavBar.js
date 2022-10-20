import React from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';

function NavBarComponent() {
    return (
        <Navbar expand="sm">
            <Navbar.Brand href="/"> Chad's Ecommerce Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button>Cart Items</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBarComponent;