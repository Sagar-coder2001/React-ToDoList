import React from 'react'
import { removeToDo } from '../Features/ToDoSlice'
import { useDispatch , useSelector } from 'react-redux'
import '../App.css';

const ToDo = () => {
    const list = useSelector((state) => state.todo.value)
    const dispatch = useDispatch();

  return (
    <div>
        <div className="todocontainer">
         {
        list.map((item, index) => {
          return(
            <>
            <li key={index}> {item.title}
            <i class="fa-solid fa-trash"onClick={() => {
               dispatch(removeToDo(index))
            }}></i></li>
            </>
          )
        })
      }
        </div>
    </div>
  )
}

export default ToDo
