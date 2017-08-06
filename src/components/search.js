import React, {Component} from 'react';
import TimeOfDayPicker from './timeOfDayPicker';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 200,
  },
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

    render() {
        console.log("time of day state in search " + this.state.timeOfDay);
        console.log("date chaged to :" + this.state.date);
        console.log("round trip set to " + this.state.roundTrip)
        //TODO checkbox needs to be centered!
        return (
            <div>
                <TimeOfDayPicker timeChange={this.handleTimeChange}/>
                <p> Pick Date of Trip </p>
                <DatePicker hintText = "Pick Date of Trip" defaultDate={new Date()} onChange = {this.handleDateChange}/>
                <div style = {styles.block}>
                    <Checkbox label="Round Trip?" onCheck = {this.handleRoundTripCheck} />
                </div>
            </div>
        );
    }
}

export default SearchPage;

//TODO create station picker container, station picker (selectField) component.
//container fetches stations from API
//round trip comp (radio), time of day (selectField)
//create date picker comp

