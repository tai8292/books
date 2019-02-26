import React, { Component } from 'react';

class DeleteBook extends Component{

    back = e => {
        e.stopPropagation();
        this.props.history.goBack();
    }

    delete = e => {
        fetch('http://localhost:8080/book/delete/'+this.props.match.params.id,{method :'delete'})
        .then((response) =>{
            if(response.status === 200){
                this.props.history.goBack();
            }
        })
    }

    render()
    {
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
            <h1>Delete detail</h1>
            <button type="button" className="btn btn-danger" onClick={this.delete}>Delete</button>
            <button type="button" className = "btn btn-primary" onClick={this.back}>Close</button>
        </div>
        )}
}

export default DeleteBook;