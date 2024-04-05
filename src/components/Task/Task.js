import './Task.css'

export function Task({task, onSolveTask, onDeleteTask}) {
    return (
        <div className='task' >
            <p className={task.isSolved ? `task__text_solved` : `task__text`}>{task.taskText}</p>
            <div className='task__buttons'>
                <button className='task__button task__button_chocolate' onClick={() => onSolveTask(task._id)}>change status</button>
                <button className='task__button task__button_red' onClick={() => onDeleteTask(task._id)}>delete</button>
            </div>
        </div>
    )
}