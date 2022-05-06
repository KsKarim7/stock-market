import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Stock.css'

const Stock = ({ stock }) => {
    const { _id, name, img, article, value, quantity, supplier } = stock;

    const navigate = useNavigate();
    const navigateToStockDetail = id => {
        navigate(`/stock/${id}`)
    }

    return (
        <div>

            <Card className='bg-dark' style={{ width: '18rem' }} >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-light fw-bold'>{name}</Card.Title>
                    <Card.Text className='text-light'>
                        {article}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Supplier: {supplier}</ListGroupItem>
                    <ListGroupItem >Current Share value: <span className='fw-bold'>${value}</span> </ListGroupItem>
                    <ListGroupItem>Quality: {quantity}</ListGroupItem>
                </ListGroup>
                <Card.Body onClick={() => navigateToStockDetail(_id)} className='btn-body  text-center '>
                    <Card.Link className='text-light update-btn' href="#">Update Stock</Card.Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Stock;