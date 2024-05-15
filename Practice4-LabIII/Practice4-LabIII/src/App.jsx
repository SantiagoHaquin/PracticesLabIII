import { useState } from "react";
import AddTask from "./components/addTask/AddTask"
import TaskList from "./components/taskList/TaskList"
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const taskComplet = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="App">
        <h1>Manejo de tareas</h1>
        <AddTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          taskComplet={taskComplet}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}

export default App;
