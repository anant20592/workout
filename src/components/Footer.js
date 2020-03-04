import React from 'react'
import WNavbar from "./wNavbar";
const Footer = () => {
    let navLinks = [{title : "Home"},{title : "Link"}]
    let href = [{title : "Home"},{title : "Link"}]
    return(
        <WNavbar brandTitle="Workout" navLinks={navLinks} href={href}></WNavbar>
    )
}

export default Footer;