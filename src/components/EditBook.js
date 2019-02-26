import React, { Component } from 'react';

class EditBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            book : null
        }
        this.saveBook = this.saveBook.bind(this);
        this.editBook = this.editBook.bind(this);
    }

 async   componentDidMount()
    {
        await fetch('http://localhost:8080/book/'+this.props.match.params.id)
        .then((response) =>{
            return response.json();
        })
        .then(async (data) =>{
            this.setState({book : data});
        });
        let {book} = this.state
        document.getElementById('id').value = book.id;
        document.getElementById('name').value = book.name;
        document.getElementById('price').value = book.price;
        document.getElementById('actor').value = book.actor;
    }


async    saveBook()
    {
        const idb = document.getElementById('id').value;
        const nameb = document.getElementById('name').value;
        const priceb = document.getElementById('price').value;
        const actorb = document.getElementById('actor').value;
await this.setState({
            book : {
                id : idb,
                name : nameb,
                price : priceb,
                actor : actorb
            }
        });
        this.editBook();
    }

async    editBook()
    {
        await    fetch('http://localhost:8080/book/edit',{method: 'put', body : JSON.stringify(this.state.book) , headers :{
            "Content-Type" : "application/json"
        }})
            .then((response) =>{
                if(response.status === 200)
                    this.props.history.goBack();
            })
    }

    back = e => {
        e.stopPropagation();
        this.props.history.goBack();
    }
    render(){
        if(this.state.book === null)
            return null;
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
                    <h1>Edit Book</h1>
                    <form>
                        <div className = "row">
                            <div className = "col-sm-4">
                                <h3>ID :</h3>
                            </div>
                            <div className = "col-sm-8">
                                <input id="id" type="text" readOnly ></input>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-sm-4">
                                <h3>Name :</h3>
                            </div>
                            <div className = "col-sm-8">
                                <input id="name" type="text"   ></input>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-sm-4">
                                <h3>Price :</h3>
                            </div>
                            <div className = "col-sm-8">
                                <input id="price" type="number"   ></input>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-sm-4">
                                <h3>Actor :</h3>
                            </div>
                            <div className = "col-sm-8">
                                <input id="actor" type="text"  ></input>
                            </div>
                        </div>
                    <button type="button" className="btn btn-primary" onClick={this.saveBook}>Save</button>
                    <button type="button" style={{marginLeft: '10px', width : '100px'}} className="btn btn-danger" onClick={this.back}>Close</button>
                    </form>
                </div>
        );
    }
}

export default EditBook;