import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import PropTypes from 'prop-types'
const WNavDropDown = (props) => {
    return (
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            {props.href.map(link =>{
                return (
                    <NavDropdown.Item href={link}>Action</NavDropdown.Item>
                )
            })}  
        </NavDropdown>
    )
}

WNavDropDown.defaultProps = {
    title : "",
    href : []
}

WNavDropDown.propTypes = {
    title : PropTypes.string,
    href : PropTypes.array
} 
export default WNavDropDown