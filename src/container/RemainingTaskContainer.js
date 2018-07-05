import React from 'react';
import { connect } from 'react-redux';
import RemainingTask from '../components/RemainingTask.js';
import {completeAllTask} from '../actions/index';

const getCountOfNotCompleted= (tasks) => {
    const curTasks=tasks;
    const countOfCompleted=curTasks.reduce((count,task)=> (task.isDone)?count+1:count , 0);
    const countOfNotCompleted=curTasks.length-countOfCompleted;
    return countOfNotCompleted;
}


const mapDispatchToProps = (dispatch) => {
    return {
        completeAllTask:()=>{
            dispatch(completeAllTask());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        countOfNotCompleted: getCountOfNotCompleted(state.tasks)
    }
}

const RemainingTaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RemainingTask);


export default RemainingTaskContainer;