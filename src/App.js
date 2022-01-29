import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Books from './components/Books';
import BookPage from './components/BookPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Routes exact path="/" component={Books} />
          <Routes exact path="/book/:id" component={BookPage} />
        </Fragment>
      </Router>
      

    )
  }
}

export default App;