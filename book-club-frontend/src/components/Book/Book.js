import React, { Component } from 'react';
import Axios from 'axios';
import "./Book.css"

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
                <h1 className="book-title">{book.title}</h1>
                <h2 className="book-author">{book.author}</h2>
                <img className="book-image" src={book.image} />
            </div>
        );
    }
}


export default Book;