import React from 'react';
import Header from './Header.js';
import ViewTaskList from '../container/ViewTaskList';
import InputContainer from '../container/InputContainer.js';
import Filter from './Filter.js';
import RemainingTaskContainer from '../container/RemainingTaskContainer.js';
import ClearCompletedContainer from '../container/ClearCompletedContainer.js';


class ToDo extends React.Component{
    render(){
        return (
            <div className="todo">
                <Header heading="To Do List"/>
                <ViewTaskList/>
                <InputContainer/>
                <Filter/>
                <RemainingTaskContainer/>
                <ClearCompletedContainer/>
            </div>
        );
    }
}

export default ToDo;