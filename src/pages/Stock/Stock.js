import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import './Stock.css'

const Stock = ({ stock }) => {
    const { _id, name, img, article, value, quantity, supplier } = stock;

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
                <Card.Body className='btn-body  text-center '>
                    <Card.Link className='text-light update-btn ' href="#">Update Stock</Card.Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Stock;