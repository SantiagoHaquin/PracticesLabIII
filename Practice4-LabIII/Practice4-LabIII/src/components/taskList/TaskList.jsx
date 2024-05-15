import React from 'react';

const TaskList = ({ tasks, taskComplet, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'lightgray' : 'black' }}>
          {task.text}
          <button style={{margin:"5px"}} onClick={() => taskComplet(index)}>
            {task.completed ? 'Desmarcar' : 'Completar'}
          </button>
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;