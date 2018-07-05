import React from 'react';
import { connect } from 'react-redux';
import ClearCompleted from '../components/ClearCompleted.js';
import {clearCompleted} from '../actions/index';


const getCountOfCompleted= (tasks) => {
    const curTasks=tasks;
    const countOfCompleted=curTasks.reduce((count,task)=> (task.isDone)?count+1:count , 0);
    return countOfCompleted;
}

const mapStateToProps = (state) => {
    return {
        countOfCompleted: getCountOfCompleted(state.tasks),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCompleted:()=>{
            dispatch(clearCompleted());
        }
    }
}


const ClearCompletedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClearCompleted);


export default ClearCompletedContainer;