import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    CLEAR_COMPLETED,
    COMPLETE_ALL_TASKS,
    TOGGLE_TASK, DROP_TASK
} from "../constants/ActionTypes";

const tasks=(state=[] ,action) => {
    switch (action.type)
    {
        case ADD_TASK:
            return [
                ...state,
                {
                    task:action.task,
                    isDone:false,
                    id:state.reduce((max,todo) => Math.max(max,todo.id) ,-1)+1
                }
            ]
        case DELETE_TASK:
            return state.filter((task) => task.id!=action.id)
        case EDIT_TASK:
            return state.map((t) => t.id!=action.id?t:{...t,task:action.task})
        case CLEAR_COMPLETED:
            return state.filter((task) => !task.isDone)
        case TOGGLE_TASK:
            return state.map((task) => task.id!=action.id?task:{...task,isDone:!task.isDone})
        case COMPLETE_ALL_TASKS:
            return state.map((task) => ({...task,isDone:true}))
        case DROP_TASK: {
            let index1 = state.findIndex((task) => task.id == action.id1);
            const task1=Object.assign({},state[index1]);
            const update=[...state.slice(0,index1),...state.slice(index1+1)];
            let index2= update.findIndex((task) => task.id == action.id2);
            if(index1<=index2) {
                return [...update.slice(0, index2+1), task1, ...update.slice(index2+1)];
            }else{
                return [...update.slice(0,index2),task1,...update.slice(index2)];
            }
        }
        default:
            return state
    }
}

export  default tasks;