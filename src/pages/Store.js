
import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productsStore';

function Success() {
    return (
        <>
            <h1 align="center" className='p-3'>Welcome to our store</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((item, idx) => (
                    <Col align="center" key={idx}>
                        <h1>{item.title}</h1>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Success;