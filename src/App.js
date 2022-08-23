import { Component } from 'react';
import './App.css';
import DisplayBook from './components/DisplayBook';
import BooksData from './components/DisplayBooksList';
// import ModalPage from './components/Modal';
import FinalComponent from './components/finalComponent';


class App extends Component{

  render(){
  return (
    <div className="App">
      <FinalComponent/>    
    </div>
  );
  }


}

export default App;
