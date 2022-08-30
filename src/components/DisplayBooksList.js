import React from "react";
import Cards from './DisplayBook';
import DisplayBook from "./DisplayBook";

import { unmountComponentAtNode } from "react-dom";

class DisplayBooksList extends React.Component{
    constructor(props) {
        super(props)   
        // this.state = {
        //     books: []
        // }     
    }

    // componentDidMount() {
    //     fetch('http://openlibrary.org/search.json?q=guide&limit=20')
    //         .then(response => response.json())
    //         .then(books => {
    //             console.log("Books Response: ", books.docs);
    //             this.setState({
    //                 books: books.docs
    //             })
    //         })
    // }
    
    // removebook(id){
    //     let books = this.state.books;
    //     console.log("before removebook()", books);
    //     const newlist = books.filter(book => book.id !== id)
    //     this.setState({books: newlist})
    //     console.log("before removebook() ",newlist)
    // }

    render() {
        return (
            <div className="container">
                <h1 className="h1 header">{this.props.title}</h1>
                <div className="gx-5 gy-5 row flex-row">
                    {this.props.books.map((book, i) => {
                        return(
                        <DisplayBook key={i} index={i} book={book} fnBundle={this.props.fnBundle}/> //removebook={this.removebook.bind(this)}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default DisplayBooksList;


