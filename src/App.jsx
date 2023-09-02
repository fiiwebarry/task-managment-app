import icon from "/src/assets/Images/task-manager.avif";
import { useState } from 'react';
import './App.css';

function App() {


  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");


  const onClickHandler = () => {
    if (!newTask || !dueDate) {
      return
    }
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      TaskName: newTask,
      Datedue: dueDate,
    };

    setTodoList([...todolist, task])
    setNewTask("");
    setDueDate("");
  };


  const deleteButton = (id) => {
    setTodoList(todolist.filter((task) => task.id !== id));
  };




  return (
    <>
      <div className="task-management-tab container" >
        <div className="image-tab">
          <img className="icon-tab" src={icon} />
        </div>
        <div className="todolist-tab-header">
          <div>
            <h2 className="text-header">TASK <span>MANAGEMENT </span>APP</h2>

            <div className='box-layer'>
              <div className="new-task">
                <label htmlFor="task">ADD TASK:</label><br /><br />

                <input type="text" id="task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
              </div>

              <div className="task-due">
                <label htmlFor="duedate">TASK DUE DATE:</label><br /><br />
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              </div>

            </div>
            <div className="btn-tab">
              <button onClick={onClickHandler}>ADD TASK</button></div>

          </div>

        </div>

      </div><hr />

      <div className="task-layout">
        <div className='task-tab'>
          {todolist.map((task) => {

            // const {id,TaskName,Datedue}=task;
            return (
              <div className='header-tab' key={task.id}>
                <h2 className="font"><span>TASK:</span> {task.TaskName}</h2><br />

                <h2 className="font"><span>DUE DATE: </span>{task.Datedue}</h2><br />





                <button className="delete-btn" type="button" onClick={() => deleteButton(task.id)}>DELETE TASK</button>
              </div>)


          })}
        </div>

      </div>





    </>
  )
}

export default App


