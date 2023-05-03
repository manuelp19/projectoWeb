import { createSlice } from '@reduxjs/toolkit'

export const platformSlice = createSlice({
  name: 'platforms',
  initialState: [],
  reducers: {
    addPlatform: (state, action) => { state.push(action.payload.platform) },
    removePlatform: (state, action) => state.filter((_, sI) => sI !== action.payload.index),
    savePlatform: (state, action) => state.map((s, sI) => sI === action.payload.index ? action.payload.platform : s)
  },
})

// Action creators are generated for each case reducer function
export const { addPlatform, removePlatform, savePlatform } = platformSlice.actions

export default platformSlice.reducer
