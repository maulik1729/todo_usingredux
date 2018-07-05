import React from 'react';
import { connect } from 'react-redux'
import TaskList from '../components/TaskList.js';
import * as Actions from '../actions/index';
import {ALL,ACTIVE,COMPLETED} from '../constants/Filter';
import { bindActionCreators } from 'redux'


function getVisibleTask(tasks,currentState){
    switch (currentState){
        case ALL:
            return tasks;
        case ACTIVE:
            return tasks.filter((task)=>!task.isDone);
        case COMPLETED:
            return tasks.filter((task)=>task.isDone);
        default:
            return tasks;
    }

}

const mapStateToProps = (state) => {
    return {
        tasks:getVisibleTask(state.tasks,state.currentState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}


const ViewTaskList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TaskList);


export default ViewTaskList;