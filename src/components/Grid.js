import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function SpacingGrid(props) {

  return (
    <Container>
        <Row className="ml-5 ml-lg-0">
            {props.children}
        </Row>
    </Container>
  );
}
