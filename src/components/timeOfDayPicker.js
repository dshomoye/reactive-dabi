import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



class TimeOfDayPicker extends Component{
    state = {
        value : 1,
    };

    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.timeChange(value);
    }

    render() {
        return(
            <SelectField
          floatingLabelText={this.props.message}
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1}  key={1} primaryText="Anytime" />
          <MenuItem value={2} key={2} primaryText=" Morning" />
          <MenuItem value={3}  key={3} primaryText="Afternoon" />
          <MenuItem value={4} key={4} primaryText="Evening" />
            </SelectField>
        );
    }

}

export default TimeOfDayPicker;
