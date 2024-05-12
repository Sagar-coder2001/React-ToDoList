import { configureStore } from '@reduxjs/toolkit'
import todoslice from '../Features/ToDoSlice'

export const store = configureStore({
  reducer: {
    todo : todoslice
  },
})