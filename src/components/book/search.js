import React, {Component} from 'react';
import TimeOfDayPicker from './timeOfDayPicker';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import Stations from './stations'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


const styles = {
  block: {
    margin: 20
  },
  paper : {
  maxHeight: 750,
  maxWidth: 500,
  margin: 50,
  textAlign: 'center',
  display: 'inline-block',
    }
};


class SearchPage extends Component{

    constructor(props){
        super(props);

        let defaultDate  = new Date();
        this.state = {
        //1 is anytime, 2 morning ...
        timeOfDay : "Anytime",
        date : defaultDate.toISOString().slice(0,10),
        roundTrip : false,
        originStation : null,
        destinationStation : null,
        returnTime : "Anytime",
        returnDate : defaultDate.toISOString().slice(0,10),
        }
    }

    handleTimeChange = (value) => {
        this.setState(
            {timeOfDay : value}
        );
    }

    handleDateChange = (e,date) => {
        this.setState(
            {date: date.toISOString().slice(0,10) },
            this.handleSearch);
    }

    handleRoundTripCheck= (e,checked) => {
        this.setState({
            roundTrip : checked
        },this.handleSearch)
    }

    handleOriginChange = (stationCode) => {
        if(!stationCode){
            this.props.onSearch(false);
            return;
        }
        this.setState({
            originStation : stationCode
        },this.handleSearch)
    }

    handleDestinationChange = (stationCode) => {
        if(!stationCode){
            this.props.onSearch(false);
            return;
        }
        this.setState({
            destinationStation : stationCode
        },this.handleSearch)
    }

    handleReturnTimeChange = (value) => {
        this.setState({
            returnTime : value
        },this.handleSearch)
    }

    handleReturnDateChange = (e,date) => {
        this.setState({
            returnDate : date.toISOString().slice(0,10)
        },this.handleSearch)
    }

    handleSearch = () => {
        if(this.state.originStation != null && this.state.destinationStation != null 
            &&(this.state.originStation !== this.state.destinationStation)
        ){
            this.props.onSearch(this.state)
        }
    }

    render() {

        if(this.state.roundTrip){
            var returnDetails = 
            <div>
                <Divider />
                <p> Return Time </p>
                <TimeOfDayPicker message="Time of return trip" timeChange = {this.handleReturnTimeChange}/>
                <p> Return Date </p>
                <DatePicker defaultDate={new Date()} onChange = {this.handleDateChange} hintText="Date of Return"/>
            </div>
        }
        else {
            returnDetails = <br/>
        }

        return (
            <div>
                <Paper style={styles.paper} zDepth={3}>
                <TimeOfDayPicker timeChange={this.handleTimeChange} message ="Time of trip"/>
                <DatePicker defaultDate={new Date()} onChange = {this.handleDateChange} hintText="Date of Trip"/>
                <Stations onChange = {this.handleOriginChange} message = "Origin Station" />
                <Stations onChange = {this.handleDestinationChange} message = "Destination Station"/>
                <div style = {styles.block}>
                    <Checkbox label="Round Trip?" onCheck = {this.handleRoundTripCheck} checked={this.state.roundTrip}/>
                </div>
                {returnDetails}
                   <Divider />
            </Paper>
            </div>
        );
    }
}

export default SearchPage;

