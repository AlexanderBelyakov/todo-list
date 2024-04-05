import './ToDoList.css'

import { Task } from '../Task/Task'

export function ToDoList({tasksList, onSolveTask, onDeleteTask}) {
    return (
        <ul className='todolist'>
            {tasksList && tasksList.map((task) => (
                <Task 
                key={task._id} 
                task={task}
                onSolveTask={onSolveTask}
                onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    )
}