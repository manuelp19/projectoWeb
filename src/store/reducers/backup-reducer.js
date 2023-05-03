import { createSlice } from '@reduxjs/toolkit'

export const backupSlice = createSlice({
  name: 'backups',
  initialState: [],
  reducers: {
    addBackup: (state, action) => { state.push(action.payload.backup) },
    removeBackup: (state, action) => state.filter((_, sI) => sI !== action.payload.index),
    saveBackup: (state, action) => state.map((s, sI) => sI === action.payload.index ? action.payload.backup : s)
  },
})

// Action creators are generated for each case reducer function
export const { addBackup, removeBackup, saveBackup } = backupSlice.actions

export default backupSlice.reducer
