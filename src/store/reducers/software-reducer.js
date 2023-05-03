import { createSlice } from '@reduxjs/toolkit'

export const softwareSlice = createSlice({
  name: 'softwares',
  initialState: [],
  reducers: {
    addSoftware: (state, action) => { state.push(action.payload.software) },
    removeSoftware: (state, action) => state.filter((_, sI) => sI !== action.payload.index),
    saveSoftware: (state, action) => state.map((s, sI) => sI === action.payload.index ? action.payload.software : s)
  },
})

// Action creators are generated for each case reducer function
export const { addSoftware, removeSoftware, saveSoftware } = softwareSlice.actions

export default softwareSlice.reducer
