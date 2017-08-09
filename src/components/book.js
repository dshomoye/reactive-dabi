import React, { Component } from 'react'
import SearchPage from './search'
import ResultPage from './results'
import ReviewPage from './review'
import ConfirmPage from './confirm_book'
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
        filledPages : [false,false,false,false],
        pageIndex : 0,
        end : false,
        searchParams : null,
        tripInfo : null,
        returnInfo : null
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
      searchFilled: true,
      filledPages : i,
      searchParams : params
    });
    }
  }

  handleResult = (trip, ret) => {
    let i = this.state.filledPages;
    if(!trip){
      i[1] = false
      this.setState({
        filledPages:i
      })
    }
    else{
    i[1] = true
    i[2] = true
    this.setState({
      tripInfo : trip,
      returnInfo : ret,
      filledPages : i
    })
    }

  }

  getPageContent(pageIndex) {
    switch(pageIndex){
      case 0: 
        return <SearchPage onSearch={this.handleSearch}/>
      case 1:
       return <ResultPage params={this.state.searchParams} onClick={this.handleResult}/>
      case 2:
        return <ReviewPage tripInfo={this.state.tripInfo} returnInfo={this.state.returnInfo}/>;
      case 3:
        return <ConfirmPage />
        default:
          return <SearchPage onSearch={this.handleSearch}/>
      }
  }
    render() {
        const index = this.state.pageIndex;
        const contentStyle = {margin: '0 16px'};
        let btnLabel = "Next"
        if(index === 0){
          btnLabel = "Search"
        }
        else if(index===2){
          btnLabel = "Confirm"
        }
        else if(index === 3){
          btnLabel = "Finish"
        }

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
                  label={btnLabel}
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