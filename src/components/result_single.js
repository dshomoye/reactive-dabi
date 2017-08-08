import React, {Component}from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Result extends Component {

    getItems(){
                const sItems = this.props.scheduleItems.map((item)=>
                <TableRow key={item.train_num}>
                <TableRowColumn>{item.train_num}</TableRowColumn>
                <TableRowColumn>{item.time_out}</TableRowColumn>
                <TableRowColumn>{item.arrival}</TableRowColumn>
                <TableRowColumn>${item.fare}.00</TableRowColumn>
                </TableRow>  
        );
        return sItems;
    }

    render() {
        return (
            <div>
                  <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Train Number</TableHeaderColumn>
                        <TableHeaderColumn>Origin Departure Time </TableHeaderColumn>
                        <TableHeaderColumn>Destination Arrival Time </TableHeaderColumn>
                        <TableHeaderColumn>Fare</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {this.getItems()}
                    </TableBody>
                </Table>
                </div>
);
    }
}

export default Result;