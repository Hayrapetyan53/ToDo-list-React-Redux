import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, DISABLED_TODO, EDIT_TODO, DELETE_TODO_LIST} from "./action-types";


export const setAddTodo = (todo,completed,disabled)=>({type:ADD_TODO,todo,completed,disabled})
export const setDeleteTodo = (id)=>({type:DELETE_TODO,id})
export const setCompleted = (id)=>({type:TOGGLE_TODO,id})
export const setDisabled = (id)=>({type:DISABLED_TODO,id})
export const setEditValue = (id, newTodo)=>({type:EDIT_TODO,id,newTodo})
export const setDeleteTodoList = ()=>({type:DELETE_TODO_LIST})
