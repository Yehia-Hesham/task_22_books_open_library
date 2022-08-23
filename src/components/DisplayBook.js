import React from "react";
// import Card from 'react-bootstrap/Card';
import { unmountComponentAtNode} from "react-dom";
import "./DisplayBooks.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

class DisplayBook extends React.Component{


    // constructor() {
    //     super()       
    // }

    render() {
        console.log(this.props)
        console.log(`https://covers.openlibrary.org/b/oclc/${this.props.book.oclc}-L.jpg`)
        return (
            <div className="col-lg-3 col-sm-12" key={this.props.index}>
                <div  className="card">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <div  className="card-body cardBody">
                        <img  src = {`https://covers.openlibrary.org/b/oclc/${this.props.book.oclc}-L.jpg`}></img>
                    <div  className="card-title"><h3 className="header h3 title">{this.props.book.title}</h3></div>
                    <div  className="card-text authors">{"Author(s): " + this.props.book.author_name.join(", ")}</div>
                    <button className ="more_button" variant="primary">+</button>
                    </div>
                </div >
            </div>
        )
    }
}

export default DisplayBook;

//export default withButton(DisplayBook)