import React, {Component} from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';
import Map from '../components/Map';

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map( weather => weather.main.temp )
        const press = cityData.list.map( weather => weather.main.pressure )
        const hums  = cityData.list.map( weather => weather.main.humidity )
        const { lon, lat } = cityData.city.coord;

        return(
            <tr key={name}>
                <td><Map lon={lon} lat={lat}/></td>
                <td><Chart color='green' data={temps} unit='°F'/></td>
                <td><Chart color='blue' data={press} unit=' psi'/></td>
                <td><Chart color='black' data={hums} unit='%'/></td>
            </tr>
        )
    }

    render(){
        return(
            <table className='table table-hover col-xs-12'>
                <thead>
                    <tr>
                        <th className='text-center'>City</th>
                        <th className='text-center'>Temperature</th>
                        <th className='text-center'>Pressure</th>
                        <th className='text-center'>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            
            </table>
        )
    }

}


function mapStateToProps({weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);