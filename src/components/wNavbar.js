import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import WNavDropdown from '../components/wNavDropDown'
import PropTypes from 'prop-types' 
const WNavbar = (props) => {
    return(
        <Navbar bg="light" expand="lg" fixed="bottom">
            <Navbar.Brand href="#home">{props.brandTitle}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {props.navLinks.map( links => {
                        return (
                            <Nav.Link href="#home">{links.title}</Nav.Link>
                        )
                    })}
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
                <WNavDropdown title="Dropdown" href={props.href}>
                </WNavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

WNavbar.defaultProps = {
    brandTitle : "Hello" ,
    navLinks : []
}

WNavbar.propTypes = {
    brandTitle: PropTypes.string.isRequired,
    navLinks : PropTypes.arrayOf(Object)
  };
export default WNavbar