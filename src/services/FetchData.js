
class FetchData{

    constructor()
    {
        this.state = {
            books : []
        }
    }

async getData()
    {
        await fetch('http://localhost:3001/url')
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            console.log("1");
            this.setState({books : data});
        });
    }

    sendData()
    {
        console.log("2");
        this.getData();
        return  Array.from(this.state.books);
    }

}
export default FetchData;