import React, {Component}from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class Result extends Component {

    getItems(){
                const sItems = this.props.scheduleItems.map((item)=>
                <TableRow key={item.train_num} selected={item.selected}>
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
                <Paper>
                  <Table selectable={true} 
                  onRowSelection={this.props.onClick} >
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Train Number</TableHeaderColumn>
                        <TableHeaderColumn>Origin Departure Time </TableHeaderColumn>
                        <TableHeaderColumn>Destination Arrival Time </TableHeaderColumn>
                        <TableHeaderColumn>Fare</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody deselectOnClickaway={false}>
                    {this.getItems()}
                    </TableBody >
                </Table>
                </Paper>
                </div>
);
    }
}

export default Result;