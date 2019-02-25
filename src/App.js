import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Books from './components/Books';
import Home from './components/Home';
import { Button } from 'react-bootstrap';
import Newbook from './components/Newbook';

class App extends Component {
  render() {
    return (
      <div className = "container"> 
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
            </ul>
            <button type="button" className = "btn btn-danger" style = {{right :'70%'}}><Link to="/new">New Book </Link></button>
            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/new" component={Newbook} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
