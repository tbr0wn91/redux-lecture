import {createStore } from 'redux';

// set up initial State

const initialState ={
    user: {
        name: "josh",
        age: 31
    }
};

export const SET_STUDENT = "SET_STUDENT";

function reducer(state = initialState, action){
    switch(action.type){
        case SET_STUDENT:
            return {...state, user: action.payload };
        default:
            return state;
    }
}

export default createStore(reducer);