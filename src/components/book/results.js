import React, {Component}from 'react';
import Result from './result_single';
import axios from 'axios';

class ResultPage extends Component {

    constructor(props){
        super(props);
        this.state={
            scheduleItems:[],
            returnScheduleItems : [],
            tripInfo: null,
            returnInfo: null,
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

    updateInfo = () => {
        console.log("valus checked")
        console.log(this.state.tripInfo)
        console.log(this.state.returnInfo)
        console.log(this.props.params.roundTrip)
        if(this.state.tripInfo != null){
            if((this.props.params.roundTrip && this.state.returnInfo)|| !this.props.params.roundTrip) {
                this.props.onClick(this.state.tripInfo,this.state.returnInfo)
            }
        }
    }

    handleClick = (index)=> {
        let i = this.state.scheduleItems
        i.map((item)=> item.selected = false)
        if(index.length===0){
            this.setState({
                tripInfo : null
            })
            this.props.onClick(false,false)
            return
        }
        i[index].selected = true;
        let t = this.state.scheduleItems[index]
        t.origin = this.props.params.originStation
        t.destination = this.props.params.destinationStation
        this.setState({
            tripInfo: t,
            scheduleItems : i
        },this.updateInfo)
        //this.props.onClick(t,this.state.returnInfo);
    }

    handleReturnClick = (index) => {
        let i = this.state.returnScheduleItems
        i.map((item)=> item.selected = false)
        if(index.length===0){
            this.setState({
                returnInfo : null
            })
            this.props.onClick(false,false)
            return
        }
        i[index].selected = true;
            let t = this.state.returnScheduleItems[index]
            t.origin = this.props.params.originStation
            t.destination = this.props.params.destinationStation
            this.setState({
                returnInfo : t,
                returnScheduleItems : i
            },this.updateInfo)
            //this.props.onClick(t,this.state.returnInfo);
    }

    render() {
        let returnSchedule = <br/>;

        if(this.props.params.roundTrip){
            returnSchedule = (<div> 
                <h6> Return Trip </h6>
                <Result scheduleItems = {this.state.returnScheduleItems} onClick={this.handleReturnClick}/> 
                </div>)
        }

        return (
            <div>
            <h6> Available trains from {this.props.params.originStation} to {this.props.params.destinationStation} on {this.props.params.date}</h6>
            <Result scheduleItems = {this.state.scheduleItems} params = {this.props.params} onClick={this.handleClick}/>
            {returnSchedule}
            </div>
);
    }
}

export default ResultPage;