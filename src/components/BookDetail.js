import React, { Component } from 'react';

class BookDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            book : null
        }
    }

async  componentDidMount(){
        await fetch('http://localhost:8080/book/'+this.props.match.params.id)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            this.setState({book : data});
        }); 
    }

    renderData()
    {
        let {book} = this.state
        return (
            <div>
                <p>ID : {book.id}</p>
                <p>Name : {book.name}</p>
                <p>Price : {book.price}</p>
                <p>Actor : {book.actor}</p>
            </div>
        );
    }

    back = e => {
        e.stopPropagation();
        this.props.history.goBack();
    }
    render(){
        return(
                <div
                    className="modal"
                    style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    border: "2px solid #444"
                    }}>
                    <h1>Book detail</h1>
                    {this.state.book && this.renderData()}
                    <button type="button" onClick={this.back}>Close</button>
                </div>
        );
    }
}
export default BookDetail;