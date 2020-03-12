import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Dashboard from './dashboard';
import {useEffect} from 'react'
const Home = (props) => {

    useEffect(() => {
        props.fetchData()
    })
    return (
        <div>
            <Header></Header>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    )
}

export default Home