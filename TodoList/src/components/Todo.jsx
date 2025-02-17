import React, { useState } from 'react'
function generateId() {
    return Math.floor(Math.random() * 1000);
  }

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const handleSubmit = () => {
        if(input.trim()){
            const newtod ={
                text:input,
                id: generateId()
            };
            setTodo([...todo,newtod])
            setInput("");
        }
    }
   
    const handleDelete = (id)=>{
        setTodo((todos) => todos.filter((t) => t.id !== id));
    }

    return (
        <>
            <h1>Todo List</h1>
            <input placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {todo.map((items) => (
                    <li key={items.id}>{items.text}<button onClick={()=>handleDelete(items.id)}>X</button></li>

                ))}
            </ul>
        </>
    )
}

export default Todo