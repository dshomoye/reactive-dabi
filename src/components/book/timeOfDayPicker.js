import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



class TimeOfDayPicker extends Component{
    state = {
        value : "Anytime",
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
          <MenuItem value="Anytime"  key={1} primaryText="Anytime" />
          <MenuItem value="Morning" key={2} primaryText=" Morning" />
          <MenuItem value="Afternoon"  key={3} primaryText="Afternoon" />
          <MenuItem value="Evening" key={4} primaryText="Evening" />
            </SelectField>
        );
    }

}

export default TimeOfDayPicker;
