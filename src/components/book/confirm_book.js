import React,{Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class ConfirmPage extends Component {
    render(){
        let ret = null
        if(this.props.returnInfo!==null){
            ret = 
                <div>
                    <p>Return Trip info</p>
                    <p> Departure : {this.props.returnInfo.time_out} </p>
                    <p> Arrival: {this.props.returnInfo.arrival} </p>
                </div>
        }

        return(
    <Card>
        <CardHeader
        title="Booking Completed"
        subtitle="Ticket for trip is 99" 
        actAsExpander={true}
        showExpandableButton={true}
        />
        <CardText expandable={true}>
            <div>
            For trip from {this.props.tripInfo.origin}  to {this.props.tripInfo.destination} 
            <br/> Departing at {this.props.tripInfo.time_out}
            <br/> Arriving at {this.props.tripInfo.arrival}
            <br/>
            {ret}
            </div>
        </CardText>
        </Card>
        )
    }
}

export default ConfirmPage;