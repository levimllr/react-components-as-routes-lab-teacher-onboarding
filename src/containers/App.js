import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route path="/" component={Home}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/actors" component={Actors} ></Route>
        <Route path="/directors" component={Directors}></Route>
      </div>
    </Router>
  );
};

export default App
