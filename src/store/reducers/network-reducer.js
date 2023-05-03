import { createSlice } from '@reduxjs/toolkit'

export const networkSlice = createSlice({
  name: 'networks',
  initialState: [],
  reducers: {
    addNetwork: (state, action) => { state.push(action.payload.network) },
    removeNetwork: (state, action) => state.filter((_, sI) => sI !== action.payload.index),
    saveNetwork: (state, action) => state.map((s, sI) => sI === action.payload.index ? action.payload.network : s)
  },
})

// Action creators are generated for each case reducer function
export const { addNetwork, removeNetwork, saveNetwork } = networkSlice.actions

export default networkSlice.reducer
