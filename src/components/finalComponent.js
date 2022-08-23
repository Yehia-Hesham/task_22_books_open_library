import {Component} from "react";
import DisplayBooksList from "./DisplayBooksList";
import SearchComponent from "./SearchComponent";
import "./finalComponent.css"

class FinalComponent extends Component {

    constructor() {
        super()
        this.state = {
            searchterm: '',
            searching: true,
            searchBooks: [],
            readingBooks: [],
            readBooks: [],
            wantToReadBooks: []

        }
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        this.setState({searching : !this.state.searching})
    }
    async onSearchSubmit(term){
        let searchTerm = term.replace(" ","+");
        console.log("SearchTerm",searchTerm)
        fetch('http://openlibrary.org/search.json?q=' + searchTerm + '&limit=20')
            .then(response => response.json())
            .then(books => {
                console.log("Books Response: ", books.docs);
                this.setState({
                    searchBooks: books.docs
                })
            })
    }

    render() {

        return (this.state.searching) ? (
        <>
            <SearchComponent onSubmit={this.onSearchSubmit}/>
            <DisplayBooksList books={this.state.searchBooks} title='Search Results' />
            <button className="toggle_button" style={{color:'blue'}} onClick={this.toggle}><p>Toggle</p></button>
        </>
        ) : (
        <>
            <DisplayBooksList books={[]} title='Reading' />
            <DisplayBooksList books={[]} title='Read' />
            <DisplayBooksList books={[]} title='Want to Read' />
            <button className="toggle_button" style={{color:'blue'}} onClick={this.toggle}><p>Toggle</p></button>
        </>)
    }
}

export default FinalComponent;