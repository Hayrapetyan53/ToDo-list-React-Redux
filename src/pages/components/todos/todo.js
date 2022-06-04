import {setAddTodo,setDeleteTodo,setCompleted,setDisabled,setEditValue,setDeleteTodoList} from "../../../redux/actions"
import {useState} from "react";
import {connect} from "react-redux";
import "../../../Styles/style.scss"


const Todo = (props)=>{

    //           Props and States
    
    const {todo,setAddTodo,setDeleteTodo,setCompleted,setDisabled,setEditValue,setDeleteTodoList} = props

    const [newValues,setNewValues] = useState({
        todo:"",
        completed:false,
        disabled:true
        
    })
  //           Functions

    const changeValues = (e)=>{
       setNewValues(prevState => {
           return {
               ...prevState,
               [e.target.name] : e.target.value
           }
       })
    }

    const addTodo = ()=>{
        setAddTodo(newValues.todo,newValues.completed,newValues.disabled)
        setNewValues({
            todo:"",
            completed:false,
            disabled:true
        })
    }

    return(
        <div className="container">
            <div className="add_todo">
                <label for="new-task">Add Item</label>
                <input onChange={changeValues} name='todo' id="new-task" value={newValues.todo} type="text"/>
                <button onClick={addTodo}>Add</button>
                <button onClick={()=>{setDeleteTodoList()}}>Clear</button>
            </div>
            <div><h3>TODO</h3></div>
            {todo?.map((item)=>{
                    const changeTodo = (e)=>{
                        setEditValue(item.id, e.target.value)
                    }
                    return(
                        <div>
                            {item ? item.completed === false &&                                
                            <div className="todos" key={item.id}>
                                <li>
                                    <input onClick={()=>{setCompleted(item.id)}} type="checkbox" checked={item.completed}  />
                                    <input onChange={changeTodo} value={item.todo} type="text" disabled={item.disabled}/>
                                    <div>
                                        <p className="edit buttons" onClick={()=>{setDisabled(item.id)}}>Edit</p>
                                        <p className="delete buttons" onClick={()=>{setDeleteTodo(item.id)}}>Delete</p>
                                    </div>
                                        
                                </li>
                            </div>: false}
                        </div>
                    )
                })
            }
            <div><h3>COMPLETED</h3></div>
            {todo?.map((item)=>{

                    const changeTodo = (e)=>{
                        setEditValue(item.id, e.target.value)
                    }
                    return(
                        <div> 
                            {item ? item.completed === true && 
                                <div key={item.id}>
                                <div className="todos">
                                    <li className="completed-tasks">
                                        <input onClick={()=>{setCompleted(item.id)}} type="checkbox" checked={item.completed}  />
                                        <input onChange={changeTodo} value={item.todo} type="text" disabled={item.disabled}/>
                                        <div>
                                            <p className="edit buttons" onClick={()=>{setDisabled(item.id)}}>Edit</p>
                                            <p className="delete buttons" onClick={()=>{setDeleteTodo(item.id)}}>Delete</p>
                                        </div>   
                                    </li>
                                </div>
                            </div> : null}
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        todo:state.todoState.todo
    }
}
export default connect(mapStateToProps,{setAddTodo,setDeleteTodo,setCompleted,setDisabled,setEditValue,setDeleteTodoList})(Todo)