import React, {Component} from 'react';


class CurrentWeather extends Component {
    constructor(props){
        super(props);
        this.state={
            imperial:true,
            styles:{'backgroundColor': props.current.background}
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle = () => {
        this.state.imperial===true ? this.setState({imperial:false}) : this.setState({imperial:true})
    }
    render(){
        return(
            <div className='col-xs-12 col-sm-3 text-center' id='CurrentWeather' style={this.state.styles}>
                
                <p className='col-xs-6'>
                        {this.state.imperial===true?
                        this.props.current.temp+' F':
                        Math.floor((this.props.current.temp-30)/2)+' C'}
                </p>
                <p>{this.props.current.description}</p>
                <img className='col-xs-6' src={`http://openweathermap.org/img/w/${this.props.current.icon}.png`} />
                <p>Low: {this.state.imperial===true?
                        this.props.current.low+' F':
                        Math.floor((this.props.current.low-30)/2)+' C'} 
                </p>        
                <p>High: {this.state.imperial===true?
                        this.props.current.high+' F':
                        (this.props.current.high-30)/2+' C'}</p>
                <p>{this.props.current.humidity}% Humidity</p>
                <p>{this.props.current.clouds}% Cloudy</p>
                <p>Windspeed of {this.props.current.wind} mph</p>
                <p>{this.props.current.rain !==undefined?this.props.current.rain+'mm':''}</p>
                <p>{this.props.current.snow !==undefined?this.props.current.snow+'mm':''}</p>
                <button id='toggle' className='btn btn-primary' onClick={this.toggle}>Change Units</button>
            </div>
        )
    }
}

export default CurrentWeather;