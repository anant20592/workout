import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Dashboard from './dashboard';

const Home = (props) => {
    console.log("props-- " ,props)
    return (
        <div>
            <Header></Header>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    )
}

export default Home