import React, {Component} from 'react';
import axios from 'axios';
import AutoComplete from 'material-ui/AutoComplete';

class Stations extends Component{
    constructor(props){
        super(props);
        this.state={
            value : "Select Station",
            stations : [],
            stationCodes : [],
        }
    }

    componentDidMount() {
    axios.get(`http://dabi.dshomoye.me/stations`)
        .then((res) => {
            var stations = [];
            var codes = []
            var stationsArray = res.data;
            for (var i = 0; i < stationsArray.length; i++) {
                codes.push(stationsArray[i].station_code);
                stations.push(stationsArray[i].station_name);  
            }
            this.setState({
                stations : stations,
                stationCodes : codes
        });
    }).catch (e => {
        console.log(e);
    });

    }
      
    handleUpdate = (station,index) => {
        if(this.state.stations.includes(station)){
            this.setState({value:station});
            this.props.onChange(this.state.stationCodes[index]);
        }
        else {
            this.props.onChange(false);
        }
    }

    render() {
        return(
                <AutoComplete
                hintText={this.props.message}
                floatingLabelText ={this.props.message}
                dataSource={this.state.stations}
                onNewRequest = {this.handleUpdate}
                filter={AutoComplete.fuzzyFilter}
                errorText = {
                    !this.state.stations.includes(this.state.value)
                    && "Select Valid Station"
                }
                 />
        );
    }
  }

export default Stations;