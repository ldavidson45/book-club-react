import React, { Component } from 'react';
import Axios from 'axios';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBook: {undefined}

        }
    }

    componentDidMount() {
        let selectedBookId = this.props.match.params.id;
        
        Axios.get("http://localhost:3000/api/books/"+selectedBookId)
        .then(res => {
            return this.setState({
                selectedBook: res.data
            })
        })

    }
    render() {
      let book = this.state.selectedBook

        return (
            
            <div>
                <h1>{book.title}</h1>
                <img src={book.image} />
                <h2>{book.author}</h2>
            </div>
        );
    }
}


export default Book;