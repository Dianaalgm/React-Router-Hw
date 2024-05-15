import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          {/* <Switch> */}
          <Routes>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/products' component={Product} />
          </Routes>
          {/* </Switch> */}

        </main>
        <Footer/>
      
      </div>
    </Router>
  );

}

export default App;
