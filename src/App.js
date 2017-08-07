import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import SearchPage from './components/search'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.pages = ["Search","Result","Review","Confirmation"];
    this.state = {
      logged:true,
      page:this.pages[0],
      nextReady : false,
      searchFilled : false,
      pageIndex : 0,
      end : false,
    };
  }

  handleNext = () => {
    const i = this.state.pageIndex;
    this.setState({
      pageIndex : i+1,
      end : i >= 4,
      page : this.pages[i], 
    });
    if(!this.state.searchFilled){ 
      this.setState({
        nextReady:false,
      });
    }
  }

  handlePrev = () => {
    const i = this.state.pageIndex;
    this.setState({
      pageIndex : i-1,
      end : false,
      page : this.pages[i], 
    });
    if(!this.state.searchFilled){ 
      this.setState({
        nextReady:false,
      });
  }
  }

  handleSignOut = () => {
    this.setState(
      {logged :false}
    );
  }

  handleSearch = (params) => {
    console.log(params)
    this.setState({
      nextReady:true,
      searchFilled: true
    });
  }

  getPageContent(pageIndex) {
    switch(pageIndex){
      case 0: 
        return <SearchPage onSearch={this.handleSearch}/>
      default:
          return <SearchPage onSearch={this.handleSearch}/>
      }
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
          <Header logged={this.state.logged} signOut = {this.handleSignOut} />
          {this.getPageContent(this.state.pageIndex)}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
