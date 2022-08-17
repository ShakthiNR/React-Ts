import React, { useState } from 'react'
interface Itodo{
    task:string;
    count:string;
    isCompleted?:boolean;
}

const InputElements = () => {
    const [todo,setTodo]=useState<Itodo>({task:"",count:"",isCompleted:false}) //singleTodo
    const [todos,setTodos] =useState<Itodo[]>([]) //arrayOfTodo
    
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>):void =>{
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        //add single todo to todos(array of object)
        setTodos([
            ...todos,
            {task:todo.task,
            count:todo.count,
            isCompleted:todo.isCompleted}
        ])
        //set default todo after submit
        setTodo({task:"",count:"",isCompleted:false}) 
    }
  return (
   <div className='inputForm'>

   <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} 
        placeholder="Enter Tasks"
        name='task' value={todo.task} /><br/>

        <input type="number" onChange={handleChange}
        placeholder='Enter Count' 
        name='count' value={todo.count} /> <br/>

        <button type="submit">Add</button>
  </form>

  <div >
    {todos?.map((todo)=>{
        return(
            <>
            taskName:&nbsp; {todo.task}  &emsp;
            count:&nbsp; {todo.count}
            <br/>
            </>
        )
    })}
  </div>
   </div>
  )
}

export default InputElements