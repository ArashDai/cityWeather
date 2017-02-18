import React, {Component} from 'react';
import { connect } from 'react-redux';

import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';


class WeatherDisplay extends Component {
    renderWeather(cityData){
        let imperial = true;
        const name  = cityData.city.name;
        const temps = cityData.list.map( weather => weather.main.temp )
        const { lon, lat } = cityData.city.coord;

        const fiveDay = () => {
            const list = cityData.list
            console.log('list',list,list.length/5)
            console.log('two',Math.floor((list.length-1)/5))
            let days = [];
            for(let i=Math.floor((list.length-1)/5);i<list.length;i+=Math.floor((list.length-1)/5)){
                days.push(list[i])
                console.log('fiveDay:',days)
            }
            return days;
        }
        
        const backgroundChooser = (props)=>{
            if(props === 'Clear')  return 'lightyellow' 
            if(props === 'Clouds') return 'lightgray'
            if(props === 'Rain')   return 'lightblue'
            if(props === 'Snow')   return 'white'
              return 'url(../assets/sunny.jpg)'
        }

        const toggle = () => {
            this.imperial===true?this.imperial=false:this.imperial=true;
        }

        const current = {
            imperial:   imperial,
            toggle:     toggle,
            background: backgroundChooser(cityData.list[0].weather[0].main),
            description:cityData.list[0].weather[0].description,
            icon:       cityData.list[0].weather[0].icon,
            temp:       cityData.list[0].main.temp,
            high:       cityData.list[0].main.temp_max,
            low:        cityData.list[0].main.temp_min,
            humidity:   cityData.list[0].main.humidity,
            clouds:     cityData.list[0].clouds.all,
            wind:       cityData.list[0].wind.speed,
            rain:       cityData.list[0].rain ? cityData.list[0].rain['3h']:undefined,
            snow:       cityData.list[0].snow ? cityData.list[0].snow['3h']:undefined,
            weather:    cityData.list[0].weather[0].description,
            main:       cityData.list[0].weather[0].main
        }



        return(
                <div key={name} className='container-fluid'>
                    <div className='col-xs-12 HeaderWrap text-center'>
                        <h2 className='mainHeaders'>{cityData.city.name}</h2>                   
                    </div>
                    <div className='row col-xs-12 City'>
                        <CurrentWeather  current={current}/>
                        <Forecast data={temps} fiveDay={fiveDay()}/>
                    </div>
                </div>
        )
    }

    render(){
        return(
            <div className='col-xs-12'>
                    {this.props.weather.map(this.renderWeather)}
            </div>
        )
    }

}


function mapStateToProps({weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherDisplay);