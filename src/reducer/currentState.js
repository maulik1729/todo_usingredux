import {SET_FILTER} from "../constants/ActionTypes";
import {ALL} from "../constants/Filter";

const currentState = (state = ALL,action) => {
    switch (action.type){
        case SET_FILTER:
            return action.currentState
        default:
            return state

    }

}

export default currentState;