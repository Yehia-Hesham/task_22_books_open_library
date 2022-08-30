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
            selectedBook: {},
            searchBooks: [],
            readingBooks: [],
            readBooks: [],
            wantToReadBooks: []

        }

        this.fnBundle = {
            // remove:this.removeBook,
            // add:this.addNewBook,
            // switch: this.switchBook
            searchBooks: this.searchBooks,
            addReadBooks: this.addReadBooks,
            addReadingBooks: this.addReadingBooks,
            addwantToReadBooks: this.addwantToReadBooks,
            filterAll: this.filterAll
        }

        this.listBundle = {
            search: this.state.searchBooks,
            reading: this.state.readingBooks,
            read: this.state.readBooks,
            want: this.state.wantToReadBooks
        }

        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.toggle = this.toggle.bind(this)

        // this.switchBook = this.switchBook.bind(this)
        // this.addNewBook = this.addNewBook.bind(this)
        // this.removeBook = this.removeBook.bind(this)
    }

    filterAll = (book) => {
        let id = book.seed[0]
        this.setState({readBooks: this.state.readBooks.filter((book) => book.seed[0] !== id)})
        this.setState({readingBooks: this.state.readingBooks.filter((book) => book.seed[0] !== id)})
        this.setState({searchBooks: this.state.searchBooks.filter((book) => book.seed[0] !== id)})
        this.setState({wantToReadBooks: this.state.wantToReadBooks.filter((book) => book.seed[0] !== id)})
        // newList = newList.concat(book)
        // this.setState({oldList:filtered_list });
    }

    addReadBooks = (book) =>{
        this.filterAll(book)
        this.setState({readBooks: this.state.readBooks.concat(book)});
        console.log("Read: ", this.state.readBooks)
    }

    addReadingBooks = (book) =>{
        this.filterAll(book)
        this.setState({readingBooks: this.state.readingBooks.concat(book)});
        console.log("Reading: ", this.state.readingBooks)
    }

    addwantToReadBooks = (book) =>{
        this.filterAll(book)
        this.setState({wantToReadBooks: this.state.wantToReadBooks.concat(book)});
        console.log("Want to Read: ", this.state.wantToReadBooks)
    }

    // addNewBook = (book,newList) => {
    //     this.setState({newList: newList.concat(book)});
    //     console.log("add to new List", newList)
    // }

    // removeBook = (book,oldList) => {
    //     console.log(book,oldList)
    //     console.log(this.state.searchBooks)
        
    //     let id = book.seed[0]
    //     let filtered_list = oldList.filter((book) => book.seed[0] !== id)
    //     this.setState({oldList:  filtered_list});
    //     console.log("Old List ", filtered_list)
    // }
    
    toggle(){
        this.setState({searching : !this.state.searching})
    }

    onSearchSubmit = async (term) => {
        let searchTerm = term //term.replace(" ","+");
        console.log("SearchTerm",searchTerm)
        fetch('http://openlibrary.org/search.json?q=' + searchTerm + '&limit=20')
            .then(response => response.json())
            .then(books => {
                console.log("Books Response: ", books.docs);
                this.setState({searchBooks: books.docs})
            })
    }

    componentDidUpdate(term){

    }



    render() {

        return (this.state.searching) ? (
        <div className="Book_Listing">
            <SearchComponent onSubmit={this.onSearchSubmit}/>
            <DisplayBooksList books={this.state.searchBooks} title='Search Results' fnBundle={this.fnBundle} />
            <button className="toggle_button" style={{color:'blue'}} onClick={this.toggle}><p>Toggle</p></button>
            
        </div>
        ) : (
        <div className="Book_Listing">
            <DisplayBooksList books={this.state.readingBooks} title='Reading'  fnBundle={this.fnBundle}/>
            <br/>
            <DisplayBooksList books={this.state.readBooks} title='Read'  fnBundle={this.fnBundle}/>
            <br/>
            <DisplayBooksList books={this.state.wantToReadBooks} title='Want to Read'  fnBundle={this.fnBundle}/>
            <button className="toggle_button" style={{color:'blue'}} onClick={this.toggle}><p>Toggle</p></button>
        </div>)
        <
    }
}

export default FinalComponent;