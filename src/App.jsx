import icon from "/src/assets/Images/task-manager.avif";
import { useReducer } from 'react';
import './App.css';



const defaultState = {

  todolist: [],
  newTask: "",
  dueDate: "",
};


const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {

    return { ...state, todolist: [], newTask: "", dueDate: "" }
  }
  if (action.type === DELETE_ITEM) {
    let newList = state.todolist.filter((task) => task.id !== action.payload.id);
    return { ...state, todolist: newList }

  }
  if (action.type === 'SET_NEW_TASK') {
    return { ...state, newTask: action.payload }
  }
  if (action.type === 'SET_DUE_DATE') {
    return { ...state, dueDate: action.payload }
  }
  if (action.type === ADD_TASK) {
    const task = {
      id: state.todolist.length === 0 ? 1 : state.todolist[state.todolist.length - 1].id + 1,
      TaskName: state.newTask,
      Datedue: state.dueDate,
    };
    return { ...state, todolist: [...state.todolist, task], newTask: "", dueDate: "" };
  }
  return state;
}
const ADD_TASK = "ADD_TASK";
const DELETE_ITEM = "DELETE_ITEM";
const CLEAR_LIST = "CLEAR_LIST";




function App() {

  const [state, dispatch] = useReducer(reducer, defaultState)


  const onClickHandler = () => {

    if (!state.newTask || !state.dueDate) {
      return
    }


    dispatch({ type: ADD_TASK });

  };

  const deleteButton = (id) => {

    dispatch({ type: DELETE_ITEM, payload: { id } })

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

                <input type="text" id="task" value={state.newTask} onChange={(e) => dispatch({ type: "SET_NEW_TASK", payload: e.target.value })} />
              </div>

              <div className="task-due">
                <label htmlFor="duedate">TASK DUE DATE:</label><br /><br />
                <input type="date" value={state.dueDate} onChange={(e) => dispatch({ type: 'SET_DUE_DATE', payload: e.target.value })} />
              </div>

            </div>
            <div className="btn-tab">
              <button onClick={onClickHandler}>ADD TASK</button></div>

          </div>

        </div>

      </div><hr />

      <div className="task-layout">
        <div className='task-tab'>
          {state.todolist.map((task) => {


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


