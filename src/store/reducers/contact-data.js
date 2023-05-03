import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'contact',
  initialState: {
    name: '',
    email: '',
    phone: '',
    company: ''
  },
  reducers: {
    updateContactInfo: (state, action) => {
      Object.keys(action.payload).map(key => { state[key] = action.payload[key] })
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateContactInfo } = counterSlice.actions

export default counterSlice.reducer