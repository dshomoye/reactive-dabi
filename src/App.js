import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import Book from './components/book';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      logged:true,
      //actions book (0), reservations (1)
      action:0,
    };
  }

  handleSignOut = () => {
    this.setState(
      {logged :false}
    );
  }

  render() {
    //switch between action state to return correct page
      let action = <Book logged={this.state.logged}/>
    return (
      <MuiThemeProvider>
      <div className="App">
          <Header logged={this.state.logged} signOut = {this.handleSignOut} />
          {action}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
