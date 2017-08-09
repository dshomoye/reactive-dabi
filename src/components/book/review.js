import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

class ReviewPage extends Component{
    render(){
        let rtI = null;
        if(this.props.returnInfo!==null){
            rtI = <div>
                <Divider />
                <p>Return Trip info</p>
                <Divider />
                <p> Departure : {this.props.returnInfo.time_out} </p>
                <Divider />
                <p> Arrival: {this.props.returnInfo.arrival} </p>
            </div>
        }
        return(
            <div>
                <Paper>
                    <Divider />
                    <h3>Confirm your trip from {this.props.tripInfo.origin} to 
                        {this.props.tripInfo.destination}.
                    </h3>
                    <Divider />
                    <p> Departure: {this.props.tripInfo.time_out} </p>
                    <Divider />
                    <p> Arrival: {this.props.tripInfo.arrival} </p>
                    <Divider />
                    {rtI}
                    <Divider />
                    <p> Fee : ${this.props.tripInfo.fare}.00</p>
                    <Divider />
                </Paper>
            </div>
        )
    }
}

export default ReviewPage;
