import React, { useState } from 'react'
import './TodoList.css'



function Todolist() {
   const [inputValue,setinputValue] = useState("")
   const [todos ,setTodos] = useState([])
    function handleInputChange (e){
     setinputValue(e.target.value);
     
    }
     const handleTodos = () =>{
       if(inputValue !== ""){
         const newTodos = {
          id:Date.now(),
          text:inputValue,
          completed:false,
         }
         setTodos([...todos ,newTodos])
          
       }
     }
      const handleToggleChange = (id) => {
   console.log(id)
     const updatedTodos = todos.map((todo)=>{
    if(todo.id === id){
      return{...todo,completed : !todo.completed}
    }
    return todo;
     })
     setTodos(updatedTodos);
      }

       const handleRemove = (id) =>{
           const filteredTodos = todos.filter((todo) =>todo.id !== id);
           console.log(filteredTodos)
           setTodos(filteredTodos)
       }
  return (
    <div>
      <div className='todo-container'>
      <h1>ToDo List</h1>
      <input type="text"  value={inputValue}  placeholder='Enter the text' onChange={handleInputChange} className='enterinp'/>
      <button onClick={handleTodos} className='inpbtn'>Add</button>
      <ul className='todo-list'>
         {
          todos.map((todo)=>{
            return <li className={`todo-item ${todo.completed === true ? "completed" :""}`}>
              <input type="checkbox"  onChange={() => handleToggleChange(todo.id)} className='checkboxhandle'/>
              <span key={todo.id} className='todo-text'>{todo.text}</span>
              <button onClick={()=>handleRemove(todo.id)}>Remove</button>
            </li>
          })
         }
      </ul>
      </div>
    </div>
  )
}

export default Todolist