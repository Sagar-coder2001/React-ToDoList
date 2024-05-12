import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [   
],
}

export const todoslice = createSlice({
  name: 'Todo',
  initialState,

  reducers: {
    addToDo: (state , action ) => {
     
      state.value.push(action.payload)
    },
    removeToDo : (state , action ) => {
        state.value = state.value.filter((item , index) =>  index != action.payload )
    }
  },
})

// Action creators are generated for each case reducer function
export const {addToDo , removeToDo} = todoslice.actions

export default todoslice.reducer