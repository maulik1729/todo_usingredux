import React from 'react';

const ClearCompleted = (props) => {
    if(!props.countOfCompleted)
        return null;
    return (
        <span className="clearcompleted" onClick={props.clearCompleted}>
            Clear Completed Task
        </span>
    );
}

export default ClearCompleted;