import React, {Component}from 'react';
import Result from './result_single';
import axios from 'axios';

class ResultPage extends Component {

    constructor(props){
        super(props);
        this.state={
            scheduleItems:[],
            returnScheduleItems : []
        }
    }

    componentDidMount(){
        let origin = this.props.params.originStation;
        let dest = this.props.params.destinationStation;
        let time = this.props.params.timeOfDay;
        let date = this.props.params.date;
        let returnDate, returnTime = null;


        axios.get(`http://dabi.dshomoye.me/schedule`,{
            params : {
                start_station : origin,
                end_station : dest,
                trip_date : date,
                time_of_day : time
            }
        })
        .then((res)=> {
            var scheds = []
            var items = res.data;
            for (var i = 0; i < items.length; i++) {
                scheds.push(items[i])
            }

            this.setState({
                scheduleItems : scheds,
            });
            console.log("items stored :")
            console.log(this.state.scheduleItems)
        }).catch (e => {
            console.log(e);
        });
        //return trip
        if(this.props.params.roundTrip){
            returnTime = this.props.params.returnTime;
            returnDate = this.props.params.returnDate;
            axios.get(`http://dabi.dshomoye.me/schedule`,{
                params : {
                    start_station : dest,
                    end_station : origin,
                    trip_date : returnDate,
                    time_of_day : returnTime
                }
            })
            .then((res)=>{
                var s = []
                var items = res.data
                for(var i = 0; i < items.length; i++){
                    s.push(items[i])
                }
                this.setState({
                    returnScheduleItems : s
                })
            }).catch(e=>{
                console.log(e);
            })
        }
    }

    render() {
        let returnSchedule = <br/>;

        if(this.props.params.roundTrip){
            returnSchedule = (<div> 
                <h6> Return Trip </h6>
                <Result scheduleItems = {this.state.scheduleItems} /> 
                </div>)
        }

        return (
            <div>
            <h6> Available trains from {this.props.params.originStation}  
            to {this.props.params.destinationStation} on {this.props.params.date}</h6>
            <Result scheduleItems = {this.state.scheduleItems} params = {this.props.params}/>
            {returnSchedule}
            </div>
);
    }
}

export default ResultPage;