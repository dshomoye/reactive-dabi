import React, {Component} from 'react';
import TimeOfDayPicker from './timeOfDayPicker';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import Stations from './stations'
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
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
        timeOfDay : 1,
        date : defaultDate.toISOString().slice(0,10),
        roundTrip : false,
        originStation : null,
        destinationStation : null,
        returnTime : 1,
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
            {date: date.toISOString().slice(0,10) }
        );
    }

    handleRoundTripCheck= (e,checked) => {
        this.setState({
            roundTrip : checked
        })
    }

    handleOriginChange = (stationCode) => {
        this.setState({
            originStation : stationCode
        })
    }

    handleDestinationChange = (stationCode) => {
        this.setState({
            destinationStation : stationCode
        })
    }

    handleReturnTimeChange = (value) => {
        this.setState({
            returnTime : value
        })
    }

    handleReturnDateChange = (e,date) => {
        this.setState({
            returnDate : date.toISOString().slice(0,10)
        })
    }

    handleSearch = () => {
        if(this.state.originStation != null && this.state.destinationStation != null){
            this.props.onSearch(this.state)
        }
    }

    render() {
        console.log("time of day state in search " + this.state.timeOfDay);
        console.log("date chaged to :" + this.state.date);
        console.log("round trip set to " + this.state.roundTrip);
        console.log("origin station changed to " + this.state.originStation);
        //TODO checkbox needs to be centered!
        //TODO change the handle search. 
        //Pass the parameters to parent if both stations picked.
        //in App js, render the Next button (in stepper) if search parameters have been passed

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
                    <Checkbox label="Round Trip?" onCheck = {this.handleRoundTripCheck} />
                </div>
                {returnDetails}
                   <Divider />
                                   <div style = {styles.block}>
                    <RaisedButton backgroundColor="red" icon={<ActionSearch color="white" onClick={this.handleSearch}/>}/>
                    </div>
            </Paper>
            </div>
        );
    }
}

export default SearchPage;

