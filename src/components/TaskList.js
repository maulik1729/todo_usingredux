import React from 'react';
import Task from './Task.js';
import { Transition, animated } from 'react-spring'

const TaskList = (props) => {
    return (
         <ul className="tasklist"  onDragStart={this.handleDragStart} onDragEnter={this.handleDragEnter} draggable="true">
             <Transition
                 keys={props.tasks.map(task => task.id)}
                 from={{opacity:0,padding:0}}
                 enter={{opacity:1,padding:12}}
                 leave={{opacity:0,height:0,border:0,padding:0}}>
                 {
                     props.tasks.map( task => styles =>{
                        return (<Task task={task} key={task.id} {...props.actions} style={styles}/>);
                    })
                  }
             </Transition>
        </ul>
    );
}


export default TaskList;