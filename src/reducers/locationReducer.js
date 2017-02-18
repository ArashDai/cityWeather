import {GET_LOCATION} from '../actions/index';

export default function (state = [], action){
    switch(action.type){
        case GET_LOCATION : return [action.payload.data].concat(state);
    }
    return state;
}