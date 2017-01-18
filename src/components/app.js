import React, { Component } from 'react';

import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center' id='header'>City Weather</h1>
        <SearchBar/>
        <WeatherList/>
      
      </div>
    );
  }
}
