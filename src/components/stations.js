import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class Stations extends Component{
    constructor(props){
        super(props);
        this.state={
            stations : ["Select Station"],
        }
    }


    //TODO app CORS to flask to allow this (dev only??)
      componentDidMount() {
        axios.get(`http://dabi.dshomoye.me/stations`)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                console.log(posts);
        });
      }
    
    render() {
        return(
            <SelectField floatingLabelText = "Select station">
                <MenuItem value={1} primaryText =  "1"/>
                </SelectField>
        );
    }
  }

export default Stations;