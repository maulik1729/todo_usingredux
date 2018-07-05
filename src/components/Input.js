import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={value:""};
    }

    handleChange=(e)=>{
        this.setState({value:e.target.value});
    }

    handleInput=(e)=>{
        if(e.key!='Enter')
            return;
        if(e.target.value=='')
            return;
        this.props.addTask(e.target.value);
        this.setState({value:""});
    }

    render(){
        return (
            <input className="todo__taketask" type="text" onKeyDown={this.handleInput} onChange={this.handleChange} value={this.state.value} placeholder="Enter Task" autoComplete="off" required/>
        );
    }
}

export default Input;