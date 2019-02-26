import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'

class Newbook extends Component{

    constructor(props){
        super(props);
        this.state = {
            id : null,
            name : null,
            price : null,
            actor : null
        }
        this.renderData = this.renderData.bind(this);
        this.newBook = this.newBook.bind(this);
    }

    componentDidMount(){

    }

async    renderData(){
        const nameb = document.getElementById('name').value;
        const priceb = document.getElementById('price').value;
        const actorb = document.getElementById('actor').value;
   await     this.setState({
            name:nameb,
            price : priceb,
            actor : actorb
        });
        this.newBook();
    }

async    newBook(){
        let book = {
            "name" : this.state.name,
            "price" : this.state.price,
            "actor" : this.state.actor
        }
    await    fetch('http://localhost:8080/book/add',{method: 'post', body : JSON.stringify(book) , headers :{
        "Content-Type" : "application/json"
    }})
        .then((response) =>{
            if(response.status === 201)
                this.props.history.goBack();
        })
    }

    back = e => {
        e.stopPropagation();
        this.props.history.goBack();
    }
    render(){
        return(
                <div
                    className="modal container"
                    style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    border: "2px solid #444"
                    }}>
                    <h1>New Book</h1>
                    <form>
                        <div className = "row">
                            <div className = "col-sm-4">
                                <h3>Name :</h3>
                            </div>
                            <div className = "col-sm-8">
                                <input id="name" type="text"></input>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-sm-4">
                                <h3>Price :</h3>
                            </div>
                            <div className = "col-sm-8">
                                <input id="price" type="number"></input>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-sm-4">
                                <h3>Actor :</h3>
                            </div>
                            <div className = "col-sm-8">
                                <input id="actor" type="text"></input>
                            </div>
                        </div>
                    <button type="button" className="btn btn-primary" onClick={this.renderData}>Add New</button>
                    <button type="button" style={{marginLeft: '10px', width : '100px'}} className="btn btn-danger" onClick={this.back}>Close</button>
                    
                    </form>
                </div>
        );
    }
}
export default Newbook;