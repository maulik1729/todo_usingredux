import * as types from '../constants/ActionTypes';

export const addTask = (task) => ({type:types.ADD_TASK,task})
export const deleteTask = (id) => ({type:types.DELETE_TASK,id})
export const editTask = (id,task) => ({type:types.EDIT_TASK,task,id})
export const toggleTask = (id) => ({type:types.TOGGLE_TASK,id})
export const completeAllTask = () => ({type:types.COMPLETE_ALL_TASKS})
export const clearCompleted = () => ({type:types.CLEAR_COMPLETED})
export const setFilter = (currentState) => ({type:types.SET_FILTER,currentState})
export const dropTask = (id1,id2)=>({type:types.DROP_TASK,id1,id2})