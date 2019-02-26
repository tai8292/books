import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Books from './components/Books';
import Home from './components/Home';
import Newbook from './components/Newbook';
import { Button } from 'react-bootstrap';

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
            <Button variant="primary" style = {{right :'70%'}}><Link style={{color : "white"}} to="/new">New Book </Link></Button>
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
