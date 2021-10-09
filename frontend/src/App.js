import React, {useState} from 'react'

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//pages
import HomeScreen from './pages/homeScreen/HomeScreen';
import ProductScreen from './pages/productScreen/ProductScreen';
import CartScreen from './pages/cartScreen/CartScreen';

//components
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';


function App() {

  const [sideToggle,setSideToggle] = useState(false)

  return (
    <Router>
      {/* Navbar */}
      <Navbar toggleStatus={setSideToggle} />
       {/* backDrop */}
       <Backdrop show={sideToggle} toggleStatus={setSideToggle} />
      {/* sideDrawer */}
      <SideDrawer show={sideToggle} toggleStatus={setSideToggle} />
     <main>
        <Switch>
          {/* homeScreen */}
          <Route exact path="/" component={HomeScreen} />
          {/* productScreen */}
          <Route exact path="/product/:id" component={ProductScreen} />
          {/* cartScreen */}
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
