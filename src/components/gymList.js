import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Accordion from 'react-bootstrap/Accordion'
import { ArrowRight } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup'
const GymList = () => {
    return(
        <ListGroup>
            <ListGroup.Item>
            <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            Click Me
                        <Accordion.Toggle as={ArrowRight} variant="link" eventKey="0">
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <Card>
                            {/* <Card.Img variant="top" src="https://www.plusfitness.co.in/media/images/Strength_1.2e16d0ba.fill-1000x600.jpg" /> */}
                            <Card.Body>
                            <Card.Title>Best Gyms in NCR</Card.Title>
                            <Card.Text>
                                Explore the most reputed gyms across Delhi NCR.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Card.Link href="#">Add to Cart</Card.Link>
                            <Card.Link href="#">Buy</Card.Link>
                            </Card.Footer>
                        </Card>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>    
                </Accordion>
            </ListGroup.Item>
            <ListGroup.Item>
            <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            Click Me
                        <Accordion.Toggle as={ArrowRight} variant="link" eventKey="0">
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <Card>
                            {/* <Card.Img variant="top" src="https://www.plusfitness.co.in/media/images/Strength_1.2e16d0ba.fill-1000x600.jpg" /> */}
                            <Card.Body>
                            <Card.Title>Best Gyms in NCR</Card.Title>
                            <Card.Text>
                                Explore the most reputed gyms across Delhi NCR.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Card.Link href="#">Add to Cart</Card.Link>
                            <Card.Link href="#">Buy</Card.Link>
                            </Card.Footer>
                        </Card>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>    
                </Accordion>
            </ListGroup.Item>
        </ListGroup>
        // <CardDeck style={{padding:"8%"}}>
        //     <Card>
        //         <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/side-view-muscular-couple-doing-600w-296937782.jpg" />
        //         <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //             </Card.Text>
        //         </Card.Body>
        //         <Accordion defaultActiveKey="0">
        //             <Card>
        //                 <Card.Header>
        //                     Click Me
        //                 <Accordion.Toggle as={ArrowRight} variant="link" eventKey="0">
        //                 </Accordion.Toggle>
        //                 </Card.Header>
        //                 <Accordion.Collapse eventKey="0">
        //                 <Card.Body>
        //                 <Card>
        //                     <Card.Img variant="top" src="https://www.plusfitness.co.in/media/images/Strength_1.2e16d0ba.fill-1000x600.jpg" />
        //                     <Card.Body>
        //                     <Card.Title>Best Gyms in NCR</Card.Title>
        //                     <Card.Text>
        //                         Explore the most reputed gyms across Delhi NCR.
        //                     </Card.Text>
        //                     </Card.Body>
        //                     <Card.Footer>
        //                     <Card.Link href="#">Add to Cart</Card.Link>
        //                     <Card.Link href="#">Buy</Card.Link>
        //                     </Card.Footer>
        //                 </Card>
        //                 </Card.Body>
        //                 </Accordion.Collapse>
        //             </Card>    
        //         </Accordion>
        //         <Card.Body>
        //         </Card.Body>
        //     </Card>
        // </CardDeck>
    )
}
export default GymList