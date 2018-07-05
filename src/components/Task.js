import React from 'react';

export default class Task extends React.Component {

    handleDelete=(e)=>{
        this.props.deleteTask(e.target.dataset.id);
    }
    handleToggle=(e)=>{
        this.props.toggleTask(e.target.dataset.id);
    }
    handleEditing=(e)=>{
        e.target.contentEditable=true;
    }
    handleSave=(e)=>{
        if(e.key!="Enter")
            return;
        this.props.editTask(e.target.dataset.id,e.target.textContent);
        e.target.contentEditable=false;
    }
    handleDragStart=(e)=>{
        e.dataTransfer.setData("id",e.target.dataset.id);
    }

    handleDragEnter=(e)=>{
        e.preventDefault();
    }

    handleDrop=(e)=>{
        e.preventDefault();
        const id1=e.dataTransfer.getData("id");
        const id2=e.target.dataset.id;
        if(id1!=id2)
            this.props.dropTask(id1,id2);
    }

    handleOnDragOver=(e)=>{
        e.preventDefault();
    }
    render()
    {
        const {props} =this;
        const linepresent = (props.task.isDone) ? "tasklist__text tasklist__text--checked" : "tasklist__text";
        return (
            <li style={props.style} className="tasklist__task" data-id={props.task.id}
                onDragOver={this.handleOnDragOver}
                onDrop={this.handleDrop}
                onDragStart={this.handleDragStart}
                onDragEnter={this.handleDragEnter}
                draggable="true">
                <span className="tasklist__item tasklist--done" data-id={props.task.id} onClick={this.handleToggle}>&#10004;</span>
                <span className={linepresent} data-id={props.task.id} onDoubleClick={this.handleEditing} onKeyPress={this.handleSave}>{props.task.task}</span>
                <span className="tasklist__item tasklist--remove" data-id={props.task.id} onClick={this.handleDelete}>X</span>
            </li>
        );
    }
}


