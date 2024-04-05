import { useState } from 'react'
import './Input.css'

export function Input({setTasks}) {

    const [text, setText] = useState('')

    function handleAddTask(text) {
        setTasks(prev => [
          {
            _id: new Date(),
            taskText: text,
            isSolved:false
          },
          ...prev
        ])
        setText('')
      }

    return (
        <div className='input'>
            <input
            className='input__field'
            type='text'
            placeholder='We can do it!'
            required
            onChange={e => setText(e.target.value)}
            value={text}
            onKeyDown={e => e.key === 'Enter' && text && handleAddTask(text)}
            />
            <button
            className='input__button'
            onClick={() => text && handleAddTask(text)}>add task</button>
        </div>
    )
}