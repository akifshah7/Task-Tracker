import {useState} from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks,setTasks] = useState(
    [
        {
            id: 1,
            text:'Doctors Appoiontment',
            day:'6th Feb',
            reminder: true,
        },

        {
            
            id: 2,
            text:'Meeting at School',
            day:'7th Feb',
            reminder: true,

        },

        {
            
            id: 3,
            text:'Watering Plants',
            day:'8th Feb',
            reminder: true,
        },
    ]
)

//Add Task

const addTask = (task)=> {
  const id = Math.floor(Math.random() *1000)+1
  const newTask = {id,...task}
  setTasks([...tasks, newTask]) 
}

//Toggle Reminder
const toggleReminder=(id) => {
  setTasks(tasks.map((task)=> task.id===id ? {...task, reminder: !task.reminder} : task))
}

//Delete Task
const deleteTask = (id)=> {
   setTasks(tasks.filter((task)=> task.id !==id))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />      
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ?<Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder} />:'No Tasks to show'}
    </div>
    
  )
}

export default App;
