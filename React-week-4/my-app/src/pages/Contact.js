import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Contact = () => {
  return (
    <>
        <h1>This is the Contact page</h1>
        <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://collection.cdn-pictorem.com/collection/900_Gunawan-Rb_Pikachu%20-%20Pokemon.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default Contact