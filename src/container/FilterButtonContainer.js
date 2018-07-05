import React from 'react';
import { connect } from 'react-redux';
import FilterButton from '../components/FilterButton.js';
import {setFilter} from '../actions/index';

const mapStateToProps = (state) =>{
    return {
        currentState:state.currentState
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFilter:(state)=>{
            dispatch(setFilter(state));
        }
    }
}

const FilterButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterButton);


export default FilterButtonContainer;