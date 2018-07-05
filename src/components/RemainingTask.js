import React from 'react';


const  RemainingTask = (props) => {
    return (
        <div className="footer">
            <span className="footer__remaining">RemainingTask: {props.countOfNotCompleted}</span>
            <span className="footer__mark" onClick={props.completeAllTask}>Mark All Task Complete</span>
        </div>
    );
}


export default RemainingTask;