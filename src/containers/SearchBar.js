import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather,getLocation } from '../actions/index';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term:'' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentWillMount(){
        this.props.getLocation().then((value) => {
            console.log('value',value)
            this.props.fetchWeather(value.payload.data.city)
        })
        
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className='input-group' id='searchBar'>
                <input
                    placeholder='Search Cities'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    }

}

function mapDispatchToProps(dispatch){
   return bindActionCreators({fetchWeather,getLocation}, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);