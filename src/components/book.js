import React, { Component } from 'react'
import SearchPage from './search'
import ResultPage from './results'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class Book extends Component {
    constructor(props){
        super(props);
        this.pages = ["Search","Result","Review","Confirmation"];
        this.state = {
        page:this.pages[0],
        nextReady : false,
        filledPages : [false,false,false,false],
        pageIndex : 0,
        end : false,
        searchParams : null,
        };
  }
     handleNext = () => {
    const i = this.state.pageIndex;
    this.setState({
      pageIndex : i+1,
      end : i >= 4,
      page : this.pages[i], 
    });
  }

  handlePrev = () => {
    const i = this.state.pageIndex;
    this.setState({
      pageIndex : i-1,
      end : false,
      page : this.pages[i], 
    });
  }

   handleSearch = (params) => {
    let i = this.state.filledPages;
    if(!params){   
      i[0] = false   
      this.setState({filledPages:i});
      return;
    }
    else {
      i[0] = true;
    this.setState({
      nextReady:true,
      searchFilled: true,
      filledPages : i,
      searchParams : params
    });
    }
  }

  getPageContent(pageIndex) {
    switch(pageIndex){
      case 0: 
        return <SearchPage onSearch={this.handleSearch}/>
      case 1:
       return <ResultPage params={this.state.searchParams} />
      default:
          return <SearchPage onSearch={this.handleSearch}/>
      }
  }
    render() {
        const index = this.state.pageIndex;
        const contentStyle = {margin: '0 16px'};

        return (
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
              <Stepper activeStep={index}>
                  <Step>
                    <StepLabel>{this.pages[0]}</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>{this.pages[1]}</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>{this.pages[2]}</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>{this.pages[3]}</StepLabel>
                  </Step>
            </Stepper>
            <div style={contentStyle}>
              {this.getPageContent(index)}
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={index === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={index === 3 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                  disabled={!this.state.filledPages[index]}
                />
              </div>
            </div>
          </div>
        );
    }
}

export default Book;