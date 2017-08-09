import React,{Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class ConfirmPage extends Component {
    render(){
        return(
    <Card>
        <CardHeader
        title="Booking Completed"
        subtitle="Ticket for trip is 99" 
        actAsExpander={true}
        showExpandableButton={true}
        />
        <CardText expandable={true}>
            For trip from ... to .... 
            <br/> Departing at ...
            <br/> Arriving at ...
        </CardText>
        </Card>
        )
    }
}

export default ConfirmPage;