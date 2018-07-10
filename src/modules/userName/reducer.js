import * as actionConstants from './actionConstants'

export default function userName(state={}, action){
    const {type} = action;
    switch(type){
        case actionConstants.SET_NAME:
            state.name = action.name;
            return Object.assign({}, state);
        default:
            return state;
    }
}