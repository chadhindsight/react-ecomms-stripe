import React from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap'

const ProductCard = (props) => {
    // destructure product from props
    const { product } = props;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;