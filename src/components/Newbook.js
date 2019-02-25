import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class Newbook extends Component{

    constructor(props){
        super(props);
        this.state = {
            book : null,
            id : null,
            name : null,
            price : null,
            actor : null
        }
    }

    componentDidMount(){

    }

 async   renderData()
    {
    await    const addNew = ()=>{
            this.setState({
                id : document.getElementById("id").value,
                name : document.getElementById("name").value,
                price : document.getElementById("price").value,
                actor : document.getElementById("actor").value    
            });
        }
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
                                <h3>ID :</h3>
                            </div>
                            <div className = "col-sm-8">
                                <input id="id" type="text"></input>
                            </div>
                        </div>
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