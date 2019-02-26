import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import BookDetail from './BookDetail';
import EditBook from './EditBook';
import DeleteBook from './DeleteBook';

class Books extends Component{

    constructor(pops)
    {
        super(pops);
        this.state = {
            books :[]
        }
        this.search = this.search.bind(this);
        this.getAllBook = this.getAllBook.bind(this);
    }

    componentDidMount()
    {
        this.getAllBook();
    }

async   getAllBook()
    {
        await fetch('http://localhost:8080/book/all')
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            this.setState({books : Array.from(data)});
        }); 
    }

    async   componentWillReceiveProps()
    {
        if(document.getElementById("value").value === ""){
        await fetch('http://localhost:8080/book/all')
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            this.setState({books : Array.from(data)});
        }); 
    }
    }

    renderRow()
    {
        let {books} = this.state;   
        return books.map((book) =>
            <tr key ={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.price}</td>
                <td><Button variant="success"><Link to={`/books/view/${book.id}`} style ={{color: 'white'}} >View</Link></Button></td>
                <td><Button variant="secondary"><Link to={`/books/edit/${book.id}`} style ={{color: 'white'}} >Edit</Link></Button></td>
                <td><Button variant="danger"><Link to={`/books/delete/${book.id}`} style ={{color: 'white'}} >Delele</Link></Button></td>
            </tr>   
        )
    }

async    search()
    {
        let value = document.getElementById("value").value;
        if(value === ""){
            this.getAllBook();
            return;
        }
        await fetch('http://localhost:8080/book/find/'+value)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            this.setState({books : Array.from(data)});
        });
    }

    render()
    {
        let renderRow = this.renderRow();
        return (        
            <div className="container">
                <input type="text" id="value" ></input>
                <Button variant="info" onClick={this.search}>Search</Button>
                <Router>
                    <div>
                        <Route path="/books/view/:id" component= {BookDetail} />
                        <Route path="/books/edit/:id" component= {EditBook} />
                        <Route path="/books/delete/:id" component= {DeleteBook} />
                            <div>   
                                <table style = {{width: '100%'}}>
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