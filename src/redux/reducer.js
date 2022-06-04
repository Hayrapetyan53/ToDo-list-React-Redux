import { v4 as uuidv4} from "uuid"
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, DISABLED_TODO, EDIT_TODO, DELETE_TODO_LIST} from "./action-types";

const initialState = {
    todo:[
        {
            id:uuidv4(),
            todo:"Pay Bills",
            completed:false,
            disabled:true
        },
        {
            id:uuidv4(),
            todo:"Go Shopping",
            completed:false,
            disabled:false
        },
        {
            id:uuidv4(),
            todo:"See the Doctor",
            completed:true,
            disabled:true
        }

    ]
}




const TodoReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_TODO :
            const todoObject = {
                id:uuidv4(),
                todo:action.todo,
                completed:action.completed,
                disabled:action.disabled
            }
            return {
                ...state,
                todo:[todoObject,...state.todo]
            }
        case DELETE_TODO :
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.id)
            }
        case TOGGLE_TODO :
            return{ 
                todo: state.todo.map((item)=>
                    item.id === action.id ? {...item, completed: !item.completed} : item)   
            }
        case DISABLED_TODO :
            return{
                todo: state.todo.map((item)=>
                    item.id === action.id ? {...item, disabled: !item.disabled} : item)   
            }
        case EDIT_TODO :
           return{
                todo: state.todo.map((item)=>
                    item.id === action.id ? {...item, todo:action.newTodo} : item )
                    
            }
        case DELETE_TODO_LIST :
            return{
                todo:[]
            }    
             
        default : return state
    }
}

export default TodoReducer