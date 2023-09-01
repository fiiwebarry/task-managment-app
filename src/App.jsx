import { useState } from 'react'
import './App.css'

function App() {
  

  const [todolist, setTodoList] =useState([]);
  const [newTask, setNewTask]=useState("");
  const [dueDate, setDueDate]=useState("");


  const onClickHandler=()=>{

    const task={
               id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1, 
               TaskName:newTask,
               Datedue:dueDate,
    };
    
    setTodoList([...todolist, task])
   };

  
   const deleteButton = (id) => {
    setTodoList(todolist.filter((task) => task.id !== id));
  };
  

   

  return (
    <> 
    <div className="todolist-tab-header">
      <div>
      <h2 className="text-header">TODOLIST</h2>
      <label htmlfor="task">ADD TASK</label>

      <input type="text" id="task" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
      
      <label htmlfor="">TASK DUE</label>
      <input type="date" onChange={(e)=>setDueDate(e.target.value)}/>
      <button onClick={onClickHandler}>ADD TASK</button>
      </div>
   
    </div>
       
       <div>

      {todolist.map((task)=>{

        // const {id,TaskName,Datedue}=task;
       return( 
       <div key={task.id}> 
        <h2>TASK</h2>
        <p>{task.TaskName}</p>
  
  <h2>DUE DATE</h2>
   <p>{task.Datedue}</p>
   <button type="button" onClick={()=>deleteButton(task.id)}>X</button> 
  </div>)


})}  
       </div>
       
        

       

    </>
  )
}

export default App


