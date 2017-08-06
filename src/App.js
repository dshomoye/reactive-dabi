import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import SearchPage from './components/search'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      logged:true,
      page:"search"
    };
  }

  handleSignOut = () => {
    this.setState(
      {logged :false}
    );
  }

  render() {
    console.log("Sign out in App " + this.state.logged)

    let page = this.state.page;

    switch (page) {
      case "search":
        page = <SearchPage />
        break;
    
      default:
        break;
    }

    return (
      <MuiThemeProvider>
      <div className="App">
          <Header logged={this.state.logged} signOut = {this.handleSignOut} />
          {page}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
