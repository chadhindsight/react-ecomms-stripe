
import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';

function Store() {
    return (
        <>
            <h1 align="center" className="p-3">Welcome to our store</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((item, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;