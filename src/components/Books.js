import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import BookDetail from './BookDetail';

class Books extends Component{

    constructor(pops)
    {
        super(pops);
        this.state = {
            books :[]
        }
    }

async componentDidMount()
    {
       await fetch('http://localhost:3001/url')
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            this.setState({books : Array.from(data)});
        }); 
    }

    renderRow()
    {
        let {books} = this.state;
        return books.map((book) =>
            <tr key ={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.price}</td>
                <td><Button variant="success"><Link to={`/books/${book.id}`} style ={{color: 'white'}} >Chi tiết</Link></Button></td>
            </tr>   
        )
    }

    render()
    {
        let renderRow = this.renderRow();
        return (
            <div className="container">
                <Router>
                    <div>
                        <Route path="/books/:id" component= {BookDetail} />
                            <div>   
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderRow}
                                    </tbody>
                                </table>
                            </div>      
                    </div>
                </Router>
            </div>
        );
    }
}
export default Books;