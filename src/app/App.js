import React , {Component} from 'react';
import './App.css';
import SpacingGrid from '../components/Grid'
import CustomCard from '../components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { BrowserRouter as Router, Route, Switch ,Link } from "react-router-dom";
import GymList from '../components/gymList';
import ShoppingCart from '../components/ShoppingCart';
import Checkout from '../components/checkout';
import Home from './home';

class  App extends Component {
  render() {
  return (
      <Layout>
        <Router>
          <SpacingGrid>
           <Route exact path='/' component={Home}/>
            {/* <Switch>
              <Route exact path="/">
                <CustomCard></CustomCard>
              </Route>
              <Route exact path="/list">
                <GymList></GymList>
              </Route>
              <Route exact path="/cart">
                <ShoppingCart></ShoppingCart>
              </Route>
              <Route exact path="/checkout">
                <Checkout></Checkout>
              </Route>
            </Switch> */}
          </SpacingGrid>
        </Router>
      </Layout>
  );
}
}

export default App;
