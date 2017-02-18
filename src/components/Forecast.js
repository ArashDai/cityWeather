import React from 'react';
import Chart from './Chart';

export default (props) => {
    console.log(props.fiveDay)
    return(
        <div className='col-xs-12 col-sm-9' id='forecast' >
            <div className='row' id='dayWrap'>
            { props.fiveDay.map((day)=>{
                    return(
                    <div key={day.dt} className='day text-center'>
                        <p>{day.main.temp}</p>
                        <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}/>
                    </div>
            )})}
            </div>
            <Chart color='lightblue' data={props.data} unit='°F' id='chart'/>
        </div>
    )
}