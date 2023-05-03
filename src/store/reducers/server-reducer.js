import { createSlice } from '@reduxjs/toolkit'

export const serverSlice = createSlice({
  name: 'servers',
  initialState: [],
  reducers: {
    addServer: (state, action) => { state.push(action.payload.server) },
    removeServer: (state, action) => state.filter((_, sI) => sI !== action.payload.index),
    saveServer: (state, action) => state.map((s, sI) => sI === action.payload.index ? action.payload.server : s)
  },
})

// Action creators are generated for each case reducer function
export const { addServer, removeServer, saveServer } = serverSlice.actions

export default serverSlice.reducer
