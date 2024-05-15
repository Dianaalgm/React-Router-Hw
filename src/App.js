import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer' ;
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';



const App = () =>{
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route exact path='/' Component={Home} />
            <Route exact path='/about' Component={About} />
            <Route exact path='/products' Component={Product} />

          </Switch>

        </main>
        <Footer/>
      
      </div>
    </Router>
  );

}

export default App;
