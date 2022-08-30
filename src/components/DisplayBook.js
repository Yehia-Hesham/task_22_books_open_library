import React from "react";
// import Card from 'react-bootstrap/Card';
import { unmountComponentAtNode} from "react-dom";
import "./DisplayBooks.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
 

class DisplayBook extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            moreMenu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.PopUpMenu = this.PopUpMenu.bind(this)
    }

    toggleMenu(){
        this.setState({moreMenu: !this.state.moreMenu})
    }

    PopUpMenu() {
        return (
          <ul className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a clasclassName="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </ul>
        );
    }

    render() {
        console.log(this.props)
        console.log(`https://covers.openlibrary.org/b/id/${this.props.book.cover_i}-L.jpg`)
        return (
            <div className="col-lg-3 col-sm-12" key={this.props.index}>
                <div  className="card">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <div  className="card-body cardBody">
                        <img  src = {`https://covers.openlibrary.org/b/id/${this.props.book.cover_i}-L.jpg`}></img>
                    <div  className="card-title"><h3 className="header h3 title">{this.props.book.title}</h3></div>
                    <div  className="card-text authors">{"Author(s): " + this.props.book.author_name}</div>
                    {/* <button className ="more_button" variant="primary" onClick={this.toggleMenu}>+</button> */}
                    <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    
                    </button>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={() => {
                            this.props.fnBundle.filterAll(this.props.book)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.search)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.reading)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.read)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.want)
                        } }>Remove</a></li>
                        <li><a className="dropdown-item" onClick={() => {
                            this.props.fnBundle.addwantToReadBooks(this.props.book)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.search)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.reading)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.read)
                            // this.props.fnBundle.add(this.props.book,this.props.listBundle.want)
                        }}>Want to Read</a></li>
                        <li><a className="dropdown-item" onClick={() => {
                            this.props.fnBundle.addReadBooks(this.props.book)
                            console.log("Add Read")
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.search)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.reading)
                            // this.props.fnBundle.add(this.props.book,this.props.listBundle.read)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.want)
                        }}>Read</a></li>
                        <li><a className="dropdown-item" onClick={() => {
                            this.props.fnBundle.addReadingBooks(this.props.book)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.search)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.read)
                            // this.props.fnBundle.remove(this.props.book,this.props.listBundle.want)
                            // this.props.fnBundle.add(this.props.book,this.props.listBundle.reading)
                        }}>Reading</a></li>
                    </ul>
                    </div>
                    {/* {this.state.moreMenu && this.PopUpMenu()} */}
                    </div>
                </div >
            </div>
        )
    }
}

export default DisplayBook;

//export default withButton(DisplayBook)