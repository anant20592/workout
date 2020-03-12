import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const Dashboard = () => {
    return (
        <CardDeck style={{padding:"8%"}}>
            <Card>
                {/* <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/side-view-muscular-couple-doing-600w-296937782.jpg" /> */}
                <Card.Body>
                <Card.Title>Training Programs</Card.Title>
                <Card.Text>
                    100+ health programs to choose.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Explore More</small>
                </Card.Footer>
            </Card>
            <Card>
                {/* <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71db7i95H8L._SX679_.jpg" /> */}
                <Card.Body>
                <Card.Title>Gym Equipments</Card.Title>
                <Card.Text>
                    Explore and buy best quality gym equipments at reasonble price.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Explore More</small>
                </Card.Footer>
            </Card>
            <Card>
                {/* <Card.Img variant="top" src="https://www.plusfitness.co.in/media/images/Strength_1.2e16d0ba.fill-1000x600.jpg" /> */}
                <Card.Body>
                <Card.Title>Best Gyms in NCR</Card.Title>
                <Card.Text>
                    Explore the most reputed gyms across Delhi NCR.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Explore More</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    )
}

export default Dashboard