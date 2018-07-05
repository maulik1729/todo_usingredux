import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input.js';
import {addTask} from '../actions/index';


const mapDispatchToProps = (dispatch) => {
    return {
        addTask:(task)=>{
            dispatch(addTask(task));
        }
    }
}


const InputContainer = connect(
    null,
    mapDispatchToProps
)(Input);


export default InputContainer;