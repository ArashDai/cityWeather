import React from 'react';


export default (props) => {

    const styles = {
       'backgroundColor': props.current.background,
    }

    return(
        <div className='col-xs-12 col-sm-3 text-center' id='CurrentWeather' style={styles}>
            <p className='col-xs-6'>{props.current.temp}</p>
            <p>{props.current.description}</p>
            <img className='col-xs-6' src={`http://openweathermap.org/img/w/${props.current.icon}.png`} />
            <p>Low: {props.current.low} High: {props.current.high}</p>
            <p>{props.current.humidity}% Humidity</p>
            <p>{props.current.clouds}% Cloudy</p>
            <p>Windspeed of {props.current.wind} mph</p>
            <p>{props.current.rain !==undefined?props.current.rain+'mm':''}</p>
            <p>{props.current.snow !==undefined?props.current.snow+'mm':''}</p>
        </div>
    )
}