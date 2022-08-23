import { Component } from "react";
import DisplayBooksList from "./DisplayBooksList";

class SearchComponent extends Component{
    state = {
      searchterm: ''
    }

    onFormSubmit= event => {
      event.preventDefault();
      this.props.onSubmit(this.state.searchterm);
    }

    render(){
      return (
          <div className="ui segment">
              <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="field">
                      <label>Image Search</label>
                      <input type = 'text' value={this.state.searchsearchterm} onChange={(e) => this.setState({searchterm: e.target.value})} />
                      <h2>{this.state.searchterm}</h2>
                  </div>
              </form>
          </div>
      )
  }
}

export default SearchComponent;