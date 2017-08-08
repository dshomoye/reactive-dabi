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
                    <h3>Confirm your trip from {this.props.tripinfo.origin} to 
                        {this.props.tripinfo.destination}.
                    </h3>
                    <Divider />
                    <p> Departure: {this.props.tripinfo.time_out} </p>
                    <Divider />
                    <p> Arrival: {this.props.tripinfo.arrival} </p>
                    <Divider />
                    <p> Fee : {this.props.tripinfo.fare}</p>
                    {rtI}
                </Paper>
            </div>
        )
    }
}

export default ReviewPage;
