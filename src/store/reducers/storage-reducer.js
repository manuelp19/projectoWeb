import { createSlice } from '@reduxjs/toolkit'

export const storageSlice = createSlice({
  name: 'storages',
  initialState: [],
  reducers: {
    addStorage: (state, action) => { state.push(action.payload.storage) },
    removeStorage: (state, action) => state.filter((_, sI) => sI !== action.payload.index),
    saveStorage: (state, action) => state.map((s, sI) => sI === action.payload.index ? action.payload.storage : s)
  },
})

// Action creators are generated for each case reducer function
export const { addStorage, removeStorage, saveStorage } = storageSlice.actions

export default storageSlice.reducer
