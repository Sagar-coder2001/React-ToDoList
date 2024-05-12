import React, { useState } from 'react'
import { addToDo } from '../Features/ToDoSlice';
import { useDispatch , useSelector } from 'react-redux';
import '../App.css';

const Forminput = () => {
    const [newtodo , setNewtodo] = useState()
    const dispatch = useDispatch();


    const formSubmit = (e) => {
        e.preventDefault()
        if(!newtodo){
          alert('please feild something')
        }
        else{
        dispatch(addToDo({
            title : newtodo
        }))
        setNewtodo('')
      }
    }
  return (
    <div>
      <div className="form-container">
        <form action="" onSubmit={formSubmit}>
            <input type="text" value={newtodo} placeholder='Enter Something' onChange={(e) => {
                    setNewtodo(e.target.value)
            }}/>
            <button type='submit'>Add</button>
        </form>
        </div>
    </div>
  )
}

export default Forminput
